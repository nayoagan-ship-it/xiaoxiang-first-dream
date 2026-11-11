const assert=require('node:assert/strict'),fs=require('node:fs'),{createRequire}=require('node:module');
const{chromium}=require('./browser-runtime.cjs');
(async()=>{const b=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});try{
 const p=await b.newPage({viewport:{width:1600,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.addInitScript(()=>localStorage.setItem('xiaoxiang.jiafu3d.v1',JSON.stringify({version:1,worldRevision:9,x:-4,z:-10.5,started:true,arrived:true,complete:true,settings:{speed:0,music:false,motion:false}})));
 await p.goto('http://127.0.0.1:4176/');await p.waitForFunction(()=>document.body.dataset.ready==='true');await p.waitForTimeout(150);
 const size=()=>p.evaluate(()=>{const d=window.__JIAFU_DEV__,y=d.world.groundHeight(-4,-10.5);return Math.abs(d.project(-4,y,-10.5).y-d.project(-4,y+2.6,-10.5).y);});
 const before=await size();await p.screenshot({path:'outputs/贾府3D_V11_正房人物.png'});await p.mouse.move(900,450);for(let i=0;i<8;i++)await p.mouse.wheel(0,-120);await p.waitForTimeout(150);const after=await size();assert(after>before*2);
 assert(await p.evaluate(()=>{const w=window.__JIAFU_DEV__.world;return [w.player,...w.npcs].every(a=>a.root.userData.characterStyle==='block'&&a.root.userData.faceRevision===4&&a.root.userData.faceStyle==='reference-square'&&a.fineMeshes.length===0);}));
 await p.screenshot({path:'outputs/贾府3D_V11_拉近查看人物.png'});assert.deepEqual(errors,[]);fs.writeFileSync('outputs/close-camera-verification-v11.json',JSON.stringify({status:'passed',before,after,blockModels:true,errors},null,2));console.log('Close camera and block models passed.');
}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
