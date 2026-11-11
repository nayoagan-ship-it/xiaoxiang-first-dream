import assert from 'node:assert/strict';
import * as T from 'three';
import {createWorld} from '../src/world.js';
import {createNavigation} from '../src/navigation.js';
const world=createWorld(),nav=createNavigation(world.bounds,world.solid,.34,.5,world.groundHeight);world.doors[0].collider.enabled=false;
const results=[];
for(const target of [...world.interact,...world.npcs]){
 const p=nav.nearest(target.x,target.z),route=nav.route(world.spawn.x,world.spawn.z,p.x,p.z);assert(route.length,`Unreachable: ${target.id}`);let previous=world.spawn;
 for(const point of route){assert(nav.valid(point.x,point.z),'Collision: '+target.id);assert(nav.canMove(previous.x,previous.z,point.x,point.z),'Abrupt height change: '+target.id);previous=point;}
 results.push({id:target.id,steps:route.length});
}
assert(!nav.valid(22,-12),'Water must block walking');assert(nav.valid(27,-11),'Bridge must be walkable');assert(!nav.valid(-1,9),'Screen must collide');assert(nav.valid(-24.5,7.5),'Rockery tunnel must be clear');
for(let z=-.9;z>-2.2;z-=.1)assert(nav.canMove(23,z,23,z-.1),'Bridge entry ramp');
for(const stair of world.mapData.stairs){
 const dx=stair.to[0]-stair.from[0],dz=stair.to[1]-stair.from[1],steps=Math.ceil(Math.hypot(dx,dz)/.08);
 for(let i=0;i<steps;i++){const t=i/steps,tt=(i+1)/steps;assert(nav.canMove(stair.from[0]+dx*t,stair.from[1]+dz*t,stair.from[0]+dx*tt,stair.from[1]+dz*tt),'Stair slope: '+stair.id);}
}
assert(!nav.canMove(-28.4,-2,-28.6,-2),'Hill terrace cliff must block stepping');
assert(world.groundHeight(-32,-2)>5.5,'Hill has a substantial elevation');
assert(world.groundHeight(-4,-10)>3.5,'Main hall is raised');
assert(world.groundHeight(-25,-17.5)>2,'Study terrace is raised');
assert(world.groundHeight(5,11)>1,'Inner court is raised');
world.doors[0].collider.enabled=true;assert(!nav.valid(-26,24));world.doors[0].collider.enabled=false;assert(nav.valid(-26,24));
assert(nav.route(13,20.5,7,20.5).length,'Moon gate passage');
assert(nav.valid(-16.5-1e-14,24),'Subpixel error at a narrow lane clearance boundary');
for(const [x,z]of[[-4,-10],[-25,-17.5],[-32,-2],[5,16],[-29.8,14],[-33.2,4],[23,-1.5]]){const y=world.groundHeight(x,z),hit=world.pickGround(new T.Ray(new T.Vector3(x,y+30,z),new T.Vector3(0,-1,0)));assert(hit&&Math.abs(hit.y-y)<.03,'Raised surface mouse picking');}
for(const room of world.rooms){assert(nav.valid(room.inside.x,room.inside.z),'Room centre must stay clear: '+room.id);assert(nav.route(room.entrance.x,room.entrance.z,room.inside.x,room.inside.z).length,'Room doorway is passable: '+room.id);}
console.log(JSON.stringify({status:'passed',targets:results,checks:[`${results.length} reachable targets`,'collision-safe routes','nine continuous stair slopes','water and bridge','rockery tunnel','terrace edge','door open/closed','moon gate passage']},null,2));
