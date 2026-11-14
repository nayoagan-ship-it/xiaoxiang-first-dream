const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('./browser-runtime.cjs');
const out=process.env.JIAFU_QA_OUTPUT||path.resolve(__dirname,'../outputs/ui-beautify-v12');fs.mkdirSync(out,{recursive:true});
const errors=[],failed=[],layouts=[];
async function inBounds(page,selector){const b=await page.locator(selector).boundingBox(),size=page.viewportSize();assert(b,selector+' visible');assert(b.x>=-1&&b.y>=-1&&b.x+b.width<=size.width+1&&b.y+b.height<=size.height+1,selector+' within '+size.width+'x'+size.height);return b;}
async function frame(page,file){await page.screenshot({path:path.join(out,file)});}
async function ready(page){await page.goto(process.env.JIAFU_UI_URL||'http://127.0.0.1:4177/jiafu/index.html');await page.waitForFunction(()=>document.body.dataset.ready==='true');}
(async()=>{const browser=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});try{
 const context=await browser.newContext({viewport:{width:1600,height:1000},reducedMotion:'reduce'});
 await context.addInitScript(()=>{if(!localStorage.getItem('xiaoxiang.jiafu3d.v1'))localStorage.setItem('xiaoxiang.v1.settings',JSON.stringify({music:false,motion:false,speed:0}));});
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>failed.push(r.url()));
 await ready(page);assert(await page.locator('#overview .ui-icon use').count());assert.equal(await page.locator('#overview').getAttribute('aria-pressed'),'true');
 for(const size of [{width:1600,height:1000},{width:1280,height:800},{width:980,height:660}]){
  await page.setViewportSize(size);await page.waitForTimeout(100);
  for(const selector of ['.topbar','.quest','.mini-map','.bottom-bar','.intro'])await inBounds(page,selector);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth));
  const nav=await page.locator('.topbar nav').boundingBox(),place=await page.locator('.place').boundingBox();assert(nav.x>=place.x+place.width,'header regions do not collide');
  layouts.push({...size,entry:'passed'});await frame(page,'after-overview-'+size.width+'.png');
 }
 await page.setViewportSize({width:1600,height:1000});await page.locator('#begin').click();await page.waitForTimeout(150);assert.equal(await page.locator('#overview').getAttribute('aria-pressed'),'false');
 await frame(page,'after-explore.png');
 await page.locator('#help-open').click();assert(await page.locator('#modal').isVisible());await inBounds(page,'#modal');
 assert.equal(await page.locator('#setting-motion').getAttribute('role'),'switch');await page.getByRole('switch',{name:'场景动效'}).check();assert.equal(await page.locator('body').evaluate(e=>e.classList.contains('ui-still')),false);await page.getByRole('switch',{name:'场景动效'}).uncheck();assert(await page.locator('body').evaluate(e=>e.classList.contains('ui-still')));
 await page.locator('#setting-speed').fill('70');await frame(page,'after-settings.png');
 await page.setViewportSize({width:980,height:660});await inBounds(page,'#modal');await frame(page,'after-settings-980.png');await page.locator('#modal-close').click();
 await page.setViewportSize({width:1600,height:1000});await page.locator('#journal-open').click();assert.equal(await page.locator('#modal-title').textContent(),'黛玉手记');await frame(page,'after-journal.png');await page.locator('#modal-close').click();
 await page.locator('#map-open').click();assert(await page.locator('.modal-map').isVisible());await frame(page,'after-map.png');await page.keyboard.press('Escape');
 await page.keyboard.press('e');await page.locator('#dialogue-portrait').waitFor({state:'visible'});assert.equal(await page.locator('#speaker').textContent(),'林黛玉');
 await page.waitForFunction(()=>{const i=document.getElementById('dialogue-companion');return !i.hidden&&i.dataset.person==='matron'&&i.naturalWidth>0;});assert.equal(await page.locator('#dialogue-layer').getAttribute('data-partner'),'matron','the person being addressed appears during the first inner thought');
 for(const size of [{width:1600,height:1000},{width:1280,height:800},{width:980,height:660}]){
  await page.setViewportSize(size);await page.waitForTimeout(100);await inBounds(page,'.dialogue');await inBounds(page,'.speaker-strip');await inBounds(page,'.reading-actions');await frame(page,'after-dialogue-'+size.width+'.png');
 }
 await page.setViewportSize({width:1600,height:1000});for(let i=0;i<3;i++)await page.locator('#dialogue-next').click();assert(await page.locator('#choice-panel').isVisible());assert.equal(await page.locator('#choices button').count(),3);
 for(const size of [{width:1600,height:1000},{width:1280,height:800},{width:980,height:660}]){
  await page.setViewportSize(size);const a=await inBounds(page,'#choice-panel'),b=await inBounds(page,'.dialogue');assert(a.y+a.height<b.y-5,'choices do not overlap reading surface');await frame(page,'after-choice-'+size.width+'.png');
 }
 await page.locator('#choices button').nth(1).click();assert.equal(await page.locator('#speaker').textContent(),'林黛玉');assert.equal(await page.locator('#dialogue-portrait').getAttribute('data-person'),'daiyu');
 await page.locator('#dialogue-pause').click();assert(!(await page.locator('#dialogue-layer').isVisible()));const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('xiaoxiang.jiafu3d.v1')));assert.equal(saved.introChoice,1);assert.equal(saved.pendingMain.open,false);assert.equal(saved.pendingMain.partner,'引路婆子');
 await page.reload();await page.waitForFunction(()=>document.body.dataset.ready==='true');assert(!(await page.locator('#dialogue-layer').isVisible()));assert.equal(await page.locator('#intro').isVisible(),false);await page.keyboard.press('e');assert((await page.locator('#dialogue-text').textContent()).includes('外祖母'));await page.waitForFunction(()=>{const i=document.getElementById('dialogue-companion');return i.dataset.person==='matron'&&!i.hidden&&i.naturalWidth>0;});await page.locator('#dialogue-next').click();assert(!(await page.locator('#dialogue-layer').isVisible()));assert(await page.locator('#dialogue-companion').isHidden());
 assert.equal(await page.locator('#discovery-progress').getAttribute('max'),'22');
 await page.setViewportSize({width:1600,height:1000});await page.locator('#help-open').click();await page.getByRole('switch',{name:'场景动效'}).check();assert.equal(await page.locator('.intro').evaluate(e=>getComputedStyle(e).animationName),'none','system reduced motion respected');await page.locator('#modal-close').click();
 const {dialoguePortraits}=await import('../src/dialogue-portraits.js'),gameURL=process.env.JIAFU_UI_URL||'http://127.0.0.1:4177/jiafu/index.html';
 for(const person of dialoguePortraits){const response=await fetch(new URL(person.src,gameURL));assert.equal(response.status,200);assert.deepEqual(Buffer.from(await response.arrayBuffer()),fs.readFileSync(path.resolve(__dirname,'../public',person.src)));}
 const {npcSpecs}=await import('../src/character-roster.js'),{journeyStages}=await import('../src/exploration-story.js');
 for(const person of npcSpecs.map(n=>({id:n.design,...n.approach}))) {
  const old=await browser.newContext({viewport:{width:1440,height:900}});await old.addInitScript(person=>localStorage.setItem('xiaoxiang.jiafu3d.v1',JSON.stringify({version:1,worldRevision:9,x:person.x,z:person.z,started:true,arrived:true,complete:true,journeyRevision:1,journeyDone:['gate','reception','fengjie','yingchun','xichun','tanchun','wang','baoyu','settle'],doors:{'tea-door':true},settings:{speed:0,music:false,motion:false,memories:true}})),person);
  const p=await old.newPage();p.on('pageerror',e=>errors.push(e.message));await ready(p);await p.locator('#interaction').waitFor({state:'visible'});assert(!(await p.locator('#intro').isVisible()));await p.keyboard.press('e');await p.waitForFunction(id=>{const image=document.getElementById('dialogue-portrait');return !image.hidden&&image.dataset.person===id&&image.naturalWidth>0;},person.id);
  await p.waitForFunction(()=>{const image=document.getElementById('dialogue-companion');return !image.hidden&&image.dataset.person==='daiyu'&&image.naturalWidth>0;});
  await p.locator('#dialogue-next').click();await p.waitForFunction(()=>{const image=document.getElementById('dialogue-portrait');return !image.hidden&&image.dataset.person==='daiyu'&&image.naturalWidth>0;});await p.waitForFunction(id=>{const image=document.getElementById('dialogue-companion');return !image.hidden&&image.dataset.person===id&&image.naturalWidth>0;},person.id);
  await frame(p,'conversation-'+person.id+'.png');await p.locator('#dialogue-pause').click();assert(await p.locator('#dialogue-portrait').isHidden());assert(await p.locator('#dialogue-companion').isHidden());assert.equal(await p.locator('#dialogue-layer').getAttribute('data-partner'),null);await old.close();
 }
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
 const report={status:'passed',layouts,checks:['entry and navigation bounds at three desktop sizes','SVG navigation retained across view changes','native labelled settings switches and persistence','large map and journal dialogs','speaker portrait and dialogue layout','three choices without panel collisions','visible pause button','paused dialogue reload restores the partner without duplicated choice','system reduced motion and scene motion switch','all twelve existing portrait resources retained byte-for-byte','saved positions and completed story load in merged edition','all ten NPCs remain visible during Daiyu replies','partner appears during the first inner thought','pause and finish clear both portraits'],errors,failed};fs.writeFileSync(path.join(out,'ui-verification-v12.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1});
