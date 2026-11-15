import {setDoorOpen} from '../src/collision.js';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createNavigation} from '../src/navigation.js';
import {planJourneyRoute,pathLength,remainingRoute,sampleRoute} from '../src/route-planner.js';
import {createRouteGuide} from '../src/route-guide.js';
import {createWorld,bounds,spawn} from '../src/world.js';
import {initializeJourney,readyStages,finishJourneyStage} from '../src/exploration-story.js';

const wall={x:1,z:0,w:.6,d:14,enabled:true},box={minX:-12,maxX:12,minZ:-10,maxZ:10},nav=createNavigation(box,[wall]);
const stages=[{id:'near',npc:'near'},{id:'far',npc:'far'}],npcs=[{id:'near',approach:{x:3,z:0}},{id:'far',approach:{x:-8,z:0}}],from={x:-1,z:0};
const choose=(preferredId=null)=>planJourneyRoute({from,stages,npcs,doors:[],items:[],navigation:nav,preferredId});
assert(!nav.canMove(-1,0,3,0),'a long straight line cannot tunnel through a wall');
assert.equal(choose().stage.id,'far','recommend the shorter walkable route, not the closer point through a wall');
assert.equal(choose('near').stage.id,'near','a player-selected destination takes priority');
const detour=choose('near');assert(detour.distance>15);wall.enabled=false;assert.equal(choose().stage.id,'near');assert(Math.abs(choose().distance-4)<1e-6,'opening a passage invalidates cached edges');wall.enabled=true;assert.equal(choose().stage.id,'far');
const throughDoor=planJourneyRoute({from,stages:[{id:'near',npc:'near',door:'door'},stages[1]],npcs:[npcs[0],{id:'far',approach:{x:-4,z:0}}],doors:[{id:'door',open:false,collider:wall}],items:[{id:'door',x:-1,z:1}],navigation:nav});assert.equal(throughDoor.stage.id,'far','include the walk inside after opening a door when comparing destinations');assert(wall.enabled,'estimating an open-door path never opens the real door');
const exact=nav.route(-3.12,.13,-8.17,2.28);assert.deepEqual(exact.at(-1),{x:-8.17,z:2.28});
assert.equal(remainingRoute([{x:0,z:0},{x:0,z:3}],{x:8,z:8},nav),null,'deviation requires a fresh route');
const cliff=createNavigation(box,[],.34,.5,x=>x>0?5:0);assert.equal(cliff.route(-2,0,2,0).length,0,'a cliff is not treated as a shortcut');

const world=createWorld(),navigation=createNavigation(bounds,world.solid,.34,.5,world.groundHeight),state={};initializeJourney(state);
let current={...spawn},visited=[],doorStops=0,maxPlanMs=0;
while(!state.complete){
 const started=performance.now();let plan=planJourneyRoute({from:current,stages:readyStages(state),npcs:world.npcs,doors:world.doors,items:world.interact,navigation});maxPlanMs=Math.max(maxPlanMs,performance.now()-started);assert(plan,'a reachable next encounter');
 if(plan.door){doorStops++;assert.equal(plan.door.id,'tea-door');current=plan.destination;setDoorOpen(plan.door,true);plan=planJourneyRoute({from:current,stages:readyStages(state),npcs:world.npcs,doors:world.doors,items:world.interact,navigation,preferredId:plan.stage.id});assert(plan&&!plan.door);}
 for(let i=1;i<plan.points.length;i++){const a=plan.points[i-1],b=plan.points[i];assert(navigation.canMove(a.x,a.z,b.x,b.z),plan.stage.id+' path segment is safe');}
 assert.deepEqual(plan.points.at(-1),plan.npc.approach,'stop at an interactable approach point');
 for(const p of sampleRoute(plan.points)){assert(navigation.valid(p.x,p.z),'a trail mark stays on walkable ground');assert(Number.isFinite(world.groundHeight(p.x,p.z)));}
 const visual=createRouteGuide(new T.Scene(),world.groundHeight);visual.setPath(plan.points);visual.update(1,false,true);assert(visual.read().visible);assert(visual.read().dots<=64&&visual.read().arrows<=16);for(const mesh of visual.group.children.filter(m=>m.isInstancedMesh)){for(let i=0;i<mesh.count;i++){const matrix=new T.Matrix4();mesh.getMatrixAt(i,matrix);const p=new T.Vector3().setFromMatrixPosition(matrix);assert(Math.abs(p.y-world.groundHeight(p.x,p.z)-.065)<.001,'trail conforms to the current terrain height');}}
 current=plan.destination;visited.push(plan.stage.id);assert(finishJourneyStage(state,plan.stage.id));assert(visited.length<=9);
}
assert.equal(doorStops,1);assert.equal(visited.length,9);assert.equal(planJourneyRoute({from:current,stages:readyStages(state),npcs:world.npcs,doors:world.doors,items:world.interact,navigation}),null);
console.log(JSON.stringify({status:'passed',visited,doorStops,maxPlanMs:Math.round(maxPlanMs),checks:['actual route length beats straight-line proximity','manual destination override','no tunnelling through walls or cliffs','exact off-grid endpoint','opening doors invalidates cached routes','all nine encounters automatically planned','door approach before room entry','ground markers follow safe paths and terrain height','bounded reusable drawing instances','no destination after completion']},null,2));
