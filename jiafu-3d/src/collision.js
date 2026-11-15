// Covers Daiyu's measured walking, breathing and head-turn poses in world units.
export const characterClearance={body:.84,feet:.68,railing:.74,height:2.78,roomHeight:3.4,corridorHeight:3.1,pavilionHeight:3.3};
export function overlapsObstacle(o,x,z,defaultRadius=.34){
 const radius=o.clearance??defaultRadius,dx=x-o.x,dz=z-o.z;
 if(!o.angle&&(Math.abs(dx)>o.w/2+radius||Math.abs(dz)>o.d/2+radius))return false;
 if(o.shape==='circle')return Math.hypot(dx,dz)<o.radius+radius-1e-6;
 if(o.shape==='sweep'){if(Math.abs(dx)>o.w/2+radius||Math.abs(dz)>o.d/2+radius)return false;return o.parts.some(p=>overlapsObstacle(p,x,z,defaultRadius));}
 if(o.shape==='box'){const angle=o.angle||0,c=Math.cos(angle),s=Math.sin(angle),lx=dx*c-dz*s,lz=dx*s+dz*c,xx=Math.max(0,Math.abs(lx)-o.w/2),zz=Math.max(0,Math.abs(lz)-o.d/2);return xx*xx+zz*zz<(radius-1e-6)**2;}
 return Math.abs(dx)<o.w/2+radius-1e-6&&Math.abs(dz)<o.d/2+radius-1e-6;
}
export function doorLeafBounds(door,angle){return {x:door.hinge.position.x+Math.cos(angle)*1.3,z:door.hinge.position.z-Math.sin(angle)*1.3,w:2.6,d:.36,angle,shape:'box',clearance:characterClearance.body};}
export function setDoorOpen(door,open,animate=false){
 door.open=open;door.targetAngle=open?Math.PI*.48:0;door.collider.enabled=!open;door.openCollider.enabled=open;
 door.moving=animate&&Math.abs(door.hinge.rotation.y-door.targetAngle)>.005;door.swingCollider.enabled=door.moving;
 if(!door.moving)door.hinge.rotation.y=door.targetAngle;
}
export function updateDoorMotion(door,dt,animate){
 const wasMoving=door.moving;door.hinge.rotation.y=animate?door.hinge.rotation.y+(door.targetAngle-door.hinge.rotation.y)*Math.min(1,dt*7):door.targetAngle;
 if(Math.abs(door.hinge.rotation.y-door.targetAngle)<.005){door.hinge.rotation.y=door.targetAngle;door.moving=false;door.swingCollider.enabled=false;}
 return wasMoving&&!door.moving;
}
export function recoverWalkPosition(navigation,world,point){
 const y=world.groundHeight(point.x,point.z),room=world.rooms.find(r=>r.contains(point.x,point.z)),sameFloor=p=>Math.abs(world.groundHeight(p.x,p.z)-y)<.2;
 const sameSpace=p=>sameFloor(p)&&(room?room.contains(p.x,p.z):!world.rooms.some(r=>r.contains(p.x,p.z)));
 return navigation.nearest(point.x,point.z,8,sameSpace)||navigation.nearest(point.x,point.z,8,sameFloor)||world.spawn;
}
