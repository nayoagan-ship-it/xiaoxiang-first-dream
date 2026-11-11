const assert=require('node:assert/strict'),fs=require('node:fs'),{createRequire}=require('node:module');
const{chromium}=require('./browser-runtime.cjs');
(async()=>{
 const{dialoguePortraits}=await import('../src/dialogue-portraits.js'),url='http://127.0.0.1:4177/';
 for(const person of dialoguePortraits){const response=await fetch(new URL(person.src,url));assert.equal(response.status,200);assert.deepEqual(Buffer.from(await response.arrayBuffer()),fs.readFileSync('public/'+person.src.replace(/^\.\//,'')));}
 const b=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true}),errors=[];
 try{
  for(const person of[{id:'baoyu',x:8,z:5.5},{id:'wang',x:.5,z:-10}]){
   const c=await b.newContext({viewport:{width:1440,height:900}});await c.addInitScript(person=>localStorage.setItem('xiaoxiang.jiafu3d.v1',JSON.stringify({version:1,worldRevision:9,x:person.x,z:person.z,started:true,arrived:true,complete:true,settings:{speed:0,music:false,motion:false,memories:true}})),person);
   const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await p.goto(url);await p.waitForFunction(()=>document.body.dataset.ready==='true');assert.equal(await p.evaluate(()=>typeof window.__JIAFU_DEV__),'undefined');await p.waitForTimeout(180);await p.keyboard.press('e');
   await p.waitForFunction(id=>{const i=document.getElementById('dialogue-portrait');return !i.hidden&&i.dataset.person===id&&i.naturalWidth>0;},person.id);
   if(person.id==='wang')await p.screenshot({path:'outputs/贾府3D_V11_正式对话立绘.png'});
   await p.locator('#dialogue-next').click();await p.waitForFunction(()=>{const i=document.getElementById('dialogue-portrait');return !i.hidden&&i.dataset.person==='daiyu'&&i.naturalWidth>0;});await p.keyboard.press('Escape');assert(await p.locator('#dialogue-portrait').isHidden());await c.close();
  }
  assert.deepEqual(errors,[]);const report={status:'passed',checks:['twelve production portrait responses match packaged source bytes','Baoyu and Wang portraits in built game','Daiyu reply and pause cleanup','developer API absent'],errors};fs.writeFileSync('outputs/production-portraits-verification-v11.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
