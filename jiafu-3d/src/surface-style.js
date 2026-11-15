import * as T from 'three';

// Derivative filtering removes sub-pixel grain instead of letting it shimmer when the camera moves.
export function heritageSurface(material,kind){
 material.onBeforeCompile=shader=>{
  shader.vertexShader='varying vec3 vHeritagePosition;\n'+shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvHeritagePosition=(modelMatrix*vec4(transformed,1.0)).xyz;');
  const pattern=kind==='wood'?'heritageWave(vHeritagePosition.y*4.0+heritageWave(vHeritagePosition.x*28.0+vHeritagePosition.z*24.0)*2.4)':kind==='roof'?'heritageWeave(vec2(vHeritagePosition.y*31.0,(vHeritagePosition.x+vHeritagePosition.z)*5.0))':'heritageWeave(vec2(vHeritagePosition.x*29.0+vHeritagePosition.z*37.0,vHeritagePosition.y*43.0+vHeritagePosition.x*19.0))';
  const filter=`varying vec3 vHeritagePosition;
float heritageWave(float phase){return sin(phase)*(1.0-smoothstep(0.65,2.4,fwidth(phase)));}
float heritageWeave(vec2 phase){float bandwidth=fwidth(phase.x)+fwidth(phase.y);return sin(phase.x)*sin(phase.y)*(1.0-smoothstep(0.8,2.8,bandwidth));}
`;
  shader.fragmentShader=filter+shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>\nfloat heritageGrain=${pattern};\ndiffuseColor.rgb*=1.0+heritageGrain*${kind==='wood'?'0.055':kind==='roof'?'0.025':'0.022'};`);
 };material.customProgramCacheKey=()=>`heritage-v5-filtered-${kind}`;return material;
}

export function contactShadowGeometry(){
 const positions=[],colors=[],indices=[],rings=[0,.28,.58,.82,1],alphas=[.22,.18,.09,.025,0],segments=24;
 const color=new T.Color('#605741');
 for(let ring=0;ring<rings.length;ring++)for(let i=0;i<=segments;i++){const angle=i/segments*Math.PI*2;positions.push(Math.cos(angle)*rings[ring],0,Math.sin(angle)*rings[ring]);colors.push(color.r,color.g,color.b,alphas[ring]);}
 for(let r=0;r<rings.length-1;r++)for(let i=0;i<segments;i++){const a=r*(segments+1)+i;indices.push(a,a+segments+1,a+1,a+1,a+segments+1,a+segments+2);}
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('color',new T.Float32BufferAttribute(colors,4));geo.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(positions.length/3*2),2));geo.setIndex(indices);geo.computeVertexNormals();return geo;
}
