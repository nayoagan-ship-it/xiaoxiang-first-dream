// A spatial literary adaptation. The original complete reading version is separate.
export const journeyStages=[
 {id:'gate',npc:'matron',title:'门前初念',requires:[],hint:'引路婆子还在轿旁等我。先与她说句话，问清外祖母住在哪一进。',note:'轿帘落下时，我还认不清这重重门院。婆子指过的垂花门，成了我记住的第一条路。'},
 {id:'reception',npc:'jiamu',title:'外祖母的怀抱',requires:['gate'],hint:'穿过垂花门，绕开插屏，登上正房石阶。外祖母在帘内等我。',note:'走过石阶与帘影，我终于见到外祖母。她握住我的手时，陌生的宅院有了一处可以安心的地方。'},
 {id:'fengjie',npc:'fengjie',title:'廊下笑语',requires:['reception'],hint:'凤姐姐在东前院的绣房廊下替我看衣料。从正房下阶，沿东边回廊往前院去。',note:'凤姐姐的笑声先从廊下传来。她安排我的衣料，也将姊妹们各自的去处，一一指给我听。'},
 {id:'yingchun',npc:'yingchun',title:'一盏温茶',requires:['fengjie'],hint:'迎春在西前院茶房。木门掩着，轻轻推开便能入内。',door:'tea-door',note:'迎春教我辨认两道茶的不同。原来不懂的事，也可以轻声问出来，不必一味藏在心里。'},
 {id:'xichun',npc:'xichun',title:'亭上看荣府',requires:['fengjie'],hint:'惜春在叠石高处的听风亭。沿假山西侧石阶向上，别只从山洞穿过去。',note:'我随石阶登高，和惜春一起看见层层屋脊。方才绕过的院门，如今终于在眼前连成一片。'},
 {id:'tanchun',npc:'tanchun',title:'书阁里的知音',requires:['fengjie'],hint:'探春在西厢书阁。绕过叠石，沿北面的石径走，上书阁前的台阶。',note:'探春愿同我读书，也认真听我说起父亲。案上的书墨，使这陌生的地方又多了一分亲近。'},
 {id:'wang',npc:'wang',title:'长辈的叮咛',requires:['yingchun','xichun','tanchun'],hint:'姊妹们提起，二舅母正在后院绣楼西侧的曲廊歇息。沿后侧曲廊绕过去，再向她见礼。',note:'二舅母的话里有照拂，也有叮咛。我记下她的意思，却仍想亲眼看看那位衔玉的表兄。'},
 {id:'baoyu',npc:'baoyu',title:'曲水初逢',requires:['wang'],hint:'宝玉常在东面临水亭看书。沿池岸走到曲桥入口，再循着折桥向水中去。',note:'曲桥尽头，他说“这个妹妹我曾见过的”。花影与水色之间，竟有一份说不清的熟悉。'},
 {id:'settle',npc:'xueyan',title:'灯下安顿',requires:['baoyu'],hint:'雪雁已在东侧绣楼安好箱笼。离开水亭，沿后院廊道回到绣楼，看看为我留的住处。',note:'回到住处时，我已能将许多院落和面孔一一对上。门仍深，路却不再全然陌生；雪雁还替我留着一盏灯。'}
];
export const sisterIds=['yingchun','xichun','tanchun'];
const known=new Set(journeyStages.map(s=>s.id));
export function initializeJourney(state){
 const fresh=state.journeyRevision!==1;
 state.journeyDone=Array.isArray(state.journeyDone)?[...new Set(state.journeyDone.filter(id=>known.has(id)))]:[];
 if(fresh&&(state.arrived||state.complete)&&!state.journeyDone.includes('gate'))state.journeyDone.push('gate');
 if(fresh&&state.complete)state.legacyFirstActComplete=true;
 state.journeyRevision=1;
 state.storyChoices=state.storyChoices&&typeof state.storyChoices==='object'&&!Array.isArray(state.storyChoices)?state.storyChoices:{};
 if(Number.isInteger(state.introChoice)&&state.storyChoices['arrival-choice']==null)state.storyChoices['arrival-choice']=state.introChoice;
 state.complete=journeyStages.every(s=>state.journeyDone.includes(s.id));state.arrived=state.journeyDone.includes('gate');
}
export function readyStages(state){return journeyStages.filter(s=>!state.journeyDone.includes(s.id)&&s.requires.every(id=>state.journeyDone.includes(id)));}
export function finishJourneyStage(state,id){if(!known.has(id)||state.journeyDone.includes(id))return false;const s=journeyStages.find(s=>s.id===id);if(!s.requires.every(id=>state.journeyDone.includes(id)))return false;state.journeyDone.push(id);state.arrived=state.journeyDone.includes('gate');state.complete=journeyStages.every(s=>state.journeyDone.includes(s.id));return true;}
export function journeyObjective(state){const ready=readyStages(state);if(!ready.length)return {title:'初来一日 · 已记',text:'这一日的面孔与去处已记下。还可沿花影慢慢走，和新认得的人再叙几句。',ready};if(ready.some(s=>sisterIds.includes(s.id))){const count=sisterIds.filter(id=>state.journeyDone.includes(id)).length;return {title:'与姊妹相识 · '+count+'/3',text:'茶房寻迎春，书阁访探春，登亭见惜春。先往哪里走，都由我自己决定。',ready};}return {title:ready[0].title,text:ready[0].hint,ready};}

const thought=text=>({who:'林黛玉',kind:'心声',text});
const say=(who,text)=>({who,text});
const choice=(text,prompt,options)=>({...thought(text),prompt,options});
const option=(label,effect,response)=>({label,effect,response});
export const journeyNodes={};
function chapter(stage,lines){lines.forEach((line,i)=>{const id='walk-'+stage+'-'+i,next=i+1===lines.length?'WALK_END':'walk-'+stage+'-'+(i+1);const node={...line,id,stage,next};if(line.options){delete node.next;node.options=line.options.map((o,j)=>{const responseId=id+'-reply-'+j;journeyNodes[responseId]={id:responseId,stage,who:'林黛玉',kind:'轻声',text:o.response,next};return {label:o.label,effect:o.effect,next:responseId};});}journeyNodes[id]=node;});}
chapter('reception',[
 thought('我绕过插屏，登上石阶。帘子被轻轻挑起，一位银发老人已从榻边伸出手来。走了这样远的路，我终于见到外祖母了。'),
 say('贾母','“我的心肝儿，快过来，让我好好瞧瞧。”'),
 thought('我屈膝欲拜，却先被她揽住。她掌心的温热，忽然叫我一路忍着的眼泪有了去处。'),
 choice('她仍握着我的手，轻轻问起路上的事。母亲的名字停在舌尖，我一时不知该怎样说。','此刻，我愿怎样靠近她？',[
  option('依着她，把想念轻轻说出来。',{warmth:2},'“外祖母，见到您，我便像又离母亲近了些。”我把声音放得很轻，她却将我的手握得更紧。'),
  option('拭去眼泪，认真补上拜礼。',{reserve:2},'“黛玉来迟了。”我郑重见过礼，才在她身边坐下。那些未说出口的想念，也都在这一拜里了。')]),
 say('贾母','“好孩子，往后就同姊妹们一处住着。凤丫头正在东前院绣房替你看衣料，你歇过这一口气，也去认认她。”'),
 thought('我将外祖母说的方向记住：出正房，下石阶，再顺东边回廊去。认得一个人，也像在这座宅院里点亮一处地方。')
]);
chapter('fengjie',[
 thought('还未到绣房，先听见廊下一串笑声。衣料在架上铺开，一位神采飞扬的年轻妇人回过头，凤钗上的珠光轻轻一颤。'),
 say('王熙凤','“这便是林妹妹了！老太太才说起你，我这里正替你看着缎子。过来，让嫂子好好瞧瞧。”'),
 choice('她携住我的手，问年岁，又问一路冷暖；话说得热闹，安排行李也丝毫不乱。','面对这份热络，我……',[
  option('笑着谢她，愿慢慢亲近。',{warmth:1},'“多谢嫂子惦记。初来许多不懂，还请嫂子教我。”她笑着应下，我也试着把手心放松了些。'),
  option('恭敬称谢，把分寸留在心里。',{reserve:1},'我含笑谢过，将她的话一一记住。这份照拂我领着，也要慢慢学会这里说话的分寸。')]),
 say('王熙凤','“姊妹们都盼着同你说话。迎春在西前院茶房，探春去了西厢书阁，惜春爱那叠石上的听风亭。想先找谁就找谁，不必赶路。”'),
 thought('原来她们并不只坐在一间屋里等我。茶香、书墨、亭上的风，各牵着一条路；我可以自己选一条，走过去认得她们。')
]);
chapter('yingchun',[
 thought('茶房的门被我轻轻推开，瓷盏相碰的细响从里头传来。迎春将手边的茶让出一盏，示意我在近处歇歇。'),
 say('贾迎春','“妹妹方才绕过几重院子了？先喝口温茶。若还有不认得的路，慢慢问便是。”'),
 choice('我望着茶盏，想起家中用茶的习惯。这里的每一件小事，仿佛都有尚未听说的规矩。','碰到不懂的礼数时，我想……',[
  option('先看她如何做，再从容照做。',{reserve:1},'我稍稍等她示意，才接过茶盏。她并不催我，只温和地笑着，我也渐渐定下心来。'),
  option('轻声问一问，不独自在心里猜。',{warmth:1},'“姐姐，我初来还不大懂……”她把缘由细细说给我听，原来一句轻问，并不会叫人嫌我冒失。')]),
 say('贾迎春','“探春那里有好些书，惜春又在亭上看景。妹妹若累了，这扇门总可以回来歇歇。等同姊妹们认熟，再去后楼曲廊向二舅母见礼。”'),
 thought('我走到门边，又回头记住了这间茶房。日后在府里认路，大约可以先从“哪里有人愿意等我”记起。')
]);
chapter('xichun',[
 thought('石阶比在山脚看时更曲折。我扶着栏杆登上高处，惜春正对着亭外层层屋脊，用手指在空中比画。'),
 say('贾惜春','“林姐姐，你也上来啦！从这里看，方才那些绕来绕去的廊子，都像画上的线呢。”'),
 thought('我顺着她指的方向望去：正房在高台上，茶房隐在前院，池水从东边屋角露出一线。这些路，我已亲自走过了几段。'),
 choice('她问扬州的花与这里有什么不同。我想起旧日窗前，一时竟不知该先说哪一种。','我愿怎样回答这个小妹妹？',[
  option('说说家里的花，把旧日也留在这里。',{warmth:1},'“家里窗前也有花，风来时会落在书页上。”我慢慢讲给她听，仿佛那一点旧日春色，也在亭里找到了位置。'),
  option('先听她讲眼前的景，认识新的天地。',{resonance:1},'“这里哪一处，是妹妹最喜欢的？”她认真指给我看。我听着，眼前的亭台便不再只是一片陌生屋瓦。')]),
 say('贾惜春','“姐姐从西边下阶，能往书阁去；若回前院，茶房的路也通着。再认熟一点，咱们还可以一起画下来。”'),
 thought('我将这片高低错落的屋脊收进眼里。回到山下时，想来我会比方才更知道，自己正走在什么地方。')
]);
chapter('tanchun',[
 thought('书阁前的台阶将喧声隔在身后。我从窗边走近，探春将翻开的书压住一角，抬起眼来迎我。'),
 say('贾探春','“听说妹妹跟着姑父读过书？正巧这里清静，咱们坐着说说。哪一卷是你读得最亲近的？”'),
 choice('笔与砚收拾得妥帖，像父亲教我读书的清晨。我原以为到了这里，要将这些话都悄悄收起来。','提到读书，我愿……',[
  option('坦诚说起父亲教过的书。',{resonance:2},'“父亲教过《四书》，也常同我说诗。”我说得认真，她也听得认真。这份熟悉，使我愿意把自己多打开一点。'),
  option('先谦逊请教，慢慢认识她。',{reserve:1},'“读过些，还不曾全懂。姐姐若肯教我，便再好不过。”她说一起看便是，不必将一句闲谈也拘成考问。')]),
 say('贾探春','“往后有想读的书，只管来找我。顺北面的曲廊走，便是后楼曲廊；二舅母在那里歇息，等妹妹同姊妹们说过话，再去也不迟。”'),
 thought('我将书阁的位置牢牢记住。有些路是为了礼数而走，有些路，却叫我已经开始盼着再来。')
]);
chapter('wang',[
 thought('沿后侧曲廊绕来，身后的亭子、书阁都渐渐隐进花木。二舅母正在绣楼西廊歇息，我敛住衣袖，向她见礼。'),
 say('王夫人','“都同姊妹们认得了？初来不必拘束，缺什么便告诉你凤姐姐。只是宝玉淘气，你往后少惹他。”'),
 choice('母亲也曾说过这位衔玉的表兄。二舅母口中的他，与母亲说起的模样，在我心里一时叠到了一处。','听到这番叮咛，我……',[
  option('将长辈的意思仔细记下。',{reserve:1},'我轻轻应下。初来许多事还不分明，先把二舅母的照拂与叮咛，一道放在心上。'),
  option('仍想亲眼认得这个人。',{resonance:1},'我答应着，心里却还留着一个问题：旁人口中的表兄，亲眼见到时，会是什么模样？')]),
 say('王夫人','“他若不在屋里，便又在东边临水亭看书了。你沿池岸认路，走到曲桥口，别往水边石头上踩。”'),
 thought('我向二舅母辞过，记下临水亭的方向。如今这些院落的名字，已不只是名字，也牵着一句句新听见的话。')
]);
chapter('baoyu',[
 thought('折桥将池水分出几重倒影。走到亭边，一位颈间垂着美玉的年轻公子合上书，像早已等着似的抬起头来。'),
 say('贾宝玉','“这个妹妹我曾见过的。”'),
 thought('我分明从未见过他，却也觉得这张面容亲切得奇怪。一路留意的称呼与分寸，忽然都在这一眼里轻轻顿住。'),
 choice('他笑说，虽未见过，看着面善，便当作旧相识。我抬眼，迎上他的目光。','这份似曾相识，我愿……',[
  option('留住这一眼，在心里认作故人。',{resonance:2},'我没有急着躲开，只轻轻笑了笑。那一瞬的熟悉，像曲桥终于接到了另一头，不必说破，也有人懂得。'),
  option('含笑见礼，将惊讶暂且藏好。',{reserve:1},'我认真见过礼，仍把那一点惊讶藏在袖里。只是再开口时，已不像初来时那样怕每一句话都说错。')]),
 say('贾宝玉','“妹妹也喜欢读书么？往后看见好的，咱们一起看。这里的路不难认，你若怕记不住，先认准这座亭子便是。”'),
 thought('我想起书阁里的探春、亭上指路的惜春、茶房中的迎春。今日走过的每一条路，竟都因一个人而有了不同的意味。'),
 say('贾宝玉','“雪雁方才说，妹妹的箱笼已经安在东侧绣楼。天色慢慢下来了，先回去看看，也好叫她安心。”')
]);
chapter('settle',[
 say('雪雁','“姑娘回来了！书放在窗边，箱笼也都打开了。府里这么大，我还怕姑娘绕累了。”'),
 thought('我走到窗前，望见方才经过的回廊。如今想起那一重重院门，心里已有了可以一一对上的面孔。'),
 choice('雪雁替我将披帛收好。母亲的旧物仍安静地留在箱里，眼前却已是另一盏灯。','这一日之后，我愿记住……',[
  option('每一处曾接住我的温暖。',{warmth:2},'“不算累。好些人，都待我很好。”我轻轻说着，仿佛终于肯承认，在陌生的地方，也可以慢慢安放心事。'),
  option('自己走过的路，也能成为依凭。',{reserve:1},'“路还多着，可我已认得一些了。”谨慎仍在，却不再只是惴惴。我知道，明日可以从哪里再走一步。'),
  option('那份不必说破的熟悉。',{resonance:2},'我望了望窗外花影，想起水亭里的那个人。有些相逢，并不会因初见便全然陌生。')]),
 say('雪雁','“那便好。姑娘若还想在廊下走走，我替您留着灯。”'),
 thought('我点点头。红楼的故事还长，这座府邸也仍有许多角落未看尽；只是此刻，我已有了一处可以回来歇下的地方。')
]);
export function validJourneyPending(p){return p?.kind==='walk'&&Boolean(journeyNodes[p.id])&&p.tag==='walk:'+journeyNodes[p.id].stage;}
