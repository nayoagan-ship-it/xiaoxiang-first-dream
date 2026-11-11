const assert=require('node:assert/strict'),fs=require('node:fs'),{createRequire}=require('node:module');
const{chromium}=require('./browser-runtime.cjs');
const url='http://127.0.0.1:4176/',key='xiaoxiang.jiafu3d.v1';
const seed={version:1,worldRevision:9,x:8,z:5.5,started:true,arrived:true,complete:true,settings:{speed:0,music:false,motion:true,memories:true}};
const image=async(page,id)=>{await page.waitForFunction(id=>{const i=document.getElementById('dialogue-portrait');return !i.hidden&&i.dataset.person===id&&i.complete&&i.naturalWidth>0;},id);assert.equal(await page.locator('#dialogue-portrait').getAttribute('alt'),id==='daiyu'?'林黛玉立绘':await page.locator('#speaker').textContent()+'立绘');};
(async()=>{
 const{dialoguePortraits,resolveSpeakerPortrait}=await import('../src/dialogue-portraits.js');
 assert.equal(dialoguePortraits.length,12);for(const person of dialoguePortraits){assert(fs.existsSync('public/'+person.src.replace(/^\.\//,'')));for(const alias of person.aliases)assert.equal(resolveSpeakerPortrait(alias).id,person.id);}assert.equal(resolveSpeakerPortrait('旁白'),null);assert.equal(resolveSpeakerPortrait(' 我 ').id,'daiyu');
 const b=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});const errors=[];
 const newPage=async(state=seed,options={})=>{const c=await b.newContext({viewport:{width:1600,height:1000},...options});await c.addInitScript(({key,state})=>{if(!localStorage.getItem('portrait.qa')){localStorage.setItem('portrait.qa','1');localStorage.setItem(key,JSON.stringify(state));}},{key,state});const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await p.goto(url);await p.waitForFunction(()=>document.body.dataset.ready==='true');return{c,p};};
 try{
  const{c,p}=await newPage(),actors=await p.evaluate(()=>window.__JIAFU_DEV__.world.npcs.map(n=>({id:n.id,name:n.name,approach:n.approach})));
  const results=[];
  for(const actor of actors){
   await p.evaluate(a=>window.__JIAFU_DEV__.place(a.x,a.z),actor.approach);await p.waitForFunction(id=>window.__JIAFU_DEV__.read().nearest===id,actor.id);await p.keyboard.press('e');assert.equal(await p.locator('#speaker').textContent(),actor.name);await image(p,actor.id);await p.waitForTimeout(300);
   await p.screenshot({path:'outputs/贾府3D_V11_对话立绘_'+actor.name+'.png'});await p.locator('#dialogue-next').click();await image(p,'daiyu');
   if(actor.id==='baoyu')await p.screenshot({path:'outputs/贾府3D_V11_对话立绘_黛玉回应.png'});
   await p.locator('#dialogue-next').click();assert(await p.locator('#dialogue-layer').isHidden());assert(await p.locator('#dialogue-portrait').isHidden());results.push(actor.id);console.log('Portrait and reply passed: '+actor.id);
  }
  // The anonymous announcing maid has her own portrait, then clears on completion.
  await c.close();const announce=await newPage({...seed,x:-2.5,z:-6.5,complete:false});await announce.p.waitForFunction(()=>window.__JIAFU_DEV__.read().nearest==='fengjie');await announce.p.keyboard.press('e');await image(announce.p,'daiyu');await announce.p.locator('#dialogue-next').click();await image(announce.p,'maid');await announce.p.screenshot({path:'outputs/贾府3D_V11_对话立绘_丫鬟通报.png'});await announce.p.locator('#dialogue-next').click();assert(await announce.p.locator('#dialogue-portrait').isHidden());await announce.c.close();
  // Portrait identity follows the speaker, even when a legacy thought mentions Jiamu.
  const inner=await newPage({...seed,pendingMain:{kind:'legacy',tag:'hall',id:'grandma-feel',stop:'grandma-arrival',open:true}});await image(inner.p,'daiyu');assert.equal(await inner.p.locator('#speaker-kind').textContent(),'心声');await inner.p.keyboard.press('Escape');assert(await inner.p.locator('#dialogue-portrait').isHidden());await inner.p.reload();await inner.p.waitForFunction(()=>document.body.dataset.ready==='true');assert(await inner.p.locator('#dialogue-layer').isHidden());await inner.c.close();
  // A slow previous image must never repaint after the speaker changes or closes.
  for(const mode of['reply','pause']){
   const race=await newPage({...seed,x:mode==='reply'?8:.5,z:mode==='reply'?5.5:-10}),who=mode==='reply'?'baoyu':'wang';let release,started,finished;
   const gate=new Promise(r=>release=r),held=new Promise(r=>started=r),done=new Promise(r=>finished=r);
   await race.p.route('**/'+(who==='baoyu'?'assets/baoyu.png':'assets/portraits-v11/wang.png'),async route=>{started();await gate;await route.continue();finished();});
   await race.p.waitForFunction(id=>window.__JIAFU_DEV__.read().nearest===id,who);await race.p.keyboard.press('e');await held;
   if(mode==='reply'){await race.p.locator('#dialogue-next').click();await image(race.p,'daiyu');}else await race.p.keyboard.press('Escape');
   release();await done;await race.p.waitForTimeout(250);
   if(mode==='reply')await image(race.p,'daiyu');else assert(await race.p.locator('#dialogue-portrait').isHidden());await race.c.close();
  }
  // Choice layout and resumed reading keep Daiyu, without covering the choices.
  const choice=await newPage({...seed,x:18,z:25.5,arrived:false,complete:false,settings:{...seed.settings,motion:false}});await choice.p.waitForFunction(()=>window.__JIAFU_DEV__.read().nearest==='matron');await choice.p.keyboard.press('e');await image(choice.p,'daiyu');for(let i=0;i<3;i++)await choice.p.locator('#dialogue-next').click();assert(await choice.p.locator('#choice-panel').isVisible());
  for(const size of[{width:1600,height:1000},{width:1280,height:720},{width:980,height:660}]){await choice.p.setViewportSize(size);const a=await choice.p.locator('#choice-panel').boundingBox(),d=await choice.p.locator('.dialogue').boundingBox(),i=await choice.p.locator('#dialogue-portrait').boundingBox();assert(a.y+a.height<d.y+1);assert(i.x>a.x+a.width);}
  await choice.p.locator('#choices button').first().click();await choice.p.keyboard.press('Escape');await choice.p.reload();await choice.p.waitForFunction(()=>document.body.dataset.ready==='true');await choice.p.keyboard.press('e');await image(choice.p,'daiyu');assert((await choice.p.locator('#dialogue-text').textContent()).includes('扶着婆子'));await choice.c.close();
  assert.deepEqual(errors,[]);const report={status:'passed',checks:['twelve correctly mapped speaker portraits','all ten NPC portraits and Daiyu replies in real scene','announcing maid portrait','speaker identity independent of memory portraits','slow image cannot overwrite reply or reappear after pause','choice layout at three desktop sizes','pause and resumed branch'],npcPortraits:results,errors};fs.writeFileSync('outputs/dialogue-portraits-verification-v11.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
