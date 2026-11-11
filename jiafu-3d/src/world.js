import * as T from 'three';
import {createArchitecture} from './architecture.js';
import {createPerson,characterAssetsReady} from './characters.js';
import {npcSpecs,playerSpec} from './character-roster.js';
import {createVegetation} from './vegetation.js';
import {createGardenRockery} from './rockery.js';
import {levels,terraces,stairs,terrainHeight,onStair,buildTerrain} from './terrain.js';
import {buildInteriors} from './interiors.js';
export {createPerson} from './characters.js';

export const bounds={minX:-38,maxX:38,minZ:-31,maxZ:32};
export const spawn={x:20,z:25};
export const landmarks={spawn,mainEntrance:{x:-2.5,z:-6.5},mainInterior:{x:-4,z:-10},rockerySouth:{x:-24.5,z:12},rockeryNorth:{x:-24.5,z:2},hillBase:{x:-29.8,z:17.3},hillTop:{x:-32,z:-.7},bridgeBase:{x:23,z:.2},pavilion:{x:29,z:-19},groundClick:{x:17,z:20}};
export const places=[
 {id:'arrival',name:'停轿小院',x:22,z:27,rect:[14,21,37,31]},
 {id:'gate',name:'垂花门',x:10,z:19,rect:[-1,14,25,31]},
 {id:'court',name:'插屏内院',x:-2,z:9,rect:[-16,0,16,15]},
 {id:'study',name:'西厢书阁',x:-25,z:-18,rect:[-37,-29,-17,-10]},
 {id:'rockery',name:'叠石听风',x:-28,z:3,rect:[-37,-9,-17,15]},
 {id:'garden',name:'曲水亭园',x:27,z:-12,rect:[16,-29,37,16]},
 {id:'hall',name:'正房前庭',x:-4,z:-10,rect:[-17,-22,10,1]},
 {id:'guest',name:'东侧绣楼',x:10,z:-25,rect:[-16,-30,16,-22]}
];
export const pondOutline=[[20,-22],[26,-25],[32,-23],[35,-18],[34,-12],[35,-7],[31,-3],[26,-2],[22,-5],[19,-10],[18,-16]];
const clamp=T.MathUtils.clamp;
function inPolygon(x,z,points){let inside=false;for(let i=0,j=points.length-1;i<points.length;j=i++){const a=points[i],b=points[j];if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
export function createWorld(){
 const root=new T.Group();root.name='Rongguo_Manor_Block_Characters_V11';
 const solid=[],roofs=[],doors=[],interact=[],animated=[];
 const a=createArchitecture(root,solid,roofs),{mats,mat,mesh,box,beam,ball,cyl,obstacle,wall,wallGaps,paving,path,roof,column,room,corridor,pavilion,lantern}=a;
 const bridges=[{x:23,z:-4.1,w:2,d:6.2},{x:25,z:-7.4,w:6,d:2},{x:27,z:-10.7,w:2,d:8.6},{x:28,z:-14.4,w:4,d:2},{x:29,z:-17,w:2,d:6.2}];
 const mapData={paving:[],paths:[],pond:pondOutline,bridges,trees:[],rocks:[]};
 const pave=(x,z,w,d,o={})=>{paving(x,z,w,d,{y:groundHeight(x,z),...o});mapData.paving.push({x,z,w,d});};
 const trail=(pts,w=2.1,y)=>{path(pts,w,y??((x,z)=>groundHeight(x,z)+.01));mapData.paths.push({points:pts,width:w});};
 const gallery=(pts,o)=>{corridor(pts,{groundAt:groundHeight,...o});mapData.paths.push({points:pts,width:o?.width||2.35});};
 const rect=(x,z,x0,z0,x1,z1)=>x>=x0&&x<=x1&&z>=z0&&z<=z1;
 function bridgeAt(x,z){return bridges.some(b=>Math.abs(x-b.x)<=b.w/2&&Math.abs(z-b.z)<=b.d/2);}
 function groundHeight(x,z){
  if(bridgeAt(x,z))return .12+.45*clamp((-1-z)/1.1,0,1);
  if(Math.hypot(x-29,z+19)<3.1)return .57;
  return terrainHeight(x,z);
 }
 // Intersect the real walk surfaces, rather than a flat plane underneath raised courts.
 function pickGround(ray){
  let nearest=null,distance=Infinity;
  const candidate=(x,z,y,mx,mz,accept)=>{const normal=new T.Vector3(-mx,1,-mz),plane=new T.Plane(normal,-y+mx*x+mz*z).normalize(),hit=ray.intersectPlane(plane,new T.Vector3());if(!hit||!accept(hit.x,hit.z)||Math.abs(hit.y-groundHeight(hit.x,hit.z))>.03)return;const d=hit.distanceTo(ray.origin);if(d<distance){nearest=hit;distance=d;}};
  candidate(0,0,.12,0,0,(x,z)=>x>bounds.minX&&x<bounds.maxX&&z>bounds.minZ&&z<bounds.maxZ);
  for(const r of terraces)candidate(r.x,r.z,r.y,0,0,(x,z)=>Math.abs(x-r.x)<=r.w/2&&Math.abs(z-r.z)<=r.d/2);
  for(const s of stairs){const dx=s.to[0]-s.from[0],dz=s.to[1]-s.from[1],ll=dx*dx+dz*dz,mx=(s.high-s.low)*dx/ll,mz=(s.high-s.low)*dz/ll;candidate(...s.from,s.low,mx,mz,(x,z)=>Math.abs(x-(s.from[0]+s.to[0])/2)<=(Math.abs(dx)||s.width)/2&&Math.abs(z-(s.from[1]+s.to[1])/2)<=(Math.abs(dz)||s.width)/2);}
  candidate(0,0,.57,0,0,(x,z)=>bridgeAt(x,z)||Math.hypot(x-29,z+19)<3.1);
  candidate(23,-1,.12,0,-.45/1.1,(x,z)=>Math.abs(x-23)<=1&&z<=-1&&z>=-2.1);
  return nearest;
 }
 function item(id,name,x,z,kind,text,extra={}){const v={id,name,x,z,kind,text,...extra};interact.push(v);return v;}
 const vegetation=createVegetation(a,mapData,groundHeight),{tree,bamboo,shrub}=vegetation;
 function rock(x,z,s=1,{y=groundHeight(x,z)-.12,tall=1,collide=true}={}){const g=new T.IcosahedronGeometry(1,1),pos=g.attributes.position;for(let i=0;i<pos.count;i++){const px=pos.getX(i),py=pos.getY(i),pz=pos.getZ(i),k=1+.14*Math.sin(px*17+py*11+pz*7);pos.setXYZ(i,px*k,py*k,pz*k);}g.computeVertexNormals();mesh(g,mat('rock','#acae9b'),x,y+s*.65*tall,z,s,s*.8*tall,s*.73,.5);if(collide)obstacle(x,z,s*1.45,s*1.1,'rock');mapData.rocks.push({x,z,r:s});}
 function planter(x,z,w,d,{pink=false}={}){const ground=groundHeight(x,z);box(x,ground+.18,z,w,.48,d,'stone');box(x,ground+.44,z,w-.18,.06,d-.18,'soil');for(let xx=x-w/2+.5;xx<x+w/2;xx+=.8)for(let zz=z-d/2+.4;zz<z+d/2;zz+=.8)shrub(xx,zz,.65,pink,ground+.46);obstacle(x,z,w,d,'planter');}
 function table(x,z,w=2,d=1.1,y=groundHeight(x,z)){box(x,y+.62,z,w,.16,d,'wood');for(const xx of[-w*.36,w*.36])for(const zz of[-d*.32,d*.32])box(x+xx,y+.3,z+zz,.1,.6,.1,'wood');obstacle(x,z,w,d,'table');}
 function bench(x,z,y=groundHeight(x,z)){box(x,y+.35,z,1.9,.14,.62,'wood');for(const s of[-1,1])box(x+s*.66,y+.15,z,.12,.3,.5,'wood');obstacle(x,z,1.9,.65,'bench');}
 function vase(x,z,y=groundHeight(x,z)+.78){mesh(ball,mat('porcelain','#dbe3d6'),x,y,z,.16,.22,.16);mesh(cyl,mats.jade,x,y+.22,z,.065,.14,.065);}

 // Composition follows the approved miniature: front-centre arrival, central raised hall,
 // left rock garden, right long pond and a pair of taller buildings behind the hall.
 box(0,-.72,.5,79,1.4,66,mat('foundation','#74816a'));box(0,-1.35,.5,80,.25,67,'gold');box(0,.015,.5,76,.12,63,'grass');
 wallGaps('z',31,-38,38,[[20,26]],{height:1.85});wall(0,-30.5,76,.4,{height:3.3});wall(-37.5,.2,.4,62,{height:2.1});wall(37.5,.2,.4,62,{height:2.1});
 buildTerrain(a,mapData);
 pave(22,26.5,13,8.5);pave(11.5,19,7,9);pave(-1,8.5,13,9);pave(-4,4.5,21,4);pave(-26,26,12,4);
 trail([[23,31],[23,25],[18,24],[14,23],[10,18.8],[6,18],[5,18.5],[5,14],[-1,13],[-4,7],[-4,2.5]],2.4);
 trail([[17,20],[21,18],[22,13],[22,6],[23,0]],2.2);
 trail([[14,23],[14,29],[-2,29],[-17,28],[-26,26],[-26,24]],2.2);
 trail([[-18,26],[-18,21],[-18,16],[-25,16],[-29.8,17.3]],2.1);
 trail([[-24.5,14],[-24.5,2],[-25,-4],[-25,-10],[-25,-12.5]],2.2);
 trail([[-18,16],[-21,11.8],[-16,11.8],[-14,4],[-10,3],[-7,2.5]],2.2);
 trail([[-34,19],[-36.3,19],[-36.3,-7],[-33,-12]],1.2);
 trail([[-25,-11],[-20,-12],[-20,-23],[-18,-23],[-12,-23],[-12,-26],[0,-28]],2.1);
 trail([[7,4],[13,4],[18,4],[23,0],[35.8,0],[35.8,-24],[32,-27],[17,-27]],2.1);
 trail([[10,-20],[10,-19.5],[10,-15],[14,-14],[16,-14],[16,-6],[18,4]],2.1);
 // Short enclosure walls produce pocket courtyards without slicing the central hall footprint.
 wallGaps('z',14,-16,13,[[2,8]],{height:1.05,base:levels.court});
 wallGaps('x',-17,2,28,[[10,18],[24,28]],{height:1.6});
 wallGaps('x',10,16,21.8,[[17.1,20.5]],{height:1.65});
 wallGaps('z',23,-35,-17,[[-32,-17]],{height:1.45});
 wallGaps('z',-8,-36,-19,[[-36,-33],[-26.2,-22.8]],{height:1.35});
 // Outer gate and sedan now share the reference's foreground centre.
 for(const x of[19.8,26.2])column(x,31,3);roof(23,31,9,3.6,3.12,'West_Gate',{height:1.3});lantern(20.3,30.5,2.45);lantern(25.7,30.5,2.45);
 // An actual circular opening connects the small forecourt to the main route.
 const moon=new T.Shape();moon.moveTo(-2.8,0);moon.lineTo(2.8,0);moon.lineTo(2.8,3.35);moon.lineTo(-2.8,3.35);moon.closePath();
 const hole=new T.Path();hole.absarc(0,1.48,1.44,0,Math.PI*2,true);moon.holes.push(hole);
 mesh(new T.ExtrudeGeometry(moon,{depth:.32,bevelEnabled:false}),mats.ivory,10,.12,18.8,1,1,1,Math.PI/2);
 mesh(new T.TorusGeometry(1.44,.105,6,48),mats.stone,10.2,1.6,18.8,1,1,1,Math.PI/2);
 box(10,3.55,18.8,.65,.16,5.9,'roof');obstacle(10,16.4,.4,1.1,'moon-gate');obstacle(10,21.2,.4,1.1,'moon-gate');
 for(const x of[2,8])column(x,14,2.6,levels.court);roof(5,14,8,3.6,levels.court+2.6,'Hanging_Flower_Gate',{height:1.2});lantern(2.7,14,levels.court+2.1);lantern(7.3,14,levels.court+2.1);
 // Screen, then the broad hall stairs, anchor the middle of the procession.
 a.elevated(()=>{
 box(-1,1.42,9,5.7,2.6,.4,'stone');box(-1,1.45,9.23,5.1,1.95,.055,mat('marble','#dfdbc9'));box(-1,2.8,9,6.1,.18,.65,'roof');for(const x of[-3.5,1.5])box(x,.24,9,.75,.35,1.3,'stone');obstacle(-1,9,6,.65,'screen');
 for(let i=0;i<3;i++)beam([-3.1+i*1.3,1,9.28],[-2.3+i*1.3,2.1,9.28],.035,mat('marble-vein','#bcbfae'));
 },levels.court-.12);
 gallery([[-14,13],[-14,4],[-10,3]],{height:2.25,name:'West_Embracing_Gallery'});
 gallery([[8,12],[11,6],[10,3]],{height:2.25,name:'East_Embracing_Gallery'});
 room('Grandmother_Antechamber',-4,-12,22,12.5,{base:levels.hall,height:5.1,roofHeight:2.65,doorWidth:3.1,hero:true});
 roof(-4,-12,25.6,15.8,levels.hall+4.4,'Main_Hall_Lower_Eaves',{height:1.3});
 room('West_Study',-25,-18,11,8.5,{base:levels.study,height:3.1,floors:3,roofHeight:1.9});
 room('East_Guest_Room',10,-25.5,10.5,8.5,{base:levels.guest,height:2.9,floors:2,roofHeight:1.65});
 room('Tea_Room',-26,21,11,6,{height:2.6,roofHeight:1.15});
 room('Front_Service_Room',6,25,13,6,{height:2.15,roofHeight:1.05});
 room('Front_East_Wing',18.2,15,10,5,{height:2.75,roofHeight:1.25});
 a.rotated(()=>room('Garden_Listening_Room',28,5,14,6,{height:2.05,roofHeight:1.15}),28,5,Math.PI/2);
 a.rotated(()=>room('West_Gatehouse',-13,21,7,5,{height:2.0,roofHeight:1.05}),-13,21,Math.PI/2);
 gallery([[-21,17],[-21,14.5],[-19,14.5]],{height:2.15,name:'Rock_Garden_Gallery'});
 gallery([[16,1],[16,-6],[16,-14],[19,-22],[23,-26]],{height:2.2,name:'Garden_Winding_Gallery'});
 gallery([[-18,-23],[-12,-23],[-12,-26],[-1,-28],[3,-28]],{height:2.05,width:2,name:'Rear_Folded_Gallery'});
 gallery([[19,9],[22,6],[22,0],[23,-1]],{height:2.15,width:2,name:'Waterside_Approach'});
 // Interior furniture shares the existing collision and interaction systems.
 const interior=buildInteriors(a,item);
 const hinge=new T.Group();hinge.position.set(-27.3,.12,24);root.add(hinge);box(1.3,1.22,0,2.6,2.4,.14,'wood',0,hinge);box(2.2,1.2,.12,.09,.2,.09,'gold',0,hinge);const doorCollider=obstacle(-26,24,2.6,.25,'tea-door');doors.push({id:'tea-door',hinge,collider:doorCollider,open:false});
 item('tea-door','推开茶房门',-26,25.4,'door','门扇轻轻让开，茶香从屋里缓缓漫出来。');
 createGardenRockery(a,mapData,{x:-24.5,z:7.5});
 pavilion('Hilltop_Listening_Pavilion',-32,-2,{base:levels.hill,radius:2.7,height:2.5});bench(-32,-3.6,levels.hill);
 for(const[x,z,h]of[[-35,0,1.1],[-29,-3,1.35],[-35,9,.8]])rock(x,z,.6,{y:groundHeight(x,z)-.12,tall:h});
 item('rockery','穿洞叠石',-24.5,9.4,'look','山石在头顶合成一孔，脚下却留着明亮的路。转过石壁，方才未见的楼檐忽然露了出来。');
 item('hill-pavilion','登亭听风',-32,-.7,'look','我拾级来到亭边。高低的屋脊从花木间连成一片，初来时认不清的回廊，此刻都有了方向。');
 // Long eastern pond: a narrow five-part zigzag reaches the pavilion from the south bank.
 const shape=new T.Shape();pondOutline.forEach(([x,z],i)=>i?shape.lineTo(x,-z):shape.moveTo(x,-z));shape.closePath();const water=new T.Mesh(new T.ShapeGeometry(shape),new T.MeshPhysicalMaterial({color:'#789f92',roughness:.25,metalness:.1,transparent:true,opacity:.9}));water.rotation.x=-Math.PI/2;water.position.y=.1;water.receiveShadow=true;root.add(water);
 for(let z=-25;z<-1;z+=.5){let start=null;for(let x=17.5;x<=36;x+=.5){const blocked=inPolygon(x,z,pondOutline)&&!bridgeAt(x,z)&&Math.hypot(x-29,z+19)>3.2;if(blocked&&start===null)start=x;if((!blocked||x>=36)&&start!==null){obstacle((start+x-.5)/2,z,x-start,.5,'water');start=null;}}}
 for(let i=0;i<pondOutline.length;i++){const p=pondOutline[i],q=pondOutline[(i+1)%pondOutline.length],len=Math.hypot(p[0]-q[0],p[1]-q[1]);for(let j=0;j<len;j+=1.3){const t=j/len,x=T.MathUtils.lerp(p[0],q[0],t),z=T.MathUtils.lerp(p[1],q[1],t);if(bridgeAt(x,z)||j>len*.65&&i%3===0)continue;rock(x,z,.3+.13*Math.sin(i+j)**2,{collide:false});}}
 for(const b of bridges)paving(b.x,b.z,b.w,b.d,{y:.57,tile:.65});
 for(let i=0;i<6;i++){const z=-1-(i+.5)*1.1/6,h=(i+1)*.45/6;box(23,.12+h/2,z,2,h,1.1/6,'stone');}
 // Union boundary avoids railings through bridge turns and leaves the entry/pavilion open.
 for(const b of bridges)for(const side of[-1,1])for(const axis of['x','z']){
  const length=axis==='x'?b.d:b.w,n=Math.ceil(length/.65);
  for(let i=0;i<n;i++){
   const t=(i+.5)/n,px=axis==='x'?b.x+side*b.w/2:b.x+(t-.5)*b.w,pz=axis==='z'?b.z+side*b.d/2:b.z+(t-.5)*b.d;
   const nx=axis==='x'?side*.08:0,nz=axis==='z'?side*.08:0;
   if(bridgeAt(px+nx,pz+nz)||pz> -1.15||Math.hypot(px-29,pz+19)<3.1)continue;
   const dx=axis==='z'?length/n/2:0,dz=axis==='x'?length/n/2:0;
   beam([px-dx,1.28,pz-dz],[px+dx,1.28,pz+dz],.075,'ivory');box(px,.94,pz,.075,.74,.075,'ivory');obstacle(px,pz,axis==='x'?.08:length/n,axis==='z'?.08:length/n,'bridge-rail');
  }
 }
 pavilion('Waterside_Pavilion',29,-19,{base:.57,radius:2.7,height:2.55});
 for(const[x,z]of[[21,-14],[23,-18],[32,-21],[32,-11],[30,-5],[24,-11]]){mesh(new T.CylinderGeometry(.5,.5,.025,12),mats.jade,x,.14,z);mesh(ball,mat('lotus','#d4afa3'),x+.13,.26,z,.2,.12,.2);}
 for(const[x,z]of[[22,-12],[31.5,-14],[24,-22]]){const r=new T.Mesh(new T.RingGeometry(.5,.53,24),new T.MeshBasicMaterial({color:'#c7d1b3',transparent:true,opacity:.2,side:T.DoubleSide}));r.rotation.x=-Math.PI/2;r.position.set(x,.145,z);root.add(r);animated.push({type:'ripple',mesh:r,phase:x});}
 item('bridge','曲桥观水',23,-.5,'look','桥身几番转折，水光也跟着转了方向。临水亭在花影后露出一角，原来近在眼前的路，也可以这样曲折。');
 item('pavilion','水亭小憩',29,-19,'look','我在水亭中停了一会儿。柳丝低低垂到水边，廊下的脚步声隔着池水，听来便柔和了。');
 // Familiar narrative objects keep their IDs, so journals and collected items survive the move.
 box(24,.55,27,2.3,.95,2.5,'red');roof(24,27,3,3,1.1,'Sedan',{height:.7});for(const x of[23,25])box(x,.45,27,.12,.12,5,'wood');box(24,1.1,28.3,1.2,1.2,.08,'wood');obstacle(24,27,2.5,3.3,'sedan');
 for(const x of[27,28]){box(x,.4,28.5,.8,.8,.7,'wood');box(x,.5,28.5,.84,.12,.74,'gold');obstacle(x,28.5,.8,.8,'luggage');}
 mesh(cyl,mats.stone,-18,.6,21,1,1.2,1);mesh(cyl,mat('well','#405d56'),-18,1.23,21,.77,.025,.77);obstacle(-18,21,2.2,2.2,'well');
 a.elevated(()=>{ box(-11,2.7,3,.05,1.3,.05,'gold');for(let i=0;i<10;i++){const ang=i/10*Math.PI*2;mesh(cyl,mats.gold,-11+Math.cos(ang)*.43,1.9,3+Math.sin(ang)*.43,.018,.85,.018);}mesh(cyl,mats.gold,-11,1.48,3,.5,.09,.5);mesh(ball,mat('bird','#9d7f4e'),-11,1.72,3,.18,.13,.14);
 },levels.court-.12);
 const petalGroup=new T.Group();petalGroup.position.set(6,groundHeight(6,11)+.02,11);root.add(petalGroup);for(let i=0;i<6;i++)mesh(ball,mat('fallen-petal','#dcb1a7'),Math.cos(i)*.24,.02,Math.sin(i)*.24,.13,.025,.07,i,petalGroup);
 item('sedan','轿帘',24,29.1,'look','轿帘上的纹样被风吹得轻轻一晃。我回头看了看，这一路的舟车，终于停在了眼前的朱门里。');
 item('luggage','随行箱笼',27.5,27.3,'look','箱笼里收着旧衣与几卷书。熟悉的物件跟着我远行，倒像将家中一角也轻轻搬来了。');
 item('screen','大理石插屏',-1,10.3,'look','大理石插屏立在门后，石纹如远山叠起。绕过屏风，正房与层层楼檐才从花影后展开。');
 item('bird','廊下鸟笼',-11,3.8,'look','鸟声从廊下落到耳边。我停了一会儿，忽然想起母亲年少时，也许听过同样清脆的声音。');
 item('book','案上书卷',-26,-17.5,'look','案上搁着一卷旧书，纸边微黄。父亲教我读书时的声音仿佛还在，我轻轻把翻起的书页抚平。');
 item('well','青石井栏',-18,22.5,'look','井中映出一小片天。院墙再高，也没有将天光全然拦住。我扶着石栏，觉得指尖微凉。');
 item('tea','温茶',-25,21.4,'look','茶还温着，清气在杯口轻轻浮起。若走得倦了，在这里歇一歇也好。');
 item('petals','拾一片落花',6,12,'collect','我拈起一片落花，将它轻轻收进袖中。初来这一日，原也有这样微小的东西，肯不问来处地陪着我。',{visual:petalGroup});
 item('window','绣楼窗影',10,-20.4,'look','上层窗格将日光分成细细的几道，楼下却仍是安静的客舍。门外的脚步声使这陌生屋宇多了些人气。');
 // Pocket gardens: leave the processional route legible while filling side courts.
 for(const[x,z,w,d,pink]of[[-10,11,3,2,true],[-10,6,2.5,2.5,true],[4,6,3,2.4,true],[12,10,2,2,false],[-20,27,3,2,true],[-34,22,2,3,true],[-19,-14,2,3,false],[17.5,-25,2,3,false],[33,22,2,4,true],[-7,18,2,3,true]])planter(x,z,w,d,{pink});
 const trees=[[-34,26,1,1],[-35,17,.95,0],[-29,15,.9,1],[-19,15,.9,0],[-35,-6,1,0],[-33,-11,1.1,1],[-34,-25,1.25,0],[-19,-27,1.1,0],[-7,-28,1.15,0],[17,-29,1,0],[35,-26,1,0],[36,-17,1.1,0],[33,-3,1.15,0],[19,-4,.9,1],[14,-12,1,0],[33,16,1.1,1],[31,25,1,0],[13,28,.85,1],[-4,20,.8,1],[-8,27,.85,0],[-16,27,1,1],[-19,-5,.9,1]];
 for(const[x,z,size,pink]of trees)!onStair(x,z,.7)&&tree(x,z,{size,pink:Boolean(pink),willow:x===33&&z===-3,pine:z<-26||x===-35});
 for(const[x,z]of[[-35,-28],[-17,-27],[-35,19],[-19,19],[17,-21],[35,-10],[35,11],[31,29],[-9,18]]){if(!onStair(x,z,.8))bamboo(x,z);}
 for(const[x,z]of[[-35,14],[-29,12],[-21,12],[-34,-5],[-19,-10],[-18,-19],[1,-24],[18,-27],[34,-28],[20,-19],[17,-8],[21,-3],[33,0],[35,18],[32,28],[-8,29],[-17,29]]){if(onStair(x,z,.8))continue;shrub(x,z,.85,Math.round(x+z)%3===0);shrub(x+.8,z+.35,.62,true);}
 for(const[x,z,s]of[[33,26,.9],[19,-2,.8],[-35,14,.8],[-19,27,.7],[-34,-27,.7],[16,-18,.6]])rock(x,z,s);
 const distanceToSegment=(x,z,p,q)=>{const dx=q[0]-p[0],dz=q[1]-p[1],t=clamp(((x-p[0])*dx+(z-p[1])*dz)/(dx*dx+dz*dz),0,1);return Math.hypot(x-p[0]-t*dx,z-p[1]-t*dz);};
 function canPlant(x,z,margin){
  if(x<-35.5||x>35.5||z<-28.6||z>28.8||onStair(x,z,margin+.5)||inPolygon(x,z,pondOutline))return false;
  if(mapData.paving.some(r=>Math.abs(x-r.x)<r.w/2+margin&&Math.abs(z-r.z)<r.d/2+margin))return false;
  if(roofs.some(r=>Math.abs(x-r.rect.x)<r.rect.w/2+margin&&Math.abs(z-r.rect.z)<r.rect.d/2+margin))return false;
  if(mapData.paths.some(p=>p.points.some((q,i)=>i&&distanceToSegment(x,z,p.points[i-1],q)<p.width/2+margin)))return false;
  if([...interact,...npcSpecs,spawn].some(p=>Math.hypot(x-p.x,z-p.z)<2.4+margin))return false;
  return !solid.some(o=>Math.abs(x-o.x)<o.w/2+margin&&Math.abs(z-o.z)<o.d/2+margin);
 }
 let seed=51;const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};let planted=0;
 for(let i=0;i<900&&planted<42;i++){const x=-35+random()*70,z=-28+random()*56;if(!canPlant(x,z,1.05))continue;tree(x,z,{size:.65+random()*.5,pink:random()<.3,pine:z<-17});planted++;}
 for(let i=0,count=0;i<1800&&count<120;i++){const x=-35+random()*70,z=-28+random()*56;if(!canPlant(x,z,.4))continue;shrub(x,z,.42+random()*.45,random()<.32);if(count%4===0)rock(x+.55,z+.2,.24,{collide:false});count++;}
 const vegetationStats=vegetation.finish();a.finish();
 for(const cover of roofs)cover.room=interior.rooms.find(r=>cover.group.name.startsWith(r.arch+'_')||(r.id==='hall'&&cover.group.name.startsWith('Main_Hall_Lower_Eaves')));
 const npcs=npcSpecs.map(spec=>{const person=createPerson(spec);person.root.position.set(spec.x,groundHeight(spec.x,spec.z),spec.z);person.root.rotation.y=spec.facing||0;root.add(person.root);const collider=obstacle(spec.x,spec.z,.66,.66,'npc:'+spec.id);return {...spec,...person,collider,pathIndex:0};});
 const player=createPerson(playerSpec);player.root.position.set(spawn.x,.12,spawn.z);root.add(player.root);
 return {root,solid,roofs,doors,interact,rooms:interior.rooms,interiorStats:interior.stats,assetsReady:Promise.all([interior.assetsReady,characterAssetsReady()]),npcs,player,places,bounds,spawn,landmarks,groundHeight,pickGround,levels,mapData,animated,bridgeAt,pondOutline,vegetationStats,setRoomFocus:vegetation.setRoomFocus};
}

