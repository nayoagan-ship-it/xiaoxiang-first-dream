export function createNavigation(bounds,obstacles,radius=.34,step=.5,heightAt=()=>.12){
 const width=Math.round((bounds.maxX-bounds.minX)/step)+1,height=Math.round((bounds.maxZ-bounds.minZ)/step)+1;
 // Treat an exact clearance boundary consistently in grid and floating-point movement.
 const valid=(x,z)=>x>bounds.minX+.6&&x<bounds.maxX-.6&&z>bounds.minZ+.6&&z<bounds.maxZ-.6&&!obstacles.some(o=>o.enabled&&Math.abs(x-o.x)<o.w/2+radius-1e-6&&Math.abs(z-o.z)<o.d/2+radius-1e-6);
 const toCell=(x,z)=>[Math.round((x-bounds.minX)/step),Math.round((z-bounds.minZ)/step)];
 const toWorld=(x,z)=>({x:bounds.minX+x*step,z:bounds.minZ+z*step});
 const canMove=(sx,sz,tx,tz)=>{if(!valid(tx,tz))return false;const distance=Math.hypot(tx-sx,tz-sz),samples=Math.max(1,Math.ceil(distance/.08));let previous=heightAt(sx,sz);for(let i=1;i<=samples;i++){const t=i/samples,y=heightAt(sx+(tx-sx)*t,sz+(tz-sz)*t);if(Math.abs(y-previous)>distance/samples*.85+.004)return false;previous=y;}return true;};
 function nearest(x,z,range=5){if(valid(x,z))return {x,z};for(let r=step;r<=range;r+=step)for(let a=0;a<16;a++){const p={x:x+Math.cos(a*Math.PI/8)*r,z:z+Math.sin(a*Math.PI/8)*r};if(valid(p.x,p.z))return p;}return null;}
 function route(sx,sz,tx,tz){
  const target=nearest(tx,tz);if(!target)return [];
  const [ax,az]=toCell(sx,sz),[bx,bz]=toCell(target.x,target.z),start=az*width+ax,end=bz*width+bx;
  const score=new Map([[start,0]]),parents=new Map(),closed=new Set(),open=[{i:start,f:0}],free=new Map();
  const walk=(x,z)=>{const i=z*width+x;if(!free.has(i)){const p=toWorld(x,z);free.set(i,x>=0&&x<width&&z>=0&&z<height&&valid(p.x,p.z));}return free.get(i);};
  let iterations=0;
  while(open.length&&iterations++<22000){open.sort((a,b)=>b.f-a.f);const {i}=open.pop();if(closed.has(i))continue;if(i===end){const path=[];let c=i;while(c!==start){path.push(toWorld(c%width,Math.floor(c/width)));c=parents.get(c);if(c===undefined)return [];}return path.reverse();}closed.add(i);const x=i%width,z=Math.floor(i/width);
   for(const [dx,dz]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const xx=x+dx,zz=z+dz,k=zz*width+xx,a=toWorld(x,z),b=toWorld(xx,zz);if(!walk(xx,zz)||closed.has(k)||!canMove(a.x,a.z,b.x,b.z)||(dx&&dz&&(!walk(x+dx,z)||!walk(x,z+dz))))continue;const g=score.get(i)+(dx&&dz?1.414:1);if(g<(score.get(k)??Infinity)){score.set(k,g);parents.set(k,i);open.push({i:k,f:g+Math.hypot(bx-xx,bz-zz)});}}
  }return [];
 }
 return {valid,route,nearest,canMove};
}
