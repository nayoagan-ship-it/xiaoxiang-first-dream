const assert=require('node:assert/strict'),fs=require('node:fs'),{createRequire}=require('node:module');
const{chromium}=require('./browser-runtime.cjs');
(async()=>{const browser=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});try{
 const context=await browser.newContext({viewport:{width:1600,height:1000}});
 await context.addInitScript(()=>{if(!localStorage.getItem('qa.characters')){localStorage.setItem('qa.characters','1');localStorage.setItem('xiaoxiang.jiafu3d.v1',JSON.stringify({version:1,worldRevision:8,x:23,z:-4.5,started:true,arrived:true,complete:true,introChoice:2,scores:{reserve:0,warmth:0,resonance:1},discoveries:['book'],doors:{'tea-door':true},settings:{speed:0,motion:false,music:false,memories:true}}));}});
 const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.goto('http://127.0.0.1:4176/',{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>document.body.dataset.ready==='true');await page.waitForFunction(()=>JSON.parse(localStorage.getItem('xiaoxiang.jiafu3d.v1')).worldRevision===9);
 const read=()=>page.evaluate(()=>window.__JIAFU_DEV__.read());
 const save=await page.evaluate(()=>JSON.parse(localStorage.getItem('xiaoxiang.jiafu3d.v1')));
 assert.equal(save.worldRevision,9);assert.equal(save.x,23);assert.equal(save.z,-4.5);assert(save.complete&&save.arrived);assert.equal(save.scores.resonance,1);assert.deepEqual(save.discoveries,['book']);assert(save.doors['tea-door']);
 const actors=await page.evaluate(()=>window.__JIAFU_DEV__.world.npcs.map(({id,name,approach,location,root})=>({id,name,approach,location,design:root.userData.characterDesign,revision:root.userData.characterVersion,style:root.userData.characterStyle})));
 assert.equal(actors.length,10);assert(actors.every(n=>n.revision===11&&n.style==='block'));for(const id of['maid','sweeper','reader'])assert(!actors.some(n=>n.id===id));
 const wanted=['xueyan','fengjie','jiamu','wang','yingchun','tanchun','xichun','baoyu'];for(const id of wanted)assert(actors.some(n=>n.id===id));
 assert.equal(await page.evaluate(()=>window.__JIAFU_DEV__.world.player.root.userData.characterDesign),'daiyu');
 assert(await page.evaluate(()=>window.__JIAFU_DEV__.world.npcs.find(n=>n.id==='xichun').height<window.__JIAFU_DEV__.world.npcs.find(n=>n.id==='tanchun').height*.85));
 const walk=async point=>{assert(await page.evaluate(p=>window.__JIAFU_DEV__.nav.valid(p.x,p.z),point));await page.evaluate(p=>window.__JIAFU_DEV__.navigate(p.x,p.z),point);await page.waitForFunction(()=>window.__JIAFU_DEV__.read().path===0,null,{timeout:35000});const s=await read();assert(Math.hypot(s.x-point.x,s.z-point.z)<.72,JSON.stringify(s));await page.waitForTimeout(120);};
 const results=[];
 for(const id of['baoyu','fengjie','jiamu','wang','yingchun','tanchun','xichun','matron','xueyan','keeper']){
  const actor=actors.find(a=>a.id===id);await walk(actor.approach);assert.equal((await read()).nearest,id,id+' should be reachable for conversation');
  if(id==='jiamu')await page.screenshot({path:'outputs/贾府3D_V11_正房人物.png'});
  if(id==='baoyu')await page.screenshot({path:'outputs/贾府3D_V11_东廊宝玉.png'});
  if(id==='xueyan')await page.screenshot({path:'outputs/贾府3D_V11_雪雁随行.png'});
  await page.keyboard.press('e');assert(await page.locator('#dialogue-layer').isVisible());assert.equal(await page.locator('#speaker').textContent(),actor.name);assert((await page.locator('#dialogue-text').textContent()).length>5);
  await page.locator('#dialogue-next').click();assert.equal(await page.locator('#speaker').textContent(),'林黛玉');await page.locator('#dialogue-next').click();assert(await page.locator('#dialogue-layer').isHidden());
  results.push({id,name:actor.name,location:actor.location,walked:true,talked:true});console.log('Verified character: '+id);
 }
 await page.reload({waitUntil:'domcontentloaded'});await page.waitForFunction(()=>document.body.dataset.ready==='true');assert((await read()).complete);assert.deepEqual(errors,[]);
 const report={status:'passed',checks:['nine named characters including playable Daiyu','three redundant maids removed','two gate staff retained','all ten NPCs reached by actual continuous walking','all NPC conversations and first-person replies','V8 position and story/choice/door/journal preserved','no console errors'],actors:results,errors};fs.writeFileSync('outputs/characters-verification-v11.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
