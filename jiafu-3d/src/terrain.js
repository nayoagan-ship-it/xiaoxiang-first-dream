import * as T from 'three';

// The visible terraces and continuous navigation heights share one set of measurements.
export const levels={low:.12,court:1.2,study:2.2,hall:3.6,guest:1.25,hillLanding:2.8,hill:5.6};
export const terraces=[
 {id:'court',x:-1.5,z:7.25,w:29,d:13.5,y:levels.court},
 {id:'hall',x:-4,z:-12,w:24,d:15,y:levels.hall},
 {id:'study',x:-25,z:-17.5,w:14,d:15,y:levels.study},
 {id:'guest',x:9.75,z:-24.75,w:12.5,d:10.5,y:levels.guest},
 {id:'hill-landing',x:-32,z:9.5,w:7,d:3,y:levels.hillLanding,natural:true},
 {id:'hill',x:-32,z:-2,w:7,d:6,y:levels.hill,natural:true}
];
export const stairs=[
 {id:'court-front',from:[5,18.5],to:[5,14],width:6,low:.12,high:1.2},
 {id:'court-west',from:[-21,11.8],to:[-16,11.8],width:3,low:.12,high:1.2},
 {id:'court-east',from:[18,4],to:[13,4],width:3.2,low:.12,high:1.2},
 {id:'hall',from:[-4,2.5],to:[-4,-4.5],width:6.2,low:1.2,high:3.6},
 {id:'study-front',from:[-25,-4],to:[-25,-10],width:3.4,low:.12,high:2.2},
 {id:'study-rear',from:[-12,-23],to:[-18,-23],width:2.4,low:.12,high:2.2},
 {id:'guest',from:[10,-15],to:[10,-19.5],width:3.2,low:.12,high:1.25},
 {id:'hill-lower',from:[-29.8,17],to:[-29.8,11],width:2.8,low:.12,high:2.8},
 {id:'hill-upper',from:[-33.2,8],to:[-33.2,1],width:2.8,low:2.8,high:5.6}
];
const inside=(x,z,r,margin=0)=>Math.abs(x-r.x)<=r.w/2+margin&&Math.abs(z-r.z)<=r.d/2+margin;
function stairRect(s){return{x:(s.from[0]+s.to[0])/2,z:(s.from[1]+s.to[1])/2,w:Math.abs(s.to[0]-s.from[0])||s.width,d:Math.abs(s.to[1]-s.from[1])||s.width};}
export function onStair(x,z,margin=0){return stairs.some(s=>inside(x,z,stairRect(s),margin));}
export function terrainHeight(x,z){
 for(const s of stairs){if(!inside(x,z,stairRect(s)))continue;const dx=s.to[0]-s.from[0],dz=s.to[1]-s.from[1],t=((x-s.from[0])*dx+(z-s.from[1])*dz)/(dx*dx+dz*dz);return T.MathUtils.lerp(s.low,s.high,T.MathUtils.clamp(t,0,1));}
 for(const r of terraces)if(inside(x,z,r))return r.y;
 return levels.low;
}
export function buildTerrain(a,mapData){
 const{box,mesh,beam,mat,mats,ball,obstacle}=a;
 function rail(p,q,y,{wood=false,collision=true}={}){const len=Math.hypot(q[0]-p[0],q[1]-p[1]),n=Math.ceil(len/.9),m=wood?'wood':'ivory';for(let i=0;i<=n;i++){const t=i/n,x=T.MathUtils.lerp(p[0],q[0],t),z=T.MathUtils.lerp(p[1],q[1],t);if(onStair(x,z,.4))continue;box(x,y+.43,z,.12,.86,.12,m);if(!wood)mesh(ball,mats.stone,x,y+.92,z,.12,.12,.12);if(collision)obstacle(x,z,.12,.12,'terrace-rail');if(i<n){const tt=(i+1)/n,xx=T.MathUtils.lerp(p[0],q[0],tt),zz=T.MathUtils.lerp(p[1],q[1],tt);if(!onStair(xx,zz,.4))beam([x,y+.8,z],[xx,y+.8,zz],.1,m);}}}
 for(const r of terraces){
  if(r.natural){
   // Rugged rock skirts, rather than a tall rectangular stone pedestal under the hill.
   const positions=[],uv=[],n=20,rings=5;
   for(let j=0;j<rings;j++){const t=j/(rings-1),yy=.08+(r.y-.25)*t;for(let i=0;i<n;i++){const ang=i/n*Math.PI*2,c=Math.cos(ang),s=Math.sin(ang),edge=1/Math.max(Math.abs(c),Math.abs(s)),noise=.85+.13*Math.sin(i*2.1+j*1.8)**2;positions.push(r.x+c*edge*r.w/2*noise,yy,r.z+s*edge*r.d/2*noise);uv.push(i/n,t);}}
   const indices=[];for(let j=0;j<rings-1;j++)for(let i=0;i<n;i++){const k=j*n+i,next=j*n+(i+1)%n;indices.push(k,k+n,next,next,k+n,next+n);}
   const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();mesh(g,mat('rock-hill-strata','#b4b5a3'),0,0,0);
  }else{
   box(r.x,(r.y+.05)/2,r.z,r.w,r.y-.05,r.d,'stone');
   for(let y=.42;y<r.y-.15;y+=.48){for(const s of[-1,1]){box(r.x,y,r.z+s*r.d/2,r.w,.025,.03,mat('terrace-joint','#a7a08e'));box(r.x+s*r.w/2,y,r.z,.03,.025,r.d,'terrace-joint');}}
  }
  box(r.x,r.y-.11,r.z,r.w+.05,.22,r.d+.05,r.natural?'stone':'ivory');
  box(r.x,r.y-.025,r.z,r.w-.1,.045,r.d-.1,r.natural||r.id==='court'||r.id==='hall'?'stone':'grass');
  if(r.id!=='court'){
   rail([r.x-r.w/2,r.z+r.d/2],[r.x+r.w/2,r.z+r.d/2],r.y,{wood:r.natural});
   if(r.natural){rail([r.x-r.w/2,r.z-r.d/2],[r.x-r.w/2,r.z+r.d/2],r.y,{wood:true});rail([r.x+r.w/2,r.z-r.d/2],[r.x+r.w/2,r.z+r.d/2],r.y,{wood:true});}
  }
 }
 for(const s of stairs){
  const dx=s.to[0]-s.from[0],dz=s.to[1]-s.from[1],len=Math.hypot(dx,dz),n=Math.max(Math.ceil(len/.43),Math.ceil((s.high-s.low)/.18)),ang=Math.atan2(dx,dz);
  for(let i=0;i<n;i++){const t=(i+.5)/n,x=s.from[0]+dx*t,z=s.from[1]+dz*t,h=T.MathUtils.lerp(s.low,s.high,(i+1)/n);box(x,(h+.06)/2,z,s.width,h-.06,len/n+.015,'stone',ang);box(x,h+.005,z,s.width,.035,.07,'ivory',ang);}
  for(const side of[-1,1]){const ox=Math.cos(ang)*side*(s.width/2+.2),oz=-Math.sin(ang)*side*(s.width/2+.2),count=Math.ceil(len/1.1);for(let i=0;i<=count;i++){const t=i/count,x=s.from[0]+dx*t+ox,z=s.from[1]+dz*t+oz,y=T.MathUtils.lerp(s.low,s.high,t);box(x,y+.4,z,.1,.8,.1,s.id.startsWith('hill')?'wood':'ivory');obstacle(x,z,.1,.1,'stair-rail');}beam([s.from[0]+ox,s.low+.78,s.from[1]+oz],[s.to[0]+ox,s.high+.78,s.to[1]+oz],.1,s.id.startsWith('hill')?'wood':'ivory');}
 }
 mapData.terraces=terraces;mapData.stairs=stairs;
}
