import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createPerson} from '../src/characters.js';
import {characterDesigns} from '../src/character-designs.js';
const actors=[];
for(const [design,p] of Object.entries(characterDesigns)){
 const person=createPerson({design,animated:design==='daiyu'});assert.equal(person.root.userData.characterVersion,11);assert.equal(person.root.userData.characterStyle,'block');assert.equal(person.root.userData.faceRevision,4);assert.equal(person.root.userData.faceProfile,design);assert.equal(person.root.userData.faceStyle,'reference-square');assert(person.height>1.5&&person.height<3.5);assert.equal(Object.keys(person.parts).length,4);
 let triangles=0,faceDraws=0;
 person.root.traverse(o=>{if(!o.isMesh)return;assert(o.material.name.startsWith('block-'));assert(!o.material.map);const g=o.geometry,n=g.attributes.normal,a=g.attributes.position;assert(!g.index);triangles+=a.count/3;
  if(o.material.name==='block-face-vertex-colours'){faceDraws++;assert(o.material.vertexColors);assert(g.attributes.color);assert(!o.castShadow&&!o.receiveShadow);}
  for(let i=0;i<a.array.length;i++)assert(Number.isFinite(a.array[i]));
  for(let i=0;i<n.count;i+=3)for(let k=1;k<3;k++)assert(Math.abs(n.getX(i)-n.getX(i+k))+Math.abs(n.getY(i)-n.getY(i+k))+Math.abs(n.getZ(i)-n.getZ(i+k))<1e-5,'Curved surface in '+design);
 });assert.equal(faceDraws,3,design+' should have separately animated marks, eyes and mouth');assert.equal(person.root.userData.rigRevision,1);assert(person.rig.body.parent===person.root);assert(person.rig.head.parent===person.rig.body);for(const[key,limb]of Object.entries(person.parts))assert.equal(limb.parent,key.endsWith('Arm')?person.rig.body:person.root);assert(triangles<2500,design+' exceeds simple block budget');actors.push({design,name:p.name,pose:person.root.userData.poseName,blocks:person.root.userData.blockCount,triangles,faceDraws,height:person.height});
}
const report={status:'passed',faceRevision:4,checks:['all eleven actors use block-only materials and planar faces','reference square-eye facial style','distinct facial profiles for all actors','no avatar texture dependency','articulated player limbs','bounded block geometry'],actors};fs.writeFileSync('outputs/block-geometry-verification-v11.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
