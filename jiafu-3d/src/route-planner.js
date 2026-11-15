export function pathLength(points){let length=0;for(let i=1;i<points.length;i++)length+=Math.hypot(points[i].x-points[i-1].x,points[i].z-points[i-1].z);return length;}
export function planJourneyRoute({from,stages,npcs,doors,items,navigation,preferredId=null}){
 const candidates=preferredId&&stages.some(s=>s.id===preferredId)?stages.filter(s=>s.id===preferredId):stages;
 let best=null;
 for(const stage of candidates){
  const npc=npcs.find(n=>n.id===stage.npc);if(!npc)continue;
  const door=stage.door&&doors.find(d=>d.id===stage.door&&!d.open),destination=door?items.find(i=>i.id===stage.door):npc.approach;if(!destination)continue;
  const path=navigation.route(from.x,from.z,destination.x,destination.z);
  if(!path.length&&!navigation.canMove(from.x,from.z,destination.x,destination.z))continue;
  const points=[{x:from.x,z:from.z},...path];let distance=pathLength(points);
  if(door){const afterDoor=navigation.without(door.collider),continuation=afterDoor.route(destination.x,destination.z,npc.approach.x,npc.approach.z);if(!continuation.length&&!afterDoor.canMove(destination.x,destination.z,npc.approach.x,npc.approach.z))continue;distance+=pathLength([destination,...continuation]);}
  if(!best||distance<best.distance-.001)best={stage,npc,door:door||null,destination:{x:destination.x,z:destination.z},points,distance};
 }
 return best;
}
export function remainingRoute(points,from,navigation,tolerance=1.35){
 let index=-1,best=Infinity;
 for(let i=points.length-1;i>=0;i--){const p=points[i],d=Math.hypot(p.x-from.x,p.z-from.z);if(d<=tolerance&&d<best-.001&&navigation.canMove(from.x,from.z,p.x,p.z)){index=i;best=d;}}
 return index<0?null:[{x:from.x,z:from.z},...points.slice(index)];
}
export function sampleRoute(points,spacing=1.05,limit=64){
 const result=[];let next=.7;
 for(let i=1;i<points.length&&result.length<limit;i++){
  const a=points[i-1],b=points[i],length=Math.hypot(b.x-a.x,b.z-a.z);if(length<.001)continue;
  while(next<=length&&result.length<limit){const t=next/length;result.push({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t,dx:(b.x-a.x)/length,dz:(b.z-a.z)/length});next+=spacing;}
  next-=length;
 }
 return result;
}
