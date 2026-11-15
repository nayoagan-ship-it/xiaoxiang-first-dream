import {overlapsObstacle} from './collision.js';
// A* with exact endpoints, checked clearance and cached grid edges.
class MinHeap{
 constructor(){this.items=[];}
 push(value){const a=this.items;let i=a.length;a.push(value);while(i){const p=(i-1)>>1;if(a[p].f<=value.f)break;a[i]=a[p];i=p;}a[i]=value;}
 pop(){const a=this.items,first=a[0],last=a.pop();if(a.length){let i=0;while(i*2+1<a.length){let j=i*2+1;if(j+1<a.length&&a[j+1].f<a[j].f)j++;if(a[j].f>=last.f)break;a[i]=a[j];i=j;}a[i]=last;}return first;}
 get length(){return this.items.length;}
}
export function createNavigation(bounds,obstacles,radius=.34,step=.5,heightAt=()=>.12){
 const width=Math.round((bounds.maxX-bounds.minX)/step)+1,height=Math.round((bounds.maxZ-bounds.minZ)/step)+1,total=width*height;
 let spatial=new Map(),indexedLength=-1;
 function rebuildIndex(){spatial=new Map();for(const o of obstacles){const a=o.angle||0,c=Math.abs(Math.cos(a)),s=Math.abs(Math.sin(a)),margin=o.clearance??radius,hw=(c*o.w+s*o.d)/2+margin,hd=(s*o.w+c*o.d)/2+margin;for(let ix=Math.floor((o.x-hw)/4);ix<=Math.floor((o.x+hw)/4);ix++)for(let iz=Math.floor((o.z-hd)/4);iz<=Math.floor((o.z+hd)/4);iz++){const key=ix+','+iz;if(!spatial.has(key))spatial.set(key,[]);spatial.get(key).push(o);}}indexedLength=obstacles.length;}
 const valid=(x,z)=>{if(x<=bounds.minX+.6||x>=bounds.maxX-.6||z<=bounds.minZ+.6||z>=bounds.maxZ-.6)return false;if(indexedLength!==obstacles.length)rebuildIndex();return !(spatial.get(Math.floor(x/4)+','+Math.floor(z/4))||[]).some(o=>o.enabled&&overlapsObstacle(o,x,z,radius));};
 const toCell=(x,z)=>[Math.round((x-bounds.minX)/step),Math.round((z-bounds.minZ)/step)];
 const toWorld=(x,z)=>({x:bounds.minX+x*step,z:bounds.minZ+z*step});
 const canMove=(sx,sz,tx,tz)=>{const distance=Math.hypot(tx-sx,tz-sz),samples=Math.max(1,Math.ceil(distance/.08));let previous=heightAt(sx,sz);for(let i=1;i<=samples;i++){const t=i/samples,x=sx+(tx-sx)*t,z=sz+(tz-sz)*t,y=heightAt(x,z);if(!valid(x,z)||Math.abs(y-previous)>distance/samples*.85+.004)return false;previous=y;}return true;};
 function nearest(x,z,range=5,accept=()=>true){if(valid(x,z)&&accept({x,z}))return {x,z};for(let r=step;r<=range;r+=step)for(let a=0;a<32;a++){const p={x:x+Math.cos(a*Math.PI/16)*r,z:z+Math.sin(a*Math.PI/16)*r};if(valid(p.x,p.z)&&accept(p))return p;}return null;}
 let revision='',free=new Map(),edges=new Map(),fineNavigation=null;
 function invalidate(){revision='';free.clear();edges.clear();indexedLength=-1;fineNavigation?.invalidate();}
 const walk=(x,z)=>{if(x<0||x>=width||z<0||z>=height)return false;const i=z*width+x;if(!free.has(i)){const p=toWorld(x,z);free.set(i,valid(p.x,p.z));}return free.get(i);};
 function connectors(x,z){const [cx,cz]=toCell(x,z),result=[];for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){const xx=cx+dx,zz=cz+dz;if(!walk(xx,zz))continue;const p=toWorld(xx,zz);if(canMove(x,z,p.x,p.z))result.push({i:zz*width+xx,cost:Math.hypot(x-p.x,z-p.z)});}return result;}
 function routeGrid(sx,sz,tx,tz){
  const signature=obstacles.map(o=>o.enabled?'1':'0').join('');if(signature!==revision){free.clear();edges.clear();revision=signature;}
  const target=nearest(tx,tz);if(!target||!valid(sx,sz))return [];
  if(canMove(sx,sz,target.x,target.z))return Math.hypot(target.x-sx,target.z-sz)>.001?[target]:[];
  const starts=connectors(sx,sz),ends=new Map(connectors(target.x,target.z).map(p=>[p.i,p.cost]));if(!starts.length||!ends.size)return [];
  const score=new Map(),parents=new Map(),closed=new Set(),open=new MinHeap(),end=total;
  for(const s of starts){const p=toWorld(s.i%width,Math.floor(s.i/width));score.set(s.i,s.cost);parents.set(s.i,-1);open.push({i:s.i,f:s.cost+Math.hypot(target.x-p.x,target.z-p.z)});}
  let iterations=0;
  while(open.length&&iterations++<total*3){
   const {i}=open.pop();if(closed.has(i))continue;
   if(i===end){const path=[target];let k=parents.get(end);while(k!==-1){const p=toWorld(k%width,Math.floor(k/width));if(Math.hypot(p.x-path.at(-1).x,p.z-path.at(-1).z)>.001)path.push(p);k=parents.get(k);}return path.reverse();}
   closed.add(i);const x=i%width,z=Math.floor(i/width),a=toWorld(x,z);
   if(ends.has(i)){const cost=score.get(i)+ends.get(i);if(cost<(score.get(end)??Infinity)){score.set(end,cost);parents.set(end,i);open.push({i:end,f:cost});}}
   for(const [dx,dz]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){
    const xx=x+dx,zz=z+dz,k=zz*width+xx;if(!walk(xx,zz)||closed.has(k)||(dx&&dz&&(!walk(x+dx,z)||!walk(x,z+dz))))continue;
    const key=Math.min(i,k)*total+Math.max(i,k),b=toWorld(xx,zz);if(!edges.has(key))edges.set(key,canMove(a.x,a.z,b.x,b.z));if(!edges.get(key))continue;
    const g=score.get(i)+Math.hypot(dx,dz)*step;if(g<(score.get(k)??Infinity)){score.set(k,g);parents.set(k,i);open.push({i:k,f:g+Math.hypot(target.x-b.x,target.z-b.z)});}
   }
  }return [];
 }
 // Narrow curved bridge corners can fall between coarse grid cells.
 function route(sx,sz,tx,tz){const path=routeGrid(sx,sz,tx,tz);if(path.length||step<=.25||!valid(sx,sz)||Math.hypot(tx-sx,tz-sz)<.001)return path;fineNavigation??=createNavigation(bounds,obstacles,radius,step/2,heightAt);return fineNavigation.route(sx,sz,tx,tz);}
 const alternatives=new WeakMap();
 function without(obstacle){if(!alternatives.has(obstacle))alternatives.set(obstacle,createNavigation(bounds,obstacles.filter(o=>o!==obstacle),radius,step,heightAt));return alternatives.get(obstacle);}
 return {valid,route,nearest,canMove,invalidate,without};
}
