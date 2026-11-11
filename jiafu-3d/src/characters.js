import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {characterDesigns} from './character-designs.js';
import {createBlockFace} from './block-faces.js';
import {ConvexGeometry} from 'three/addons/geometries/ConvexGeometry.js';
import {configureCharacter} from './character-motion.js';

const cube=new T.BoxGeometry(1,1,1),materials=new Map();
// Tiny flat chamfers catch the light while keeping the head a square block.
function chamferedBlock(w,h,d,c){
 const points=[];
 for(const x of[-1,1])for(const y of[-1,1])for(const z of[-1,1])for(let axis=0;axis<3;axis++){
  const v=[x*(w/2-c),y*(h/2-c),z*(d/2-c)];v[axis]+=[x,y,z][axis]*c;points.push(new T.Vector3(...v));
 }
 const geometry=new ConvexGeometry(points);geometry.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(geometry.attributes.position.count*2),2));return geometry;
}
export const characterAssetsReady=()=>Promise.resolve(true);
const palette={
 daiyu:{robe:'#90aa9b',skirt:'#eddfc3',accent:'#d5a3a5',hair:'#30251f'},
 baoyu:{robe:'#a94736',skirt:'#eee1c9',trim:'#d0a156',hair:'#33261e'},
 jiamu:{robe:'#6d536b',skirt:'#554250',trim:'#d4b77a',hair:'#aaa39d'},
 fengjie:{robe:'#a64535',skirt:'#bc8a46',trim:'#d6ad60',hair:'#30231e'},
 wang:{robe:'#5b708a',skirt:'#4e6075',trim:'#e6ddc9',hair:'#302824'},
 yingchun:{robe:'#d7a99b',skirt:'#e9ddc5',trim:'#a4b7a2'},
 tanchun:{robe:'#d4a28c',skirt:'#eadfc6',trim:'#93b494'},
 xichun:{robe:'#dda5ac',skirt:'#ede1ce',trim:'#e6c9c2'},
 xueyan:{robe:'#9aadaa',skirt:'#a4ad95',trim:'#e5dfc9',accent:'#c68e9d'}
};
function mat(name,color,{face=false}={}){
 const key=name+color;if(!materials.has(key)){
  const m=face?new T.MeshBasicMaterial({color}):new T.MeshStandardMaterial({color,roughness:.84,metalness:0,flatShading:true});
  m.name='block-'+name;m.userData.flatFace=face;materials.set(key,m);
 }return materials.get(key);
}
function batch(group){
 group.updateMatrixWorld(true);const inverse=group.matrixWorld.clone().invert(),bins=new Map();
 group.traverse(o=>{if(!o.isMesh)return;const geo=(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,o.matrixWorld));
  if(!bins.has(o.material.uuid))bins.set(o.material.uuid,{m:o.material,geos:[]});bins.get(o.material.uuid).geos.push(geo);
 });group.clear();
 for(const{m,geos}of bins.values()){const mesh=new T.Mesh(mergeGeometries(geos,false),m);mesh.castShadow=!m.userData.flatFace;mesh.receiveShadow=!m.userData.flatFace;group.add(mesh);geos.forEach(g=>g.dispose());}
}
// Every visible form is a box or a flat-sided prism. No curved-body fallback.
export function createPerson({design='daiyu',name,animated=false}={}){
 const p={...(characterDesigns[design]||characterDesigns.daiyu),...palette[design]},root=new T.Group(),fixed=new T.Group(),parts={};root.name=name||p.name;root.add(fixed);
 root.userData.characterDesign=design;root.userData.characterVersion=11;root.userData.characterStyle='block';root.userData.faceRevision=4;root.userData.faceProfile=design;root.userData.faceStyle='reference-square';let blockCount=0;
 const M={skin:mat('skin','#ffdbb7'),robe:mat(design+'-robe',p.robe),skirt:mat(design+'-skirt',p.skirt),skirtLight:mat(design+'-skirt-light',new T.Color(p.skirt).lerp(new T.Color('#f4e7d1'),.05).getStyle()),trim:mat(design+'-trim',p.trim),hair:mat(design+'-hair',p.hair),hairShade:mat(design+'-hair-shade',new T.Color(p.hair).multiplyScalar(.88).getStyle()),accent:mat(design+'-accent',p.accent),cream:mat('cream','#f3e5cc'),gold:mat('gold','#d0a353'),jade:mat('jade','#a8c39b'),wood:mat('wood','#805537'),ink:mat('ink','#251d19',{face:true}),lip:mat('lip','#aa6655',{face:true}),blush:mat('blush','#dcaa95',{face:true}),brow:mat(design+'-brow',p.expression==='elder'?'#8c847d':'#44352b',{face:true})};
 function mesh(g,m,x=0,y=0,z=0,parent=fixed,rz=0){const o=new T.Mesh(g,M[m]||m);o.position.set(x,y,z);o.rotation.z=rz;parent.add(o);blockCount++;return o;}
 const B=(m,x,y,z,w,h,d,parent=fixed,rz=0)=>{const o=mesh(cube,m,x,y,z,parent,rz);o.scale.set(w,h,d);return o;};
 function prism(m,x,y,z,bottomW,topW,h,bottomD,topD,parent=fixed){
  const v=[[-bottomW/2,-h/2,bottomD/2],[bottomW/2,-h/2,bottomD/2],[bottomW/2,-h/2,-bottomD/2],[-bottomW/2,-h/2,-bottomD/2],[-topW/2,h/2,topD/2],[topW/2,h/2,topD/2],[topW/2,h/2,-topD/2],[-topW/2,h/2,-topD/2]],faces=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],pos=[],uv=[];
  for(const f of faces)for(const i of[0,1,2,0,2,3]){pos.push(...v[f[i]]);uv.push([[0,0],[1,0],[1,1],[0,1]][i][0],[[0,0],[1,0],[1,1],[0,1]][i][1]);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.computeVertexNormals();return mesh(g,m,x,y,z,parent);
 }
 function bar(m,a,b,width=.04,depth=.035,parent=fixed){const start=new T.Vector3(...a),end=new T.Vector3(...b),dir=end.clone().sub(start),o=B(m,...start.clone().add(end).multiplyScalar(.5).toArray(),width,dir.length(),depth,parent);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),dir.normalize());return o;}
 function frame(m,x,y,z,w,h,thickness=.035){B(m,x-w/2+thickness/2,y,z,thickness,h,.045);B(m,x+w/2-thickness/2,y,z,thickness,h,.045);B(m,x,y-h/2+thickness/2,z,w,thickness,.045);B(m,x,y+h/2-thickness/2,z,w,thickness,.045);}
 function flower(x,y,z){B('cream',x,y,z,.18,.065,.055);B('cream',x,y,z,.065,.18,.055);B('gold',x,y,z+.035,.04,.04,.018);}
 function knot(x,y,z,w=.48,h=.14){B('hair',x,y,z,w,h,w*.75);B('hairShade',x-w*.12,y+h*.72,z-.025,w*.64,h*.7,w*.61);}
 function tie(x,y,z,m='accent'){B(m,x,y,z,.18,.055,.045);B(m,x-.067,y-.13,z,.055,.27,.025);}
 function hanky(){const group=new T.Group();group.name=design+'_Handkerchief';group.position.set(0,.735,.345);fixed.add(group);B('cream',0,0,0,.235,.28,.018,group,.08);B('accent',0,-.045,.015,.065,.065,.008,group);B('jade',.043,-.003,.015,.035,.035,.008,group);B('accent',-.034,.015,.015,.035,.035,.008,group);return group;}

 const bodyW=(p.bodyWidth||1),headW=.94*(p.faceWidth||1);
 prism('skirt',0,.575,0,.82*bodyW,.44*bodyW,.83,.59,.35);
 // A few large pleat planes preserve the reference's stepped hem.
 for(const i of[-2,-1,0,1,2])prism(i%2?'skirtLight':'skirt',i*.13,.52,.265,.13,.085,.70,.035,.018);
 prism('robe',0,1.235,0,.51*bodyW,.61*bodyW,.53,.40,.45);
 prism('robe',0,.86,-.205,.74*bodyW,.52*bodyW,.65,.09,.07);
 for(const side of[-1,1]){
  prism('robe',side*.26*bodyW,.85,.215,.22,.15,.65,.10,.065);
  B('robe',side*.285*bodyW,.91,0,.12,.53,.43);
  bar('cream',[side*.16,1.49,.238],[0,1.12,.247],.085,.028);
 }
 B('trim',0,1.005,.0,.565*bodyW,.075,.448);
 if(design==='fengjie')B('wood',0,1.008,.235,.56,.079,.03);
 B('skin',0,1.535,0,.20,.24,.22);
 const headStart=fixed.children.length;
 mesh(chamferedBlock(headW,.64,.78,.023),'skin',0,2.020,0);
 for(const side of[-1,1])B('skin',side*(headW/2+.035),1.87,-.02,.115,.18,.14);
 const face=createBlockFace({design,headWidth:headW});blockCount+=face.userData.markCount;fixed.add(face);

 // Layered rectangular hair masses, with a different arrangement for each role.
 B('hair',0,2.385,-.035,headW+.10,.19,.88);
 B('hairShade',0,2.035,-.395,headW+.075,.61,.145);
 const mature=p.hairdo==='elder'||p.beads;
 for(const side of[-1,1])B('hair',side*(headW/2-.015),mature?2.13:2.06,-.055,.16,mature?.40:.58,.72);
 if(mature){B('hair',0,2.29,.351,headW*.72,.12,.10);for(const side of[-1,1])B('hair',side*headW*.39,2.245,.335,headW*.21,.19,.115);}
 else{
  B('hair',-headW*.28,2.265,.394,headW*.44,.29,.14);B('hair',headW*.045,2.31,.407,headW*.25,.20,.13);B('hair',headW*.295,2.27,.385,headW*.29,.28,.14);
  for(const side of[-1,1])B('hair',side*headW*.40,1.745,.265,.105,.31,.115);
 }
 if(p.hairdo==='long'){
  B('hair',0,1.51,-.465,.65,1.56,.17);knot(0,2.535,-.19,.54,.15);flower(-headW*.43,2.40,.49);
 }else if(p.hairdo==='crown'){
  knot(0,2.53,-.18,.35,.13);B('hair',0,1.70,-.46,.36,.95,.16);frame('gold',0,2.535,.085,.26,.15,.04);B('wood',0,2.535,.073,.12,.06,.022);
  B('accent',.18,2.30,-.50,.065,.39,.025);
 }else if(p.hairdo==='elder'){
  knot(0,2.53,-.17,.68,.16);for(const i of[-2,-1,0,1,2])B('gold',i*.145,2.50,.35,.085,.063,.065);B('jade',.045,2.53,.309,.145,.175,.055);B('cream',.045,2.53,.341,.065,.075,.014);
 }else if(p.hairdo==='high'){
  knot(0,2.545,-.17,.57,.16);B('hair',-.07,2.735,-.18,.31,.17,.30);
  if(p.goldPins){frame('gold',0,2.575,.17,.22,.13,.036);for(const side of[-1,1]){B('gold',side*.51,2.44,.10,.17,.065,.065);B('gold',side*.54,2.29,.04,.045,.30,.045);B('gold',side*.54,2.12,.04,.085,.085,.065);}}
  else{B('jade',-.245,2.56,.23,.28,.055,.065);B('cream',-.32,2.56,.235,.09,.08,.07);}
 }else if(p.hairdo==='double'){
  const high=design==='xueyan';for(const side of[-1,1]){B('hair',side*.42,high?2.53:2.43,-.13,.29,high?.23:.18,.29);tie(side*.43,high?2.40:2.32,.155,high?'trim':'accent');}
 }else if(p.hairdo==='cap'){
  B('hairShade',0,2.44,-.04,headW+.13,.13,.90);B('hair',0,2.555,-.06,.64,.16,.62);
 }else{
  knot(0,2.515,-.20,.51,.13);if(p.flower)flower(-headW*.44,2.39,.49);else{B('jade',-.29,2.42,.49,.21,.055,.065);B('gold',-.20,2.42,.49,.06,.065,.065);}
 }
 if(p.goldPins||p.pearls)for(const side of[-1,1]){B('gold',side*(headW/2+.04),1.795,.025,.035,.07,.035);B('cream',side*(headW/2+.04),1.75,.025,.065,.07,.055);}
 // Seat the compact head close to the collar, as in the supplied board.
 const headObjects=fixed.children.slice(headStart);for(const object of headObjects)object.position.y-=.065;

 for(const side of[-1,1]){
  const arm=new T.Group();arm.position.set(side*.34*bodyW,1.35,0);root.add(arm);parts[side===1?'rightArm':'leftArm']=arm;
  const gripping=p.cane&&side===1;
  if(gripping){B('robe',0,-.16,0,.32,.36,.36,arm);B('trim',.06,-.30,.06,.34,.09,.37,arm);B('skin',.14,-.31,.19,.16,.16,.16,arm);arm.rotation.x=0;arm.rotation.z=0;}
  else{
   prism('robe',0,-.22,0,.34,.28,.49,.36,.32,arm);B('trim',0,-.455,0,.35,.075,.375,arm);B('skin',0,-.558,.032,.165,.17,.17,arm);
   arm.rotation.z=-side*(p.bundle?.12:.45);arm.rotation.x=p.bundle?-.65:-.50;
   if(side===1&&p.expression==='bright'){arm.rotation.z=1.78;arm.rotation.x=-.10;}
  }
  arm.userData.restRotation={x:arm.rotation.x,z:arm.rotation.z};
  const leg=new T.Group();leg.position.set(side*.155,.29,0);root.add(leg);parts[side===1?'rightLeg':'leftLeg']=leg;
  B('skirt',0,-.10,0,.13,.23,.16,leg);B('wood',0,-.21,.075,.23,.15,.37,leg);B('cream',0,-.265,.075,.24,.035,.38,leg);
 }
 if(p.shawl)for(const side of[-1,1]){
  B('accent',side*.282,1.24,.225,.13,.30,.11,fixed,side*.09);
  bar('accent',[side*.29,1.18,.298],[side*.37,.39,.32],.135,.045);
 }const handkerchief=p.shawl||design==='fengjie'||design==='xichun'?hanky():null;
 if(p.jade){B('gold',0,1.22,.252,.018,.18,.018);B('jade',0,1.075,.28,.20,.22,.07);B('cream',0,1.075,.322,.10,.12,.015);}
 if(design==='baoyu'){B('gold',.285,.80,.267,.018,.13,.025);B('trim',.29,.665,.285,.20,.23,.08);B('cream',.29,.665,.331,.045,.045,.012);}
 if(p.beads){for(const i of[-1,0,1])B('wood',i*.082,.82,.365,.063,.063,.06);for(const side of[-1,1])for(const j of[0,1,2])B('wood',side*.125,.88+j*.069,.365,.061,.061,.06);}
 if(p.bundle){B('accent',0,.99,.32,.47,.40,.32);B('cream',0,.99,.488,.045,.40,.014);B('cream',0,1.07,.489,.47,.04,.016);B('accent',-.05,1.21,.37,.10,.045,.13);B('accent',.06,1.21,.37,.10,.045,.13);}
 const floorProps=new T.Group();floorProps.name=design+'_GroundProps';root.add(floorProps);
 if(p.cane){B('wood',.53,.59,.21,.065,1.15,.065,floorProps);B('wood',.54,1.17,.21,.24,.08,.10,floorProps);}
 const body=new T.Group(),head=new T.Group(),headFixed=new T.Group();body.name=design+'_Body';head.name=design+'_Head';headFixed.name=design+'_HairAndFace';body.position.y=.85;head.position.y=1.60;root.add(body,head);head.add(headFixed);
 root.updateMatrixWorld(true);
 for(const object of headObjects)if(object!==face)headFixed.attach(object);
 head.attach(face);body.attach(fixed);body.attach(head);
 for(const[key,limb]of Object.entries(parts)){limb.name=design+'_'+key;if(key.endsWith('Arm'))body.attach(limb);}
 const rig={body,head,face},person={root,parts,rig};configureCharacter(person,design);
 if(design==='fengjie'&&handkerchief){parts.leftArm.add(handkerchief);handkerchief.position.set(0,-.70,.10);handkerchief.rotation.set(-person.motion.pose.left[0],0,-person.motion.pose.left[2]+.08);}
 root.userData.blockCount=blockCount;root.scale.setScalar(p.scale);
 batch(fixed);batch(headFixed);for(const limb of Object.values(parts))batch(limb);if(floorProps.children.length)batch(floorProps);
 root.updateMatrixWorld(true);const bounds=new T.Box3().setFromObject(root),height=bounds.max.y-bounds.min.y;root.userData.height=height;
 return{...person,height,fineMeshes:[],ready:Promise.resolve(true)};
}
