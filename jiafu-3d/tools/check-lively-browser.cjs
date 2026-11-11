const assert=require('node:assert/strict'),fs=require('node:fs'),{createRequire}=require('node:module');
const{chromium}=require('./browser-runtime.cjs');
const seed=()=>localStorage.setItem('xiaoxiang.jiafu3d.v1',JSON.stringify({version:1,worldRevision:9,x:8,z:5.5,started:true,arrived:true,complete:true,settings:{speed:0,music:false,motion:true,memories:true}}));
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});
 try{
  const context=await browser.newContext({viewport:{width:1600,height:1000}});await context.addInitScript(seed);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4176/');await page.waitForFunction(()=>document.body.dataset.ready==='true');
  const state=()=>page.evaluate(()=>{const w=window.__JIAFU_DEV__.world,n=w.npcs.find(n=>n.id==='baoyu');return{npc:{root:n.root.rotation.y,head:n.rig.head.rotation.toArray(),body:n.rig.body.position.y,mouth:n.rig.face.expressions.mouth.scale.y,eyes:n.rig.face.expressions.eyes.scale.y,arm:n.parts.rightArm.rotation.toArray(),focus:n.motion.focus},player:{root:w.player.root.rotation.y,mouth:w.player.rig.face.expressions.mouth.scale.y},target:Math.atan2(w.player.root.position.x-n.root.position.x,w.player.root.position.z-n.root.position.z)};});
  await page.waitForFunction(()=>window.__JIAFU_DEV__.world.npcs.find(n=>n.id==='baoyu').motion.focus);await page.waitForTimeout(1700);
  const a=await state();assert(Math.abs(a.npc.root-a.target)<.08,'Baoyu turns to Daiyu');await page.waitForTimeout(400);assert.notEqual((await state()).npc.body,a.npc.body);
  await page.keyboard.press('e');assert.equal(await page.locator('#speaker').textContent(),'贾宝玉');await page.waitForTimeout(300);
  const speaking=await state();await page.waitForTimeout(180);const speaking2=await state();assert.notEqual(speaking.npc.mouth,speaking2.npc.mouth);assert.notDeepEqual(speaking.npc.arm,speaking2.npc.arm);assert.equal(speaking.player.mouth,1);
  await page.locator('#dialogue-next').click();assert.equal(await page.locator('#speaker').textContent(),'林黛玉');await page.waitForTimeout(500);const reply=await state();assert.equal(reply.npc.mouth,1);assert.notEqual(reply.player.mouth,1);assert(Math.abs(reply.player.root-(a.target+Math.PI))<.09||Math.abs(reply.player.root-(a.target-Math.PI))<.09);
  await page.screenshot({path:'outputs/贾府3D_V11_人物交谈回应.png'});await page.locator('#dialogue-next').click();await page.locator('#help-open').click();await page.locator('#setting-motion').uncheck();await page.locator('#modal-close').click();await page.waitForTimeout(200);
  const still=await state();await page.waitForTimeout(450);assert.deepEqual(await state(),still,'motion off freezes character gestures');
  await context.close();
  const reduced=await browser.newContext({reducedMotion:'reduce',viewport:{width:1600,height:1000}});await reduced.addInitScript(seed);const p=await reduced.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto('http://127.0.0.1:4176/');await p.waitForFunction(()=>document.body.dataset.ready==='true');
  const body=()=>p.evaluate(()=>{const n=window.__JIAFU_DEV__.world.npcs.find(n=>n.id==='baoyu');return[n.rig.body.position.y,n.rig.head.rotation.toArray(),n.rig.face.expressions.eyes.scale.y,n.rig.face.expressions.mouth.scale.y];});
  await p.waitForTimeout(200);const reducedPose=await body();await p.waitForTimeout(450);assert.deepEqual(await body(),reducedPose);await reduced.close();
  assert.deepEqual(errors,[]);const report={status:'passed',checks:['nearby NPC turns toward Daiyu','visible breathing transforms in live scene','speaker mouth and welcoming arm move','Daiyu turns and replies while NPC listens','motion checkbox freezes gestures','OS reduced-motion freezes gestures'],errors};fs.writeFileSync('outputs/lively-browser-verification-v11.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
