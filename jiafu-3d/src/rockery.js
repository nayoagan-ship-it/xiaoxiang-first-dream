import * as T from 'three';
import {MarchingCubes} from 'three/addons/objects/MarchingCubes.js';

// Sculpt a volume with joined stone lobes and real through-holes. No flat extruded facade.
export function createGardenRockery(a,mapData,{x=-27.2,z=-10.9}={}){
 const dx=x+27.2,dz=z+10.9,stone=a.mat('sculpted-taihu','#b8baae');
 const mesh=(g,m,px,y,pz,...args)=>a.mesh(g,m,px+dx,y,pz+dz,...args),obstacle=(px,pz,...args)=>a.obstacle(px+dx,pz+dz,...args);
 const ellipsoid=(x,y,z,cx,cy,cz,rx,ry,rz)=>(Math.hypot((x-cx)/rx,(y-cy)/ry,(z-cz)/rz)-1)*Math.min(rx,ry,rz);
 const union=(a,b,k=.13)=>{const h=T.MathUtils.clamp(.5+.5*(b-a)/k,0,1);return T.MathUtils.lerp(b,a,h)-k*h*(1-h);};
 function sculpture(box,resolution,field){
  const surface=new MarchingCubes(resolution,stone,false,false,45000);surface.isolation=0;
  const [w,h,d,y0]=box,n=resolution;
  for(let k=0;k<n;k++)for(let j=0;j<n;j++)for(let i=0;i<n;i++){
   const x=(i/n-.5)*w,y=j/n*h+y0,z=(k/n-.5)*d;surface.field[i+j*n+k*n*n]=-field(x,y,z);
  }
  surface.update();if(surface.count>=45000*3)throw Error('Rockery surface exceeded geometry budget');
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(surface.geometry.attributes.position.array.slice(0,surface.count*3),3));geometry.setAttribute('normal',new T.BufferAttribute(surface.geometry.attributes.normal.array.slice(0,surface.count*3),3));geometry.setAttribute('uv',new T.BufferAttribute(new Float32Array(surface.count*2),2));geometry.scale(w/2,h/2,d/2);geometry.translate(0,h/2+y0,0);geometry.computeVertexNormals();geometry.normalizeNormals();surface.geometry.dispose();return geometry;
 }
 function weathering(x,y,z){return .2*Math.sin(x*4.1+y*2.2)*Math.cos(z*3.9-y*.8)+.09*Math.sin(y*7+x*3)*Math.cos(z*5);}
 const arch=sculpture([11.7,6.7,4.7,-.7],68,(x,y,z)=>{
  let value=ellipsoid(x,y,z,-3,1.8,0,1.45,2.1,1.25);
  for(const lobe of[[3,1.9,.05,1.45,2.2,1.25],[-2.4,3.8,-.05,1.6,1.35,1.4],[-.5,3.8,.15,1.9,.76,1.18],[1.6,3.65,-.1,1.8,1.1,1.25],[-3.5,4.4,-.2,.9,1.1,1],[3.55,3.8,-.25,.9,1.25,1.0]])value=union(value,ellipsoid(x,y,z,...lobe));
  value+=weathering(x,y,z);
  for(const hole of[[0,.85,0,1.8,2.0,7],[-3,2.5,0,.48,.72,5],[2.95,2.8,.15,.5,.7,5],[-.6,3.8,0,.45,.3,4]])value=Math.max(value,-ellipsoid(x,y,z,...hole));
  return Math.max(value,-y);
 });
 a.contactShadow(x,z,10,5);mesh(arch,stone,-27.2,.12,-10.9);
 obstacle(-30.3,-10.9,3,2.5,'taihu-pier');obstacle(-24.05,-10.9,3.1,2.5,'taihu-pier');
 function spire(x,z,scale,height,rot){
  const geometry=sculpture([3.5,7.3,3.8,-.5],48,(px,y,pz)=>{
   let value=ellipsoid(px,y,pz,0,1.6,0,1,1.9,.8);
   for(const lobe of[[-.25,3.1,.1,.8,1.6,.8],[.12,4.6,-.05,.65,1.1,.7],[-.25,5.6,.05,.45,.75,.5],[.55,2.4,.1,.7,.9,.65]])value=union(value,ellipsoid(px,y,pz,...lobe),.22);
   value+=weathering(px,y,pz)*.7;
   for(const hole of[[.02,1.8,0,.32,.5,4],[-.15,3.5,.1,.28,.53,4],[.05,4.8,0,.2,.33,4]])value=Math.max(value,-ellipsoid(px,y,pz,...hole));
   return Math.max(value,-y);
  });mesh(geometry,stone,x,.12,z,scale,height/6.2,1,rot);obstacle(x,z,scale*1.7,1.6,'taihu-spire');mapData.rocks.push({x:x+dx,z:z+dz,r:scale});
 }
 spire(-31.5,-13.3,1.1,6.2,-.35);spire(-23.3,-13.8,.95,5.7,.3);mapData.rocks.push({x,z,r:3.7});
}
