import fs from 'node:fs/promises';
import * as T from 'three';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {createWorld} from '../src/world.js';
// GLTFExporter uses FileReader for its final Blob, even without textures.
globalThis.FileReader=class {
 readAsArrayBuffer(blob){blob.arrayBuffer().then(value=>{this.result=value;this.onloadend?.();}).catch(error=>this.onerror?.(error));}
 readAsDataURL(blob){blob.arrayBuffer().then(value=>{this.result='data:'+blob.type+';base64,'+Buffer.from(value).toString('base64');this.onloadend?.();}).catch(error=>this.onerror?.(error));}
};
const world=createWorld();world.root.traverse(o=>{if(o.isMesh)o.geometry.normalizeNormals();});
const data=await new GLTFExporter().parseAsync(world.root,{binary:true,onlyVisible:false});
const path=new URL('../assets/jiafu-block-map-v11.glb',import.meta.url);
await fs.writeFile(path,new Uint8Array(data));
console.log(JSON.stringify({file:path.pathname,bytes:data.byteLength,root:world.root.name,roofs:world.roofs.length,trees:world.mapData.trees.length}));
const cast=new T.Group();cast.name='Nine_Block_Characters_V11';
const keys=['daiyu','baoyu','jiamu','fengjie','wang','yingchun','tanchun','xichun','xueyan'];
for(const[key,i]of keys.map((k,i)=>[k,i])){const source=[world.player,...world.npcs].find(p=>p.root.userData.characterDesign===key),person=source.root.clone(true);person.position.set((i%3-1)*4,0,Math.floor(i/3)*4);person.rotation.y=0;cast.add(person);}
const characterData=await new GLTFExporter().parseAsync(cast,{binary:true,onlyVisible:false}),characterPath=new URL('../assets/jiafu-block-characters-v11.glb',import.meta.url);await fs.writeFile(characterPath,new Uint8Array(characterData));console.log(JSON.stringify({file:characterPath.pathname,bytes:characterData.byteLength,characters:cast.children.length}));
