import {createSpeakerPortrait} from './dialogue-portraits.js';
import {journeyNodes,journeyStages} from './exploration-story.js';
export function createDialogue({state,settings,save,onFinish}){
 const $=id=>document.getElementById(id),story=window.DREAM_STORY;
 let session=null,node=null,timer=0,text=[],cursor=0,typing=false;
 const canAnimate=()=>settings.motion&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
 const portraits=createSpeakerPortrait({element:$('dialogue-portrait'),canAnimate});
 const memories=window.createMemoryEcho({element:$('memory-echo'),enabled:()=>settings.memories,canAnimate,canShow:()=>Boolean(session)&&!$('modal').open&&!document.hidden});
 function finishText(){clearTimeout(timer);typing=false;cursor=text.length;$('dialogue-text').textContent=text.join('');memories.reveal(cursor);choices();}
 function tick(){if(!typing)return;$('dialogue-text').textContent=text.slice(0,++cursor).join('');memories.reveal(cursor);if(cursor>=text.length)finishText();else timer=setTimeout(tick,settings.speed);}
 function choices(){const list=$('choices');list.replaceChildren();const options=node?.options;$('choice-panel').hidden=!options||typing;$('dialogue-next').disabled=Boolean(options);$('reading-hint').textContent=options?'点击选项，或按数字 1 / 2 / 3 作答':'点击文字或按空格继续 · Esc 暂停阅读';if(!options)return;$('choice-prompt').textContent=node.prompt;options.forEach((o,i)=>{const b=document.createElement('button'),index=document.createElement('span');index.textContent='0'+(i+1);b.append(index,document.createTextNode(o.label));b.onclick=()=>choose(i);list.append(b);});}
 function render(){clearTimeout(timer);memories.clear();if(!session)return;
  node=session.kind==='legacy'?story.nodes[session.id]:session.kind==='walk'?journeyNodes[session.id]:session.lines[session.index];if(!node){finish();return;}
  if(session.kind==='legacy'||session.kind==='walk'){state.pendingMain={...session,open:true};save();}
  $('dialogue-layer').hidden=false;document.body.classList.add('reading');$('speaker').textContent=node.who||'林黛玉';$('speaker-kind').textContent=node.kind||'话语';$('dialogue-place').textContent=session.kind==='walk'?'游府 · '+journeyStages.find(s=>s.id===node.stage).title:session.kind==='legacy'?'朱门初启 · 原篇节选':'荣府漫游 · 随行小记';
  portraits.show(node.who||'林黛玉');$('choice-panel').hidden=true;
  text=Array.from(node.text);cursor=0;typing=settings.speed>0;$('dialogue-text').textContent='';memories.prepare(node);if(typing)tick();else finishText();
 }
 function finish(){const tag=session?.tag;clearTimeout(timer);memories.clear();portraits.clear();session=null;typing=false;$('dialogue-layer').hidden=true;document.body.classList.remove('reading');if(tag==='intro'||tag==='hall'||tag?.startsWith('walk:'))state.pendingMain=null;onFinish(tag);save();}
 function advance(){if(!session||$('modal').open)return;if(typing){finishText();return;}if(node.options)return;if(session.kind==='legacy'||session.kind==='walk'){if(node.next===session.stop||node.next==='WALK_END'){finish();return;}session.id=node.next;}else if(++session.index>=session.lines.length){finish();return;}render();}
 function choose(i){if(!session||typing)return;const choice=node.options?.[i];if(!choice)return;
  if(!Object.hasOwn(state.storyChoices,node.id)){state.storyChoices[node.id]=i;if(node.id==='arrival-choice')state.introChoice=i;for(const[k,v]of Object.entries(choice.effect))state.scores[k]=(state.scores[k]||0)+v;}
  session.id=choice.next;render();
 }
 function legacy(id,stop,tag){session=state.pendingMain?.tag===tag?{...state.pendingMain}:{kind:'legacy',id,stop,tag};render();}
 function walk(id,tag){session=state.pendingMain?.tag===tag?{...state.pendingMain}:{kind:'walk',id,tag};render();}
 function lines(lines,tag){session={kind:'lines',lines,index:0,tag};render();}
 function pause(){if(!session)return;clearTimeout(timer);memories.clear();portraits.clear();if(session.kind==='legacy'||session.kind==='walk')state.pendingMain={...session,open:false};session=null;typing=false;$('dialogue-layer').hidden=true;document.body.classList.remove('reading');save();}
 $('dialogue-body').onclick=advance;$('dialogue-next').onclick=advance;$('dialogue-pause').onclick=pause;
 document.addEventListener('keydown',e=>{if(!session||$('modal').open)return;if(e.key==='Escape'){e.preventDefault();pause();}else if(e.code==='Space'||e.code==='Enter'){if(e.target.closest('button')&&e.target!==$('dialogue-body'))return;e.preventDefault();advance();}else if(/^[123]$/.test(e.key)){e.preventDefault();if(typing)finishText();else choose(Number(e.key)-1);}});
 return {legacy,walk,lines,pause,get active(){return Boolean(session);},get speaker(){return session?node?.who||'林黛玉':'';},resume(){if(state.pendingMain?.open){session={...state.pendingMain};render();}},clearMemories:memories.clear};
}
