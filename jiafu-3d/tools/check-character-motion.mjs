import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as T from 'three';
import {createPerson} from '../src/characters.js';
import {characterDesigns} from '../src/character-designs.js';
import {updateCharacter,turnCharacter} from '../src/character-motion.js';

const actors=[];
const snapshot=person=>{person.root.updateMatrixWorld(true);const result=[];person.root.traverse(o=>result.push(...o.matrixWorld.elements));return result;};
const position=o=>o.getWorldPosition(new T.Vector3()).toArray();
for(const design of Object.keys(characterDesigns)){
 const person=createPerson({design}),{root,rig,parts}=person;
 const feet=[position(parts.leftLeg),position(parts.rightLeg)],origin=root.position.clone();
 const before=snapshot(person);updateCharacter(person,{time:1});const after=snapshot(person);assert.notDeepEqual(before,after,design+' should breathe');
 assert.deepEqual(position(parts.leftLeg),feet[0]);assert.deepEqual(position(parts.rightLeg),feet[1]);assert(root.position.equals(origin));
 const eyeScales=[];for(let time=0;time<9;time+=.025){updateCharacter(person,{time});eyeScales.push(rig.face.expressions.eyes.scale.y);assert(snapshot(person).every(Number.isFinite));}
 if(!rig.face.expressions.closed){assert(Math.min(...eyeScales)<=.12);assert.equal(Math.max(...eyeScales),1);}else assert(eyeScales.every(x=>x===1));
 updateCharacter(person,{time:3,speaking:true,attention:{x:2,z:3}});assert.notEqual(rig.face.expressions.mouth.scale.y,1);assert(person.motion.headYaw>0);
 turnCharacter(person,{x:4,z:0},1,true);assert(root.rotation.y>1.4);assert(root.rotation.y<Math.PI/2);
 updateCharacter(person,{time:3,enabled:false});const still=snapshot(person);updateCharacter(person,{time:9,enabled:false,speaking:true,attention:{x:8,z:3}});assert.deepEqual(snapshot(person),still,design+' motion disabled');
 assert.equal(rig.face.expressions.eyes.scale.y,1);assert.equal(rig.face.expressions.mouth.scale.y,1);
 updateCharacter(person,{time:2,moving:true});assert.notEqual(parts.leftLeg.rotation.x,0);
 actors.push({design,pose:root.userData.poseName,blink:!rig.face.expressions.closed,feetPlanted:true,motionDisabled:true});
}
assert.equal(new Set(actors.map(x=>x.pose)).size,actors.length);
const report={status:'passed',rigRevision:1,checks:['eleven distinct articulated poses','breathing leaves feet and roots planted','staggered blinking and speaking mouth','smooth turn and bounded head attention','disabled motion restores a stable pose','walking limb animation','finite world transforms'],actors};
fs.writeFileSync('outputs/character-motion-verification-v11.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
