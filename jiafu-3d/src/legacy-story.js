/* Literary adaptation: choices add inner thoughts; the day's canonical events stay fixed. */
window.DREAM_STORY = (() => {
  const chapters = [
    { title: '朱门初启', place: '荣国府 · 垂花门', caption: '朱门深处，步步留心', scene: 'courtyard' },
    { title: '一怀悲喜', place: '贾母正房 · 午后', caption: '一声心肝，半生牵念', scene: 'hall' },
    { title: '未见先闻', place: '贾母正房 · 笑语', caption: '珠翠生辉，笑语藏锋', scene: 'hall' },
    { title: '满堂规矩', place: '荣禧堂 · 暮色', caption: '人情冷暖，尽在细微', scene: 'hall' },
    { title: '似曾相识', place: '贾母正房 · 掌灯', caption: '只这一眼，恍若旧识', scene: 'hall' }
  ];
  const nodes = {};
  function line(id, chapter, who, text, next, portrait = '', extra = {}) {
    nodes[id] = { id, chapter, who, text, next, portrait, ...extra };
  }
  const thought = (id,c,text,next,p='',extra={}) => line(id,c,'林黛玉',text,next,p,{kind:'心声',...extra});
  const choose = (id,c,text,prompt,options,portrait='') => thought(id,c,text,null,portrait,{prompt,options});
  const option = (label,next,effect,memory) => ({label,next,effect,memory});

  thought('arrival',0,'轿子轻轻一晃，停了。我拢住袖口，隔着纱窗望出去。京城的繁华尚未看尽，眼前已是重重朱门。','gate');
  thought('gate',0,'方才经过宁国府，如今才到荣国府。正门并不开，轿子从西角门进去。连入门的路，也有我尚不懂的分别。','mother');
  thought('mother',0,'母亲在世时，常说外祖母家与别处不同。如今母亲不在了，父亲又远在扬州；往后的日子，我要在这里过了。','arrival-choice');
  choose('arrival-choice',0,'婆子掀起轿帘，将手递来。垂花门后的脚步声、鸟鸣声，一齐近了。','跨过这道门时，我想……',[
    option('记清每一步，莫失了礼数。','entry-careful',{reserve:2},'留心门庭'),
    option('外祖母等着我，先去见她。','entry-warm',{warmth:1},'心念亲人'),
    option('母亲走过的地方，会是什么样？','entry-curious',{resonance:1},'寻母旧迹')
  ]);
  thought('entry-careful',0,'我扶着婆子的手下轿，步子放得轻，眼睛也不敢四处多看。母亲留下的叮咛，我须替自己记牢。','corridor');
  thought('entry-warm',0,'我想象外祖母的模样。她的声音是否与母亲相像？这陌生深宅里，终究还有一位盼着我的亲人。','corridor');
  thought('entry-curious',0,'廊上的光影落在衣袖上。我忽然想，母亲年少时，也许曾扶着这些栏杆，听过同样的鸟声。','corridor');
  thought('corridor',0,'我穿过垂花门，绕过大理石插屏。两边游廊曲折，笼中鸟儿啼得清脆；穿红着绿的丫鬟早已迎了下来。','announce');
  line('announce',0,'丫鬟','“林姑娘到了。”','grandma-arrival');

  thought('grandma-arrival',1,'帘子一开，一位银发老人已由人扶着迎上来。我知道，这便是外祖母了。我屈膝欲拜，身子却先被她搂进怀中。','grandma-cry','jiamu');
  line('grandma-cry',1,'贾母','“我的心肝儿……”','grandma-feel','jiamu');
  thought('grandma-feel',1,'她一声声唤我，泪落在我的鬓边。我一路忍着的委屈忽然都没了去处，只随着她哭。满屋的人也在拭泪。','grandma-choice','jiamu');
  choose('grandma-choice',1,'等哭声略止，外祖母仍拉着我的手。她掌心的温热，像一盏隔了很久才照到我的灯。','此刻，我愿怎样靠近她？',[
    option('轻轻依着她，把想念说出来。','grandma-warm',{warmth:2},'外祖母的怀抱'),
    option('先拭去眼泪，郑重补上拜礼。','grandma-formal',{reserve:2},'含泪见礼')
  ],'jiamu');
  line('grandma-warm',1,'林黛玉','“外祖母，我一路都想着，见到您，就像又能离母亲近些。”我说得很轻，她却把我的手握得更紧了。','meet-family','jiamu',{kind:'轻声'});
  thought('grandma-formal',1,'我离开她的怀抱，认认真真拜了下去。纵有千言万语，此时也只说得一句：外祖母，黛玉来迟了。','meet-family','jiamu');
  thought('meet-family',1,'我依次拜见大舅母、二舅母和珠大嫂子。外祖母又唤了迎春、探春、惜春来，满屋陌生的面孔，渐渐有了称呼。','sisters','jiamu');
  thought('sisters',1,'迎春温柔沉静，探春顾盼有神，惜春年纪还小。我们互相见礼。我望着她们，想起父亲说过：姊妹一处，也可解些烦闷。','medicine','jiamu');
  thought('medicine',1,'众人问起我的病，我答了素来服的药。外祖母说府中正配丸药，叫人替我多配一份。我垂下眼，心里轻轻动了一下。','laugh','jiamu');

  line('laugh',2,'王熙凤','“我来迟了，不曾迎接远客！”','fengjie-enter');
  thought('fengjie-enter',2,'满屋人原都敛声屏气，偏这一串笑声先到了。我抬起眼，看见众人簇拥着一位衣饰华贵的年轻妇人进来。','fengjie-look','fengjie');
  thought('fengjie-look',2,'凤钗珠光微颤，大红衣衫映得她神采飞扬。一双丹凤眼还未说话，已将满屋的人情照看了一遍。我连忙起身。','fengjie-intro','fengjie');
  line('fengjie-intro',2,'贾母','“这是我们这里有名的凤辣子。”姊妹们又告诉我：这是琏嫂子。','fengjie-greet','fengjie');
  thought('fengjie-greet',2,'我忙以嫂相称。原来这便是母亲说过的王熙凤。她携着我的手，上下端详，话说得热闹，笑意也来得极快。','fengjie-words','fengjie');
  line('fengjie-words',2,'王熙凤','“妹妹既来了，便安心住下。想吃什么、缺什么，只管告诉我。”','fengjie-choice','fengjie');
  choose('fengjie-choice',2,'她刚替母亲伤感了片刻，听外祖母劝止，又很快转悲为喜。这样周到的人，我该如何答她？','面对这份热络，我……',[
    option('笑着谢她，愿慢慢亲近。','fengjie-trust',{warmth:1},'接住凤姐的好意'),
    option('恭敬称谢，将分寸放在心里。','fengjie-caution',{reserve:1},'笑语间的分寸')
  ],'fengjie');
  line('fengjie-trust',2,'林黛玉','“多谢嫂子惦记。初来许多不懂的，还要请嫂子教我。”她笑着应下。我也试着放松了些。','fengjie-work','fengjie',{kind:'答话'});
  thought('fengjie-caution',2,'我含笑谢过。她的话妥帖，照拂也周全；只是这里一句话，常能同时顾到许多人。我还须慢慢学。','fengjie-work','fengjie');
  thought('fengjie-work',2,'她一面问我的年岁、读书和用药，一面安排仆妇安放行李。二舅母问起月钱和裁衣的缎子，她也一一答得明白。','fengjie-leave','fengjie');
  thought('fengjie-leave',2,'我渐渐明白，这满屋的笑语背后，有一张看不见的细网。谁亲谁疏，谁管着什么，都藏在话里。','uncle-one');

  thought('uncle-one',3,'大舅母带我去拜见大舅舅。大舅舅因身子不适，遣人传话，要我安心住下。我起身听完，再向大舅母辞行。','refuse-dinner');
  thought('refuse-dinner',3,'她留我用饭，我婉谢了：还须去拜见二舅舅，怕迟了失恭，改日再领赐。我把话在心里掂过，才敢说出口。','rongxi');
  thought('rongxi',3,'重回荣府，荣禧堂的匾额映入眼中，紫檀大案与两列交椅肃然无声。我越发觉得，连坐在哪里，都有规矩。','seat');
  thought('seat',3,'二舅母在耳房见我。我料想上首原是二舅舅的位置，便先向椅上坐了；她再三相让，我才挨着她坐下。','warning');
  line('warning',3,'王夫人','“你舅舅今日斋戒去了。家里姊妹都好，只有宝玉淘气，你往后少惹他。”','baoyu-imagine');
  thought('baoyu-imagine',3,'母亲也曾说过这位衔玉而生的表兄：极憨顽，却待姊妹很好。二舅母口中的人，究竟会是什么模样？','dinner');
  thought('dinner',3,'外祖母传晚饭了。凤姐拉我坐在左边第一张椅上，我再三推让，听外祖母说我是客，才告了座。席间竟连一声咳嗽也听不见。','tea-choice');
  choose('tea-choice',3,'饭毕，丫鬟先捧来一盏茶，又捧来漱盂。我想起家中的习惯，手上不由稍停了一停。','我该怎样应对这陌生的礼数？',[
    option('先看姊妹如何做，再从容照做。','tea-observe',{reserve:1},'细察席间礼数'),
    option('轻声向身旁的姊妹问一问。','tea-ask',{warmth:1},'向姊妹轻声求助')
  ]);
  thought('tea-observe',3,'原来头一道茶是漱口的，盥手后才是饮茶。我照着姊妹的样子做完，庆幸自己没有冒失，却也悄悄想起家中自在的饭桌。','books');
  thought('tea-ask',3,'我低声问过，姊妹轻轻示意，我便明白了。原来不懂之处，并非都要独自在心里惴惴地猜。','books');
  line('books',3,'贾母','“念过些什么书？”','books-reply','jiamu');
  line('books-reply',3,'林黛玉','“只刚念了《四书》。”我又问姊妹们读些什么书。','books-grandma','jiamu',{kind:'答话'});
  line('books-grandma',3,'贾母','“不过是认得两个字罢了。”','books-thought','jiamu');
  thought('books-thought',3,'我将这话暗暗记下。在家里，父亲教我读书作答；到了这里，原来同样的问题，也要听清说话人的意思。','baoyu-arrival','jiamu');

  line('baoyu-arrival',4,'丫鬟','“宝玉来了！”','first-look');
  thought('first-look',4,'我正想着那位惫懒顽童，门外已进来一个年轻公子。眉眼清明，面如春花，颈间的美玉映着灯光。','recognition','baoyu');
  thought('recognition',4,'好生奇怪。这张面容，我分明从未见过，却像在什么地方相识了许久。我低下眼，怕心事先露了出来。','baoyu-greet','baoyu');
  line('baoyu-greet',4,'贾宝玉','“这个妹妹我曾见过的。”','grandma-tease','baoyu');
  thought('grandma-tease',4,'外祖母笑他胡说。他却说，虽未曾见过，看着面善，便算旧相识。我心里一震：原来不止我有这样的念头。','recognition-choice','baoyu');
  choose('recognition-choice',4,'他的话像越过满屋的规矩，径直落在我心上。我抬眼迎上他的目光。','这份似曾相识，我愿……',[
    option('留住这一眼，在心里认作故人。','recognition-open',{resonance:2},'一眼认作故人'),
    option('含笑见礼，将惊讶暂且藏好。','recognition-shy',{reserve:2},'藏起初逢的惊讶')
  ],'baoyu');
  thought('recognition-open',4,'我没有说破，只轻轻笑了。可那一瞬的安静，竟比今日听过的许多热闹话语，都更让我安心。','baoyu-books','baoyu');
  thought('recognition-shy',4,'我依礼见过他，心里却仍翻着方才那句话。才入贾府，许多事都未明白，这份亲近也先放在心底吧。','baoyu-books','baoyu');
  line('baoyu-books',4,'贾宝玉','“妹妹可曾读书？”','books-choice','baoyu');
  choose('books-choice',4,'他又问到读书。我想起方才外祖母的话，也想起父亲案头陪我度过的那些书卷。','这一次，我如何回答？',[
    option('“不曾读，只认得几个字。”','books-modest',{reserve:1},'随境收敛锋芒'),
    option('“读过些书，也有许多未懂。”','books-honest',{resonance:2},'与他坦诚谈书')
  ],'baoyu');
  line('books-modest',4,'林黛玉','“不曾读，只上了一年学，些须认得几个字。”我把方才的话收了收。他却仍兴致勃勃地问我的名字。','name','baoyu',{kind:'答话'});
  line('books-honest',4,'林黛玉','“随父亲读过些书，却还不曾全懂。”我没有将自己藏得太深。他听得认真，又问起我的名字。','name','baoyu',{kind:'答话 · 改编分支'});
  thought('name',4,'我说了姓名。他听说我还没有表字，便笑着送我“颦颦”二字。探春问其出处，他随口的解释惹得大家一笑。','ask-jade','baoyu');
  line('ask-jade',4,'贾宝玉','“可也有玉没有？”','jade-reply','baoyu');
  line('jade-reply',4,'林黛玉','“我没有那个。想来那玉是一件罕物，岂能人人有的。”','throw-jade','baoyu',{kind:'答话'});
  thought('throw-jade',4,'不料他忽然变了脸色，摘下颈间的玉，狠命摔去。满屋的人都惊动了。我怔在那里，手心一点点凉下来。','jade-angry','baoyu');
  line('jade-angry',4,'贾宝玉','“家里姊妹都没有，单我有，我说没趣。如今来了这个妹妹也没有，可知这不是个好东西！”','jade-calm','baoyu');
  thought('jade-calm',4,'外祖母忙搂住他，说原是我母亲将玉带走了，又让人替他重新戴上。他渐渐安静下来，屋里的人也都缓过神来。','jade-choice','baoyu');
  choose('jade-choice',4,'那玉重新垂在他胸前。我望着他，一时分不清心里的是惊、是愧，还是一点说不清的感动。','这一场风波，在我心里留下……',[
    option('他只是想与姊妹一样，我似乎懂了。','jade-understand',{resonance:2},'读懂摔玉的委屈'),
    option('愿他安稳，也愿外祖母别再忧心。','jade-kind',{warmth:2},'愿眼前人都安稳'),
    option('因我惹出此事，往后更须谨慎。','jade-blame',{reserve:2},'把风波揽在心里')
  ],'baoyu');
  thought('jade-understand',4,'旁人珍重的玉，于他竟成了一道隔开姊妹的门槛。我忽然想起自己今日跨过的许多门：原来，他也有不愿独自站着的地方。','night');
  thought('jade-kind',4,'我望向外祖母，又看看他。今日相逢，本不该添这许多惊惧。若往后可以，我愿在这样的时候，替身边的人留一点温软。','night');
  thought('jade-blame',4,'我说的分明是实话，却仍像错了一句。满屋灯火明亮，我在灯下越发小心，怕自己又惊动了什么。','night');
  thought('night',4,'夜深，外祖母将我暂安置在碧纱橱里。随我来的雪雁年纪还小，外祖母便把身边的鹦哥给了我。我望着放下的帐子，才觉出倦来。','night-tears','',{scene:'night',caption:'灯影渐低，一日成梦'});
  thought('night-tears',4,'想到方才摔玉，我的眼泪又悄悄落下来。袭人来宽慰，说宝玉原是这样的性情，劝我不必自责。我轻轻应了。','last-choice','',{scene:'night'});
  choose('last-choice',4,'窗外已静了。今日每一张面孔、每一句话，还在我心里轻轻回响。','合眼之前，我最想留住……',[
    option('外祖母握住我的那一点暖。','last-warm',{warmth:1},'灯下留暖'),
    option('那句“这个妹妹我曾见过”。','last-resonance',{resonance:1},'枕畔念旧识'),
    option('记下礼数，让明日从容一些。','last-reserve',{reserve:1},'将心事细细收起')
  ]);
  nodes['last-choice'].scene='night';
  thought('last-warm',4,'我将被角轻轻拢好。这里还很陌生，可今日伸向我的那些手，也不全是我想象中的遥远。明日，也许可以再安心一点。','END','',{scene:'night'});
  thought('last-resonance',4,'我闭上眼，那人的眉眼却越发清楚。千里而来，在这层层门院中，竟有一声“相识”，落得这样近。','END','',{scene:'night'});
  thought('last-reserve',4,'我在心中把今日的称呼、座次、茶盏又过了一遍。若能将每一步走稳，许多不安，或许就不必让人看见。','END','',{scene:'night'});

  const endings = {
    familiar:{title:'一见如故',index:'其三',poem:'隔着千重门，认得旧时人。',text:'我原以为，进了这道朱门，往后便只能处处留意、时时收敛。可他的那句“曾见过”，让我听见另一种可能。在这一日的谨慎与惊惧之间，我藏起了一份无人能解的熟悉。此后深宅漫长，至少今夜，有一盏灯是为相识而亮的。'},
    warm:{title:'此心稍安',index:'其二',poem:'身在异乡里，犹有一灯温。',text:'母亲不在，父亲又远，我带着许多不敢说的惶惑来到这里。但外祖母的怀抱、姊妹的示意、旁人的一声宽慰，还是一点点落进心里。规矩仍有千重，我也仍会想家；只是今夜，我终于愿意相信，这里或许能给我一个慢慢安放心事的地方。'},
    careful:{title:'步步留心',index:'其一',poem:'满堂灯火里，一寸小心深。',text:'这一日，我记住了许多称呼、座次与说话的分寸。有人怜我，有人迎我，也有人令我惊讶。越是繁华周全，我越怕自己失了礼数。我将想家的眼泪与初逢的心事一起收在枕边，盼着明日再走进这重重门院时，能比今日更从容一点。'}
  };
  function getEnding(scores){return scores.resonance>=4?'familiar':scores.warmth>=4?'warm':'careful';}
  return {version:1,chapters,nodes,endings,getEnding,start:'arrival'};
})();
