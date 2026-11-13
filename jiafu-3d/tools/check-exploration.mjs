import assert from 'node:assert/strict';
import {journeyStages,journeyNodes,sisterIds,initializeJourney,readyStages,finishJourneyStage,validJourneyPending} from '../src/exploration-story.js';
import {createWorld} from '../src/world.js';
import {createNavigation} from '../src/navigation.js';
const fresh=()=>{const s={arrived:false,complete:false,scores:{reserve:0,warmth:0,resonance:0}};initializeJourney(s);return s;};
assert.deepEqual(readyStages(fresh()).map(s=>s.id),['gate']);
for(const stage of journeyStages.filter(s=>s.id!=='gate')){
 const visited=new Set();function walk(id,stack=[]){if(id==='WALK_END')return;assert(!stack.includes(id));const node=journeyNodes[id];assert(node&&node.stage===stage.id);visited.add(id);if(node.options)for(const o of node.options){assert(Object.values(o.effect).every(v=>Number.isFinite(v)&&v>=0&&v<=2));walk(o.next,[...stack,id]);}else walk(node.next,[...stack,id]);}
 walk('walk-'+stage.id+'-0');assert.equal(visited.size,Object.values(journeyNodes).filter(n=>n.stage===stage.id).length);
 assert(validJourneyPending({kind:'walk',id:'walk-'+stage.id+'-0',tag:'walk:'+stage.id}));
}
const permutations=ids=>ids.length?ids.flatMap((id,i)=>permutations(ids.filter((_,j)=>i!==j)).map(rest=>[id,...rest])):[[]];
const world=createWorld(),nav=createNavigation(world.bounds,world.solid,.34,.5,world.groundHeight),routes=[];
for(const order of permutations(sisterIds)){
 const state=fresh();assert(!finishJourneyStage(state,'baoyu'));let from=world.spawn,total=0;world.doors[0].collider.enabled=true;
 for(const id of ['gate','reception','fengjie',...order,'wang','baoyu','settle']){
  assert(readyStages(state).some(s=>s.id===id),id+' unlocked by conversations');
  const stage=journeyStages.find(s=>s.id===id),npc=world.npcs.find(n=>n.id===stage.npc);
  if(stage.door){const door=world.doors.find(d=>d.id===stage.door);if(door.collider.enabled){const stop=world.interact.find(i=>i.id===door.id);assert(nav.route(from.x,from.z,stop.x,stop.z).length);door.collider.enabled=false;}}
  assert(nav.valid(npc.approach.x,npc.approach.z));const route=nav.route(from.x,from.z,npc.approach.x,npc.approach.z);assert(route.length,id+' can be reached');let previous=from;
  for(const point of route){assert(nav.canMove(previous.x,previous.z,point.x,point.z),id+' continuous path');previous=point;}
  const closest=[...world.interact,...world.npcs].map(n=>({id:n.id,d:Math.hypot(n.x-npc.approach.x,n.z-npc.approach.z)})).sort((a,b)=>a.d-b.d)[0];assert.equal(closest.id,npc.id,id+' dialogue can be selected without an object taking priority');
  if(npc.room)assert(world.rooms.find(r=>r.id===npc.room).contains(npc.approach.x,npc.approach.z,.25));
  total+=route.length;from=npc.approach;assert(finishJourneyStage(state,id));assert(!finishJourneyStage(state,id));
 }
 assert(state.complete&&state.arrived);assert.equal(state.journeyDone.length,9);assert.equal(readyStages(state).length,0);routes.push({sisterOrder:order,walkingGridSteps:total});
}
const old={complete:true,arrived:true,introChoice:2,scores:{resonance:1},discoveries:['petals'],x:29,z:-19};initializeJourney(old);assert.deepEqual(old.journeyDone,['gate']);assert.equal(old.complete,false);assert(old.legacyFirstActComplete);assert.equal(old.storyChoices['arrival-choice'],2);assert.equal(old.x,29);assert.deepEqual(old.discoveries,['petals']);assert.equal(old.scores.resonance,1);initializeJourney(old);assert.deepEqual(old.journeyDone,['gate']);
assert.equal(world.npcs.filter(n=>n.room==='hall').length,1);assert(world.npcs.find(n=>n.id==='xichun').root.position.y>5.5);
console.log(JSON.stringify({status:'passed',storyNodes:Object.keys(journeyNodes).length,stages:9,routes,checks:['all story branches terminate','all six sister visit orders','collision and height-safe walking between conversations','no NPC or doorway obstruction','every conversation approach selects the actor','only grandmother remains in main hall','old progress, position, discoveries and choice retained']},null,2));
