/* A lifted scroll keeps its volume while its silk cover and paper turn separately. */
'use strict';
window.createDreamLibrary = function({volumes,canPlay,isCompleted,readVolume,motion}) {
  const $=id=>document.getElementById(id),root=$('chapters'),cabinet=$('scroll-cabinet'),reveal=$('scroll-reveal');
  const surface=reveal.querySelector('.scroll-surface'),sheet=reveal.querySelector('.unrolled-scroll');
  const left=reveal.querySelector('.roller-left'),right=reveal.querySelector('.roller-right');
  const curlLeft=reveal.querySelector('.curl-left'),curlRight=reveal.querySelector('.curl-right');
  const animations=new Set();
  const tempo={pickup:900,untie:380,unwrap:600,unfold:2200,rollup:1050,wrap:500,tie:280,return:850};
  let phase='shelf',selected=null,source=null,flying=null,epoch=0;
  const animateMotion=()=>motion()&&!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const setPhase=value=>{phase=value;root.dataset.scrollPhase=value;};
  const pose=(x,y)=>`perspective(1200px) translate3d(${x}px,${y}px,18px) rotateX(3deg) rotateY(-6deg) rotateZ(1deg) scale(1.03)`;
  const rest='perspective(1200px) translate3d(0,0,0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';
  function clearAnimations(){animations.forEach(a=>a.cancel());animations.clear();}
  function removeFlying(){flying?.remove();flying=null;}
  function animate(element,keyframes,duration,easing='cubic-bezier(.25,.7,.25,1)'){
    if(typeof element.animate!=='function')return Promise.resolve();
    const a=element.animate(keyframes,{duration,easing,fill:'both'});animations.add(a);return a.finished.catch(()=>{});
  }
  function reset({focus=false}={}){
    epoch++;clearAnimations();removeFlying();reveal.hidden=true;reveal.inert=true;reveal.removeAttribute('aria-busy');
    cabinet.inert=false;setPhase('shelf');root.querySelectorAll('.is-drawn').forEach(e=>e.classList.remove('is-drawn'));
    if(focus&&source?.isConnected)source.focus({preventScroll:true});
  }
  function buildRack(){
    $('volume-list').replaceChildren();const count=volumes.filter(canPlay).length;
    $('library-count').textContent=`${count} 卷已启 · ${volumes.length-count} 卷待续`;
    volumes.forEach((v,index)=>{
      const item=document.createElement('li'),button=document.createElement('button');
      item.className='scroll-slot';button.type='button';button.className='volume-scroll';button.dataset.volume=v.id;button.dataset.available=String(canPlay(v));button.dataset.tone=String(v.tone??index%4);
      button.setAttribute('aria-label',`抽出${v.title}，${canPlay(v)?'可入梦':'未完待续，可展开预览'}`);
      const object=document.createElement('span');object.className='scroll-object';object.setAttribute('aria-hidden','true');
      object.innerHTML='<span class="scroll-cylinder"></span><span class="scroll-cap cap-top"></span><span class="scroll-silk"><span class="scroll-flap-back"></span><span class="scroll-flower"></span><span class="scroll-paper-label"><small></small><strong></strong><i>红楼</i></span><span class="scroll-cord"></span><span class="scroll-tassel"></span></span><span class="scroll-cap cap-bottom"></span>';
      object.querySelector('small').textContent=`卷${v.number}`;object.querySelector('strong').textContent=v.title;
      const caption=document.createElement('span'),hint=document.createElement('span');caption.className='scroll-caption';
      caption.textContent=canPlay(v)?isCompleted(v)?'此梦已记':'已开篇 · 可入梦':'未完待续';hint.className='scroll-extract-hint';hint.textContent='抽出此卷';
      button.append(object,caption,hint);button.onclick=()=>openVolume(v,button);item.append(button);$('volume-list').append(item);
    });
  }
  function fillVolume(v){
    const playable=canPlay(v);selected=v;$('scroll-read-classic').hidden=v.id!=='first-dream';reveal.dataset.volume=v.id;reveal.dataset.tone=String(v.tone??volumes.indexOf(v)%4);
    $('scroll-open-kicker').textContent=`第${v.number}卷 · ${playable?isCompleted(v)?'此梦已记':'已开篇':'未完待续'}`;
    $('scroll-open-title').textContent=v.title;$('scroll-open-subtitle').textContent=v.subtitle;$('scroll-open-description').textContent=v.description;
    $('scroll-open-detail').textContent=playable?v.detail:'这一回的故事尚在续写，待来日再为你展卷。';
    $('scroll-read').disabled=!playable;$('scroll-read').firstChild.textContent=playable?(v.mode==='explore'?'走入三维贾府 ':'入此回梦 '):'未完待续 ';
    $('scroll-read').lastElementChild.textContent=playable?'→':'·';$('scroll-open-note').textContent=playable?'以黛玉之眼观人，以黛玉之心作答。':'花开有时，故事亦有归期。';
  }
  function createFlying(object){
    const r=object.getBoundingClientRect();flying=object.cloneNode(true);flying.classList.add('flying-scroll');
    Object.assign(flying.style,{left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px'});
    flying.dataset.tone=source.dataset.tone;root.append(flying);return r;
  }
  function foldedShape(target,origin){return {height:origin.height*1.04,inset:Math.max(0,(target.width-origin.width*1.04)/2)};}
  function foldPaper(target,folded,opening){
    const time=opening?tempo.unfold:tempo.rollup;
    const paperEase='cubic-bezier(.42,0,.58,1)';
    const sequence=(closed,opened)=>opening?[closed,opened]:[opened,closed];
    const tilted='perspective(1500px) rotateX(5deg) rotateY(-5deg) rotateZ(1deg)';
    // The curl remains visible until late in the unfold, then settles flat.
    const curlFrames=sign=>{
      const stages=[{p:0,width:46,opacity:.85,angle:36},{p:.4,width:42,opacity:.82,angle:25},{p:.78,width:26,opacity:.65,angle:12},{p:1,width:8,opacity:0,angle:0}];
      const frames=stages.map(v=>({transform:`translateX(${sign*folded.inset*(1-v.p)}px) rotateY(${-sign*v.angle}deg)`,width:v.width+'px',opacity:v.opacity,offset:v.p}));
      return opening?frames:frames.reverse().map(v=>({...v,offset:1-v.offset}));
    };
    return Promise.all([
      animate(surface,sequence({clipPath:`inset(0 ${folded.inset}px 0 ${folded.inset}px)`},{clipPath:'inset(0 0px 0 0px)'}),time,paperEase),
      animate(left,sequence({transform:`translateX(${folded.inset}px) rotateY(-28deg)`},{transform:'translateX(0) rotateY(0deg)'}),time,paperEase),
      animate(right,sequence({transform:`translateX(${-folded.inset}px) rotateY(28deg)`},{transform:'translateX(0) rotateY(0deg)'}),time,paperEase),
      animate(sheet,sequence({height:folded.height+'px',transform:tilted},{height:target.height+'px',transform:'perspective(1500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'}),time,paperEase),
      animate(curlLeft,curlFrames(1),time,paperEase),
      animate(curlRight,curlFrames(-1),time,paperEase)
    ]);
  }
  async function openVolume(v,button){
    if(phase!=='shelf')return;
    const token=++epoch;source=button;fillVolume(v);cabinet.inert=true;reveal.inert=true;reveal.hidden=false;reveal.setAttribute('aria-busy','true');
    const origin=createFlying(button.querySelector('.scroll-object')),target=sheet.getBoundingClientRect();
    const dx=target.x+target.width/2-origin.x-origin.width/2,dy=target.y+target.height/2-origin.y-origin.height/2;
    const folded=foldedShape(target,origin);reveal.style.setProperty('--closed-inset',folded.inset+'px');button.classList.add('is-drawn');setPhase('drawing');
    $('library-announcement').textContent=`正在拿起《${v.title}》`;
    if(animateMotion())await animate(flying,[
      {transform:rest},
      {transform:'perspective(1200px) translate3d(4px,-34px,38px) rotateX(5deg) rotateY(-9deg) rotateZ(-3deg) scale(1.02)',offset:.28},
      {transform:`perspective(1200px) translate3d(${dx*.66}px,${dy*.66-28}px,44px) rotateX(4deg) rotateY(5deg) rotateZ(3deg) scale(1.03)`,offset:.68},
      {transform:pose(dx,dy)}
    ],tempo.pickup);
    if(token!==epoch)return;
    setPhase('untying');
    if(animateMotion())await Promise.all([
      animate(flying.querySelector('.scroll-cord'),[{transform:'translate(0,0) rotate(-5deg)',opacity:1},{transform:'translate(18px,12px) rotate(6deg)',opacity:0}],tempo.untie),
      animate(flying.querySelector('.scroll-tassel'),[{transform:'rotate(-7deg)',opacity:1},{transform:'translate(20px,22px) rotate(-32deg)',opacity:0}],tempo.untie)
    ]);
    if(token!==epoch)return;
    setPhase('unwrapping');
    if(animateMotion())await animate(flying.querySelector('.scroll-silk'),[{transform:'rotateY(0deg)'},{transform:'rotateY(-48deg)',offset:.52},{transform:'rotateY(-106deg)'}],tempo.unwrap);
    if(token!==epoch)return;
    removeFlying();clearAnimations();setPhase('opening');
    if(animateMotion())await foldPaper(target,folded,true);
    if(token!==epoch)return;
    setPhase('open');clearAnimations();reveal.inert=false;reveal.removeAttribute('aria-busy');
    $('scroll-open-title').focus({preventScroll:true});$('library-announcement').textContent=`《${v.title}》已展开${canPlay(v)?'，可以入梦':'，未完待续'}`;
  }
  async function closeVolume(){
    if(phase!=='open'){reset({focus:true});return;}
    const token=++epoch;reveal.inert=true;reveal.setAttribute('aria-busy','true');setPhase('closing');
    const target=sheet.getBoundingClientRect(),folded=foldedShape(target,source.querySelector('.scroll-object').getBoundingClientRect());
    if(animateMotion())await foldPaper(target,folded,false);
    if(token!==epoch)return;
    reveal.hidden=true;clearAnimations();setPhase('rewrapping');
    const origin=createFlying(source.querySelector('.scroll-object'));
    const dx=target.x+target.width/2-origin.x-origin.width/2,dy=target.y+target.height/2-origin.y-origin.height/2;
    flying.style.transform=pose(dx,dy);
    const silk=flying.querySelector('.scroll-silk'),cord=flying.querySelector('.scroll-cord'),tassel=flying.querySelector('.scroll-tassel');
    cord.style.opacity='0';tassel.style.opacity='0';
    if(animateMotion())await animate(silk,[{transform:'rotateY(-106deg)'},{transform:'rotateY(0deg)'}],tempo.wrap);
    if(token!==epoch)return;
    setPhase('tying');
    if(animateMotion())await Promise.all([
      animate(cord,[{transform:'translate(18px,12px) rotate(6deg)',opacity:0},{transform:'translate(0,0) rotate(-5deg)',opacity:1}],tempo.tie),
      animate(tassel,[{transform:'translate(20px,22px) rotate(-32deg)',opacity:0},{transform:'rotate(-7deg)',opacity:1}],tempo.tie)
    ]);
    if(token!==epoch)return;
    setPhase('returning');
    if(animateMotion())await animate(flying,[{transform:pose(dx,dy)},{transform:'perspective(1200px) translate3d(0,-22px,22px) rotateX(3deg) rotateY(6deg) rotateZ(-2deg) scale(1.02)',offset:.72},{transform:rest}],tempo.return);
    if(token!==epoch)return;
    reset({focus:true});$('library-announcement').textContent='卷宗已收回，可另择一卷。';
  }
  $('scroll-read-classic').onclick=()=>{if(phase==='open'&&selected?.id==='first-dream')readVolume({...selected,mode:'reading'});};
  $('scroll-return').onclick=closeVolume;
  $('scroll-read').onclick=()=>{if(phase==='open'&&selected&&canPlay(selected))readVolume(selected);};
  window.addEventListener('resize',()=>{if(phase!=='shelf'&&phase!=='open')reset({focus:true});});
  setPhase('shelf');reveal.inert=true;
  return {show(){reset();buildRack();$('library-announcement').textContent='请选择一册卷宗，抽出展开。';},reset,back(){if(phase==='shelf')return false;closeVolume();return true;}};
};
