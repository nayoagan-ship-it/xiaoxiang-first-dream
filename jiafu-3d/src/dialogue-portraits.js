// Speaker identity is independent of a thought's mentioned person / memory echo.
export const dialoguePortraits=[
 {id:'daiyu',name:'林黛玉',aliases:['林黛玉','黛玉','我','心中的黛玉'],src:'./assets/daiyu-inner.png'},
 {id:'baoyu',name:'贾宝玉',aliases:['贾宝玉','宝玉','宝二爷'],src:'./assets/baoyu.png'},
 {id:'jiamu',name:'贾母',aliases:['贾母','外祖母','老太太'],src:'./assets/jiamu.png'},
 {id:'fengjie',name:'王熙凤',aliases:['王熙凤','凤姐','凤姐姐','琏嫂子'],src:'./assets/fengjie.png'},
 {id:'wang',name:'王夫人',aliases:['王夫人','二舅母','二太太'],src:'./assets/portraits-v11/wang.png'},
 {id:'yingchun',name:'贾迎春',aliases:['贾迎春','迎春','二姑娘'],src:'./assets/portraits-v11/yingchun.png'},
 {id:'tanchun',name:'贾探春',aliases:['贾探春','探春','三姑娘'],src:'./assets/portraits-v11/tanchun.png'},
 {id:'xichun',name:'贾惜春',aliases:['贾惜春','惜春','四姑娘'],src:'./assets/portraits-v11/xichun.png'},
 {id:'xueyan',name:'雪雁',aliases:['雪雁'],src:'./assets/portraits-v11/xueyan.png'},
 {id:'matron',name:'引路婆子',aliases:['引路婆子','婆子'],src:'./assets/portraits-v11/matron.png'},
 {id:'keeper',name:'看门仆人',aliases:['看门仆人','门房','看门人'],src:'./assets/portraits-v11/keeper.png'},
 {id:'maid',name:'丫鬟',aliases:['丫鬟'],src:'./assets/portraits-v11/maid.png'}
];
export function resolveSpeakerPortrait(speaker){return dialoguePortraits.find(person=>person.aliases.includes((speaker||'').trim()))||null;}

export function createSpeakerPortrait({element,canAnimate}){
 let generation=0,currentId='',animation=null;
 function clear(){generation++;currentId='';animation?.cancel();animation=null;element.hidden=true;delete element.dataset.person;element.alt='';}
 function show(speaker){
  const person=resolveSpeakerPortrait(speaker);if(!person){clear();return;}
  if(currentId===person.id&&element.complete&&element.naturalWidth>0){element.hidden=false;return;}
  const epoch=++generation;currentId=person.id;animation?.cancel();animation=null;element.hidden=true;
  element.dataset.person=person.id;element.alt=person.name+'立绘';element.src=person.src;
  const paint=()=>{if(epoch!==generation)return;element.hidden=false;if(canAnimate())animation=element.animate([{opacity:0,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'ease-out'});};
  const failed=()=>{if(epoch===generation)clear();};
  if(element.decode)element.decode().then(paint,failed);else{element.onload=paint;element.onerror=failed;}
 }
 return{show,clear};
}
