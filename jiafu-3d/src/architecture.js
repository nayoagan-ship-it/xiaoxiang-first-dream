import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {heritageSurface,contactShadowGeometry} from './surface-style.js';

// Shared, batched geometry keeps a densely planted miniature affordable to draw.
export function createArchitecture(root,solid,roofs){
 const mats={},buckets=new Map(),temp=new T.Object3D();
 function mat(key,color,roughness=.9){if(mats[key])return mats[key];const m=new T.MeshStandardMaterial({color,roughness});m.name=key;const kind=/wood|bark|branched/.test(key)?'wood':/roof|rib/.test(key)?'roof':/stone|pave|rock|taihu|marble|ivory/.test(key)?'mineral':null;if(kind){m.userData.heritageKind=kind;heritageSurface(m,kind);}mats[key]=m;return m;}
 function cloneMaterial(source){const m=source.clone();if(source.userData.heritageKind)heritageSurface(m,source.userData.heritageKind);return m;}
 for(const [k,v]of Object.entries({ivory:'#eee1c8',stone:'#c5beaa',jade:'#416d59',wood:'#78432c',red:'#9e5439',roof:'#3d705d',rib:'#62846b',gold:'#c4a16a',grass:'#879569',soil:'#8b7e5e'}))mat(k,v);
 const cube=new T.BoxGeometry(1,1,1),cyl=new T.CylinderGeometry(1,1,1,8),ball=new T.IcosahedronGeometry(1,1);
 const shadowGeometry=contactShadowGeometry(),shadowMaterial=new T.MeshBasicMaterial({color:'#ffffff',vertexColors:true,transparent:true,depthWrite:false,side:T.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1});shadowMaterial.userData.contactShadow=true;
 const contactShadow=(x,z,w,d,y=.14)=>mesh(shadowGeometry,shadowMaterial,x,y,z,w/2,1,d/2);
 function mesh(geo,material,x,y,z,sx=1,sy=1,sz=1,ry=0,parent){
  temp.position.set(x,y,z);temp.rotation.set(0,ry,0);temp.scale.set(sx,sy,sz);temp.updateMatrix();
  if(parent){const o=new T.Mesh(geo,material);o.applyMatrix4(temp.matrix);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
  if(!buckets.has(material.uuid))buckets.set(material.uuid,{material,geos:[]});
  const geometry=(geo.index?geo.toNonIndexed():geo.clone()).applyMatrix4(temp.matrix),atlas=material.userData.atlasRegion;
  if(atlas&&geometry.attributes.uv){const uv=geometry.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,atlas[0]+uv.getX(i)*atlas[2],atlas[1]+uv.getY(i)*atlas[3]);}
  buckets.get(material.uuid).geos.push(geometry);
 }
 const box=(x,y,z,w,h,d,m='ivory',ry=0,parent)=>mesh(cube,typeof m==='string'?mats[m]:m,x,y,z,w,h,d,ry,parent);
 function beam(a,b,w,m='wood',parent){const aa=new T.Vector3(...a),bb=new T.Vector3(...b),dir=bb.clone().sub(aa);const geo=new T.BoxGeometry(w,dir.length(),w);geo.applyQuaternion(new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),dir.normalize()));return mesh(geo,typeof m==='string'?mats[m]:m,...aa.add(bb).multiplyScalar(.5).toArray(),1,1,1,0,parent);}
 function obstacle(x,z,w,d,id=''){const o={x,z,w,d,id,enabled:true};solid.push(o);return o;}
 function compact(group){const batches=new Map();for(const o of group.children){if(!o.isMesh)continue;o.updateMatrix();const key=o.material.uuid;if(!batches.has(key))batches.set(key,{material:cloneMaterial(o.material),geos:[]});batches.get(key).geos.push((o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix));}group.clear();for(const entry of batches.values()){entry.material.transparent=true;const m=new T.Mesh(mergeGeometries(entry.geos,false),entry.material);m.castShadow=true;m.receiveShadow=true;group.add(m);entry.geos.forEach(g=>g.dispose());}return [...batches.values()].map(e=>e.material);}
 function fader(group,rect){roofs.push({group,rect,materials:compact(group)});return group;}
 function wall(x,z,w,d,{height=1.9,base=.12,collide=true,material='ivory',parent}={}){
  box(x,base+height/2,z,w,height,d,material,0,parent);box(x,base+height+.06,z,w+.12,.12,d+.15,'roof',0,parent);box(x,base+.18,z,w,.34,d+.1,'stone',0,parent);
  if(collide)obstacle(x,z,w,d);
  if(!parent)contactShadow(x,z,w+.9,d+.9,base+.035);
 }
 function wallGaps(axis,pos,start,end,gaps,options={}){let cursor=start;for(const[a,b]of [...gaps,[end,end]]){if(a>cursor)axis==='x'?wall(pos,(a+cursor)/2,.32,a-cursor,options):wall((a+cursor)/2,pos,a-cursor,.32,options);cursor=b;}}
 function paving(x,z,w,d,{y=.12,tile=1.5,edge=true}={}){
  box(x,y-.12,z,w,.2,d,'stone');for(let xx=x-w/2+tile/2;xx<x+w/2;xx+=tile)for(let zz=z-d/2+tile/2;zz<z+d/2;zz+=tile){const shade=((Math.floor(xx*5+zz*3)%3)+3)%3;box(xx,y-.005,zz,Math.min(tile-.045,x+w/2-xx+tile/2),.045,Math.min(tile-.045,z+d/2-zz+tile/2),mat('pave'+shade,['#d7ceba','#dcd3bd','#cdc7b1'][shade]));}
  if(edge){for(const s of[-1,1]){box(x,y+.015,z+s*d/2,w+.18,.07,.14,'stone');box(x+s*w/2,y+.015,z,.14,.07,d,'stone');}}
 }
 function path(points,width=2.2,y=.13){for(let i=1;i<points.length;i++){const[a,b]=[points[i-1],points[i]],dx=b[0]-a[0],dz=b[1]-a[1],length=Math.hypot(dx,dz),n=Math.ceil(length/1.3);for(let j=0;j<n;j++){const t=(j+.5)/n,x=a[0]+dx*t,z=a[1]+dz*t,yy=typeof y==='function'?y(x,z):y;box(x,yy-.02,z,width,.08,length/n-.04,'stone',Math.atan2(dx,dz));}}}
 // Four curved roof slopes meet at a ridge; raised corners and fine battens read at an aerial scale.
 function roofPoint(face,u,t,w,d,h){const rw=w*.3,ends=[[-rw,0,rw,0,-w/2,d/2,w/2,d/2],[rw,0,-rw,0,w/2,-d/2,-w/2,-d/2],[-rw,0,-rw,0,-w/2,-d/2,-w/2,d/2],[rw,0,rw,0,w/2,d/2,w/2,-d/2]][face];const ax=T.MathUtils.lerp(ends[0],ends[2],u),az=T.MathUtils.lerp(ends[1],ends[3],u),bx=T.MathUtils.lerp(ends[4],ends[6],u),bz=T.MathUtils.lerp(ends[5],ends[7],u);return [T.MathUtils.lerp(ax,bx,t),h*Math.pow(1-t,1.65)+.34*Math.pow(t,5)*Math.pow(Math.abs(u*2-1),5),T.MathUtils.lerp(az,bz,t)];}
 function roof(x,z,w,d,y,name,{height=2,rot=0,fadeRect}={}){
  const group=new T.Group();group.name=name+'_Roof';const surface=new T.BufferGeometry(),p=[],uv=[],idx=[];
  for(let face=0;face<4;face++){const n=Math.max(5,Math.ceil((face<2?w:d)/1.2)),v=7,offset=p.length/3;for(let j=0;j<=v;j++)for(let i=0;i<=n;i++){p.push(...roofPoint(face,i/n,j/v,w,d,height));uv.push(i/n,j/v);}for(let j=0;j<v;j++)for(let i=0;i<n;i++){const a=offset+j*(n+1)+i;idx.push(a,a+n+1,a+1,a+1,a+n+1,a+n+2);}}
  surface.setAttribute('position',new T.Float32BufferAttribute(p,3));surface.setAttribute('uv',new T.Float32BufferAttribute(uv,2));surface.setIndex(idx);surface.computeVertexNormals();const material=cloneMaterial(mats.roof);material.side=T.DoubleSide;mesh(surface,material,0,0,0,1,1,1,0,group);
  for(let face=0;face<4;face++){const n=Math.ceil((face<2?w:d)/.68);for(let i=0;i<=n;i++){let previous=roofPoint(face,i/n,0,w,d,height);for(let j=1;j<=4;j++){const next=roofPoint(face,i/n,j/4,w,d,height);beam(previous.map((v,k)=>v+(k===1?.025:0)),next.map((v,k)=>v+(k===1?.025:0)),.035,'rib',group);previous=next;}}
   for(let i=0;i<8;i++){beam(roofPoint(face,i/8,1,w,d,height),roofPoint(face,(i+1)/8,1,w,d,height),.13,'jade',group);}}
  beam([-w*.3,height+.05,0],[w*.3,height+.05,0],.13,'gold',group);
  for(const s of[-1,1]){for(let j=0;j<4;j++)beam(roofPoint(0,s===1?1:0,j/4,w,d,height),roofPoint(0,s===1?1:0,(j+1)/4,w,d,height),.095,'gold',group);}
  group.position.set(x,y,z);group.rotation.y=rot;root.add(group);return fader(group,fadeRect||{x,z,w:rot?d:w,d:rot?w:d});
 }
 function column(x,z,h=2.6,base=.12,parent,radius=.13){mesh(cyl,mats.wood,x,base+h/2,z,radius,h,radius,0,parent);box(x,base+.08,z,radius*3.5,.16,radius*3.5,'stone',0,parent);box(x,base+h-.12,z,.55,.13,.37,'gold',0,parent);obstacle(x,z,.3,.3);}
 function lattice(x,z,w,y,h,parent){box(x,y,z,w+.12,h+.12,.14,'wood',0,parent);box(x,y,z,w,h,.155,mat('window','#bcc5ae'),0,parent);for(let i=-Math.floor(w/.38)/2;i<=Math.floor(w/.38)/2;i++)box(x+i*.36,y,z+.09,.035,h,.035,'wood',0,parent);for(let yy=y-h/2+.22;yy<y+h/2;yy+=.35)box(x,yy,z+.09,w,.035,.035,'wood',0,parent);}
 function room(name,x,z,w,d,{base=.12,height=3.1,floors=1,doorWidth=2.6,roofHeight=2.1,hero=false}={}){
  paving(x,z,w,d,{y:base});const cut=new T.Group(),backdrop=new T.Group();cut.name=name+'_Cutaway';backdrop.name=name+'_Interior_Backdrop';root.add(cut,backdrop);
  const wallH=height*.83,doorH=Math.min(2.5,height-.2);wall(x,z-d/2,w,.3,{height:wallH,base,parent:backdrop});
  // True window openings on the far wall admit light and retain a solid navigation boundary.
  const sill=.72,top=Math.min(wallH-.16,2.65),windowH=top-sill,nWindows=Math.max(1,Math.floor(d/2.6)),panel=d/nWindows-.27;
  box(x-w/2,base+sill/2,z,.3,sill,d,'ivory',0,backdrop);box(x-w/2,base+top+(wallH-top)/2,z,.3,wallH-top,d,'ivory',0,backdrop);
  const glazing=mat('window-paper','#ded7b9');glazing.transparent=true;glazing.opacity=.15;glazing.depthWrite=false;glazing.userData.windowGlazing=true;
  for(let j=0;j<nWindows;j++){const zz=z-d/2+(j+.5)*d/nWindows;box(x-w/2,base+sill+windowH/2,zz,.025,windowH,panel,glazing,0,backdrop);
   for(const side of[-1,1]){box(x-w/2+.14,base+sill+windowH/2,zz+side*panel/2,.14,windowH+.1,.09,'wood',0,backdrop);box(x-w/2+.14,base+sill+windowH/2+side*windowH/2,zz,.14,.09,panel,'wood',0,backdrop);}
   const bars=Math.max(3,Math.floor(panel/.32));for(let k=1;k<bars;k++)box(x-w/2+.17,base+sill+windowH/2,zz-panel/2+k*panel/bars,.05,windowH,.035,'wood',0,backdrop);
   for(let k=1;k<4;k++)box(x-w/2+.17,base+sill+k*windowH/4,zz,.05,.035,panel,'wood',0,backdrop);
   for(const side of[-1,1]){const cz=zz+side*panel*.27,cy=base+sill+windowH*.6,pts=[[cy-.16,cz],[cy,cz+.14],[cy+.16,cz],[cy,cz-.14],[cy-.16,cz]];for(let k=1;k<pts.length;k++)beam([x-w/2+.2,pts[k-1][0],pts[k-1][1]],[x-w/2+.2,pts[k][0],pts[k][1]],.025,'gold',backdrop);}
  }
  for(let j=0;j<=nWindows;j++)box(x-w/2,base+sill+windowH/2,z-d/2+j*d/nWindows,.3,windowH,.27,'ivory',0,backdrop);obstacle(x-w/2,z,.3,d,'window-wall');
  wall(x+w/2,z,.3,d,{height:wallH,base,parent:cut});const wing=(w-doorWidth)/2;
  for(const s of[-1,1]){wall(x+s*(w+doorWidth)/4,z+d/2,wing,.3,{height:wallH,base,parent:cut});lattice(x+s*w*.31,z+d/2+.18,w*.2,base+1.55,1.12,cut);}
  for(const xx of[x-w/2,x-w*.3,x-w*.1,x+w*.1,x+w*.3,x+w/2]){column(xx,z+d/2+.5,height,base,cut,hero?.22:.13);box(xx,base+height-.2,z+d/2+.3,.25,.15,1.3,'wood',0,cut);for(let tier=0;tier<3;tier++)box(xx,base+height-.3-tier*.12,z+d/2+.4,.8-tier*.17,.12,.7-tier*.12,tier===1?'gold':'wood',0,cut);}
  box(x,base+height-.12,z+d/2+.5,w,.2,.2,'wood',0,cut);
  for(const side of[-1,1]){box(x+side*(doorWidth/2+.05),base+doorH/2,z+d/2+.45,.12,doorH,1.15,'wood',side*.2,cut);for(let yy=base+.4;yy<base+doorH-.2;yy+=.4)box(x+side*(doorWidth/2+.13),yy,z+d/2+.46,.15,.035,1.1,'gold',side*.2,cut);}
  box(x,base+height-.62,z+d/2+.37,hero?3.7:2.3,.65,.22,'wood',0,cut);for(const side of[-1,1])box(x,base+height-.62+side*.29,z+d/2+.5,hero?3.55:2.15,.045,.045,'gold',0,cut);
  for(let level=1;level<floors;level++){const floorY=base+height*level;box(x,floorY+.05,z,w+.7,.23,d+.7,'wood',0,cut);for(const s of[-1,1])wall(x+s*w/2,z,.28,d,{height:height*.78,base:floorY+.15,collide:false,parent:cut});wall(x,z-d/2,w,.28,{height:height*.78,base:floorY+.15,collide:false,parent:cut});
   for(let xx=x-w/2+.6;xx<x+w/2;xx+=2.6)lattice(xx,z+d/2,2,floorY+1.45,1.55,cut);
   box(x,floorY+.1,z+d/2+.8,w+1,.2,1.8,'wood',0,cut);for(let xx=x-w/2;xx<=x+w/2;xx+=.6)box(xx,floorY+.7,z+d/2+1.45,.07,1.15,.07,'wood',0,cut);box(x,floorY+1.2,z+d/2+1.45,w+.3,.09,.09,'gold',0,cut);
   roof(x,z,w+2,d+2,floorY-.15,name+'_Lower_'+level,{height:1.2});
  }
  compact(backdrop);contactShadow(x,z,w+2,d+2,base+.035);fader(cut,{x,z,w,d});roof(x,z,w+1.7,d+1.8,base+height*floors,name,{height:roofHeight});return {x,z,w,d,base};
 }
 function corridor(points,{width=2.35,height=2.45,base=.12,name='Gallery',groundAt=()=>base}={}){for(let i=1;i<points.length;i++){const[a,b]=[points[i-1],points[i]],dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),ang=Math.atan2(dz,dx),cx=(a[0]+b[0])/2,cz=(a[1]+b[1])/2;path([a,b],width,(x,z)=>groundAt(x,z)+.01);const count=Math.max(1,Math.round(len/3));for(let j=0;j<=count;j++)for(const s of[-1,1]){const x=a[0]+dx*j/count,z=a[1]+dz*j/count;const px=x-Math.sin(ang)*s*width/2,pz=z+Math.cos(ang)*s*width/2,insideTurn=points.some((p,k)=>{if(!k||k===i)return false;const q=points[k-1],vx=p[0]-q[0],vz=p[1]-q[1],t=T.MathUtils.clamp(((px-q[0])*vx+(pz-q[1])*vz)/(vx*vx+vz*vz),0,1);return Math.hypot(px-q[0]-vx*t,pz-q[1]-vz*t)<width/2-.08;});if(!insideTurn)column(px,pz,height,groundAt(x,z));}
  const graded=Math.abs(groundAt(...a)-groundAt(...b))>.08,pieces=graded?count:1;for(let k=0;k<pieces;k++){const t=(k+.5)/pieces,x=a[0]+dx*t,z=a[1]+dz*t;roof(x,z,len/pieces+1,width+.7,groundAt(x,z)+height,name,{height:.85,rot:-ang,fadeRect:{x,z,w:Math.abs(dx)/pieces+width,d:Math.abs(dz)/pieces+width}});}}}
 function pavilion(name,x,z,{base=.3,radius=2.7,height=2.7}={}){
  mesh(new T.CylinderGeometry(radius+.3,radius+.55,base+.08,6),mats.stone,x,base/2,z);const group=new T.Group();group.name=name+'_Roof';root.add(group);const p=[],idx=[];
  for(let ring=0;ring<=5;ring++){const t=ring/5,r=radius*1.22*t,h=height+1.75*Math.pow(1-t,1.7);for(let i=0;i<6;i++){const a=i*Math.PI/3;p.push(x+Math.cos(a)*r,base+h+Math.pow(t,5)*.3,z+Math.sin(a)*r);}}
  for(let j=0;j<5;j++)for(let i=0;i<6;i++){const a=j*6+i,b=j*6+(i+1)%6;idx.push(a,a+6,b,b,a+6,b+6);}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(p,3));geo.setIndex(idx);geo.computeVertexNormals();const material=cloneMaterial(mats.roof);material.side=T.DoubleSide;mesh(geo,material,0,0,0,1,1,1,0,group);
  for(let i=0;i<6;i++){const a=i*Math.PI/3;column(x+Math.cos(a)*(radius-.25),z+Math.sin(a)*(radius-.25),height,base);let prev=[x,base+height+1.75,z];for(let j=1;j<=5;j++){const t=j/5,next=[x+Math.cos(a)*radius*1.22*t,base+height+1.75*Math.pow(1-t,1.7)+Math.pow(t,5)*.3,z+Math.sin(a)*radius*1.22*t];beam(prev,next,.09,'gold',group);prev=next;}
   const aa=(i+1)*Math.PI/3;beam([x+Math.cos(a)*radius*1.22,base+height+.3,z+Math.sin(a)*radius*1.22],[x+Math.cos(aa)*radius*1.22,base+height+.3,z+Math.sin(aa)*radius*1.22],.11,'jade',group);
   const pa=[x+Math.cos(a)*(radius-.25),base+height-.12,z+Math.sin(a)*(radius-.25)],pb=[x+Math.cos(aa)*(radius-.25),base+height-.12,z+Math.sin(aa)*(radius-.25)];beam(pa,pb,.14,'wood');
   box(pa[0],base+height-.27,pa[2],.45,.17,.45,'gold');box(pa[0],base+height-.42,pa[2],.31,.13,.31,'wood');
   for(let rib=1;rib<4;rib++){const ang=a+(aa-a)*rib/4;let previous=[x,base+height+1.75,z];for(let j=1;j<=5;j++){const t=j/5,r=radius*1.22*t*Math.cos(Math.PI/6)/Math.cos((rib/4-.5)*Math.PI/3),next=[x+Math.cos(ang)*r,base+height+1.75*Math.pow(1-t,1.7)+Math.pow(t,5)*.3,z+Math.sin(ang)*r];beam(previous,next,.03,'rib',group);previous=next;}}
   if(i>=3){const r=radius-.32,from=[x+Math.cos(a)*r,base+.7,z+Math.sin(a)*r],to=[x+Math.cos(aa)*r,base+.7,z+Math.sin(aa)*r];beam(from,to,.1,'wood');for(let j=0;j<5;j++){const t=(j+.5)/5,xx=T.MathUtils.lerp(from[0],to[0],t),zz=T.MathUtils.lerp(from[2],to[2],t);box(xx,base+.4,zz,.06,.6,.06,'wood');}}
}
  mesh(ball,mats.gold,x,base+height+1.95,z,.16,.2,.16,0,group);fader(group,{x,z,w:radius*2,d:radius*2});return {x,z,radius};
 }
 function lantern(x,z,y=2.6){mesh(cyl,mats.gold,x,y+.32,z,.025,.45,.025);mesh(ball,mat('lantern','#c27f50'),x,y,z,.25,.36,.25);mesh(cyl,mats.gold,x,y-.4,z,.02,.22,.02);}
 // Rotate a complete assembly, including its batched parts, collision and cutaway bounds.
 function rotated(build,x,z,angle){
  const counts=new Map([...buckets].map(([k,v])=>[k,v.geos.length])),children=root.children.length,colliders=solid.length,faders=roofs.length;
  build();const matrix=new T.Matrix4().makeTranslation(x,0,z).multiply(new T.Matrix4().makeRotationY(angle)).multiply(new T.Matrix4().makeTranslation(-x,0,-z));
  for(const[k,v]of buckets)for(let i=counts.get(k)||0;i<v.geos.length;i++)v.geos[i].applyMatrix4(matrix);
  for(const child of root.children.slice(children))child.applyMatrix4(matrix);
  const transform=r=>{const p=new T.Vector3(r.x,0,r.z).applyMatrix4(matrix),c=Math.abs(Math.cos(angle)),s=Math.abs(Math.sin(angle)),w=r.w,d=r.d;r.x=p.x;r.z=p.z;r.w=c*w+s*d;r.d=s*w+c*d;};
  solid.slice(colliders).forEach(transform);roofs.slice(faders).forEach(r=>transform(r.rect));
 }
 function elevated(build,dy){const counts=new Map([...buckets].map(([k,v])=>[k,v.geos.length])),children=root.children.length;build();for(const[k,v]of buckets)for(let i=counts.get(k)||0;i<v.geos.length;i++)v.geos[i].translate(0,dy,0);for(const child of root.children.slice(children))child.position.y+=dy;}
 function finish(){for(const{material,geos}of buckets.values()){const geo=mergeGeometries(geos,false);geo.normalizeNormals();const o=new T.Mesh(geo,material);o.name=material.userData.contactShadow?'Soft_Contact_Shadows':'Batched_'+Object.keys(mats).find(k=>mats[k]===material);o.castShadow=!material.userData.contactShadow;o.receiveShadow=!material.userData.contactShadow;root.add(o);geos.forEach(g=>g.dispose());}}
 return {mats,mat,mesh,box,beam,ball,cyl,obstacle,wall,wallGaps,paving,path,roof,column,room,corridor,pavilion,lantern,contactShadow,rotated,elevated,finish};
}
