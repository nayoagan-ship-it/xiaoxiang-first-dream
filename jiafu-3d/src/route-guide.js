import * as T from 'three';
import {sampleRoute} from './route-planner.js';
export function createRouteGuide(scene,heightAt){
 const group=new T.Group();group.name='Journey_Route_Guide';scene.add(group);
 const material=new T.MeshBasicMaterial({color:'#c99a47',toneMapped:false,transparent:true,opacity:.92,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
 const dots=new T.InstancedMesh(new T.CircleGeometry(.15,12),material,64);
 const shape=new T.Shape();shape.moveTo(0,.36);shape.lineTo(-.25,-.14);shape.lineTo(0,-.025);shape.lineTo(.25,-.14);shape.closePath();
 const arrows=new T.InstancedMesh(new T.ShapeGeometry(shape),material,16);
 const end=new T.Mesh(new T.RingGeometry(.54,.61,40),material),dummy=new T.Object3D(),flat=new T.Quaternion().setFromAxisAngle(new T.Vector3(1,0,0),-Math.PI/2),axis=new T.Vector3(0,1,0);
 dots.frustumCulled=false;arrows.frustumCulled=false;dots.count=0;arrows.count=0;end.rotation.x=-Math.PI/2;group.add(dots,arrows,end);group.visible=false;
 function setPath(points){
  const samples=sampleRoute(points);let di=0,ai=0;
  for(let i=0;i<samples.length;i++){const p=samples[i],arrow=i%5===3;dummy.position.set(p.x,heightAt(p.x,p.z)+.065,p.z);dummy.quaternion.setFromAxisAngle(axis,Math.atan2(-p.dx,-p.dz)).multiply(flat);dummy.scale.setScalar(1);dummy.updateMatrix();if(arrow)arrows.setMatrixAt(ai++,dummy.matrix);else dots.setMatrixAt(di++,dummy.matrix);}
  dots.count=di;arrows.count=ai;dots.instanceMatrix.needsUpdate=true;arrows.instanceMatrix.needsUpdate=true;
  const goal=points.at(-1);end.visible=Boolean(goal);if(goal)end.position.set(goal.x,heightAt(goal.x,goal.z)+.07,goal.z);
 }
 function update(time,motion,visible){group.visible=visible;material.opacity=motion ? .87+Math.sin(time*2.2)*.07 : .94;end.scale.setScalar(motion?1+Math.sin(time*2.2)*.045:1);}
 return {setPath,update,group,read:()=>({visible:group.visible,dots:dots.count,arrows:arrows.count,end:end.visible})};
}
