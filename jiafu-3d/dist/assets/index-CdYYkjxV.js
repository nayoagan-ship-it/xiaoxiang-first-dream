(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),window.DREAM_STORY=(()=>{let e=[{title:`朱门初启`,place:`荣国府 · 垂花门`,caption:`朱门深处，步步留心`,scene:`courtyard`},{title:`一怀悲喜`,place:`贾母正房 · 午后`,caption:`一声心肝，半生牵念`,scene:`hall`},{title:`未见先闻`,place:`贾母正房 · 笑语`,caption:`珠翠生辉，笑语藏锋`,scene:`hall`},{title:`满堂规矩`,place:`荣禧堂 · 暮色`,caption:`人情冷暖，尽在细微`,scene:`hall`},{title:`似曾相识`,place:`贾母正房 · 掌灯`,caption:`只这一眼，恍若旧识`,scene:`hall`}],t={};function n(e,n,r,i,a,o=``,s={}){t[e]={id:e,chapter:n,who:r,text:i,next:a,portrait:o,...s}}let r=(e,t,r,i,a=``,o={})=>n(e,t,`林黛玉`,r,i,a,{kind:`心声`,...o}),i=(e,t,n,i,a,o=``)=>r(e,t,n,null,o,{prompt:i,options:a}),a=(e,t,n,r)=>({label:e,next:t,effect:n,memory:r});r(`arrival`,0,`轿子轻轻一晃，停了。我拢住袖口，隔着纱窗望出去。京城的繁华尚未看尽，眼前已是重重朱门。`,`gate`),r(`gate`,0,`方才经过宁国府，如今才到荣国府。正门并不开，轿子从西角门进去。连入门的路，也有我尚不懂的分别。`,`mother`),r(`mother`,0,`母亲在世时，常说外祖母家与别处不同。如今母亲不在了，父亲又远在扬州；往后的日子，我要在这里过了。`,`arrival-choice`),i(`arrival-choice`,0,`婆子掀起轿帘，将手递来。垂花门后的脚步声、鸟鸣声，一齐近了。`,`跨过这道门时，我想……`,[a(`记清每一步，莫失了礼数。`,`entry-careful`,{reserve:2},`留心门庭`),a(`外祖母等着我，先去见她。`,`entry-warm`,{warmth:1},`心念亲人`),a(`母亲走过的地方，会是什么样？`,`entry-curious`,{resonance:1},`寻母旧迹`)]),r(`entry-careful`,0,`我扶着婆子的手下轿，步子放得轻，眼睛也不敢四处多看。母亲留下的叮咛，我须替自己记牢。`,`corridor`),r(`entry-warm`,0,`我想象外祖母的模样。她的声音是否与母亲相像？这陌生深宅里，终究还有一位盼着我的亲人。`,`corridor`),r(`entry-curious`,0,`廊上的光影落在衣袖上。我忽然想，母亲年少时，也许曾扶着这些栏杆，听过同样的鸟声。`,`corridor`),r(`corridor`,0,`我穿过垂花门，绕过大理石插屏。两边游廊曲折，笼中鸟儿啼得清脆；穿红着绿的丫鬟早已迎了下来。`,`announce`),n(`announce`,0,`丫鬟`,`“林姑娘到了。”`,`grandma-arrival`),r(`grandma-arrival`,1,`帘子一开，一位银发老人已由人扶着迎上来。我知道，这便是外祖母了。我屈膝欲拜，身子却先被她搂进怀中。`,`grandma-cry`,`jiamu`),n(`grandma-cry`,1,`贾母`,`“我的心肝儿……”`,`grandma-feel`,`jiamu`),r(`grandma-feel`,1,`她一声声唤我，泪落在我的鬓边。我一路忍着的委屈忽然都没了去处，只随着她哭。满屋的人也在拭泪。`,`grandma-choice`,`jiamu`),i(`grandma-choice`,1,`等哭声略止，外祖母仍拉着我的手。她掌心的温热，像一盏隔了很久才照到我的灯。`,`此刻，我愿怎样靠近她？`,[a(`轻轻依着她，把想念说出来。`,`grandma-warm`,{warmth:2},`外祖母的怀抱`),a(`先拭去眼泪，郑重补上拜礼。`,`grandma-formal`,{reserve:2},`含泪见礼`)],`jiamu`),n(`grandma-warm`,1,`林黛玉`,`“外祖母，我一路都想着，见到您，就像又能离母亲近些。”我说得很轻，她却把我的手握得更紧了。`,`meet-family`,`jiamu`,{kind:`轻声`}),r(`grandma-formal`,1,`我离开她的怀抱，认认真真拜了下去。纵有千言万语，此时也只说得一句：外祖母，黛玉来迟了。`,`meet-family`,`jiamu`),r(`meet-family`,1,`我依次拜见大舅母、二舅母和珠大嫂子。外祖母又唤了迎春、探春、惜春来，满屋陌生的面孔，渐渐有了称呼。`,`sisters`,`jiamu`),r(`sisters`,1,`迎春温柔沉静，探春顾盼有神，惜春年纪还小。我们互相见礼。我望着她们，想起父亲说过：姊妹一处，也可解些烦闷。`,`medicine`,`jiamu`),r(`medicine`,1,`众人问起我的病，我答了素来服的药。外祖母说府中正配丸药，叫人替我多配一份。我垂下眼，心里轻轻动了一下。`,`laugh`,`jiamu`),n(`laugh`,2,`王熙凤`,`“我来迟了，不曾迎接远客！”`,`fengjie-enter`),r(`fengjie-enter`,2,`满屋人原都敛声屏气，偏这一串笑声先到了。我抬起眼，看见众人簇拥着一位衣饰华贵的年轻妇人进来。`,`fengjie-look`,`fengjie`),r(`fengjie-look`,2,`凤钗珠光微颤，大红衣衫映得她神采飞扬。一双丹凤眼还未说话，已将满屋的人情照看了一遍。我连忙起身。`,`fengjie-intro`,`fengjie`),n(`fengjie-intro`,2,`贾母`,`“这是我们这里有名的凤辣子。”姊妹们又告诉我：这是琏嫂子。`,`fengjie-greet`,`fengjie`),r(`fengjie-greet`,2,`我忙以嫂相称。原来这便是母亲说过的王熙凤。她携着我的手，上下端详，话说得热闹，笑意也来得极快。`,`fengjie-words`,`fengjie`),n(`fengjie-words`,2,`王熙凤`,`“妹妹既来了，便安心住下。想吃什么、缺什么，只管告诉我。”`,`fengjie-choice`,`fengjie`),i(`fengjie-choice`,2,`她刚替母亲伤感了片刻，听外祖母劝止，又很快转悲为喜。这样周到的人，我该如何答她？`,`面对这份热络，我……`,[a(`笑着谢她，愿慢慢亲近。`,`fengjie-trust`,{warmth:1},`接住凤姐的好意`),a(`恭敬称谢，将分寸放在心里。`,`fengjie-caution`,{reserve:1},`笑语间的分寸`)],`fengjie`),n(`fengjie-trust`,2,`林黛玉`,`“多谢嫂子惦记。初来许多不懂的，还要请嫂子教我。”她笑着应下。我也试着放松了些。`,`fengjie-work`,`fengjie`,{kind:`答话`}),r(`fengjie-caution`,2,`我含笑谢过。她的话妥帖，照拂也周全；只是这里一句话，常能同时顾到许多人。我还须慢慢学。`,`fengjie-work`,`fengjie`),r(`fengjie-work`,2,`她一面问我的年岁、读书和用药，一面安排仆妇安放行李。二舅母问起月钱和裁衣的缎子，她也一一答得明白。`,`fengjie-leave`,`fengjie`),r(`fengjie-leave`,2,`我渐渐明白，这满屋的笑语背后，有一张看不见的细网。谁亲谁疏，谁管着什么，都藏在话里。`,`uncle-one`),r(`uncle-one`,3,`大舅母带我去拜见大舅舅。大舅舅因身子不适，遣人传话，要我安心住下。我起身听完，再向大舅母辞行。`,`refuse-dinner`),r(`refuse-dinner`,3,`她留我用饭，我婉谢了：还须去拜见二舅舅，怕迟了失恭，改日再领赐。我把话在心里掂过，才敢说出口。`,`rongxi`),r(`rongxi`,3,`重回荣府，荣禧堂的匾额映入眼中，紫檀大案与两列交椅肃然无声。我越发觉得，连坐在哪里，都有规矩。`,`seat`),r(`seat`,3,`二舅母在耳房见我。我料想上首原是二舅舅的位置，便先向椅上坐了；她再三相让，我才挨着她坐下。`,`warning`),n(`warning`,3,`王夫人`,`“你舅舅今日斋戒去了。家里姊妹都好，只有宝玉淘气，你往后少惹他。”`,`baoyu-imagine`),r(`baoyu-imagine`,3,`母亲也曾说过这位衔玉而生的表兄：极憨顽，却待姊妹很好。二舅母口中的人，究竟会是什么模样？`,`dinner`),r(`dinner`,3,`外祖母传晚饭了。凤姐拉我坐在左边第一张椅上，我再三推让，听外祖母说我是客，才告了座。席间竟连一声咳嗽也听不见。`,`tea-choice`),i(`tea-choice`,3,`饭毕，丫鬟先捧来一盏茶，又捧来漱盂。我想起家中的习惯，手上不由稍停了一停。`,`我该怎样应对这陌生的礼数？`,[a(`先看姊妹如何做，再从容照做。`,`tea-observe`,{reserve:1},`细察席间礼数`),a(`轻声向身旁的姊妹问一问。`,`tea-ask`,{warmth:1},`向姊妹轻声求助`)]),r(`tea-observe`,3,`原来头一道茶是漱口的，盥手后才是饮茶。我照着姊妹的样子做完，庆幸自己没有冒失，却也悄悄想起家中自在的饭桌。`,`books`),r(`tea-ask`,3,`我低声问过，姊妹轻轻示意，我便明白了。原来不懂之处，并非都要独自在心里惴惴地猜。`,`books`),n(`books`,3,`贾母`,`“念过些什么书？”`,`books-reply`,`jiamu`),n(`books-reply`,3,`林黛玉`,`“只刚念了《四书》。”我又问姊妹们读些什么书。`,`books-grandma`,`jiamu`,{kind:`答话`}),n(`books-grandma`,3,`贾母`,`“不过是认得两个字罢了。”`,`books-thought`,`jiamu`),r(`books-thought`,3,`我将这话暗暗记下。在家里，父亲教我读书作答；到了这里，原来同样的问题，也要听清说话人的意思。`,`baoyu-arrival`,`jiamu`),n(`baoyu-arrival`,4,`丫鬟`,`“宝玉来了！”`,`first-look`),r(`first-look`,4,`我正想着那位惫懒顽童，门外已进来一个年轻公子。眉眼清明，面如春花，颈间的美玉映着灯光。`,`recognition`,`baoyu`),r(`recognition`,4,`好生奇怪。这张面容，我分明从未见过，却像在什么地方相识了许久。我低下眼，怕心事先露了出来。`,`baoyu-greet`,`baoyu`),n(`baoyu-greet`,4,`贾宝玉`,`“这个妹妹我曾见过的。”`,`grandma-tease`,`baoyu`),r(`grandma-tease`,4,`外祖母笑他胡说。他却说，虽未曾见过，看着面善，便算旧相识。我心里一震：原来不止我有这样的念头。`,`recognition-choice`,`baoyu`),i(`recognition-choice`,4,`他的话像越过满屋的规矩，径直落在我心上。我抬眼迎上他的目光。`,`这份似曾相识，我愿……`,[a(`留住这一眼，在心里认作故人。`,`recognition-open`,{resonance:2},`一眼认作故人`),a(`含笑见礼，将惊讶暂且藏好。`,`recognition-shy`,{reserve:2},`藏起初逢的惊讶`)],`baoyu`),r(`recognition-open`,4,`我没有说破，只轻轻笑了。可那一瞬的安静，竟比今日听过的许多热闹话语，都更让我安心。`,`baoyu-books`,`baoyu`),r(`recognition-shy`,4,`我依礼见过他，心里却仍翻着方才那句话。才入贾府，许多事都未明白，这份亲近也先放在心底吧。`,`baoyu-books`,`baoyu`),n(`baoyu-books`,4,`贾宝玉`,`“妹妹可曾读书？”`,`books-choice`,`baoyu`),i(`books-choice`,4,`他又问到读书。我想起方才外祖母的话，也想起父亲案头陪我度过的那些书卷。`,`这一次，我如何回答？`,[a(`“不曾读，只认得几个字。”`,`books-modest`,{reserve:1},`随境收敛锋芒`),a(`“读过些书，也有许多未懂。”`,`books-honest`,{resonance:2},`与他坦诚谈书`)],`baoyu`),n(`books-modest`,4,`林黛玉`,`“不曾读，只上了一年学，些须认得几个字。”我把方才的话收了收。他却仍兴致勃勃地问我的名字。`,`name`,`baoyu`,{kind:`答话`}),n(`books-honest`,4,`林黛玉`,`“随父亲读过些书，却还不曾全懂。”我没有将自己藏得太深。他听得认真，又问起我的名字。`,`name`,`baoyu`,{kind:`答话 · 改编分支`}),r(`name`,4,`我说了姓名。他听说我还没有表字，便笑着送我“颦颦”二字。探春问其出处，他随口的解释惹得大家一笑。`,`ask-jade`,`baoyu`),n(`ask-jade`,4,`贾宝玉`,`“可也有玉没有？”`,`jade-reply`,`baoyu`),n(`jade-reply`,4,`林黛玉`,`“我没有那个。想来那玉是一件罕物，岂能人人有的。”`,`throw-jade`,`baoyu`,{kind:`答话`}),r(`throw-jade`,4,`不料他忽然变了脸色，摘下颈间的玉，狠命摔去。满屋的人都惊动了。我怔在那里，手心一点点凉下来。`,`jade-angry`,`baoyu`),n(`jade-angry`,4,`贾宝玉`,`“家里姊妹都没有，单我有，我说没趣。如今来了这个妹妹也没有，可知这不是个好东西！”`,`jade-calm`,`baoyu`),r(`jade-calm`,4,`外祖母忙搂住他，说原是我母亲将玉带走了，又让人替他重新戴上。他渐渐安静下来，屋里的人也都缓过神来。`,`jade-choice`,`baoyu`),i(`jade-choice`,4,`那玉重新垂在他胸前。我望着他，一时分不清心里的是惊、是愧，还是一点说不清的感动。`,`这一场风波，在我心里留下……`,[a(`他只是想与姊妹一样，我似乎懂了。`,`jade-understand`,{resonance:2},`读懂摔玉的委屈`),a(`愿他安稳，也愿外祖母别再忧心。`,`jade-kind`,{warmth:2},`愿眼前人都安稳`),a(`因我惹出此事，往后更须谨慎。`,`jade-blame`,{reserve:2},`把风波揽在心里`)],`baoyu`),r(`jade-understand`,4,`旁人珍重的玉，于他竟成了一道隔开姊妹的门槛。我忽然想起自己今日跨过的许多门：原来，他也有不愿独自站着的地方。`,`night`),r(`jade-kind`,4,`我望向外祖母，又看看他。今日相逢，本不该添这许多惊惧。若往后可以，我愿在这样的时候，替身边的人留一点温软。`,`night`),r(`jade-blame`,4,`我说的分明是实话，却仍像错了一句。满屋灯火明亮，我在灯下越发小心，怕自己又惊动了什么。`,`night`),r(`night`,4,`夜深，外祖母将我暂安置在碧纱橱里。随我来的雪雁年纪还小，外祖母便把身边的鹦哥给了我。我望着放下的帐子，才觉出倦来。`,`night-tears`,``,{scene:`night`,caption:`灯影渐低，一日成梦`}),r(`night-tears`,4,`想到方才摔玉，我的眼泪又悄悄落下来。袭人来宽慰，说宝玉原是这样的性情，劝我不必自责。我轻轻应了。`,`last-choice`,``,{scene:`night`}),i(`last-choice`,4,`窗外已静了。今日每一张面孔、每一句话，还在我心里轻轻回响。`,`合眼之前，我最想留住……`,[a(`外祖母握住我的那一点暖。`,`last-warm`,{warmth:1},`灯下留暖`),a(`那句“这个妹妹我曾见过”。`,`last-resonance`,{resonance:1},`枕畔念旧识`),a(`记下礼数，让明日从容一些。`,`last-reserve`,{reserve:1},`将心事细细收起`)]),t[`last-choice`].scene=`night`,r(`last-warm`,4,`我将被角轻轻拢好。这里还很陌生，可今日伸向我的那些手，也不全是我想象中的遥远。明日，也许可以再安心一点。`,`END`,``,{scene:`night`}),r(`last-resonance`,4,`我闭上眼，那人的眉眼却越发清楚。千里而来，在这层层门院中，竟有一声“相识”，落得这样近。`,`END`,``,{scene:`night`}),r(`last-reserve`,4,`我在心中把今日的称呼、座次、茶盏又过了一遍。若能将每一步走稳，许多不安，或许就不必让人看见。`,`END`,``,{scene:`night`});let o={familiar:{title:`一见如故`,index:`其三`,poem:`隔着千重门，认得旧时人。`,text:`我原以为，进了这道朱门，往后便只能处处留意、时时收敛。可他的那句“曾见过”，让我听见另一种可能。在这一日的谨慎与惊惧之间，我藏起了一份无人能解的熟悉。此后深宅漫长，至少今夜，有一盏灯是为相识而亮的。`},warm:{title:`此心稍安`,index:`其二`,poem:`身在异乡里，犹有一灯温。`,text:`母亲不在，父亲又远，我带着许多不敢说的惶惑来到这里。但外祖母的怀抱、姊妹的示意、旁人的一声宽慰，还是一点点落进心里。规矩仍有千重，我也仍会想家；只是今夜，我终于愿意相信，这里或许能给我一个慢慢安放心事的地方。`},careful:{title:`步步留心`,index:`其一`,poem:`满堂灯火里，一寸小心深。`,text:`这一日，我记住了许多称呼、座次与说话的分寸。有人怜我，有人迎我，也有人令我惊讶。越是繁华周全，我越怕自己失了礼数。我将想家的眼泪与初逢的心事一起收在枕边，盼着明日再走进这重重门院时，能比今日更从容一点。`}};function s(e){return e.resonance>=4?`familiar`:e.warmth>=4?`warm`:`careful`}return{version:1,chapters:e,nodes:t,endings:o,getEnding:s,start:`arrival`}})(),(()=>{let e=[{id:`baoyu`,name:`贾宝玉`,aliases:[`贾宝玉`,`宝玉`,`宝二爷`],src:`assets/baoyu.png`},{id:`jiamu`,name:`贾母`,aliases:[`外祖母`,`贾母`,`老太太`],src:`assets/jiamu.png`},{id:`fengjie`,name:`王熙凤`,aliases:[`王熙凤`,`凤姐姐`,`凤姐`,`熙凤`],src:`assets/fengjie.png`},{id:`baochai`,name:`薛宝钗`,aliases:[`薛宝钗`,`宝姐姐`,`宝钗`],src:`assets/baochai-memory.png`},{id:`zijuan`,name:`紫鹃`,aliases:[`紫鹃`,`鹦哥`],src:`assets/zijuan-memory.png`}];function t(t){if(!t||t.memory===!1||![`林黛玉`,`我`,`心中的黛玉`].includes(t.who))return[];let n=t.text||``;return e.filter(e=>e.id!==t.portrait).flatMap(e=>{let t=e.aliases.map(e=>({alias:e,index:n.indexOf(e)})).filter(e=>e.index>=0).sort((e,t)=>e.index-t.index||t.alias.length-e.alias.length);if(!t.length)return[];let r=t[0];return[{...e,at:Array.from(n.slice(0,r.index+r.alias.length)).length,start:r.index}]}).sort((e,t)=>e.start-t.start)}window.DREAM_MEMORIES={people:e,mentions:t},window.createMemoryEcho=({element:e,enabled:n,canAnimate:r,canShow:i})=>{let a=e.querySelector(`img`),o=e.querySelector(`[data-memory-name]`),s=e.closest(`.game`),c=[],l=[],u=0,d=!1,f=0,p=0,m=0,h=null;function g(){e.hidden=!0,s.classList.remove(`has-memory`)}function _(){u++,clearTimeout(p),clearTimeout(m),h?.cancel(),h=null,d=!1,l=[],c=[],g()}function v(){if(d||!l.length)return;if(!n()||!i()){_();return}let t=f-performance.now();if(t>0){clearTimeout(p),p=setTimeout(v,t);return}let c=l.shift(),y=u;d=!0,a.src=c.src;let b=()=>{if(y!==u)return;if(!n()||!i()){_();return}a.alt=c.name+`的忆影`,o.textContent=c.name,e.dataset.person=c.id,e.setAttribute(`aria-label`,`黛玉脑海中的`+c.name),e.hidden=!1,s.classList.add(`has-memory`);let t=r(),l=t?3600:3200;t&&(h=e.animate([{opacity:0,transform:`translateY(7px) scale(.98)`,filter:`blur(3px)`},{opacity:.9,transform:`translateY(0) scale(1)`,filter:`blur(0)`,offset:.22},{opacity:.9,transform:`translateY(0) scale(1)`,filter:`blur(0)`,offset:.7},{opacity:0,transform:`translateY(-5px) scale(1.01)`,filter:`blur(3px)`}],{duration:l,easing:`ease-in-out`})),m=setTimeout(()=>{y===u&&(g(),h?.cancel(),h=null,d=!1,p=setTimeout(v,400))},l)};a.decode?a.decode().then(b,()=>{y===u&&(d=!1,v())}):b()}function y(e,{delay:n=0}={}){_(),c=t(e).map(e=>({...e,sent:!1})),f=performance.now()+n}function b(e){if(n()&&i()){for(let t of c)!t.sent&&t.at<=e&&(t.sent=!0,l.push(t));v()}}return{prepare:y,reveal:b,clear:_}}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,F=33779,I=35840,ee=35841,te=35842,ne=35843,re=36196,ie=37492,ae=37496,oe=37488,L=37489,R=37490,se=37491,ce=37808,le=37809,ue=37810,de=37811,fe=37812,pe=37813,me=37814,he=37815,ge=37816,_e=37817,ve=37818,ye=37819,be=37820,xe=37821,Se=36492,Ce=36494,we=36495,Te=36283,Ee=36284,De=36285,Oe=36286,ke=2300,Ae=2301,z=2302,je=2303,Me=2400,Ne=2401,B=2402,Pe=3200,Fe=`srgb`,V=`srgb-linear`,Ie=`linear`,Le=`srgb`,Re=7680,ze=35044,Be=35048,Ve=2e3;function He(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ue(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function We(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ge(){let e=We(`canvas`);return e.style.display=`block`,e}var Ke={};function qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Je(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ye(...e){let t=e.join(` `);t in Ke||(Ke[t]=!0,H(...e))}function Xe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ze={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Qe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},$e=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),et=1234567,tt=Math.PI/180,nt=180/Math.PI;function rt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($e[e&255]+$e[e>>8&255]+$e[e>>16&255]+$e[e>>24&255]+`-`+$e[t&255]+$e[t>>8&255]+`-`+$e[t>>16&15|64]+$e[t>>24&255]+`-`+$e[n&63|128]+$e[n>>8&255]+`-`+$e[n>>16&255]+$e[n>>24&255]+$e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function it(e,t){return(e%t+t)%t}function at(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ot(e,t,n){return e===t?0:(n-e)/(t-e)}function st(e,t,n){return(1-n)*e+n*t}function ct(e,t,n,r){return st(e,t,1-Math.exp(-n*r))}function lt(e,t=1){return t-Math.abs(it(e,t*2)-t)}function ut(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ft(e,t){return e+Math.floor(Math.random()*(t-e+1))}function pt(e,t){return e+Math.random()*(t-e)}function mt(e){return e*(.5-Math.random())}function ht(e){e!==void 0&&(et=e);let t=et+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gt(e){return e*tt}function _t(e){return e*nt}function vt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function yt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function bt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function xt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function St(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ct(e,t){if(t.constructor===Float32Array)return e;let n=St(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function wt(e,t){if(t.constructor===Float32Array)return e;let n=St(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Tt={DEG2RAD:tt,RAD2DEG:nt,generateUUID:rt,clamp:W,euclideanModulo:it,mapLinear:at,inverseLerp:ot,lerp:st,damp:ct,pingpong:lt,smoothstep:ut,smootherstep:dt,randInt:ft,randFloat:pt,randFloatSpread:mt,seededRandom:ht,degToRad:gt,radToDeg:_t,isPowerOfTwo:vt,ceilPowerOfTwo:yt,floorPowerOfTwo:bt,setQuaternionFromProperEuler:xt,normalize:wt,denormalize:Ct},G=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dt.copy(this).projectOnVector(e),this.sub(Dt)}reflect(e){return this.sub(Dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dt=new K,Ot=new Et,q=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ye(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(kt.makeScale(e,t)),this}rotate(e){return Ye(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(kt.makeRotation(-e)),this}translate(e,t){return Ye(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(kt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kt=new q,At=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jt=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mt(){let e={enabled:!0,workingColorSpace:V,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Pt(e.r),e.g=Pt(e.g),e.b=Pt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ie:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[V]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),e}var Nt=Mt();function Pt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ft(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var It,Lt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{It===void 0&&(It=We(`canvas`)),It.width=e.width,It.height=e.height;let t=It.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=It}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=We(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pt(t[e]/255)*255):t[e]=Pt(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Rt=0,zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=rt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Bt(r[t].image)):e.push(Bt(r[t]))}else e=Bt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Bt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Lt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Vt=0,Ht=new K,Ut=class r extends Qe{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=rt(),this.name=``,this.source=new zt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ht).x}get height(){return this.source.getSize(Ht).y}get depth(){return this.source.getSize(Ht).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;var Wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gt=class extends Qe{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Ut({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Yt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Xt.setFromMatrixColumn(e,0).length(),i=1/Xt.setFromMatrixColumn(e,1).length(),a=1/Xt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qt,e,$t)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),en.crossVectors(n,nn),en.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),en.crossVectors(n,nn)),en.normalize(),tn.crossVectors(nn,en),r[0]=en.x,r[4]=tn.x,r[8]=nn.x,r[1]=en.y,r[5]=tn.y,r[9]=nn.y,r[2]=en.z,r[6]=tn.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Xt.set(r[0],r[1],r[2]).length(),o=Xt.set(r[4],r[5],r[6]).length(),s=Xt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Zt.copy(this);let c=1/a,l=1/o,u=1/s;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xt=new K,Zt=new Yt,Qt=new K(0,0,0),$t=new K(1,1,1),en=new K,tn=new K,nn=new K,rn=new Yt,an=new Et,on=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return an.setFromEuler(this),this.setFromQuaternion(an,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER=`XYZ`;var sn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},cn=0,ln=new K,un=new Et,dn=new Yt,fn=new K,pn=new K,mn=new K,hn=new Et,gn=new K(1,0,0),_n=new K(0,1,0),vn=new K(0,0,1),yn={type:`added`},bn={type:`removed`},xn={type:`childadded`,child:null},Sn={type:`childremoved`,child:null},Cn=class e extends Qe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=rt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new on,r=new Et,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new q}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(gn,e)}rotateY(e){return this.rotateOnAxis(_n,e)}rotateZ(e){return this.rotateOnAxis(vn,e)}translateOnAxis(e,t){return ln.copy(e).applyQuaternion(this.quaternion),this.position.add(ln.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gn,e)}translateY(e){return this.translateOnAxis(_n,e)}translateZ(e){return this.translateOnAxis(vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fn.copy(e):fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(pn,fn,this.up):dn.lookAt(fn,pn,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),un.setFromRotationMatrix(dn),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,e,mn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Cn.DEFAULT_UP=new K(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=it(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=Dn[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pt(e.r),this.g=Pt(e.g),this.b=Pt(e.b),this}copyLinearToSRGB(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Nt.workingToColorSpace(jn.copy(this),e),Math.round(W(jn.r*255,0,255))*65536+Math.round(W(jn.g*255,0,255))*256+Math.round(W(jn.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Fe){Nt.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=st(On.h,kn.h,t),r=st(On.s,kn.s,t),i=st(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new J;J.NAMES=Dn;var Mn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new J(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nn=class extends Cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new K,Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new Wt,Gn=new Wt,Kn=new Wt,qn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new K,new K,new K,new K,new K,new K,new K,new K],Xn=new K,Zn=new Jn,Qn=new K,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new K,ur=new G,dr=0,fr=class extends Qe{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:St(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Ct(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?wt(e,this.array):Math.round(e*t)}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Y=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},hr=new Jn,gr=new K,_r=new K,vr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?hr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(gr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(_r)),this.expandByPoint(gr.copy(e.center).sub(_r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yr=0,br=new Yt,xr=new Cn,Sr=new K,Cr=new Jn,wr=new Jn,Tr=new K,Er=class e extends Qe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=rt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(He(e)?mr:pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return br.makeRotationFromQuaternion(e),this.applyMatrix4(br),this}rotateX(e){return br.makeRotationX(e),this.applyMatrix4(br),this}rotateY(e){return br.makeRotationY(e),this.applyMatrix4(br),this}rotateZ(e){return br.makeRotationZ(e),this.applyMatrix4(br),this}translate(e,t,n){return br.makeTranslation(e,t,n),this.applyMatrix4(br),this}scale(e,t,n){return br.makeScale(e,t,n),this.applyMatrix4(br),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Y(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cr.setFromBufferAttribute(n),this.morphTargetsRelative?(Tr.addVectors(this.boundingBox.min,Cr.min),this.boundingBox.expandByPoint(Tr),Tr.addVectors(this.boundingBox.max,Cr.max),this.boundingBox.expandByPoint(Tr)):(this.boundingBox.expandByPoint(Cr.min),this.boundingBox.expandByPoint(Cr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Cr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Tr.addVectors(Cr.min,wr.min),Cr.expandByPoint(Tr),Tr.addVectors(Cr.max,wr.max),Cr.expandByPoint(Tr)):(Cr.expandByPoint(wr.min),Cr.expandByPoint(wr.max))}Cr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Tr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Tr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Tr.fromBufferAttribute(a,t),o&&(Sr.fromBufferAttribute(e,t),Tr.add(Sr)),r=Math.max(r,n.distanceToSquared(Tr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tr.fromBufferAttribute(e,t),Tr.normalize(),e.setXYZ(t,Tr.x,Tr.y,Tr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=new K,Or=new K,kr=new q,Ar=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Dr.subVectors(n,t).cross(Or.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Dr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kr.getNormalMatrix(e),r=this.coplanarPoint(Dr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jr=0,Mr=class extends Qe{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=rt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ar().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Nr=new K,Pr=new K,Fr=new K,Ir=new K,Lr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,t),Nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pr.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Pr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Ir.dot(this.direction),s=-Ir.dot(Fr),c=Ir.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pr).addScaledVector(Fr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Nr.subVectors(e.center,this.origin);let n=Nr.dot(this.direction),r=Nr.dot(Nr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,ee=T-P*D,te=E-F*D,ne=O-P*A,re=k-F*A,ie=j-P*N,ae=M-F*N,oe=ie*re-ae*ne,L=ee*ae-te*ie,R=ne*te-re*ee;if(r){if(oe<0||L<0||R<0)return null}else if((oe<0||L<0||R<0)&&(oe>0||L>0||R>0))return null;let se=oe+L+R;if(se===0)return null;let ce=I*(oe*D+L*A+R*N);return(se>0?ce<0:ce>0)?null:this.at(ce/se,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rr=class extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zr=new Yt,Br=new Lr,Vr=new vr,Hr=new K,Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=class extends Cn{constructor(e=new Er,t=new Rr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Kr.fromBufferAttribute(s,e),a?qr.addScaledVector(Kr,r):qr.addScaledVector(Kr.sub(t),r))}t.add(qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Br.copy(e.ray).recast(e.near),Vr.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Vr,Hr)===null||Br.origin.distanceToSquared(Hr)>(e.far-e.near)**2)||(zr.copy(i).invert(),Br.copy(e.ray).applyMatrix4(zr),(n.boundingBox===null||Br.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Zr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Yr.copy(s),Yr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Yr);return l<n.near||l>n.far?null:{distance:l,point:Yr.clone(),object:e}}function Qr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ur),e.getVertexPosition(c,Wr),e.getVertexPosition(l,Gr);let u=Zr(e,t,n,r,Ur,Wr,Gr,Jr);if(u){let e=new K;qn.getBarycoord(Jr,Ur,Wr,Gr,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};qn.getNormal(Ur,Wr,Gr,t.normal),u.face=t,u.barycoord=e}return u}var $r=class extends Ut{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=new vr,ti=new G(.5,.5),ni=new K,ri=class{constructor(e=new Ar,t=new Ar,n=new Ar,r=new Ar,i=new Ar,a=new Ar){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ve,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476+ti.distanceTo(e.center),ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ni.x=r.normal.x>0?e.max.x:e.min.x,ni.y=r.normal.y>0?e.max.y:e.min.y,ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ii=new Yt,ai=class e{constructor(){this.coordinateSystem=Ve,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ii.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ri),n[e].setFromProjectionMatrix(ii,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ri),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},oi=class extends Ut{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends Ut{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ci=class extends si{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},li=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ui=class e extends Er{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Y(c,3)),this.setAttribute(`normal`,new Y(l,3)),this.setAttribute(`uv`,new Y(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},di=class e extends Er{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Y(a,3)),this.setAttribute(`normal`,new Y(o,3)),this.setAttribute(`uv`,new Y(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fi=class e extends Er{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Y(u,3)),this.setAttribute(`normal`,new Y(d,3)),this.setAttribute(`uv`,new Y(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pi=class e extends Er{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Y(i,3)),this.setAttribute(`normal`,new Y(i.slice(),3)),this.setAttribute(`uv`,new Y(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},mi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new Yt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(W(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(W(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},hi=class extends mi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gi=class extends hi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function _i(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var vi=new K,yi=new K,bi=new _i,xi=new _i,Si=new _i,Ci=class extends mi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(yi.subVectors(r[0],r[1]).add(r[0]),c=yi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(vi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=vi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),bi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),xi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Si.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(bi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),xi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Si.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(bi.calc(s),xi.calc(s),Si.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ti(e,t){let n=1-e;return n*n*t}function Ei(e,t){return 2*(1-e)*e*t}function Di(e,t){return e*e*t}function Oi(e,t,n,r){return Ti(e,t)+Ei(e,n)+Di(e,r)}function ki(e,t){let n=1-e;return n*n*n*t}function Ai(e,t){let n=1-e;return 3*n*n*e*t}function ji(e,t){return 3*(1-e)*e*e*t}function Mi(e,t){return e*e*e*t}function Ni(e,t,n,r,i){return ki(e,t)+Ai(e,n)+ji(e,r)+Mi(e,i)}var Pi=class extends mi{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ni(e,r.x,i.x,a.x,o.x),Ni(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fi=class extends mi{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ni(e,r.x,i.x,a.x,o.x),Ni(e,r.y,i.y,a.y,o.y),Ni(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ii=class extends mi{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Li=class extends mi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ri=class extends mi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Oi(e,r.x,i.x,a.x),Oi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zi=class extends mi{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Oi(e,r.x,i.x,a.x),Oi(e,r.y,i.y,a.y),Oi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bi=class extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(wi(o,s.x,c.x,l.x,u.x),wi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},Vi=Object.freeze({__proto__:null,ArcCurve:gi,CatmullRomCurve3:Ci,CubicBezierCurve:Pi,CubicBezierCurve3:Fi,EllipseCurve:hi,LineCurve:Ii,LineCurve3:Li,QuadraticBezierCurve:Ri,QuadraticBezierCurve3:zi,SplineCurve:Bi}),Hi=class extends mi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Vi[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Vi[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Ui=class extends Hi{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ii(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ri(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Pi(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Bi([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new hi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wi=class extends Ui{constructor(e){super(e),this.uuid=rt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ui().fromJSON(n))}return this}};function Gi(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ki(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=$i(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ji(a,o,n,s,c,l,0),o}function Ki(e,t,n,r,i){let a;if(i===Ca(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=ba(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=ba(i/r|0,e[i],e[i+1],a);return a&&fa(a,a.next)&&(xa(a),a=a.next),a}function qi(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(fa(n,n.next)||da(n.prev,n,n.next)===0)){if(xa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ji(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ia(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Xi(e,r,i,a):Yi(e))t.push(c.i,e.i,l.i),xa(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Zi(qi(e),t),Ji(e,t,n,r,i,a,2)):o===2&&Qi(e,t,n,r,i,a):Ji(qi(e),t,n,r,i,a,1);break}}}function Yi(e){let t=e.prev,n=e,r=e.next;if(da(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&la(i,s,a,c,o,l,m.x,m.y)&&da(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xi(e,t,n,r){let i=e.prev,a=e,o=e.next;if(da(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=oa(p,m,t,n,r),v=oa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&la(s,u,c,d,l,f,y.x,y.y)&&da(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&la(s,u,c,d,l,f,b.x,b.y)&&da(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&la(s,u,c,d,l,f,y.x,y.y)&&da(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&la(s,u,c,d,l,f,b.x,b.y)&&da(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Zi(e,t){let n=e;do{let r=n.prev,i=n.next.next;!fa(r,i)&&pa(r,n,n.next,i)&&_a(r,i)&&_a(i,r)&&(t.push(r.i,n.i,i.i),xa(n),xa(n.next),n=e=i),n=n.next}while(n!==e);return qi(n)}function Qi(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ua(o,e)){let s=ya(o,e);o=qi(o,o.next),s=qi(s,s.next),Ji(o,t,n,r,i,a,0),Ji(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function $i(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ki(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(sa(o))}i.sort(ea);for(let e=0;e<i.length;e++)n=ta(i[e],n);return n}function ea(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ta(e,t){let n=na(e,t);if(!n)return t;let r=ya(n,e);return qi(r,r.next),qi(n,n.next)}function na(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(fa(e,n))return n;do{if(fa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ca(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);_a(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ra(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ra(e,t){return da(e.prev,e,t.prev)<0&&da(t.next,e,e.next)<0}function ia(e,t,n,r){let i=e;do i.z===0&&(i.z=oa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,aa(i)}function aa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function oa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function sa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ca(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function la(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ca(e,t,n,r,i,a,o,s)}function ua(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ga(e,t)&&(_a(e,t)&&_a(t,e)&&va(e,t)&&(da(e.prev,e,t.prev)||da(e,t.prev,t))||fa(e,t)&&da(e.prev,e,e.next)>0&&da(t.prev,t,t.next)>0)}function da(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function fa(e,t){return e.x===t.x&&e.y===t.y}function pa(e,t,n,r){let i=ha(da(e,t,n)),a=ha(da(e,t,r)),o=ha(da(n,r,e)),s=ha(da(n,r,t));return!!(i!==a&&o!==s||i===0&&ma(e,n,t)||a===0&&ma(e,r,t)||o===0&&ma(n,e,r)||s===0&&ma(n,t,r))}function ma(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ha(e){return e>0?1:e<0?-1:0}function ga(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&pa(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function _a(e,t){return da(e.prev,e,e.next)<0?da(e,t,e.next)>=0&&da(e,e.prev,t)>=0:da(e,t,e.prev)<0||da(e,e.next,t)<0}function va(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ya(e,t){let n=Sa(e.i,e.x,e.y),r=Sa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ba(e,t,n,r){let i=Sa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function xa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Sa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ca(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var wa=class{static triangulate(e,t,n=2){return Gi(e,t,n)}},Ta=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ea(e),Da(n,e);let a=e.length;t.forEach(Ea);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Da(n,t[e]);let o=wa.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ea(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Da(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Oa=class e extends Er{constructor(e=new Wi([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Y(r,3)),this.setAttribute(`uv`,new Y(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?ka:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ta.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ta.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||U(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=Ta.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ie(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ie(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=Ta.triangulateShape(e,t)}let I=F.length,ee=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ie(x.x,x.y,x.z)):ie(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ie(x.x,x.y,x.z)):ie(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ie(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ie(i.x,i.y+g[s-1].y,g[s-1].x+n):ie(i.x,i.y,c+n)}}}te(),ne();function te(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];ae(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];ae(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];ae(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];ae(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ne(){let e=r.length/3,t=0;re(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);oe(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ie(e,t,n){a.push(e),a.push(t),a.push(n)}function ae(e,t,i){L(e),L(t),L(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);R(o[0]),R(o[1]),R(o[2])}function oe(e,t,i,a){L(e),L(t),L(a),L(t),L(i),L(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);R(s[0]),R(s[1]),R(s[3]),R(s[1]),R(s[2]),R(s[3])}function L(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function R(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Aa(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Vi[i.type]().fromJSON(i)),new e(r,t.options)}},ka={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function Aa(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var ja=class e extends pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ma=class e extends Er{constructor(e=[new G(0,-.5),new G(.5,0),new G(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=W(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new K,d=new G,f=new K,p=new K,m=new K,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Y(a,3)),this.setAttribute(`uv`,new Y(o,2)),this.setAttribute(`normal`,new Y(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Na=class e extends Er{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Y(p,3)),this.setAttribute(`normal`,new Y(m,3)),this.setAttribute(`uv`,new Y(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Pa=class e extends Er{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Y(s,3)),this.setAttribute(`normal`,new Y(c,3)),this.setAttribute(`uv`,new Y(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Fa=class e extends Er{constructor(e=new Wi([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Y(r,3)),this.setAttribute(`normal`,new Y(i,3)),this.setAttribute(`uv`,new Y(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Ta.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Ta.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Ta.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ia(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ia(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var La=class e extends Er{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Y(c,3)),this.setAttribute(`normal`,new Y(l,3)),this.setAttribute(`uv`,new Y(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ra=class e extends Er{constructor(e=new zi(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new K,s=new K,c=new G,l=new K,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Y(u,3)),this.setAttribute(`normal`,new Y(d,3)),this.setAttribute(`uv`,new Y(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Vi[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function za(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Va(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Va(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ba(e){let t={};for(let n=0;n<e.length;n++){let r=za(e[n]);for(let e in r)t[e]=r[e]}return t}function Va(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ha(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ua(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}var Wa={clone:za,merge:Ba},Ga=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ka=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qa=class extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ga,this.fragmentShader=Ka,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=Ha(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new J().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Wt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ja=class extends qa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ya=class extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xa=class extends Ya{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return W(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new J(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new J(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new J(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ye(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ye(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Za=class extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qa=class extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $a(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function eo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var to=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},no=class extends to{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Me,endingEnd:Me}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case B:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case B:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ro=class extends to{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},io=class extends to{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ao=class extends to{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=co(n,t,g,y,r);i[p]=oo(x,o,_,b,m)}return i}};function oo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function so(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function co(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=oo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=so(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var lo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),eo(e.settings)&&(n.settings={inTangents:$a(e.settings.inTangents,Array),outTangents:$a(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ao(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ke:t=this.InterpolantFactoryMethodDiscrete;break;case Ae:t=this.InterpolantFactoryMethodLinear;break;case z:t=this.InterpolantFactoryMethodSmooth;break;case je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ke;case this.InterpolantFactoryMethodLinear:return Ae;case this.InterpolantFactoryMethodSmooth:return z;case this.InterpolantFactoryMethodBezier:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;eo(this.settings)&&(uo(this.settings.inTangents,e),uo(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;eo(this.settings)&&(fo(this.settings.inTangents,e),fo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ue(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===z,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,eo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function uo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function fo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}lo.prototype.ValueTypeName=``,lo.prototype.TimeBufferType=Float32Array,lo.prototype.ValueBufferType=Float32Array,lo.prototype.DefaultInterpolation=Ae;var po=class extends lo{constructor(e,t,n){super(e,t,n)}};po.prototype.ValueTypeName=`bool`,po.prototype.ValueBufferType=Array,po.prototype.DefaultInterpolation=ke,po.prototype.InterpolantFactoryMethodLinear=void 0,po.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}};mo.prototype.ValueTypeName=`color`;var ho=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}};ho.prototype.ValueTypeName=`number`;var go=class extends to{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Et.slerpFlat(i,0,a,c-o,a,c,s);return i}},_o=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}};_o.prototype.ValueTypeName=`quaternion`,_o.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends lo{constructor(e,t,n){super(e,t,n)}};vo.prototype.ValueTypeName=`string`,vo.prototype.ValueBufferType=Array,vo.prototype.DefaultInterpolation=ke,vo.prototype.InterpolantFactoryMethodLinear=void 0,vo.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}};yo.prototype.ValueTypeName=`vector`;var bo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(xo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!xo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function xo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var So=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Co=class{constructor(e){this.manager=e===void 0?So:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var wo=new WeakMap,To=class extends Co{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=bo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=wo.get(a);e===void 0&&(e=[],wo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=We(`img`);function s(){l(),t&&t(this);let n=wo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}wo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),bo.remove(`image:${e}`);let n=wo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}wo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bo.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Eo=class extends Co{constructor(e){super(e)}load(e,t,n,r){let i=new Ut,a=new To(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Do=class extends Cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new J(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Oo=class extends Do{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ko=new Yt,Ao=new K,jo=new K,Mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ao),jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ko,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},No=new K,Po=new Et,Fo=new K,Io=class extends Cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ve,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(No,Po,Fo),Fo.x===1&&Fo.y===1&&Fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Po,Fo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(No,Po,Fo),Fo.x===1&&Fo.y===1&&Fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Po,Fo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Lo=new K,Ro=new G,zo=new G,Bo=class extends Io{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nt*2*Math.atan(Math.tan(tt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lo.x,Lo.y).multiplyScalar(-e/Lo.z),Lo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lo.x,Lo.y).multiplyScalar(-e/Lo.z)}getViewSize(e,t){return this.getViewBounds(e,Ro,zo),t.subVectors(zo,Ro)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vo=class extends Io{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ho=class extends Mo{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Ho}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wo=-90,Go=1,Ko=class extends Cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bo(Wo,Go,e,t);r.layers=this.layers,this.add(r);let i=new Bo(Wo,Go,e,t);i.layers=this.layers,this.add(i);let a=new Bo(Wo,Go,e,t);a.layers=this.layers,this.add(a);let o=new Bo(Wo,Go,e,t);o.layers=this.layers,this.add(o);let s=new Bo(Wo,Go,e,t);s.layers=this.layers,this.add(s);let c=new Bo(Wo,Go,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},qo=class extends Bo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Jo=`\\[\\]\\.:\\/`,Yo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Xo=`[^\\[\\]\\.:\\/]`,Zo=`[^`+Jo.replace(`\\.`,``)+`]`,Qo=`((?:WC+[\\/:])*)`.replace(`WC`,Xo),$o=`(WCOD+)?`.replace(`WCOD`,Zo),es=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Xo),ts=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Xo),ns=RegExp(`^`+Qo+$o+es+ts+`$`),rs=[`material`,`materials`,`bones`,`map`],is=class{constructor(e,t,n){let r=n||as.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},as=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Yo,``)}static parseTrackName(e){let t=ns.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);rs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};as.Composite=is,as.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},as.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},as.prototype.GetterByBindingType=[as.prototype._getValue_direct,as.prototype._getValue_array,as.prototype._getValue_arrayElement,as.prototype._getValue_toArray],as.prototype.SetterByBindingTypeAndVersioning=[[as.prototype._setValue_direct,as.prototype._setValue_direct_setNeedsUpdate,as.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[as.prototype._setValue_array,as.prototype._setValue_array_setNeedsUpdate,as.prototype._setValue_array_setMatrixWorldNeedsUpdate],[as.prototype._setValue_arrayElement,as.prototype._setValue_arrayElement_setNeedsUpdate,as.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[as.prototype._setValue_fromArray,as.prototype._setValue_fromArray_setNeedsUpdate,as.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var os=new Yt,ss=class{constructor(e,t,n=0,r=1/0){this.ray=new Lr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return os.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(os),this}intersectObject(e,t=!0,n=[]){return ls(e,this,n,t),n.sort(cs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)ls(e[r],this,n,t);return n.sort(cs),n}};function cs(e,t){return e.distance-t.distance}function ls(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)ls(r[e],t,n,!0)}}var us=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,H(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var ds=new K,fs=new K,ps=new K,ms=new K,hs=new K,gs=new K,_s=new K,vs=class{constructor(e=new K,t=new K){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ds.subVectors(e,this.start),fs.subVectors(this.end,this.start);let n=fs.dot(fs);if(n===0)return 0;let r=fs.dot(ds)/n;return t&&(r=W(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=gs,n=_s){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;ps.subVectors(c,o),ms.subVectors(l,s),hs.subVectors(o,s);let u=ps.dot(ps),d=ms.dot(ms),f=ms.dot(hs);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.distanceToSquared(n);if(u<=r)i=0,a=f/d,a=W(a,0,1);else{let e=ps.dot(hs);if(d<=r)a=0,i=W(-e/u,0,1);else{let t=ps.dot(ms),n=u*d-t*t;i=n===0?0:W((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=W(-e/u,0,1)):a>1&&(a=1,i=W((t-e)/u,0,1))}}return t.copy(o).addScaledVector(ps,i),n.copy(s).addScaledVector(ms,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function ys(e,t,n,r){let i=bs(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ee:case ne:return Math.max(e,16)*Math.max(t,8)/4;case I:case te:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case oe:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case R:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Se:case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function bs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function xs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ss(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Cs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},ws={basic:{uniforms:Ba([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Cs.meshbasic_vert,fragmentShader:Cs.meshbasic_frag},lambert:{uniforms:Ba([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:Cs.meshlambert_vert,fragmentShader:Cs.meshlambert_frag},phong:{uniforms:Ba([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Cs.meshphong_vert,fragmentShader:Cs.meshphong_frag},standard:{uniforms:Ba([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Cs.meshphysical_vert,fragmentShader:Cs.meshphysical_frag},toon:{uniforms:Ba([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Cs.meshtoon_vert,fragmentShader:Cs.meshtoon_frag},matcap:{uniforms:Ba([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Cs.meshmatcap_vert,fragmentShader:Cs.meshmatcap_frag},points:{uniforms:Ba([X.points,X.fog]),vertexShader:Cs.points_vert,fragmentShader:Cs.points_frag},dashed:{uniforms:Ba([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Cs.linedashed_vert,fragmentShader:Cs.linedashed_frag},depth:{uniforms:Ba([X.common,X.displacementmap]),vertexShader:Cs.depth_vert,fragmentShader:Cs.depth_frag},normal:{uniforms:Ba([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Cs.meshnormal_vert,fragmentShader:Cs.meshnormal_frag},sprite:{uniforms:Ba([X.sprite,X.fog]),vertexShader:Cs.sprite_vert,fragmentShader:Cs.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Cs.background_vert,fragmentShader:Cs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Cs.backgroundCube_vert,fragmentShader:Cs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Cs.cube_vert,fragmentShader:Cs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Cs.equirect_vert,fragmentShader:Cs.equirect_frag},distance:{uniforms:Ba([X.common,X.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Cs.distance_vert,fragmentShader:Cs.distance_frag},shadow:{uniforms:Ba([X.lights,X.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Cs.shadow_vert,fragmentShader:Cs.shadow_frag}};ws.physical={uniforms:Ba([ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Cs.meshphysical_vert,fragmentShader:Cs.meshphysical_frag};var Ts={r:0,b:0,g:0},Es=new Yt,Ds=new q;Ds.set(-1,0,0,0,1,0,0,0,1);function Os(e,t,n,r,i,a){let o=new J(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Xr(new ui(1,1,1),new qa({name:`BackgroundCubeMaterial`,uniforms:za(ws.backgroundCube.uniforms),vertexShader:ws.backgroundCube.vertexShader,fragmentShader:ws.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Es.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ds),l.material.toneMapped=Nt.getTransfer(i.colorSpace)!==Le,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Xr(new Na(2,2),new qa({name:`BackgroundMaterial`,uniforms:za(ws.background.uniforms),vertexShader:ws.background.vertexShader,fragmentShader:ws.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(i.colorSpace)!==Le,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ts,Ua(e)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ks(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function As(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function js(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&H(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ms(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ar,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ns=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ui(5,5,5),i=new qa({name:`CubemapFromEquirect`,uniforms:za(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Xr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Ko(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ps=256,Fs=3,Is=20,Ls=256,Rs=16,zs=3,Bs=new K,Vs=new J,Hs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ko(1,10,null),this._boxMesh=new Xr(new ui(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Bs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Vs));let h=new Ko(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Js(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ps,bt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ps:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Us(e,!1,!1),n=Math.log2(e)-Fs;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Us(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ys()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Js()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gs(),this._integrationMaterial=Ks());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Rs);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-zs)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Ls*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=qs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Us(e,t,n){return new Ns(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:V,depthBuffer:n})}function Ws(e,t,n){return new qa({name:e,uniforms:t,vertexShader:Cs.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Gs(){return Ws(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ls}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ks(){return Ws(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rs}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qs(){return Ws(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Is}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Js(){return Ws(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ys(){return Ws(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ns(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Hs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Hs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Zs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ye(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Qs(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?mr:pr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function $s(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ec(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function tc(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new qt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new G(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function nc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var rc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ic(e,t,n,r,i,a){let o=new Kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Er;u.setAttribute(`position`,new Y([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Y([0,2,0,0,2,0],2));let d=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Xr(u,d),p=new Vo(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new si(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Nt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=rc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var ac=new Ut,oc=new si(1,1),sc=new ci(1),cc=new qt,lc=new Jt,uc=new oi,dc=[],fc=[],pc=new Float32Array(16),mc=new Float32Array(9),hc=new Float32Array(4);function gc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=dc[i];if(a===void 0&&(a=new Float32Array(i),dc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function _c(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function vc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function yc(e,t){let n=fc[t];n===void 0&&(n=new Int32Array(t),fc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_c(n,t))return;e.uniform2fv(this.addr,t),vc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_c(n,t))return;e.uniform3fv(this.addr,t),vc(n,t)}}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_c(n,t))return;e.uniform4fv(this.addr,t),vc(n,t)}}function wc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_c(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),vc(n,t)}else{if(_c(n,r))return;hc.set(r),e.uniformMatrix2fv(this.addr,!1,hc),vc(n,r)}}function Tc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_c(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),vc(n,t)}else{if(_c(n,r))return;mc.set(r),e.uniformMatrix3fv(this.addr,!1,mc),vc(n,r)}}function Ec(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_c(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),vc(n,t)}else{if(_c(n,r))return;pc.set(r),e.uniformMatrix4fv(this.addr,!1,pc),vc(n,r)}}function Dc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_c(n,t))return;e.uniform2iv(this.addr,t),vc(n,t)}}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_c(n,t))return;e.uniform3iv(this.addr,t),vc(n,t)}}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_c(n,t))return;e.uniform4iv(this.addr,t),vc(n,t)}}function jc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_c(n,t))return;e.uniform2uiv(this.addr,t),vc(n,t)}}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_c(n,t))return;e.uniform3uiv(this.addr,t),vc(n,t)}}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_c(n,t))return;e.uniform4uiv(this.addr,t),vc(n,t)}}function Fc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Ic(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Fc(oc):ac,n.setTexture2D(t||a,i)}function Lc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||lc,i)}function Rc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Fc(sc):uc,n.setTextureCube(t||a,i)}function zc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||cc,i)}function Bc(e){switch(e){case 5126:return bc;case 35664:return xc;case 35665:return Sc;case 35666:return Cc;case 35674:return wc;case 35675:return Tc;case 35676:return Ec;case 5124:case 35670:return Dc;case 35667:case 35671:return Oc;case 35668:case 35672:return kc;case 35669:case 35673:return Ac;case 5125:return jc;case 36294:return Mc;case 36295:return Nc;case 36296:return Pc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ic;case 35679:case 36299:case 36307:return Lc;case 35680:case 36300:case 36308:case 36293:return Rc;case 36289:case 36303:case 36311:case 36292:return zc}}function Vc(e,t){e.uniform1fv(this.addr,t)}function Hc(e,t){let n=gc(t,this.size,2);e.uniform2fv(this.addr,n)}function Uc(e,t){let n=gc(t,this.size,3);e.uniform3fv(this.addr,n)}function Wc(e,t){let n=gc(t,this.size,4);e.uniform4fv(this.addr,n)}function Gc(e,t){let n=gc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Kc(e,t){let n=gc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qc(e,t){let n=gc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Jc(e,t){e.uniform1iv(this.addr,t)}function Yc(e,t){e.uniform2iv(this.addr,t)}function Xc(e,t){e.uniform3iv(this.addr,t)}function Zc(e,t){e.uniform4iv(this.addr,t)}function Qc(e,t){e.uniform1uiv(this.addr,t)}function $c(e,t){e.uniform2uiv(this.addr,t)}function el(e,t){e.uniform3uiv(this.addr,t)}function tl(e,t){e.uniform4uiv(this.addr,t)}function nl(e,t,n){let r=this.cache,i=t.length,a=yc(n,i);_c(r,a)||(e.uniform1iv(this.addr,a),vc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Fc(oc):ac;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function rl(e,t,n){let r=this.cache,i=t.length,a=yc(n,i);_c(r,a)||(e.uniform1iv(this.addr,a),vc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||lc,a[e])}function il(e,t,n){let r=this.cache,i=t.length,a=yc(n,i);_c(r,a)||(e.uniform1iv(this.addr,a),vc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Fc(sc):uc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function al(e,t,n){let r=this.cache,i=t.length,a=yc(n,i);_c(r,a)||(e.uniform1iv(this.addr,a),vc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||cc,a[e])}function ol(e){switch(e){case 5126:return Vc;case 35664:return Hc;case 35665:return Uc;case 35666:return Wc;case 35674:return Gc;case 35675:return Kc;case 35676:return qc;case 5124:case 35670:return Jc;case 35667:case 35671:return Yc;case 35668:case 35672:return Xc;case 35669:case 35673:return Zc;case 5125:return Qc;case 36294:return $c;case 36295:return el;case 36296:return tl;case 35678:case 36198:case 36298:case 36306:case 35682:return nl;case 35679:case 36299:case 36307:return rl;case 35680:case 36300:case 36308:case 36293:return il;case 36289:case 36303:case 36311:case 36292:return al}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bc(t.type)}},cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ol(t.type)}},ll=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ul=/(\w+)(\])?(\[|\.)?/g;function dl(e,t){e.seq.push(t),e.map[t.id]=t}function fl(e,t,n){let r=e.name,i=r.length;for(ul.lastIndex=0;;){let a=ul.exec(r),o=ul.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){dl(n,l===void 0?new sl(s,e,t):new cl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ll(s),dl(n,e)),n=e}}}var pl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);fl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ml(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var hl=37297,gl=0;function _l(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var vl=new q;function yl(e){Nt._getMatrix(vl,Nt.workingColorSpace,e);let t=`mat3( ${vl.elements.map(e=>e.toFixed(4))} )`;switch(Nt.getTransfer(e)){case Ie:return[t,`LinearTransferOETF`];case Le:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function bl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+_l(e.getShaderSource(t),r)}return i}function xl(e,t){let n=yl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Sl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Cl(e,t){let n=Sl[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var wl=new K;function Tl(){return Nt.getLuminanceCoefficients(wl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${wl.x.toFixed(4)}, ${wl.y.toFixed(4)}, ${wl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function El(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(kl).join(`
`)}function Dl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ol(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function kl(e){return e!==``}function Al(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function jl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ml=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(e){return e.replace(Ml,Pl)}function Pl(e,t){let n=Cs[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Nl(n)}var Fl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(e){return e.replace(Fl,Ll)}function Ll(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Rl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var zl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Bl(e){return zl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Vl={302:`ENVMAP_MODE_REFRACTION`};function Hl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Vl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ul={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Wl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ul[e.combine]||`ENVMAP_BLENDING_NONE`}function Gl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Bl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Hl(n),d=Wl(n),f=El(n),p=Dl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(kl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(kl).join(`
`),g.length>0&&(g+=`
`)):(h=[Rl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(kl).join(`
`),g=[Rl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Cs.tonemapping_pars_fragment,n.toneMapping===0?``:Cl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Cs.colorspace_pars_fragment,xl(`linearToOutputTexel`,n.outputColorSpace),Tl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(kl).join(`
`)),o=Nl(o),o=Al(o,n),o=jl(o,n),s=Nl(s),s=Al(s,n),s=jl(s,n),o=Il(o),s=Il(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=ml(i,i.VERTEX_SHADER,v),x=ml(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=bl(i,b,`vertex`),n=bl(i,x,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new pl(i,m),w=Ol(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,hl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Kl=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jl(e),t.set(e,n)),n}},Jl=class{constructor(e){this.id=Kl++,this.code=e,this.usedTimes=0}};function Yl(e){return e===1030||e===37490||e===36285}function Xl(e,t,n,r,i,a){let o=new sn,s=new ql,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ws[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,ee=I&&b.isPMREMTexture===!0,te=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,R=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.diffuseRoughness>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=se&&!!i.anisotropyMap,ge=ce&&!!i.clearcoatMap,_e=ce&&!!i.clearcoatNormalMap,ve=ce&&!!i.clearcoatRoughnessMap,ye=le&&!!i.diffuseRoughnessMap,be=fe&&!!i.iridescenceMap,xe=fe&&!!i.iridescenceThicknessMap,Se=pe&&!!i.sheenColorMap,Ce=pe&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=me&&!!i.transmissionMap,Oe=me&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,z=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let B=ee?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Pe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:ee,envMapMaxLod:ee?B.length-1:null,envMapSize:ee?B[0].width:null,aoMap:te,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Yl(i.normalMap.format),metalnessMap:L,roughnessMap:R,anisotropy:se,anisotropyMap:he,clearcoat:ce,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,diffuseRoughness:le,diffuseRoughnessMap:ye,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:pe,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:me,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:z,alphaHash:je,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:te&&p(i.aoMap.channel),lightMapUv:ne&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:ae&&p(i.displacementMap.channel),emissiveMapUv:oe&&p(i.emissiveMap.channel),metalnessMapUv:L&&p(i.metalnessMap.channel),roughnessMapUv:R&&p(i.roughnessMap.channel),anisotropyMapUv:he&&p(i.anisotropyMap.channel),clearcoatMapUv:ge&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:be&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(i.sheenRoughnessMap.channel),specularMapUv:we&&p(i.specularMap.channel),specularColorMapUv:Te&&p(i.specularColorMap.channel),specularIntensityMapUv:Ee&&p(i.specularIntensityMap.channel),transmissionMapUv:De&&p(i.transmissionMap.channel),thicknessMapUv:Oe&&p(i.thicknessMap.channel),alphaMapUv:Ae&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||se),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Nt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ws[t];n=Wa.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Gl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Zl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ql(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $l(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function eu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ql),r.length>1&&r.sort(t||$l),i.length>1&&i.sort(t||$l)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function tu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new eu,e.set(t,[i])):n>=r.length?(i=new eu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new J};break;case`SpotLight`:n={position:new K,direction:new K,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function ru(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var iu=0;function au(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ou(e){let t=new nu,n=ru(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Yt,o=new Yt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(au);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=iu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function su(e){let t=new ou(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function cu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new su(e),t.set(n,[a])):r>=i.length?(a=new su(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var lu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,du=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],fu=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],pu=new Yt,mu=new K,hu=new K;function gu(e,t,n){let i=new ri,a=new G,s=new G,c=new Wt,l=new Za,u=new Qa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:lu,fragmentShader:uu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Er;y.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Xr(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Kt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new si(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Ns(a.x),p.map.depthTexture=new ci(a.x,m)):(p.map=new Kt(a.x,a.y),p.map.depthTexture=new si(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),mu.setFromMatrixPosition(d.matrixWorld),e.position.copy(mu),hu.copy(e.position),hu.add(du[t]),e.up.copy(fu[t]),e.lookAt(hu),e.updateMatrixWorld(),n.makeTranslation(-mu.x,-mu.y,-mu.z),pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(pu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Kt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function _u(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):R(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ze[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):R(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Wt().fromArray(te),ie=new Wt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),L(e.CULL_FACE),fe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function R(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(R(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?R(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):R(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?R(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):R(e.POLYGON_OFFSET_FILL)}function ve(t){t?L(e.SCISSOR_TEST):R(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function be(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function xe(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function B(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function V(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:R,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:z,pixelStorei:Me,getParameter:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:B,reset:V}}function vu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):We(`canvas`)}function O(e,t,n){let r=1,i=V(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function j(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function M(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ie:Nt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function N(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function P(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function I(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ee(e){ne(e.target)}function te(e){re(e.target)}function ne(e){e.removeEventListener(`dispose`,ee),I(e),ae(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function re(e){e.removeEventListener(`dispose`,te),I(e),L(e)}function ie(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?re(t):ne(t))}C.clear(),b.clear()}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&oe(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function oe(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function L(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ne(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let R=0;function se(){R=0}function ce(){return R}function le(e){R=e}function ue(){let e=R;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),R+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(e,t){let n=f.get(e);if(e.isVideoTexture&&Pe(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function me(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?we(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ge={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},_e={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ve={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ye(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ge[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ge[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ge[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,_e[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,_e[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ve[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function be(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee),F(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&oe(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=xe(r.start,t.width,4),c=xe(n.start,t.width,4);r.start<=o+1&&s===c&&xe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Ce(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=be(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Nt.getPrimaries(Nt.workingColorSpace),n=t.colorSpace===``?null:Nt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Fe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=M(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ye(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=P(t,e);if(t.isDepthTexture)u=N(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Se(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ys(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ys(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=V(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=V(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n){if(t.image.length!==6)return;let r=be(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Nt.getPrimaries(Nt.workingColorSpace),o=t.colorSpace===``?null:Nt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Fe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=M(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=P(t,h);ye(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=N(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=V(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=M(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=N(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=M(i.internalFormat,a,o,i.normalized,i.colorSpace);B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function De(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?he(t.depthTexture,0):fe(t.depthTexture,0);let o=i.__webglTexture,s=Ne(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)De(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?De(t.__webglFramebuffer[0],e,0):De(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ee(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ee(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(e,t,n){let r=f.get(e);t!==void 0&&Te(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Oe(e)}function Ae(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,te),F(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&B(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=M(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ee(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Te(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ye(o,r),Te(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ye(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Te(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Oe(e)}function z(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let je=[];function Me(e){if(e.samples>0){if(B(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&je.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function B(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Pe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Nt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=B,this.dispose=ie}function yu(e,t){function n(n,r=``){let i,a=Nt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var bu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new li(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qa({vertexShader:bu,fragmentShader:xu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xr(new Na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cu=class extends Qe{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Su,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new G,k=null,A=null,j=new Bo;j.viewport=new Wt;let M=new Bo;M.viewport=new Wt;let N=[j,M],P=new qo,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getHandSpace()};function ee(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Kt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new si(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Kt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;re(P,i);for(let e=0;e<a.length;e++)re(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,P,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=nt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new Bo,o.layers.enable(n),o.viewport=new Wt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new li,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let L=new xs;L.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},wu=new Yt,Tu=new q;Tu.set(-1,0,0,0,1,0,0,0,1);function Eu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ua(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(wu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Tu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Du(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Ou=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ku=null;function Au(){return ku===null&&(ku=new $r(Ou,16,16,k,g),ku.name=`DFG_LUT`,ku.minFilter=o,ku.magFilter=o,ku.wrapS=t,ku.wrapT=t,ku.generateMipmaps=!1,ku.needsUpdate=!0),ku}var ju=class{constructor(e={}){let{canvas:t=Ge(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,M=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,ee=!1,te=null,ne=null,re=null,ie=null;this._outputColorSpace=Fe;let ae=0,oe=0,L=null,R=-1,se=null,ce=new Wt,le=new Wt,ue=null,de=new J(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Wt(0,0,pe,me),ye=new Wt(0,0,pe,me),be=!1,xe=new ri,Se=new ai,Ce=!1,we=!1,Te=new Yt,Ee=new K,De=new Wt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return L===null?he:1}let z=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,B,Pe,V,Ie,Le,Re,ze,Be,He,Ue,We,Ke,Je,Ye,Ze,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),z===null){let t=`webgl2`;if(z=je(t,e),z===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}W()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),U(`WebGLRenderer: `+e.message),e}function W(){Me=new Zs(z),Me.init(),tt=new yu(z,Me),Ne=new js(z,Me,e,tt),B=new _u(z,Me),Ne.reversedDepthBuffer&&h&&B.buffers.depth.setReversed(!0),ne=z.createFramebuffer(),re=z.createFramebuffer(),ie=z.createFramebuffer(),Pe=new ec(z),V=new Zl,Ie=new vu(z,Me,B,V,Ne,tt,Pe),Le=new Xs(I),Re=new Ss(z),nt=new ks(z,Re),ze=new Qs(z,Re,Pe,nt),Be=new nc(z,ze,Re,nt,Pe),Qe=new tc(z,Ne,Ie),Je=new Ms(V),He=new Xl(I,Le,Me,Ne,nt,Je),Ue=new Eu(I,V),We=new tu,Ke=new cu(Me),Ze=new Os(I,Le,B,Be,x,s),Ye=new gu(I,Be,Ne),rt=new Du(z,Pe,Ne,B),$e=new As(z,Me,Pe),et=new $s(z,Me,Pe),Pe.programs=He.programs,I.capabilities=Ne,I.extensions=Me,I.properties=V,I.renderLists=We,I.shadowMap=Ye,I.state=B,I.info=Pe}S!==1009&&(F=new ic(S,t.width,t.height,o,r,i));let it=new Cu(I,z);this.xr=it,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){it.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ce.copy(ve).multiplyScalar(Ae()).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Ze.dispose(),We.dispose(),Ke.dispose(),Ie.dispose(),V.dispose(),Le.dispose(),Be.dispose(),ze.dispose(),nt.dispose(),rt.dispose(),He.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,mt),it.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),qe(`WebGLRenderer: Context Lost.`),ee=!0}function ot(){qe(`WebGLRenderer: Context Restored.`),ee=!1;let e=Pe.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;W(),Pe.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),V.remove(e)}function ut(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Re.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){te!==null&&e.isNodeMaterial&&te.setObject(r,e),Ce===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),te!==null&&te.renderStart(e,t,n),M=Ke.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),te!==null&&te.updateLights(M.state.lightsArray),we=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,we),Ce===!0&&Je.setGlobalState(this.clippingPlanes,t),te!==null&&Ye.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),M=P.pop(),te!==null&&te.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new xs;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?gt.stop():gt.start()},it.addEventListener(`sessionstart`,mt),it.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;te!==null&&te.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=F!==null&&(L===null||n)&&F.begin(I,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,L),M=Ke.get(e,P.length),M.init(t),M.state.textureUnits=Ie.getTextureUnits(),P.push(M),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Se.setFromArrayCamera(t):xe.setFromProjectionMatrix(Te,Ve,t.reversedDepth),we=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,we),k=We.get(e,N.length),k.init(),N.push(k),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,I.sortObjects)}_t(e,t,0,I.sortObjects),k.finish(),te!==null&&te.updateLights(M.state.lightsArray),I.sortObjects===!0&&k.sort(ge,_e),ke=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ke&&Ze.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Je.beginShadows();let i=M.state.shadowsArray;if(Ye.render(i,e,t),Ce===!0&&Je.endShadows(),(r&&F.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}ke&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(k,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),ke&&Ze.render(e),vt(k,e,t)}L!==null&&oe===0&&(Ie.updateMultisampleRenderTarget(L),Ie.updateRenderTargetMipmap(L)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),nt.resetDefaultState(),R=-1,se=null,P.pop(),P.length>0?(M=P[P.length-1],Ie.setTextureUnits(M.state.textureUnits),Ce===!0&&Je.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,te!==null&&te.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Be.update(e),a=e.material;a.visible&&k.push(e,i,a,n,De.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,De.z,s,t)}}else a.visible&&k.push(e,i,a,n,De.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),Ce===!0&&Je.setGlobalState(I.clippingPlanes,n),r&&B.viewport(ce.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),u=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(de),fe=I.getClearAlpha(),fe<1&&I.setClearColor(16777215,.5),I.clear(),ke&&Ze.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),Ce===!0&&Je.setGlobalState(I.clippingPlanes,r),bt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}I.setRenderTarget(s,u,d),I.setClearColor(de,fe),p!==void 0&&(r.viewport=p),I.toneMapping=f}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){te!==null&&i.isNodeMaterial&&te.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function St(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ct(e,t,n){t.isScene!==!0&&(t=Oe);let r=V.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return G(e,s),d}else s.uniforms=He.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,I),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),G(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=St(M.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function wt(e,t,n,r,i){let a=V.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ct(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=pl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function G(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Oe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?I.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Nt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=M.state.lights;if(Ce===!0&&(we===!0||e!==se)){let t=e===se&&r.id===R;Je.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===St(M.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?wt(r,t,i,s,h):Ct(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==R&&(R=r.id,w=!0),C||se!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(z,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,Ie),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,Ie),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,Ie));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Au()),w){if(E.setValue(z,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&Dt(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,he,me,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of M.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}pl.upload(z,Tt(v),O,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(pl.upload(z,Tt(v),O,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,S),rt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),R=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=ne),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}R=-1};function q(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=q(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=q(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xe(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,re),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ae=0,oe=0,L=null,B.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ve}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}};function Mu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Er;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Nu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Nu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Nu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new fr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Pu(e,t){return e.onBeforeCompile=e=>{e.vertexShader=`varying vec3 vHeritagePosition;
`+e.vertexShader.replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vHeritagePosition=(modelMatrix*vec4(transformed,1.0)).xyz;`);let n=t===`wood`?`sin(vHeritagePosition.y*4.0+sin(vHeritagePosition.x*28.0+vHeritagePosition.z*24.0)*2.4)`:t===`roof`?`sin(vHeritagePosition.y*31.0)*sin((vHeritagePosition.x+vHeritagePosition.z)*5.0)`:`sin(vHeritagePosition.x*29.0+vHeritagePosition.z*37.0)*sin(vHeritagePosition.y*43.0+vHeritagePosition.x*19.0)`;e.fragmentShader=`varying vec3 vHeritagePosition;
`+e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>\nfloat heritageGrain=${n};\ndiffuseColor.rgb*=1.0+heritageGrain*${t===`wood`?`0.055`:t===`roof`?`0.025`:`0.022`};`)},e.customProgramCacheKey=()=>`heritage-v4-${t}`,e}function Fu(){let e=[],t=[],n=[],r=[0,.28,.58,.82,1],i=[.22,.18,.09,.025,0],a=new J(`#605741`);for(let n=0;n<r.length;n++)for(let o=0;o<=24;o++){let s=o/24*Math.PI*2;e.push(Math.cos(s)*r[n],0,Math.sin(s)*r[n]),t.push(a.r,a.g,a.b,i[n])}for(let e=0;e<r.length-1;e++)for(let t=0;t<24;t++){let r=e*25+t;n.push(r,r+24+1,r+1,r+1,r+24+1,r+24+2)}let o=new Er;return o.setAttribute(`position`,new Y(e,3)),o.setAttribute(`color`,new Y(t,4)),o.setAttribute(`uv`,new Y(new Float32Array(e.length/3*2),2)),o.setIndex(n),o.computeVertexNormals(),o}function Iu(e,t,n){let r={},i=new Map,a=new Cn;function o(e,t,n=.9){if(r[e])return r[e];let i=new Ya({color:t,roughness:n});i.name=e;let a=/wood|bark|branched/.test(e)?`wood`:/roof|rib/.test(e)?`roof`:/stone|pave|rock|taihu|marble|ivory/.test(e)?`mineral`:null;return a&&(i.userData.heritageKind=a,Pu(i,a)),r[e]=i,i}function s(e){let t=e.clone();return e.userData.heritageKind&&Pu(t,e.userData.heritageKind),t}for(let[e,t]of Object.entries({ivory:`#eee1c8`,stone:`#c5beaa`,jade:`#416d59`,wood:`#78432c`,red:`#9e5439`,roof:`#3d705d`,rib:`#62846b`,gold:`#c4a16a`,grass:`#879569`,soil:`#8b7e5e`}))o(e,t);let c=new ui(1,1,1),l=new fi(1,1,1,8),u=new ja(1,1),d=Fu(),f=new Rr({color:`#ffffff`,vertexColors:!0,transparent:!0,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-1});f.userData.contactShadow=!0;let p=(e,t,n,r,i=.14)=>m(d,f,e,i,t,n/2,1,r/2);function m(e,t,n,r,o,s=1,c=1,l=1,u=0,d){if(a.position.set(n,r,o),a.rotation.set(0,u,0),a.scale.set(s,c,l),a.updateMatrix(),d){let n=new Xr(e,t);return n.applyMatrix4(a.matrix),n.castShadow=!0,n.receiveShadow=!0,d.add(n),n}i.has(t.uuid)||i.set(t.uuid,{material:t,geos:[]});let f=(e.index?e.toNonIndexed():e.clone()).applyMatrix4(a.matrix),p=t.userData.atlasRegion;if(p&&f.attributes.uv){let e=f.attributes.uv;for(let t=0;t<e.count;t++)e.setXY(t,p[0]+e.getX(t)*p[2],p[1]+e.getY(t)*p[3])}i.get(t.uuid).geos.push(f)}let h=(e,t,n,i,a,o,s=`ivory`,l=0,u)=>m(c,typeof s==`string`?r[s]:s,e,t,n,i,a,o,l,u);function g(e,t,n,i=`wood`,a){let o=new K(...e),s=new K(...t),c=s.clone().sub(o),l=new ui(n,c.length(),n);return l.applyQuaternion(new Et().setFromUnitVectors(new K(0,1,0),c.normalize())),m(l,typeof i==`string`?r[i]:i,...o.add(s).multiplyScalar(.5).toArray(),1,1,1,0,a)}function _(e,n,r,i,a=``){let o={x:e,z:n,w:r,d:i,id:a,enabled:!0};return t.push(o),o}function v(e){let t=new Map;for(let n of e.children){if(!n.isMesh)continue;n.updateMatrix();let e=n.material.uuid;t.has(e)||t.set(e,{material:s(n.material),geos:[]}),t.get(e).geos.push((n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrix))}e.clear();for(let n of t.values()){n.material.transparent=!0;let t=new Xr(Mu(n.geos,!1),n.material);t.castShadow=!0,t.receiveShadow=!0,e.add(t),n.geos.forEach(e=>e.dispose())}return[...t.values()].map(e=>e.material)}function y(e,t){return n.push({group:e,rect:t,materials:v(e)}),e}function b(e,t,n,r,{height:i=1.9,base:a=.12,collide:o=!0,material:s=`ivory`,parent:c}={}){h(e,a+i/2,t,n,i,r,s,0,c),h(e,a+i+.06,t,n+.12,.12,r+.15,`roof`,0,c),h(e,a+.18,t,n,.34,r+.1,`stone`,0,c),o&&_(e,t,n,r),c||p(e,t,n+.9,r+.9,a+.035)}function x(e,t,n,r,i,a={}){let o=n;for(let[n,s]of[...i,[r,r]])n>o&&(e===`x`?b(t,(n+o)/2,.32,n-o,a):b((n+o)/2,t,n-o,.32,a)),o=s}function S(e,t,n,r,{y:i=.12,tile:a=1.5,edge:s=!0}={}){h(e,i-.12,t,n,.2,r,`stone`);for(let s=e-n/2+a/2;s<e+n/2;s+=a)for(let c=t-r/2+a/2;c<t+r/2;c+=a){let l=(Math.floor(s*5+c*3)%3+3)%3;h(s,i-.005,c,Math.min(a-.045,e+n/2-s+a/2),.045,Math.min(a-.045,t+r/2-c+a/2),o(`pave`+l,[`#d7ceba`,`#dcd3bd`,`#cdc7b1`][l]))}if(s)for(let a of[-1,1])h(e,i+.015,t+a*r/2,n+.18,.07,.14,`stone`),h(e+a*n/2,i+.015,t,.14,.07,r,`stone`)}function C(e,t=2.2,n=.13){for(let r=1;r<e.length;r++){let[i,a]=[e[r-1],e[r]],o=a[0]-i[0],s=a[1]-i[1],c=Math.hypot(o,s),l=Math.ceil(c/1.3);for(let e=0;e<l;e++){let r=(e+.5)/l,a=i[0]+o*r,u=i[1]+s*r,d=typeof n==`function`?n(a,u):n;h(a,d-.02,u,t,.08,c/l-.04,`stone`,Math.atan2(o,s))}}}function w(e,t,n,r,i,a){let o=r*.3,s=[[-o,0,o,0,-r/2,i/2,r/2,i/2],[o,0,-o,0,r/2,-i/2,-r/2,-i/2],[-o,0,-o,0,-r/2,-i/2,-r/2,i/2],[o,0,o,0,r/2,i/2,r/2,-i/2]][e],c=Tt.lerp(s[0],s[2],t),l=Tt.lerp(s[1],s[3],t),u=Tt.lerp(s[4],s[6],t),d=Tt.lerp(s[5],s[7],t);return[Tt.lerp(c,u,n),a*(1-n)**1.65+.34*n**5*Math.abs(t*2-1)**5,Tt.lerp(l,d,n)]}function T(t,n,i,a,o,c,{height:l=2,rot:u=0,fadeRect:d}={}){let f=new wn;f.name=c+`_Roof`;let p=new Er,h=[],_=[],v=[];for(let e=0;e<4;e++){let t=Math.max(5,Math.ceil((e<2?i:a)/1.2)),n=h.length/3;for(let n=0;n<=7;n++)for(let r=0;r<=t;r++)h.push(...w(e,r/t,n/7,i,a,l)),_.push(r/t,n/7);for(let e=0;e<7;e++)for(let r=0;r<t;r++){let i=n+e*(t+1)+r;v.push(i,i+t+1,i+1,i+1,i+t+1,i+t+2)}}p.setAttribute(`position`,new Y(h,3)),p.setAttribute(`uv`,new Y(_,2)),p.setIndex(v),p.computeVertexNormals();let b=s(r.roof);b.side=2,m(p,b,0,0,0,1,1,1,0,f);for(let e=0;e<4;e++){let t=Math.ceil((e<2?i:a)/.68);for(let n=0;n<=t;n++){let r=w(e,n/t,0,i,a,l);for(let o=1;o<=4;o++){let s=w(e,n/t,o/4,i,a,l);g(r.map((e,t)=>e+(t===1?.025:0)),s.map((e,t)=>e+(t===1?.025:0)),.035,`rib`,f),r=s}}for(let t=0;t<8;t++)g(w(e,t/8,1,i,a,l),w(e,(t+1)/8,1,i,a,l),.13,`jade`,f)}g([-i*.3,l+.05,0],[i*.3,l+.05,0],.13,`gold`,f);for(let e of[-1,1])for(let t=0;t<4;t++)g(w(0,+(e===1),t/4,i,a,l),w(0,+(e===1),(t+1)/4,i,a,l),.095,`gold`,f);return f.position.set(t,o,n),f.rotation.y=u,e.add(f),y(f,d||{x:t,z:n,w:u?a:i,d:u?i:a})}function E(e,t,n=2.6,i=.12,a,o=.13){m(l,r.wood,e,i+n/2,t,o,n,o,0,a),h(e,i+.08,t,o*3.5,.16,o*3.5,`stone`,0,a),h(e,i+n-.12,t,.55,.13,.37,`gold`,0,a),_(e,t,.3,.3)}function D(e,t,n,r,i,a){h(e,r,t,n+.12,i+.12,.14,`wood`,0,a),h(e,r,t,n,i,.155,o(`window`,`#bcc5ae`),0,a);for(let o=-Math.floor(n/.38)/2;o<=Math.floor(n/.38)/2;o++)h(e+o*.36,r,t+.09,.035,i,.035,`wood`,0,a);for(let o=r-i/2+.22;o<r+i/2;o+=.35)h(e,o,t+.09,n,.035,.035,`wood`,0,a)}function O(t,n,r,i,a,{base:s=.12,height:c=3.1,floors:l=1,doorWidth:u=2.6,roofHeight:d=2.1,hero:f=!1}={}){S(n,r,i,a,{y:s});let m=new wn,x=new wn;m.name=t+`_Cutaway`,x.name=t+`_Interior_Backdrop`,e.add(m,x);let C=c*.83,w=Math.min(2.5,c-.2);b(n,r-a/2,i,.3,{height:C,base:s,parent:x});let O=.72,k=Math.min(C-.16,2.65),A=k-O,j=Math.max(1,Math.floor(a/2.6)),M=a/j-.27;h(n-i/2,s+O/2,r,.3,O,a,`ivory`,0,x),h(n-i/2,s+k+(C-k)/2,r,.3,C-k,a,`ivory`,0,x);let N=o(`window-paper`,`#ded7b9`);N.transparent=!0,N.opacity=.15,N.depthWrite=!1,N.userData.windowGlazing=!0;for(let e=0;e<j;e++){let t=r-a/2+(e+.5)*a/j;h(n-i/2,s+O+A/2,t,.025,A,M,N,0,x);for(let e of[-1,1])h(n-i/2+.14,s+O+A/2,t+e*M/2,.14,A+.1,.09,`wood`,0,x),h(n-i/2+.14,s+O+A/2+e*A/2,t,.14,.09,M,`wood`,0,x);let o=Math.max(3,Math.floor(M/.32));for(let e=1;e<o;e++)h(n-i/2+.17,s+O+A/2,t-M/2+e*M/o,.05,A,.035,`wood`,0,x);for(let e=1;e<4;e++)h(n-i/2+.17,s+O+e*A/4,t,.05,.035,M,`wood`,0,x);for(let e of[-1,1]){let r=t+e*M*.27,a=s+O+A*.6,o=[[a-.16,r],[a,r+.14],[a+.16,r],[a,r-.14],[a-.16,r]];for(let e=1;e<o.length;e++)g([n-i/2+.2,o[e-1][0],o[e-1][1]],[n-i/2+.2,o[e][0],o[e][1]],.025,`gold`,x)}}for(let e=0;e<=j;e++)h(n-i/2,s+O+A/2,r-a/2+e*a/j,.3,A,.27,`ivory`,0,x);_(n-i/2,r,.3,a,`window-wall`),b(n+i/2,r,.3,a,{height:C,base:s,parent:m});let P=(i-u)/2;for(let e of[-1,1])b(n+e*(i+u)/4,r+a/2,P,.3,{height:C,base:s,parent:m}),D(n+e*i*.31,r+a/2+.18,i*.2,s+1.55,1.12,m);for(let e of[n-i/2,n-i*.3,n-i*.1,n+i*.1,n+i*.3,n+i/2]){E(e,r+a/2+.5,c,s,m,f?.22:.13),h(e,s+c-.2,r+a/2+.3,.25,.15,1.3,`wood`,0,m);for(let t=0;t<3;t++)h(e,s+c-.3-t*.12,r+a/2+.4,.8-t*.17,.12,.7-t*.12,t===1?`gold`:`wood`,0,m)}h(n,s+c-.12,r+a/2+.5,i,.2,.2,`wood`,0,m);for(let e of[-1,1]){h(n+e*(u/2+.05),s+w/2,r+a/2+.45,.12,w,1.15,`wood`,e*.2,m);for(let t=s+.4;t<s+w-.2;t+=.4)h(n+e*(u/2+.13),t,r+a/2+.46,.15,.035,1.1,`gold`,e*.2,m)}h(n,s+c-.62,r+a/2+.37,f?3.7:2.3,.65,.22,`wood`,0,m);for(let e of[-1,1])h(n,s+c-.62+e*.29,r+a/2+.5,f?3.55:2.15,.045,.045,`gold`,0,m);for(let e=1;e<l;e++){let o=s+c*e;h(n,o+.05,r,i+.7,.23,a+.7,`wood`,0,m);for(let e of[-1,1])b(n+e*i/2,r,.28,a,{height:c*.78,base:o+.15,collide:!1,parent:m});b(n,r-a/2,i,.28,{height:c*.78,base:o+.15,collide:!1,parent:m});for(let e=n-i/2+.6;e<n+i/2;e+=2.6)D(e,r+a/2,2,o+1.45,1.55,m);h(n,o+.1,r+a/2+.8,i+1,.2,1.8,`wood`,0,m);for(let e=n-i/2;e<=n+i/2;e+=.6)h(e,o+.7,r+a/2+1.45,.07,1.15,.07,`wood`,0,m);h(n,o+1.2,r+a/2+1.45,i+.3,.09,.09,`gold`,0,m),T(n,r,i+2,a+2,o-.15,t+`_Lower_`+e,{height:1.2})}return v(x),p(n,r,i+2,a+2,s+.035),y(m,{x:n,z:r,w:i,d:a}),T(n,r,i+1.7,a+1.8,s+c*l,t,{height:d}),{x:n,z:r,w:i,d:a,base:s}}function k(e,{width:t=2.35,height:n=2.45,base:r=.12,name:i=`Gallery`,groundAt:a=()=>r}={}){for(let r=1;r<e.length;r++){let[o,s]=[e[r-1],e[r]],c=s[0]-o[0],l=s[1]-o[1],u=Math.hypot(c,l),d=Math.atan2(l,c);(o[0]+s[0])/2,(o[1]+s[1])/2,C([o,s],t,(e,t)=>a(e,t)+.01);let f=Math.max(1,Math.round(u/3));for(let i=0;i<=f;i++)for(let s of[-1,1]){let u=o[0]+c*i/f,p=o[1]+l*i/f,m=u-Math.sin(d)*s*t/2,h=p+Math.cos(d)*s*t/2;e.some((n,i)=>{if(!i||i===r)return!1;let a=e[i-1],o=n[0]-a[0],s=n[1]-a[1],c=Tt.clamp(((m-a[0])*o+(h-a[1])*s)/(o*o+s*s),0,1);return Math.hypot(m-a[0]-o*c,h-a[1]-s*c)<t/2-.08})||E(m,h,n,a(u,p))}let p=Math.abs(a(...o)-a(...s))>.08?f:1;for(let e=0;e<p;e++){let r=(e+.5)/p,s=o[0]+c*r,f=o[1]+l*r;T(s,f,u/p+1,t+.7,a(s,f)+n,i,{height:.85,rot:-d,fadeRect:{x:s,z:f,w:Math.abs(c)/p+t,d:Math.abs(l)/p+t}})}}}function A(t,n,i,{base:a=.3,radius:o=2.7,height:c=2.7}={}){m(new fi(o+.3,o+.55,a+.08,6),r.stone,n,a/2,i);let l=new wn;l.name=t+`_Roof`,e.add(l);let d=[],f=[];for(let e=0;e<=5;e++){let t=e/5,r=o*1.22*t,s=c+1.75*(1-t)**1.7;for(let e=0;e<6;e++){let o=e*Math.PI/3;d.push(n+Math.cos(o)*r,a+s+t**5*.3,i+Math.sin(o)*r)}}for(let e=0;e<5;e++)for(let t=0;t<6;t++){let n=e*6+t,r=e*6+(t+1)%6;f.push(n,n+6,r,r,n+6,r+6)}let p=new Er;p.setAttribute(`position`,new Y(d,3)),p.setIndex(f),p.computeVertexNormals();let _=s(r.roof);_.side=2,m(p,_,0,0,0,1,1,1,0,l);for(let e=0;e<6;e++){let t=e*Math.PI/3;E(n+Math.cos(t)*(o-.25),i+Math.sin(t)*(o-.25),c,a);let r=[n,a+c+1.75,i];for(let e=1;e<=5;e++){let s=e/5,u=[n+Math.cos(t)*o*1.22*s,a+c+1.75*(1-s)**1.7+s**5*.3,i+Math.sin(t)*o*1.22*s];g(r,u,.09,`gold`,l),r=u}let s=(e+1)*Math.PI/3;g([n+Math.cos(t)*o*1.22,a+c+.3,i+Math.sin(t)*o*1.22],[n+Math.cos(s)*o*1.22,a+c+.3,i+Math.sin(s)*o*1.22],.11,`jade`,l);let u=[n+Math.cos(t)*(o-.25),a+c-.12,i+Math.sin(t)*(o-.25)];g(u,[n+Math.cos(s)*(o-.25),a+c-.12,i+Math.sin(s)*(o-.25)],.14,`wood`),h(u[0],a+c-.27,u[2],.45,.17,.45,`gold`),h(u[0],a+c-.42,u[2],.31,.13,.31,`wood`);for(let e=1;e<4;e++){let r=t+(s-t)*e/4,u=[n,a+c+1.75,i];for(let t=1;t<=5;t++){let s=t/5,d=o*1.22*s*Math.cos(Math.PI/6)/Math.cos((e/4-.5)*Math.PI/3),f=[n+Math.cos(r)*d,a+c+1.75*(1-s)**1.7+s**5*.3,i+Math.sin(r)*d];g(u,f,.03,`rib`,l),u=f}}if(e>=3){let e=o-.32,r=[n+Math.cos(t)*e,a+.7,i+Math.sin(t)*e],c=[n+Math.cos(s)*e,a+.7,i+Math.sin(s)*e];g(r,c,.1,`wood`);for(let e=0;e<5;e++){let t=(e+.5)/5,n=Tt.lerp(r[0],c[0],t),i=Tt.lerp(r[2],c[2],t);h(n,a+.4,i,.06,.6,.06,`wood`)}}}return m(u,r.gold,n,a+c+1.95,i,.16,.2,.16,0,l),y(l,{x:n,z:i,w:o*2,d:o*2}),{x:n,z:i,radius:o}}function j(e,t,n=2.6){m(l,r.gold,e,n+.32,t,.025,.45,.025),m(u,o(`lantern`,`#c27f50`),e,n,t,.25,.36,.25),m(l,r.gold,e,n-.4,t,.02,.22,.02)}function M(r,a,o,s){let c=new Map([...i].map(([e,t])=>[e,t.geos.length])),l=e.children.length,u=t.length,d=n.length;r();let f=new Yt().makeTranslation(a,0,o).multiply(new Yt().makeRotationY(s)).multiply(new Yt().makeTranslation(-a,0,-o));for(let[e,t]of i)for(let n=c.get(e)||0;n<t.geos.length;n++)t.geos[n].applyMatrix4(f);for(let t of e.children.slice(l))t.applyMatrix4(f);let p=e=>{let t=new K(e.x,0,e.z).applyMatrix4(f),n=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),i=e.w,a=e.d;e.x=t.x,e.z=t.z,e.w=n*i+r*a,e.d=r*i+n*a};t.slice(u).forEach(p),n.slice(d).forEach(e=>p(e.rect))}function N(t,n){let r=new Map([...i].map(([e,t])=>[e,t.geos.length])),a=e.children.length;t();for(let[e,t]of i)for(let i=r.get(e)||0;i<t.geos.length;i++)t.geos[i].translate(0,n,0);for(let t of e.children.slice(a))t.position.y+=n}function P(){for(let{material:t,geos:n}of i.values()){let i=Mu(n,!1);i.normalizeNormals();let a=new Xr(i,t);a.name=t.userData.contactShadow?`Soft_Contact_Shadows`:`Batched_`+Object.keys(r).find(e=>r[e]===t),a.castShadow=!t.userData.contactShadow,a.receiveShadow=!t.userData.contactShadow,e.add(a),n.forEach(e=>e.dispose())}}return{mats:r,mat:o,mesh:m,box:h,beam:g,ball:u,cyl:l,obstacle:_,wall:b,wallGaps:x,paving:S,path:C,roof:T,column:E,room:O,corridor:k,pavilion:A,lantern:j,contactShadow:p,rotated:M,elevated:N,finish:P}}var Lu={daiyu:{faceWidth:.96,bodyWidth:.97,name:`林黛玉`,robe:`#86a99a`,skirt:`#f0e6d0`,trim:`#cfb590`,hair:`#292a27`,accent:`#cca3a2`,hairdo:`long`,expression:`gentle`,flower:!0,shawl:!0,scale:1},baoyu:{male:!0,faceWidth:1.025,name:`贾宝玉`,robe:`#ae4733`,skirt:`#eee1c3`,trim:`#d4ad65`,hair:`#302923`,accent:`#8b342d`,hairdo:`crown`,expression:`bright`,jade:!0,scale:1.03},jiamu:{faceWidth:1.075,bodyWidth:1.08,name:`贾母`,robe:`#67506a`,skirt:`#4a404b`,trim:`#c5ad77`,hair:`#8b8980`,accent:`#a9bb9c`,hairdo:`elder`,expression:`elder`,pearls:!0,cane:!0,scale:1.05},fengjie:{faceWidth:.97,bodyWidth:.95,name:`王熙凤`,robe:`#a44330`,skirt:`#bd9159`,trim:`#d8b866`,hair:`#302721`,accent:`#5a3c2d`,hairdo:`high`,expression:`bright`,goldPins:!0,scale:1.05},wang:{faceWidth:1.04,bodyWidth:1.05,name:`王夫人`,robe:`#526b7c`,skirt:`#464d5e`,trim:`#a6b5a3`,hair:`#36322b`,accent:`#769385`,hairdo:`low`,expression:`calm`,beads:!0,scale:1.04},yingchun:{faceWidth:1.025,name:`贾迎春`,robe:`#d6a78f`,skirt:`#f0e1c5`,trim:`#b0b8a1`,hair:`#39312b`,accent:`#dfb39a`,hairdo:`low`,expression:`gentle`,flower:!0,scale:1},tanchun:{faceWidth:.97,bodyWidth:.96,name:`贾探春`,robe:`#d5a086`,skirt:`#f0e1c5`,trim:`#a7b5a0`,hair:`#302c27`,accent:`#91a890`,hairdo:`high`,expression:`bright`,jade:!0,scale:1.06},xichun:{name:`贾惜春`,robe:`#deb59d`,skirt:`#f1e4cd`,trim:`#b8bda5`,hair:`#36302a`,accent:`#e1b99a`,hairdo:`double`,expression:`curious`,scale:.84},xueyan:{name:`雪雁`,robe:`#9ba78b`,skirt:`#939a85`,trim:`#e4dcc3`,hair:`#302e28`,accent:`#be9e95`,hairdo:`double`,expression:`curious`,bundle:!0,plain:!0,scale:.88},matron:{name:`引路婆子`,robe:`#8d8170`,skirt:`#676657`,trim:`#b0aa8e`,hair:`#777568`,accent:`#949479`,hairdo:`low`,expression:`elder`,plain:!0,scale:.96},keeper:{name:`看门仆人`,robe:`#75838c`,skirt:`#515e66`,trim:`#adb5ab`,hair:`#302e28`,accent:`#636d63`,hairdo:`cap`,expression:`calm`,plain:!0,male:!0,scale:1.03}},Ru={daiyu:{eyeW:.048,eyeH:.076,gap:.235,browW:.092,browH:.011,browTilt:-.045,mouth:`quiet`,mouthW:.048,blush:!1},baoyu:{eyeW:.054,eyeH:.079,gap:.235,browW:.098,browH:.014,browTilt:.04,mouth:`smile`,mouthW:.109,mouthH:.048,blush:!0},jiamu:{eyeW:.096,eyeH:.027,gap:.226,browW:.098,browH:.014,browTilt:.01,mouth:`kind`,mouthW:.102,mouthH:.031,closed:!0},fengjie:{eyeW:.052,eyeH:.078,gap:.236,browW:.106,browH:.016,browTilt:.18,mouth:`confident`,mouthW:.087,mouthH:.034,blush:!0},wang:{eyeW:.05,eyeH:.074,gap:.23,browW:.092,browH:.012,browTilt:.025,mouth:`quiet`,mouthW:.052,blush:!1},yingchun:{eyeW:.048,eyeH:.072,gap:.232,browW:.086,browH:.01,browTilt:-.025,mouth:`quiet`,mouthW:.043,blush:!1},tanchun:{eyeW:.052,eyeH:.078,gap:.235,browW:.1,browH:.014,browTilt:.1,mouth:`smile`,mouthW:.101,mouthH:.041,blush:!0},xichun:{eyeW:.05,eyeH:.078,gap:.23,browW:.082,browH:.01,browTilt:.01,mouth:`small`,mouthW:.036,blush:!1},xueyan:{eyeW:.05,eyeH:.078,gap:.23,browW:.084,browH:.011,browTilt:.025,mouth:`small`,mouthW:.041,blush:!1},matron:{eyeW:.085,eyeH:.024,gap:.225,browW:.09,browH:.013,browTilt:.01,mouth:`kind`,mouthW:.091,mouthH:.028,closed:!0},keeper:{eyeW:.05,eyeH:.074,gap:.23,browW:.091,browH:.015,browTilt:.035,mouth:`quiet`,mouthW:.05,blush:!1}},zu=new Rr({vertexColors:!0});zu.name=`block-face-vertex-colours`,zu.userData.flatFace=!0;function Bu({design:e,headWidth:t}){let n=Ru[e]||Ru.daiyu,r=new wn;r.name=`Face_`+e,r.position.z=.397;let i=new wn,a=new wn,o=new wn;i.name=e+`_FaceMarks`,a.name=e+`_Eyes`,o.name=e+`_Mouth`,a.position.y=1.96,o.position.y=1.845,r.add(i,a,o);let s=n.closed?`#49372c`:`#282019`,c=n.closed?`#a08d7e`:`#4a362b`;function l(e,t,n,r=0){let s=e===`square-eye`||e===`smiling-eye`?a:e.includes(`mouth`)||e===`simple-smile`?o:i,c=new Fa(new Wi(t.map(([e,t])=>new G(e,t-s.position.y)))),l=new J(n),u=new Float32Array(c.attributes.position.count*3);for(let e=0;e<u.length;e+=3)u[e]=l.r,u[e+1]=l.g,u[e+2]=l.b;c.setAttribute(`color`,new fr(u,3));let d=new Xr(c,zu);return d.name=e,d.position.z=r,d.castShadow=!1,d.receiveShadow=!1,s.add(d),d}function u(e,t,n,r,i,a,o=0,s=0){return l(e,[[-r/2,-i/2],[r/2,-i/2],[r/2,i/2],[-r/2,i/2]].map(([e,r])=>[t+e,n+r+e*s]),a,o)}for(let e of[-1,1]){let r=e*t*n.gap,i=a.position.y;if(n.closed){l(`smiling-eye`,[[r-n.eyeW/2,i-.006],[r-n.eyeW*.42,i+n.eyeH*.63],[r-n.eyeW*.2,i+n.eyeH],[r+n.eyeW*.25,i+n.eyeH*.95],[r+n.eyeW/2,i+.006],[r+n.eyeW*.47,i-.007],[r+n.eyeW*.2,i+.006],[r-n.eyeW*.2,i+.007]],s,.003);for(let n of[0,1,2])u(`smile-wrinkle`,e*t*.292,1.901-n*.022,.055-n*.004,.007,`#e7b49d`,.001,e*.03)}else u(`square-eye`,r,i,n.eyeW,n.eyeH,s,.003);if(l(`brow`,[[-.5,0],[-.12,.28],[.45,.12],[.5,-.38],[.08,-.75],[-.48,-.59]].map(([t,i])=>[r+t*n.browW,2.057+i*n.browH+t*n.browW*e*n.browTilt]),c,.002),n.blush){let n=e*t*.303;l(`faint-cheek`,[[n-.03,1.885],[n-.019,1.895],[n+.022,1.895],[n+.033,1.886],[n+.019,1.879],[n-.017,1.879]],`#efc2aa`,.001)}}let d=o.position.y;if([`smile`,`confident`,`kind`].includes(n.mouth)){let e=n.mouthW,t=n.mouthH,r=[[-e/2,d+.008],[-e*.22,d+.003],[e*.25,d+.004],[e/2,d+.013],[e*.31,d-t*.64],[0,d-t*.82],[-e*.3,d-t*.55]];l(`simple-smile`,r,`#a7604c`,.002),l(`mouth-inner`,r.map(([e,t])=>[e*.72,d-.006+(t-d)*.63]),`#de9179`,.003)}else{let e=n.mouthW;l(`small-mouth`,[[-e*.5,d+.001],[-e*.08,d+.002],[e*.5,d+.005],[e*.45,d-.004],[-e*.4,d-.008]],`#ba705a`,.002)}r.userData.faceProfile=e,r.userData.faceRevision=4,r.userData.faceStyle=`reference-square`,r.userData.markCount=i.children.length+a.children.length+o.children.length;for(let e of[i,a,o]){let t=e.children.map(e=>(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).translate(0,0,e.position.z)),n=new Xr(Mu(t),zu);n.name=e.name+`_Surface`,n.castShadow=!1,n.receiveShadow=!1,e.clear(),e.add(n),t.forEach(e=>e.dispose())}return r.expressions={eyes:a,mouth:o,closed:!!n.closed},r}var Vu=0,Hu=1,Uu=new K,Wu=new vs,Gu=new Ar,Ku=new K,qu=new qn,Ju=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Qu,this.unassigned=new Qu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Zu(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(e){let n=e.geometry;if(n!==void 0){let r=n.attributes.position;if(r!==void 0)for(let n=0,i=r.count;n<i;n++){let i=new K;i.fromBufferAttribute(r,n).applyMatrix4(e.matrixWorld),t.push(i)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,r=t.length;n<r;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,r=-1/0,i=1/0;for(let t=0,a=n.length;t<a;t++){let a=n[t],o=a.distanceToPoint(e.origin),s=a.normal.dot(e.direction);if(o>0&&s>=0)return null;let c=s===0?0:-o/s;if(!(c<=0)&&(s>0?i=Math.min(c,i):r=Math.max(c,r),r>i))return null}return r===-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Uu)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(t.outside=e.next!==null&&e.next.face===t?e.next:null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0){if(t===void 0)this.unassigned.appendChain(n);else{let e=n;do{let n=e.next;t.distanceToPoint(e.point)>this.tolerance?this._addVertexToFace(e,t):this.unassigned.append(e),e=n}while(e!==null)}}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,r=this.tolerance,i=null;for(let n=0;n<e.length;n++){let a=e[n];if(a.mark===Vu){let e=a.distanceToPoint(t.point);if(e>r&&(r=e,i=a),r>1e3*this.tolerance)break}}i!==null&&this._addVertexToFace(t,i),t=n}while(t!==null)}return this}_computeExtremes(){let e=new K,t=new K,n=[],r=[];for(let e=0;e<3;e++)n[e]=r[e]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let i=0,a=this.vertices.length;i<a;i++){let a=this.vertices[i],o=a.point;for(let t=0;t<3;t++)o.getComponent(t)<e.getComponent(t)&&(e.setComponent(t,o.getComponent(t)),n[t]=a);for(let e=0;e<3;e++)o.getComponent(e)>t.getComponent(e)&&(t.setComponent(e,o.getComponent(e)),r[e]=a)}return this.tolerance=3*2**-52*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,r=t.max,i=0,a=0;for(let e=0;e<3;e++){let t=r[e].point.getComponent(e)-n[e].point.getComponent(e);t>i&&(i=t,a=e)}let o=n[a],s=r[a],c,l;i=0,Wu.set(o.point,s.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s){Wu.closestPointToPoint(n.point,!0,Ku);let e=Ku.distanceToSquared(n.point);e>i&&(i=e,c=n)}}i=-1,Gu.setFromCoplanarPoints(o.point,s.point,c.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c){let e=Math.abs(Gu.distanceToPoint(n.point));e>i&&(i=e,l=n)}}let u=[];if(Gu.distanceToPoint(l.point)<0){u.push(Yu.create(o,s,c),Yu.create(l,s,o),Yu.create(l,c,s),Yu.create(l,o,c));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge(t)),u[e+1].getEdge(1).setTwin(u[t+1].getEdge(0))}}else{u.push(Yu.create(o,c,s),Yu.create(l,o,s),Yu.create(l,s,c),Yu.create(l,c,o));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge((3-e)%3)),u[e+1].getEdge(0).setTwin(u[t+1].getEdge(1))}}for(let e=0;e<4;e++)this.faces.push(u[e]);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c&&n!==l){i=this.tolerance;let e=null;for(let t=0;t<4;t++){let r=this.faces[t].distanceToPoint(n.point);r>i&&(i=r,e=this.faces[t])}e!==null&&this._addVertexToFace(n,e)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===Vu&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,r=n.outside;do{let i=n.distanceToPoint(r.point);i>t&&(t=i,e=r),r=r.next}while(r!==null&&r.face===n);return e}}_computeHorizon(e,t,n,r){this._deleteFaceVertices(n),n.mark=Hu;let i;i=t===null?t=n.getEdge(0):t.next;do{let t=i.twin,n=t.face;n.mark===Vu&&(n.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,t,n,r):r.push(i)),i=i.next}while(i!==t);return this}_addAdjoiningFace(e,t){let n=Yu.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,r=null;for(let i=0;i<t.length;i++){let a=t[i],o=this._addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(r),this.newFaces.push(o.face),r=o}return n.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Yu=class e{constructor(){this.normal=new K,this.midpoint=new K,this.area=0,this.constant=0,this.outside=null,this.mark=Vu,this.edge=null}static create(t,n,r){let i=new e,a=new Xu(t,i),o=new Xu(n,i),s=new Xu(r,i);return a.next=s.prev=o,o.next=a.prev=s,s.next=o.prev=a,i.edge=a,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return qu.set(e.point,t.point,n.point),qu.getNormal(this.normal),qu.getMidpoint(this.midpoint),this.area=qu.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Xu=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceTo(e.point)}lengthSquared(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceToSquared(e.point)}setTwin(e){return this.twin=e,e.twin=this,this}},Zu=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Qu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}},$u=class extends Er{constructor(e=[]){super();let t=[],n=[],r=new Ju().setFromPoints(e).faces;for(let e=0;e<r.length;e++){let i=r[e],a=i.edge;do{let e=a.head().point;t.push(e.x,e.y,e.z),n.push(i.normal.x,i.normal.y,i.normal.z),a=a.next}while(a!==i.edge)}this.setAttribute(`position`,new Y(t,3)),this.setAttribute(`normal`,new Y(n,3))}},ed={daiyu:{label:`低首拢帕`,head:[.045,-.06,.065],body:[.015,-.035,.018],left:[-.57,0,.53],right:[-.57,0,-.51],step:.065,gesture:`reserved`,phase:.3},baoyu:{label:`侧身招手`,head:[-.025,-.08,-.065],body:[-.012,.065,-.025],left:[-.18,0,.2],right:[-.34,-.14,2.02],step:.09,gesture:`welcome`,phase:1.4},jiamu:{label:`倚杖含笑`,head:[.04,.02,-.025],body:[.026,-.025,-.012],left:[-.33,0,.28],right:[0,0,0],step:.025,gesture:`elder`,phase:2.2,cane:!0},fengjie:{label:`扬袖迎客`,head:[-.015,.07,-.075],body:[-.02,-.085,-.03],left:[-.42,0,.28],right:[-.38,-.18,1.91],step:.1,gesture:`welcome`,phase:3.1},wang:{label:`拢袖持珠`,head:[.018,-.025,.015],body:[.007,.015,0],left:[-.5,0,.46],right:[-.5,0,-.46],step:.025,gesture:`calm`,phase:1.8},yingchun:{label:`垂眸拢袖`,head:[.035,.035,.075],body:[.012,.045,.022],left:[-.54,0,.53],right:[-.54,0,-.53],step:.045,gesture:`reserved`,phase:2.8},tanchun:{label:`抬手相邀`,head:[-.035,-.055,-.045],body:[-.012,.07,-.018],left:[-.25,0,.24],right:[-.4,-.08,1.72],step:.085,gesture:`welcome`,phase:.9},xichun:{label:`抱帕微仰`,head:[-.055,.045,.085],body:[.008,-.05,.025],left:[-.56,0,.53],right:[-.56,0,-.53],step:.045,gesture:`curious`,phase:3.8},xueyan:{label:`护住包袱`,head:[.025,-.035,-.065],body:[.02,.035,-.02],left:[-.65,0,.12],right:[-.65,0,-.12],step:.055,gesture:`bundle`,phase:2.5},matron:{label:`倾身引路`,head:[.025,-.035,.03],body:[.032,.03,.01],left:[-.42,0,.35],right:[-.32,0,-.4],step:.035,gesture:`elder`,phase:4.5},keeper:{label:`拱手候客`,head:[.015,.025,-.025],body:[.012,-.025,0],left:[-.48,0,.5],right:[-.48,0,-.5],step:.035,gesture:`calm`,phase:4.9}},td=(e,t)=>e.rotation.set(...t);function nd(e,t){let n=ed[t]||ed.daiyu,{parts:r,rig:i}=e;td(i.body,n.body),td(i.head,n.head),td(r.leftArm,n.left),td(r.rightArm,n.right);for(let[e,i]of[[`leftLeg`,-1],[`rightLeg`,1]]){let a=r[e];a.position.z+=i*n.step,a.rotation.y=i*(t===`xichun`?-.07:.055)}for(let e of Object.values(r))e.userData.restRotation={x:e.rotation.x,y:e.rotation.y,z:e.rotation.z};e.motion={pose:n,focus:!1,focusSince:-100,headYaw:0},e.root.userData.rigRevision=1,e.root.userData.poseName=n.label,e.root.userData.poseAngles={head:n.head,body:n.body,leftArm:n.left,rightArm:n.right}}function rd(e,t){return Tt.euclideanModulo(e-t+Math.PI,Math.PI*2)-Math.PI}function id(e,t,n,r=!0){let i=e.root.position,a=Math.atan2(t.x-i.x,t.z-i.z);e.root.rotation.y+=rd(a,e.root.rotation.y)*(r?1-Math.exp(-n*4.2):1)}function ad(e,{time:t=0,delta:n=.016,enabled:r=!0,moving:i=!1,attention:a=null,speaking:o=!1,listening:s=!1}={}){let{rig:c,parts:l,motion:u}=e,d=u.pose,f=t+d.phase,p=!!a;p&&!u.focus&&(u.focusSince=t),u.focus=p;let m=r?Math.sin(f*1.65):0,h=r?Math.sin(f*.75):0;c.body.position.y=.85+(r?.006*m:0),c.body.scale.y=1+(r?.0035*m:0),c.body.rotation.set(d.body[0]+(r?.004*h:0),d.body[1],d.body[2]+(r?.004*Math.sin(f*.61):0));let g=0;if(a){let t=Math.atan2(a.x-e.root.position.x,a.z-e.root.position.z);g=Tt.clamp(rd(t,e.root.rotation.y),-.43,.43)}u.headYaw=r?Tt.lerp(u.headYaw,g,1-Math.exp(-n*5)):0;let _=r&&(o||s)?Math.sin(f*(o?2.4:1.6))*(o?.024:.014):0;c.head.rotation.set(d.head[0]+_,d.head[1]+u.headYaw,d.head[2]+(r?.009*Math.sin(f*.9):0));let v=r&&i?Math.sin(t*12):0;for(let[e,t]of[[`leftLeg`,-1],[`rightLeg`,1]]){let n=l[e],r=n.userData.restRotation;n.rotation.set(r.x+t*v*.38,r.y,r.z)}for(let[e,n]of[[`leftArm`,-1],[`rightArm`,1]]){let i=l[e],a=i.userData.restRotation,s=d.gesture===`bundle`||d.gesture===`reserved`||d.gesture===`calm`||d.cane&&n===1;if(i.rotation.set(a.x+(s?0:n*v*.14),a.y,a.z),r&&!s){let e=Math.max(0,1-(t-u.focusSince)/2.2),r=d.gesture===`welcome`&&n===1;i.rotation.x+=o?.024*Math.sin(f*2):0,i.rotation.z+=r?Math.sin(f*3.4)*(.075*e+(o?.035:.008)):o?.018*Math.sin(f*1.8):0}}let y=c.face.expressions,b=(t+d.phase)%(4+d.phase*.17),x=r&&!y.closed&&b<.19;y.eyes.scale.y=x?Math.max(.1,Math.abs(b-.095)/.095):1,y.mouth.scale.y=r&&o?1.35+.45*Math.sin(f*17):1,c.head.updateMatrix(),c.body.updateMatrix()}var od=new ui(1,1,1),sd=new Map;function cd(e,t,n,r){let i=[];for(let a of[-1,1])for(let o of[-1,1])for(let s of[-1,1])for(let c=0;c<3;c++){let l=[a*(e/2-r),o*(t/2-r),s*(n/2-r)];l[c]+=[a,o,s][c]*r,i.push(new K(...l))}let a=new $u(i);return a.setAttribute(`uv`,new Y(new Float32Array(a.attributes.position.count*2),2)),a}var ld=()=>Promise.resolve(!0),ud={daiyu:{robe:`#90aa9b`,skirt:`#eddfc3`,accent:`#d5a3a5`,hair:`#30251f`},baoyu:{robe:`#a94736`,skirt:`#eee1c9`,trim:`#d0a156`,hair:`#33261e`},jiamu:{robe:`#6d536b`,skirt:`#554250`,trim:`#d4b77a`,hair:`#aaa39d`},fengjie:{robe:`#a64535`,skirt:`#bc8a46`,trim:`#d6ad60`,hair:`#30231e`},wang:{robe:`#5b708a`,skirt:`#4e6075`,trim:`#e6ddc9`,hair:`#302824`},yingchun:{robe:`#d7a99b`,skirt:`#e9ddc5`,trim:`#a4b7a2`},tanchun:{robe:`#d4a28c`,skirt:`#eadfc6`,trim:`#93b494`},xichun:{robe:`#dda5ac`,skirt:`#ede1ce`,trim:`#e6c9c2`},xueyan:{robe:`#9aadaa`,skirt:`#a4ad95`,trim:`#e5dfc9`,accent:`#c68e9d`}};function dd(e,t,{face:n=!1}={}){let r=e+t;if(!sd.has(r)){let i=n?new Rr({color:t}):new Ya({color:t,roughness:.84,metalness:0,flatShading:!0});i.name=`block-`+e,i.userData.flatFace=n,sd.set(r,i)}return sd.get(r)}function fd(e){e.updateMatrixWorld(!0);let t=e.matrixWorld.clone().invert(),n=new Map;e.traverse(e=>{if(!e.isMesh)return;let r=(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(new Yt().multiplyMatrices(t,e.matrixWorld));n.has(e.material.uuid)||n.set(e.material.uuid,{m:e.material,geos:[]}),n.get(e.material.uuid).geos.push(r)}),e.clear();for(let{m:t,geos:r}of n.values()){let n=new Xr(Mu(r,!1),t);n.castShadow=!t.userData.flatFace,n.receiveShadow=!t.userData.flatFace,e.add(n),r.forEach(e=>e.dispose())}}function pd({design:e=`daiyu`,name:t,animated:n=!1}={}){let r={...Lu[e]||Lu.daiyu,...ud[e]},i=new wn,a=new wn,o={};i.name=t||r.name,i.add(a),i.userData.characterDesign=e,i.userData.characterVersion=11,i.userData.characterStyle=`block`,i.userData.faceRevision=4,i.userData.faceProfile=e,i.userData.faceStyle=`reference-square`;let s=0,c={skin:dd(`skin`,`#ffdbb7`),robe:dd(e+`-robe`,r.robe),skirt:dd(e+`-skirt`,r.skirt),skirtLight:dd(e+`-skirt-light`,new J(r.skirt).lerp(new J(`#f4e7d1`),.05).getStyle()),trim:dd(e+`-trim`,r.trim),hair:dd(e+`-hair`,r.hair),hairShade:dd(e+`-hair-shade`,new J(r.hair).multiplyScalar(.88).getStyle()),accent:dd(e+`-accent`,r.accent),cream:dd(`cream`,`#f3e5cc`),gold:dd(`gold`,`#d0a353`),jade:dd(`jade`,`#a8c39b`),wood:dd(`wood`,`#805537`),ink:dd(`ink`,`#251d19`,{face:!0}),lip:dd(`lip`,`#aa6655`,{face:!0}),blush:dd(`blush`,`#dcaa95`,{face:!0}),brow:dd(e+`-brow`,r.expression===`elder`?`#8c847d`:`#44352b`,{face:!0})};function l(e,t,n=0,r=0,i=0,o=a,l=0){let u=new Xr(e,c[t]||t);return u.position.set(n,r,i),u.rotation.z=l,o.add(u),s++,u}let u=(e,t,n,r,i,o,s,c=a,u=0)=>{let d=l(od,e,t,n,r,c,u);return d.scale.set(i,o,s),d};function d(e,t,n,r,i,o,s,c,u,d=a){let f=[[-i/2,-s/2,c/2],[i/2,-s/2,c/2],[i/2,-s/2,-c/2],[-i/2,-s/2,-c/2],[-o/2,s/2,u/2],[o/2,s/2,u/2],[o/2,s/2,-u/2],[-o/2,s/2,-u/2]],p=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7],[3,2,1,0]],m=[],h=[];for(let e of p)for(let t of[0,1,2,0,2,3])m.push(...f[e[t]]),h.push([[0,0],[1,0],[1,1],[0,1]][t][0],[[0,0],[1,0],[1,1],[0,1]][t][1]);let g=new Er;return g.setAttribute(`position`,new Y(m,3)),g.setAttribute(`uv`,new Y(h,2)),g.computeVertexNormals(),l(g,e,t,n,r,d)}function f(e,t,n,r=.04,i=.035,o=a){let s=new K(...t),c=new K(...n),l=c.clone().sub(s),d=u(e,...s.clone().add(c).multiplyScalar(.5).toArray(),r,l.length(),i,o);return d.quaternion.setFromUnitVectors(new K(0,1,0),l.normalize()),d}function p(e,t,n,r,i,a,o=.035){u(e,t-i/2+o/2,n,r,o,a,.045),u(e,t+i/2-o/2,n,r,o,a,.045),u(e,t,n-a/2+o/2,r,i,o,.045),u(e,t,n+a/2-o/2,r,i,o,.045)}function m(e,t,n){u(`cream`,e,t,n,.18,.065,.055),u(`cream`,e,t,n,.065,.18,.055),u(`gold`,e,t,n+.035,.04,.04,.018)}function h(e,t,n,r=.48,i=.14){u(`hair`,e,t,n,r,i,r*.75),u(`hairShade`,e-r*.12,t+i*.72,n-.025,r*.64,i*.7,r*.61)}function g(e,t,n,r=`accent`){u(r,e,t,n,.18,.055,.045),u(r,e-.067,t-.13,n,.055,.27,.025)}function _(){let t=new wn;return t.name=e+`_Handkerchief`,t.position.set(0,.735,.345),a.add(t),u(`cream`,0,0,0,.235,.28,.018,t,.08),u(`accent`,0,-.045,.015,.065,.065,.008,t),u(`jade`,.043,-.003,.015,.035,.035,.008,t),u(`accent`,-.034,.015,.015,.035,.035,.008,t),t}let v=r.bodyWidth||1,y=.94*(r.faceWidth||1);d(`skirt`,0,.575,0,.82*v,.44*v,.83,.59,.35);for(let e of[-2,-1,0,1,2])d(e%2?`skirtLight`:`skirt`,e*.13,.52,.265,.13,.085,.7,.035,.018);d(`robe`,0,1.235,0,.51*v,.61*v,.53,.4,.45),d(`robe`,0,.86,-.205,.74*v,.52*v,.65,.09,.07);for(let e of[-1,1])d(`robe`,e*.26*v,.85,.215,.22,.15,.65,.1,.065),u(`robe`,e*.285*v,.91,0,.12,.53,.43),f(`cream`,[e*.16,1.49,.238],[0,1.12,.247],.085,.028);u(`trim`,0,1.005,0,.565*v,.075,.448),e===`fengjie`&&u(`wood`,0,1.008,.235,.56,.079,.03),u(`skin`,0,1.535,0,.2,.24,.22);let b=a.children.length;l(cd(y,.64,.78,.023),`skin`,0,2.02,0);for(let e of[-1,1])u(`skin`,e*(y/2+.035),1.87,-.02,.115,.18,.14);let x=Bu({design:e,headWidth:y});s+=x.userData.markCount,a.add(x),u(`hair`,0,2.385,-.035,y+.1,.19,.88),u(`hairShade`,0,2.035,-.395,y+.075,.61,.145);let S=r.hairdo===`elder`||r.beads;for(let e of[-1,1])u(`hair`,e*(y/2-.015),S?2.13:2.06,-.055,.16,S?.4:.58,.72);if(S){u(`hair`,0,2.29,.351,y*.72,.12,.1);for(let e of[-1,1])u(`hair`,e*y*.39,2.245,.335,y*.21,.19,.115)}else{u(`hair`,-y*.28,2.265,.394,y*.44,.29,.14),u(`hair`,y*.045,2.31,.407,y*.25,.2,.13),u(`hair`,y*.295,2.27,.385,y*.29,.28,.14);for(let e of[-1,1])u(`hair`,e*y*.4,1.745,.265,.105,.31,.115)}if(r.hairdo===`long`)u(`hair`,0,1.51,-.465,.65,1.56,.17),h(0,2.535,-.19,.54,.15),m(-y*.43,2.4,.49);else if(r.hairdo===`crown`)h(0,2.53,-.18,.35,.13),u(`hair`,0,1.7,-.46,.36,.95,.16),p(`gold`,0,2.535,.085,.26,.15,.04),u(`wood`,0,2.535,.073,.12,.06,.022),u(`accent`,.18,2.3,-.5,.065,.39,.025);else if(r.hairdo===`elder`){h(0,2.53,-.17,.68,.16);for(let e of[-2,-1,0,1,2])u(`gold`,e*.145,2.5,.35,.085,.063,.065);u(`jade`,.045,2.53,.309,.145,.175,.055),u(`cream`,.045,2.53,.341,.065,.075,.014)}else if(r.hairdo===`high`){if(h(0,2.545,-.17,.57,.16),u(`hair`,-.07,2.735,-.18,.31,.17,.3),r.goldPins){p(`gold`,0,2.575,.17,.22,.13,.036);for(let e of[-1,1])u(`gold`,e*.51,2.44,.1,.17,.065,.065),u(`gold`,e*.54,2.29,.04,.045,.3,.045),u(`gold`,e*.54,2.12,.04,.085,.085,.065)}else u(`jade`,-.245,2.56,.23,.28,.055,.065),u(`cream`,-.32,2.56,.235,.09,.08,.07)}else if(r.hairdo===`double`){let t=e===`xueyan`;for(let e of[-1,1])u(`hair`,e*.42,t?2.53:2.43,-.13,.29,t?.23:.18,.29),g(e*.43,t?2.4:2.32,.155,t?`trim`:`accent`)}else r.hairdo===`cap`?(u(`hairShade`,0,2.44,-.04,y+.13,.13,.9),u(`hair`,0,2.555,-.06,.64,.16,.62)):(h(0,2.515,-.2,.51,.13),r.flower?m(-y*.44,2.39,.49):(u(`jade`,-.29,2.42,.49,.21,.055,.065),u(`gold`,-.2,2.42,.49,.06,.065,.065)));if(r.goldPins||r.pearls)for(let e of[-1,1])u(`gold`,e*(y/2+.04),1.795,.025,.035,.07,.035),u(`cream`,e*(y/2+.04),1.75,.025,.065,.07,.055);let C=a.children.slice(b);for(let e of C)e.position.y-=.065;for(let e of[-1,1]){let t=new wn;t.position.set(e*.34*v,1.35,0),i.add(t),o[e===1?`rightArm`:`leftArm`]=t,r.cane&&e===1?(u(`robe`,0,-.16,0,.32,.36,.36,t),u(`trim`,.06,-.3,.06,.34,.09,.37,t),u(`skin`,.14,-.31,.19,.16,.16,.16,t),t.rotation.x=0,t.rotation.z=0):(d(`robe`,0,-.22,0,.34,.28,.49,.36,.32,t),u(`trim`,0,-.455,0,.35,.075,.375,t),u(`skin`,0,-.558,.032,.165,.17,.17,t),t.rotation.z=-e*(r.bundle?.12:.45),t.rotation.x=r.bundle?-.65:-.5,e===1&&r.expression===`bright`&&(t.rotation.z=1.78,t.rotation.x=-.1)),t.userData.restRotation={x:t.rotation.x,z:t.rotation.z};let n=new wn;n.position.set(e*.155,.29,0),i.add(n),o[e===1?`rightLeg`:`leftLeg`]=n,u(`skirt`,0,-.1,0,.13,.23,.16,n),u(`wood`,0,-.21,.075,.23,.15,.37,n),u(`cream`,0,-.265,.075,.24,.035,.38,n)}if(r.shawl)for(let e of[-1,1])u(`accent`,e*.282,1.24,.225,.13,.3,.11,a,e*.09),f(`accent`,[e*.29,1.18,.298],[e*.37,.39,.32],.135,.045);let w=r.shawl||e===`fengjie`||e===`xichun`?_():null;if(r.jade&&(u(`gold`,0,1.22,.252,.018,.18,.018),u(`jade`,0,1.075,.28,.2,.22,.07),u(`cream`,0,1.075,.322,.1,.12,.015)),e===`baoyu`&&(u(`gold`,.285,.8,.267,.018,.13,.025),u(`trim`,.29,.665,.285,.2,.23,.08),u(`cream`,.29,.665,.331,.045,.045,.012)),r.beads){for(let e of[-1,0,1])u(`wood`,e*.082,.82,.365,.063,.063,.06);for(let e of[-1,1])for(let t of[0,1,2])u(`wood`,e*.125,.88+t*.069,.365,.061,.061,.06)}r.bundle&&(u(`accent`,0,.99,.32,.47,.4,.32),u(`cream`,0,.99,.488,.045,.4,.014),u(`cream`,0,1.07,.489,.47,.04,.016),u(`accent`,-.05,1.21,.37,.1,.045,.13),u(`accent`,.06,1.21,.37,.1,.045,.13));let T=new wn;T.name=e+`_GroundProps`,i.add(T),r.cane&&(u(`wood`,.53,.59,.21,.065,1.15,.065,T),u(`wood`,.54,1.17,.21,.24,.08,.1,T));let E=new wn,D=new wn,O=new wn;E.name=e+`_Body`,D.name=e+`_Head`,O.name=e+`_HairAndFace`,E.position.y=.85,D.position.y=1.6,i.add(E,D),D.add(O),i.updateMatrixWorld(!0);for(let e of C)e!==x&&O.attach(e);D.attach(x),E.attach(a),E.attach(D);for(let[t,n]of Object.entries(o))n.name=e+`_`+t,t.endsWith(`Arm`)&&E.attach(n);let k={root:i,parts:o,rig:{body:E,head:D,face:x}};nd(k,e),e===`fengjie`&&w&&(o.leftArm.add(w),w.position.set(0,-.7,.1),w.rotation.set(-k.motion.pose.left[0],0,-k.motion.pose.left[2]+.08)),i.userData.blockCount=s,i.scale.setScalar(r.scale),fd(a),fd(O);for(let e of Object.values(o))fd(e);T.children.length&&fd(T),i.updateMatrixWorld(!0);let A=new Jn().setFromObject(i),j=A.max.y-A.min.y;return i.userData.height=j,{...k,height:j,fineMeshes:[],ready:Promise.resolve(!0)}}var md={design:`daiyu`,name:`林黛玉`,animated:!0},hd=[{id:`matron`,name:`引路婆子`,design:`matron`,x:18,z:24,role:`intro`,facing:.35,approach:{x:18,z:25.5},location:`停轿小院`},{id:`xueyan`,name:`雪雁`,design:`xueyan`,x:26,z:25.5,role:`xueyan`,facing:-.5,approach:{x:27,z:25.5},location:`随行箱笼旁`},{id:`keeper`,name:`看门仆人`,design:`keeper`,x:21.5,z:29,role:`keeper`,facing:.2,approach:{x:21.5,z:30.5},location:`府门内侧`},{id:`fengjie`,name:`王熙凤`,design:`fengjie`,x:-1.5,z:-7.8,role:`main`,facing:.25,room:`hall`,approach:{x:-2.5,z:-6.5},location:`正房门边`},{id:`jiamu`,name:`贾母`,design:`jiamu`,x:-4,z:-12.8,role:`jiamu`,facing:0,room:`hall`,approach:{x:-4,z:-10.5},location:`正房主榻前`},{id:`wang`,name:`王夫人`,design:`wang`,x:1.7,z:-11.6,role:`wang`,facing:-.45,room:`hall`,approach:{x:.5,z:-10},location:`正房右侧分席`},{id:`yingchun`,name:`贾迎春`,design:`yingchun`,x:-10,z:-11.6,role:`yingchun`,facing:.65,room:`hall`,approach:{x:-10.25,z:-10.5},location:`正房左侧分席`},{id:`tanchun`,name:`贾探春`,design:`tanchun`,x:-9,z:-8.6,role:`tanchun`,facing:.55,room:`hall`,approach:{x:-9.5,z:-7},location:`正房左侧前席`},{id:`xichun`,name:`贾惜春`,design:`xichun`,x:-6.7,z:-8.4,role:`xichun`,facing:.3,room:`hall`,approach:{x:-5.6,z:-7},location:`三春姊妹身旁`},{id:`baoyu`,name:`贾宝玉`,design:`baoyu`,x:9,z:4,role:`baoyu`,facing:-.65,approach:{x:8,z:5.5},location:`内院东侧回廊`}],gd=e=>({who:`林黛玉`,kind:`心声`,text:e});function _d(e,t){return{xueyan:[{who:`雪雁`,text:`姑娘，箱笼都在这里，您的书也没有碰坏。若想歇一歇，我便陪着您。`},gd(`我回头看看雪雁，心里微微一暖。到了这样陌生的地方，仍有人认得我旧日的习惯。`)],keeper:[{who:`看门仆人`,text:`姑娘从西角门进来便是。前院顺着石径，可往垂花门与内院。`},gd(`门庭有门庭的规矩。我将脚下的路，连同新认得的称呼，一道记在心里。`)],jiamu:[{who:`贾母`,text:`好孩子，远路过来可累着了？到外祖母身边来，往后同姊妹们一处住着，慢慢便熟了。`},gd(`她的声音柔和，我一时竟不知该先说哪一句。只觉得满屋陌生的陈设，都因这一声呼唤亲近了些。`)],wang:[{who:`王夫人`,text:`你才来，不必拘束。姊妹们一处读书做针线，日常有什么短少，告诉你凤姐姐便是。`},gd(`我轻轻应下，将舅母的话仔细记住。身在这深宅，原要从一句问候、一处座次慢慢学起。`)],yingchun:[{who:`贾迎春`,text:`妹妹一路辛苦了。先坐一坐，等歇过来，咱们再慢慢说话。`},gd(`她话不多，神情却温柔可亲。我向她见了礼，心里也跟着安静了一点。`)],tanchun:[{who:`贾探春`,text:`听说妹妹读过书？改日得闲，咱们一处看看。若还不认得院里的路，我陪你走。`},gd(`她眉眼间自有一股明朗神气。我微微点头，初来的拘谨，像被这句话轻轻松开了。`)],xichun:[{who:`贾惜春`,text:`林姐姐，你从很远的地方来么？等你歇好了，给我讲讲那边的花，好不好？`},gd(`她年纪尚小，仰起脸看我。我也不觉放柔了声音，答应等闲下来，便讲给她听。`)],baoyu:[{who:`贾宝玉`,text:t.complete?`妹妹也来廊下走走？这园里花木多，咱们慢慢认。`:`你便是林妹妹么？我才到廊下，听说家里来了位妹妹，正想过去看看。`},gd(`他说话亲近，倒像我们并不是头一回相逢。我垂下眼，心中那一点陌生，又悄悄淡了些。`)],main:[{who:`王熙凤`,text:`妹妹只管安心住下。少什么、想要什么，告诉我便是，别同我客气。`},gd(`凤姐姐笑语爽利，连安排琐事也利落。我望着她，渐渐明白这宅院里的许多事情，都有她照应。`)]}[e.role]||[gd(`我向她见过礼，慢慢将这新认得的面孔记在心里。`)]}function vd(e,t,n=()=>.12){let{mat:r,mesh:i,obstacle:a}=e,o=new Map,s=[`#506e3d`,`#698148`,`#819956`].map((e,t)=>r(`leaf-blade-`+t,e)),c=[`#6d874a`,`#8b9e5e`].map((e,t)=>r(`bamboo-blade-`+t,e)),l=[`#e2aaa9`,`#efd0bf`,`#cb8a94`].map((e,t)=>r(`petal-blade-`+t,e)),u=r(`branched-bark`,`#79644c`),d=r(`bamboo-culm`,`#829063`),f=r(`bamboo-node`,`#afb482`),p=r(`flower-center`,`#bb9162`);[...s,...c,...l].forEach(e=>{e.side=2,e.roughness=.95});let m={region:{value:new Wt},size:{value:new G},rotation:{value:new G(1,0)}};for(let e of[...s,...c,...l,u,d,f,p]){let t=e.onBeforeCompile,n=e.customProgramCacheKey.bind(e);e.onBeforeCompile=function(e,n){t.call(this,e,n),Object.assign(e.uniforms,{roomFocusRegion:m.region,roomFocusSize:m.size,roomFocusRotation:m.rotation}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vRoomFocusPosition;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vRoomFocusPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vRoomFocusPosition;
uniform vec4 roomFocusRegion;
uniform vec2 roomFocusSize;
uniform vec2 roomFocusRotation;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
    if (roomFocusRegion.w > 0.5 && vRoomFocusPosition.y > roomFocusRegion.y) {
     vec2 projected = vRoomFocusPosition.xz - vec2(48.0 / 57.0) * (vRoomFocusPosition.y - roomFocusRegion.y) - roomFocusRegion.xz;
     vec2 local = vec2(projected.x * roomFocusRotation.x - projected.y * roomFocusRotation.y, projected.x * roomFocusRotation.y + projected.y * roomFocusRotation.x);
     if (all(lessThan(abs(local), roomFocusSize))) discard;
    }`)},e.customProgramCacheKey=()=>n()+`-interior-foliage-cutaway-v1`}function h(e){m.region.value.set(e?.x||0,e?.base||0,e?.z||0,+!!e),m.size.value.set(e?e.w/2+.15:0,e?e.d/2+.15:0),m.rotation.value.set(Math.cos(e?.rot||0),Math.sin(e?.rot||0))}let g={trees:0,bambooClumps:0,leaves:0,flowers:0,shrubs:0},_=(e,t,n)=>new K(e,t,n),v=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)};function y(e,t,n,r){let i=o.get(e);i||(i=[],o.set(e,i)),i.push(...t.toArray(),...n.toArray(),...r.toArray())}function b(e,t=0){let n=e.clone().normalize(),r=Math.abs(n.y)>.92?_(1,0,0):_(0,1,0),i=new K().crossVectors(n,r).normalize();return i.applyAxisAngle(n,t),{axis:n,side:i,normal:new K().crossVectors(i,n).normalize()}}function x(e,t,n,r,i,a=0){let{axis:o,side:s,normal:c}=b(t,a),l=(t,i,a)=>e.clone().addScaledVector(o,t*n).addScaledVector(s,i*r).addScaledVector(c,a*n),u=l(0,0,0),d=l(.43,-1,.016),f=l(.46,0,.04),p=l(.43,1,.016),m=l(1,0,.025);y(i,u,d,f),y(i,d,m,f),y(i,m,p,f),y(i,p,u,f),g.leaves++}function S(e,t,n=0,r=_(.2,1,.25)){let i=b(r),a=i.side,o=i.normal,s=r.clone().normalize();for(let r=0;r<5;r++){let i=r*Math.PI*2/5+n,c=a.clone().multiplyScalar(Math.cos(i)).addScaledVector(o,Math.sin(i)),u=new K().crossVectors(s,c).normalize(),d=e.clone().addScaledVector(c,t*.12),f=l[(r+Math.floor(n*5))%3],p=d;for(let n=0;n<=6;n++){let r=-Math.PI/2+n/6*Math.PI,i=e.clone().addScaledVector(c,t*(.46+.54*Math.cos(r))).addScaledVector(u,Math.sin(r)*t*.4).addScaledVector(s,Math.cos(r)*t*.12);n&&y(f,d,p,i),p=i}}let c=e.clone().addScaledVector(s,t*.05);for(let e=0;e<6;e++){let n=e*Math.PI/3,r=(e+1)*Math.PI/3;y(p,c,c.clone().addScaledVector(a,Math.cos(n)*t*.18).addScaledVector(o,Math.sin(n)*t*.18),c.clone().addScaledVector(a,Math.cos(r)*t*.18).addScaledVector(o,Math.sin(r)*t*.18))}g.flowers++}function C(e,t,n=u){let r=new Ra(new Ci(e),t<.025?2:Math.max(2,e.length*2),t,t<.025?4:6,!1);i(r,n,0,0,0)}function w(r,i,{size:o=1,pink:c=!1,willow:l=!1,pine:u=!1}={}){let d=r*4.1+i*8.3,f=_(r,n(r,i),i),p=(e,t,n)=>f.clone().add(_(e,t,n).multiplyScalar(o));C([p(0,0,0),p(.08,.9,.02),p(-.12,1.7,-.07),p(.05,2.8,0)],.115*o);let m=l?7:6;for(let e=0;e<m;e++){let t=e*Math.PI*2/m+v(d)*2,n=p(-.06,1.35+e*.12,0),r=p(Math.cos(t)*.7,2.2+v(e+d)*.35,Math.sin(t)*.7),i=p(Math.cos(t)*1.5,2.65+v(e*9+d)*.6,Math.sin(t)*1.5);C([n,r,i],.045*o);for(let n=0;n<3;n++){let a=.35+n*.25,f=r.clone().lerp(i,a),p=t+(n%2?1:-1)*(.45+v(n+d)*.45),m=f.clone().add(_(Math.cos(p)*.72,.2+v(n*11+d)*.34,Math.sin(p)*.72).multiplyScalar(o));if(C([f,f.clone().lerp(m,.55).add(_(0,.08*o,0)),m],.014*o),l)for(let e=0;e<3;e++){let t=p+(e-1)*.3,n=m.clone().add(_(Math.cos(t)*e*.17,0,Math.sin(t)*e*.17).multiplyScalar(o)),r=n.clone().add(_(Math.cos(t)*.14,-(1.1+v(e+d)*.8),Math.sin(t)*.14).multiplyScalar(o));C([n,n.clone().lerp(r,.5).add(_(.1*o,0,0)),r],.008*o);for(let i=0;i<9;i++){let a=n.clone().lerp(r,i/9);for(let n of[-1,1])x(a,_(Math.cos(t+n*.65)*.7,-.4,Math.sin(t+n*.65)*.7),.32*o,.034*o,s[(i+e)%3],n*.3)}}else if(c)for(let e=0;e<15;e++){let t=e/14,n=f.clone().lerp(m,t),r=e*2.4+p;S(n.clone().add(_(Math.cos(r)*.19,Math.sin(e*1.7)*.12,Math.sin(r)*.19).multiplyScalar(o)),(.125+v(d+e)*.06)*o,e*.17,_(Math.cos(r)*.45,1,Math.sin(r)*.45)),e%4==0&&x(n,_(Math.cos(r),.15,Math.sin(r)),.32*o,.045*o,s[1])}else{let t=u?38:42;for(let r=0;r<t;r++){let t=r*2.399+e,i=Math.sqrt(v(r*7+d+n))*(u?.58:.65)*o;x(f.clone().lerp(m,.25+v(r*13+d)*.85).add(_(Math.cos(t)*i,(v(r*3+d)-.35)*.85*o,Math.sin(t)*i)),_(Math.cos(t),.05+v(r+d)*.5,Math.sin(t)),(u?.38:.4)*o,(u?.034:.135)*o,s[(r+n)%3],(v(r*6+d)-.5)*1.1)}}}}e.contactShadow(r,i,4.5*o,3.8*o,n(r,i)+.025),a(r,i,.55,.55,`tree`),t.trees.push({x:r,z:i,r:o}),g.trees++}function T(r,o,s=5){for(let e=0;e<s;e++){let t=e*2.4,a=Math.cos(t)*.65,s=Math.sin(t)*.65,l=3.3+v(e+r)*1.3,u=.18+v(o+e)*.2,p=_(r+a,n(r,o),o+s),m=p.clone().add(_(Math.cos(t)*u,l,Math.sin(t)*u));C([p,p.clone().lerp(m,.6),m],.04,d);for(let n=1;n<9;n++){let a=n/9,o=p.clone().lerp(m,a),s=new La(.043,.009,4,8);if(s.rotateX(Math.PI/2),i(s,f,...o.toArray()),n<4)continue;let l=t+(n%2?1:-1)*.8,u=o.clone().add(_(Math.cos(l)*(.6+n*.025),.15,Math.sin(l)*(.6+n*.025)));C([o,u],.012,d);for(let t=0;t<7;t++){let i=o.clone().lerp(u,(t+.5)/7),a=t%2?1:-1;x(i,_(Math.cos(l+a*.65),.05-t*.025,Math.sin(l+a*.65)),.42+v(e+n+t)*.2,.035+v(t+r)*.015,c[t%2],a*.25)}}}e.contactShadow(r,o,3,2.8,n(r,o)+.025),a(r,o,1.5,1.3,`bamboo`),t.trees.push({x:r,z:o,r:.8}),g.bambooClumps++}function E(e,t,r=.7,i=!1,a=n(e,t)){for(let n=0;n<9;n++){let o=n*2.399,c=Math.sqrt(v(n+e+t))*.45*r,l=_(e+Math.cos(o)*c,a+.05,t+Math.sin(o)*c),u=l.clone().add(_(Math.cos(o)*r*.3,r*(.55+v(n+t)*.4),Math.sin(o)*r*.3));C([l,u],.008);for(let e=0;e<8;e++){let t=l.clone().lerp(u,(e+2)/10),i=o+e*2.4;x(t,_(Math.cos(i),.25,Math.sin(i)),.35*r,.105*r,s[(e+n)%3],.2)}i&&n%2==0&&S(u,.12*r,o)}g.shrubs++}function D(){for(let[e,t]of o){let n=new Er;n.setAttribute(`position`,new Y(t,3)),n.computeVertexNormals(),i(n,e,0,0,0)}return g}return{tree:w,bamboo:T,shrub:E,finish:D,stats:g,setRoomFocus:h}}var yd=class extends Xr{constructor(e,t,n=!1,r=!1,i=1e4){let a=new Er;super(a,t),this.isMarchingCubes=!0;let o=this,s=new Float32Array(36),c=new Float32Array(36),l=new Float32Array(36);this.enableUvs=n,this.enableColors=r,this.init=function(e){this.resolution=e,this.isolation=80,this.size=e,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let t=i*3;this.positionArray=new Float32Array(t*3);let n=new fr(this.positionArray,3);n.setUsage(Be),a.setAttribute(`position`,n),this.normalArray=new Float32Array(t*3);let r=new fr(this.normalArray,3);if(r.setUsage(Be),a.setAttribute(`normal`,r),this.enableUvs){this.uvArray=new Float32Array(t*2);let e=new fr(this.uvArray,2);e.setUsage(Be),a.setAttribute(`uv`,e)}if(this.enableColors){this.colorArray=new Float32Array(t*3);let e=new fr(this.colorArray,3);e.setUsage(Be),a.setAttribute(`color`,e)}a.boundingSphere=new vr(new K,1)};function u(e,t,n){return e+(t-e)*n}function d(e,t,n,r,i,a,d,f,p,m){let h=(n-d)/(f-d),g=o.normal_cache;s[t+0]=r+h*o.delta,s[t+1]=i,s[t+2]=a,c[t+0]=u(g[e+0],g[e+3],h),c[t+1]=u(g[e+1],g[e+4],h),c[t+2]=u(g[e+2],g[e+5],h),l[t+0]=u(o.palette[p*3+0],o.palette[m*3+0],h),l[t+1]=u(o.palette[p*3+1],o.palette[m*3+1],h),l[t+2]=u(o.palette[p*3+2],o.palette[m*3+2],h)}function f(e,t,n,r,i,a,d,f,p,m){let h=(n-d)/(f-d),g=o.normal_cache;s[t+0]=r,s[t+1]=i+h*o.delta,s[t+2]=a;let _=e+o.yd*3;c[t+0]=u(g[e+0],g[_+0],h),c[t+1]=u(g[e+1],g[_+1],h),c[t+2]=u(g[e+2],g[_+2],h),l[t+0]=u(o.palette[p*3+0],o.palette[m*3+0],h),l[t+1]=u(o.palette[p*3+1],o.palette[m*3+1],h),l[t+2]=u(o.palette[p*3+2],o.palette[m*3+2],h)}function p(e,t,n,r,i,a,d,f,p,m){let h=(n-d)/(f-d),g=o.normal_cache;s[t+0]=r,s[t+1]=i,s[t+2]=a+h*o.delta;let _=e+o.zd*3;c[t+0]=u(g[e+0],g[_+0],h),c[t+1]=u(g[e+1],g[_+1],h),c[t+2]=u(g[e+2],g[_+2],h),l[t+0]=u(o.palette[p*3+0],o.palette[m*3+0],h),l[t+1]=u(o.palette[p*3+1],o.palette[m*3+1],h),l[t+2]=u(o.palette[p*3+2],o.palette[m*3+2],h)}function m(e){let t=e*3;o.normal_cache[t]===0&&(o.normal_cache[t+0]=o.field[e-1]-o.field[e+1],o.normal_cache[t+1]=o.field[e-o.yd]-o.field[e+o.yd],o.normal_cache[t+2]=o.field[e-o.zd]-o.field[e+o.zd])}function h(e,t,n,r,i){let a=r+1,u=r+o.yd,h=r+o.zd,_=a+o.yd,v=a+o.zd,y=r+o.yd+o.zd,b=a+o.yd+o.zd,x=0,S=o.field[r],C=o.field[a],w=o.field[u],T=o.field[_],E=o.field[h],D=o.field[v],O=o.field[y],k=o.field[b];S<i&&(x|=1),C<i&&(x|=2),w<i&&(x|=8),T<i&&(x|=4),E<i&&(x|=16),D<i&&(x|=32),O<i&&(x|=128),k<i&&(x|=64);let A=bd[x];if(A===0)return 0;let j=o.delta,M=e+j,N=t+j,P=n+j;A&1&&(m(r),m(a),d(r*3,0,i,e,t,n,S,C,r,a)),A&2&&(m(a),m(_),f(a*3,3,i,M,t,n,C,T,a,_)),A&4&&(m(u),m(_),d(u*3,6,i,e,N,n,w,T,u,_)),A&8&&(m(r),m(u),f(r*3,9,i,e,t,n,S,w,r,u)),A&16&&(m(h),m(v),d(h*3,12,i,e,t,P,E,D,h,v)),A&32&&(m(v),m(b),f(v*3,15,i,M,t,P,D,k,v,b)),A&64&&(m(y),m(b),d(y*3,18,i,e,N,P,O,k,y,b)),A&128&&(m(h),m(y),f(h*3,21,i,e,t,P,E,O,h,y)),A&256&&(m(r),m(h),p(r*3,24,i,e,t,n,S,E,r,h)),A&512&&(m(a),m(v),p(a*3,27,i,M,t,n,C,D,a,v)),A&1024&&(m(_),m(b),p(_*3,30,i,M,N,n,T,k,_,b)),A&2048&&(m(u),m(y),p(u*3,33,i,e,N,n,w,O,u,y)),x<<=4;let F,I,ee,te=0,ne=0;for(;xd[x+ne]!=-1;)F=x+ne,I=F+1,ee=F+2,g(s,c,l,3*xd[F],3*xd[I],3*xd[ee]),ne+=3,te++;return te}function g(e,t,n,r,i,a){let s=o.count*3;if(o.positionArray[s+0]=e[r],o.positionArray[s+1]=e[r+1],o.positionArray[s+2]=e[r+2],o.positionArray[s+3]=e[i],o.positionArray[s+4]=e[i+1],o.positionArray[s+5]=e[i+2],o.positionArray[s+6]=e[a],o.positionArray[s+7]=e[a+1],o.positionArray[s+8]=e[a+2],o.material.flatShading===!0){let e=(t[r+0]+t[i+0]+t[a+0])/3,n=(t[r+1]+t[i+1]+t[a+1])/3,c=(t[r+2]+t[i+2]+t[a+2])/3;o.normalArray[s+0]=e,o.normalArray[s+1]=n,o.normalArray[s+2]=c,o.normalArray[s+3]=e,o.normalArray[s+4]=n,o.normalArray[s+5]=c,o.normalArray[s+6]=e,o.normalArray[s+7]=n,o.normalArray[s+8]=c}else o.normalArray[s+0]=t[r+0],o.normalArray[s+1]=t[r+1],o.normalArray[s+2]=t[r+2],o.normalArray[s+3]=t[i+0],o.normalArray[s+4]=t[i+1],o.normalArray[s+5]=t[i+2],o.normalArray[s+6]=t[a+0],o.normalArray[s+7]=t[a+1],o.normalArray[s+8]=t[a+2];if(o.enableUvs){let t=o.count*2;o.uvArray[t+0]=e[r+0],o.uvArray[t+1]=e[r+2],o.uvArray[t+2]=e[i+0],o.uvArray[t+3]=e[i+2],o.uvArray[t+4]=e[a+0],o.uvArray[t+5]=e[a+2]}o.enableColors&&(o.colorArray[s+0]=n[r+0],o.colorArray[s+1]=n[r+1],o.colorArray[s+2]=n[r+2],o.colorArray[s+3]=n[i+0],o.colorArray[s+4]=n[i+1],o.colorArray[s+5]=n[i+2],o.colorArray[s+6]=n[a+0],o.colorArray[s+7]=n[a+1],o.colorArray[s+8]=n[a+2]),o.count+=3}this.addBall=function(e,t,n,r,i,a){let o=Math.sign(r);r=Math.abs(r);let s=a!=null,c=new J(e,t,n);if(s)try{c=a instanceof J?a:Array.isArray(a)?new J(Math.min(Math.abs(a[0]),1),Math.min(Math.abs(a[1]),1),Math.min(Math.abs(a[2]),1)):new J(a)}catch{c=new J(e,t,n)}let l=this.size*Math.sqrt(r/i),u=n*this.size,d=t*this.size,f=e*this.size,p=Math.floor(u-l);p<1&&(p=1);let m=Math.floor(u+l);m>this.size-1&&(m=this.size-1);let h=Math.floor(d-l);h<1&&(h=1);let g=Math.floor(d+l);g>this.size-1&&(g=this.size-1);let _=Math.floor(f-l);_<1&&(_=1);let v=Math.floor(f+l);v>this.size-1&&(v=this.size-1);let y,b,x,S,C,w,T,E,D,O,k;for(x=p;x<m;x++)for(C=this.size2*x,E=x/this.size-n,D=E*E,b=h;b<g;b++)for(S=C+this.size*b,T=b/this.size-t,O=T*T,y=_;y<v;y++)if(w=y/this.size-e,k=r/(1e-6+w*w+O+D)-i,k>0){this.field[S+y]+=k*o;let e=Math.sqrt((y-f)*(y-f)+(b-d)*(b-d)+(x-u)*(x-u))/l,t=1-e*e*e*(e*(e*6-15)+10);this.palette[(S+y)*3+0]+=c.r*t,this.palette[(S+y)*3+1]+=c.g*t,this.palette[(S+y)*3+2]+=c.b*t}},this.addPlaneX=function(e,t){let n=this.size,r=this.yd,i=this.zd,a=this.field,o,s,c,l,u,d,f,p=n*Math.sqrt(e/t);for(p>n&&(p=n),o=0;o<p;o++)if(d=o/n,l=d*d,u=e/(1e-4+l)-t,u>0)for(s=0;s<n;s++)for(f=o+s*r,c=0;c<n;c++)a[i*c+f]+=u},this.addPlaneY=function(e,t){let n=this.size,r=this.yd,i=this.zd,a=this.field,o,s,c,l,u,d,f,p,m=n*Math.sqrt(e/t);for(m>n&&(m=n),s=0;s<m;s++)if(d=s/n,l=d*d,u=e/(1e-4+l)-t,u>0)for(f=s*r,o=0;o<n;o++)for(p=f+o,c=0;c<n;c++)a[i*c+p]+=u},this.addPlaneZ=function(e,t){let n=this.size,r=this.yd,i=this.zd,a=this.field,o,s,c,l,u,d,f,p,m=n*Math.sqrt(e/t);for(m>n&&(m=n),c=0;c<m;c++)if(d=c/n,l=d*d,u=e/(1e-4+l)-t,u>0)for(f=i*c,s=0;s<n;s++)for(p=f+s*r,o=0;o<n;o++)a[p+o]+=u},this.setCell=function(e,t,n,r){let i=this.size2*n+this.size*t+e;this.field[i]=r},this.getCell=function(e,t,n){let r=this.size2*n+this.size*t+e;return this.field[r]},this.blur=function(e=1){let t=this.field,n=t.slice(),r=this.size,i=this.size2;for(let a=0;a<r;a++)for(let o=0;o<r;o++)for(let s=0;s<r;s++){let c=i*s+r*o+a,l=n[c],u=1;for(let t=-1;t<=1;t+=2){let c=t+a;if(!(c<0||c>=r))for(let t=-1;t<=1;t+=2){let a=t+o;if(!(a<0||a>=r))for(let t=-1;t<=1;t+=2){let o=t+s;if(o<0||o>=r)continue;let d=n[i*o+r*a+c];u++,l+=e*(d-l)/u}}}t[c]=l}},this.reset=function(){for(let e=0;e<this.size3;e++)this.normal_cache[e*3]=0,this.field[e]=0,this.palette[e*3]=this.palette[e*3+1]=this.palette[e*3+2]=0},this.update=function(){this.count=0;let e=this.size-2;for(let t=1;t<e;t++){let n=this.size2*t,r=(t-this.halfsize)/this.halfsize;for(let t=1;t<e;t++){let i=n+this.size*t,a=(t-this.halfsize)/this.halfsize;for(let t=1;t<e;t++)h((t-this.halfsize)/this.halfsize,a,r,i+t,this.isolation)}}this.geometry.setDrawRange(0,this.count),a.getAttribute(`position`).needsUpdate=!0,a.getAttribute(`normal`).needsUpdate=!0,this.enableUvs&&(a.getAttribute(`uv`).needsUpdate=!0),this.enableColors&&(a.getAttribute(`color`).needsUpdate=!0),this.count/3>i&&console.warn(`THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.`)},this.init(e)}},bd=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),xd=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function Sd(e,t,{x:n=-27.2,z:r=-10.9}={}){let i=n+27.2,a=r+10.9,o=e.mat(`sculpted-taihu`,`#b8baae`),s=(t,n,r,o,s,...c)=>e.mesh(t,n,r+i,o,s+a,...c),c=(t,n,...r)=>e.obstacle(t+i,n+a,...r),l=(e,t,n,r,i,a,o,s,c)=>(Math.hypot((e-r)/o,(t-i)/s,(n-a)/c)-1)*Math.min(o,s,c),u=(e,t,n=.13)=>{let r=Tt.clamp(.5+.5*(t-e)/n,0,1);return Tt.lerp(t,e,r)-n*r*(1-r)};function d(e,t,n){let r=new yd(t,o,!1,!1,45e3);r.isolation=0;let[i,a,s,c]=e,l=t;for(let e=0;e<l;e++)for(let t=0;t<l;t++)for(let o=0;o<l;o++){let u=(o/l-.5)*i,d=t/l*a+c,f=(e/l-.5)*s;r.field[o+t*l+e*l*l]=-n(u,d,f)}if(r.update(),r.count>=135e3)throw Error(`Rockery surface exceeded geometry budget`);let u=new Er;return u.setAttribute(`position`,new fr(r.geometry.attributes.position.array.slice(0,r.count*3),3)),u.setAttribute(`normal`,new fr(r.geometry.attributes.normal.array.slice(0,r.count*3),3)),u.setAttribute(`uv`,new fr(new Float32Array(r.count*2),2)),u.scale(i/2,a/2,s/2),u.translate(0,a/2+c,0),u.computeVertexNormals(),u.normalizeNormals(),r.geometry.dispose(),u}function f(e,t,n){return .2*Math.sin(e*4.1+t*2.2)*Math.cos(n*3.9-t*.8)+.09*Math.sin(t*7+e*3)*Math.cos(n*5)}let p=d([11.7,6.7,4.7,-.7],68,(e,t,n)=>{let r=l(e,t,n,-3,1.8,0,1.45,2.1,1.25);for(let i of[[3,1.9,.05,1.45,2.2,1.25],[-2.4,3.8,-.05,1.6,1.35,1.4],[-.5,3.8,.15,1.9,.76,1.18],[1.6,3.65,-.1,1.8,1.1,1.25],[-3.5,4.4,-.2,.9,1.1,1],[3.55,3.8,-.25,.9,1.25,1]])r=u(r,l(e,t,n,...i));r+=f(e,t,n);for(let i of[[0,.85,0,1.8,2,7],[-3,2.5,0,.48,.72,5],[2.95,2.8,.15,.5,.7,5],[-.6,3.8,0,.45,.3,4]])r=Math.max(r,-l(e,t,n,...i));return Math.max(r,-t)});e.contactShadow(n,r,10,5),s(p,o,-27.2,.12,-10.9),c(-30.3,-10.9,3,2.5,`taihu-pier`),c(-24.05,-10.9,3.1,2.5,`taihu-pier`);function m(e,n,r,p,m){let h=d([3.5,7.3,3.8,-.5],48,(e,t,n)=>{let r=l(e,t,n,0,1.6,0,1,1.9,.8);for(let i of[[-.25,3.1,.1,.8,1.6,.8],[.12,4.6,-.05,.65,1.1,.7],[-.25,5.6,.05,.45,.75,.5],[.55,2.4,.1,.7,.9,.65]])r=u(r,l(e,t,n,...i),.22);r+=f(e,t,n)*.7;for(let i of[[.02,1.8,0,.32,.5,4],[-.15,3.5,.1,.28,.53,4],[.05,4.8,0,.2,.33,4]])r=Math.max(r,-l(e,t,n,...i));return Math.max(r,-t)});s(h,o,e,.12,n,r,p/6.2,1,m),c(e,n,r*1.7,1.6,`taihu-spire`),t.rocks.push({x:e+i,z:n+a,r})}m(-31.5,-13.3,1.1,6.2,-.35),m(-23.3,-13.8,.95,5.7,.3),t.rocks.push({x:n,z:r,r:3.7})}var Cd={low:.12,court:1.2,study:2.2,hall:3.6,guest:1.25,hillLanding:2.8,hill:5.6},wd=[{id:`court`,x:-1.5,z:7.25,w:29,d:13.5,y:Cd.court},{id:`hall`,x:-4,z:-12,w:24,d:15,y:Cd.hall},{id:`study`,x:-25,z:-17.5,w:14,d:15,y:Cd.study},{id:`guest`,x:9.75,z:-24.75,w:12.5,d:10.5,y:Cd.guest},{id:`hill-landing`,x:-32,z:9.5,w:7,d:3,y:Cd.hillLanding,natural:!0},{id:`hill`,x:-32,z:-2,w:7,d:6,y:Cd.hill,natural:!0}],Td=[{id:`court-front`,from:[5,18.5],to:[5,14],width:6,low:.12,high:1.2},{id:`court-west`,from:[-21,11.8],to:[-16,11.8],width:3,low:.12,high:1.2},{id:`court-east`,from:[18,4],to:[13,4],width:3.2,low:.12,high:1.2},{id:`hall`,from:[-4,2.5],to:[-4,-4.5],width:6.2,low:1.2,high:3.6},{id:`study-front`,from:[-25,-4],to:[-25,-10],width:3.4,low:.12,high:2.2},{id:`study-rear`,from:[-12,-23],to:[-18,-23],width:2.4,low:.12,high:2.2},{id:`guest`,from:[10,-15],to:[10,-19.5],width:3.2,low:.12,high:1.25},{id:`hill-lower`,from:[-29.8,17],to:[-29.8,11],width:2.8,low:.12,high:2.8},{id:`hill-upper`,from:[-33.2,8],to:[-33.2,1],width:2.8,low:2.8,high:5.6}],Ed=(e,t,n,r=0)=>Math.abs(e-n.x)<=n.w/2+r&&Math.abs(t-n.z)<=n.d/2+r;function Dd(e){return{x:(e.from[0]+e.to[0])/2,z:(e.from[1]+e.to[1])/2,w:Math.abs(e.to[0]-e.from[0])||e.width,d:Math.abs(e.to[1]-e.from[1])||e.width}}function Od(e,t,n=0){return Td.some(r=>Ed(e,t,Dd(r),n))}function kd(e,t){for(let n of Td){if(!Ed(e,t,Dd(n)))continue;let r=n.to[0]-n.from[0],i=n.to[1]-n.from[1],a=((e-n.from[0])*r+(t-n.from[1])*i)/(r*r+i*i);return Tt.lerp(n.low,n.high,Tt.clamp(a,0,1))}for(let n of wd)if(Ed(e,t,n))return n.y;return Cd.low}function Ad(e,t){let{box:n,mesh:r,beam:i,mat:a,mats:o,ball:s,obstacle:c}=e;function l(e,t,a,{wood:l=!1,collision:u=!0}={}){let d=Math.hypot(t[0]-e[0],t[1]-e[1]),f=Math.ceil(d/.9),p=l?`wood`:`ivory`;for(let d=0;d<=f;d++){let m=d/f,h=Tt.lerp(e[0],t[0],m),g=Tt.lerp(e[1],t[1],m);if(!Od(h,g,.4)&&(n(h,a+.43,g,.12,.86,.12,p),l||r(s,o.stone,h,a+.92,g,.12,.12,.12),u&&c(h,g,.12,.12,`terrace-rail`),d<f)){let n=(d+1)/f,r=Tt.lerp(e[0],t[0],n),o=Tt.lerp(e[1],t[1],n);Od(r,o,.4)||i([h,a+.8,g],[r,a+.8,o],.1,p)}}}for(let e of wd){if(e.natural){let t=[],n=[];for(let r=0;r<5;r++){let i=r/4,a=.08+(e.y-.25)*i;for(let o=0;o<20;o++){let s=o/20*Math.PI*2,c=Math.cos(s),l=Math.sin(s),u=1/Math.max(Math.abs(c),Math.abs(l)),d=.85+.13*Math.sin(o*2.1+r*1.8)**2;t.push(e.x+c*u*e.w/2*d,a,e.z+l*u*e.d/2*d),n.push(o/20,i)}}let i=[];for(let e=0;e<4;e++)for(let t=0;t<20;t++){let n=e*20+t,r=e*20+(t+1)%20;i.push(n,n+20,r,r,n+20,r+20)}let o=new Er;o.setAttribute(`position`,new Y(t,3)),o.setAttribute(`uv`,new Y(n,2)),o.setIndex(i),o.computeVertexNormals(),r(o,a(`rock-hill-strata`,`#b4b5a3`),0,0,0)}else{n(e.x,(e.y+.05)/2,e.z,e.w,e.y-.05,e.d,`stone`);for(let t=.42;t<e.y-.15;t+=.48)for(let r of[-1,1])n(e.x,t,e.z+r*e.d/2,e.w,.025,.03,a(`terrace-joint`,`#a7a08e`)),n(e.x+r*e.w/2,t,e.z,.03,.025,e.d,`terrace-joint`)}n(e.x,e.y-.11,e.z,e.w+.05,.22,e.d+.05,e.natural?`stone`:`ivory`),n(e.x,e.y-.025,e.z,e.w-.1,.045,e.d-.1,e.natural||e.id===`court`||e.id===`hall`?`stone`:`grass`),e.id!==`court`&&(l([e.x-e.w/2,e.z+e.d/2],[e.x+e.w/2,e.z+e.d/2],e.y,{wood:e.natural}),e.natural&&(l([e.x-e.w/2,e.z-e.d/2],[e.x-e.w/2,e.z+e.d/2],e.y,{wood:!0}),l([e.x+e.w/2,e.z-e.d/2],[e.x+e.w/2,e.z+e.d/2],e.y,{wood:!0})))}for(let e of Td){let t=e.to[0]-e.from[0],r=e.to[1]-e.from[1],a=Math.hypot(t,r),o=Math.max(Math.ceil(a/.43),Math.ceil((e.high-e.low)/.18)),s=Math.atan2(t,r);for(let i=0;i<o;i++){let c=(i+.5)/o,l=e.from[0]+t*c,u=e.from[1]+r*c,d=Tt.lerp(e.low,e.high,(i+1)/o);n(l,(d+.06)/2,u,e.width,d-.06,a/o+.015,`stone`,s),n(l,d+.005,u,e.width,.035,.07,`ivory`,s)}for(let o of[-1,1]){let l=Math.cos(s)*o*(e.width/2+.2),u=-Math.sin(s)*o*(e.width/2+.2),d=Math.ceil(a/1.1);for(let i=0;i<=d;i++){let a=i/d,o=e.from[0]+t*a+l,s=e.from[1]+r*a+u;n(o,Tt.lerp(e.low,e.high,a)+.4,s,.1,.8,.1,e.id.startsWith(`hill`)?`wood`:`ivory`),c(o,s,.1,.1,`stair-rail`)}i([e.from[0]+l,e.low+.78,e.from[1]+u],[e.to[0]+l,e.high+.78,e.to[1]+u],.1,e.id.startsWith(`hill`)?`wood`:`ivory`)}}t.terraces=wd,t.stairs=Td}var jd=`./assets/interiors-v8/luxury-atlas.png`;function Md(e){let t={silk:[.004,.004,.325,.492],rosecloth:[.337,.004,.325,.492],quilt:[.671,.004,.325,.492],cushion:[.337,.004,.325,.492],"screen-art":[.004,.504,.992,.492]};for(let[t,n]of Object.entries({gilding:`#bd9557`,cobalt:`#35566e`,lacquer:`#79392e`,"screen-art":`#3c3126`,"lamp-paper":`#ead8b5`}))e.mat(`interior-`+t,n);for(let[n,r]of Object.entries(t)){let t=e.mats[`interior-`+n];t.userData.atlasRegion=r,t.userData.interiorAtlas=!0,t.side=2,t.roughness=.72}e.mats[`interior-porcelain`].roughness=.24,e.mats[`interior-ceramic`].roughness=.3,e.mats[`interior-brass`].metalness=.38,e.mats[`interior-brass`].roughness=.4,e.mats[`interior-gilding`].metalness=.22,e.mats[`interior-gilding`].roughness=.48;let n=e.mats[`interior-lamp-paper`];n.emissive.set(`#b98340`),n.emissiveIntensity=.16;let r=Promise.resolve(!0);return typeof window<`u`&&(r=new Promise((n,r)=>{let i=new Eo().load(jd,()=>n(!0),void 0,()=>r(Error(`Interior texture atlas could not load`)));i.colorSpace=Fe,i.anisotropy=4,i.name=`Jiafu_Luxury_Atlas_V8`;for(let n of Object.keys(t)){let t=e.mats[`interior-`+n];t.color.set(`#ffffff`),t.map=i}})),{ready:r,regions:t}}function Nd({B:e,G:t,L:n,C:r,room:i}){let a=0;function o(e,n=.02,r=`gilding`){t(new Ra(new Ci(e.map(e=>new K(...e))),Math.max(8,e.length*3),n,5,!1),0,0,0,1,1,1,r),a++}function s(e,n,r,i=.1,o=`gilding`,s=0){let c=new Wi;for(let e=0;e<=40;e++){let t=e/40*Math.PI*2,n=i*(.77+.23*Math.cos(t*5)),r=Math.cos(t)*n,a=Math.sin(t)*n;e?c.lineTo(r,a):c.moveTo(r,a)}c.closePath(),t(new Oa(c,{depth:.018,bevelEnabled:!0,bevelSegments:1,bevelSize:.006,bevelThickness:.005,steps:1}),e,n,r,1,1,1,o,s),a++}function c(e,t,n,r,i=.24,a=`gilding`){if(!(r<.2)){s(e,t,n,Math.min(r*.07,i*.32),a);for(let c of[-1,1])o([[e+c*r*.05,t-i*.1,n],[e+c*r*.25,t-i*.3,n],[e+c*r*.43,t+i*.1,n],[e+c*r*.28,t+i*.36,n],[e+c*r*.18,t+i*.08,n]],Math.min(.018,r*.012),a),s(e+c*r*.34,t+i*.07,n,Math.min(r*.035,i*.21),a)}}function l(t,n,r,i,a,o=`gilding`){for(let s of[-1,1])e(t+s*i/2,n,r,.026,a,.035,o),e(t,n+s*a/2,r,i,.026,.035,o)}function u(t,n,r,i,a,{m:o=`darkwood`,gold:c=!0}={}){l(t,n,r,i,a,o);let u=Math.max(2,Math.floor(i/.28)),d=Math.max(1,Math.floor(a/.3));for(let s=1;s<u;s++)e(t-i/2+s*i/u,n,r,.026,a,.03,o);for(let s=1;s<d;s++)e(t,n-a/2+s*a/d,r,i,.026,.03,o);if(c)for(let e of[-1,1])s(t+e*i*.42,n,r+.025,Math.min(.08,a*.22))}function d(e,n,r,i,a=.27){let o=new Wi;o.moveTo(-i/2,a/2),o.lineTo(i/2,a/2),o.lineTo(i/2,-a*.13),o.bezierCurveTo(i*.25,-a*.07,i*.32,-a*.5,0,-a*.5),o.bezierCurveTo(-i*.32,-a*.5,-i*.25,-a*.07,-i/2,-a*.13),o.closePath(),t(new Oa(o,{depth:.055,bevelEnabled:!1}),e,n,r,1,1,1,`darkwood`),c(e,n,r+.06,i*.85,a*.7)}function f(e,n,r,i,a){t(new Na(i,a),e,n,r,1,1,1,`screen-art`),l(e,n,r+.025,i+.12,a+.12,`darkwood`),l(e,n,r+.055,i-.04,a-.04);for(let t of[-1,1])c(e,n+t*(a/2+.12),r+.06,i*.9,.18);for(let t=0;t<5;t++)s(e+(t-2)*i*.2,n+a/2+.15+(.15-Math.abs(t-2)*.04),r+.06,.09)}function p(n,r,i,o,s,c=`rosecloth`,l=0){let u=[],d=[],f=[];for(let e=0;e<=8;e++)for(let t=0;t<=16;t++){let n=t/16,r=e/8,i=.76+.24*Math.abs(r-.48)*2;u.push((n-.5)*o*i,(r-.5)*s,Math.cos(n*Math.PI*10)*.045),d.push(n,r)}for(let e=0;e<8;e++)for(let t=0;t<16;t++){let n=e*17+t;f.push(n,n+1,n+16+1,n+1,n+16+2,n+16+1)}let p=new Er;p.setAttribute(`position`,new Y(u,3)),p.setAttribute(`uv`,new Y(d,2)),p.setIndex(f),p.computeVertexNormals(),t(p,n,r,i,1,1,1,c,l),e(n,r-s*.02,i+.06,o*.8,.035,.025,`gilding`,l),t(new fi(.025,.04,.17,6),n+o*.18,r-s*.15,i+.08,1,1,1,`gilding`),a++}function m(t,n,r,i,a=2.65){for(let o of[-1,1])e(t,a,n+o*i/2,r+.14,.11,.12,`darkwood`),e(t+o*r/2,a,n,.12,.11,i+.14,`darkwood`),u(t,a-.22,n+o*i/2,r,.32),p(t+o*(r/2-.12),a-.78,n+i/2,.43,1.45,`rosecloth`);for(let o=-r/2+.22;o<r/2;o+=.3)e(t+o,a+.025,n,.025,.04,i,`darkwood`);for(let o=-i/2+.2;o<i/2;o+=.3)e(t,a+.05,n+o,r,.04,.025,`darkwood`)}function h(e,n,r,i){for(let[a,o]of[[.12,.2],[.68,.22],[.94,.12]])t(new La(o*i,.012*i,5,20).rotateX(Math.PI/2),e,n+a*i,r,1,1,1,`cobalt`);for(let a=0;a<5;a++){let o=a*Math.PI*2/5,s=.29*i,c=e+Math.sin(o)*s,l=r+Math.cos(o)*s;for(let e=0;e<5;e++){let r=e*Math.PI*2/5,a=Math.cos(r)*.052*i;t(new di(.032*i,8),c+Math.cos(o)*a,n+(.42+Math.sin(r)*.06)*i,l-Math.sin(o)*a,1,1,1,`cobalt`,o)}}a++}function g(){let t=i.w,n=i.d,r=i.style===`hall`?3.6:i.style===`study`?2.45:1.88,a=i.style===`hall`?2.1:1.2;for(let e of[-1,1])p(-t/2+.23,r-a/2,e*n*.24,.42,a,i.style===`bedroom`?`rosecloth`:`silk`,Math.PI/2);e(-t/2+.24,r,0,.12,.13,n*.63,`darkwood`)}function _(){let t=i.style===`hall`?3.92:i.style===`study`?2.5:i.style===`bedroom`?2.32:i.style===`sewing`?2.16:i.style===`tea`?2.08:1.62;e(0,t,-i.d/2+.24,i.w-.35,.16,.16,`darkwood`);for(let e=-i.w/2+.7;e<i.w/2-.5;e+=1.15)c(e,t-.17,-i.d/2+.34,.95,.24,`woodinlay`);for(let e of[-1,1])o([[e*(i.w/2-.35),t-.68,-i.d/2+.34],[e*(i.w/2-.6),t-.35,-i.d/2+.34],[e*(i.w/2-1.2),t-.12,-i.d/2+.34]],.045,`darkwood`)}function v(n,r,i){e(n,r,i,1.05,.06,.12,`darkwood`);for(let a=0;a<5;a++){let o=n+(a-2)*.19;t(new La(.038,.012,4,12),o,r-.07,i+.05,1,1,1,`brass`),e(o,r-.24,i+.05,.1,.27,.035,`woodinlay`),e(o,r-.24,i+.074,.02,.13,.006,`ink`)}}return{curve:o,flower:s,scrollwork:c,border:l,lattice:u,apron:d,mural:f,curtain:p,canopy:m,porcelainPattern:h,windowDrapes:g,cornice:_,keyRack:v,get count(){return a}}}var Pd=[{id:`hall`,name:`贾母正房`,arch:`Grandmother_Antechamber`,x:-4,z:-12,w:22,d:12.5,base:3.6,rot:0,style:`hall`},{id:`study`,name:`西厢书阁`,arch:`West_Study`,x:-25,z:-18,w:11,d:8.5,base:2.2,rot:0,style:`study`},{id:`guest`,name:`东侧绣楼`,arch:`East_Guest_Room`,x:10,z:-25.5,w:10.5,d:8.5,base:1.25,rot:0,style:`bedroom`},{id:`tea`,name:`茶房`,arch:`Tea_Room`,x:-26,z:21,w:11,d:6,base:.12,rot:0,style:`tea`},{id:`service`,name:`随侍歇房`,arch:`Front_Service_Room`,x:6,z:25,w:13,d:6,base:.12,rot:0,style:`service`},{id:`sewing`,name:`针线绣房`,arch:`Front_East_Wing`,x:18.2,z:15,w:10,d:5,base:.12,rot:0,style:`sewing`},{id:`music`,name:`临水琴室`,arch:`Garden_Listening_Room`,x:28,z:5,w:14,d:6,base:.12,rot:Math.PI/2,style:`music`},{id:`gatehouse`,name:`门房`,arch:`West_Gatehouse`,x:-13,z:21,w:7,d:5,base:.12,rot:Math.PI/2,style:`gatehouse`}];function Fd(e,t){let{mat:n,mats:r,mesh:i,box:a,beam:o,cyl:s,ball:c,obstacle:l}=e;for(let[e,t]of Object.entries({darkwood:`#513326`,polishedwood:`#785039`,woodinlay:`#bc9a67`,paper:`#eee1c6`,silk:`#7b9a8b`,rosecloth:`#bd8f86`,ink:`#3d514b`,porcelain:`#d8dfd0`,brass:`#bc9459`,quilt:`#9da78b`,ceramic:`#8ca89b`,cushion:`#b67d69`}))n(`interior-`+e,t);let u=Md(e),d=e=>r[`interior-`+e]||r[e],f={rooms:8,furniture:0,books:0,ornaments:0},p=[];f.carvedDetails=0;for(let n of Pd){let r=Math.cos(n.rot),u=Math.sin(n.rot),m=(e,t)=>({x:n.x+e*r+t*u,z:n.z-e*u+t*r}),h=(e,t,r,i,o,s,c=`polishedwood`,l=0)=>a(n.x+e,n.base+t,n.z+r,i,o,s,d(c),l),g=(e,t,r,a,o=1,s=1,c=1,l=`brass`,u=0)=>i(e,d(l),n.x+t,n.base+r,n.z+a,o,s,c,u),_=(e,t,r=.045,i=`darkwood`)=>o([n.x+e[0],n.base+e[1],n.z+e[2]],[n.x+t[0],n.base+t[1],n.z+t[2]],r,d(i)),v=(e,t,r,i,a)=>(f.furniture++,l(n.x+e,n.z+t,r,i,`furniture:`+n.id+`:`+a)),y=Nd({B:h,G:g,L:_,C:v,room:n});function b(t,r,i,a){e.rotated(a,n.x+t,n.z+r,i)}function x(e,t,n,r,i=.88){h(e,i,t,n,.13,r);for(let a of[-1,1])h(e,i+.072,t+a*(r/2-.06),n-.05,.018,.025,`gilding`),y.apron(e,i-.16,t+a*r*.4,n-.16,.22)}function S(e,t,n=2.4,r=1.2,i=.85){x(e,t,n,r,i);for(let a of[-1,1])for(let o of[-1,1]){let s=e+a*n*.39,c=t+o*r*.34;y.curve([[s,.08,c],[s+a*.035,i*.45,c+o*.03],[s,i-.1,c]],.058,`darkwood`),h(s,.08,c,.17,.1,.17,`darkwood`)}v(e,t,n,r,`table`)}function C(e,t,n=0){b(e,t,n,()=>{h(e,.43,t,.66,.12,.62),h(e,.51,t,.56,.055,.5,`cushion`);for(let n of[-.23,.23])for(let r of[-.2,.2])h(e+n,.21,t+r,.07,.4,.07,`darkwood`);y.apron(e,.36,t+.26,.55,.14)}),v(e,t,.7,.66,`stool`)}function w(e,t,n=0,{wide:r=1,cloth:i=`silk`}={}){b(e,t,n,()=>{h(e,.5,t,1.05*r,.13,.93),h(e,.59,t,.9*r,.075,.78,i);for(let n of[-.4,.4])for(let i of[-.32,.32])h(e+n*r,.24,t+i,.09,.48,.09,`darkwood`);for(let n of[-.46,.46])h(e+n*r,1.04,t-.35,.085,1,.085,`darkwood`),_([e+n*r,1.48,t-.34],[e+n*r*.65,1.6,t-.3],.09),_([e+n*r,.96,t-.3],[e+n*r,.92,t+.35],.07),h(e+n*r,.74,t+.3,.065,.4,.065,`darkwood`);h(e,1.53,t-.33,1.09*r,.1,.09,`darkwood`),h(e,1.15,t-.36,.43*r,.57,.055,`woodinlay`),g(new La(.13,.025,4,16),e,1.2,t-.32,r,1,1,`darkwood`),y.scrollwork(e,1.19,t-.29,.42*r,.38),y.apron(e,.39,t+.42,.85*r,.22),h(e,1.13,t-.27,.38*r,.42,.02,i)}),v(e,t,1.12*r,1.05,`chair`)}function T(e,t,n,r,i=`silk`){h(e,.035,t,n,.045,r,i);for(let i of[-1,1])h(e,.061,t+i*(r/2-.13),n-.2,.012,.075,`paper`),h(e+i*(n/2-.13),.061,t,.075,.012,r-.2,`paper`);for(let i=-n/2+.35;i<n/2-.2;i+=.32)for(let n of[-1,1])h(e+i,.04,t+n*(r/2+.08),.025,.015,.14,`paper`);for(let i of[-1,1])h(e,.068,t+i*(r/2-.23),n-.4,.013,.022,`gilding`),h(e+i*(n/2-.23),.068,t,.022,.013,r-.4,`gilding`)}function E(e,t,n,r=.65){let i=[[.12,0],[.16,.05],[.28,.25],[.3,.48],[.22,.68],[.11,.78],[.1,.94],[.15,1]].map(([e,t])=>new G(e*r,t*r));g(new Ma(i,16),e,t,n,1,1,1,`porcelain`),g(new La(.15*r,.018*r,5,16).rotateX(Math.PI/2),e,t+r,n,1,1,1,`ceramic`),y.porcelainPattern(e,t,n,r),f.ornaments++}function D(e,t,n,r=.75){E(e,t,n,.46*r);for(let i=0;i<5;i++){let a=i*2.4,o=[e+Math.cos(a)*.2*r,t+.9*r,n+Math.sin(a)*.2*r];_([e,t+.36*r,n],o,.018,`ink`);for(let i=0;i<3;i++){let s=.35+i*.2,c=Tt.lerp(e,o[0],s),l=Tt.lerp(t+.36*r,o[1],s),u=Tt.lerp(n,o[2],s),d=a+i*1.3,f=new Er;f.setAttribute(`position`,new Y([0,0,0,Math.cos(d)*.15*r,.12*r,Math.sin(d)*.15*r,Math.cos(d)*.4*r,.2*r,Math.sin(d)*.4*r,Math.cos(d+.6)*.2*r,.06*r,Math.sin(d+.6)*.2*r],3)),f.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]),f.computeVertexNormals(),f.setAttribute(`uv`,new Y([0,0,0,1,1,1,1,0],2)),g(f,c,l,u,1,1,1,`silk`)}}}function O(e,t,n,r=.5,i=.7,a=`silk`,o=0){h(e,t+.055,n,r,.11,i,a,o),h(e,t+.056,n+.015,r-.06,.065,i-.045,`paper`,o),h(e-r*.44,t+.06,n,.04,.12,i,a,o);for(let a=0;a<3;a++)h(e+r*.2,t+.115,n+(a-1)*i*.13,.025,.008,.035,`paper`,o);f.books++}function k(e,t,n,r=.75){g(new fi(.08,.08,r,10).rotateX(Math.PI/2),e,t+.09,n,1,1,1,`paper`);for(let i of[-1,1])g(c,e,t+.09,n+i*r*.54,.065,.065,.035,`darkwood`)}let A=e=>e+.065;function j(e,t,n=2,r=.8,i=1.6,{books:a=!1}={}){for(let a of[-1,1])h(e+a*(n/2-.075),i/2,t,.15,i,r,`darkwood`);if(h(e,i,t,n+.12,.12,r+.1),h(e,.17,t,n,.13,r),h(e,i/2,t-r/2+.05,n,i,.08,`darkwood`),a)for(let a=0;a<4;a++){let o=.35+a*(i-.45)/4;h(e,o,t,n-.12,.09,r);for(let i=0;i<Math.floor(n/.2)-1;i++){let s=e-n/2+.23+i*.2,c=.31+.12*Math.sin(i*2+a)**2;h(s,o+c/2+.05,t+.02,.15,c,r*.65,[`silk`,`rosecloth`,`quilt`][i%3]),h(s,o+c*.68,t+r*.36,.09,.12,.01,`paper`),f.books++}}else for(let a of[-1,1])h(e+a*n*.245,i*.54,t+r/2+.025,n*.46,i*.72,.07),h(e+a*n*.245,i*.54,t+r/2+.07,n*.37,i*.59,.035,`darkwood`),g(new La(.055,.012,4,12),e+a*.12,i*.56,t+r/2+.12,1,1,1,`brass`);for(let a of[-1,1])h(e,A(i)+a*.025,t+r/2+.03,n+.14,.035,.045,`gilding`);if(y.scrollwork(e,i-.08,t+r/2+.08,n*.88,.2),!a)for(let a of[-1,1])y.border(e+a*n*.245,i*.54,t+r/2+.1,n*.36,i*.58),y.scrollwork(e+a*n*.245,i*.56,t+r/2+.13,n*.29,i*.23);v(e,t,n+.12,r+.12,a?`bookshelf`:`cabinet`)}function M(e,t,n=1.3,r=.8){h(e,.29,t,n,.56,r),h(e,.59,t,n+.05,.12,r+.05,`darkwood`);for(let i of[-1,1])h(e+i*n*.32,.34,t,.075,.58,r+.03,`brass`);h(e,.44,t+r/2+.03,.16,.18,.025,`brass`),y.border(e,.32,t+r/2+.04,n-.15,.38),y.scrollwork(e,.32,t+r/2+.07,n*.58,.27),v(e,t,n+.05,r+.05,`chest`)}function N(e,t,n=2,r=1.5,i=2.1,a=`mountain`){h(e,i,t,n,r,.055,`paper`);for(let a of[-1,1])h(e+a*n/2,i,t,.075,r+.12,.1,`darkwood`),g(new fi(.045,.045,n+.25,10).rotateZ(Math.PI/2),e,i+a*r/2,t+.025,1,1,1,`darkwood`);if(a===`birds`)y.mural(e,i,t+.06,n,r),f.ornaments++;else{if(a===`mountain`){for(let a=0;a<3;a++){let o=new Wi,s=e-n*.42+a*n*.24,c=i-r*.3;o.moveTo(0,0),o.quadraticCurveTo(n*.13,r*(.34+a*.08),n*.28,r*(.65-a*.15)),o.quadraticCurveTo(n*.31,r*.2,n*.5,0),o.closePath(),g(new Fa(o),s,c,t+.04,1,1,1,a===1?`silk`:`quilt`)}g(new di(n*.055,16),e+n*.31,i+r*.28,t+.043,1,1,1,`rosecloth`)}else for(let a=0;a<3;a++){let o=e+(a-1)*n*.22;_([o,i-r*.4,t+.05],[o+n*.08,i+r*.36,t+.05],.018,`ink`);for(let e=0;e<4;e++)for(let a of[-1,1])_([o,i-r*.28+e*r*.16,t+.052],[o+a*n*.16,i-r*.18+e*r*.16,t+.055],.015,`ink`)}f.ornaments++}}function P(e,t,r=2.6,i=1.7,a=0){b(e,t,a,()=>{for(let a=0;a<3;a++){let o=e+(a-1)*r/3;h(o,i/2+.12,t,r/3-.035,i,.07,`darkwood`),h(o,i/2+.12,t+.045,r/3-.15,i-.22,.02,n.style===`bedroom`?`quilt`:`silk`),y.border(o,i/2+.12,t+.075,r/3-.15,i-.22);for(let e=0;e<5;e++)h(o+(e-2)*r/19,i*.8,t+.07,.028,i*.24,.025,`woodinlay`);h(o,.1,t,r/3,.12,.45,`darkwood`)}});let o=Math.abs(Math.cos(a)),s=Math.abs(Math.sin(a));v(e,t,o*r+s*.5,s*r+o*.5,`screen`)}function F(e,t,n){g(new fi(.09,.065,.11,12),e,t+.055,n,1,1,1,`porcelain`),g(new fi(.075,.075,.012,12),e,t+.112,n,1,1,1,`ink`),g(new fi(.14,.14,.02,12),e,t,n,1,1,1,`porcelain`)}function I(e,t,n){g(c,e,t+.15,n,.2,.17,.18,`ceramic`),g(new fi(.13,.16,.05,12),e,t+.29,n,1,1,1,`porcelain`),g(c,e,t+.34,n,.04,.045,.04,`brass`),_([e+.15,t+.19,n],[e+.34,t+.25,n],.085,`ceramic`),g(new La(.14,.027,6,18),e-.16,t+.18,n,1,1,1,`brass`)}function ee(e,t,n){g(new fi(.23,.13,.22,12),e,t+.15,n,1,1,1,`brass`),g(new fi(.19,.19,.025,12),e,t+.275,n,1,1,1,`ink`);for(let r of[-1,1])g(new La(.09,.022,5,12),e+r*.23,t+.22,n,1,1,1,`brass`);for(let r=0;r<3;r++)_([e+(r-1)*.06,t+.28,n],[e+(r-1)*.06,t+.65,n],.012,`woodinlay`)}function te(e,t,n=3.6,r=2.7,{canopy:i=!1,tone:a=`silk`}={}){h(e,.3,t,n,.5,r,`darkwood`),h(e,.59,t,n-.12,.16,r-.12,`paper`),h(e,.72,t+.23,n-.25,.12,r*.6,a);for(let i of[-1,1])h(e+i*n*.23,.77,t-r*.3,n*.3,.18,r*.24,`rosecloth`);h(e,1,t-r/2+.04,n+.05,.9,.12);for(let i of[-1,1])h(e+i*n/2,.68,t,.1,.45,r),h(e+i*n/2,.12,t,.15,.2,r);if(y.apron(e,.35,t+r/2+.06,n-.2,.28),y.scrollwork(e,1.04,t-r/2+.12,n*.82,.52,`woodinlay`),i){for(let i of[-1,1])for(let a of[-1,1])h(e+i*n*.47,1.37,t+a*r*.46,.09,2.7,.09,`darkwood`);y.canopy(e,t,n,r,2.7)}v(e,t,n+.12,r+.1,`bed`)}function ne(e,t,r=5.5,i=2.2,a=`rosecloth`){h(e,.34,t,r,.56,i,`darkwood`),h(e,.68,t,r-.16,.16,i-.12,a);let o=n.style===`hall`?1.95:1.64,s=new Wi;s.moveTo(-r/2,.65),s.lineTo(-r/2,o-.43),s.bezierCurveTo(-r*.34,o-.43,-r*.26,o-.04,-r*.12,o-.09),s.quadraticCurveTo(0,o+.1,r*.12,o-.09),s.bezierCurveTo(r*.26,o-.04,r*.34,o-.43,r/2,o-.43),s.lineTo(r/2,.65),s.closePath(),g(new Oa(s,{depth:.1,bevelEnabled:!0,bevelSegments:2,bevelSize:.025,bevelThickness:.025,steps:1}),e,0,t-i/2,1,1,1,`darkwood`),y.curve([[e-r/2,o-.43,t-i/2+.13],[e-r*.32,o-.31,t-i/2+.13],[e-r*.16,o-.1,t-i/2+.13],[e,o-.04,t-i/2+.13],[e+r*.16,o-.1,t-i/2+.13],[e+r*.32,o-.31,t-i/2+.13],[e+r/2,o-.43,t-i/2+.13]],.022);for(let n of[-1,0,1]){let s=e+n*r*.3;h(s,1.18,t-i/2+.12,r*.25,.64,.026,a),y.border(s,1.18,t-i/2+.15,r*.25,.64),y.scrollwork(s,o-.33,t-i/2+.16,r*.22,.27)}y.apron(e,.33,t+i/2+.04,r-.18,.32);for(let n of[-1,1])h(e+n*(r/2-.06),.95,t,.1,.55,i,`darkwood`),g(new fi(.19,.19,i*.62,12).rotateX(Math.PI/2),e+n*r*.35,.95,t-.15,1,1,1,a),h(e+n*r*.2,1.1,t-i*.3,r*.3,.48,.14,a);v(e,t,r+.12,i+.12,`couch`)}function re(e,t,n=1.7,r=2.25){j(e,t,n,.7,r);for(let r=0;r<3;r++){let i=.4+r*.58;h(e,i+.2,t+.39,n-.22,.32,.045,`darkwood`),h(e,i,t+.48,n-.12,.06,.35,`darkwood`),E(e+(r%2?.27:-.27),i+.04,t+.45,.38),k(e-(r%2?.3:-.3),i+.04,t+.42,.4)}}function ie(e,t){for(let n of[-1,1])_([e+n*1.1,.1,t-.55],[e+n*1.1,1.4,t+.55],.09),_([e+n*1.1,.1,t+.55],[e+n*1.1,1.4,t-.55],.09);let n=new Na(2.1,1.25);n.rotateX(-Math.PI/2+.35),g(n,e,1.17,t,1,1,1,`quilt`);let r=Math.cos(.35),i=Math.sin(.35);for(let n of[-1,1])_([e-1.16,1.17+n*.7*i,t+n*.7*r],[e+1.16,1.17+n*.7*i,t+n*.7*r],.085),_([e+n*1.16,1.17-.7*i,t-.7*r],[e+n*1.16,1.17+.7*i,t+.7*r],.085);v(e,t,2.5,1.4,`embroidery-frame`)}function ae(e,t){j(e,t,2.6,.66,1.95,{books:!0});for(let n=0;n<3;n++)for(let r=0;r<3;r++){let i=[`silk`,`rosecloth`,`quilt`][(r+n)%3],a=e+(r-1)*.73,o=.5+n*.46;g(new fi(.16,.16,.62,12).rotateZ(Math.PI/2),a,o,t+.38,1,1,1,i),g(new di(.115,12),a-.32,o,t+.4,1,1,1,`paper`,Math.PI/2)}}function oe(e,t,n=2.05){g(new fi(.21,.19,.44,8),e,n,t,1,1,1,`lamp-paper`);for(let r=0;r<8;r++){let i=r*Math.PI/4;_([e+Math.cos(i)*.21,n-.22,t+Math.sin(i)*.21],[e+Math.cos(i)*.21,n+.22,t+Math.sin(i)*.21],.015,`darkwood`)}g(s,e,n+.31,t,.018,.3,.018,`brass`),g(s,e,n-.32,t,.018,.18,.018,`brass`)}let L=[],R=(e,t,n,r,i)=>L.push({id:e,name:t,...m(n,r),kind:`look`,text:i});e.rotated(()=>{if(h(0,.35,-n.d/2+.2,n.w-.3,.62,.09,`darkwood`),h(-n.w/2+.2,.35,0,.09,.62,n.d-.3,`darkwood`),y.cornice(),y.windowDrapes(),n.style!==`hall`)for(let e=-n.d/2+.25;e<n.d/2-.2;e+=.42)h(0,.025,e,n.w-.4,.035,.395,`polishedwood`);if(n.style===`hall`){T(0,1,7.2,6),ne(0,-3.85,5.8,2.2),h(0,.18,-2.15,2.8,.35,.65,`darkwood`),h(0,.4,-2.15,2.65,.08,.56,`rosecloth`),v(0,-2.15,2.8,.7,`footstool`),N(0,-6.02,7.8,2.65,2.64,`birds`);for(let e of[-1,1])h(e*5.45,1.85,-2.35,.17,3.7,.17,`darkwood`),v(e*5.45,-2.35,.2,.2,`carved-partition-post`),y.curve([[e*5.4,2.75,-2.31],[e*5.08,3.1,-2.31],[e*4.4,3.4,-2.31],[e*3.75,3.46,-2.31]],.07,`darkwood`),y.scrollwork(e*4.65,3.25,-2.25,1.2,.33);h(0,3.66,-2.35,11.1,.16,.18,`darkwood`),y.lattice(0,3.43,-2.31,10.75,.3,{gold:!1}),y.scrollwork(0,3.43,-2.26,2.3,.25);for(let e of[-1,1]){for(let t of[-2.3,.5,3.3])w(e*7.6,t,-e*Math.PI/2);for(let t of[-.9,1.9])S(e*7.6,t,1.05,1,.72),F(e*7.6,.8,t);re(e*9.25,-4.6,1.6,2.4),oe(e*5.8,-4.9,3.05),E(e*4.2,1,-4.6,.9),S(e*4.2,-4.6,1.2,.9,.9)}S(-4,-2.4,1.25,.95,.85),ee(-4,.93,-2.4),R(`incense`,`案上香炉`,-4,-1.2,`小小香炉安放在茶案上，铜色温润。我看着细香，才觉出这屋里连安静也有自己的规矩。`)}else if(n.style===`study`){T(.3,1.5,3.2,2.7,`quilt`),j(-3.1,-3.45,3.7,.75,2.35,{books:!0}),j(1.35,-3.45,3.7,.75,2.35,{books:!0}),S(-1,-1,3.5,1.6),O(-1.3,.94,-.9,.7,.8),O(-2,.94,-1.2,.5,.65,`rosecloth`),k(-.1,.95,-1.15),g(new fi(.13,.13,.26,12),-.1,1.04,-.6,1,1,1,`ceramic`);for(let e=0;e<4;e++)_([-.1+(e-1.5)*.04,1.08,-.6],[-.14+e*.035,1.5,-.6],.017,`darkwood`);h(-.55,.97,-.55,.42,.07,.27,`ink`),w(-1,-2.2),re(4.4,-1.3,1.3,2.15),D(4.3,.02,2.8,.75),N(-.8,-4.02,2.1,.85,2.05,`bamboo`),oe(3,-2.8),R(`inkstone`,`笔墨砚台`,.9,.4,`笔与砚都收拾得妥帖。看见案头的书墨，我仿佛又回到父亲教我读书的清晨，心中稍稍安定下来。`)}else if(n.style===`bedroom`)T(.9,1.7,3.1,2.9,`rosecloth`),te(-2.6,-1.3,3.7,2.7,{canopy:!0}),S(2.8,-1.7,2.1,.95,.8),g(new di(.43,24),2.8,1.62,-1.94,1,1,1,`porcelain`),g(new La(.45,.045,6,24),2.8,1.62,-1.91,1,1,1,`brass`),h(2.8,1.15,-1.9,.1,.45,.1,`darkwood`),h(2.8,.91,-1.9,.62,.09,.34,`darkwood`),h(3.45,.94,-1.6,.32,.16,.26,`rosecloth`),C(2.8,-.5),j(3.6,-3.35,2.1,.8,2.1),M(-3.8,2.8,1.6,.8),P(1.35,-2.85,2.2,1.65,.18),N(-.6,-4.02,1.4,1,1.75,`bamboo`),D(4.1,.02,2.7,1),oe(.2,-3.3,2.3),R(`mirror`,`菱花妆镜`,2.8,.75,`镜边搁着小小的妆奁，床帐垂成柔和的影子。我尚不熟悉这间屋子，却已经能想象夜里灯火微明的模样。`);else if(n.style===`tea`){S(0,-1,2.8,1.3,.78),h(0,.87,-1,1.6,.045,.72,`darkwood`),I(0,.9,-1),F(-.52,.9,-.85),F(.52,.9,-.85),C(-2.2,-.6),C(2.2,-.6),b(-4.8,-.65,Math.PI/2,()=>j(-4.8,-.65,2.6,.75,1.65)),j(-.2,-2.35,6.8,.65,1.55);for(let e=0;e<9;e++){let t=-2.8+e*.66;g(new fi(.17,.17,.3,12),t,1.77,-2.3,1,1,1,e%2?`porcelain`:`lacquer`)}g(new Ma([new G(.35,0),new G(.52,.4),new G(.47,.78),new G(.31,.86)],16),4.1,.02,-1.65,1,1,1,`ceramic`),g(new fi(.38,.3,.42,12),3.8,.27,.55,1,1,1,`brass`),g(new fi(.3,.3,.035,12),3.8,.5,.55,1,1,1,`cushion`),I(3.8,.52,.55),N(3.8,-2.79,1.8,.78,1.7,`bamboo`),oe(-3,-1.8),oe(3,-1.8),R(`kettle`,`温水小炉`,3,1.45,`炉上水声细细，茶房里都是暖意。替客人续一盏茶，原也要这样耐心地守着。`)}else if(n.style===`service`){te(-3.8,-1.3,3.3,1.8,{tone:`quilt`}),te(3.7,-1.3,3.3,1.8,{tone:`quilt`});for(let e of[-5.3,-2.3,2.2,5.2])h(e,1,-2.05,.065,2,.065,`darkwood`),y.curtain(e,1.25,-2.05,.42,1.45,`quilt`);for(let e of[-3.8,3.7])h(e,2,-2.05,3.4,.08,.08,`darkwood`);h(-3.7,.86,-1.2,1.1,.2,.65,`rosecloth`),S(0,-1.2,1.8,1,.64),F(0,.72,-1.2),C(0,.3),M(-5.4,1.9,1.25,.75),M(5.3,1.9,1.25,.75),j(0,-2.55,1.7,.65,1.35),oe(2,-1.7,1.6),R(`folded-quilt`,`叠好的薄衾`,-3.7,.4,`薄衾叠得方正，床脚收着日用箱笼。大宅里来往忙碌的人，也在这里留着一小处可以安睡的地方。`)}else if(n.style===`sewing`){ie(-2.7,-.65),ae(-3.05,-2.1),S(2.6,-.7,2.15,1.2,.82);for(let e=0;e<3;e++)h(2.25+e*.25,.94+e*.09,-.7,1,.09,.7,[`silk`,`rosecloth`,`quilt`][e]),g(new fi(.08,.08,.22,10),3.35+e*.13,1,-.4,1,1,1,`brass`);C(-2.7,1.05),C(2.6,1.05),j(0,-1.95,1.65,.65,1.5),N(0,-2.28,1.45,.75,1.8,`bamboo`),R(`embroidery`,`花样绣架`,-1.6,.85,`绷面上绣着尚未收针的花枝，旁边铺着几色丝线。花落时留不住，绣到绢上，却仿佛还能多开一阵。`)}else if(n.style===`music`){T(-2.9,.1,4.3,3.3,`quilt`),S(-3,-1,3.7,.95,.7);let e=new Wi;e.moveTo(-1.55,-.2),e.quadraticCurveTo(-1.7,0,-1.45,.25),e.lineTo(1.45,.18),e.quadraticCurveTo(1.72,0,1.4,-.17),e.closePath();let t=new Oa(e,{depth:.11,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:1,steps:1});t.rotateX(-Math.PI/2),g(t,-3,.83,-1,1,1,1,`darkwood`);for(let e=0;e<7;e++)_([-4.4,.98,-1.16+e*.046],[-1.6,.98,-1.16+e*.046],.008,`paper`);C(-3,.35),ne(3.8,-1.5,3.7,1.55,`silk`),S(1,-1.8,1.3,.8,.65),ee(1,.73,-1.8),j(-5.9,-1.7,1.3,.75,1.5,{books:!0}),D(5.5,.02,1.6,1.1),N(0,-2.79,3.7,1.1,1.1),oe(3,-1.9,1.65),R(`qin`,`临窗古琴`,-1.9,.75,`七弦静卧在案，窗外是池水与柳影。我还未拨弦，仿佛已经听见一段清音，从风里慢慢走来。`)}else y.keyRack(.85,1.53,-2.23),S(-1,-1.15,2.25,1,.75),O(-1,.84,-1.1,.65,.7,`quilt`),k(-.35,.85,-1.25,.6),w(-1,-0,Math.PI),j(2.3,-1.65,1.25,.75,1.55),M(-2.5,1.25,1.05,.7),oe(1.2,-1.5,1.6),N(-.4,-2.29,1.65,.9,1.16,`bamboo`),R(`ledger`,`门房簿册`,.3,.85,`簿册记着府中往来，旁边整齐搁着钥匙。每一重门后，都有等候与照看它的人。`)},n.x,n.z,n.rot),f.carvedDetails+=y.count,L.forEach(e=>t(e.id,e.name,e.x,e.z,e.kind,e.text));let se=m(0,n.d/2+1),ce=m(0,Math.min(2,n.d/2-1));p.push({...n,entrance:se,inside:ce,contains(e,t,i=0){let a=e-n.x,o=t-n.z,s=a*r-o*u,c=a*u+o*r;return Math.abs(s)<n.w/2-i&&Math.abs(c)<n.d/2-i}})}return{rooms:p,stats:f,assetsReady:u.ready}}var Id={minX:-38,maxX:38,minZ:-31,maxZ:32},Ld={x:20,z:25},Rd={spawn:Ld,mainEntrance:{x:-2.5,z:-6.5},mainInterior:{x:-4,z:-10},rockerySouth:{x:-24.5,z:12},rockeryNorth:{x:-24.5,z:2},hillBase:{x:-29.8,z:17.3},hillTop:{x:-32,z:-.7},bridgeBase:{x:23,z:.2},pavilion:{x:29,z:-19},groundClick:{x:17,z:20}},zd=[{id:`arrival`,name:`停轿小院`,x:22,z:27,rect:[14,21,37,31]},{id:`gate`,name:`垂花门`,x:10,z:19,rect:[-1,14,25,31]},{id:`court`,name:`插屏内院`,x:-2,z:9,rect:[-16,0,16,15]},{id:`study`,name:`西厢书阁`,x:-25,z:-18,rect:[-37,-29,-17,-10]},{id:`rockery`,name:`叠石听风`,x:-28,z:3,rect:[-37,-9,-17,15]},{id:`garden`,name:`曲水亭园`,x:27,z:-12,rect:[16,-29,37,16]},{id:`hall`,name:`正房前庭`,x:-4,z:-10,rect:[-17,-22,10,1]},{id:`guest`,name:`东侧绣楼`,x:10,z:-25,rect:[-16,-30,16,-22]}],Bd=[[20,-22],[26,-25],[32,-23],[35,-18],[34,-12],[35,-7],[31,-3],[26,-2],[22,-5],[19,-10],[18,-16]],Vd=Tt.clamp;function Hd(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];o[1]>t!=s[1]>t&&e<(s[0]-o[0])*(t-o[1])/(s[1]-o[1])+o[0]&&(r=!r)}return r}function Ud(){let e=new wn;e.name=`Rongguo_Manor_Block_Characters_V11`;let t=[],n=[],r=[],i=[],a=[],o=Iu(e,t,n),{mats:s,mat:c,mesh:l,box:u,beam:d,ball:f,cyl:p,obstacle:m,wall:h,wallGaps:g,paving:_,path:v,roof:y,column:b,room:x,corridor:S,pavilion:C,lantern:w}=o,T=[{x:23,z:-4.1,w:2,d:6.2},{x:25,z:-7.4,w:6,d:2},{x:27,z:-10.7,w:2,d:8.6},{x:28,z:-14.4,w:4,d:2},{x:29,z:-17,w:2,d:6.2}],E={paving:[],paths:[],pond:Bd,bridges:T,trees:[],rocks:[]},D=(e,t,n,r,i={})=>{_(e,t,n,r,{y:j(e,t),...i}),E.paving.push({x:e,z:t,w:n,d:r})},O=(e,t=2.1,n)=>{v(e,t,n??((e,t)=>j(e,t)+.01)),E.paths.push({points:e,width:t})},k=(e,t)=>{S(e,{groundAt:j,...t}),E.paths.push({points:e,width:t?.width||2.35})};function A(e,t){return T.some(n=>Math.abs(e-n.x)<=n.w/2&&Math.abs(t-n.z)<=n.d/2)}function j(e,t){return A(e,t)?.12+.45*Vd((-1-t)/1.1,0,1):Math.hypot(e-29,t+19)<3.1?.57:kd(e,t)}function M(e){let t=null,n=1/0,r=(r,i,a,o,s,c)=>{let l=new Ar(new K(-o,1,-s),-a+o*r+s*i).normalize(),u=e.intersectPlane(l,new K);if(!u||!c(u.x,u.z)||Math.abs(u.y-j(u.x,u.z))>.03)return;let d=u.distanceTo(e.origin);d<n&&(t=u,n=d)};r(0,0,.12,0,0,(e,t)=>e>Id.minX&&e<Id.maxX&&t>Id.minZ&&t<Id.maxZ);for(let e of wd)r(e.x,e.z,e.y,0,0,(t,n)=>Math.abs(t-e.x)<=e.w/2&&Math.abs(n-e.z)<=e.d/2);for(let e of Td){let t=e.to[0]-e.from[0],n=e.to[1]-e.from[1],i=t*t+n*n,a=(e.high-e.low)*t/i,o=(e.high-e.low)*n/i;r(...e.from,e.low,a,o,(r,i)=>Math.abs(r-(e.from[0]+e.to[0])/2)<=(Math.abs(t)||e.width)/2&&Math.abs(i-(e.from[1]+e.to[1])/2)<=(Math.abs(n)||e.width)/2)}return r(0,0,.57,0,0,(e,t)=>A(e,t)||Math.hypot(e-29,t+19)<3.1),r(23,-1,.12,0,-.45/1.1,(e,t)=>Math.abs(e-23)<=1&&t<=-1&&t>=-2.1),t}function N(e,t,n,r,a,o,s={}){let c={id:e,name:t,x:n,z:r,kind:a,text:o,...s};return i.push(c),c}let P=vd(o,E,j),{tree:F,bamboo:I,shrub:ee}=P;function te(e,t,n=1,{y:r=j(e,t)-.12,tall:i=1,collide:a=!0}={}){let o=new ja(1,1),s=o.attributes.position;for(let e=0;e<s.count;e++){let t=s.getX(e),n=s.getY(e),r=s.getZ(e),i=1+.14*Math.sin(t*17+n*11+r*7);s.setXYZ(e,t*i,n*i,r*i)}o.computeVertexNormals(),l(o,c(`rock`,`#acae9b`),e,r+n*.65*i,t,n,n*.8*i,n*.73,.5),a&&m(e,t,n*1.45,n*1.1,`rock`),E.rocks.push({x:e,z:t,r:n})}function ne(e,t,n,r,{pink:i=!1}={}){let a=j(e,t);u(e,a+.18,t,n,.48,r,`stone`),u(e,a+.44,t,n-.18,.06,r-.18,`soil`);for(let o=e-n/2+.5;o<e+n/2;o+=.8)for(let e=t-r/2+.4;e<t+r/2;e+=.8)ee(o,e,.65,i,a+.46);m(e,t,n,r,`planter`)}function re(e,t,n=j(e,t)){u(e,n+.35,t,1.9,.14,.62,`wood`);for(let r of[-1,1])u(e+r*.66,n+.15,t,.12,.3,.5,`wood`);m(e,t,1.9,.65,`bench`)}u(0,-.72,.5,79,1.4,66,c(`foundation`,`#74816a`)),u(0,-1.35,.5,80,.25,67,`gold`),u(0,.015,.5,76,.12,63,`grass`),g(`z`,31,-38,38,[[20,26]],{height:1.85}),h(0,-30.5,76,.4,{height:3.3}),h(-37.5,.2,.4,62,{height:2.1}),h(37.5,.2,.4,62,{height:2.1}),Ad(o,E),D(22,26.5,13,8.5),D(11.5,19,7,9),D(-1,8.5,13,9),D(-4,4.5,21,4),D(-26,26,12,4),O([[23,31],[23,25],[18,24],[14,23],[10,18.8],[6,18],[5,18.5],[5,14],[-1,13],[-4,7],[-4,2.5]],2.4),O([[17,20],[21,18],[22,13],[22,6],[23,0]],2.2),O([[14,23],[14,29],[-2,29],[-17,28],[-26,26],[-26,24]],2.2),O([[-18,26],[-18,21],[-18,16],[-25,16],[-29.8,17.3]],2.1),O([[-24.5,14],[-24.5,2],[-25,-4],[-25,-10],[-25,-12.5]],2.2),O([[-18,16],[-21,11.8],[-16,11.8],[-14,4],[-10,3],[-7,2.5]],2.2),O([[-34,19],[-36.3,19],[-36.3,-7],[-33,-12]],1.2),O([[-25,-11],[-20,-12],[-20,-23],[-18,-23],[-12,-23],[-12,-26],[0,-28]],2.1),O([[7,4],[13,4],[18,4],[23,0],[35.8,0],[35.8,-24],[32,-27],[17,-27]],2.1),O([[10,-20],[10,-19.5],[10,-15],[14,-14],[16,-14],[16,-6],[18,4]],2.1),g(`z`,14,-16,13,[[2,8]],{height:1.05,base:Cd.court}),g(`x`,-17,2,28,[[10,18],[24,28]],{height:1.6}),g(`x`,10,16,21.8,[[17.1,20.5]],{height:1.65}),g(`z`,23,-35,-17,[[-32,-17]],{height:1.45}),g(`z`,-8,-36,-19,[[-36,-33],[-26.2,-22.8]],{height:1.35});for(let e of[19.8,26.2])b(e,31,3);y(23,31,9,3.6,3.12,`West_Gate`,{height:1.3}),w(20.3,30.5,2.45),w(25.7,30.5,2.45);let ie=new Wi;ie.moveTo(-2.8,0),ie.lineTo(2.8,0),ie.lineTo(2.8,3.35),ie.lineTo(-2.8,3.35),ie.closePath();let ae=new Ui;ae.absarc(0,1.48,1.44,0,Math.PI*2,!0),ie.holes.push(ae),l(new Oa(ie,{depth:.32,bevelEnabled:!1}),s.ivory,10,.12,18.8,1,1,1,Math.PI/2),l(new La(1.44,.105,6,48),s.stone,10.2,1.6,18.8,1,1,1,Math.PI/2),u(10,3.55,18.8,.65,.16,5.9,`roof`),m(10,16.4,.4,1.1,`moon-gate`),m(10,21.2,.4,1.1,`moon-gate`);for(let e of[2,8])b(e,14,2.6,Cd.court);y(5,14,8,3.6,Cd.court+2.6,`Hanging_Flower_Gate`,{height:1.2}),w(2.7,14,Cd.court+2.1),w(7.3,14,Cd.court+2.1),o.elevated(()=>{u(-1,1.42,9,5.7,2.6,.4,`stone`),u(-1,1.45,9.23,5.1,1.95,.055,c(`marble`,`#dfdbc9`)),u(-1,2.8,9,6.1,.18,.65,`roof`);for(let e of[-3.5,1.5])u(e,.24,9,.75,.35,1.3,`stone`);m(-1,9,6,.65,`screen`);for(let e=0;e<3;e++)d([-3.1+e*1.3,1,9.28],[-2.3+e*1.3,2.1,9.28],.035,c(`marble-vein`,`#bcbfae`))},Cd.court-.12),k([[-14,13],[-14,4],[-10,3]],{height:2.25,name:`West_Embracing_Gallery`}),k([[8,12],[11,6],[10,3]],{height:2.25,name:`East_Embracing_Gallery`}),x(`Grandmother_Antechamber`,-4,-12,22,12.5,{base:Cd.hall,height:5.1,roofHeight:2.65,doorWidth:3.1,hero:!0}),y(-4,-12,25.6,15.8,Cd.hall+4.4,`Main_Hall_Lower_Eaves`,{height:1.3}),x(`West_Study`,-25,-18,11,8.5,{base:Cd.study,height:3.1,floors:3,roofHeight:1.9}),x(`East_Guest_Room`,10,-25.5,10.5,8.5,{base:Cd.guest,height:2.9,floors:2,roofHeight:1.65}),x(`Tea_Room`,-26,21,11,6,{height:2.6,roofHeight:1.15}),x(`Front_Service_Room`,6,25,13,6,{height:2.15,roofHeight:1.05}),x(`Front_East_Wing`,18.2,15,10,5,{height:2.75,roofHeight:1.25}),o.rotated(()=>x(`Garden_Listening_Room`,28,5,14,6,{height:2.05,roofHeight:1.15}),28,5,Math.PI/2),o.rotated(()=>x(`West_Gatehouse`,-13,21,7,5,{height:2,roofHeight:1.05}),-13,21,Math.PI/2),k([[-21,17],[-21,14.5],[-19,14.5]],{height:2.15,name:`Rock_Garden_Gallery`}),k([[16,1],[16,-6],[16,-14],[19,-22],[23,-26]],{height:2.2,name:`Garden_Winding_Gallery`}),k([[-18,-23],[-12,-23],[-12,-26],[-1,-28],[3,-28]],{height:2.05,width:2,name:`Rear_Folded_Gallery`}),k([[19,9],[22,6],[22,0],[23,-1]],{height:2.15,width:2,name:`Waterside_Approach`});let oe=Fd(o,N),L=new wn;L.position.set(-27.3,.12,24),e.add(L),u(1.3,1.22,0,2.6,2.4,.14,`wood`,0,L),u(2.2,1.2,.12,.09,.2,.09,`gold`,0,L);let R=m(-26,24,2.6,.25,`tea-door`);r.push({id:`tea-door`,hinge:L,collider:R,open:!1}),N(`tea-door`,`推开茶房门`,-26,25.4,`door`,`门扇轻轻让开，茶香从屋里缓缓漫出来。`),Sd(o,E,{x:-24.5,z:7.5}),C(`Hilltop_Listening_Pavilion`,-32,-2,{base:Cd.hill,radius:2.7,height:2.5}),re(-32,-3.6,Cd.hill);for(let[e,t,n]of[[-35,0,1.1],[-29,-3,1.35],[-35,9,.8]])te(e,t,.6,{y:j(e,t)-.12,tall:n});N(`rockery`,`穿洞叠石`,-24.5,9.4,`look`,`山石在头顶合成一孔，脚下却留着明亮的路。转过石壁，方才未见的楼檐忽然露了出来。`),N(`hill-pavilion`,`登亭听风`,-32,-.7,`look`,`我拾级来到亭边。高低的屋脊从花木间连成一片，初来时认不清的回廊，此刻都有了方向。`);let se=new Wi;Bd.forEach(([e,t],n)=>n?se.lineTo(e,-t):se.moveTo(e,-t)),se.closePath();let ce=new Xr(new Fa(se),new Xa({color:`#789f92`,roughness:.25,metalness:.1,transparent:!0,opacity:.9}));ce.rotation.x=-Math.PI/2,ce.position.y=.1,ce.receiveShadow=!0,e.add(ce);for(let e=-25;e<-1;e+=.5){let t=null;for(let n=17.5;n<=36;n+=.5){let r=Hd(n,e,Bd)&&!A(n,e)&&Math.hypot(n-29,e+19)>3.2;r&&t===null&&(t=n),(!r||n>=36)&&t!==null&&(m((t+n-.5)/2,e,n-t,.5,`water`),t=null)}}for(let e=0;e<Bd.length;e++){let t=Bd[e],n=Bd[(e+1)%Bd.length],r=Math.hypot(t[0]-n[0],t[1]-n[1]);for(let i=0;i<r;i+=1.3){let a=i/r,o=Tt.lerp(t[0],n[0],a),s=Tt.lerp(t[1],n[1],a);A(o,s)||i>r*.65&&e%3==0||te(o,s,.3+.13*Math.sin(e+i)**2,{collide:!1})}}for(let e of T)_(e.x,e.z,e.w,e.d,{y:.57,tile:.65});for(let e=0;e<6;e++){let t=-1-(e+.5)*1.1/6,n=(e+1)*.45/6;u(23,.12+n/2,t,2,n,1.1/6,`stone`)}for(let e of T)for(let t of[-1,1])for(let n of[`x`,`z`]){let r=n===`x`?e.d:e.w,i=Math.ceil(r/.65);for(let a=0;a<i;a++){let o=(a+.5)/i,s=n===`x`?e.x+t*e.w/2:e.x+(o-.5)*e.w,c=n===`z`?e.z+t*e.d/2:e.z+(o-.5)*e.d,l=n===`x`?t*.08:0,f=n===`z`?t*.08:0;if(A(s+l,c+f)||c>-1.15||Math.hypot(s-29,c+19)<3.1)continue;let p=n===`z`?r/i/2:0,h=n===`x`?r/i/2:0;d([s-p,1.28,c-h],[s+p,1.28,c+h],.075,`ivory`),u(s,.94,c,.075,.74,.075,`ivory`),m(s,c,n===`x`?.08:r/i,n===`z`?.08:r/i,`bridge-rail`)}}C(`Waterside_Pavilion`,29,-19,{base:.57,radius:2.7,height:2.55});for(let[e,t]of[[21,-14],[23,-18],[32,-21],[32,-11],[30,-5],[24,-11]])l(new fi(.5,.5,.025,12),s.jade,e,.14,t),l(f,c(`lotus`,`#d4afa3`),e+.13,.26,t,.2,.12,.2);for(let[t,n]of[[22,-12],[31.5,-14],[24,-22]]){let r=new Xr(new Pa(.5,.53,24),new Rr({color:`#c7d1b3`,transparent:!0,opacity:.2,side:2}));r.rotation.x=-Math.PI/2,r.position.set(t,.145,n),e.add(r),a.push({type:`ripple`,mesh:r,phase:t})}N(`bridge`,`曲桥观水`,23,-.5,`look`,`桥身几番转折，水光也跟着转了方向。临水亭在花影后露出一角，原来近在眼前的路，也可以这样曲折。`),N(`pavilion`,`水亭小憩`,29,-19,`look`,`我在水亭中停了一会儿。柳丝低低垂到水边，廊下的脚步声隔着池水，听来便柔和了。`),u(24,.55,27,2.3,.95,2.5,`red`),y(24,27,3,3,1.1,`Sedan`,{height:.7});for(let e of[23,25])u(e,.45,27,.12,.12,5,`wood`);u(24,1.1,28.3,1.2,1.2,.08,`wood`),m(24,27,2.5,3.3,`sedan`);for(let e of[27,28])u(e,.4,28.5,.8,.8,.7,`wood`),u(e,.5,28.5,.84,.12,.74,`gold`),m(e,28.5,.8,.8,`luggage`);l(p,s.stone,-18,.6,21,1,1.2,1),l(p,c(`well`,`#405d56`),-18,1.23,21,.77,.025,.77),m(-18,21,2.2,2.2,`well`),o.elevated(()=>{u(-11,2.7,3,.05,1.3,.05,`gold`);for(let e=0;e<10;e++){let t=e/10*Math.PI*2;l(p,s.gold,-11+Math.cos(t)*.43,1.9,3+Math.sin(t)*.43,.018,.85,.018)}l(p,s.gold,-11,1.48,3,.5,.09,.5),l(f,c(`bird`,`#9d7f4e`),-11,1.72,3,.18,.13,.14)},Cd.court-.12);let le=new wn;le.position.set(6,j(6,11)+.02,11),e.add(le);for(let e=0;e<6;e++)l(f,c(`fallen-petal`,`#dcb1a7`),Math.cos(e)*.24,.02,Math.sin(e)*.24,.13,.025,.07,e,le);N(`sedan`,`轿帘`,24,29.1,`look`,`轿帘上的纹样被风吹得轻轻一晃。我回头看了看，这一路的舟车，终于停在了眼前的朱门里。`),N(`luggage`,`随行箱笼`,27.5,27.3,`look`,`箱笼里收着旧衣与几卷书。熟悉的物件跟着我远行，倒像将家中一角也轻轻搬来了。`),N(`screen`,`大理石插屏`,-1,10.3,`look`,`大理石插屏立在门后，石纹如远山叠起。绕过屏风，正房与层层楼檐才从花影后展开。`),N(`bird`,`廊下鸟笼`,-11,3.8,`look`,`鸟声从廊下落到耳边。我停了一会儿，忽然想起母亲年少时，也许听过同样清脆的声音。`),N(`book`,`案上书卷`,-26,-17.5,`look`,`案上搁着一卷旧书，纸边微黄。父亲教我读书时的声音仿佛还在，我轻轻把翻起的书页抚平。`),N(`well`,`青石井栏`,-18,22.5,`look`,`井中映出一小片天。院墙再高，也没有将天光全然拦住。我扶着石栏，觉得指尖微凉。`),N(`tea`,`温茶`,-25,21.4,`look`,`茶还温着，清气在杯口轻轻浮起。若走得倦了，在这里歇一歇也好。`),N(`petals`,`拾一片落花`,6,12,`collect`,`我拈起一片落花，将它轻轻收进袖中。初来这一日，原也有这样微小的东西，肯不问来处地陪着我。`,{visual:le}),N(`window`,`绣楼窗影`,10,-20.4,`look`,`上层窗格将日光分成细细的几道，楼下却仍是安静的客舍。门外的脚步声使这陌生屋宇多了些人气。`);for(let[e,t,n,r,i]of[[-10,11,3,2,!0],[-10,6,2.5,2.5,!0],[4,6,3,2.4,!0],[12,10,2,2,!1],[-20,27,3,2,!0],[-34,22,2,3,!0],[-19,-14,2,3,!1],[17.5,-25,2,3,!1],[33,22,2,4,!0],[-7,18,2,3,!0]])ne(e,t,n,r,{pink:i});for(let[e,t,n,r]of[[-34,26,1,1],[-35,17,.95,0],[-29,15,.9,1],[-19,15,.9,0],[-35,-6,1,0],[-33,-11,1.1,1],[-34,-25,1.25,0],[-19,-27,1.1,0],[-7,-28,1.15,0],[17,-29,1,0],[35,-26,1,0],[36,-17,1.1,0],[33,-3,1.15,0],[19,-4,.9,1],[14,-12,1,0],[33,16,1.1,1],[31,25,1,0],[13,28,.85,1],[-4,20,.8,1],[-8,27,.85,0],[-16,27,1,1],[-19,-5,.9,1]])!Od(e,t,.7)&&F(e,t,{size:n,pink:!!r,willow:e===33&&t===-3,pine:t<-26||e===-35});for(let[e,t]of[[-35,-28],[-17,-27],[-35,19],[-19,19],[17,-21],[35,-10],[35,11],[31,29],[-9,18]])Od(e,t,.8)||I(e,t);for(let[e,t]of[[-35,14],[-29,12],[-21,12],[-34,-5],[-19,-10],[-18,-19],[1,-24],[18,-27],[34,-28],[20,-19],[17,-8],[21,-3],[33,0],[35,18],[32,28],[-8,29],[-17,29]])Od(e,t,.8)||(ee(e,t,.85,Math.round(e+t)%3==0),ee(e+.8,t+.35,.62,!0));for(let[e,t,n]of[[33,26,.9],[19,-2,.8],[-35,14,.8],[-19,27,.7],[-34,-27,.7],[16,-18,.6]])te(e,t,n);let ue=(e,t,n,r)=>{let i=r[0]-n[0],a=r[1]-n[1],o=Vd(((e-n[0])*i+(t-n[1])*a)/(i*i+a*a),0,1);return Math.hypot(e-n[0]-o*i,t-n[1]-o*a)};function de(e,r,a){return e<-35.5||e>35.5||r<-28.6||r>28.8||Od(e,r,a+.5)||Hd(e,r,Bd)||E.paving.some(t=>Math.abs(e-t.x)<t.w/2+a&&Math.abs(r-t.z)<t.d/2+a)||n.some(t=>Math.abs(e-t.rect.x)<t.rect.w/2+a&&Math.abs(r-t.rect.z)<t.rect.d/2+a)||E.paths.some(t=>t.points.some((n,i)=>i&&ue(e,r,t.points[i-1],n)<t.width/2+a))||[...i,...hd,Ld].some(t=>Math.hypot(e-t.x,r-t.z)<2.4+a)?!1:!t.some(t=>Math.abs(e-t.x)<t.w/2+a&&Math.abs(r-t.z)<t.d/2+a)}let fe=51,pe=()=>(fe=fe*16807%2147483647,(fe-1)/2147483646),me=0;for(let e=0;e<900&&me<42;e++){let e=-35+pe()*70,t=-28+pe()*56;de(e,t,1.05)&&(F(e,t,{size:.65+pe()*.5,pink:pe()<.3,pine:t<-17}),me++)}for(let e=0,t=0;e<1800&&t<120;e++){let e=-35+pe()*70,n=-28+pe()*56;de(e,n,.4)&&(ee(e,n,.42+pe()*.45,pe()<.32),t%4==0&&te(e+.55,n+.2,.24,{collide:!1}),t++)}let he=P.finish();o.finish();for(let e of n)e.room=oe.rooms.find(t=>e.group.name.startsWith(t.arch+`_`)||t.id===`hall`&&e.group.name.startsWith(`Main_Hall_Lower_Eaves`));let ge=hd.map(t=>{let n=pd(t);n.root.position.set(t.x,j(t.x,t.z),t.z),n.root.rotation.y=t.facing||0,e.add(n.root);let r=m(t.x,t.z,.66,.66,`npc:`+t.id);return{...t,...n,collider:r,pathIndex:0}}),_e=pd(md);return _e.root.position.set(Ld.x,.12,Ld.z),e.add(_e.root),{root:e,solid:t,roofs:n,doors:r,interact:i,rooms:oe.rooms,interiorStats:oe.stats,assetsReady:Promise.all([oe.assetsReady,ld()]),npcs:ge,player:_e,places:zd,bounds:Id,spawn:Ld,landmarks:Rd,groundHeight:j,pickGround:M,levels:Cd,mapData:E,animated:a,bridgeAt:A,pondOutline:Bd,vegetationStats:he,setRoomFocus:P.setRoomFocus}}function Wd(e,t,n=.34,r=.5,i=()=>.12){let a=Math.round((e.maxX-e.minX)/r)+1,o=Math.round((e.maxZ-e.minZ)/r)+1,s=(r,i)=>r>e.minX+.6&&r<e.maxX-.6&&i>e.minZ+.6&&i<e.maxZ-.6&&!t.some(e=>e.enabled&&Math.abs(r-e.x)<e.w/2+n-1e-6&&Math.abs(i-e.z)<e.d/2+n-1e-6),c=(t,n)=>[Math.round((t-e.minX)/r),Math.round((n-e.minZ)/r)],l=(t,n)=>({x:e.minX+t*r,z:e.minZ+n*r}),u=(e,t,n,r)=>{if(!s(n,r))return!1;let a=Math.hypot(n-e,r-t),o=Math.max(1,Math.ceil(a/.08)),c=i(e,t);for(let s=1;s<=o;s++){let l=s/o,u=i(e+(n-e)*l,t+(r-t)*l);if(Math.abs(u-c)>a/o*.85+.004)return!1;c=u}return!0};function d(e,t,n=5){if(s(e,t))return{x:e,z:t};for(let i=r;i<=n;i+=r)for(let n=0;n<16;n++){let r={x:e+Math.cos(n*Math.PI/8)*i,z:t+Math.sin(n*Math.PI/8)*i};if(s(r.x,r.z))return r}return null}function f(e,t,n,r){let i=d(n,r);if(!i)return[];let[f,p]=c(e,t),[m,h]=c(i.x,i.z),g=p*a+f,_=h*a+m,v=new Map([[g,0]]),y=new Map,b=new Set,x=[{i:g,f:0}],S=new Map,C=(e,t)=>{let n=t*a+e;if(!S.has(n)){let r=l(e,t);S.set(n,e>=0&&e<a&&t>=0&&t<o&&s(r.x,r.z))}return S.get(n)},w=0;for(;x.length&&w++<22e3;){x.sort((e,t)=>t.f-e.f);let{i:e}=x.pop();if(b.has(e))continue;if(e===_){let t=[],n=e;for(;n!==g;)if(t.push(l(n%a,Math.floor(n/a))),n=y.get(n),n===void 0)return[];return t.reverse()}b.add(e);let t=e%a,n=Math.floor(e/a);for(let[r,i]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let o=t+r,s=n+i,c=s*a+o,d=l(t,n),f=l(o,s);if(!C(o,s)||b.has(c)||!u(d.x,d.z,f.x,f.z)||r&&i&&(!C(t+r,n)||!C(t,n+i)))continue;let p=v.get(e)+(r&&i?1.414:1);p<(v.get(c)??1/0)&&(v.set(c,p),y.set(c,e),x.push({i:c,f:p+Math.hypot(m-o,h-s)}))}}return[]}return{valid:s,route:f,nearest:d,canMove:u}}var Gd=[{id:`daiyu`,name:`林黛玉`,aliases:[`林黛玉`,`黛玉`,`我`,`心中的黛玉`],src:`./assets/daiyu-inner.png`},{id:`baoyu`,name:`贾宝玉`,aliases:[`贾宝玉`,`宝玉`,`宝二爷`],src:`./assets/baoyu.png`},{id:`jiamu`,name:`贾母`,aliases:[`贾母`,`外祖母`,`老太太`],src:`./assets/jiamu.png`},{id:`fengjie`,name:`王熙凤`,aliases:[`王熙凤`,`凤姐`,`凤姐姐`,`琏嫂子`],src:`./assets/fengjie.png`},{id:`wang`,name:`王夫人`,aliases:[`王夫人`,`二舅母`,`二太太`],src:`./assets/portraits-v11/wang.png`},{id:`yingchun`,name:`贾迎春`,aliases:[`贾迎春`,`迎春`,`二姑娘`],src:`./assets/portraits-v11/yingchun.png`},{id:`tanchun`,name:`贾探春`,aliases:[`贾探春`,`探春`,`三姑娘`],src:`./assets/portraits-v11/tanchun.png`},{id:`xichun`,name:`贾惜春`,aliases:[`贾惜春`,`惜春`,`四姑娘`],src:`./assets/portraits-v11/xichun.png`},{id:`xueyan`,name:`雪雁`,aliases:[`雪雁`],src:`./assets/portraits-v11/xueyan.png`},{id:`matron`,name:`引路婆子`,aliases:[`引路婆子`,`婆子`],src:`./assets/portraits-v11/matron.png`},{id:`keeper`,name:`看门仆人`,aliases:[`看门仆人`,`门房`,`看门人`],src:`./assets/portraits-v11/keeper.png`},{id:`maid`,name:`丫鬟`,aliases:[`丫鬟`],src:`./assets/portraits-v11/maid.png`}];function Kd(e){return Gd.find(t=>t.aliases.includes((e||``).trim()))||null}function qd({element:e,canAnimate:t}){let n=0,r=``,i=null;function a(){n++,r=``,i?.cancel(),i=null,e.hidden=!0,delete e.dataset.person,e.alt=``}function o(o){let s=Kd(o);if(!s){a();return}if(r===s.id&&e.complete&&e.naturalWidth>0){e.hidden=!1;return}let c=++n;r=s.id,i?.cancel(),i=null,e.hidden=!0,e.dataset.person=s.id,e.alt=s.name+`立绘`,e.src=s.src;let l=()=>{c===n&&(e.hidden=!1,t()&&(i=e.animate([{opacity:0,transform:`translateY(9px)`},{opacity:1,transform:`translateY(0)`}],{duration:280,easing:`ease-out`})))},u=()=>{c===n&&a()};e.decode?e.decode().then(l,u):(e.onload=l,e.onerror=u)}return{show:o,clear:a}}function Jd({state:e,settings:t,save:n,onFinish:r}){let i=e=>document.getElementById(e),a=window.DREAM_STORY,o=null,s=null,c=0,l=[],u=0,d=!1,f=()=>t.motion&&!matchMedia(`(prefers-reduced-motion: reduce)`).matches,p=qd({element:i(`dialogue-portrait`),canAnimate:f}),m=window.createMemoryEcho({element:i(`memory-echo`),enabled:()=>t.memories,canAnimate:f,canShow:()=>!!o&&!i(`modal`).open&&!document.hidden});function h(){clearTimeout(c),d=!1,u=l.length,i(`dialogue-text`).textContent=l.join(``),m.reveal(u),_()}function g(){d&&(i(`dialogue-text`).textContent=l.slice(0,++u).join(``),m.reveal(u),u>=l.length?h():c=setTimeout(g,t.speed))}function _(){let e=i(`choices`);e.replaceChildren();let t=s?.options;i(`choice-panel`).hidden=!t||d,i(`dialogue-next`).disabled=!!t,i(`reading-hint`).textContent=t?`点击选项，或按数字 1 / 2 / 3 作答`:`点击文字或按空格继续 · Esc 暂停阅读`,t&&(i(`choice-prompt`).textContent=s.prompt,t.forEach((t,n)=>{let r=document.createElement(`button`),i=document.createElement(`span`);i.textContent=`0`+(n+1),r.append(i,document.createTextNode(t.label)),r.onclick=()=>x(n),e.append(r)}))}function v(){clearTimeout(c),m.clear(),o&&(s=o.kind===`legacy`?a.nodes[o.id]:o.lines[o.index],s?(o.kind===`legacy`&&(e.pendingMain={...o,open:!0},n()),i(`dialogue-layer`).hidden=!1,document.body.classList.add(`reading`),i(`speaker`).textContent=s.who||`林黛玉`,i(`speaker-kind`).textContent=s.kind||`话语`,i(`dialogue-place`).textContent=o.kind===`legacy`?`朱门初启 · 原篇剧情`:`荣府漫游 · 随行小记`,p.show(s.who||`林黛玉`),i(`choice-panel`).hidden=!0,l=Array.from(s.text),u=0,d=t.speed>0,i(`dialogue-text`).textContent=``,m.prepare(s),d?g():h()):y())}function y(){let t=o?.tag;clearTimeout(c),m.clear(),p.clear(),o=null,d=!1,i(`dialogue-layer`).hidden=!0,document.body.classList.remove(`reading`),(t===`intro`||t===`hall`)&&(e.pendingMain=null),r(t),n()}function b(){if(o&&!i(`modal`).open){if(d)h();else if(!s.options){if(o.kind===`legacy`){if(s.next===o.stop){y();return}o.id=s.next}else if(++o.index>=o.lines.length){y();return}v()}}}function x(t){if(!o||d)return;let n=s.options?.[t];if(n){if(e.introChoice==null){e.introChoice=t;for(let[t,r]of Object.entries(n.effect))e.scores[t]=(e.scores[t]||0)+r}o.id=n.next,v()}}function S(t,n,r){o=e.pendingMain?.tag===r?{...e.pendingMain}:{kind:`legacy`,id:t,stop:n,tag:r},v()}function C(e,t){o={kind:`lines`,lines:e,index:0,tag:t},v()}function w(){o&&(clearTimeout(c),m.clear(),p.clear(),o.kind===`legacy`&&(e.pendingMain={...o,open:!1}),o=null,d=!1,i(`dialogue-layer`).hidden=!0,document.body.classList.remove(`reading`),n())}return i(`dialogue-body`).onclick=b,i(`dialogue-next`).onclick=b,i(`dialogue-pause`).onclick=w,document.addEventListener(`keydown`,e=>{if(o&&!i(`modal`).open){if(e.key===`Escape`)e.preventDefault(),w();else if(e.code===`Space`||e.code===`Enter`){if(e.target.closest(`button`)&&e.target!==i(`dialogue-body`))return;e.preventDefault(),b()}else/^[123]$/.test(e.key)&&(e.preventDefault(),d?h():x(Number(e.key)-1))}}),{legacy:S,lines:C,pause:w,get active(){return!!o},get speaker(){return o?s?.who||`林黛玉`:``},resume(){e.pendingMain?.open&&(o={...e.pendingMain},v())},clearMemories:m.clear}}var Z=e=>document.getElementById(e),Yd=`xiaoxiang.jiafu3d.v1`,Xd=(e,t)=>{try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}},Zd=Xd(`xiaoxiang.v1.settings`,{}),Qd=Xd(Yd,{}),Q={version:1,worldRevision:9,x:Ld.x,z:Ld.z,arrived:!1,complete:!1,introChoice:null,scores:{reserve:0,warmth:0,resonance:0},discoveries:[],doors:{},petal:!1,pendingMain:null,started:!1,...Qd};Q.version===1&&Number.isFinite(Q.x)&&Number.isFinite(Q.z)||Object.assign(Q,{version:1,x:Ld.x,z:Ld.z,started:!1}),Q.discoveries=Array.isArray(Q.discoveries)?Q.discoveries.filter(e=>typeof e==`string`):[],Q.doors=Q.doors&&typeof Q.doors==`object`?Q.doors:{},Q.scores=Object.fromEntries([`reserve`,`warmth`,`resonance`].map(e=>[e,Number.isFinite(Q.scores?.[e])?Q.scores[e]:0])),[`intro`,`hall`].includes(Q.pendingMain?.tag)&&window.DREAM_STORY.nodes[Q.pendingMain?.id]||(Q.pendingMain=null);var $d={music:Zd.music??!0,motion:Zd.motion??!0,memories:Zd.memories??!0,speed:Zd.speed??28,...Qd.settings};$d.speed=Math.max(0,Math.min(70,Number($d.speed)||0)),document.body.classList.toggle(`ui-still`,!$d.motion);var ef=!1,tf=0,nf,rf=null,af=null,of=null,sf=!Q.started,cf=[],lf=new Set,uf=0,df=0,ff=``,pf=!1,mf=matchMedia(`(prefers-reduced-motion: reduce)`);function hf(e){Z(`toast`).textContent=e,Z(`toast`).classList.add(`show`),clearTimeout(tf),tf=setTimeout(()=>Z(`toast`).classList.remove(`show`),3e3)}function gf(){Q.x=$.player.root.position.x,Q.z=$.player.root.position.z,Q.settings=$d;try{localStorage.setItem(Yd,JSON.stringify(Q)),Q.started&&localStorage.setItem(`xiaoxiang.v1.lastMode`,JSON.stringify({mode:`explore`,volumeId:`first-dream`}))}catch{ef||=(hf(`此浏览器未允许保存进度，本次仍可继续漫游。`),!0)}}[8,9].includes(Qd.worldRevision)||(Q.x=Ld.x,Q.z=Ld.z);var $=Ud();await $.assetsReady;var _f=Wd(Id,$.solid,.34,.5,$.groundHeight),vf=new Nn;vf.background=new J(`#b7bca7`),vf.fog=new Mn(`#b7bca7`,105,180),vf.add($.root);for(let e of $.doors)e.open=!!Q.doors[e.id],e.collider.enabled=!e.open,e.hinge.rotation.y=e.open?-Math.PI*.48:0;if($.interact.find(e=>e.id===`petals`).visual.visible=!Q.petal,!_f.valid(Q.x,Q.z)){let e=_f.nearest(Q.x,Q.z,8)||Ld;Q.x=e.x,Q.z=e.z}Q.worldRevision=9,$.player.root.position.set(Q.x,$.groundHeight(Q.x,Q.z),Q.z);var yf=new ju({antialias:!0,alpha:!1,powerPreference:`high-performance`});yf.setPixelRatio(Math.min(devicePixelRatio,1.65)),yf.shadowMap.enabled=!0,yf.shadowMap.type=2,yf.outputColorSpace=Fe,yf.toneMapping=4,yf.toneMappingExposure=.98,Z(`scene`).append(yf.domElement),yf.domElement.setAttribute(`aria-label`,`可自由探索的三维贾府，使用WASD移动，E交互`),yf.domElement.tabIndex=0,vf.add(new Oo(`#fff4d8`,`#77705a`,1.45));var bf=new Uo(`#ffe3b7`,3.4);bf.position.set(-32,48,28),bf.castShadow=!0,bf.shadow.mapSize.set(3072,3072),bf.shadow.camera.left=-58,bf.shadow.camera.right=58,bf.shadow.camera.top=58,bf.shadow.camera.bottom=-58,bf.shadow.camera.near=1,bf.shadow.camera.far=135,bf.shadow.normalBias=.035,bf.shadow.bias=-3e-4,vf.add(bf);var xf=new Vo(-45,45,34,-34,.1,210),Sf=new K(0,0,0),Cf=new K(48,57,48),wf=41.2,Tf=14,Ef=new ss,Df=new G,Of=new Xr(new Pa(.45,.54,32),new Rr({color:`#f4de9f`,transparent:!0,opacity:.8,side:2}));Of.rotation.x=-Math.PI/2,vf.add(Of);var kf=new Xr(new Pa(.22,.32,24),new Rr({color:`#d4b478`,transparent:!0,opacity:.8,side:2}));kf.rotation.x=-Math.PI/2,kf.visible=!1,vf.add(kf);var Af=zd.map(e=>{let t=document.createElement(`div`);return t.className=`location-label`,t.textContent=e.name,Z(`location-labels`).append(t),{e:t,...e}}),jf=$.npcs.map(e=>{let t=document.createElement(`div`);return t.className=`npc-label`+([`intro`,`main`].includes(e.role)?` main`:``),t.textContent=e.name,Z(`npc-labels`).append(t),{e:t,npc:e}}),Mf=document.createElement(`div`);Mf.className=`npc-label main`,Mf.textContent=`黛玉`,Z(`npc-labels`).append(Mf);function Nf(e){$.interact.some(t=>t.id===e)&&!Q.discoveries.includes(e)&&(Q.discoveries.push(e),hf(`手记添一笔 · `+$.interact.find(t=>t.id===e).name),Rf(),gf())}nf=Jd({state:Q,settings:$d,save:gf,onFinish(e){e===`intro`?(Q.arrived=!0,hf(`门前心事已记下。可继续游府，准备好后再与正房门边的凤姐姐交谈。`)):e===`hall`?(Q.complete=!0,hf(`第一幕 · 朱门初启已完成。仍可继续自由探索这座贾府。`)):e?.startsWith(`item:`)&&Nf(e.slice(5)),Rf()}});var Pf=e=>({who:`林黛玉`,kind:`心声`,text:e});function Ff(e){if(af=e,e.role===`intro`){if(!Q.arrived){nf.legacy(`arrival`,`corridor`,`intro`);return}nf.lines([{who:e.name,text:Q.complete?`姑娘已认得这条路了。若还想四处看看，老身便在前院候着。`:`正房在内院北头。姑娘若想在廊下歇歇，也不妨事，丫鬟们都候着呢。`},Pf(`她语气和缓。我将来时的路记在心里，这座宅院便渐渐有了可以辨认的方向。`)])}else if(e.role===`main`){if(!Q.arrived){nf.legacy(`arrival`,`corridor`,`intro`);return}if(!Q.complete){nf.legacy(`corridor`,`grandma-arrival`,`hall`);return}nf.lines(_d(e,Q))}else nf.lines(_d(e,Q))}function If(){if(Lf()||(Zf(),!rf))return;if(cf=[],kf.visible=!1,rf.role){Ff(rf);return}if(rf.kind===`door`){let e=$.doors.find(e=>e.id===rf.id);e.open=!e.open,e.collider.enabled=!e.open,Q.doors[e.id]=e.open,hf(e.open?`茶房门轻轻推开了。`:`我将门轻轻掩好。`),Nf(rf.id),gf();return}rf.kind===`collect`&&!Q.petal&&(Q.petal=!0,rf.visual.visible=!1);let e=rf.kind===`collect`&&Q.discoveries.includes(rf.id)?`袖中的落花安静地贴着衣襟。我不必再多取一片，这一点初来的春意，已足够记下。`:rf.text;nf.lines([Pf(e)],`item:`+rf.id)}function Lf(){return!Q.started||nf.active||Z(`modal`).open||document.hidden}function Rf(){Z(`quest-title`).textContent=Q.complete?`朱门初启 · 已读`:Q.arrived?`庭院渐深，何处相逢`:`一座陌生的庭院`,Z(`quest-copy`).textContent=Q.complete?`这一日的初念已经记下，仍可随心探索。`:Q.arrived?`凤姐姐正在正房门边候着，也可先沿回廊走走。`:`可随婆子入府，也可先在庭院中走走。`,Z(`step-intro`).textContent=`门前初念`,Z(`step-intro`).classList.toggle(`done`,Q.arrived),Z(`step-intro`).setAttribute(`aria-label`,`门前初念`+(Q.arrived?`，已完成`:`，未完成`)),Z(`step-hall`).textContent=`正房通报`,Z(`step-hall`).classList.toggle(`done`,Q.complete),Z(`step-hall`).setAttribute(`aria-label`,`正房通报`+(Q.complete?`，已完成`:`，未完成`)),Z(`discover-count`).textContent=`发现 ${Q.discoveries.length} / ${$.interact.length}`,Z(`discovery-progress`).max=$.interact.length,Z(`discovery-progress`).value=Q.discoveries.length}function zf(e,t){if(Lf())return;let n=_f.route($.player.root.position.x,$.player.root.position.z,e,t);n.length?(cf=n,kf.position.set(n.at(-1).x,$.groundHeight(n.at(-1).x,n.at(-1).z)+.06,n.at(-1).z),kf.visible=!0):hf(`这处暂不便落脚，试试旁边的石径。`)}function Bf(e){sf=e??!sf,document.body.classList.toggle(`overview-mode`,sf),Z(`overview`).querySelector(`.nav-label`).textContent=sf?`回到黛玉`:`俯瞰全府`,Z(`overview`).setAttribute(`aria-pressed`,String(sf))}function Vf(){Q.started=!0,Z(`intro`).hidden=!0,Bf(!1),gf(),nf.resume(),yf.domElement.focus({preventScroll:!0})}Z(`begin`).onclick=Vf,Z(`intro`).hidden=Q.started,Z(`recenter`).onclick=()=>Bf(!1),Z(`overview`).onclick=()=>Bf(),Z(`interact-button`).onclick=If;function Hf(e){return cf=[],lf.clear(),kf.visible=!1,nf.clearMemories(),Z(`modal-title`).textContent=e,Z(`modal-body`).replaceChildren(),Z(`modal`).showModal(),Z(`modal-body`)}Z(`modal-close`).onclick=()=>Z(`modal`).close(),Z(`modal`).addEventListener(`click`,e=>{if(e.target===Z(`modal`)){let t=Z(`modal`).getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&Z(`modal`).close()}});function Uf(){let e=Hf(`黛玉手记`),t=document.createElement(`p`);if(t.textContent=Q.discoveries.length?`一日初来，所见所想，皆可留一笔。`:`手记尚未落笔。与庭中的人物、物件相遇，慢慢记下这一日。`,Q.discoveries.length)e.append(t);else{let n=document.createElement(`div`),r=document.createElement(`img`);n.className=`journal-empty`,r.src=`./assets/flower.svg`,r.alt=``,n.append(r,t),e.append(n)}for(let t of Q.discoveries){let n=$.interact.find(e=>e.id===t);if(!n)continue;let r=document.createElement(`article`);r.className=`journal-entry`;let i=document.createElement(`h3`);i.textContent=n.name;let a=document.createElement(`p`);a.textContent=n.text,r.append(i,a),e.append(r)}let n=document.createElement(`p`);n.className=`fine`,n.textContent=`手记、位置与第一幕剧情进度自动保存在当前浏览器。探索对白为文学再创作；主要入府对白沿用原游戏。`,e.append(n)}Z(`journal-open`).onclick=Uf;function Wf(){let e=Hf(`漫游与阅读`);e.innerHTML=`<p>不必急着赶路。可以点击地面自动寻路，也可用键盘自行行走，靠近人物或物件时按 E。</p><div class="key-list"><span>WASD / 方向键 · 行走</span><span>E · 交互</span><span>F · 俯瞰 / 跟随</span><span>J · 手记</span><span>M · 地图</span><span>Esc · 暂停对话</span></div><div class="setting"><label>场景动效<small>人物步态、转场和屋顶渐隐</small></label><input id="setting-motion" type="checkbox"></div><div class="setting"><label>轻弦背景乐<small>首次操作后播放，无角色配音</small></label><input id="setting-music" type="checkbox"></div><div class="setting"><label>人物忆影<small>心声念及人物时，短暂浮现其形象</small></label><input id="setting-memory" type="checkbox"></div><div class="setting"><label>文字速度<small>最右侧即时显示</small></label><input id="setting-speed" type="range" min="0" max="70" step="5"></div><p class="fine" style="margin-top:17px">这是一张依据第一幕情节设计的艺术化贾府地图。可玩院落自由连通；正房通报完成后仍可继续探索。此处使用独立漫游存档。</p>`,Z(`setting-motion`).checked=$d.motion,Z(`setting-music`).checked=$d.music,Z(`setting-memory`).checked=$d.memories,Z(`setting-speed`).value=70-$d.speed;for(let e of[`setting-motion`,`setting-music`,`setting-memory`,`setting-speed`])Z(e).previousElementSibling.htmlFor=e,Z(e).type===`checkbox`&&Z(e).setAttribute(`role`,`switch`);Z(`setting-motion`).onchange=e=>{$d.motion=e.target.checked,document.body.classList.toggle(`ui-still`,!$d.motion),gf()},Z(`setting-music`).onchange=e=>{$d.music=e.target.checked,$d.music?op():sp(),gf()},Z(`setting-memory`).onchange=e=>{$d.memories=e.target.checked,nf.clearMemories(),gf()},Z(`setting-speed`).oninput=e=>{$d.speed=70-Number(e.target.value),gf()}}Z(`help-open`).onclick=Wf;var Gf=Z(`mini-map`);Gf.getContext(`2d`);function Kf(e,t=!1){let n=e.getContext(`2d`),r=e.width,i=e.height,a=t?24:10,o=Math.min((r-a*2)/76,(i-a*2)/63),s=(r-76*o)/2,c=(i-63*o)/2,l=(e,t)=>[s+(e+38)*o,c+(t+31)*o];n.fillStyle=`#e6e6d6`,n.fillRect(0,0,r,i),n.fillStyle=`#bcc9a4`,n.fillRect(s,c,76*o,63*o),n.fillStyle=`#ddd4bc`;for(let e of $.mapData.paving){let[t,r]=l(e.x-e.w/2,e.z-e.d/2);n.fillRect(t,r,e.w*o,e.d*o)}n.strokeStyle=`#dcd3bc`,n.lineJoin=`round`;for(let e of $.mapData.paths)n.lineWidth=e.width*o,n.beginPath(),e.points.forEach(([e,t],r)=>{let i=l(e,t);r?n.lineTo(...i):n.moveTo(...i)}),n.stroke();n.fillStyle=`#8eafa1`,n.beginPath(),$.mapData.pond.forEach(([e,t],r)=>{let i=l(e,t);r?n.lineTo(...i):n.moveTo(...i)}),n.closePath(),n.fill(),n.fillStyle=`#dfd4ba`;for(let e of $.mapData.bridges){let[t,r]=l(e.x-e.w/2,e.z-e.d/2);n.fillRect(t,r,e.w*o,e.d*o)}n.fillStyle=`#6b8467`;for(let e of $.mapData.trees){let[t,r]=l(e.x,e.z);n.beginPath(),n.arc(t,r,e.r*o,0,Math.PI*2),n.fill()}n.fillStyle=`#939a85`;for(let e of $.mapData.rocks){let[t,r]=l(e.x,e.z);n.beginPath(),n.arc(t,r,e.r*o,0,Math.PI*2),n.fill()}n.fillStyle=`#617b6a`;for(let e of $.roofs){if(e.group.name.endsWith(`_Cutaway`))continue;let t=e.rect,[r,i]=l(t.x-t.w/2,t.z-t.d/2);n.globalAlpha=.7,n.fillRect(r,i,t.w*o,t.d*o)}n.globalAlpha=1,n.fillStyle=`#a6ab93`;for(let e of $.solid){if(!e.enabled||e.id?.startsWith(`water`)||e.w>4&&e.d>4)continue;let[t,r]=l(e.x-e.w/2,e.z-e.d/2);n.fillRect(t,r,Math.max(.7,e.w*o),Math.max(.7,e.d*o))}if(t){n.font=`17px SimSun`,n.textAlign=`center`,n.fillStyle=`#3d5c47`;for(let e of zd){let[t,r]=l(e.x,e.z);n.fillStyle=`#fff9e7dc`,n.fillRect(t-49,r-14,98,26),n.fillStyle=`#42604b`,n.fillText(e.name,t,r+5)}}let[u,d]=l($.player.root.position.x,$.player.root.position.z);return n.fillStyle=`#a7654d`,n.beginPath(),n.arc(u,d,t?6:3.5,0,Math.PI*2),n.fill(),n.strokeStyle=`#fff4db`,n.lineWidth=t?2:1,n.stroke(),{s:o,ox:s,oz:c}}function qf(){let e=Hf(`荣府漫游图`),t=document.createElement(`p`);t.className=`fine`,t.textContent=`轻点地图中的道路，可让黛玉自行寻路前往。院落和房间可沿侧门、回廊绕行。`;let n=document.createElement(`canvas`);n.width=760,n.height=630,n.className=`modal-map`,e.append(t,n);let r=Kf(n,!0);n.onclick=e=>{let t=n.getBoundingClientRect(),i=(e.clientX-t.left)/t.width*n.width,a=(e.clientY-t.top)/t.height*n.height;Z(`modal`).close(),zf((i-r.ox)/r.s-38,(a-r.oz)/r.s-31)};let i=document.createElement(`div`);i.className=`map-legend`,zd.forEach(e=>{let t=document.createElement(`span`);t.textContent=e.name,i.append(t)}),e.append(i)}Z(`map-open`).onclick=qf,Gf.onclick=qf,yf.domElement.addEventListener(`pointerdown`,e=>{if(e.button!==0||Lf())return;let t=yf.domElement.getBoundingClientRect();Df.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),Ef.setFromCamera(Df,xf);let n=$.pickGround(Ef.ray);n&&zf(n.x,n.z)}),yf.domElement.addEventListener(`wheel`,e=>{Lf()||(e.preventDefault(),sf&&(Bf(!1),Tf=26),Tf=Math.max(5.5,Math.min(29,Tf+Math.sign(e.deltaY)*1.5)))},{passive:!1}),document.addEventListener(`keydown`,e=>{if(e.repeat||e.altKey||e.ctrlKey||e.metaKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||nf.active||Z(`modal`).open)return;if(!Q.started){(e.code===`Enter`||e.code===`Space`)&&(e.preventDefault(),Vf());return}let t=e.key.toLowerCase();[`w`,`a`,`s`,`d`,`arrowup`,`arrowleft`,`arrowdown`,`arrowright`].includes(t)?(e.preventDefault(),lf.add(t),cf=[],kf.visible=!1):t===`e`?(e.preventDefault(),If()):t===`f`?(e.preventDefault(),Bf()):t===`j`?(e.preventDefault(),Uf()):t===`m`&&(e.preventDefault(),qf())}),document.addEventListener(`keyup`,e=>lf.delete(e.key.toLowerCase())),window.addEventListener(`blur`,()=>{lf.clear(),gf()}),document.addEventListener(`visibilitychange`,()=>{lf.clear(),pf=document.hidden,pf?(nf.clearMemories(),sp(),gf()):$d.music&&ap&&op()});function Jf(){yf.setSize(innerWidth,Math.max(660,innerHeight))}window.addEventListener(`resize`,Jf),Jf();function Yf(e,t,n){let r=new K(e,t,n).project(xf);return{x:(r.x+1)*innerWidth/2,y:(1-r.y)*Math.max(660,innerHeight)/2,visible:r.z>=-1&&r.z<=1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1}}function Xf(e,t,n,r,i){let a=Yf(t,n,r);e.hidden=!i||!a.visible,e.hidden||(e.style.left=a.x+`px`,e.style.top=a.y+`px`)}function Zf(){if(rf=null,Lf()){Z(`interaction`).hidden=!0;return}let e=$.player.root.position,t=2.7;for(let n of[...$.interact,...$.npcs]){let r=n.root?.position||n,i=Math.hypot(r.x-e.x,r.z-e.z);i<t&&(t=i,rf=n)}Z(`interaction`).hidden=!rf,rf&&(Z(`interact-kind`).textContent=rf.role?`相谈`:rf.kind===`door`?`开合`:`查看`,Z(`interact-name`).textContent=rf.name,Z(`interact-button`).querySelector(`span`).textContent=rf.role?`轻声相问`:rf.kind===`door`?`推门 / 掩门`:`停步细看`)}var Qf=new us,$f=0,ep=0;function tp(){let e=Math.min(Qf.getDelta(),.05);if(pf)return;uf+=e,$f++,ep+=e,ep>1&&(Math.round($f/ep),ep=0,$f=0);let t=$.player.root,n=!1;if(!Lf()){let r=0,i=0,a=1/0,o=(lf.has(`w`)||lf.has(`arrowup`)?1:0)-(lf.has(`s`)||lf.has(`arrowdown`)?1:0),s=(lf.has(`d`)||lf.has(`arrowright`)?1:0)-(lf.has(`a`)||lf.has(`arrowleft`)?1:0);if(o||s){r=(-o+s)/Math.SQRT2,i=(-o-s)/Math.SQRT2;let e=Math.hypot(r,i);r/=e,i/=e}else if(cf.length){let e=cf[0],n=Math.hypot(e.x-t.position.x,e.z-t.position.z);n<.01?cf.shift():(r=(e.x-t.position.x)/n,i=(e.z-t.position.z)/n,a=n)}if(r||i){let o=Math.min(4.25*e,a),s=t.position.x+r*o,c=t.position.z+i*o;_f.canMove(t.position.x,t.position.z,s,c)?(t.position.x=s,t.position.z=c):(_f.canMove(t.position.x,t.position.z,s,t.position.z)&&(t.position.x=s),_f.canMove(t.position.x,t.position.z,t.position.x,c)&&(t.position.z=c));let l=Math.atan2(r,i),u=Tt.euclideanModulo(l-t.rotation.y+Math.PI,Math.PI*2)-Math.PI;t.rotation.y+=u*Math.min(1,e*11),n=!0}cf.length||(kf.visible=!1)}nf.active||(af=null);let r=$d.motion&&!mf.matches,i=nf.active?af:rf?.role?rf:null,a=nf.speaker,o=nf.active&&[`林黛玉`,`我`,`心中的黛玉`].includes(a);nf.active&&af&&id($.player,af.root.position,e,r),ad($.player,{time:uf,delta:e,enabled:r,moving:n,attention:i?.root.position,speaking:o,listening:nf.active&&!o}),t.position.y=$.groundHeight(t.position.x,t.position.z)+(n&&r?Math.abs(Math.sin(uf*12))*.045:0),Of.position.set(t.position.x,t.position.y+.015,t.position.z);for(let n of $.npcs){let s=Math.hypot(n.root.position.x-t.position.x,n.root.position.z-t.position.z),c=n===i&&s<4;if(c)id(n,t.position,e,r);else{let t=n.facing||0,i=Tt.euclideanModulo(t-n.root.rotation.y+Math.PI,Math.PI*2)-Math.PI;n.root.rotation.y+=i*(r?1-Math.exp(-e*2.5):1)}n.root.position.y=$.groundHeight(n.root.position.x,n.root.position.z),n.collider.x=n.root.position.x,n.collider.z=n.root.position.z,ad(n,{time:uf,delta:e,enabled:r,attention:c?t.position:null,speaking:nf.active&&(a===n.name||n===af&&!o),listening:nf.active&&n===af&&o})}for(let t of $.doors){let n=t.open?-Math.PI*.48:0;t.hinge.rotation.y=$d.motion?Tt.lerp(t.hinge.rotation.y,n,Math.min(1,e*5)):n}of=$.rooms.find(e=>e.contains(t.position.x,t.position.z,.25))||null,$.setRoomFocus(sf?null:of);for(let n of $.roofs){let r=n.rect,i=!sf&&(n.room?n.room.contains(t.position.x,t.position.z,-.1):Math.abs(t.position.x-r.x)<r.w/2+1&&Math.abs(t.position.z-r.z)<r.d/2+1);for(let t of n.materials){let r=i?n.group.name.includes(`Pavilion`)?.25:n.group.name.endsWith(`_Cutaway`)?.025:0:1;t.opacity=$d.motion?Tt.lerp(t.opacity,r,Math.min(1,e*5)):r,t.depthWrite=t.opacity>.5}n.group.visible=n.materials.some(e=>e.opacity>.012),n.group.traverse(e=>{e.isMesh&&(e.castShadow=!i)})}let s=sf?new K(0,3,1):new K(t.position.x,t.position.y+1,t.position.z),c=$d.motion?1-Math.exp(-e*3.3):1;Sf.lerp(s,c),wf=Tt.lerp(wf,sf?41.2:Tf*(of?.74:1),c);let l=innerWidth/Math.max(660,innerHeight);xf.left=-wf*l,xf.right=wf*l,xf.top=wf,xf.bottom=-wf,xf.position.copy(Sf).add(Cf),xf.lookAt(Sf),xf.updateProjectionMatrix(),xf.updateMatrixWorld();for(let e of Af)Xf(e.e,e.x,$.groundHeight(e.x,e.z)+3.2,e.z,sf?[`hall`,`rockery`,`garden`].includes(e.id):Math.hypot(t.position.x-e.x,t.position.z-e.z)>11);for(let{e,npc:n}of jf)Xf(e,n.root.position.x,n.root.position.y+n.height+.3,n.root.position.z,!sf&&(!n.room||of?.id===n.room)&&Math.hypot(n.root.position.x-t.position.x,n.root.position.z-t.position.z)<20);Xf(Mf,t.position.x,t.position.y+$.player.height+.3,t.position.z,sf);let u=zd.find(e=>t.position.x>=e.rect[0]&&t.position.x<=e.rect[2]&&t.position.z>=e.rect[1]&&t.position.z<=e.rect[3])||zd[2],d=of?`interior:`+of.id:u.id;d!==ff&&(ff=d,Z(`place-name`).textContent=of?of.name+` · 内室`:u.name);for(let e of $.animated)if(e.type===`ripple`){let t=(uf*.23+e.phase)%1;e.mesh.scale.setScalar($d.motion?1+t:1),e.mesh.material.opacity=$d.motion?.2*(1-t):.12}Zf(),Kf(Gf),df+=e,df>1&&(df=0,gf()),yf.render(vf,xf)}var np,rp,ip,ap=!1;function op(){if(ap&&$d.music)try{if(np||(np=new(window.AudioContext||window.webkitAudioContext),ip=np.createGain(),ip.gain.value=.065,ip.connect(np.destination)),np.resume().catch(()=>{}),rp)return;let e=0,t=[0,4,7,9,7,4,2,0,2,4,7,12,9,7,4,2],n=()=>{let n=np.currentTime;for(let r of[1,2]){let i=np.createOscillator(),a=np.createGain();i.frequency.value=220*2**(t[e%t.length]/12)*r,a.gain.setValueAtTime(.3/(r*r),n),a.gain.exponentialRampToValueAtTime(.001,n+2.2),i.connect(a),a.connect(ip),i.start(n),i.stop(n+2.3)}e++};n(),rp=setInterval(n,1700)}catch{$d.music=!1}}function sp(){clearInterval(rp),rp=null,np?.suspend().catch(()=>{})}var cp=()=>{ap||(ap=!0,op())};document.addEventListener(`pointerdown`,cp,{once:!0}),document.addEventListener(`keydown`,cp,{once:!0}),Rf(),Bf(sf),yf.setAnimationLoop(tp),Z(`loading`).hidden=!0,document.body.dataset.ready=`true`,Q.started&&(Bf(!1),nf.resume());