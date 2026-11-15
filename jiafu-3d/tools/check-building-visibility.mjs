import assert from 'node:assert/strict';
import * as T from 'three';
import {createBuildingVisibility} from '../src/building-visibility.js';
import {createWorld} from '../src/world.js';

// Off-centre orthographic targets must use parallel rays, not perspective rays.
const root=new T.Group(),player={root:new T.Group()},wall=new T.Mesh(new T.BoxGeometry(1.5,5,3),new T.MeshStandardMaterial());
wall.position.set(0,2.5,2.5);root.add(wall,player.root);
const glass=new T.Mesh(new T.BoxGeometry(.1,1,1),new T.MeshStandardMaterial({transparent:true,opacity:.15,depthWrite:false}));wall.add(glass);
const world={root,player,rooms:[],roofs:[],occlusionGroups:[{name:'Terrace_test',group:wall}],groundHeight:()=>0};
const camera=new T.OrthographicCamera(-15,15,12,-12,.1,210);camera.position.set(8,12,10);camera.lookAt(8,0,0);camera.updateMatrixWorld();
const v=createBuildingVisibility(world),step=(motion=false,ahead=[])=>v.update(.05,{camera,motion,overview:false,ahead});
step();assert(v.playerBlocked);assert.equal(wall.material.opacity,.09);assert(!wall.material.depthWrite);
for(let i=0;i<20;i++){step();assert.equal(wall.material.opacity,.09,'a ghost building keeps blocking its geometric sight test');}
player.root.position.x=6;for(let i=0;i<40;i++)step(true);assert.equal(wall.material.opacity,1);assert(!wall.material.transparent);assert(wall.material.depthWrite);assert.equal(glass.material.opacity,.15);assert(glass.material.transparent);assert(!glass.material.depthWrite);
for(let i=0;i<3;i++)step(false,[{x:0,z:0}]);assert(!v.playerBlocked,'road-only obstruction does not claim the player is hidden');assert.equal(wall.material.opacity,.09,'the road ahead can independently reveal an obstruction');
v.update(.05,{camera,motion:false,overview:true});assert.equal(wall.material.opacity,1,'overview restores the intact scene');

const real=createWorld(),visibility=createBuildingVisibility(real),view=new T.OrthographicCamera(-22.4,22.4,14,-14,.1,210);
function place(x,z,overview=false){real.player.root.position.set(x,real.groundHeight(x,z),z);view.position.set(x+48,real.player.root.position.y+58,z+48);view.lookAt(x,real.player.root.position.y+1,z);view.updateMatrixWorld();for(let i=0;i<12;i++)visibility.update(.05,{camera:view,overview,motion:false});return visibility.read();}
for(const [id,x,z]of [['tea',-26,16],['study',-33,-24],['hall',-18,-19],['music',23.5,0]]){
 const state=place(x,z);assert(state.buildings.some(e=>e.id===id&&e.opacity===.09),id+' reveals the road behind its actual geometry');
}
assert(place(-33,-24).buildings.some(e=>e.id==='Terrace_study'&&e.opacity<1),'a high platform can also obscure a lower path');
assert(place(0,6).buildings.every(e=>e.opacity===1),'unobstructed courtyard restores all architecture');
assert(place(-26,21).buildings.find(e=>e.id==='tea').opacity===1,'the current room retains its normal interior presentation');
assert(place(-26,16,true).buildings.every(e=>e.opacity===1));
console.log(JSON.stringify({status:'passed',checks:['parallel orthographic sight rays','geometry remains detectable while transparent','independent road-ahead visibility','original glass transparency restored','four real building orientations and heights','raised platform obstruction','unobstructed and overview restoration','current room excluded from exterior fading']}));
