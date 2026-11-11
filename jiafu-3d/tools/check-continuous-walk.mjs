import assert from 'node:assert/strict';import {createWorld} from '../src/world.js';import {createNavigation} from '../src/navigation.js';const w=createWorld();w.doors[0].collider.enabled=false;for(const n of w.npcs)w.solid.push({x:n.x,z:n.z,w:.55,d:.55,enabled:true,id:n.id});const n=createNavigation(w.bounds,w.solid,.34,.5,w.groundHeight);
for(const [start,target]of[[{x:-26,z:23},{x:-26,z:-17.5}],[w.landmarks.hillBase,w.landmarks.hillTop],[{x:5,z:19},{x:5,z:11}],[{x:-4,z:2.5},{x:-4,z:-10}],[{x:23,z:.2},{x:29,z:-19}]]){
 const path=n.route(start.x,start.z,target.x,target.z);assert(path.length);let x=start.x,z=start.z,stalled=0;
 for(let frame=0;frame<15000&&path.length;frame++){
 const p=path[0],distance=Math.hypot(p.x-x,p.z-z);if(distance<.01){path.shift();continue;}const speed=Math.min(4.25/60,distance),dx=(p.x-x)/distance,dz=(p.z-z)/distance,tx=x+dx*speed,tz=z+dz*speed,ox=x,oz=z;
 if(n.canMove(x,z,tx,tz)){x=tx;z=tz;}else{if(n.canMove(x,z,tx,z))x=tx;if(n.canMove(x,z,x,tz))z=tz;}
 if(Math.hypot(x-ox,z-oz)<.0001)stalled++;else stalled=0;assert(stalled<60,JSON.stringify({x,z,p,remaining:path.length}));
 }assert(!path.length);console.log('passed',JSON.stringify(target));
}

