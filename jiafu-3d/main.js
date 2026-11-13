import './style.css';
import './src/ui-theme.css';
import './src/legacy-story.js';
import './src/memory-echo.js';
import * as T from 'three';
import {createWorld,places,bounds,spawn} from './src/world.js';
import {createNavigation} from './src/navigation.js';
import {createDialogue} from './src/dialogue.js';
import {characterLines} from './src/character-roster.js';
import {journeyStages,journeyNodes,sisterIds,initializeJourney,readyStages,finishJourneyStage,journeyObjective,validJourneyPending} from './src/exploration-story.js';
import {updateCharacter,turnCharacter} from './src/character-motion.js';

const $=id=>document.getElementById(id),storageKey='xiaoxiang.jiafu3d.v1';
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
const oldPrefs=read('xiaoxiang.v1.settings',{}),loaded=read(storageKey,{});
const state={version:1,worldRevision:9,x:spawn.x,z:spawn.z,arrived:false,complete:false,introChoice:null,scores:{reserve:0,warmth:0,resonance:0},discoveries:[],doors:{},petal:false,pendingMain:null,started:false,...loaded};
if(state.version!==1||!Number.isFinite(state.x)||!Number.isFinite(state.z)){Object.assign(state,{version:1,x:spawn.x,z:spawn.z,started:false});}
state.discoveries=Array.isArray(state.discoveries)?state.discoveries.filter(s=>typeof s==='string'):[];state.doors=state.doors&&typeof state.doors==='object'?state.doors:{};
state.scores=Object.fromEntries(['reserve','warmth','resonance'].map(k=>[k,Number.isFinite(state.scores?.[k])?state.scores[k]:0]));
initializeJourney(state);
const pending=state.pendingMain;
if(pending&&!validJourneyPending(pending)&&(!['intro','hall'].includes(pending.tag)||!window.DREAM_STORY.nodes[pending.id]))state.pendingMain=null;
if(validJourneyPending(pending)&&state.journeyDone.includes(journeyNodes[pending.id].stage))state.pendingMain=null;
const settings={music:oldPrefs.music??true,motion:oldPrefs.motion??true,memories:oldPrefs.memories??true,speed:oldPrefs.speed??28,...loaded.settings};
settings.speed=Math.max(0,Math.min(70,Number(settings.speed)||0));
document.body.classList.toggle('ui-still',!settings.motion);
let storageWarned=false,toastTimer=0,dialogue,nearest=null,conversationNpc=null,activeRoom=null,overview=!state.started,waypoints=[],keys=new Set(),time=0,saveClock=0,currentPlace='',isHidden=false,activeClueId=null,readyPeople=new Set();
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3000);}
function save(){state.x=world.player.root.position.x;state.z=world.player.root.position.z;state.settings=settings;try{localStorage.setItem(storageKey,JSON.stringify(state));if(state.started)localStorage.setItem('xiaoxiang.v1.lastMode',JSON.stringify({mode:'explore',volumeId:'first-dream'}));}catch{if(!storageWarned){toast('此浏览器未允许保存进度，本次仍可继续漫游。');storageWarned=true;}}}

if(![8,9].includes(loaded.worldRevision)){state.x=spawn.x;state.z=spawn.z;}
const world=createWorld();await world.assetsReady;const navigation=createNavigation(bounds,world.solid,.34,.5,world.groundHeight),scene=new T.Scene();scene.background=new T.Color('#b7bca7');scene.fog=new T.Fog('#b7bca7',105,180);scene.add(world.root);
for(const door of world.doors){door.open=Boolean(state.doors[door.id]);door.collider.enabled=!door.open;door.hinge.rotation.y=door.open?-Math.PI*.48:0;}
world.interact.find(i=>i.id==='petals').visual.visible=!state.petal;
if(!navigation.valid(state.x,state.z)){const p=navigation.nearest(state.x,state.z,8)||spawn;state.x=p.x;state.z=p.z;}
state.worldRevision=9;world.player.root.position.set(state.x,world.groundHeight(state.x,state.z),state.z);
const renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.65));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.98;$('scene').append(renderer.domElement);renderer.domElement.setAttribute('aria-label','可自由探索的三维贾府，使用WASD移动，E交互');renderer.domElement.tabIndex=0;
scene.add(new T.HemisphereLight('#fff4d8','#77705a',1.45));
const sun=new T.DirectionalLight('#ffe3b7',3.4);sun.position.set(-32,48,28);sun.castShadow=true;sun.shadow.mapSize.set(3072,3072);sun.shadow.camera.left=-58;sun.shadow.camera.right=58;sun.shadow.camera.top=58;sun.shadow.camera.bottom=-58;sun.shadow.camera.near=1;sun.shadow.camera.far=135;sun.shadow.normalBias=.035;sun.shadow.bias=-.0003;scene.add(sun);
const camera=new T.OrthographicCamera(-45,45,34,-34,.1,210),cameraTarget=new T.Vector3(0,0,0),cameraOffset=new T.Vector3(48,57,48);let halfHeight=41.2,zoomHeight=14;
const ray=new T.Raycaster(),mouse=new T.Vector2();
const footRing=new T.Mesh(new T.RingGeometry(.45,.54,32),new T.MeshBasicMaterial({color:'#f4de9f',transparent:true,opacity:.8,side:T.DoubleSide}));footRing.rotation.x=-Math.PI/2;scene.add(footRing);
const targetRing=new T.Mesh(new T.RingGeometry(.22,.32,24),new T.MeshBasicMaterial({color:'#d4b478',transparent:true,opacity:.8,side:T.DoubleSide}));targetRing.rotation.x=-Math.PI/2;targetRing.visible=false;scene.add(targetRing);
const zoneLabels=places.map(place=>{const e=document.createElement('div');e.className='location-label';e.textContent=place.name;$('location-labels').append(e);return {e,...place};});
const npcLabels=world.npcs.map(npc=>{const e=document.createElement('div');e.className='npc-label';e.textContent=npc.name;$('npc-labels').append(e);return {e,npc};});
const playerLabel=document.createElement('div');playerLabel.className='npc-label main';playerLabel.textContent='黛玉';$('npc-labels').append(playerLabel);

function discover(id){if(!world.interact.some(i=>i.id===id)||state.discoveries.includes(id))return;state.discoveries.push(id);toast('手记添一笔 · '+world.interact.find(i=>i.id===id).name);updateHUD();save();}
dialogue=createDialogue({state,settings,save,onFinish(tag){
 let finished=tag==='intro'?'gate':tag?.startsWith('walk:')?tag.slice(5):null;
 if(finished&&finishJourneyStage(state,finished)){
  if(activeClueId===finished)activeClueId=null;
  const entry=journeyStages.find(s=>s.id===finished);
  toast(state.complete?'这一日的相逢已记下。仍可在府里自由走走。':'手记添一笔 · '+entry.title);
 }else if(tag?.startsWith('item:'))discover(tag.slice(5));
 updateHUD();
}});
const thought=text=>({who:'林黛玉',kind:'心声',text});
function talk(npc){
 conversationNpc=npc;
 const stage=journeyStages.find(s=>s.npc===npc.id),ready=readyStages(state);
 if(stage&&ready.some(s=>s.id===stage.id)){
  if(stage.id==='gate')dialogue.legacy('arrival','corridor','intro');
  else dialogue.walk('walk-'+stage.id+'-0','walk:'+stage.id);
  return;
 }
 if(stage&&!state.journeyDone.includes(stage.id)){
  const greeting=npc.id==='xueyan'?{who:'雪雁',text:'姑娘，箱笼已安好了。您先去同长辈和姊妹们说话，我在这里等您回来。'}:thought('我先将这里的身影与去处认下，等照着方才的话见过礼，再过来慢慢说。');
  dialogue.lines([greeting,thought(journeyObjective(state).text)]);return;
 }
 if(npc.role==='intro')dialogue.lines([{who:npc.name,text:'姑娘已认得不少地方了。门前这条路老身替您记着，想回头看看，随时都能走来。'},thought(state.complete?'初来时的惶惑，已随这一日的脚步慢慢安稳下来。':journeyObjective(state).text)]);
 else dialogue.lines(characterLines(npc,state));
}
function interact(){if(blocked())return;updateInteraction();if(!nearest)return;waypoints=[];targetRing.visible=false;
 if(nearest.role){talk(nearest);return;}
 if(nearest.kind==='door'){const door=world.doors.find(d=>d.id===nearest.id);door.open=!door.open;door.collider.enabled=!door.open;state.doors[door.id]=door.open;toast(door.open?'茶房门轻轻推开了。':'我将门轻轻掩好。');discover(nearest.id);save();return;}
 if(nearest.kind==='collect'&&!state.petal){state.petal=true;nearest.visual.visible=false;}
 const text=nearest.kind==='collect'&&state.discoveries.includes(nearest.id)?'袖中的落花安静地贴着衣襟。我不必再多取一片，这一点初来的春意，已足够记下。':nearest.text;
 dialogue.lines([thought(text)],'item:'+nearest.id);
}
function blocked(){return !state.started||dialogue.active||$('modal').open||document.hidden;}
function updateHUD(){
 const objective=journeyObjective(state);
 $('quest-title').textContent=objective.title;$('quest-copy').textContent=objective.text;
 $('step-intro').textContent='相逢 '+state.journeyDone.length+' / '+journeyStages.length;$('step-intro').classList.toggle('done',state.arrived);$('step-intro').setAttribute('aria-label','已完成 '+state.journeyDone.length+' 段相逢');
 $('step-hall').textContent=state.complete?'此梦已记':'随心游府';$('step-hall').classList.toggle('done',state.complete);
 $('quest-guide').hidden=state.complete;$('quest-guide').lastChild.textContent=activeClueId?'查看记下的去处':'顺着话头，记下去处';
 readyPeople=new Set(objective.ready.map(s=>s.npc));for(const {e,npc}of npcLabels)e.classList.toggle('story-ready',readyPeople.has(npc.id));
 $('map-target-key').hidden=!objective.ready.length;
 $('mini-map').setAttribute('aria-label','贾府地图，圆点为黛玉'+(objective.ready.length?'，金色星芒为当前去处：'+objective.ready.map(s=>world.npcs.find(n=>n.id===s.npc).name).join('、'):'，当前相逢已全部完成')+'。点击展开地图');
 $('discover-count').textContent=`发现 ${state.discoveries.length} / ${world.interact.length}`;$('discovery-progress').max=world.interact.length;$('discovery-progress').value=state.discoveries.length;
}
function navigate(x,z){if(blocked())return;const path=navigation.route(world.player.root.position.x,world.player.root.position.z,x,z);if(!path.length){toast('这处暂不便落脚，试试旁边的石径。');return;}waypoints=path;targetRing.position.set(path.at(-1).x,world.groundHeight(path.at(-1).x,path.at(-1).z)+.06,path.at(-1).z);targetRing.visible=true;}
function changeOverview(force){overview=force??!overview;document.body.classList.toggle('overview-mode',overview);$('overview').querySelector('.nav-label').textContent=overview?'回到黛玉':'俯瞰全府';$('overview').setAttribute('aria-pressed',String(overview));}
function begin(){state.started=true;$('intro').hidden=true;changeOverview(false);save();dialogue.resume();renderer.domElement.focus({preventScroll:true});}
$('begin').onclick=begin;$('intro').hidden=state.started;$('recenter').onclick=()=>changeOverview(false);$('overview').onclick=()=>changeOverview();$('interact-button').onclick=interact;

function showModal(title){waypoints=[];keys.clear();targetRing.visible=false;dialogue.clearMemories();$('modal-title').textContent=title;$('modal-body').replaceChildren();$('modal').showModal();return $('modal-body');}
$('modal-close').onclick=()=>$('modal').close();$('modal').addEventListener('click',e=>{if(e.target===$('modal')){const b=$('modal').getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)$('modal').close();}});
function journal(){
 const body=showModal('黛玉手记');
 const intro=document.createElement('p');intro.textContent=state.journeyDone.length?'走过一处院落，认得一个人，也在心里留下一笔。':'手记尚未落笔。与庭中的人物、物件相遇，慢慢记下这一日。';body.append(intro);
 if(!state.complete){const clue=document.createElement('p');clue.className='journey-current';clue.textContent='还记着的话 · '+journeyObjective(state).text;body.append(clue);}
 for(const stage of journeyStages.filter(s=>state.journeyDone.includes(s.id))){const entry=document.createElement('article');entry.className='journal-entry journey-entry';const h=document.createElement('h3');h.textContent=stage.title;const p=document.createElement('p');p.textContent=stage.note;entry.append(h,p);body.append(entry);}
 for(const id of state.discoveries){const item=world.interact.find(i=>i.id===id);if(!item)continue;const entry=document.createElement('article');entry.className='journal-entry';const h=document.createElement('h3');h.textContent=item.name;const p=document.createElement('p');p.textContent=item.text;entry.append(h,p);body.append(entry);}
 const note=document.createElement('p');note.className='fine';note.textContent='游府情节为文学改编；原篇阅读保留完整原有剧情。位置、相逢、物件与选择自动保存，姊妹三人的拜访顺序可自选。';body.append(note);
}
function guideDestination(stage){
 if(stage.door&&!world.doors.find(d=>d.id===stage.door)?.open)return world.interact.find(i=>i.id===stage.door);
 return world.npcs.find(n=>n.id===stage.npc).approach;
}
function showJourneyClues(){
 const body=showModal('顺着话头');const intro=document.createElement('p');intro.textContent='方才的话，把这些去处留在了心里。也不妨先沿别的路走走。';body.append(intro);
 for(const stage of readyStages(state)){
  const npc=world.npcs.find(n=>n.id===stage.npc),entry=document.createElement('article');entry.className='journey-clue';
  const h=document.createElement('h3');h.textContent=npc.name+' · '+stage.title;
  const place=document.createElement('small');place.textContent=npc.location;
  const p=document.createElement('p');p.textContent=stage.hint;
  const actions=document.createElement('div');
  for(const [label,walk]of [['在小图记下',false],['循路去看看',true]]){const b=document.createElement('button');b.textContent=label;b.onclick=()=>{activeClueId=stage.id;$('modal').close();updateHUD();if(walk){const point=guideDestination(stage);navigate(point.x,point.z);}else toast('已记下 · '+npc.location);};actions.append(b);}
  entry.append(h,place,p,actions);body.append(entry);
 }
}
$('quest-guide').onclick=showJourneyClues;
$('journal-open').onclick=journal;
function help(){const body=showModal('漫游与阅读');body.innerHTML='<p>不必急着赶路。可以点击地面自动寻路，也可用键盘自行行走，靠近人物或物件时按 E。</p><div class="key-list"><span>WASD / 方向键 · 行走</span><span>E · 交互</span><span>F · 俯瞰 / 跟随</span><span>J · 手记</span><span>M · 地图</span><span>Esc · 暂停对话</span></div><div class="setting"><label>场景动效<small>人物步态、转场和屋顶渐隐</small></label><input id="setting-motion" type="checkbox"></div><div class="setting"><label>轻弦背景乐<small>首次操作后播放，无角色配音</small></label><input id="setting-music" type="checkbox"></div><div class="setting"><label>人物忆影<small>心声念及人物时，短暂浮现其形象</small></label><input id="setting-memory" type="checkbox"></div><div class="setting"><label>文字速度<small>最右侧即时显示</small></label><input id="setting-speed" type="range" min="0" max="70" step="5"></div><p class="fine" style="margin-top:17px">这是一张依据第一幕情节设计的艺术化贾府地图。可玩院落自由连通；顺着人物的话寻访，姊妹三人的顺序可自选。相逢之后仍可继续探索。</p>';
 $('setting-motion').checked=settings.motion;$('setting-music').checked=settings.music;$('setting-memory').checked=settings.memories;$('setting-speed').value=70-settings.speed;
 for(const id of ['setting-motion','setting-music','setting-memory','setting-speed']){$(id).previousElementSibling.htmlFor=id;if($(id).type==='checkbox')$(id).setAttribute('role','switch');}
 $('setting-motion').onchange=e=>{settings.motion=e.target.checked;document.body.classList.toggle('ui-still',!settings.motion);save();};$('setting-music').onchange=e=>{settings.music=e.target.checked;settings.music?startMusic():stopMusic();save();};$('setting-memory').onchange=e=>{settings.memories=e.target.checked;dialogue.clearMemories();save();};$('setting-speed').oninput=e=>{settings.speed=70-Number(e.target.value);save();};
}
$('help-open').onclick=help;
const mapCanvas=$('mini-map'),mapContext=mapCanvas.getContext('2d');
// Keep the star and its halo the same screen size when the desktop map resizes.
let mapPixels={x:1,y:1};
const mapResize=new ResizeObserver(()=>{mapPixels={x:mapCanvas.width/mapCanvas.clientWidth,y:mapCanvas.height/mapCanvas.clientHeight};});mapResize.observe(mapCanvas);
function drawMapTarget(c,x,y,pixels,big,selected){
 const moving=!big&&settings.motion&&!reducedMotion.matches,pulse=moving?(1-Math.cos(time*Math.PI*2/2.4))/2:.45;
 const core=big?5:selected?4:3.5,halo=(big?12:selected?10:8)+pulse*2,ring=core+2+pulse*2;
 c.save();c.translate(x,y);c.scale(pixels.x,pixels.y);
 const glow=c.createRadialGradient(0,0,core,0,0,halo);glow.addColorStop(0,`rgba(246,207,119,${.34+pulse*.18})`);glow.addColorStop(1,'rgba(246,207,119,0)');
 c.fillStyle=glow;c.beginPath();c.arc(0,0,halo,0,Math.PI*2);c.fill();
 c.strokeStyle=`rgba(166,115,49,${.38+pulse*.24})`;c.lineWidth=1;c.beginPath();c.arc(0,0,ring,0,Math.PI*2);c.stroke();
 c.beginPath();for(let i=0;i<8;i++){const angle=i*Math.PI/4-Math.PI/2,r=i%2?core*.4:core;const px=Math.cos(angle)*r,py=Math.sin(angle)*r;i?c.lineTo(px,py):c.moveTo(px,py);}c.closePath();
 c.fillStyle='#bd8b37';c.strokeStyle='#fff8df';c.lineWidth=1.15;c.lineJoin='round';c.stroke();c.fill();c.restore();
}
function drawMap(canvas,big=false){
 const c=canvas.getContext('2d'),w=canvas.width,h=canvas.height,pad=big?24:10,s=Math.min((w-pad*2)/76,(h-pad*2)/63),ox=(w-76*s)/2,oz=(h-63*s)/2;
 const pixels=big?{x:w/canvas.clientWidth,y:h/canvas.clientHeight}:mapPixels;
 const point=(x,z)=>[ox+(x+38)*s,oz+(z+31)*s];
 c.fillStyle='#e6e6d6';c.fillRect(0,0,w,h);c.fillStyle='#bcc9a4';c.fillRect(ox,oz,76*s,63*s);
 c.fillStyle='#ddd4bc';for(const r of world.mapData.paving){const[x,z]=point(r.x-r.w/2,r.z-r.d/2);c.fillRect(x,z,r.w*s,r.d*s);}
 c.strokeStyle='#dcd3bc';c.lineJoin='round';for(const path of world.mapData.paths){c.lineWidth=path.width*s;c.beginPath();path.points.forEach(([x,z],i)=>{const p=point(x,z);i?c.lineTo(...p):c.moveTo(...p);});c.stroke();}
 c.fillStyle='#8eafa1';c.beginPath();world.mapData.pond.forEach(([x,z],i)=>{const p=point(x,z);i?c.lineTo(...p):c.moveTo(...p);});c.closePath();c.fill();c.fillStyle='#dfd4ba';for(const r of world.mapData.bridges){const[x,z]=point(r.x-r.w/2,r.z-r.d/2);c.fillRect(x,z,r.w*s,r.d*s);}
 c.fillStyle='#6b8467';for(const tree of world.mapData.trees){const[x,z]=point(tree.x,tree.z);c.beginPath();c.arc(x,z,tree.r*s,0,Math.PI*2);c.fill();}
 c.fillStyle='#939a85';for(const rock of world.mapData.rocks){const[x,z]=point(rock.x,rock.z);c.beginPath();c.arc(x,z,rock.r*s,0,Math.PI*2);c.fill();}
 c.fillStyle='#617b6a';for(const roof of world.roofs){if(roof.group.name.endsWith('_Cutaway'))continue;const r=roof.rect;const[x,z]=point(r.x-r.w/2,r.z-r.d/2);c.globalAlpha=.7;c.fillRect(x,z,r.w*s,r.d*s);}c.globalAlpha=1;
 c.fillStyle='#a6ab93';for(const o of world.solid){if(!o.enabled||o.id?.startsWith('water')||o.w>4&&o.d>4)continue;const[x,z]=point(o.x-o.w/2,o.z-o.d/2);c.fillRect(x,z,Math.max(.7,o.w*s),Math.max(.7,o.d*s));}
 if(big){c.font='17px SimSun';c.textAlign='center';c.fillStyle='#3d5c47';for(const p of places){const[x,z]=point(p.x,p.z);c.fillStyle='#fff9e7dc';c.fillRect(x-49,z-14,98,26);c.fillStyle='#42604b';c.fillText(p.name,x,z+5);}}
 for(const stage of readyStages(state)){
  const npc=world.npcs.find(n=>n.id===stage.npc),[nx,nz]=point(npc.x,npc.z);
  drawMapTarget(c,nx,nz,pixels,big,activeClueId===stage.id);
  if(big){c.font='13px SimSun';c.textAlign='center';c.fillStyle='#7f513f';c.fillText(npc.name,nx,nz-16*pixels.y);}
 }
 const[x,z]=point(world.player.root.position.x,world.player.root.position.z);c.fillStyle='#a7654d';c.beginPath();c.arc(x,z,big?6:3.5,0,Math.PI*2);c.fill();c.strokeStyle='#fff4db';c.lineWidth=big?2:1;c.stroke();
 return {s,ox,oz};
}
function bigMap(){const body=showModal('荣府漫游图'),p=document.createElement('p');p.className='fine';p.textContent='轻点地图中的道路，可让黛玉自行寻路前往。院落和房间可沿侧门、回廊绕行。';const canvas=document.createElement('canvas');canvas.width=760;canvas.height=630;canvas.className='modal-map';body.append(p,canvas);const transform=drawMap(canvas,true);canvas.onclick=e=>{const r=canvas.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*canvas.width,z=(e.clientY-r.top)/r.height*canvas.height;$('modal').close();navigate((x-transform.ox)/transform.s-38,(z-transform.oz)/transform.s-31);};const legend=document.createElement('div');legend.className='map-legend';places.forEach(p=>{const s=document.createElement('span');s.textContent=p.name;legend.append(s);});body.append(legend);}
$('map-open').onclick=bigMap;mapCanvas.onclick=bigMap;

renderer.domElement.addEventListener('pointerdown',e=>{if(e.button!==0||blocked())return;const r=renderer.domElement.getBoundingClientRect();mouse.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(mouse,camera);const ground=world.pickGround(ray.ray);if(ground)navigate(ground.x,ground.z);});
renderer.domElement.addEventListener('wheel',e=>{if(blocked())return;e.preventDefault();if(overview){changeOverview(false);zoomHeight=26;}zoomHeight=Math.max(5.5,Math.min(29,zoomHeight+Math.sign(e.deltaY)*1.5));},{passive:false});
document.addEventListener('keydown',e=>{if(e.repeat||e.altKey||e.ctrlKey||e.metaKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(dialogue.active||$('modal').open)return;if(!state.started){if(e.code==='Enter'||e.code==='Space'){e.preventDefault();begin();}return;}const key=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowleft','arrowdown','arrowright'].includes(key)){e.preventDefault();keys.add(key);waypoints=[];targetRing.visible=false;}else if(key==='e'){e.preventDefault();interact();}else if(key==='f'){e.preventDefault();changeOverview();}else if(key==='j'){e.preventDefault();journal();}else if(key==='m'){e.preventDefault();bigMap();}});
document.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('blur',()=>{keys.clear();save();});document.addEventListener('visibilitychange',()=>{keys.clear();isHidden=document.hidden;if(isHidden){dialogue.clearMemories();stopMusic();save();}else if(settings.music&&musicUnlocked)startMusic();});
function resize(){renderer.setSize(innerWidth,Math.max(660,innerHeight));}window.addEventListener('resize',resize);resize();
function project(x,y,z){const p=new T.Vector3(x,y,z).project(camera);return {x:(p.x+1)*innerWidth/2,y:(1-p.y)*Math.max(660,innerHeight)/2,visible:p.z>=-1&&p.z<=1&&Math.abs(p.x)<1.1&&Math.abs(p.y)<1.1};}
function label(e,x,y,z,show){const p=project(x,y,z);e.hidden=!show||!p.visible;if(!e.hidden){e.style.left=p.x+'px';e.style.top=p.y+'px';}}
function updateInteraction(){nearest=null;if(blocked()){$('interaction').hidden=true;return;}const p=world.player.root.position;let distance=2.7;for(const candidate of[...world.interact,...world.npcs]){const position=candidate.root?.position||candidate;if(candidate.room&&activeRoom?.id!==candidate.room)continue;if(Math.abs(world.groundHeight(position.x,position.z)-p.y)>1.1)continue;const d=Math.hypot(position.x-p.x,position.z-p.z);if(d<distance){distance=d;nearest=candidate;}}$('interaction').hidden=!nearest;if(nearest){$('interact-kind').textContent=nearest.role?'相谈':nearest.kind==='door'?'开合':'查看';$('interact-name').textContent=nearest.name;$('interact-button').querySelector('span').textContent=nearest.role?(readyPeople.has(nearest.id)?'接续话头':'轻声相问'):nearest.kind==='door'?'推门 / 掩门':'停步细看';}}
const clock=new T.Clock();let frames=0,elapsed=0,frameRate=0;
function frame(){const dt=Math.min(clock.getDelta(),.05);if(isHidden)return;time+=dt;frames++;elapsed+=dt;if(elapsed>1){frameRate=Math.round(frames/elapsed);elapsed=0;frames=0;}
 const player=world.player.root;let moving=false;
 if(!blocked()){
  let dx=0,dz=0,routeStep=Infinity;const forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0),right=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0);
  if(forward||right){dx=(-forward+right)/Math.SQRT2;dz=(-forward-right)/Math.SQRT2;const length=Math.hypot(dx,dz);dx/=length;dz/=length;}
  else if(waypoints.length){const p=waypoints[0],distance=Math.hypot(p.x-player.position.x,p.z-player.position.z);if(distance<.01)waypoints.shift();else{dx=(p.x-player.position.x)/distance;dz=(p.z-player.position.z)/distance;routeStep=distance;}}
  if(dx||dz){const speed=Math.min(4.25*dt,routeStep),tx=player.position.x+dx*speed,tz=player.position.z+dz*speed;if(navigation.canMove(player.position.x,player.position.z,tx,tz)){player.position.x=tx;player.position.z=tz;}else{if(navigation.canMove(player.position.x,player.position.z,tx,player.position.z))player.position.x=tx;if(navigation.canMove(player.position.x,player.position.z,player.position.x,tz))player.position.z=tz;}const angle=Math.atan2(dx,dz);let diff=T.MathUtils.euclideanModulo(angle-player.rotation.y+Math.PI,Math.PI*2)-Math.PI;player.rotation.y+=diff*Math.min(1,dt*11);moving=true;}
  if(!waypoints.length)targetRing.visible=false;
 }
 if(!dialogue.active)conversationNpc=null;
 const characterMotion=settings.motion&&!reducedMotion.matches,focusNpc=dialogue.active?conversationNpc:nearest?.role?nearest:null,speaker=dialogue.speaker,playerSpeaking=dialogue.active&&['林黛玉','我','心中的黛玉'].includes(speaker);
 if(dialogue.active&&conversationNpc)turnCharacter(world.player,conversationNpc.root.position,dt,characterMotion);
 updateCharacter(world.player,{time,delta:dt,enabled:characterMotion,moving,attention:focusNpc?.root.position,speaking:playerSpeaking,listening:dialogue.active&&!playerSpeaking});
 player.position.y=world.groundHeight(player.position.x,player.position.z)+(moving&&characterMotion?Math.abs(Math.sin(time*12))*.045:0);footRing.position.set(player.position.x,player.position.y+.015,player.position.z);
 for(const npc of world.npcs){
  const distance=Math.hypot(npc.root.position.x-player.position.x,npc.root.position.z-player.position.z),focused=npc===focusNpc&&distance<4;
  if(focused)turnCharacter(npc,player.position,dt,characterMotion);
  else{const angle=npc.facing||0,diff=T.MathUtils.euclideanModulo(angle-npc.root.rotation.y+Math.PI,Math.PI*2)-Math.PI;npc.root.rotation.y+=diff*(characterMotion?1-Math.exp(-dt*2.5):1);}
  npc.root.position.y=world.groundHeight(npc.root.position.x,npc.root.position.z);npc.collider.x=npc.root.position.x;npc.collider.z=npc.root.position.z;
  updateCharacter(npc,{time,delta:dt,enabled:characterMotion,attention:focused?player.position:null,speaking:dialogue.active&&(speaker===npc.name||npc===conversationNpc&&!playerSpeaking),listening:dialogue.active&&npc===conversationNpc&&playerSpeaking});
 }
 for(const door of world.doors){const target=door.open?-Math.PI*.48:0;door.hinge.rotation.y=settings.motion?T.MathUtils.lerp(door.hinge.rotation.y,target,Math.min(1,dt*5)):target;}
 activeRoom=world.rooms.find(r=>r.contains(player.position.x,player.position.z,.25))||null;world.setRoomFocus(overview?null:activeRoom);
 for(const roof of world.roofs){const r=roof.rect,inside=!overview&&(roof.room?roof.room.contains(player.position.x,player.position.z,-.1):Math.abs(player.position.x-r.x)<r.w/2+1&&Math.abs(player.position.z-r.z)<r.d/2+1);for(const m of roof.materials){const target=inside?(roof.group.name.includes('Pavilion')?.25:roof.group.name.endsWith('_Cutaway')?.025:0):1;m.opacity=settings.motion?T.MathUtils.lerp(m.opacity,target,Math.min(1,dt*5)):target;m.depthWrite=m.opacity>.5;}roof.group.visible=roof.materials.some(m=>m.opacity>.012);roof.group.traverse(o=>{if(o.isMesh)o.castShadow=!inside;});}
 const dest=overview?new T.Vector3(0,3,1):new T.Vector3(player.position.x,player.position.y+1,player.position.z),factor=settings.motion?1-Math.exp(-dt*3.3):1;cameraTarget.lerp(dest,factor);halfHeight=T.MathUtils.lerp(halfHeight,overview?41.2:zoomHeight*(activeRoom ? .74 : 1),factor);const aspect=innerWidth/Math.max(660,innerHeight);camera.left=-halfHeight*aspect;camera.right=halfHeight*aspect;camera.top=halfHeight;camera.bottom=-halfHeight;camera.position.copy(cameraTarget).add(cameraOffset);camera.lookAt(cameraTarget);camera.updateProjectionMatrix();camera.updateMatrixWorld();
 for(const l of zoneLabels)label(l.e,l.x,world.groundHeight(l.x,l.z)+3.2,l.z,overview?['hall','rockery','garden'].includes(l.id):Math.hypot(player.position.x-l.x,player.position.z-l.z)>11);
 for(const {e,npc}of npcLabels)label(e,npc.root.position.x,npc.root.position.y+npc.height+.3,npc.root.position.z,!overview&&(!npc.room||activeRoom?.id===npc.room)&&Math.hypot(npc.root.position.x-player.position.x,npc.root.position.z-player.position.z)<20);
 label(playerLabel,player.position.x,player.position.y+world.player.height+.3,player.position.z,overview);
 const place=places.find(p=>player.position.x>=p.rect[0]&&player.position.x<=p.rect[2]&&player.position.z>=p.rect[1]&&player.position.z<=p.rect[3])||places[2];const placeId=activeRoom?'interior:'+activeRoom.id:place.id;if(placeId!==currentPlace){currentPlace=placeId;$('place-name').textContent=activeRoom?activeRoom.name+' · 内室':place.name;}
 for(const effect of world.animated){if(effect.type==='ripple'){const t=(time*.23+effect.phase)%1;effect.mesh.scale.setScalar(settings.motion?1+t:1);effect.mesh.material.opacity=settings.motion?.2*(1-t):.12;}}
 updateInteraction();drawMap(mapCanvas);saveClock+=dt;if(saveClock>1){saveClock=0;save();}renderer.render(scene,camera);
}
let audioContext,musicTimer,master,musicUnlocked=false;
function startMusic(){if(!musicUnlocked||!settings.music)return;try{if(!audioContext){const AC=window.AudioContext||window.webkitAudioContext;audioContext=new AC();master=audioContext.createGain();master.gain.value=.065;master.connect(audioContext.destination);}audioContext.resume().catch(()=>{});if(musicTimer)return;let i=0;const melody=[0,4,7,9,7,4,2,0,2,4,7,12,9,7,4,2];const pluck=()=>{const t=audioContext.currentTime;for(const h of[1,2]){const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.frequency.value=220*Math.pow(2,melody[i%melody.length]/12)*h;gain.gain.setValueAtTime(.3/(h*h),t);gain.gain.exponentialRampToValueAtTime(.001,t+2.2);osc.connect(gain);gain.connect(master);osc.start(t);osc.stop(t+2.3);}i++;};pluck();musicTimer=setInterval(pluck,1700);}catch{settings.music=false;}}
function stopMusic(){clearInterval(musicTimer);musicTimer=null;audioContext?.suspend().catch(()=>{});}
const unlock=()=>{if(musicUnlocked)return;musicUnlocked=true;startMusic();};document.addEventListener('pointerdown',unlock,{once:true});document.addEventListener('keydown',unlock,{once:true});
updateHUD();changeOverview(overview);renderer.setAnimationLoop(frame);$('loading').hidden=true;document.body.dataset.ready='true';if(state.started){changeOverview(false);const resumeNpc=state.pendingMain?.kind==='walk'?journeyStages.find(s=>s.id===journeyNodes[state.pendingMain.id]?.stage)?.npc:state.pendingMain?.tag==='intro'?'matron':null;conversationNpc=world.npcs.find(n=>n.id===resumeNpc)||null;dialogue.resume();save();}
if(import.meta.env.DEV)window.__JIAFU_DEV__={world,nav:navigation,project,read:()=>({x:playerPosition().x,z:playerPosition().z,overview,nearest:nearest?.id,dialogue:dialogue.active,place:currentPlace,room:activeRoom?.id,discovered:[...state.discoveries],journey:[...state.journeyDone],ready:readyStages(state).map(s=>s.id),arrived:state.arrived,complete:state.complete,path:waypoints.length,fps:frameRate,calls:renderer.info.render.calls,triangles:renderer.info.render.triangles}),navigate,place(x,z){const p=navigation.nearest(x,z,3);if(!p)throw Error('No safe point');world.player.root.position.set(p.x,world.groundHeight(p.x,p.z),p.z);waypoints=[];save();},async exportGLB(){const{GLTFExporter}=await import('three/addons/exporters/GLTFExporter.js');return new GLTFExporter().parseAsync(world.root,{binary:true,onlyVisible:false});}};
function playerPosition(){return world.player.root.position;}
