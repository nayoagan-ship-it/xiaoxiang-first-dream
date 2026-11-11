import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// The supplied nine-character board uses small solid eyes and restrained marks.
// Coordinates fit the short face below the stepped fringe, in local units.
const profiles={
 daiyu:{eyeW:.048,eyeH:.076,gap:.235,browW:.092,browH:.011,browTilt:-.045,mouth:'quiet',mouthW:.048,blush:false},
 baoyu:{eyeW:.054,eyeH:.079,gap:.235,browW:.098,browH:.014,browTilt:.04,mouth:'smile',mouthW:.109,mouthH:.048,blush:true},
 jiamu:{eyeW:.096,eyeH:.027,gap:.226,browW:.098,browH:.014,browTilt:.01,mouth:'kind',mouthW:.102,mouthH:.031,closed:true},
 fengjie:{eyeW:.052,eyeH:.078,gap:.236,browW:.106,browH:.016,browTilt:.18,mouth:'confident',mouthW:.087,mouthH:.034,blush:true},
 wang:{eyeW:.050,eyeH:.074,gap:.230,browW:.092,browH:.012,browTilt:.025,mouth:'quiet',mouthW:.052,blush:false},
 yingchun:{eyeW:.048,eyeH:.072,gap:.232,browW:.086,browH:.010,browTilt:-.025,mouth:'quiet',mouthW:.043,blush:false},
 tanchun:{eyeW:.052,eyeH:.078,gap:.235,browW:.100,browH:.014,browTilt:.10,mouth:'smile',mouthW:.101,mouthH:.041,blush:true},
 xichun:{eyeW:.050,eyeH:.078,gap:.230,browW:.082,browH:.010,browTilt:.01,mouth:'small',mouthW:.036,blush:false},
 xueyan:{eyeW:.050,eyeH:.078,gap:.230,browW:.084,browH:.011,browTilt:.025,mouth:'small',mouthW:.041,blush:false},
 matron:{eyeW:.085,eyeH:.024,gap:.225,browW:.090,browH:.013,browTilt:.01,mouth:'kind',mouthW:.091,mouthH:.028,closed:true},
 keeper:{eyeW:.050,eyeH:.074,gap:.230,browW:.091,browH:.015,browTilt:.035,mouth:'quiet',mouthW:.050,blush:false}
};
const faceMaterial=new T.MeshBasicMaterial({vertexColors:true});
faceMaterial.name='block-face-vertex-colours';faceMaterial.userData.flatFace=true;

export function createBlockFace({design,headWidth}){
 const p=profiles[design]||profiles.daiyu,group=new T.Group();group.name='Face_'+design;group.position.z=.397;
 const marks=new T.Group(),eyes=new T.Group(),mouth=new T.Group();marks.name=design+'_FaceMarks';eyes.name=design+'_Eyes';mouth.name=design+'_Mouth';eyes.position.y=1.960;mouth.position.y=1.845;group.add(marks,eyes,mouth);
 const ink=p.closed?'#49372c':'#282019',brow=p.closed?'#a08d7e':'#4a362b',lip='#ba705a';
 function polygon(name,points,color,z=0){
  const parent=name==='square-eye'||name==='smiling-eye'?eyes:name.includes('mouth')||name==='simple-smile'?mouth:marks;
  const geometry=new T.ShapeGeometry(new T.Shape(points.map(([x,y])=>new T.Vector2(x,y-parent.position.y)))),tint=new T.Color(color);
  const colours=new Float32Array(geometry.attributes.position.count*3);
  for(let i=0;i<colours.length;i+=3){colours[i]=tint.r;colours[i+1]=tint.g;colours[i+2]=tint.b;}
  geometry.setAttribute('color',new T.BufferAttribute(colours,3));
  const mesh=new T.Mesh(geometry,faceMaterial);mesh.name=name;mesh.position.z=z;mesh.castShadow=false;mesh.receiveShadow=false;parent.add(mesh);return mesh;
 }
 function rect(name,x,y,w,h,color,z=0,tilt=0){
  return polygon(name,[[-w/2,-h/2],[w/2,-h/2],[w/2,h/2],[-w/2,h/2]].map(([a,b])=>[x+a,y+b+a*tilt]),color,z);
 }
 for(const side of[-1,1]){
  const x=side*headWidth*p.gap,y=eyes.position.y;
  if(p.closed){
   polygon('smiling-eye',[[x-p.eyeW/2,y-.006],[x-p.eyeW*.42,y+p.eyeH*.63],[x-p.eyeW*.20,y+p.eyeH],[x+p.eyeW*.25,y+p.eyeH*.95],[x+p.eyeW/2,y+.006],[x+p.eyeW*.47,y-.007],[x+p.eyeW*.20,y+.006],[x-p.eyeW*.20,y+.007]],ink,.003);
   for(const j of[0,1,2])rect('smile-wrinkle',side*headWidth*.292,1.901-j*.022,.055-j*.004,.007,'#e7b49d',.001,side*.03);
  }else rect('square-eye',x,y,p.eyeW,p.eyeH,ink,.003);
  polygon('brow',[[-.5,0],[-.12,.28],[.45,.12],[.5,-.38],[.08,-.75],[-.48,-.59]].map(([a,b])=>[x+a*p.browW,2.057+b*p.browH+a*p.browW*side*p.browTilt]),brow,.002);
  if(p.blush){const cx=side*headWidth*.303;polygon('faint-cheek',[[cx-.030,1.885],[cx-.019,1.895],[cx+.022,1.895],[cx+.033,1.886],[cx+.019,1.879],[cx-.017,1.879]],'#efc2aa',.001);}
 }
 const y=mouth.position.y;
 if(['smile','confident','kind'].includes(p.mouth)){
  const w=p.mouthW,h=p.mouthH;
  const outline=[[-w/2,y+.008],[-w*.22,y+.003],[w*.25,y+.004],[w/2,y+.013],[w*.31,y-h*.64],[0,y-h*.82],[-w*.30,y-h*.55]];
  polygon('simple-smile',outline,'#a7604c',.002);
  polygon('mouth-inner',outline.map(([x,v])=>[x*.72,y-.006+(v-y)*.63]),'#de9179',.003);
 }else{const w=p.mouthW;polygon('small-mouth',[[-w*.5,y+.001],[-w*.08,y+.002],[w*.5,y+.005],[w*.45,y-.004],[-w*.40,y-.008]],lip,.002);}
 group.userData.faceProfile=design;group.userData.faceRevision=4;group.userData.faceStyle='reference-square';
 group.userData.markCount=marks.children.length+eyes.children.length+mouth.children.length;
 for(const part of[marks,eyes,mouth]){
  const geometries=part.children.map(mesh=>{const g=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();return g.translate(0,0,mesh.position.z);});
  const merged=new T.Mesh(mergeGeometries(geometries),faceMaterial);merged.name=part.name+'_Surface';merged.castShadow=false;merged.receiveShadow=false;part.clear();part.add(merged);geometries.forEach(g=>g.dispose());
 }
 group.expressions={eyes,mouth,closed:Boolean(p.closed)};
 return group;
}
