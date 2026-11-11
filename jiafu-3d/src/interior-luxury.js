import * as T from 'three';

export const atlasPath='/assets/interiors-v8/luxury-atlas.png';
export function prepareLuxuryMaterials(a){
 const regions={silk:[.004,.004,.325,.492],rosecloth:[.337,.004,.325,.492],quilt:[.671,.004,.325,.492],cushion:[.337,.004,.325,.492],'screen-art':[.004,.504,.992,.492]};
 const colors={gilding:'#bd9557',cobalt:'#35566e',lacquer:'#79392e','screen-art':'#3c3126','lamp-paper':'#ead8b5'};
 for(const[k,c]of Object.entries(colors))a.mat('interior-'+k,c);
 for(const[k,region]of Object.entries(regions)){const m=a.mats['interior-'+k];m.userData.atlasRegion=region;m.userData.interiorAtlas=true;m.side=T.DoubleSide;m.roughness=.72;}
 a.mats['interior-porcelain'].roughness=.24;a.mats['interior-ceramic'].roughness=.3;
 a.mats['interior-brass'].metalness=.38;a.mats['interior-brass'].roughness=.4;
 a.mats['interior-gilding'].metalness=.22;a.mats['interior-gilding'].roughness=.48;
 const lamp=a.mats['interior-lamp-paper'];lamp.emissive.set('#b98340');lamp.emissiveIntensity=.16;
 let ready=Promise.resolve(true);
 if(typeof window!=='undefined'){
  ready=new Promise((resolve,reject)=>{
   const atlas=new T.TextureLoader().load(atlasPath,()=>resolve(true),undefined,()=>reject(new Error('Interior texture atlas could not load')));
   atlas.colorSpace=T.SRGBColorSpace;atlas.anisotropy=4;atlas.name='Jiafu_Luxury_Atlas_V8';
   for(const name of Object.keys(regions)){const m=a.mats['interior-'+name];m.color.set('#ffffff');m.map=atlas;}
  });
 }
 return {ready,regions};
}

export function createOrnaments({B,G,L,C,room}){
 let count=0;
 function curve(points,r=.02,m='gilding'){
  const path=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
  G(new T.TubeGeometry(path,Math.max(8,points.length*3),r,5,false),0,0,0,1,1,1,m);count++;
 }
 function flower(x,y,z,r=.1,m='gilding',ry=0){
  const shape=new T.Shape();for(let i=0;i<=40;i++){const t=i/40*Math.PI*2,rr=r*(.77+.23*Math.cos(t*5)),px=Math.cos(t)*rr,py=Math.sin(t)*rr;i?shape.lineTo(px,py):shape.moveTo(px,py);}shape.closePath();
  G(new T.ExtrudeGeometry(shape,{depth:.018,bevelEnabled:true,bevelSegments:1,bevelSize:.006,bevelThickness:.005,steps:1}),x,y,z,1,1,1,m,ry);count++;
 }
 function scrollwork(x,y,z,w,h=.24,m='gilding'){
  if(w<.2)return;
  flower(x,y,z,Math.min(w*.07,h*.32),m);
  for(const side of[-1,1]){
   curve([[x+side*w*.05,y-h*.1,z],[x+side*w*.25,y-h*.3,z],[x+side*w*.43,y+h*.1,z],[x+side*w*.28,y+h*.36,z],[x+side*w*.18,y+h*.08,z]],Math.min(.018,w*.012),m);
   flower(x+side*w*.34,y+h*.07,z,Math.min(w*.035,h*.21),m);
  }
 }
 function border(x,y,z,w,h,m='gilding'){
  for(const side of[-1,1]){B(x+side*w/2,y,z,.026,h,.035,m);B(x,y+side*h/2,z,w,.026,.035,m);}
 }
 function lattice(x,y,z,w,h,{m='darkwood',gold=true}={}){
  border(x,y,z,w,h,m);const nx=Math.max(2,Math.floor(w/.28)),ny=Math.max(1,Math.floor(h/.3));
  for(let i=1;i<nx;i++)B(x-w/2+i*w/nx,y,z,.026,h,.03,m);
  for(let j=1;j<ny;j++)B(x,y-h/2+j*h/ny,z,w,.026,.03,m);
  if(gold)for(const side of[-1,1])flower(x+side*w*.42,y,z+.025,Math.min(.08,h*.22));
 }
 function apron(x,y,z,w,h=.27){
  const shape=new T.Shape();shape.moveTo(-w/2,h/2);shape.lineTo(w/2,h/2);shape.lineTo(w/2,-h*.13);shape.bezierCurveTo(w*.25,-h*.07,w*.32,-h*.5,0,-h*.5);shape.bezierCurveTo(-w*.32,-h*.5,-w*.25,-h*.07,-w/2,-h*.13);shape.closePath();
  G(new T.ExtrudeGeometry(shape,{depth:.055,bevelEnabled:false}),x,y,z,1,1,1,'darkwood');scrollwork(x,y,z+.06,w*.85,h*.7);
 }
 function mural(x,y,z,w,h){
  G(new T.PlaneGeometry(w,h),x,y,z,1,1,1,'screen-art');border(x,y,z+.025,w+.12,h+.12,'darkwood');border(x,y,z+.055,w-.04,h-.04);
  for(const side of[-1,1])scrollwork(x,y+side*(h/2+.12),z+.06,w*.9,.18);
  for(let i=0;i<5;i++)flower(x+(i-2)*w*.2,y+h/2+.15+(.15-Math.abs(i-2)*.04),z+.06,.09);
 }
 function curtain(x,y,z,w,h,m='rosecloth',ry=0){
  const p=[],uv=[],idx=[],nx=16,ny=8;
  for(let j=0;j<=ny;j++)for(let i=0;i<=nx;i++){const u=i/nx,v=j/ny,gather=.76+.24*Math.abs(v-.48)*2;p.push((u-.5)*w*gather,(v-.5)*h,Math.cos(u*Math.PI*10)*.045);uv.push(u,v);}
  for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const k=j*(nx+1)+i;idx.push(k,k+1,k+nx+1,k+1,k+nx+2,k+nx+1);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();G(g,x,y,z,1,1,1,m,ry);
  B(x,y-h*.02,z+.06,w*.8,.035,.025,'gilding',ry);G(new T.CylinderGeometry(.025,.04,.17,6),x+w*.18,y-h*.15,z+.08,1,1,1,'gilding');count++;
 }
 function canopy(x,z,w,d,y=2.65){
  for(const side of[-1,1]){
   B(x,y,z+side*d/2,w+.14,.11,.12,'darkwood');B(x+side*w/2,y,z,.12,.11,d+.14,'darkwood');
   lattice(x,y-.22,z+side*d/2,w,.32);curtain(x+side*(w/2-.12),y-.78,z+d/2,.43,1.45,'rosecloth');
  }
  for(let xx=-w/2+.22;xx<w/2;xx+=.3)B(x+xx,y+.025,z,.025,.04,d,'darkwood');
  for(let zz=-d/2+.2;zz<d/2;zz+=.3)B(x,y+.05,z+zz,w,.04,.025,'darkwood');
 }
 function porcelainPattern(x,y,z,h){
  for(const [yy,rr]of[[.12,.2],[.68,.22],[.94,.12]])G(new T.TorusGeometry(rr*h,.012*h,5,20).rotateX(Math.PI/2),x,y+yy*h,z,1,1,1,'cobalt');
  for(let k=0;k<5;k++){const a=k*Math.PI*2/5,r=.29*h,cx=x+Math.sin(a)*r,cz=z+Math.cos(a)*r;
   for(let petal=0;petal<5;petal++){const t=petal*Math.PI*2/5,dx=Math.cos(t)*.052*h;G(new T.CircleGeometry(.032*h,8),cx+Math.cos(a)*dx,y+(.42+Math.sin(t)*.06)*h,cz-Math.sin(a)*dx,1,1,1,'cobalt',a);}
  }count++;
 }
 function windowDrapes(){
  const w=room.w,d=room.d,top=room.style==='hall'?3.6:room.style==='study'?2.45:1.88,h=room.style==='hall'?2.1:1.2;
  for(const side of[-1,1])curtain(-w/2+.23,top-h/2,side*d*.24,.42,h,room.style==='bedroom'?'rosecloth':'silk',Math.PI/2);
  B(-w/2+.24,top,0,.12,.13,d*.63,'darkwood');
 }
 function cornice(){
  const top=room.style==='hall'?3.92:room.style==='study'?2.5:room.style==='bedroom'?2.32:room.style==='sewing'?2.16:room.style==='tea'?2.08:1.62;
  B(0,top,-room.d/2+.24,room.w-.35,.16,.16,'darkwood');
  for(let x=-room.w/2+.7;x<room.w/2-.5;x+=1.15)scrollwork(x,top-.17,-room.d/2+.34,.95,.24,'woodinlay');
  for(const side of[-1,1])curve([[side*(room.w/2-.35),top-.68,-room.d/2+.34],[side*(room.w/2-.6),top-.35,-room.d/2+.34],[side*(room.w/2-1.2),top-.12,-room.d/2+.34]],.045,'darkwood');
 }
 function keyRack(x,y,z){
  B(x,y,z,1.05,.06,.12,'darkwood');for(let i=0;i<5;i++){const xx=x+(i-2)*.19;G(new T.TorusGeometry(.038,.012,4,12),xx,y-.07,z+.05,1,1,1,'brass');B(xx,y-.24,z+.05,.1,.27,.035,'woodinlay');B(xx,y-.24,z+.074,.02,.13,.006,'ink');}
 }
 return {curve,flower,scrollwork,border,lattice,apron,mural,curtain,canopy,porcelainPattern,windowDrapes,cornice,keyRack,get count(){return count;}};
}
