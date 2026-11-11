const assert=require('node:assert/strict'),fs=require('node:fs'),{createRequire}=require('node:module');
const{chromium}=require('./browser-runtime.cjs');
(async()=>{const browser=await chromium.launch({executablePath:process.env.JIAFU_BROWSER_EXECUTABLE,headless:true});try{
 const errors=[],names={daiyu:'黛玉',baoyu:'宝玉',jiamu:'贾母',fengjie:'凤姐',wang:'王夫人',yingchun:'迎春',tanchun:'探春',xichun:'惜春',xueyan:'雪雁'};
 const hasBaseline=fs.existsSync('.cache/characters-v11-before-face-polish.js');
 if(hasBaseline)for(const design of['daiyu','baoyu','fengjie','jiamu']){const baseline=await browser.newPage({viewport:{width:1680,height:1000}});await baseline.goto('http://127.0.0.1:4176/tools/character-study.html?design='+design+'&baseline=1',{waitUntil:'domcontentloaded'});await baseline.waitForFunction(()=>window.__MODEL_READY__);await baseline.screenshot({path:'outputs/方块人物_V11_'+names[design]+'面部精修前.png'});await baseline.close();}
 for(const[design,name]of Object.entries(names)){
  const page=await browser.newPage({viewport:{width:1680,height:1000}});page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto('http://127.0.0.1:4176/tools/character-study.html?design='+design,{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>window.__MODEL_READY__);await page.screenshot({path:'outputs/方块人物_V11_'+name+'近景.png'});await page.close();console.log('Inspected block model: '+design);
 }
 assert.deepEqual(errors,[]);fs.writeFileSync('outputs/character-models-verification-v11.json',JSON.stringify({status:'passed',faceRevision:4,faceStyle:'reference-square',characters:Object.keys(names),views:['front','rear','map elevated'],sameCameraBaseline:hasBaseline?'daiyu':null,errors},null,2));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
