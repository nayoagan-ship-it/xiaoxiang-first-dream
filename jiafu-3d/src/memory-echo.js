/* A passing inward image, timed to the revealed name rather than the start of a line. */
(() => {
  'use strict';
  const people = [
    {id:'baoyu',name:'贾宝玉',aliases:['贾宝玉','宝玉','宝二爷'],src:'assets/baoyu.png'},
    {id:'jiamu',name:'贾母',aliases:['外祖母','贾母','老太太'],src:'assets/jiamu.png'},
    {id:'fengjie',name:'王熙凤',aliases:['王熙凤','凤姐姐','凤姐','熙凤'],src:'assets/fengjie.png'},
    {id:'baochai',name:'薛宝钗',aliases:['薛宝钗','宝姐姐','宝钗'],src:'assets/baochai-memory.png'},
    {id:'zijuan',name:'紫鹃',aliases:['紫鹃','鹦哥'],src:'assets/zijuan-memory.png'}
  ];
  function mentions(node){
    if(!node||node.memory===false||!['林黛玉','我','心中的黛玉'].includes(node.who))return [];
    const text=node.text||'';
    return people.filter(person=>person.id!==node.portrait).flatMap(person=>{
      const hits=person.aliases.map(alias=>({alias,index:text.indexOf(alias)})).filter(hit=>hit.index>=0).sort((a,b)=>a.index-b.index||b.alias.length-a.alias.length);
      if(!hits.length)return [];
      const hit=hits[0];return [{...person,at:Array.from(text.slice(0,hit.index+hit.alias.length)).length,start:hit.index}];
    }).sort((a,b)=>a.start-b.start);
  }
  window.DREAM_MEMORIES={people,mentions};
  window.createMemoryEcho=({element,enabled,canAnimate,canShow})=>{
    const image=element.querySelector('img'),label=element.querySelector('[data-memory-name]'),stage=element.closest('.game');
    let candidates=[],queue=[],generation=0,active=false,notBefore=0,waitTimer=0,lifeTimer=0,animation=null;
    function hide(){element.hidden=true;stage.classList.remove('has-memory');}
    function clear(){generation++;clearTimeout(waitTimer);clearTimeout(lifeTimer);animation?.cancel();animation=null;active=false;queue=[];candidates=[];hide();}
    function pump(){
      if(active||!queue.length)return;
      if(!enabled()||!canShow()){clear();return;}
      const delay=notBefore-performance.now();if(delay>0){clearTimeout(waitTimer);waitTimer=setTimeout(pump,delay);return;}
      const person=queue.shift(),epoch=generation;active=true;image.src=person.src;
      const paint=()=>{
        if(epoch!==generation)return;
        if(!enabled()||!canShow()){clear();return;}
        image.alt=person.name+'的忆影';label.textContent=person.name;element.dataset.person=person.id;element.setAttribute('aria-label','黛玉脑海中的'+person.name);
        element.hidden=false;stage.classList.add('has-memory');
        const moving=canAnimate(),duration=moving?3600:3200;
        if(moving)animation=element.animate([
          {opacity:0,transform:'translateY(7px) scale(.98)',filter:'blur(3px)'},
          {opacity:.9,transform:'translateY(0) scale(1)',filter:'blur(0)',offset:.22},
          {opacity:.9,transform:'translateY(0) scale(1)',filter:'blur(0)',offset:.7},
          {opacity:0,transform:'translateY(-5px) scale(1.01)',filter:'blur(3px)'}
        ],{duration,easing:'ease-in-out'});
        lifeTimer=setTimeout(()=>{if(epoch!==generation)return;hide();animation?.cancel();animation=null;active=false;waitTimer=setTimeout(pump,400);},duration);
      };
      const failed=()=>{if(epoch!==generation)return;active=false;pump();};
      if(image.decode)image.decode().then(paint,failed);else paint();
    }
    function prepare(node,{delay=0}={}){clear();candidates=mentions(node).map(person=>({...person,sent:false}));notBefore=performance.now()+delay;}
    function reveal(count){
      if(!enabled()||!canShow())return;
      for(const person of candidates)if(!person.sent&&person.at<=count){person.sent=true;queue.push(person);}
      pump();
    }
    return {prepare,reveal,clear};
  };
})();
