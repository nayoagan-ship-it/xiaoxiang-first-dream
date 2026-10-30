const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {JSDOM,VirtualConsole}=require('jsdom');
const root=path.resolve(__dirname,'..');
const script=fs.readFileSync(path.join(root,'dist/app.js'),'utf8');
const data=fs.readFileSync(path.join(root,'dist/story.js'),'utf8');
const errors=[];
function create(seed={}){
  const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));
  const dom=new JSDOM(fs.readFileSync(path.join(root,'dist/index.html'),'utf8'),{url:'http://127.0.0.1:4173',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:vc});
  const w=dom.window;
  w.matchMedia=()=>({matches:false});
  w.HTMLElement.prototype.scrollIntoView=function(){};
  w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
  w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};
  w.localStorage.setItem('xiaoxiang.v1.settings',JSON.stringify({speed:0,size:23,motion:false}));
  Object.entries(seed).forEach(([k,v])=>w.localStorage.setItem(k,v));
  w.eval(data);w.eval(script);
  return dom;
}
const current=w=>JSON.parse(w.localStorage.getItem('xiaoxiang.v1.auto'));
const click=(w,id)=>{const el=w.document.querySelector(id);assert(el,'missing '+id);el.click();};
const choose=(w,i)=>{const el=w.document.querySelectorAll('#choices button')[i];assert(el,'missing choice '+i);el.click();};
function walkthrough(pathChoices,expected){
  const dom=create(),w=dom.window;
  click(w,'#start');assert.equal(current(w).node,'arrival');
  let count=0,decisions=0;
  while(!current(w).ended&&count++<90){
    const n=w.DREAM_STORY.nodes[current(w).node];
    assert.equal(w.document.querySelector('#speaker').textContent,n.who);
    assert.equal(w.document.querySelector('#text').textContent,n.text);
    if(n.options){assert.equal(w.document.querySelector('#choice-panel').hidden,false);choose(w,pathChoices[decisions++]);}
    else click(w,'#next');
  }
  assert.equal(decisions,8);assert.equal(current(w).ended,true);assert.equal(w.document.querySelector('#ending').hidden,false);
  assert.equal(w.document.querySelector('#ending-title').textContent,expected);
  assert(current(w).history.some(h=>h.id==='throw-jade'));
  click(w,'#ending-history');assert(w.document.querySelectorAll('.history-item').length>=68);click(w,'#close-modal');
  dom.window.close();return {ending:expected,steps:count,choices:decisions};
}
const results=[];
results.push(walkthrough([0,1,1,0,1,0,2,2],'步步留心'));
results.push(walkthrough([1,0,0,1,1,0,1,0],'此心稍安'));
results.push(walkthrough([2,0,0,0,0,1,0,1],'一见如故'));

const dom=create(),w=dom.window;
click(w,'#start');click(w,'#next');click(w,'#next');click(w,'#next');
assert.equal(current(w).node,'arrival-choice');
click(w,'#game [data-action="save"]');click(w,'.slot');
const manual=JSON.parse(w.localStorage.getItem('xiaoxiang.v1.slot1'));assert.equal(manual.node,'arrival-choice');
choose(w,0);assert.equal(current(w).decisions.length,1);
click(w,'#game [data-action="load"]');click(w,'.slot:nth-child(2)');
assert.equal(current(w).node,'arrival-choice');assert.equal(current(w).decisions.length,0);assert.equal(current(w).scores.reserve,0);
choose(w,1);assert.equal(current(w).scores.warmth,1);assert.equal(current(w).decisions.length,1);
click(w,'#game [data-action="save"]');click(w,'.slot');assert.equal(w.document.querySelector('#modal-title').textContent,'重写梦笺');click(w,'.confirm-actions .secondary');assert.equal(JSON.parse(w.localStorage.getItem('xiaoxiang.v1.slot1')).node,'arrival-choice');click(w,'#close-modal');

click(w,'#game [data-action="settings"]');
const range=w.document.querySelector('#font-size');range.value='28';range.dispatchEvent(new w.Event('input'));assert.equal(w.document.documentElement.style.getPropertyValue('--dialogue-size'),'28px');click(w,'#close-modal');
const seed=Object.fromEntries(Object.keys(w.localStorage).map(k=>[k,w.localStorage.getItem(k)]));
const refreshed=create(seed),rw=refreshed.window;
assert.equal(rw.document.querySelector('#continue').hidden,false);click(rw,'#continue');assert.equal(current(rw).node,current(w).node);
assert.equal(current(rw).history.length,current(w).history.length);
click(rw,'#home');click(rw,'#start');assert.equal(rw.document.querySelector('#modal').open,true);click(rw,'.confirm-actions .primary');assert.equal(current(rw).node,'arrival');assert.equal(current(rw).history.length,1);assert(rw.localStorage.getItem('xiaoxiang.v1.slot1'));
dom.window.close();refreshed.window.close();
assert.deepEqual(errors,[]);
console.log(JSON.stringify({status:'passed',walkthroughs:results,checks:['exact dialogue render','all eight choices','manual save and load restores branch and scores','overwrite can cancel','auto save survives refresh','history','font settings','restart preserves manual save'],jsdomErrors:errors},null,2));
