import assert from 'node:assert/strict';
import * as T from 'three';
import {createWorld} from '../src/world.js';
import {createNavigation} from '../src/navigation.js';
import {characterClearance,overlapsObstacle,recoverWalkPosition,setDoorOpen,updateDoorMotion} from '../src/collision.js';
import {updateCharacter} from '../src/character-motion.js';

const world=createWorld(),nav=createNavigation(world.bounds,world.solid,.34,.5,world.groundHeight),player=world.player;
let bodyRadius=0,footRadius=0;
for(let i=0;i<24;i++){
 updateCharacter(player,{time:i*.17,delta:.05,enabled:true,moving:i<12,attention:new T.Vector3(25,0,25),speaking:i>=12});player.root.updateMatrixWorld(true);const inverse=player.root.matrixWorld.clone().invert();
 player.root.traverse(o=>{if(!o.isMesh)return;const m=new T.Matrix4().multiplyMatrices(inverse,o.matrixWorld),a=o.geometry.attributes.position,p=new T.Vector3();for(let j=0;j<a.count;j++){p.fromBufferAttribute(a,j).applyMatrix4(m);bodyRadius=Math.max(bodyRadius,Math.hypot(p.x,p.z));if(p.y<.7)footRadius=Math.max(footRadius,Math.hypot(p.x,p.z));}});
}
assert(bodyRadius<characterClearance.body&&footRadius<characterClearance.feet,'full animated silhouette fits the architectural clearance');
assert(!nav.valid(-26,17.3),'the former head/shoulder overlap beside the tea-room wall is blocked');
let p={x:-26,z:16};for(let i=0;i<100;i++){const z=p.z+.07;if(nav.canMove(p.x,p.z,p.x,z))p.z=z;}assert(p.z<17,'continuous movement stops before the complete model touches the wall');
const synthetic={x:0,z:0,w:2,d:2,shape:'box',clearance:.84};assert(overlapsObstacle(synthetic,1.5,0));assert(!overlapsObstacle(synthetic,1.7,1.7),'rounded clearance permits safe movement around corners');
for(const room of world.rooms){const edge=-room.w/2+.5,recovered=recoverWalkPosition(nav,world,{x:room.x+edge*Math.cos(room.rot),z:room.z-edge*Math.sin(room.rot)});assert(nav.valid(recovered.x,recovered.z),room.id+' old near-wall save can recover');assert(Math.abs(world.groundHeight(recovered.x,recovered.z)-room.base)<.2,room.id+' recovery stays on the same floor');assert(room.contains(recovered.x,recovered.z),room.id+' recovery stays in the same room');}
const door=world.doors[0];setDoorOpen(door,false);assert(!nav.canMove(-26,25.4,-26,23));assert(!overlapsObstacle(door.swingCollider,-26,25.4));assert(overlapsObstacle(door.swingCollider,-26,23),'closing across a character is rejected');setDoorOpen(door,true,true);assert(door.swingCollider.enabled);assert(!nav.canMove(-26,25.4,-26,23),'a moving door reserves its swing area');for(let i=0;i<200;i++)updateDoorMotion(door,1/60,true);assert(!door.moving&&!door.swingCollider.enabled&&door.openCollider.enabled);assert(Math.abs(door.hinge.rotation.y-Math.PI*.48)<1e-8);assert(!nav.valid(door.openCollider.x,door.openCollider.z),'the open leaf retains a real collision boundary');assert(nav.canMove(-26,25.4,-26,23),'entry opens after the swing finishes');
world.root.updateMatrixWorld(true);const ray=new T.Raycaster();let minimumHeadroom=Infinity,roofSamples=0;
for(let i=0;i<2500;i++){const x=-37+((i*137)%7400)/100,z=-30+((i*257)%6000)/100;assert.equal(nav.valid(x,z),!world.solid.some(o=>o.enabled&&overlapsObstacle(o,x,z)),'spatial broad phase agrees with the complete collision set');}
for(const roof of world.roofs){if(roof.group.name.endsWith('_Cutaway'))continue;const r=roof.rect;for(let x=r.x-r.w/2;x<=r.x+r.w/2;x+=.7)for(let z=r.z-r.d/2;z<=r.z+r.d/2;z+=.7){if(!nav.valid(x,z))continue;const ground=world.groundHeight(x,z);ray.set(new T.Vector3(x,ground+25,z),new T.Vector3(0,-1,0));const hit=ray.intersectObject(roof.group,true)[0];if(hit){roofSamples++;minimumHeadroom=Math.min(minimumHeadroom,hit.point.y-ground);assert(hit.point.y-ground>=characterClearance.height,roof.group.name+' has enough real headroom');}}}
for(const npc of world.npcs){assert(!world.solid.some(o=>o.enabled&&o.kind==='building'&&overlapsObstacle(o,npc.x,npc.z)),npc.id+' stands clear of the building');assert(nav.valid(npc.approach.x,npc.approach.z),npc.id+' has a safe conversation position');}
console.log(JSON.stringify({status:'passed',bodyRadius,footRadius,minimumHeadroom,roofSamples,rooms:world.rooms.length,checks:['complete animated head and sleeve clearance','no wall tunnelling during continuous movement','safe rounded building corners','eight old near-wall saves recover on the same floor and in the same room','closed door collision','door swing cannot pass through a character','moving swing area is reserved','open door leaf remains solid','roof and eave clearance on walkable ground','all NPC building positions and conversation approaches remain clear']},null,2));
