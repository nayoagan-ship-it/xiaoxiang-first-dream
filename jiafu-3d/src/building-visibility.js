import * as T from 'three';
import {setCutawayOpacity} from './render-stability.js';

// Aerial cameras need parallel sight rays. Test solid geometry even while it is
// faded, so transparency cannot repeatedly turn its own obstruction test off.
export function createBuildingVisibility(world){
 const entries=[],roofOwners=new Map(),roofMaterials=new Set(world.roofs.flatMap(r=>r.materials));
 const fixed=[],ray=new T.Raycaster(),direction=new T.Vector3(),origin=new T.Vector3(),point=new T.Vector3();
 let elapsed=1,enabled=true,playerBlocked=false;
 const groups=world.occlusionGroups||[];
 function add(id,objects,covers=[],room=null){
  const meshes=new Set();for(const object of objects)object.traverse(o=>{if(o.isMesh)meshes.add(o);});
  const entry={id,objects,room,meshes:[],bounds:new T.Box3(),opacity:1,hold:0};
  for(const mesh of meshes){
   const materials=Array.isArray(mesh.material)?mesh.material:[mesh.material];
   if(materials.some(m=>!m.userData.contactShadow&&m.opacity>.5)){
    mesh.geometry.computeBoundingBox();entry.bounds.union(mesh.geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld));entry.meshes.push(mesh);
   }
   const own=materials.filter(m=>!roofMaterials.has(m));
   if(own.length)fixed.push({mesh,entry,castShadow:mesh.castShadow,materials:own.map(material=>({material,opacity:material.opacity,transparent:material.transparent,depthWrite:material.depthWrite}))});
  }
  covers.forEach(r=>roofOwners.set(r,entry));entries.push(entry);
 }
 world.root.updateMatrixWorld(true);
 for(const room of world.rooms){
  const objects=groups.filter(g=>g.name===room.arch||g.name===room.arch+'_Furnishings').map(g=>g.group),covers=world.roofs.filter(r=>r.room===room);
  for(const cover of covers)objects.push(cover.group);
  add(room.id,objects,covers,room);
 }
 for(const group of groups.filter(g=>g.name.startsWith('Terrace_')))add(group.name,[group.group]);
 for(const cover of world.roofs)if(!roofOwners.has(cover))add(cover.group.uuid,[cover.group],[cover]);

 function test(target,camera,blocked){
  const distance=point.copy(camera.position).sub(target).dot(direction);
  if(distance<=.2)return;
  origin.copy(target).addScaledVector(direction,distance);ray.set(origin,point.copy(direction).negate());ray.near=.02;ray.far=distance-.15;
  for(const entry of entries){
   if(entry.room?.contains(world.player.root.position.x,world.player.root.position.z,.1)||entry.bounds.isEmpty()||!ray.ray.intersectsBox(entry.bounds))continue;
   for(const mesh of entry.meshes)if(ray.intersectObject(mesh,false).length){blocked.add(entry);break;}
  }
 }
 function applyFixed(){
  for(const record of fixed){
   const fade=record.entry.opacity;
   for(const original of record.materials){
    const m=original.material;
    if(fade<1)setCutawayOpacity(m,original.opacity*fade);
    else{if(m.transparent!==original.transparent){m.transparent=original.transparent;m.needsUpdate=true;}m.opacity=original.opacity;m.depthWrite=original.depthWrite;}
   }
   record.mesh.castShadow=record.castShadow&&fade===1;
  }
 }
 return {
  update(dt,{camera,overview,motion,ahead=[]}){
   elapsed+=dt;
   for(const e of entries)e.hold=Math.max(0,e.hold-dt);
   if(overview||!enabled){playerBlocked=false;for(const e of entries)e.hold=0;elapsed=1;}
   else if(elapsed>=.12){
    elapsed=0;world.root.updateMatrixWorld(true);camera.getWorldDirection(direction).negate();
    const p=world.player.root.position,blocked=new Set();
    for(const y of [.22,1.25,2.45])test(new T.Vector3(p.x,world.groundHeight(p.x,p.z)+y,p.z),camera,blocked);
    playerBlocked=blocked.size>0;
    for(const p of ahead)test(new T.Vector3(p.x,world.groundHeight(p.x,p.z)+.12,p.z),camera,blocked);
    for(const e of blocked)e.hold=.36;
   }
   for(const e of entries){const target=e.hold>0?.09:1;e.opacity=motion&&enabled?T.MathUtils.lerp(e.opacity,target,1-Math.exp(-dt*8)):target;if(e.opacity>.998)e.opacity=1;if(e.opacity<.092)e.opacity=.09;}
   applyFixed();
  },
  roofOpacity:roof=>roofOwners.get(roof)?.opacity??1,
  get playerBlocked(){return playerBlocked;},
  setEnabled(value){enabled=value;elapsed=1;if(!enabled){for(const e of entries){e.opacity=1;e.hold=0;}playerBlocked=false;applyFixed();}},
  read:()=>({enabled,playerBlocked,buildings:entries.map(e=>({id:e.id,opacity:e.opacity,blocking:e.hold>0,meshes:e.meshes.length}))})
 };
}
