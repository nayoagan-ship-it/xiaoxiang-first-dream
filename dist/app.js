(() => {
  'use strict';
  const story = window.DREAM_STORY;
  const $ = id => document.getElementById(id);
  const prefix = 'xiaoxiang.v1.';
  const names = {jiamu:'贾母',fengjie:'王熙凤',baoyu:'贾宝玉'};
  const numerals = ['壹','贰','叁','肆','伍'];
  let state = null, screen = 'cover', currentChapter = -1, timer = 0, autoTimer = 0, flashTimer = 0;
  let typing = false, auto = false, chars = [], cursor = 0, storageWarned = false;
  let settings = {speed:28,size:23,motion:true,music:true,preferencesVersion:2};
  let audioContext, musicTimer, master, musicUnlocked=false;

  function read(key, fallback = null) {try {const v=localStorage.getItem(prefix+key);return v?JSON.parse(v):fallback;}catch{return fallback;}}
  function write(key,value){try{localStorage.setItem(prefix+key,JSON.stringify(value));return true;}catch{if(!storageWarned){toast('当前浏览器无法保存进度，请允许本地存储。');storageWarned=true;}return false;}}
  function clone(obj){return JSON.parse(JSON.stringify(obj));}
  function valid(value){
    return value && value.version===story.version && story.nodes[value.node] &&
      value.scores && ['warmth','reserve','resonance'].every(k=>Number.isFinite(value.scores[k])&&value.scores[k]>=0&&value.scores[k]<=50) &&
      Array.isArray(value.history)&&value.history.length<=300&&Array.isArray(value.decisions)&&value.decisions.length<=10&&typeof value.ended==='boolean';
  }
  function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2600);}
  function saveAuto(){if(state)write('auto',{...clone(state),savedAt:Date.now()});updateContinue();}
  function updateContinue(){const saved=read('auto');$('continue').hidden=!valid(saved);if(valid(saved))$('continue').firstChild.textContent=saved.ended?'重温此梦 ':'续上前梦 ';}
  function setScreen(name){screen=name;['cover','team','game','ending'].forEach(id=>$(id).hidden=id!==name);}
  function showTeam(){setScreen('team');$('team').scrollTop=0;$('team-title').focus({preventScroll:true});}
  function closeTeam(){setScreen('cover');$('team-open').focus({preventScroll:true});}
  function stopTimers(){clearTimeout(timer);clearTimeout(autoTimer);clearTimeout(flashTimer);typing=false;$('chapter-flash').classList.remove('show');}
  function setAuto(value){auto=value;$('auto').setAttribute('aria-pressed',String(auto));$('auto').textContent=auto?'暂停自动':'自动阅读';if(!auto)clearTimeout(autoTimer);else queueAuto();}
  function queueAuto(){clearTimeout(autoTimer);if(auto&&!typing&&screen==='game'&&!$('modal').open&&!story.nodes[state.node].options)autoTimer=setTimeout(advance,Math.max(2200,chars.length*95));}
  function finishText(){clearTimeout(timer);typing=false;cursor=chars.length;$('text').textContent=chars.join('');$('dialogue-body').setAttribute('aria-label',$('text').textContent);updateChoices();queueAuto();}
  function typeNext(){if(!typing)return;cursor++;$('text').textContent=chars.slice(0,cursor).join('');if(cursor>=chars.length)finishText();else timer=setTimeout(typeNext,settings.speed);}
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
    $('background').dataset.scene=node.scene||chapter.scene;
    $('chapter-number').textContent=numerals[node.chapter];$('chapter-title').textContent=chapter.title;$('chapter-place').textContent=chapter.place;
    if((node.scene||chapter.scene)==='night')$('chapter-place').textContent='碧纱橱 · 初夜';
    $('scene-caption').textContent=node.caption||chapter.caption;
    $('speaker').textContent=node.who;$('speaker-kind').textContent=node.kind||'话语';$('beat-count').textContent=`${numerals[node.chapter]} / 伍`;
    $('portrait-wrap').classList.toggle('visible',Boolean(node.portrait));
    if(node.portrait){const src=`assets/${node.portrait}.png`;if(!$('portrait').getAttribute('src')?.endsWith(src))$('portrait').src=src;$('portrait-caption').textContent=names[node.portrait];}
    [...$('chapter-progress').children].forEach((li,i)=>{li.className=i===node.chapter?'current':i<node.chapter?'past':'';if(i===node.chapter)li.setAttribute('aria-current','step');else li.removeAttribute('aria-current');});
    currentChapter=node.chapter;
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
  function newGame(){stopTimers();setAuto(false);state={version:story.version,node:story.start,scores:{reserve:0,warmth:0,resonance:0},history:[],decisions:[],ended:false};currentChapter=-1;enter(story.start);if(settings.music)startMusic();}
  function resume(saved){if(!valid(saved)){toast('存档格式不完整，请重新开始。');return;}state=clone(saved);currentChapter=-1;setAuto(false);if(state.ended)showEnding(false);else renderNode();if(settings.music)startMusic();}
  function home(){stopTimers();setAuto(false);saveAuto();setScreen('cover');}
  function showEnding(record=true){
    stopTimers();setAuto(false);state.ended=true;setScreen('ending');
    const key=story.getEnding(state.scores),end=story.endings[key];
    $('ending-title').textContent=end.title;$('ending-index').textContent=`心境 · ${end.index}`;$('ending-poem').textContent=end.poem;$('ending-text').textContent=end.text;
    $('ending-memories').replaceChildren();
    state.decisions.slice(-3).forEach(d=>{const tag=document.createElement('span');tag.textContent=d.memory;$('ending-memories').append(tag);});
    let collection=read('collection',[]);if(!Array.isArray(collection))collection=[];
    if(record&&!collection.includes(key)){collection.push(key);write('collection',collection);}
    $('ending-collection').textContent=`已留梦记 ${collection.filter(k=>story.endings[k]).length} / 3 · 不同选择，可见不同心境`;
    saveAuto();
  }
  function showModal(title,content,eyebrow='潇湘初梦'){
    clearTimeout(autoTimer);$('modal-title').textContent=title;$('modal-eyebrow').textContent=eyebrow;$('modal-content').replaceChildren();
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
    function row(title,saved,handler,emptyAllowed=false){const btn=document.createElement('button');btn.className='slot';btn.disabled=!valid(saved)&&!emptyAllowed;const info=document.createElement('div'),strong=document.createElement('strong'),small=document.createElement('small'),label=document.createElement('span');strong.textContent=title;small.textContent=valid(saved)?`${story.chapters[story.nodes[saved.node].chapter].title} · ${saved.ended?'此梦已记':story.nodes[saved.node].who} · ${new Date(saved.savedAt||Date.now()).toLocaleString('zh-CN',{hour12:false})}`:'尚未落笔';label.textContent=mode==='save'?'存于此处':valid(saved)?'续梦 →':'空';info.append(strong,small);btn.append(info,label);btn.onclick=handler;list.append(btn);}
    if(mode==='load')row('最近 · 自动存档',read('auto'),()=>{const s=read('auto');closeModal();resume(s);});
    [1,2,3].forEach(i=>{const saved=read('slot'+i);row(`梦笺 · ${['一','二','三'][i-1]}`,saved,()=>{
      if(mode==='save'){
        const perform=()=>{if(write('slot'+i,{...clone(state),savedAt:Date.now()})){closeModal();toast(`已存入梦笺${['一','二','三'][i-1]}`);}};
        if(valid(saved)){const box=document.createElement('div');box.innerHTML='<p class="confirm-copy">这张梦笺已有故事，要用眼前的进度替换吗？</p>';const actions=document.createElement('div');actions.className='confirm-actions';const yes=document.createElement('button');yes.className='primary';yes.textContent='替换梦笺';yes.onclick=perform;const no=document.createElement('button');no.className='secondary';no.textContent='返回存档';no.onclick=()=>slots('save');actions.append(yes,no);box.append(actions);showModal('重写梦笺',box);}else perform();
      }else{closeModal();resume(read('slot'+i));}
    },mode==='save');});
    const foot=document.createElement('p');foot.className='modal-footnote';foot.textContent='进度保存在当前电脑的此浏览器中。自动存档随剧情更新，三张梦笺可手动保留；清除浏览器数据会删除存档。';list.append(foot);showModal(mode==='save'?'落笔存梦':'展笺续梦',list);
  }
  function applySettings(){document.documentElement.style.setProperty('--dialogue-size',`${settings.size}px`);document.body.classList.toggle('reduced-motion',!settings.motion);write('settings',settings);}
  function settingsModal(){
    showModal('阅读设置',`<div class="settings-row"><label for="speed">文字速度<small>越向右，文字越快；最右侧即时显示</small></label><div><input id="speed" type="range" min="0" max="70" step="5"><output id="speed-value"></output></div></div><div class="settings-row"><label for="font-size">对话字号<small>按当前电脑屏幕调整阅读大小</small></label><div><input id="font-size" type="range" min="20" max="28" step="1"><output id="font-value"></output></div></div><div class="settings-row"><label for="motion">场景动效<small>开场淡入、章节转场与落花</small></label><input id="motion" type="checkbox"></div><div class="settings-row"><label for="music">轻弦背景乐<small>程序生成的轻柔旋律，无角色配音</small></label><input id="music" type="checkbox"></div><div class="key-guide"><span>空格 / 回车 · 继续</span><span>1 / 2 / 3 · 选择</span><span>H · 回看</span><span>A · 自动</span><span>Esc · 关闭弹窗</span></div><p class="modal-footnote">故事没有倒计时，也没有答错的选择。按自己的节奏阅读就好。</p>`);
    $('speed').value=70-settings.speed;$('font-size').value=settings.size;$('motion').checked=settings.motion;$('music').checked=settings.music;
    const speedLabel=()=>{$('speed-value').textContent=settings.speed===0?'即时显示':settings.speed<25?'轻快':settings.speed<50?'舒缓':'缓慢';};speedLabel();$('font-value').textContent=settings.size+' px';
    $('speed').oninput=e=>{settings.speed=70-Number(e.target.value);speedLabel();applySettings();if(settings.speed===0&&typing)finishText();};
    $('font-size').oninput=e=>{settings.size=Number(e.target.value);$('font-value').textContent=settings.size+' px';applySettings();};
    $('motion').onchange=e=>{settings.motion=e.target.checked;applySettings();};
    $('music').onchange=e=>{settings.music=e.target.checked;if(settings.music)startMusic();else stopMusic();applySettings();};
  }
  function about(){showModal('关于此梦',`<div class="about-copy"><p>我自扬州而来，从西角门入荣国府。在这里，每一张面孔都陌生，每一句话都要留心。</p><p>这是根据曹雪芹《红楼梦》第三回改编的短篇视觉小说。你始终站在林黛玉的视角，读她的所见、所想，替她作出细微的选择。</p><p>五幕故事约需八至十二分钟，包含八处选择、三种心境。初见、问玉与摔玉等关键事件沿原著展开；分支对话及部分心声为文学再创作，结局表现入府第一日的感受。</p><div class="key-guide"><span>空格 / 回车 · 继续</span><span>数字键 · 选择</span><span>H · 回看</span></div><p class="fine">原著：曹雪芹《红楼梦》第三回，<a href="https://zh.wikisource.org/zh-hans/紅樓夢/第003回" target="_blank" rel="noopener noreferrer">阅读原文 ↗</a><br>场景与人物立绘：AI 生成的古典淡彩插画，非影视剧素材。<br>背景乐：本地程序生成。此版本面向电脑浏览器，无角色语音。</p></div>`);}
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
  document.addEventListener('visibilitychange',()=>{if(document.hidden){setAuto(false);stopMusic();}else if(settings.music&&musicUnlocked)startMusic();});
  const savedSettings=read('settings',{});
  if(Number.isFinite(savedSettings.speed))settings.speed=Math.min(70,Math.max(0,savedSettings.speed));if(Number.isFinite(savedSettings.size))settings.size=Math.min(28,Math.max(20,savedSettings.size));
  if(savedSettings.preferencesVersion===2){if(typeof savedSettings.motion==='boolean')settings.motion=savedSettings.motion;if(typeof savedSettings.music==='boolean')settings.music=savedSettings.music;}
  // Audio starts only after an explicit user gesture in each visit.
  applySettings();
  story.chapters.forEach((c,i)=>{const li=document.createElement('li');li.textContent=c.title;$('chapter-progress').append(li);});
  for(let i=0;i<10;i++){const petal=document.createElement('i');petal.className='petal';petal.style.left=(8+i*9)+'%';petal.style.animationDuration=(13+i%4*3)+'s';petal.style.animationDelay=(-i*2.3)+'s';$('petals').append(petal);}
  $('start').onclick=()=>{const saved=read('auto');if(valid(saved)&&!saved.ended)confirmAction('再启一梦','重新开始会更新自动存档。已手动保存的梦笺仍可读取。',newGame);else newGame();};
  $('continue').onclick=()=>resume(read('auto'));$('dialogue-body').onclick=advance;$('next').onclick=advance;$('auto').onclick=()=>setAuto(!auto);$('home').onclick=home;
  $('replay').onclick=newGame;$('ending-history').onclick=history;$('ending-home').onclick=home;$('close-modal').onclick=closeModal;
  const actions={history,save:()=>slots('save'),load:()=>slots('load'),settings:settingsModal,about,team:showTeam,'team-back':closeTeam};
  document.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>actions[btn.dataset.action]?.()));
  $('modal').addEventListener('close',queueAuto);
  $('modal').addEventListener('click',e=>{if(e.target===$('modal')){const b=$('modal').getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)closeModal();}});
  document.addEventListener('keydown',e=>{
    if($('modal').open||e.altKey||e.ctrlKey||e.metaKey||e.repeat||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
    if(screen==='team'&&e.key==='Escape'){e.preventDefault();closeTeam();return;}
    if(screen!=='game')return;
    if(e.code==='Space'||e.code==='Enter'){if(e.target.closest('button')&&e.target!==$('dialogue-body'))return;e.preventDefault();advance();}
    else if(/^[123]$/.test(e.key)){e.preventDefault();if(typing)finishText();else selectChoice(Number(e.key)-1);}
    else if(e.key.toLowerCase()==='h'){e.preventDefault();history();}
    else if(e.key.toLowerCase()==='a'){e.preventDefault();setAuto(!auto);}
  });
  updateContinue();
  // Load required artwork early so entering a new chapter does not flash an empty stage.
  ['courtyard','hall','jiamu','fengjie','baoyu'].forEach(name=>{const img=new Image();img.src=`assets/${name}.png`;});
})();
