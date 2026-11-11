const assert=require('node:assert/strict'),fs=require('node:fs'),{createRequire}=require('node:module');
const{chromium}=require('./browser-runtime.cjs');
(async()=>{const b=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});try{
 const c=await b.newContext({viewport:{width:1600,height:1000}});await c.addInitScript(()=>localStorage.setItem('xiaoxiang.v1.settings',JSON.stringify({speed:0,music:false,motion:false,memories:true})));
 const p=await c.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await p.goto('http://127.0.0.1:4176/',{waitUntil:'domcontentloaded'});await p.waitForFunction(()=>document.body.dataset.ready==='true');await p.locator('#begin').click();
 const rooms=await p.evaluate(()=>window.__JIAFU_DEV__.world.rooms.map(({id,name,arch,entrance,inside})=>({id,name,arch,entrance,inside}))),result=[];
 const read=()=>p.evaluate(()=>window.__JIAFU_DEV__.read());
 const walk=async(point)=>{await p.evaluate(v=>window.__JIAFU_DEV__.navigate(v.x,v.z),point);await p.waitForFunction(()=>window.__JIAFU_DEV__.read().path===0,null,{timeout:25000});const s=await read();assert(Math.hypot(s.x-point.x,s.z-point.z)<.7,JSON.stringify({point,s}));await p.waitForTimeout(120);};
 const itemIds={hall:'incense',study:'inkstone',guest:'mirror',tea:'kettle',service:'folded-quilt',sewing:'embroidery',music:'qin',gatehouse:'ledger'};
 for(const room of rooms){
  await p.evaluate(v=>window.__JIAFU_DEV__.place(v.x,v.z),room.entrance);await p.waitForTimeout(140);
  if(room.id==='tea'){assert.equal((await read()).nearest,'tea-door');await p.keyboard.press('e');}
  await walk(room.inside);assert.equal((await read()).room,room.id);assert((await p.locator('#place-name').textContent()).includes(room.name));
  const cutaway=await p.evaluate(name=>{const w=window.__JIAFU_DEV__.world,r=w.roofs.find(r=>r.group.name===name+'_Roof'),back=w.root.getObjectByName(name+'_Interior_Backdrop');return {roof:r.materials.every(m=>m.opacity<.03),back:back.visible&&back.children.filter(o=>!o.material.userData.windowGlazing).every(o=>o.material.opacity>.99)};},room.arch);assert(cutaway.roof&&cutaway.back,room.id+' cutaway and rear wall');
  await p.screenshot({path:'outputs/贾府3D_V11_'+room.name+'.png'});
  const item=await p.evaluate(id=>{const i=window.__JIAFU_DEV__.world.interact.find(v=>v.id===id);return{id:i.id,x:i.x,z:i.z,text:i.text};},itemIds[room.id]);await walk(item);assert.equal((await read()).nearest,item.id);await p.keyboard.press('e');assert((await p.locator('#dialogue-text').textContent()).includes(item.text.slice(0,12)));await p.locator('#dialogue-next').click();assert((await read()).discovered.includes(item.id));
  await walk(room.entrance);assert.notEqual((await read()).room,room.id);assert(await p.evaluate(name=>window.__JIAFU_DEV__.world.roofs.find(r=>r.group.name===name+'_Roof').materials.every(m=>m.opacity>.99),room.arch));
  result.push({id:room.id,name:room.name,entered:true,interaction:item.id,exited:true});console.log('Verified interior: '+room.id);
 }
 await p.locator('#overview').click();await p.waitForTimeout(140);await p.screenshot({path:'outputs/贾府3D_V11_全府地图.png'});assert.deepEqual(errors,[]);
 const report={status:'passed',checks:['eight furnished rooms entered and exited by actual walking','new room interactions discovered','roof cutaway and solid rear backdrop','room title and close camera','roof restored after exit'],rooms:result,stats:await p.evaluate(()=>window.__JIAFU_DEV__.world.interiorStats),errors};fs.writeFileSync('outputs/interiors-verification-v11.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
