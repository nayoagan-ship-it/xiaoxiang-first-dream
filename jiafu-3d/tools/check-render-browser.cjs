const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{chromium}=require('./browser-runtime.cjs');
const url=process.env.JIAFU_RENDER_URL||'http://127.0.0.1:4186/',out=path.resolve(__dirname,'../../.cache/render-stability-qa');fs.mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});try{const c=await b.newContext({viewport:{width:1280,height:800},deviceScaleFactor:1});await c.addInitScript(()=>localStorage.setItem('xiaoxiang.jiafu3d.v1',JSON.stringify({version:1,worldRevision:9,journeyRevision:1,journeyDone:['gate','reception','fengjie','yingchun','xichun','tanchun','wang','baoyu','settle'],x:0,z:6,started:true,settings:{motion:true,music:false,speed:0,memories:false,routeGuide:false}})));const p=await c.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});await p.goto(url);await p.waitForFunction(()=>document.body.dataset.ready==='true');await p.waitForTimeout(250);
// Exercise the actual frame-loop cutaway before the deterministic GPU comparison.
const transitions=[];
for(const id of ['tea','hall']){
 const room=await p.evaluate(id=>{const r=window.__JIAFU_DEV__.world.rooms.find(r=>r.id===id);return{entrance:r.entrance,inside:r.inside};},id);
 const cover=()=>p.evaluate(id=>window.__JIAFU_DEV__.world.roofs.filter(r=>r.room?.id===id).flatMap(r=>r.materials.map(m=>({opacity:m.opacity,transparent:m.transparent,depthWrite:m.depthWrite}))),id);
 await p.evaluate(v=>window.__JIAFU_DEV__.place(v.x,v.z),room.entrance);
 await p.waitForFunction(id=>window.__JIAFU_DEV__.world.roofs.filter(r=>r.room?.id===id).every(r=>r.materials.every(m=>m.opacity===1)),id);
 await p.evaluate(v=>window.__JIAFU_DEV__.place(v.x,v.z),room.inside);
 const samples=[];for(let i=0;i<22;i++){await p.waitForTimeout(100);samples.push(await cover());}
 assert(samples.some(a=>a.some(m=>m.opacity>.03&&m.opacity<.97)),id+' visibly fades through intermediate frames');
 for(const a of samples)for(const m of a)if(m.opacity<1){assert(m.transparent);assert(!m.depthWrite,'fading surfaces must not obscure other transparent surfaces');}
 for(let i=1;i<samples.length;i++)for(let j=0;j<samples[i].length;j++)assert(samples[i][j].opacity<=samples[i-1][j].opacity+1e-6,'stationary room cutaway does not oscillate');
 await p.screenshot({path:path.join(out,id+'-interior.png')});
 await p.evaluate(v=>window.__JIAFU_DEV__.place(v.x,v.z),room.entrance);
 await p.waitForFunction(id=>window.__JIAFU_DEV__.world.roofs.filter(r=>r.room?.id===id).every(r=>r.materials.every(m=>m.opacity===1&&!m.transparent&&m.depthWrite)),id);
 transitions.push(id);
}
const report=await p.evaluate(()=>{const {world,rendering:{renderer,scene,camera}}=window.__JIAFU_DEV__;renderer.setAnimationLoop(null);world.setRoomFocus(null);for(const r of world.roofs){r.group.visible=true;for(const m of r.materials){m.opacity=1;m.depthWrite=true;}}scene.updateMatrixWorld(true);renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;// Changing only the orthographic near plane preserves screen geometry and lighting.
// Pixel changes therefore expose competing depth surfaces rather than camera motion.
const canvas=renderer.domElement,gl=renderer.getContext(),w=canvas.width,h=canvas.height,scenes=[];
for(const spec of [{name:'court',x:-1,y:1,z:7,half:14},{name:'arrival',x:18,y:0,z:24,half:14},{name:'overview',x:0,y:3,z:1,half:41.2}]){camera.position.set(spec.x+48,spec.y+57,spec.z+48);camera.lookAt(spec.x,spec.y,spec.z);camera.left=-spec.half*w/h;camera.right=spec.half*w/h;camera.top=spec.half;camera.bottom=-spec.half;camera.far=210;const metrics=[];let first=null,firstPNG=null,lastPNG=null;
for(const near of [.1,.101,.107,.2,.5,1,2]){camera.near=near;camera.updateProjectionMatrix();camera.updateMatrixWorld();renderer.render(scene,camera);const pixels=new Uint8Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,pixels);if(!first){first=pixels;firstPNG=canvas.toDataURL();}let changed=0,severe=0,sum=0,max=0;for(let i=0;i<pixels.length;i+=4){const d=Math.max(Math.abs(pixels[i]-first[i]),Math.abs(pixels[i+1]-first[i+1]),Math.abs(pixels[i+2]-first[i+2]));if(d>4)changed++;if(d>20)severe++;sum+=d;max=Math.max(max,d);}metrics.push({near,changed,severe,mean:sum/(w*h),max});lastPNG=canvas.toDataURL();}
scenes.push({name:spec.name,metrics,firstPNG,lastPNG});}
return {scenes,w,h,webgl:gl.getParameter(gl.VERSION),transparentRoofMaterials:world.roofs.reduce((n,r)=>n+r.materials.filter(m=>m.transparent).length,0)};});
for(const s of report.scenes){fs.writeFileSync(path.join(out,s.name+'-a.png'),Buffer.from(s.firstPNG.split(',')[1],'base64'));fs.writeFileSync(path.join(out,s.name+'-b.png'),Buffer.from(s.lastPNG.split(',')[1],'base64'));delete s.firstPNG;delete s.lastPNG;}report.errors=errors;report.cutawayTransitions=transitions;for(const s of report.scenes)for(const m of s.metrics){assert(m.changed<report.w*report.h*.0002,s.name+' has a broad unstable surface');assert(m.mean<.002,s.name+' has visible depth fighting');}assert.equal(report.transparentRoofMaterials,0,'fully restored roofs render as opaque');assert.deepEqual(errors,[]);report.status='passed';fs.writeFileSync(path.join(out,'probe.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));await c.close();}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1});
