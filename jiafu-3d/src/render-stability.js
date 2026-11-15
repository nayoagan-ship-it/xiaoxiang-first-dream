import * as T from 'three';

// Keep opaque architecture in the opaque pass; a fading surface never writes depth.
export function setCutawayOpacity(material,value){
 const opacity=value>.998?1:value<.002?0:Math.max(0,Math.min(1,value)),transparent=opacity<1;
 if(material.transparent!==transparent){material.transparent=transparent;material.needsUpdate=true;}
 material.opacity=opacity;material.depthWrite=!transparent;material.forceSinglePass=true;
 return opacity;
}

export function stabilizeTextureSampling(root,maximumAnisotropy=1){
 const seen=new Set();root.traverse(o=>{if(!o.isMesh)return;for(const m of Array.isArray(o.material)?o.material:[o.material])for(const name of ['map','normalMap','roughnessMap','metalnessMap']){const texture=m[name];if(!texture||seen.has(texture))continue;seen.add(texture);texture.anisotropy=Math.max(1,Math.min(8,maximumAnisotropy));texture.minFilter=T.LinearMipmapLinearFilter;texture.magFilter=T.LinearFilter;texture.generateMipmaps=true;texture.needsUpdate=true;}});
 return seen.size;
}
