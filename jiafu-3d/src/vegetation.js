import * as T from 'three';

// Individual blades, petals and twigs are merged by material, rather than drawn as canopy balls.
export function createVegetation(a,mapData,heightAt=()=>.12){
 const {mat,mesh,obstacle}=a,batches=new Map();
 const foliage=['#506e3d','#698148','#819956'].map((c,i)=>mat('leaf-blade-'+i,c));
 const bambooLeaves=['#6d874a','#8b9e5e'].map((c,i)=>mat('bamboo-blade-'+i,c));
 const petals=['#e2aaa9','#efd0bf','#cb8a94'].map((c,i)=>mat('petal-blade-'+i,c));
 const bark=mat('branched-bark','#79644c'),bambooBark=mat('bamboo-culm','#829063'),nodeMat=mat('bamboo-node','#afb482'),centerMat=mat('flower-center','#bb9162');
 [...foliage,...bambooLeaves,...petals].forEach(m=>{m.side=T.DoubleSide;m.roughness=.95;});
 // Clip only foliage projected in front of the active room; the garden stays intact outside it.
 const focus={region:{value:new T.Vector4()},size:{value:new T.Vector2()},rotation:{value:new T.Vector2(1,0)}};
 for(const material of[...foliage,...bambooLeaves,...petals,bark,bambooBark,nodeMat,centerMat]){
  const previous=material.onBeforeCompile,cache=material.customProgramCacheKey.bind(material);
  material.onBeforeCompile=function(shader,renderer){previous.call(this,shader,renderer);Object.assign(shader.uniforms,{roomFocusRegion:focus.region,roomFocusSize:focus.size,roomFocusRotation:focus.rotation});
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vRoomFocusPosition;').replace('#include <project_vertex>','#include <project_vertex>\nvRoomFocusPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vRoomFocusPosition;\nuniform vec4 roomFocusRegion;\nuniform vec2 roomFocusSize;\nuniform vec2 roomFocusRotation;').replace('#include <clipping_planes_fragment>',`#include <clipping_planes_fragment>
    if (roomFocusRegion.w > 0.5 && vRoomFocusPosition.y > roomFocusRegion.y) {
     vec2 projected = vRoomFocusPosition.xz - vec2(48.0 / 57.0) * (vRoomFocusPosition.y - roomFocusRegion.y) - roomFocusRegion.xz;
     vec2 local = vec2(projected.x * roomFocusRotation.x - projected.y * roomFocusRotation.y, projected.x * roomFocusRotation.y + projected.y * roomFocusRotation.x);
     if (all(lessThan(abs(local), roomFocusSize))) discard;
    }`);
  };material.customProgramCacheKey=()=>cache()+'-interior-foliage-cutaway-v1';
 }
 function setRoomFocus(room){focus.region.value.set(room?.x||0,room?.base||0,room?.z||0,room?1:0);focus.size.value.set(room?room.w/2+.15:0,room?room.d/2+.15:0);focus.rotation.value.set(Math.cos(room?.rot||0),Math.sin(room?.rot||0));}
 const stats={trees:0,bambooClumps:0,leaves:0,flowers:0,shrubs:0};
 const v=(x,y,z)=>new T.Vector3(x,y,z),hash=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);};
 function triangle(material,a,b,c){let p=batches.get(material);if(!p){p=[];batches.set(material,p);}p.push(...a.toArray(),...b.toArray(),...c.toArray());}
 function basis(direction,roll=0){const axis=direction.clone().normalize(),reference=Math.abs(axis.y)>.92?v(1,0,0):v(0,1,0),side=new T.Vector3().crossVectors(axis,reference).normalize();side.applyAxisAngle(axis,roll);const normal=new T.Vector3().crossVectors(side,axis).normalize();return {axis,side,normal};}
 function leaf(origin,direction,length,width,material,roll=0){
  const {axis,side,normal}=basis(direction,roll),p=(u,s,h)=>origin.clone().addScaledVector(axis,u*length).addScaledVector(side,s*width).addScaledVector(normal,h*length);
  const base=p(0,0,0),left=p(.43,-1,.016),ridge=p(.46,0,.04),right=p(.43,1,.016),tip=p(1,0,.025);
  triangle(material,base,left,ridge);triangle(material,left,tip,ridge);triangle(material,tip,right,ridge);triangle(material,right,base,ridge);stats.leaves++;
 }
 function flower(origin,radius,seed=0,normal=v(.2,1,.25)){
  const frame=basis(normal),u=frame.side,w=frame.normal,up=normal.clone().normalize();
  for(let petal=0;petal<5;petal++){
   const angle=petal*Math.PI*2/5+seed,radial=u.clone().multiplyScalar(Math.cos(angle)).addScaledVector(w,Math.sin(angle)),across=new T.Vector3().crossVectors(up,radial).normalize(),base=origin.clone().addScaledVector(radial,radius*.12),m=petals[(petal+Math.floor(seed*5))%3];
   let previous=base;
   for(let j=0;j<=6;j++){const t=-Math.PI/2+j/6*Math.PI,point=origin.clone().addScaledVector(radial,radius*(.46+.54*Math.cos(t))).addScaledVector(across,Math.sin(t)*radius*.4).addScaledVector(up,Math.cos(t)*radius*.12);if(j)triangle(m,base,previous,point);previous=point;}
  }
  const p0=origin.clone().addScaledVector(up,radius*.05);
  for(let i=0;i<6;i++){const t=i*Math.PI/3,tt=(i+1)*Math.PI/3;triangle(centerMat,p0,p0.clone().addScaledVector(u,Math.cos(t)*radius*.18).addScaledVector(w,Math.sin(t)*radius*.18),p0.clone().addScaledVector(u,Math.cos(tt)*radius*.18).addScaledVector(w,Math.sin(tt)*radius*.18));}
  stats.flowers++;
 }
 function branch(points,radius,material=bark){const curve=new T.CatmullRomCurve3(points),geo=new T.TubeGeometry(curve,radius<.025?2:Math.max(2,points.length*2),radius,radius<.025?4:6,false);mesh(geo,material,0,0,0);}
 function tree(x,z,{size=1,pink=false,willow=false,pine=false}={}){
  const seed=x*4.1+z*8.3,origin=v(x,heightAt(x,z),z),P=(dx,y,dz)=>origin.clone().add(v(dx,y,dz).multiplyScalar(size));
  branch([P(0,0,0),P(.08,.9,.02),P(-.12,1.7,-.07),P(.05,2.8,0)],.115*size);
  const arms=willow?7:6;
  for(let arm=0;arm<arms;arm++){
   const angle=arm*Math.PI*2/arms+hash(seed)*2,start=P(-.06,1.35+arm*.12,0),middle=P(Math.cos(angle)*.7,2.2+hash(arm+seed)*.35,Math.sin(angle)*.7),end=P(Math.cos(angle)*1.5,2.65+hash(arm*9+seed)*.6,Math.sin(angle)*1.5);
   branch([start,middle,end],.045*size);
   for(let twig=0;twig<3;twig++){
    const t=.35+twig*.25,root=middle.clone().lerp(end,t),aa=angle+(twig%2?1:-1)*(.45+hash(twig+seed)*.45),tip=root.clone().add(v(Math.cos(aa)*.72,.2+hash(twig*11+seed)*.34,Math.sin(aa)*.72).multiplyScalar(size));
    branch([root,root.clone().lerp(tip,.55).add(v(0,.08*size,0)),tip],.014*size);
    if(willow){
     for(let s=0;s<3;s++){const a0=aa+(s-1)*.3,base=tip.clone().add(v(Math.cos(a0)*s*.17,0,Math.sin(a0)*s*.17).multiplyScalar(size)),bottom=base.clone().add(v(Math.cos(a0)*.14,-(1.1+hash(s+seed)*.8),Math.sin(a0)*.14).multiplyScalar(size));branch([base,base.clone().lerp(bottom,.5).add(v(.1*size,0,0)),bottom],.008*size);
      for(let j=0;j<9;j++){const pos=base.clone().lerp(bottom,j/9);for(const side of[-1,1])leaf(pos,v(Math.cos(a0+side*.65)*.7,-.4,Math.sin(a0+side*.65)*.7),.32*size,.034*size,foliage[(j+s)%3],side*.3);}}
    }else if(pink){
     for(let j=0;j<15;j++){const t=j/14,pos=root.clone().lerp(tip,t),angle2=j*2.4+aa,pos2=pos.clone().add(v(Math.cos(angle2)*.19,Math.sin(j*1.7)*.12,Math.sin(angle2)*.19).multiplyScalar(size));flower(pos2,(.125+hash(seed+j)*.06)*size,j*.17,v(Math.cos(angle2)*.45,1,Math.sin(angle2)*.45));if(j%4===0)leaf(pos,v(Math.cos(angle2),.15,Math.sin(angle2)),.32*size,.045*size,foliage[1]);}
    }else{
     const count=pine?38:42;for(let j=0;j<count;j++){const ang=j*2.399+arm,rr=Math.sqrt(hash(j*7+seed+twig))*(pine?.58:.65)*size,pos=root.clone().lerp(tip,.25+hash(j*13+seed)*.85).add(v(Math.cos(ang)*rr,(hash(j*3+seed)-.35)*.85*size,Math.sin(ang)*rr));leaf(pos,v(Math.cos(ang),.05+hash(j+seed)*.5,Math.sin(ang)),(pine?.38:.4)*size,(pine?.034:.135)*size,foliage[(j+twig)%3],(hash(j*6+seed)-.5)*1.1);}
    }
   }
  }
  a.contactShadow(x,z,4.5*size,3.8*size,heightAt(x,z)+.025);obstacle(x,z,.55,.55,'tree');mapData.trees.push({x,z,r:size});stats.trees++;
 }
 function bamboo(x,z,n=5){
  for(let cane=0;cane<n;cane++){
   const angle=cane*2.4,dx=Math.cos(angle)*.65,dz=Math.sin(angle)*.65,h=3.3+hash(cane+x)*1.3,bend=.18+hash(z+cane)*.2,base=v(x+dx,heightAt(x,z),z+dz),tip=base.clone().add(v(Math.cos(angle)*bend,h,Math.sin(angle)*bend));
   branch([base,base.clone().lerp(tip,.6),tip],.04,bambooBark);
   for(let j=1;j<9;j++){const t=j/9,pos=base.clone().lerp(tip,t);const ring=new T.TorusGeometry(.043,.009,4,8);ring.rotateX(Math.PI/2);mesh(ring,nodeMat,...pos.toArray());if(j<4)continue;
    const aa=angle+(j%2?1:-1)*.8,twigEnd=pos.clone().add(v(Math.cos(aa)*(.6+j*.025),.15,Math.sin(aa)*(.6+j*.025)));branch([pos,twigEnd],.012,bambooBark);
    for(let k=0;k<7;k++){const p=pos.clone().lerp(twigEnd,(k+.5)/7),s=k%2?1:-1;leaf(p,v(Math.cos(aa+s*.65),.05-k*.025,Math.sin(aa+s*.65)),.42+hash(cane+j+k)*.2,.035+hash(k+x)*.015,bambooLeaves[k%2],s*.25);}
   }
  }
  a.contactShadow(x,z,3,2.8,heightAt(x,z)+.025);obstacle(x,z,1.5,1.3,'bamboo');mapData.trees.push({x,z,r:.8});stats.bambooClumps++;
 }
 function shrub(x,z,size=.7,pink=false,ground=heightAt(x,z)){
  for(let stem=0;stem<9;stem++){const aa=stem*2.399,rr=Math.sqrt(hash(stem+x+z))*.45*size,base=v(x+Math.cos(aa)*rr,ground+.05,z+Math.sin(aa)*rr),tip=base.clone().add(v(Math.cos(aa)*size*.3,size*(.55+hash(stem+z)*.4),Math.sin(aa)*size*.3));branch([base,tip],.008);
   for(let j=0;j<8;j++){const p=base.clone().lerp(tip,(j+2)/10),ang=aa+j*2.4;leaf(p,v(Math.cos(ang),.25,Math.sin(ang)),.35*size,.105*size,foliage[(j+stem)%3],.2);}
   if(pink&&stem%2===0)flower(tip,.12*size,aa);
  }stats.shrubs++;
 }
 function finish(){for(const[material,positions]of batches){const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.computeVertexNormals();mesh(geo,material,0,0,0);}return stats;}
 return {tree,bamboo,shrub,finish,stats,setRoomFocus};
}
