import * as T from 'three';
import {prepareLuxuryMaterials,createOrnaments} from './interior-luxury.js';

// Local coordinates keep the eastern long room's furniture and collision rotated together.
export const roomPlans=[
 {id:'hall',name:'贾母正房',arch:'Grandmother_Antechamber',x:-4,z:-12,w:22,d:12.5,base:3.6,rot:0,style:'hall'},
 {id:'study',name:'西厢书阁',arch:'West_Study',x:-25,z:-18,w:11,d:8.5,base:2.2,rot:0,style:'study'},
 {id:'guest',name:'东侧绣楼',arch:'East_Guest_Room',x:10,z:-25.5,w:10.5,d:8.5,base:1.25,rot:0,style:'bedroom'},
 {id:'tea',name:'茶房',arch:'Tea_Room',x:-26,z:21,w:11,d:6,base:.12,rot:0,style:'tea'},
 {id:'service',name:'随侍歇房',arch:'Front_Service_Room',x:6,z:25,w:13,d:6,base:.12,rot:0,style:'service'},
 {id:'sewing',name:'针线绣房',arch:'Front_East_Wing',x:18.2,z:15,w:10,d:5,base:.12,rot:0,style:'sewing'},
 {id:'music',name:'临水琴室',arch:'Garden_Listening_Room',x:28,z:5,w:14,d:6,base:.12,rot:Math.PI/2,style:'music'},
 {id:'gatehouse',name:'门房',arch:'West_Gatehouse',x:-13,z:21,w:7,d:5,base:.12,rot:Math.PI/2,style:'gatehouse'}
];

export function buildInteriors(a,addItem){
 const {mat,mats,mesh,box,beam,cyl,ball,obstacle}=a;
 const palette={darkwood:'#513326',polishedwood:'#785039',woodinlay:'#bc9a67',paper:'#eee1c6',silk:'#7b9a8b',rosecloth:'#bd8f86',ink:'#3d514b',porcelain:'#d8dfd0',brass:'#bc9459',quilt:'#9da78b',ceramic:'#8ca89b',cushion:'#b67d69'};
 for(const[k,c]of Object.entries(palette))mat('interior-'+k,c);
 const luxury=prepareLuxuryMaterials(a);
 const M=k=>mats['interior-'+k]||mats[k],stats={rooms:8,furniture:0,books:0,ornaments:0};
 const rooms=[];stats.carvedDetails=0;
 for(const room of roomPlans){
  const c=Math.cos(room.rot),s=Math.sin(room.rot),world=(x,z)=>({x:room.x+x*c+z*s,z:room.z-x*s+z*c});
  const B=(x,y,z,w,h,d,m='polishedwood',ry=0)=>box(room.x+x,room.base+y,room.z+z,w,h,d,M(m),ry);
  const G=(g,x,y,z,sx=1,sy=1,sz=1,m='brass',ry=0)=>mesh(g,M(m),room.x+x,room.base+y,room.z+z,sx,sy,sz,ry);
  const L=(p,q,w=.045,m='darkwood')=>beam([room.x+p[0],room.base+p[1],room.z+p[2]],[room.x+q[0],room.base+q[1],room.z+q[2]],w,M(m));
  const C=(x,z,w,d,id)=>{stats.furniture++;return obstacle(room.x+x,room.z+z,w,d,'furniture:'+room.id+':'+id);};
  const decor=createOrnaments({B,G,L,C,room});
  function turn(x,z,angle,build){a.rotated(build,room.x+x,room.z+z,angle);}
  function woodTop(x,z,w,d,y=.88){B(x,y,z,w,.13,d);for(const side of[-1,1]){B(x,y+.072,z+side*(d/2-.06),w-.05,.018,.025,'gilding');decor.apron(x,y-.16,z+side*d*.4,w-.16,.22);}}
  function table(x,z,w=2.4,d=1.2,h=.85){woodTop(x,z,w,d,h);for(const xx of[-1,1])for(const zz of[-1,1]){const px=x+xx*w*.39,pz=z+zz*d*.34;decor.curve([[px,.08,pz],[px+xx*.035,h*.45,pz+zz*.03],[px,h-.1,pz]],.058,'darkwood');B(px,.08,pz,.17,.1,.17,'darkwood');}C(x,z,w,d,'table');}
  function stool(x,z,angle=0){turn(x,z,angle,()=>{B(x,.43,z,.66,.12,.62);B(x,.51,z,.56,.055,.5,'cushion');for(const xx of[-.23,.23])for(const zz of[-.2,.2])B(x+xx,.21,z+zz,.07,.4,.07,'darkwood');decor.apron(x,.36,z+.26,.55,.14);});C(x,z,.7,.66,'stool');}
  function chair(x,z,angle=0,{wide=1,cloth='silk'}={}){turn(x,z,angle,()=>{
   B(x,.5,z,1.05*wide,.13,.93);B(x,.59,z,.9*wide,.075,.78,cloth);
   for(const xx of[-.4,.4])for(const zz of[-.32,.32])B(x+xx*wide,.24,z+zz,.09,.48,.09,'darkwood');
   for(const xx of[-.46,.46]){B(x+xx*wide,1.04,z-.35,.085,1,.085,'darkwood');L([x+xx*wide,1.48,z-.34],[x+xx*wide*.65,1.6,z-.3],.09);L([x+xx*wide,.96,z-.3],[x+xx*wide,.92,z+.35],.07);B(x+xx*wide,.74,z+.3,.065,.4,.065,'darkwood');}
   B(x,1.53,z-.33,1.09*wide,.1,.09,'darkwood');B(x,1.15,z-.36,.43*wide,.57,.055,'woodinlay');G(new T.TorusGeometry(.13,.025,4,16),x,1.2,z-.32,wide,1,1,'darkwood');decor.scrollwork(x,1.19,z-.29,.42*wide,.38);decor.apron(x,.39,z+.42,.85*wide,.22);B(x,1.13,z-.27,.38*wide,.42,.02,cloth);
  });C(x,z,1.12*wide,1.05,'chair');}
  function rug(x,z,w,d,tone='silk'){
   B(x,.035,z,w,.045,d,tone);for(const side of[-1,1]){B(x,.061,z+side*(d/2-.13),w-.2,.012,.075,'paper');B(x+side*(w/2-.13),.061,z,.075,.012,d-.2,'paper');}
   for(let xx=-w/2+.35;xx<w/2-.2;xx+=.32)for(const side of[-1,1])B(x+xx,.04,z+side*(d/2+.08),.025,.015,.14,'paper');
   for(const side of[-1,1]){B(x,.068,z+side*(d/2-.23),w-.4,.013,.022,'gilding');B(x+side*(w/2-.23),.068,z,.022,.013,d-.4,'gilding');}
  }
  function vase(x,y,z,h=.65){
   const points=[[.12,0],[.16,.05],[.28,.25],[.3,.48],[.22,.68],[.11,.78],[.1,.94],[.15,1]].map(([r,yy])=>new T.Vector2(r*h,yy*h));
   G(new T.LatheGeometry(points,16),x,y,z,1,1,1,'porcelain');G(new T.TorusGeometry(.15*h,.018*h,5,16).rotateX(Math.PI/2),x,y+h,z,1,1,1,'ceramic');decor.porcelainPattern(x,y,z,h);stats.ornaments++;
  }
  function leaves(x,y,z,size=.75){
   vase(x,y,z,.46*size);for(let i=0;i<5;i++){const ang=i*2.4,top=[x+Math.cos(ang)*.2*size,y+.9*size,z+Math.sin(ang)*.2*size];L([x,y+.36*size,z],top,.018,'ink');
    for(let j=0;j<3;j++){const t=.35+j*.2,ox=T.MathUtils.lerp(x,top[0],t),oy=T.MathUtils.lerp(y+.36*size,top[1],t),oz=T.MathUtils.lerp(z,top[2],t),a0=ang+j*1.3;
     const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute([0,0,0,Math.cos(a0)*.15*size,.12*size,Math.sin(a0)*.15*size,Math.cos(a0)*.4*size,.2*size,Math.sin(a0)*.4*size,Math.cos(a0+.6)*.2*size,.06*size,Math.sin(a0+.6)*.2*size],3));g.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]);g.computeVertexNormals();g.setAttribute('uv',new T.Float32BufferAttribute([0,0,0,1,1,1,1,0],2));G(g,ox,oy,oz,1,1,1,'silk');}
   }
  }
  function book(x,y,z,w=.5,d=.7,tone='silk',angle=0){B(x,y+.055,z,w,.11,d,tone,angle);B(x,y+.056,z+.015,w-.06,.065,d-.045,'paper',angle);B(x-w*.44,y+.06,z,.04,.12,d,tone,angle);for(let i=0;i<3;i++)B(x+w*.2,y+.115,z+(i-1)*d*.13,.025,.008,.035,'paper',angle);stats.books++;}
  function scroll(x,y,z,length=.75){G(new T.CylinderGeometry(.08,.08,length,10).rotateX(Math.PI/2),x,y+.09,z,1,1,1,'paper');for(const side of[-1,1])G(ball,x,y+.09,z+side*length*.54,.065,.065,.035,'darkwood');}
  const ySafe=h=>h+.065;
  function cabinet(x,z,w=2,d=.8,h=1.6,{books=false}={}){
   for(const side of[-1,1])B(x+side*(w/2-.075),h/2,z,.15,h,d,'darkwood');B(x,h,z,w+.12,.12,d+.1);B(x,.17,z,w,.13,d);B(x,h/2,z-d/2+.05,w,h,.08,'darkwood');
   if(books){
    for(let level=0;level<4;level++){const yy=.35+level*(h-.45)/4;B(x,yy,z,w-.12,.09,d);for(let i=0;i<Math.floor(w/.2)-1;i++){const xx=x-w/2+.23+i*.2,height=.31+.12*Math.sin(i*2+level)**2;B(xx,yy+height/2+.05,z+.02,.15,height,d*.65,['silk','rosecloth','quilt'][i%3]);B(xx,yy+height*.68,z+d*.36,.09,.12,.01,'paper');stats.books++;}}
   }else{for(const side of[-1,1]){B(x+side*w*.245,h*.54,z+d/2+.025,w*.46,h*.72,.07);B(x+side*w*.245,h*.54,z+d/2+.07,w*.37,h*.59,.035,'darkwood');G(new T.TorusGeometry(.055,.012,4,12),x+side*.12,h*.56,z+d/2+.12,1,1,1,'brass');}}
   for(const side of[-1,1]){B(x,ySafe(h)+side*.025,z+d/2+.03,w+.14,.035,.045,'gilding');}decor.scrollwork(x,h-.08,z+d/2+.08,w*.88,.2);
   if(!books)for(const side of[-1,1]){decor.border(x+side*w*.245,h*.54,z+d/2+.1,w*.36,h*.58);decor.scrollwork(x+side*w*.245,h*.56,z+d/2+.13,w*.29,h*.23);}
   C(x,z,w+.12,d+.12,books?'bookshelf':'cabinet');
  }
  function chest(x,z,w=1.3,d=.8){B(x,.29,z,w,.56,d);B(x,.59,z,w+.05,.12,d+.05,'darkwood');for(const side of[-1,1])B(x+side*w*.32,.34,z,.075,.58,d+.03,'brass');B(x,.44,z+d/2+.03,.16,.18,.025,'brass');decor.border(x,.32,z+d/2+.04,w-.15,.38);decor.scrollwork(x,.32,z+d/2+.07,w*.58,.27);C(x,z,w+.05,d+.05,'chest');}
  function painting(x,z,w=2,h=1.5,y=2.1,style='mountain'){
   B(x,y,z,w,h,.055,'paper');for(const side of[-1,1]){B(x+side*w/2,y,z,.075,h+.12,.1,'darkwood');G(new T.CylinderGeometry(.045,.045,w+.25,10).rotateZ(Math.PI/2),x,y+side*h/2,z+.025,1,1,1,'darkwood');}
   if(style==='birds'){decor.mural(x,y,z+.06,w,h);stats.ornaments++;return;}
   if(style==='mountain'){
    for(let i=0;i<3;i++){const shape=new T.Shape(),xx=x-w*.42+i*w*.24,base=y-h*.3;shape.moveTo(0,0);shape.quadraticCurveTo(w*.13,h*(.34+i*.08),w*.28,h*(.65-i*.15));shape.quadraticCurveTo(w*.31,h*.2,w*.5,0);shape.closePath();G(new T.ShapeGeometry(shape),xx,base,z+.04,1,1,1,i===1?'silk':'quilt');}
    G(new T.CircleGeometry(w*.055,16),x+w*.31,y+h*.28,z+.043,1,1,1,'rosecloth');
   }else{for(let i=0;i<3;i++){const xx=x+(i-1)*w*.22;L([xx,y-h*.4,z+.05],[xx+w*.08,y+h*.36,z+.05],.018,'ink');for(let j=0;j<4;j++)for(const side of[-1,1])L([xx,y-h*.28+j*h*.16,z+.052],[xx+side*w*.16,y-h*.18+j*h*.16,z+.055],.015,'ink');}}
   stats.ornaments++;
  }
  function screen(x,z,w=2.6,h=1.7,angle=0){turn(x,z,angle,()=>{
   for(let i=0;i<3;i++){const xx=x+(i-1)*w/3;B(xx,h/2+.12,z,w/3-.035,h,.07,'darkwood');B(xx,h/2+.12,z+.045,w/3-.15,h-.22,.02,room.style==='bedroom'?'quilt':'silk');decor.border(xx,h/2+.12,z+.075,w/3-.15,h-.22);for(let j=0;j<5;j++)B(xx+(j-2)*w/19,h*.8,z+.07,.028,h*.24,.025,'woodinlay');B(xx,.1,z,w/3,.12,.45,'darkwood');}
  });const c=Math.abs(Math.cos(angle)),s=Math.abs(Math.sin(angle));C(x,z,c*w+s*.5,s*w+c*.5,'screen');}
  function cup(x,y,z){G(new T.CylinderGeometry(.09,.065,.11,12),x,y+.055,z,1,1,1,'porcelain');G(new T.CylinderGeometry(.075,.075,.012,12),x,y+.112,z,1,1,1,'ink');G(new T.CylinderGeometry(.14,.14,.02,12),x,y,z,1,1,1,'porcelain');}
  function teapot(x,y,z){G(ball,x,y+.15,z,.2,.17,.18,'ceramic');G(new T.CylinderGeometry(.13,.16,.05,12),x,y+.29,z,1,1,1,'porcelain');G(ball,x,y+.34,z,.04,.045,.04,'brass');L([x+.15,y+.19,z],[x+.34,y+.25,z],.085,'ceramic');G(new T.TorusGeometry(.14,.027,6,18),x-.16,y+.18,z,1,1,1,'brass');}
  function incense(x,y,z){G(new T.CylinderGeometry(.23,.13,.22,12),x,y+.15,z,1,1,1,'brass');G(new T.CylinderGeometry(.19,.19,.025,12),x,y+.275,z,1,1,1,'ink');for(const side of[-1,1])G(new T.TorusGeometry(.09,.022,5,12),x+side*.23,y+.22,z,1,1,1,'brass');for(let i=0;i<3;i++)L([x+(i-1)*.06,y+.28,z],[x+(i-1)*.06,y+.65,z],.012,'woodinlay');}
  function bed(x,z,w=3.6,d=2.7,{canopy=false,tone='silk'}={}){
   B(x,.3,z,w,.5,d,'darkwood');B(x,.59,z,w-.12,.16,d-.12,'paper');B(x,.72,z+.23,w-.25,.12,d*.6,tone);
   for(const side of[-1,1])B(x+side*w*.23,.77,z-d*.3,w*.3,.18,d*.24,'rosecloth');
   B(x,1.0,z-d/2+.04,w+.05,.9,.12);for(const side of[-1,1]){B(x+side*w/2,.68,z,.1,.45,d);B(x+side*w/2,.12,z,.15,.2,d);}
   decor.apron(x,.35,z+d/2+.06,w-.2,.28);decor.scrollwork(x,1.04,z-d/2+.12,w*.82,.52,'woodinlay');
   if(canopy){for(const xx of[-1,1])for(const zz of[-1,1])B(x+xx*w*.47,1.37,z+zz*d*.46,.09,2.7,.09,'darkwood');decor.canopy(x,z,w,d,2.7);}
   C(x,z,w+.12,d+.1,'bed');
  }
  function daybed(x,z,w=5.5,d=2.2,tone='rosecloth'){
   B(x,.34,z,w,.56,d,'darkwood');B(x,.68,z,w-.16,.16,d-.12,tone);
   const crest=room.style==='hall'?1.95:1.64,back=new T.Shape();back.moveTo(-w/2,.65);back.lineTo(-w/2,crest-.43);back.bezierCurveTo(-w*.34,crest-.43,-w*.26,crest-.04,-w*.12,crest-.09);back.quadraticCurveTo(0,crest+.1,w*.12,crest-.09);back.bezierCurveTo(w*.26,crest-.04,w*.34,crest-.43,w/2,crest-.43);back.lineTo(w/2,.65);back.closePath();
   G(new T.ExtrudeGeometry(back,{depth:.1,bevelEnabled:true,bevelSegments:2,bevelSize:.025,bevelThickness:.025,steps:1}),x,0,z-d/2,1,1,1,'darkwood');
   decor.curve([[x-w/2,crest-.43,z-d/2+.13],[x-w*.32,crest-.31,z-d/2+.13],[x-w*.16,crest-.1,z-d/2+.13],[x,crest-.04,z-d/2+.13],[x+w*.16,crest-.1,z-d/2+.13],[x+w*.32,crest-.31,z-d/2+.13],[x+w/2,crest-.43,z-d/2+.13]],.022);
   for(const side of[-1,0,1]){const xx=x+side*w*.3;B(xx,1.18,z-d/2+.12,w*.25,.64,.026,tone);decor.border(xx,1.18,z-d/2+.15,w*.25,.64);decor.scrollwork(xx,crest-.33,z-d/2+.16,w*.22,.27);}
   decor.apron(x,.33,z+d/2+.04,w-.18,.32);
   for(const side of[-1,1]){B(x+side*(w/2-.06),.95,z,.1,.55,d,'darkwood');G(new T.CylinderGeometry(.19,.19,d*.62,12).rotateX(Math.PI/2),x+side*w*.35,.95,z-.15,1,1,1,tone);B(x+side*w*.2,1.1,z-d*.3,w*.3,.48,.14,tone);}
   C(x,z,w+.12,d+.12,'couch');
  }
  function displayCase(x,z,w=1.7,h=2.25){cabinet(x,z,w,.7,h);for(let j=0;j<3;j++){const yy=.4+j*.58;B(x,yy+.2,z+.39,w-.22,.32,.045,'darkwood');B(x,yy,z+.48,w-.12,.06,.35,'darkwood');vase(x+(j%2?.27:-.27),yy+.04,z+.45,.38);scroll(x-(j%2?.3:-.3),yy+.04,z+.42,.4);}}
  function embroideryFrame(x,z){
   for(const side of[-1,1]){L([x+side*1.1,.1,z-.55],[x+side*1.1,1.4,z+.55],.09);L([x+side*1.1,.1,z+.55],[x+side*1.1,1.4,z-.55],.09);}
   const g=new T.PlaneGeometry(2.1,1.25);g.rotateX(-Math.PI/2+.35);G(g,x,1.17,z,1,1,1,'quilt');
   const c=Math.cos(.35),sn=Math.sin(.35);for(const side of[-1,1]){L([x-1.16,1.17+side*.7*sn,z+side*.7*c],[x+1.16,1.17+side*.7*sn,z+side*.7*c],.085);L([x+side*1.16,1.17-.7*sn,z-.7*c],[x+side*1.16,1.17+.7*sn,z+.7*c],.085);}C(x,z,2.5,1.4,'embroidery-frame');
  }
  function clothRack(x,z){cabinet(x,z,2.6,.66,1.95,{books:true});for(let j=0;j<3;j++)for(let i=0;i<3;i++){const m=['silk','rosecloth','quilt'][(i+j)%3],xx=x+(i-1)*.73,yy=.5+j*.46;G(new T.CylinderGeometry(.16,.16,.62,12).rotateZ(Math.PI/2),xx,yy,z+.38,1,1,1,m);G(new T.CircleGeometry(.115,12),xx-.32,yy,z+.4,1,1,1,'paper',Math.PI/2);}}
  function lantern(x,z,y=2.05){G(new T.CylinderGeometry(.21,.19,.44,8),x,y,z,1,1,1,'lamp-paper');for(let i=0;i<8;i++){const ang=i*Math.PI/4;L([x+Math.cos(ang)*.21,y-.22,z+Math.sin(ang)*.21],[x+Math.cos(ang)*.21,y+.22,z+Math.sin(ang)*.21],.015,'darkwood');};G(cyl,x,y+.31,z,.018,.3,.018,'brass');G(cyl,x,y-.32,z,.018,.18,.018,'brass');}
  const newItems=[];
  const item=(id,name,x,z,text)=>newItems.push({id,name,...world(x,z),kind:'look',text});
  const build=()=>{
   // Timber skirting and inset floors make the back walls a readable room backdrop.
   B(0,.35,-room.d/2+.2,room.w-.3,.62,.09,'darkwood');B(-room.w/2+.2,.35,0,.09,.62,room.d-.3,'darkwood');
   decor.cornice();decor.windowDrapes();
   if(room.style!=='hall')for(let z=-room.d/2+.25;z<room.d/2-.2;z+=.42)B(0,.025,z,room.w-.4,.035,.395,'polishedwood');
   if(room.style==='hall'){
    rug(0,1.0,7.2,6.0);daybed(0,-3.85,5.8,2.2);B(0,.18,-2.15,2.8,.35,.65,'darkwood');B(0,.4,-2.15,2.65,.08,.56,'rosecloth');C(0,-2.15,2.8,.7,'footstool');painting(0,-6.02,7.8,2.65,2.64,'birds');
    // A fretted luodizhao frames the elder's seat while leaving the greeting aisle open.
    for(const side of[-1,1]){B(side*5.45,1.85,-2.35,.17,3.7,.17,'darkwood');C(side*5.45,-2.35,.2,.2,'carved-partition-post');decor.curve([[side*5.4,2.75,-2.31],[side*5.08,3.1,-2.31],[side*4.4,3.4,-2.31],[side*3.75,3.46,-2.31]],.07,'darkwood');decor.scrollwork(side*4.65,3.25,-2.25,1.2,.33);}
    B(0,3.66,-2.35,11.1,.16,.18,'darkwood');decor.lattice(0,3.43,-2.31,10.75,.3,{gold:false});decor.scrollwork(0,3.43,-2.26,2.3,.25);
    for(const side of[-1,1]){for(const zz of[-2.3,.5,3.3])chair(side*7.6,zz,-side*Math.PI/2);for(const zz of[-.9,1.9]){table(side*7.6,zz,1.05,1.0,.72);cup(side*7.6,.8,zz);}displayCase(side*9.25,-4.6,1.6,2.4);lantern(side*5.8,-4.9,3.05);vase(side*4.2,1.0,-4.6,.9);table(side*4.2,-4.6,1.2,.9,.9);}
    table(-4,-2.4,1.25,.95,.85);incense(-4,.93,-2.4);item('incense','案上香炉',-4,-1.2,'小小香炉安放在茶案上，铜色温润。我看着细香，才觉出这屋里连安静也有自己的规矩。');
   }else if(room.style==='study'){
    rug(.3,1.5,3.2,2.7,'quilt');cabinet(-3.1,-3.45,3.7,.75,2.35,{books:true});cabinet(1.35,-3.45,3.7,.75,2.35,{books:true});
    table(-1,-1,3.5,1.6);book(-1.3,.94,-.9,.7,.8);book(-2,.94,-1.2,.5,.65,'rosecloth');scroll(-.1,.95,-1.15);
    G(new T.CylinderGeometry(.13,.13,.26,12),-.1,1.04,-.6,1,1,1,'ceramic');for(let i=0;i<4;i++)L([-.1+(i-1.5)*.04,1.08,-.6],[-.14+i*.035,1.5,-.6],.017,'darkwood');B(-.55,.97,-.55,.42,.07,.27,'ink');chair(-1,-2.2);displayCase(4.4,-1.3,1.3,2.15);leaves(4.3,.02,2.8,.75);painting(-.8,-4.02,2.1,.85,2.05,'bamboo');lantern(3,-2.8);
    item('inkstone','笔墨砚台',.9,.4,'笔与砚都收拾得妥帖。看见案头的书墨，我仿佛又回到父亲教我读书的清晨，心中稍稍安定下来。');
   }else if(room.style==='bedroom'){
    rug(.9,1.7,3.1,2.9,'rosecloth');bed(-2.6,-1.3,3.7,2.7,{canopy:true});table(2.8,-1.7,2.1,.95,.8);
    G(new T.CircleGeometry(.43,24),2.8,1.62,-1.94,1,1,1,'porcelain');G(new T.TorusGeometry(.45,.045,6,24),2.8,1.62,-1.91,1,1,1,'brass');B(2.8,1.15,-1.9,.1,.45,.1,'darkwood');B(2.8,.91,-1.9,.62,.09,.34,'darkwood');B(3.45,.94,-1.6,.32,.16,.26,'rosecloth');stool(2.8,-.5);cabinet(3.6,-3.35,2.1,.8,2.1);chest(-3.8,2.8,1.6,.8);screen(1.35,-2.85,2.2,1.65,.18);painting(-.6,-4.02,1.4,1.0,1.75,'bamboo');leaves(4.1,.02,2.7,1);lantern(.2,-3.3,2.3);
    item('mirror','菱花妆镜',2.8,.75,'镜边搁着小小的妆奁，床帐垂成柔和的影子。我尚不熟悉这间屋子，却已经能想象夜里灯火微明的模样。');
   }else if(room.style==='tea'){
    table(0,-1,2.8,1.3,.78);B(0,.87,-1,1.6,.045,.72,'darkwood');teapot(0,.9,-1);cup(-.52,.9,-.85);cup(.52,.9,-.85);stool(-2.2,-.6);stool(2.2,-.6);
    turn(-4.8,-.65,Math.PI/2,()=>cabinet(-4.8,-.65,2.6,.75,1.65));cabinet(-.2,-2.35,6.8,.65,1.55);for(let i=0;i<9;i++){const xx=-2.8+i*.66;G(new T.CylinderGeometry(.17,.17,.3,12),xx,1.77,-2.3,1,1,1,i%2?'porcelain':'lacquer');}G(new T.LatheGeometry([new T.Vector2(.35,0),new T.Vector2(.52,.4),new T.Vector2(.47,.78),new T.Vector2(.31,.86)],16),4.1,.02,-1.65,1,1,1,'ceramic');
    G(new T.CylinderGeometry(.38,.3,.42,12),3.8,.27,.55,1,1,1,'brass');G(new T.CylinderGeometry(.3,.3,.035,12),3.8,.5,.55,1,1,1,'cushion');teapot(3.8,.52,.55);painting(3.8,-2.79,1.8,.78,1.7,'bamboo');lantern(-3,-1.8);lantern(3,-1.8);
    item('kettle','温水小炉',3,1.45,'炉上水声细细，茶房里都是暖意。替客人续一盏茶，原也要这样耐心地守着。');
   }else if(room.style==='service'){
    bed(-3.8,-1.3,3.3,1.8,{tone:'quilt'});bed(3.7,-1.3,3.3,1.8,{tone:'quilt'});for(const xx of[-5.3,-2.3,2.2,5.2]){B(xx,1,-2.05,.065,2,.065,'darkwood');decor.curtain(xx,1.25,-2.05,.42,1.45,'quilt');}for(const xx of[-3.8,3.7])B(xx,2,-2.05,3.4,.08,.08,'darkwood');B(-3.7,.86,-1.2,1.1,.2,.65,'rosecloth');table(0,-1.2,1.8,1.0,.64);cup(0,.72,-1.2);stool(0,.3);chest(-5.4,1.9,1.25,.75);chest(5.3,1.9,1.25,.75);cabinet(0,-2.55,1.7,.65,1.35);lantern(2,-1.7,1.6);
    item('folded-quilt','叠好的薄衾',-3.7,.4,'薄衾叠得方正，床脚收着日用箱笼。大宅里来往忙碌的人，也在这里留着一小处可以安睡的地方。');
   }else if(room.style==='sewing'){
    embroideryFrame(-2.7,-.65);clothRack(-3.05,-2.1);
    table(2.6,-.7,2.15,1.2,.82);for(let i=0;i<3;i++){B(2.25+i*.25,.94+i*.09,-.7,1.0,.09,.7,['silk','rosecloth','quilt'][i]);G(new T.CylinderGeometry(.08,.08,.22,10),3.35+i*.13,1,-.4,1,1,1,'brass');}stool(-2.7,1.05);stool(2.6,1.05);cabinet(0,-1.95,1.65,.65,1.5);painting(0,-2.28,1.45,.75,1.8,'bamboo');
    item('embroidery','花样绣架',-1.6,.85,'绷面上绣着尚未收针的花枝，旁边铺着几色丝线。花落时留不住，绣到绢上，却仿佛还能多开一阵。');
   }else if(room.style==='music'){
    rug(-2.9,.1,4.3,3.3,'quilt');table(-3,-1,3.7,.95,.7);const qin=new T.Shape();qin.moveTo(-1.55,-.2);qin.quadraticCurveTo(-1.7,0,-1.45,.25);qin.lineTo(1.45,.18);qin.quadraticCurveTo(1.72,0,1.4,-.17);qin.closePath();const geo=new T.ExtrudeGeometry(qin,{depth:.11,bevelEnabled:true,bevelSize:.025,bevelThickness:.025,bevelSegments:1,steps:1});geo.rotateX(-Math.PI/2);G(geo,-3,.83,-1,1,1,1,'darkwood');for(let i=0;i<7;i++)L([-4.4,.98,-1.16+i*.046],[-1.6,.98,-1.16+i*.046],.008,'paper');stool(-3,.35);daybed(3.8,-1.5,3.7,1.55,'silk');table(1.0,-1.8,1.3,.8,.65);incense(1,.73,-1.8);cabinet(-5.9,-1.7,1.3,.75,1.5,{books:true});leaves(5.5,.02,1.6,1.1);painting(0,-2.79,3.7,1.1,1.1);lantern(3,-1.9,1.65);
    item('qin','临窗古琴',-1.9,.75,'七弦静卧在案，窗外是池水与柳影。我还未拨弦，仿佛已经听见一段清音，从风里慢慢走来。');
   }else{
    decor.keyRack(.85,1.53,-2.23);table(-1,-1.15,2.25,1.0,.75);book(-1,.84,-1.1,.65,.7,'quilt');scroll(-.35,.85,-1.25,.6);chair(-1,-.0,Math.PI);cabinet(2.3,-1.65,1.25,.75,1.55);chest(-2.5,1.25,1.05,.7);lantern(1.2,-1.5,1.6);painting(-.4,-2.29,1.65,.9,1.16,'bamboo');
    item('ledger','门房簿册',.3,.85,'簿册记着府中往来，旁边整齐搁着钥匙。每一重门后，都有等候与照看它的人。');
   }
  };
  a.rotated(build,room.x,room.z,room.rot);stats.carvedDetails+=decor.count;newItems.forEach(p=>addItem(p.id,p.name,p.x,p.z,p.kind,p.text));
  const entrance=world(0,room.d/2+1),inside=world(0,Math.min(2,room.d/2-1));
  rooms.push({...room,entrance,inside,contains(x,z,margin=0){const dx=x-room.x,dz=z-room.z,lx=dx*c-dz*s,lz=dx*s+dz*c;return Math.abs(lx)<room.w/2-margin&&Math.abs(lz)<room.d/2-margin;}});
 }
 return {rooms,stats,assetsReady:luxury.ready};
}
