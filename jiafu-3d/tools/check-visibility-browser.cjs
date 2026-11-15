const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('./browser-runtime.cjs');
const url=process.env.JIAFU_VISIBILITY_URL||'http://127.0.0.1:4186/',out=path.resolve(__dirname,'../../.cache/building-visibility-qa');fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});try{
 const context=await browser.newContext({viewport:{width:1280,height:800},reducedMotion:'no-preference'});
 await context.addInitScript(()=>localStorage.setItem('xiaoxiang.jiafu3d.v1',JSON.stringify({version:1,worldRevision:9,journeyRevision:1,journeyDone:['gate','reception','fengjie','yingchun','xichun','tanchun','wang','baoyu','settle'],x:0,z:6,started:true,settings:{motion:false,music:false,memories:false,routeGuide:false}})));
 const p=await context.newPage(),errors=[],missing=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});p.on('response',r=>{if(r.status()>=400)missing.push(r.url())});
 await p.goto(url);await p.waitForFunction(()=>document.body.dataset.ready==='true');
 const place=(x,z)=>p.evaluate(v=>window.__JIAFU_DEV__.place(v.x,v.z),{x,z}),read=()=>p.evaluate(()=>window.__JIAFU_DEV__.visibility.read());
 const cases=[];
 for(const [id,x,z]of [['tea',-26,16],['study',-33,-24],['hall',-18,-19],['music',23.5,0]]){
  await place(x,z);await p.evaluate(()=>window.__JIAFU_DEV__.visibility.setEnabled(false));await p.waitForTimeout(250);await p.screenshot({path:path.join(out,id+'-opaque.png')});
  await p.evaluate(()=>window.__JIAFU_DEV__.visibility.setEnabled(true));await p.waitForFunction(id=>window.__JIAFU_DEV__.visibility.read().buildings.some(e=>e.id===id&&e.opacity===.09),id);await p.waitForTimeout(150);await p.screenshot({path:path.join(out,id+'-transparent.png')});
  for(let i=0;i<5;i++){await p.waitForTimeout(130);assert.equal((await read()).buildings.find(e=>e.id===id).opacity,.09,'stationary transparency stays stable');}
  cases.push(id);
 }
 // A real route must still walk around the solid room, although the room is see-through.
 await place(-26,25.4);await p.evaluate(()=>window.__JIAFU_DEV__.navigate(-26,16));await p.waitForFunction(()=>window.__JIAFU_DEV__.read().path===0,null,{timeout:90000});
 assert(await p.evaluate(()=>{const v=window.__JIAFU_DEV__.read();return Math.hypot(v.x+26,v.z-16)<.1}));assert((await read()).buildings.find(e=>e.id==='tea').opacity<1);
 await p.keyboard.down('s');await p.keyboard.down('a');await p.waitForTimeout(1400);await p.keyboard.up('s');await p.keyboard.up('a');assert((await p.evaluate(()=>window.__JIAFU_DEV__.read())).z<17,'transparent walls still stop the player');
 await p.evaluate(()=>window.__JIAFU_DEV__.navigate(-18,16));await p.waitForFunction(()=>window.__JIAFU_DEV__.read().path===0,null,{timeout:90000});await p.waitForFunction(()=>window.__JIAFU_DEV__.visibility.read().buildings.find(e=>e.id==='tea').opacity===1);
 // Test the actual animated setting and a smooth return to full opacity.
 await place(0,6);await p.locator('#help-open').click();await p.locator('#setting-motion').check();await p.keyboard.press('Escape');await p.waitForTimeout(500);
 await place(-26,16);const fade=[];for(let i=0;i<18;i++){await p.waitForTimeout(100);fade.push((await read()).buildings.find(e=>e.id==='tea').opacity);}
 assert(fade.some(a=>a>.1&&a<.98),'building fades through visible intermediate states');for(let i=1;i<fade.length;i++)assert(fade[i]<=fade[i-1]+1e-6,'fading does not oscillate');
 await place(0,6);await p.waitForFunction(()=>window.__JIAFU_DEV__.visibility.read().buildings.every(e=>e.opacity===1));
 await place(-26,16);await p.waitForFunction(()=>window.__JIAFU_DEV__.visibility.read().buildings.find(e=>e.id==='tea').opacity<.11);await p.keyboard.press('f');await p.waitForFunction(()=>window.__JIAFU_DEV__.visibility.read().buildings.every(e=>e.opacity===1));await p.screenshot({path:path.join(out,'overview-restored.png')});
 assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);const report={status:'passed',buildings:cases,checks:['before and after actual rendering','stable transparency while stationary','actual route around a transparent room','transparent wall remains solid','walk-away restoration','animated fade has intermediate states and no oscillation','overview restores intact architecture'],errors,missing};fs.writeFileSync(path.join(out,'verification.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));await context.close();
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
