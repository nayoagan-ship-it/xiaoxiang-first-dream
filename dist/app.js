(() => {
  'use strict';
  const stories={'first-dream':window.DREAM_STORY,'buried-blossoms':window.BLOSSOM_STORY};
  let activeVolume='first-dream',story=stories[activeVolume];
  const $ = id => document.getElementById(id);
  const prefix = 'xiaoxiang.v1.';
  const names = {jiamu:'贾母',fengjie:'王熙凤',baoyu:'贾宝玉','daiyu-inner':'心中的黛玉'};
  const numerals = ['壹','贰','叁','肆','伍'];
  let state = null, screen = 'cover', currentChapter = -1, timer = 0, autoTimer = 0, flashTimer = 0;
  let typing = false, auto = false, chars = [], cursor = 0, storageWarned = false;
  let libraryReturnScreen = 'cover', libraryReturnFocus = null;
  let settings = {speed:28,size:23,motion:true,music:true,memories:true,preferencesVersion:2};
  const library=window.createDreamLibrary({volumes:window.DREAM_VOLUMES,canPlay:v=>Boolean(stories[v.id])&&v.status==='available',isCompleted:v=>readCollection(v.id).length>0||Boolean(readAuto(v.id)?.ended),readVolume:requestVolume,motion:()=>settings.motion});
  const memories=window.createMemoryEcho({element:$('memory-echo'),enabled:()=>settings.memories,canAnimate:()=>settings.motion&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches,canShow:()=>screen==='game'&&!$('modal').open&&!document.hidden});
  let audioContext, musicTimer, master, musicUnlocked=false;

  function read(key, fallback = null) {try {const v=localStorage.getItem(prefix+key);return v?JSON.parse(v):fallback;}catch{return fallback;}}
  function write(key,value){try{localStorage.setItem(prefix+key,JSON.stringify(value));return true;}catch{if(!storageWarned){toast('当前浏览器无法保存进度，请允许本地存储。');storageWarned=true;}return false;}}
  function clone(obj){return JSON.parse(JSON.stringify(obj));}
  function volumeOf(saved){return saved?.volumeId||'first-dream';}
  function storyFor(saved){const id=volumeOf(saved);return Object.hasOwn(stories,id)?stories[id]:null;}
  function volumeLabel(id){return window.DREAM_VOLUMES.find(v=>v.id===id)?.title||'初入荣府';}
  function collectionKey(id){return id==='first-dream'?'collection':'collection.'+id;}
  function readCollection(id){const c=read(collectionKey(id),[]);return Array.isArray(c)?c.filter(k=>stories[id]?.endings[k]):[];}
  function valid(value){
    const data=storyFor(value);
    return Boolean(value&&data&&value.version===data.version&&data.nodes[value.node]&&value.scores&&['warmth','reserve','resonance'].every(k=>Number.isFinite(value.scores[k])&&value.scores[k]>=0&&value.scores[k]<=50)&&Array.isArray(value.history)&&value.history.length<=300&&Array.isArray(value.decisions)&&value.decisions.length<=10&&typeof value.ended==='boolean');
  }
  function readAuto(id){return [read('auto.'+id),read('auto')].filter(v=>valid(v)&&volumeOf(v)===id).sort((a,b)=>(b.savedAt||0)-(a.savedAt||0))[0]||null;}
  function renderProgress(){$('chapter-progress').replaceChildren();story.chapters.forEach(c=>{const li=document.createElement('li');li.textContent=c.title;$('chapter-progress').append(li);});}
  function activateVolume(id){activeVolume=id;story=stories[id];currentChapter=-1;renderProgress();$('game').dataset.volume=id;$('game').querySelector('.game-footer>span').textContent=story.footer||'荣国府的一日 · 黛玉视角';$('ending').dataset.scene=story.endingScene||'courtyard';$('ending').querySelector('.ending-content>.eyebrow').textContent=story.endingEyebrow||'一日将尽 · 此心何寄';$('ending').querySelector('.ending-note').textContent=story.endingNote||'这是这一日的心境，不是红楼故事的终点。';}
  function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2600);}
  function saveAuto(){if(state){write('lastMode',{mode:'reading',volumeId:activeVolume});const saved={...clone(state),volumeId:activeVolume,savedAt:Date.now()};write('auto',saved);write('auto.'+activeVolume,saved);}updateContinue();}
  function readExplore(){try{const s=JSON.parse(localStorage.getItem('xiaoxiang.jiafu3d.v1'));return s?.version===1&&s.started&&Number.isFinite(s.x)&&Number.isFinite(s.z)?s:null;}catch{return null;}}
  function preferExplore(){return Boolean(readExplore())&&(read('lastMode')?.mode==='explore'||!valid(read('auto')));}
  function enterExplore(){stopTimers();setAuto(false);stopMusic();write('lastMode',{mode:'explore',volumeId:'first-dream'});location.assign(new URL('jiafu/index.html',location.href));}
  function requestVolume(volume){if(volume?.mode==='explore')enterExplore();else requestNewGame(volume);}
  function updateContinue(){if(preferExplore()){$('continue').hidden=false;$('continue').firstChild.textContent=readExplore().complete?'重温此梦 ':'续上前梦 ';$('continue').setAttribute('aria-label','继续三维贾府漫游');return;}const saved=read('auto');$('continue').hidden=!valid(saved);if(valid(saved)){const id=volumeOf(saved);$('continue').firstChild.textContent=id==='first-dream'?(saved.ended?'重温此梦 ':'续上前梦 '):(saved.ended?'重温葬花 ':'续读葬花 ');$('continue').setAttribute('aria-label',(saved.ended?'重温':'继续阅读')+'：'+volumeLabel(id));}}
  function setScreen(name){try{const u=new URL(location.href);u.hash=name==='chapters'?'chapters':'';window.history.replaceState(null,'',u);}catch{}if(name!=='game')memories.clear();if(name!=='chapters')library.reset();screen=name;['cover','chapters','team','game','ending'].forEach(id=>$(id).hidden=id!==name);}
  function requestNewGame(volume){
    const id=volume?.id||activeVolume;if(!stories[id])return;
    const saved=readAuto(id);
    if(!valid(saved)||saved.ended){newGame(id);return;}
    const box=document.createElement('div'),copy=document.createElement('p'),actions=document.createElement('div');copy.className='confirm-copy';copy.textContent='本卷已读至“'+stories[id].chapters[stories[id].nodes[saved.node].chapter].title+'”。可续读已有进度，或从头入梦；手动梦笺仍会保留。';actions.className='confirm-actions volume-save-actions';
    const go=document.createElement('button'),restart=document.createElement('button'),cancel=document.createElement('button');go.className='primary';go.textContent='续读本卷';go.onclick=()=>{closeModal();resume(saved);};restart.className='secondary';restart.textContent='从头入梦';restart.onclick=()=>confirmAction('重新展卷','将重新书写本卷的自动进度，其他卷的进度与手动梦笺会保留。',()=>newGame(id));cancel.className='quiet';cancel.textContent='暂且留步';cancel.onclick=closeModal;actions.append(go,restart,cancel);box.append(copy,actions);showModal(volumeLabel(id)+' · 前梦未完',box);
  }
  function showChapters(){libraryReturnScreen=screen==='ending'?'ending':'cover';libraryReturnFocus=document.activeElement;stopTimers();setAuto(false);library.show();$('chapters-back-label').textContent=libraryReturnScreen==='ending'?'返回此梦':'返回开始界面';setScreen('chapters');$('chapters').scrollTop=0;$('library-title').focus({preventScroll:true});}
  function closeChapters(){setScreen(libraryReturnScreen);if(libraryReturnFocus?.isConnected)libraryReturnFocus.focus({preventScroll:true});}
  function showTeam(){setScreen('team');$('team').scrollTop=0;$('team-title').focus({preventScroll:true});}
  function closeTeam(){setScreen('cover');$('team-open').focus({preventScroll:true});}
  function stopTimers(){memories.clear();clearTimeout(timer);clearTimeout(autoTimer);clearTimeout(flashTimer);typing=false;$('chapter-flash').classList.remove('show');}
  function setAuto(value){auto=value;$('auto').setAttribute('aria-pressed',String(auto));$('auto').textContent=auto?'暂停自动':'自动阅读';if(!auto)clearTimeout(autoTimer);else queueAuto();}
  function queueAuto(){clearTimeout(autoTimer);if(auto&&!typing&&screen==='game'&&!$('modal').open&&!story.nodes[state.node].options)autoTimer=setTimeout(advance,Math.max(2200,chars.length*95));}
  function finishText(){clearTimeout(timer);typing=false;cursor=chars.length;$('text').textContent=chars.join('');memories.reveal(chars.length);$('dialogue-body').setAttribute('aria-label',$('text').textContent);updateChoices();queueAuto();}
  function typeNext(){if(!typing)return;cursor++;$('text').textContent=chars.slice(0,cursor).join('');memories.reveal(cursor);if(cursor>=chars.length)finishText();else timer=setTimeout(typeNext,settings.speed);}
  function renderText(text){clearTimeout(timer);chars=Array.from(text);cursor=0;typing=settings.speed>0;$('text').textContent='';$('choice-panel').hidden=true;$('game').classList.remove('choice-active');$('dialogue-body').setAttribute('aria-label','显示完整文字');$('reading-hint').textContent=typing?'点击文字或按空格，显示完整句子':'点击文字或按 空格 / 回车 继续';if(typing)typeNext();else finishText();}
  function updateChoices(){
    if(!state||screen!=='game')return;
    const node=story.nodes[state.node];
    $('choices').replaceChildren();
    $('next').disabled=Boolean(node.options);
    if(node.options&&!typing){
      setAuto(false);$('choice-prompt').textContent=node.prompt;
      node.options.forEach((o,i)=>{const btn=document.createElement('button');const index=document.createElement('span');index.textContent=String(i+1).padStart(2,'0');btn.append(index,document.createTextNode(o.label));btn.addEventListener('click',()=>selectChoice(i));$('choices').append(btn);});
      $('choice-panel').hidden=false;$('game').classList.add('choice-active');$('reading-hint').textContent='点击选项，或按数字 1 / 2 / 3 作答';
    }else if(!typing)$('reading-hint').textContent='点击文字或按 空格 / 回车 继续';
  }
  function renderNode({flash=false}={}){
    stopTimers();setScreen('game');
    const node=story.nodes[state.node],chapter=story.chapters[node.chapter];
    const inHeart=Boolean(node.heart),realmChanged=$('game').classList.contains('heart-mode')!==inHeart;
    $('game').classList.toggle('heart-mode',inHeart);$('heart-label').hidden=!inHeart;$('heart-title').textContent=node.heart||'';
    if(realmChanged&&settings.motion&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)$('heart-threshold').animate([{opacity:0},{opacity:.92,offset:.4},{opacity:0}],{duration:1800,easing:'ease-in-out'});
    $('choice-panel').querySelector('.choice-eyebrow').textContent=inHeart?'与她对话':'一念之间';
    $('choice-panel').querySelector('.choice-hint').textContent=inHeart?'心中的话，也值得被认真听见':'选择会留下不同的心声';
    $('background').dataset.scene=node.scene||chapter.scene;
    $('chapter-number').textContent=numerals[node.chapter];$('chapter-title').textContent=chapter.title;$('chapter-place').textContent=node.place||chapter.place;
    if((node.scene||chapter.scene)==='night')$('chapter-place').textContent='碧纱橱 · 初夜';
    $('scene-caption').textContent=node.caption||chapter.caption;
    $('speaker').textContent=node.who;$('speaker-kind').textContent=node.kind||'话语';$('beat-count').textContent=numerals[node.chapter]+' / '+numerals[story.chapters.length-1];$('dialogue').dataset.verse=String(Boolean(node.kind?.includes('葬花吟')));
    $('portrait-wrap').classList.toggle('visible',Boolean(node.portrait));$('portrait-wrap').setAttribute('aria-hidden',String(!inHeart));$('portrait').alt=inHeart?'黛玉的心中形象，青绿衣衫、藕粉披帛，手捧一片落花':'';
    if(node.portrait){const src=`assets/${node.portrait}.png`;if(!$('portrait').getAttribute('src')?.endsWith(src))$('portrait').src=src;$('portrait-caption').textContent=names[node.portrait];}
    [...$('chapter-progress').children].forEach((li,i)=>{li.className=i===node.chapter?'current':i<node.chapter?'past':'';if(i===node.chapter)li.setAttribute('aria-current','step');else li.removeAttribute('aria-current');});
    currentChapter=node.chapter;
    memories.prepare(node,{delay:flash&&settings.motion?1600:0});
    renderText(node.text);
    if(flash&&settings.motion){$('chapter-flash').querySelector('small').textContent=`第${['一','二','三','四','五'][node.chapter]}幕`;$('chapter-flash').querySelector('strong').textContent=chapter.title;$('chapter-flash').classList.add('show');flashTimer=setTimeout(()=>$('chapter-flash').classList.remove('show'),1100);}
    saveAuto();
  }
  function enter(id){
    if(id==='END'){showEnding();return;}
    const node=story.nodes[id];if(!node){toast('这页梦境暂未找到，请读取存档。');return;}
    state.node=id;state.ended=false;
    state.history.push({id,chapter:node.chapter,who:node.who,kind:node.kind||'话语',text:node.text});
    renderNode({flash:node.chapter!==currentChapter});
  }
  function advance(){if(screen!=='game'||$('modal').open)return;if(typing){finishText();return;}const node=story.nodes[state.node];if(node.options)return;enter(node.next);}
  function selectChoice(index){
    if(screen!=='game'||typing||$('modal').open)return;
    const node=story.nodes[state.node],choice=node.options?.[index];if(!choice)return;
    for(const [key,value] of Object.entries(choice.effect))state.scores[key]+=value;
    state.decisions.push({node:node.id,index,label:choice.label,memory:choice.memory});
    state.history.push({id:node.id,chapter:node.chapter,who:'我的选择',kind:'一念之间',text:choice.label,choice:true});
    $('choice-panel').hidden=true;enter(choice.next);
  }
  function newGame(id=activeVolume){
    if(!Object.hasOwn(stories,id)||!stories[id])return;
    const recent=read('auto');if(valid(recent))write('auto.'+volumeOf(recent),recent);
    stopTimers();setAuto(false);activateVolume(id);state={version:story.version,volumeId:id,node:story.start,scores:{reserve:0,warmth:0,resonance:0},history:[],decisions:[],ended:false};enter(story.start);$('dialogue-body').focus({preventScroll:true});if(settings.music)startMusic();
  }
  function resume(saved){if(!valid(saved)){toast('存档格式不完整，请重新开始。');return;}stopTimers();setAuto(false);activateVolume(volumeOf(saved));state=clone(saved);state.volumeId=activeVolume;if(state.ended)showEnding(false);else renderNode();$('dialogue-body').focus({preventScroll:true});if(settings.music)startMusic();}
  function home(){stopTimers();setAuto(false);saveAuto();setScreen('cover');}
  function showEnding(record=true){
    stopTimers();setAuto(false);state.ended=true;setScreen('ending');
    const key=story.getEnding(state.scores),end=story.endings[key];
    $('ending-title').textContent=end.title;$('ending-index').textContent=`心境 · ${end.index}`;$('ending-poem').textContent=end.poem;$('ending-text').textContent=end.text;
    $('ending-memories').replaceChildren();
    state.decisions.slice(-3).forEach(d=>{const tag=document.createElement('span');tag.textContent=d.memory;$('ending-memories').append(tag);});
    let collection=readCollection(activeVolume);
    if(record&&!collection.includes(key)){collection.push(key);write(collectionKey(activeVolume),collection);}
    $('ending-collection').textContent=`已留梦记 ${collection.filter(k=>story.endings[k]).length} / ${Object.keys(story.endings).length} · 不同选择，可见不同心境`;
    saveAuto();
  }
  function showModal(title,content,eyebrow='潇湘初梦'){
    memories.clear();clearTimeout(autoTimer);$('modal-title').textContent=title;$('modal-eyebrow').textContent=eyebrow;$('modal-content').replaceChildren();
    if(typeof content==='string')$('modal-content').innerHTML=content;else $('modal-content').append(content);
    if(!$('modal').open)$('modal').showModal();
  }
  function closeModal(){$('modal').close();queueAuto();}
  function confirmAction(title,text,onConfirm){
    const container=document.createElement('div'),copy=document.createElement('p'),actions=document.createElement('div');copy.className='confirm-copy';copy.textContent=text;actions.className='confirm-actions';
    const yes=document.createElement('button');yes.className='primary';yes.textContent='重新入梦';yes.onclick=()=>{closeModal();onConfirm();};
    const no=document.createElement('button');no.className='secondary';no.textContent='暂且留步';no.onclick=closeModal;actions.append(yes,no);container.append(copy,actions);showModal(title,container);
  }
  function history(){
    if(!state?.history.length){toast('入梦之后，便可回看走过的故事。');return;}
    const list=document.createElement('div');list.className='history-list';
    state.history.forEach(item=>{const row=document.createElement('article');row.className='history-item'+(item.choice?' choice':'');const ch=document.createElement('small'),name=document.createElement('h3'),p=document.createElement('p');ch.textContent=`第${numerals[item.chapter]}幕 · ${story.chapters[item.chapter]?.title||''}`;name.textContent=item.who+(item.kind==='心声'?' · 心声':'');p.textContent=item.text;row.append(ch,name,p);list.append(row);});
    showModal('前尘回看',list,'一言一句，皆在此处');$('modal-content').lastElementChild?.lastElementChild?.scrollIntoView({block:'end'});
  }
  function slots(mode){
    if(mode==='save'&&!state){toast('请先开始故事，再保存这一刻。');return;}
    const list=document.createElement('div');
    function row(title,saved,handler,emptyAllowed=false,key=''){
      const btn=document.createElement('button');btn.className='slot';btn.dataset.slot=key;btn.disabled=!valid(saved)&&!emptyAllowed;
      const info=document.createElement('div'),strong=document.createElement('strong'),small=document.createElement('small'),label=document.createElement('span');strong.textContent=title;
      if(valid(saved)){const data=storyFor(saved);small.textContent=volumeLabel(volumeOf(saved))+' · '+data.chapters[data.nodes[saved.node].chapter].title+' · '+(saved.ended?'此梦已记':data.nodes[saved.node].who)+' · '+new Date(saved.savedAt||Date.now()).toLocaleString('zh-CN',{hour12:false});}else small.textContent='尚未落笔';
      label.textContent=mode==='save'?'存于此处':valid(saved)?'续梦 →':'空';info.append(strong,small);btn.append(info,label);btn.onclick=handler;list.append(btn);
    }
    if(mode==='load'){
      const ids=[activeVolume,...Object.keys(stories).filter(id=>id!==activeVolume&&stories[id])];ids.forEach(id=>{const saved=readAuto(id);if(id===activeVolume||saved)row(volumeLabel(id)+' · 自动存档',saved,()=>{closeModal();resume(saved);},false,'auto.'+id);});
    }
    [1,2,3].forEach(i=>{const saved=read('slot'+i);row('梦笺 · '+['一','二','三'][i-1],saved,()=>{
      if(mode==='save'){
        const perform=()=>{if(write('slot'+i,{...clone(state),volumeId:activeVolume,savedAt:Date.now()})){closeModal();toast('已存入梦笺'+['一','二','三'][i-1]);}};
        if(valid(saved)){const box=document.createElement('div');box.innerHTML='<p class="confirm-copy">这张梦笺已有故事，要用眼前的进度替换吗？</p>';const actions=document.createElement('div');actions.className='confirm-actions';const yes=document.createElement('button');yes.className='primary';yes.textContent='替换梦笺';yes.onclick=perform;const no=document.createElement('button');no.className='secondary';no.textContent='返回存档';no.onclick=()=>slots('save');actions.append(yes,no);box.append(actions);showModal('重写梦笺',box);}else perform();
      }else{closeModal();resume(read('slot'+i));}
    },mode==='save','slot'+i);});
    const foot=document.createElement('p');foot.className='modal-footnote';foot.textContent='每卷的自动进度分别保留，三张手动梦笺可跨卷使用。进度仅保存在当前浏览器；清除站点数据会删除存档。';list.append(foot);showModal(mode==='save'?'落笔存梦':'展笺续梦',list);
  }
  function applySettings(){document.documentElement.style.setProperty('--dialogue-size',`${settings.size}px`);document.body.classList.toggle('reduced-motion',!settings.motion);if(!settings.memories)memories.clear();write('settings',settings);}
  function settingsModal(){
    showModal('阅读设置',`<div class="settings-row"><label for="speed">文字速度<small>越向右，文字越快；最右侧即时显示</small></label><div><input id="speed" type="range" min="0" max="70" step="5"><output id="speed-value"></output></div></div><div class="settings-row"><label for="font-size">对话字号<small>按当前电脑屏幕调整阅读大小</small></label><div><input id="font-size" type="range" min="20" max="28" step="1"><output id="font-value"></output></div></div><div class="settings-row"><label for="motion">场景动效<small>开场淡入、章节转场、落花与忆影淡入</small></label><input id="motion" type="checkbox"></div><div class="settings-row"><label for="memories">人物忆影<small>心声念及人物时，短暂浮现其形象</small></label><input id="memories" type="checkbox"></div><div class="settings-row"><label for="music">轻弦背景乐<small>程序生成的轻柔旋律，无角色配音</small></label><input id="music" type="checkbox"></div><div class="key-guide"><span>空格 / 回车 · 继续</span><span>1 / 2 / 3 · 选择</span><span>H · 回看</span><span>A · 自动</span><span>Esc · 关闭弹窗</span></div><p class="modal-footnote">故事没有倒计时，也没有答错的选择。按自己的节奏阅读就好。</p>`);
    $('speed').value=70-settings.speed;$('font-size').value=settings.size;$('motion').checked=settings.motion;$('memories').checked=settings.memories;$('music').checked=settings.music;
    const speedLabel=()=>{$('speed-value').textContent=settings.speed===0?'即时显示':settings.speed<25?'轻快':settings.speed<50?'舒缓':'缓慢';};speedLabel();$('font-value').textContent=settings.size+' px';
    $('speed').oninput=e=>{settings.speed=70-Number(e.target.value);speedLabel();applySettings();if(settings.speed===0&&typing)finishText();};
    $('font-size').oninput=e=>{settings.size=Number(e.target.value);$('font-value').textContent=settings.size+' px';applySettings();};
    $('motion').onchange=e=>{settings.motion=e.target.checked;applySettings();};
    $('memories').onchange=e=>{settings.memories=e.target.checked;applySettings();};
    $('music').onchange=e=>{settings.music=e.target.checked;if(settings.music)startMusic();else stopMusic();applySettings();};
  }
  function about(){showModal('关于此梦','<div class="about-copy"><p>从初入荣府的朱门，到暮春落花的庭院。你始终站在林黛玉的视角，读她的所见、所想，替她作出细微的选择。</p><p>首卷“初入荣府”改编自《红楼梦》第三回；第二卷“黛玉葬花”以第二十七回为中心，衔接第二十六回的闭门误会与第二十八回的花间相诉。每卷五幕、八处选择、三种心境；第二卷还可与心中的黛玉相逢，细听她未说出口的话。</p><p>主要事件沿原著展开，选择改变答话、心声与这一日的感受。分支对话及部分心声为文学再创作；标注“原著”的诗句与答话摘自原作。</p><p>第二卷设有三段“心境”对话：你与心中的黛玉相逢，回应她未说出口的心事。这个人物形象是黛玉内在声音的具象化，相关场景与对白均为原创改编。</p><div class="key-guide"><span>空格 / 回车 · 继续</span><span>数字键 · 选择</span><span>H · 回看</span></div><p class="fine">原著：曹雪芹《红楼梦》，<a href="https://zh.wikisource.org/zh-hans/紅樓夢/第003回" target="_blank" rel="noopener noreferrer">第三回 ↗</a> · <a href="https://zh.wikisource.org/zh-hans/紅樓夢/第026回" target="_blank" rel="noopener noreferrer">第二十六回 ↗</a> · <a href="https://zh.wikisource.org/zh-hans/紅樓夢/第027回" target="_blank" rel="noopener noreferrer">第二十七回 ↗</a> · <a href="https://zh.wikisource.org/zh-hans/紅樓夢/第028回" target="_blank" rel="noopener noreferrer">第二十八回 ↗</a><br>场景与人物为 AI 生成的古典淡彩插画，非影视剧素材。<br>背景乐为本地程序生成，此版本面向电脑浏览器，无角色语音。</p></div>');}
  function startMusic(){
    try{
      const AudioCtx=window.AudioContext||window.webkitAudioContext;if(!AudioCtx)throw new Error('unsupported');
      if(!audioContext){audioContext=new AudioCtx();master=audioContext.createGain();master.gain.value=.12;master.connect(audioContext.destination);}
      audioContext.resume().catch(()=>{});if(musicTimer)return;
      const melody=[0,4,7,9,7,4,2,0,2,4,7,12,9,7,4,2];let i=0;
      const pluck=()=>{if(document.hidden||!settings.music)return;const t=audioContext.currentTime;const freq=220*Math.pow(2,melody[i++%melody.length]/12);[1,2,3].forEach((harmonic,h)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sine';osc.frequency.value=freq*harmonic;gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.7/(harmonic*harmonic),t+.015);gain.gain.exponentialRampToValueAtTime(.001,t+2.4-h*.2);osc.connect(gain);gain.connect(master);osc.start(t);osc.stop(t+2.6);});};pluck();musicTimer=setInterval(pluck,1600);
    }catch{settings.music=false;write('settings',settings);if($('music'))$('music').checked=false;toast('当前浏览器暂不支持背景乐。');}
  }
  function stopMusic(){clearInterval(musicTimer);musicTimer=null;if(audioContext)audioContext.suspend().catch(()=>{});}
  function unlockMusic(){if(musicUnlocked)return;musicUnlocked=true;if(settings.music)startMusic();}
  document.addEventListener('pointerdown',unlockMusic,{once:true,capture:true});
  document.addEventListener('keydown',unlockMusic,{once:true,capture:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){memories.clear();setAuto(false);stopMusic();}else if(settings.music&&musicUnlocked)startMusic();});
  const savedSettings=read('settings',{});
  if(Number.isFinite(savedSettings.speed))settings.speed=Math.min(70,Math.max(0,savedSettings.speed));if(Number.isFinite(savedSettings.size))settings.size=Math.min(28,Math.max(20,savedSettings.size));
  if(savedSettings.preferencesVersion===2){if(typeof savedSettings.motion==='boolean')settings.motion=savedSettings.motion;if(typeof savedSettings.music==='boolean')settings.music=savedSettings.music;}
  if(typeof savedSettings.memories==='boolean')settings.memories=savedSettings.memories;
  // Audio starts only after an explicit user gesture in each visit.
  applySettings();
  activateVolume('first-dream');
  for(let i=0;i<10;i++){const petal=document.createElement('i');petal.className='petal';petal.style.left=(8+i*9)+'%';petal.style.animationDuration=(13+i%4*3)+'s';petal.style.animationDelay=(-i*2.3)+'s';$('petals').append(petal);}
  $('start').onclick=showChapters;$('chapters-back').onclick=closeChapters;
  $('continue').onclick=()=>preferExplore()?enterExplore():resume(read('auto'));$('dialogue-body').onclick=advance;$('next').onclick=advance;$('auto').onclick=()=>setAuto(!auto);$('home').onclick=home;
  $('replay').onclick=()=>newGame();$('ending-history').onclick=history;$('ending-home').onclick=home;$('close-modal').onclick=closeModal;
  $('ending-chapters').onclick=showChapters;
  const actions={history,save:()=>slots('save'),load:()=>slots('load'),settings:settingsModal,about,team:showTeam,'team-back':closeTeam};
  document.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>actions[btn.dataset.action]?.()));
  $('modal').addEventListener('close',queueAuto);
  $('modal').addEventListener('click',e=>{if(e.target===$('modal')){const b=$('modal').getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)closeModal();}});
  document.addEventListener('keydown',e=>{
    if($('modal').open||e.altKey||e.ctrlKey||e.metaKey||e.repeat||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
    if(screen==='team'&&e.key==='Escape'){e.preventDefault();closeTeam();return;}
    if(screen==='chapters'&&e.key==='Escape'){e.preventDefault();if(!library.back())closeChapters();return;}
    if(screen!=='game')return;
    if(e.code==='Space'||e.code==='Enter'){if(e.target.closest('button')&&e.target!==$('dialogue-body'))return;e.preventDefault();advance();}
    else if(/^[123]$/.test(e.key)){e.preventDefault();if(typing)finishText();else selectChoice(Number(e.key)-1);}
    else if(e.key.toLowerCase()==='h'){e.preventDefault();history();}
    else if(e.key.toLowerCase()==='a'){e.preventDefault();setAuto(!auto);}
  });
  updateContinue();
  if(location.hash==='#chapters'||new URLSearchParams(location.search).get('screen')==='chapters')showChapters();
  // Load required artwork early so entering a new chapter does not flash an empty stage.
  ['courtyard','hall','jiamu','fengjie','baoyu','blossom-night','blossom-path','blossom-mound','daiyu-heart','daiyu-inner','baochai-memory','zijuan-memory'].forEach(name=>{const img=new Image();img.src=`assets/${name}.png`;});
})();
