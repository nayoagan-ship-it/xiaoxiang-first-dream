import * as T from 'three';

// Angles describe quiet, asymmetric poses rather than identical front-facing dolls.
const poses={
 daiyu:{label:'低首拢帕',head:[.045,-.06,.065],body:[.015,-.035,.018],left:[-.57,0,.53],right:[-.57,0,-.51],step:.065,gesture:'reserved',phase:.3},
 baoyu:{label:'侧身招手',head:[-.025,-.08,-.065],body:[-.012,.065,-.025],left:[-.18,0,.20],right:[-.34,-.14,2.02],step:.09,gesture:'welcome',phase:1.4},
 jiamu:{label:'倚杖含笑',head:[.040,.02,-.025],body:[.026,-.025,-.012],left:[-.33,0,.28],right:[0,0,0],step:.025,gesture:'elder',phase:2.2,cane:true},
 fengjie:{label:'扬袖迎客',head:[-.015,.07,-.075],body:[-.020,-.085,-.030],left:[-.42,0,.28],right:[-.38,-.18,1.91],step:.10,gesture:'welcome',phase:3.1},
 wang:{label:'拢袖持珠',head:[.018,-.025,.015],body:[.007,.015,0],left:[-.50,0,.46],right:[-.50,0,-.46],step:.025,gesture:'calm',phase:1.8},
 yingchun:{label:'垂眸拢袖',head:[.035,.035,.075],body:[.012,.045,.022],left:[-.54,0,.53],right:[-.54,0,-.53],step:.045,gesture:'reserved',phase:2.8},
 tanchun:{label:'抬手相邀',head:[-.035,-.055,-.045],body:[-.012,.070,-.018],left:[-.25,0,.24],right:[-.40,-.08,1.72],step:.085,gesture:'welcome',phase:.9},
 xichun:{label:'抱帕微仰',head:[-.055,.045,.085],body:[.008,-.05,.025],left:[-.56,0,.53],right:[-.56,0,-.53],step:.045,gesture:'curious',phase:3.8},
 xueyan:{label:'护住包袱',head:[.025,-.035,-.065],body:[.020,.035,-.020],left:[-.65,0,.12],right:[-.65,0,-.12],step:.055,gesture:'bundle',phase:2.5},
 matron:{label:'倾身引路',head:[.025,-.035,.030],body:[.032,.03,.010],left:[-.42,0,.35],right:[-.32,0,-.40],step:.035,gesture:'elder',phase:4.5},
 keeper:{label:'拱手候客',head:[.015,.025,-.025],body:[.012,-.025,0],left:[-.48,0,.50],right:[-.48,0,-.50],step:.035,gesture:'calm',phase:4.9}
};
const setRotation=(object,values)=>object.rotation.set(...values);
export function configureCharacter(person,design){
 const pose=poses[design]||poses.daiyu,{parts,rig}=person;
 setRotation(rig.body,pose.body);setRotation(rig.head,pose.head);
 setRotation(parts.leftArm,pose.left);setRotation(parts.rightArm,pose.right);
 for(const[key,side]of[['leftLeg',-1],['rightLeg',1]]){const leg=parts[key];leg.position.z+=side*pose.step;leg.rotation.y=side*(design==='xichun'?-.07:.055);}
 for(const limb of Object.values(parts))limb.userData.restRotation={x:limb.rotation.x,y:limb.rotation.y,z:limb.rotation.z};
 person.motion={pose,focus:false,focusSince:-100,headYaw:0};
 person.root.userData.rigRevision=1;person.root.userData.poseName=pose.label;
 person.root.userData.poseAngles={head:pose.head,body:pose.body,leftArm:pose.left,rightArm:pose.right};
}
function angularDifference(target,current){return T.MathUtils.euclideanModulo(target-current+Math.PI,Math.PI*2)-Math.PI;}
export function turnCharacter(person,target,delta,enabled=true){
 const p=person.root.position,angle=Math.atan2(target.x-p.x,target.z-p.z);
 person.root.rotation.y+=angularDifference(angle,person.root.rotation.y)*(enabled?1-Math.exp(-delta*4.2):1);
}
export function updateCharacter(person,{time=0,delta=.016,enabled=true,moving=false,attention=null,speaking=false,listening=false}={}){
 const{rig,parts,motion}=person,p=motion.pose,t=time+p.phase;
 const focused=Boolean(attention);if(focused&&!motion.focus)motion.focusSince=time;motion.focus=focused;
 const breath=enabled?Math.sin(t*1.65):0,idle=enabled?Math.sin(t*.75):0;
 rig.body.position.y=.85+(enabled?.006*breath:0);rig.body.scale.y=1+(enabled?.0035*breath:0);
 rig.body.rotation.set(p.body[0]+(enabled?.004*idle:0),p.body[1],p.body[2]+(enabled?.004*Math.sin(t*.61):0));
 let look=0;if(attention){const target=Math.atan2(attention.x-person.root.position.x,attention.z-person.root.position.z);look=T.MathUtils.clamp(angularDifference(target,person.root.rotation.y),-.43,.43);}
 motion.headYaw=enabled?T.MathUtils.lerp(motion.headYaw,look,1-Math.exp(-delta*5)):0;
 const nod=enabled&&(speaking||listening)?Math.sin(t*(speaking?2.4:1.6))*(speaking?.024:.014):0;
 rig.head.rotation.set(p.head[0]+nod,p.head[1]+motion.headYaw,p.head[2]+(enabled?.009*Math.sin(t*.9):0));
 const gait=enabled&&moving?Math.sin(time*12):0;
 for(const[key,side]of[['leftLeg',-1],['rightLeg',1]]){const limb=parts[key],rest=limb.userData.restRotation;limb.rotation.set(rest.x+side*gait*.38,rest.y,rest.z);}
 for(const[key,side]of[['leftArm',-1],['rightArm',1]]){
  const limb=parts[key],rest=limb.userData.restRotation,held=p.gesture==='bundle'||p.gesture==='reserved'||p.gesture==='calm'||p.cane&&side===1;
  limb.rotation.set(rest.x+(held?0:side*gait*.14),rest.y,rest.z);
  if(enabled&&!held){
   const greeting=Math.max(0,1-(time-motion.focusSince)/2.2),wave=p.gesture==='welcome'&&side===1;
   limb.rotation.x+=(speaking?.024*Math.sin(t*2):0);
   limb.rotation.z+=wave?Math.sin(t*3.4)*(.075*greeting+(speaking?.035:.008)):(speaking?.018*Math.sin(t*1.8):0);
  }
 }
 const expressions=rig.face.expressions;
 const cycle=(time+p.phase)%(4.0+p.phase*.17),blink=enabled&&!expressions.closed&&cycle<.19;
 expressions.eyes.scale.y=blink?Math.max(.10,Math.abs(cycle-.095)/.095):1;
 expressions.mouth.scale.y=enabled&&speaking?1.35+.45*Math.sin(t*17):1;
 rig.head.updateMatrix();rig.body.updateMatrix();
}
