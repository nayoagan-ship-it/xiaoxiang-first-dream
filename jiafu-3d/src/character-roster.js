// The player plus eight named relatives/companions, and only two necessary gate staff.
export const playerSpec={design:'daiyu',name:'林黛玉',animated:true};
export const npcSpecs=[
 {id:'matron',name:'引路婆子',design:'matron',x:18,z:24,role:'intro',facing:.35,approach:{x:18,z:25.5},location:'停轿小院'},
 {id:'xueyan',name:'雪雁',design:'xueyan',x:11.5,z:-23.5,role:'xueyan',facing:-.5,room:'guest',approach:{x:10,z:-23.5},location:'东侧绣楼 · 箱笼旁'},
 {id:'keeper',name:'看门仆人',design:'keeper',x:21.5,z:29,role:'keeper',facing:.2,approach:{x:21.5,z:30.5},location:'府门内侧'},
 {id:'fengjie',name:'王熙凤',design:'fengjie',x:17,z:18.8,role:'main',facing:.25,approach:{x:18.5,z:19.5},location:'东前院 · 绣房廊前'},
 {id:'jiamu',name:'贾母',design:'jiamu',x:-4,z:-12.8,role:'jiamu',facing:0,room:'hall',approach:{x:-4,z:-10.5},location:'正房主榻前'},
 {id:'wang',name:'王夫人',design:'wang',x:1,z:-27.5,role:'wang',facing:-.45,approach:{x:1,z:-26},location:'后院 · 绣楼西廊'},
 {id:'yingchun',name:'贾迎春',design:'yingchun',x:-24.3,z:21.7,role:'yingchun',facing:.65,room:'tea',approach:{x:-23.5,z:21.5},location:'西前院 · 茶房'},
 {id:'tanchun',name:'贾探春',design:'tanchun',x:-23.1,z:-17,role:'tanchun',facing:.55,room:'study',approach:{x:-23,z:-15.5},location:'西厢书阁 · 书案旁'},
 {id:'xichun',name:'贾惜春',design:'xichun',x:-33,z:-2,role:'xichun',facing:.3,approach:{x:-34,z:-1.5},location:'叠石高台 · 听风亭'},
 {id:'baoyu',name:'贾宝玉',design:'baoyu',x:29.7,z:-19.3,role:'baoyu',facing:-.65,approach:{x:30.5,z:-18.5},location:'曲水亭园 · 临水亭'}
];

const thought=text=>({who:'林黛玉',kind:'心声',text});
export function characterLines(npc,state){
 const lines={
  xueyan:[{who:'雪雁',text:'姑娘，箱笼都在这里，您的书也没有碰坏。若想歇一歇，我便陪着您。'},thought('我回头看看雪雁，心里微微一暖。到了这样陌生的地方，仍有人认得我旧日的习惯。')],
  keeper:[{who:'看门仆人',text:'姑娘从西角门进来便是。前院顺着石径，可往垂花门与内院。'},thought('门庭有门庭的规矩。我将脚下的路，连同新认得的称呼，一道记在心里。')],
  jiamu:[{who:'贾母',text:'好孩子，远路过来可累着了？到外祖母身边来，往后同姊妹们一处住着，慢慢便熟了。'},thought('她的声音柔和，我一时竟不知该先说哪一句。只觉得满屋陌生的陈设，都因这一声呼唤亲近了些。')],
  wang:[{who:'王夫人',text:'你才来，不必拘束。姊妹们一处读书做针线，日常有什么短少，告诉你凤姐姐便是。'},thought('我轻轻应下，将舅母的话仔细记住。身在这深宅，原要从一句问候、一处座次慢慢学起。')],
  yingchun:[{who:'贾迎春',text:'妹妹一路辛苦了。先坐一坐，等歇过来，咱们再慢慢说话。'},thought('她话不多，神情却温柔可亲。我向她见了礼，心里也跟着安静了一点。')],
  tanchun:[{who:'贾探春',text:'妹妹又来了？改日得闲，咱们一处看看书。若还不认得北面的路，我指给你。'},thought('她眉眼间自有一股明朗神气。我微微点头，初来的拘谨，像被这句话轻轻松开了。')],
  xichun:[{who:'贾惜春',text:'林姐姐，你从很远的地方来么？等你歇好了，给我讲讲那边的花，好不好？'},thought('她年纪尚小，仰起脸看我。我也不觉放柔了声音，答应等闲下来，便讲给她听。')],
  baoyu:[{who:'贾宝玉',text:state.complete?'妹妹也来亭边走走？这园里花木多，咱们慢慢认。':'妹妹也在这里？这亭边清静，若想看书，坐一坐便是。'},thought('他说话亲近，倒像我们并不是头一回相逢。我垂下眼，心中那一点陌生，又悄悄淡了些。')],
  main:[{who:'王熙凤',text:'妹妹只管安心住下。少什么、想要什么，告诉我便是，别同我客气。'},thought('凤姐姐笑语爽利，连安排琐事也利落。我望着她，渐渐明白这宅院里的许多事情，都有她照应。')]
 };return lines[npc.role]||[thought('我向她见过礼，慢慢将这新认得的面孔记在心里。')];
}
