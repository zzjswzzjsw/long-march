// ============================================================
// 红军长征星火路线 - 核心数据文件
// ============================================================

// --- 部队定义 ---
const SUBJECTS = [
  {
    id: "red_first",
    type: "force",
    name: "红一方面军",
    shortName: "红一方面军",
    color: "#d73027",
    leader: "毛泽东、周恩来、朱德、张闻天、王稼祥、彭德怀等",
    sort: 10,
    description: "中央红军主力。1934年10月从中央苏区战略转移，1935年10月到达陕北吴起镇。行程约二万五千里，途经11个省。",
    subUnits: ["红一军团", "红三军团", "红五军团", "红八军团", "红九军团", "中央军委纵队", "红三十四师"]
  },
  {
    id: "red_25th",
    type: "force",
    name: "红二十五军",
    shortName: "红二十五军",
    color: "#fdae61",
    leader: "程子华、吴焕先、徐海东等",
    sort: 20,
    description: "鄂豫皖根据地重要力量，1934年11月从河南罗山何家冲出发，最早到达陕北的红军部队，行程近万里。",
    subUnits: ["红二十五军第七十三师", "红二十五军第七十四师", "红二十五军第七十五师"]
  },
  {
    id: "red_fourth",
    type: "force",
    name: "红四方面军",
    shortName: "红四方面军",
    color: "#4575b4",
    leader: "徐向前、陈昌浩、李先念等",
    sort: 30,
    description: "由川陕根据地转移，经历嘉陵江战役、懋功会师、南下及北上，1936年10月与红一方面军会宁会师。",
    subUnits: ["红四军", "红九军", "红三十军", "红三十一军", "红三十三军"]
  },
  {
    id: "red_second",
    type: "force",
    name: "红二方面军",
    shortName: "红二方面军",
    color: "#1a9850",
    leader: "贺龙、任弼时、萧克、关向应、刘伯承等",
    sort: 40,
    description: "1935年11月从湘鄂川黔根据地出发，1936年7月正式组成红二方面军，10月到达将台堡。",
    subUnits: ["红二军团", "红六军团", "红三十二军"]
  },
  {
    id: "shaanbei_red",
    type: "force",
    name: "陕甘红军",
    shortName: "陕甘红军",
    color: "#984ea3",
    leader: "刘志丹、谢子长、习仲勋等",
    sort: 50,
    description: "陕甘边、陕北根据地革命武装，为中央和各路红军长征提供落脚点。",
    subUnits: ["红二十六军", "红二十七军"]
  }
];

// --- 事件数据 ---
const EVENTS = [
  {
    id: "evt_001",
    date: "1934-10-10",
    title: "中央红军开始长征",
    type: "战略转移",
    description: "中央红军主力8.6万余人从江西瑞金、于都等地出发，开始战略转移。这是人类历史上伟大的远征，标志着长征的正式开始。",
    location: { name: "瑞金", coordinates: [25.886, 115.98] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德", "博古", "李德"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["瑞金"],
    spirit: "长征是人类历史上最伟大的远征之一，体现了中国共产党人'革命理想高于天'的坚定信念和不畏任何艰难险阻的英雄气概。"
  },
  {
    id: "evt_002",
    date: "1934-10-21",
    title: "突破第一道封锁线",
    type: "战役",
    description: "中央红军在江西信丰、安远间突破国民党军第一道封锁线。红四师师长洪超在百石战斗中牺牲，是长征中牺牲的第一位师长。",
    location: { name: "信丰", coordinates: [25.386, 114.92] },
    forceId: "red_first",
    participants: ["洪超"],
    certainty: "confirmed",
    costType: "战斗牺牲",
    costDescription: "红四师师长洪超（25岁）在百石战斗中牺牲，成为长征中牺牲的第一位红军师长。",
    relatedPersonIds: ["person_011"],
    relatedPlaceIds: ["信丰"]
  },
  {
    id: "evt_003",
    date: "1934-11-25",
    title: "湘江战役",
    type: "战役",
    description: "中央红军在湘江上游广西境内与国民党军苦战五昼夜，从8.6万人锐减至3万余人。红三十四师全军覆没，师长陈树湘断肠明志。",
    location: { name: "湘江", coordinates: [25.69, 111.28] },
    forceId: "red_first",
    participants: ["陈树湘"],
    certainty: "confirmed",
    costType: "重大减员",
    costDescription: "出发8.6万，渡江后仅剩3万，单次战役减员5.6万。红34师4300人全军覆没。",
    relatedPersonIds: ["person_009", "person_010"],
    relatedPlaceIds: ["湘江"],
    spirit: "红军以巨大牺牲突破封锁，体现了'为有牺牲多壮志，敢教日月换新天'的革命英雄主义精神，是长征中最为惨烈也最为壮烈的一页。"
  },
  {
    id: "evt_004",
    date: "1934-12-12",
    title: "通道会议",
    type: "会议",
    description: "中央红军在湖南通道召开紧急会议，毛泽东提出向贵州进军的建议，为遵义会议奠定基础。",
    location: { name: "通道", coordinates: [26.16, 109.78] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "博古", "李德", "张闻天", "王稼祥"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["通道"]
  },
  {
    id: "evt_005",
    date: "1934-12-18",
    title: "黎平会议",
    type: "会议",
    description: "中共中央政治局在贵州黎平召开会议，正式决定放弃北上湘西的计划，转向贵州进军，为遵义会议做准备。",
    location: { name: "黎平", coordinates: [26.23, 109.13] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天", "王稼祥"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["黎平"]
  },
  {
    id: "evt_006",
    date: "1935-01-07",
    title: "占领遵义",
    type: "行军",
    description: "中央红军占领贵州遵义城，为遵义会议的召开提供了安全环境。",
    location: { name: "遵义", coordinates: [27.70, 106.92] },
    forceId: "red_first",
    participants: ["刘伯承"],
    certainty: "confirmed",
    relatedPersonIds: ["person_006"],
    relatedPlaceIds: ["遵义"]
  },
  {
    id: "evt_007",
    date: "1935-01-15",
    title: "遵义会议",
    type: "会议",
    description: "中共中央政治局在遵义召开扩大会议，确立了毛泽东在党和红军中的领导地位，是中国共产党历史上生死攸关的转折点。",
    location: { name: "遵义", coordinates: [27.70, 106.92] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德", "张闻天", "王稼祥", "博古", "刘少奇", "陈云"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["遵义"],
    spirit: "中国共产党历史上生死攸关的转折点，体现了'独立自主、实事求是'的精神，是马克思主义中国化的重要里程碑。"
  },
  {
    id: "evt_008",
    date: "1935-01-29",
    title: "四渡赤水（一渡）",
    type: "战役",
    description: "毛泽东指挥中央红军一渡赤水，拉开四渡赤水战役的序幕。这是毛泽东军事指挥艺术的经典之作。",
    location: { name: "赤水", coordinates: [28.57, 105.70] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["赤水"]
  },
  {
    id: "evt_009",
    date: "1935-02-28",
    title: "再占遵义（遵义战役）",
    type: "战役",
    description: "红军二渡赤水后回师遵义，歼灭和击溃敌军两个师又八个团。红三军团参谋长邓萍在战斗中牺牲，年仅27岁。",
    location: { name: "遵义", coordinates: [27.70, 106.92] },
    forceId: "red_first",
    participants: ["彭德怀", "邓萍"],
    certainty: "confirmed",
    costType: "战斗牺牲",
    costDescription: "红三军团参谋长邓萍（27岁）在遵义战役中牺牲。",
    relatedPersonIds: ["person_004", "person_010"],
    relatedPlaceIds: ["遵义"]
  },
  {
    id: "evt_010",
    date: "1935-03-22",
    title: "四渡赤水（四渡）",
    type: "战役",
    description: "中央红军第四次渡过赤水，南渡乌江，威逼贵阳，巧渡金沙江，彻底摆脱了国民党军的围追堵截。",
    location: { name: "赤水", coordinates: [28.57, 105.70] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德", "刘伯承"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003", "person_006"],
    relatedPlaceIds: ["赤水"],
    spirit: "毛泽东军事指挥艺术的经典之作，体现了红军'灵活机动、以弱胜强'的战略智慧和'兵无常势、水无常形'的军事辩证法。"
  },
  {
    id: "evt_011",
    date: "1935-05-03",
    title: "巧渡金沙江",
    type: "渡河",
    description: "中央红军在皎平渡巧渡金沙江，摆脱了数十万国民党军队的围追堵截，取得了战略转移中具有决定意义的胜利。",
    location: { name: "金沙江", coordinates: [26.30, 102.50] },
    forceId: "red_first",
    participants: ["刘伯承", "陈赓"],
    certainty: "confirmed",
    relatedPersonIds: ["person_006"],
    relatedPlaceIds: ["金沙江"],
    spirit: "以智慧和勇气突破天险，是长征中具有决定意义的胜利，体现了红军'战略上藐视敌人、战术上重视敌人'的军事思想。"
  },
  {
    id: "evt_012",
    date: "1935-05-22",
    title: "彝海结盟",
    type: "民族工作",
    description: "刘伯承与彝族首领小叶丹在彝海歃血为盟，红军顺利通过彝族地区，为强渡大渡河赢得了宝贵时间。",
    location: { name: "彝海", coordinates: [28.67, 102.22] },
    forceId: "red_first",
    participants: ["刘伯承", "小叶丹"],
    certainty: "confirmed",
    relatedPersonIds: ["person_006", "person_019"],
    relatedPlaceIds: ["彝海"],
    spirit: "民族团结的光辉典范，体现了红军'紧紧依靠群众、尊重少数民族'的政治本色，是党的民族政策的生动实践。"
  },
  {
    id: "evt_013",
    date: "1935-05-25",
    title: "强渡大渡河",
    type: "渡河",
    description: "红军十七勇士在安顺场强渡大渡河，冲破敌军防线，为后续部队开辟了通道。",
    location: { name: "大渡河", coordinates: [29.27, 102.28] },
    forceId: "red_first",
    participants: ["刘伯承", "聂荣臻"],
    certainty: "confirmed",
    relatedPersonIds: ["person_006", "person_028"],
    relatedPlaceIds: ["大渡河"],
    spirit: "十七勇士冲破天险，以血肉之躯开辟前进道路，体现了红军'不怕牺牲、勇往直前'的英雄主义精神。"
  },
  {
    id: "evt_014",
    date: "1935-05-29",
    title: "飞夺泸定桥",
    type: "战役",
    description: "红军二十二名勇士冒着敌人密集火力，攀援13根铁索飞夺泸定桥，粉碎了蒋介石让红军成为\u201C石达开第二\u201D的企图。",
    location: { name: "泸定", coordinates: [29.91, 102.23] },
    forceId: "red_first",
    participants: ["杨成武", "黄开湘"],
    certainty: "confirmed",
    relatedPersonIds: ["person_030", "person_031"],
    relatedPlaceIds: ["泸定"],
    spirit: "二十二名勇士攀援铁索夺取泸定桥，以超乎常人的勇气创造了军事奇迹，是长征'狭路相逢勇者胜'精神的最经典写照。"
  },
  {
    id: "evt_015",
    date: "1935-06-12",
    title: "翻越夹金山",
    type: "行军",
    description: "中央红军翻越海拔4000多米的夹金山雪山，这是长征中翻越的第一座大雪山，许多战士因缺氧和严寒倒在雪山上。",
    location: { name: "夹金山", coordinates: [30.57, 102.85] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德"],
    certainty: "confirmed",
    costType: "非战斗减员",
    costDescription: "翻越雪山途中因缺氧、冻饿牺牲数百人，无墓碑、无姓名。",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["夹金山"],
    spirit: "红军翻越海拔4000多米的雪山，许多战士长眠于此，以生命诠释了'红军不怕远征难，万水千山只等闲'的革命乐观主义精神。"
  },
  {
    id: "evt_016",
    date: "1935-06-18",
    title: "懋功会师",
    type: "会师",
    description: "中央红军与红四方面军在四川懋功（今小金）胜利会师，两大主力红军会合，总兵力达10万余人。",
    location: { name: "懋功", coordinates: [30.99, 102.36] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德", "徐向前", "陈昌浩"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003", "person_008"],
    relatedPlaceIds: ["懋功"]
  },
  {
    id: "evt_017",
    date: "1935-08-21",
    title: "穿越松潘草地",
    type: "行军",
    description: "红军穿越茫茫松潘草地（今若尔盖湿地），行程约300公里，历时7天。草地行军是长征中非战斗减员最惨重的路段，平均每公里牺牲近100人。",
    location: { name: "松潘草地", coordinates: [33.58, 102.96] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "彭德怀"],
    certainty: "confirmed",
    costType: "非战斗减员",
    costDescription: "松潘草地全程非战斗减员超万人，90%无墓碑、无籍贯、无姓名。",
    relatedPersonIds: ["person_001", "person_002", "person_004"],
    relatedPlaceIds: ["松潘草地"],
    spirit: "长征中非战斗减员最惨重的路段，平均每公里牺牲近100人，以最悲壮的方式诠释了'风雨浸衣骨更硬，野菜充饥志越坚'的长征精神。"
  },
  {
    id: "evt_018",
    date: "1935-09-12",
    title: "俄界会议",
    type: "会议",
    description: "中央政治局在甘肃俄界召开扩大会议，批判张国焘的分裂主义错误，决定将北上红军改编为中国工农红军陕甘支队。",
    location: { name: "俄界", coordinates: [34.06, 103.38] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天", "博古", "王稼祥", "彭德怀", "林彪"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_004", "person_005"],
    relatedPlaceIds: ["俄界"]
  },
  {
    id: "evt_019",
    date: "1935-10-19",
    title: "到达吴起镇",
    type: "行军",
    description: "中央红军主力到达陕北吴起镇，标志着红一方面军长征胜利结束。出发时8.6万人，到达时仅剩7000余人。",
    location: { name: "吴起镇", coordinates: [36.93, 108.17] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "彭德怀"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_004"],
    relatedPlaceIds: ["吴起镇"],
    spirit: "从8.6万人到仅剩7000余人，以巨大牺牲完成了人类历史上最伟大的远征，体现了'革命必然胜利'的坚定信念。"
  },
  {
    id: "evt_020",
    date: "1935-11-21",
    title: "直罗镇战役",
    type: "战役",
    description: "红一方面军在陕西直罗镇歼灭国民党军一个师又一个团，为中共中央把全国革命大本营放在西北举行了奠基礼。",
    location: { name: "直罗镇", coordinates: [35.96, 109.37] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "彭德怀"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_004"],
    relatedPlaceIds: ["直罗镇"]
  },
  {
    id: "evt_031",
    date: "1934-10-16",
    title: "于都河夜渡",
    type: "渡河",
    description: "中央红军主力从于都河8个渡口夜渡，当地百姓拆门板、床板架设浮桥，帮助红军顺利渡河。于都人民为红军长征作出了巨大牺牲和贡献。",
    location: { name: "于都", coordinates: [25.95, 115.41] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["于都"]
  },
  {
    id: "evt_032",
    date: "1934-11-08",
    title: "突破第二道封锁线",
    type: "战役",
    description: "中央红军在湖南汝城至广东仁化间突破国民党军第二道封锁线，继续向西挺进。",
    location: { name: "汝城", coordinates: [25.55, 113.68] },
    forceId: "red_first",
    participants: ["林彪", "聂荣臻"],
    certainty: "confirmed",
    relatedPersonIds: ["person_005", "person_028"],
    relatedPlaceIds: ["汝城"]
  },
  {
    id: "evt_033",
    date: "1934-11-15",
    title: "突破第三道封锁线",
    type: "战役",
    description: "中央红军在湖南宜章至良田间突破国民党军第三道封锁线，继续向湘江方向前进。",
    location: { name: "宜章", coordinates: [25.40, 112.95] },
    forceId: "red_first",
    participants: ["彭德怀", "杨尚昆"],
    certainty: "confirmed",
    relatedPersonIds: ["person_004"],
    relatedPlaceIds: ["宜章"]
  },
  {
    id: "evt_034",
    date: "1934-12-31",
    title: "猴场会议",
    type: "会议",
    description: "中共中央政治局在贵州瓮安猴场召开会议，再次否定李德、博古回兵湘西的错误主张，决定强渡乌江、占领遵义。",
    location: { name: "猴场", coordinates: [27.07, 107.47] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天", "王稼祥", "博古"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["猴场"]
  },
  {
    id: "evt_035",
    date: "1935-01-02",
    title: "强渡乌江",
    type: "渡河",
    description: "中央红军在江界河等渡口强渡乌江天险，突破黔军防线，为占领遵义创造了条件。",
    location: { name: "乌江", coordinates: [27.32, 107.15] },
    forceId: "red_first",
    participants: ["刘伯承", "张云逸"],
    certainty: "confirmed",
    relatedPersonIds: ["person_006"],
    relatedPlaceIds: ["乌江"]
  },
  {
    id: "evt_036",
    date: "1935-02-18",
    title: "四渡赤水（二渡）",
    type: "战役",
    description: "红军二渡赤水，回师黔北，发起遵义战役，取得长征以来最大的一次胜利。",
    location: { name: "赤水", coordinates: [28.57, 105.70] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["赤水"]
  },
  {
    id: "evt_037",
    date: "1935-02-25",
    title: "娄山关战斗",
    type: "战役",
    description: "红军在二渡赤水后攻克黔北险要娄山关，毛泽东写下著名词作《忆秦娥·娄山关》：'雄关漫道真如铁，而今迈步从头越'。",
    location: { name: "娄山关", coordinates: [27.98, 106.85] },
    forceId: "red_first",
    participants: ["彭德怀", "杨尚昆"],
    certainty: "confirmed",
    relatedPersonIds: ["person_004"],
    relatedPlaceIds: ["娄山关"]
  },
  {
    id: "evt_038",
    date: "1935-03-16",
    title: "四渡赤水（三渡）",
    type: "战役",
    description: "红军三渡赤水，佯作北渡长江之势，调动国民党军主力向川南集中，为四渡赤水创造战机。",
    location: { name: "赤水", coordinates: [28.57, 105.70] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["赤水"]
  },
  {
    id: "evt_048",
    date: "1936-02-27",
    title: "乌蒙山回旋战",
    type: "战役",
    description: "红二、六军团在贺龙指挥下，在云贵交界的乌蒙山区与国民党军10个师展开了一个多月的回旋战，以灵活机动的战术成功突围，创造了'万人出征、万人归来'的奇迹。",
    location: { name: "乌蒙山", coordinates: [27.00, 104.30] },
    forceId: "red_second",
    participants: ["贺龙", "任弼时", "萧克"],
    certainty: "confirmed",
    relatedPersonIds: ["person_007"],
    relatedPlaceIds: ["乌蒙山"]
  },
  {
    id: "evt_039",
    date: "1935-06-26",
    title: "两河口会议",
    type: "会议",
    description: "中共中央政治局在懋功两河口召开会议，确定北上建立川陕甘根据地的战略方针，否定了张国焘南下的错误主张。",
    location: { name: "两河口", coordinates: [31.30, 102.50] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "朱德", "张闻天", "张国焘"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002", "person_003"],
    relatedPlaceIds: ["两河口"]
  },
  {
    id: "evt_040",
    date: "1935-08-04",
    title: "沙窝会议",
    type: "会议",
    description: "中共中央政治局在松潘沙窝召开会议，重申北上方针，批评张国焘的错误，增补红四方面军干部进入中央。",
    location: { name: "沙窝", coordinates: [32.60, 103.20] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天", "博古", "张国焘"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["沙窝"]
  },
  {
    id: "evt_041",
    date: "1935-08-20",
    title: "毛儿盖会议",
    type: "会议",
    description: "中共中央政治局在松潘毛儿盖召开会议，决定红军主力经草地北上，并制定了夏洮战役计划。",
    location: { name: "毛儿盖", coordinates: [32.65, 103.05] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天", "博古", "王稼祥"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["毛儿盖"]
  },
  {
    id: "evt_042",
    date: "1935-09-02",
    title: "巴西会议",
    type: "会议",
    description: "中共中央在四川巴西（今若尔盖）召开紧急会议，决定率红一、三军团先行北上，避免了红军内部可能发生的冲突。",
    location: { name: "巴西", coordinates: [33.58, 103.20] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天", "博古", "王稼祥"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["巴西"]
  },
  {
    id: "evt_043",
    date: "1935-09-17",
    title: "腊子口战役",
    type: "战役",
    description: "红军攻克天险腊子口，突破国民党军在甘肃南部的最后一道防线，打通了北上进入甘南的通道。",
    location: { name: "腊子口", coordinates: [34.08, 103.85] },
    forceId: "red_first",
    participants: ["林彪", "聂荣臻", "黄开湘", "杨成武"],
    certainty: "confirmed",
    relatedPersonIds: ["person_005", "person_028", "person_030", "person_031"],
    relatedPlaceIds: ["腊子口"]
  },
  {
    id: "evt_044",
    date: "1935-09-20",
    title: "哈达铺整编",
    type: "行军",
    description: "红军到达甘肃哈达铺，从缴获的报纸上得知陕北有红军和根据地，决定前往陕北。毛泽东在此提出'到陕北去'的战略决策。",
    location: { name: "哈达铺", coordinates: [34.08, 104.18] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["哈达铺"]
  },
  {
    id: "evt_045",
    date: "1935-10-07",
    title: "六盘山",
    type: "行军",
    description: "红军翻越六盘山，毛泽东在此写下《清平乐·六盘山》：'不到长城非好汉，屈指行程二万'。这是长征中翻越的最后一座高山。",
    location: { name: "六盘山", coordinates: [35.66, 106.18] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["六盘山"]
  },
  {
    id: "evt_046",
    date: "1935-10-21",
    title: "吴起镇切尾巴战斗",
    type: "战役",
    description: "毛泽东指挥红军在吴起镇附近歼灭尾追的国民党骑兵部队，彭德怀率部完成'切尾巴'战斗，毛泽东赋诗'谁敢横刀立马，唯我彭大将军'。",
    location: { name: "吴起镇", coordinates: [36.93, 108.17] },
    forceId: "red_first",
    participants: ["毛泽东", "彭德怀"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_004"],
    relatedPlaceIds: ["吴起镇"]
  },
  {
    id: "evt_050",
    date: "1935-12-17",
    title: "瓦窑堡会议",
    type: "会议",
    description: "中共中央在陕北瓦窑堡召开政治局扩大会议，确立了抗日民族统一战线的策略方针，为红军东征和全面抗战做了政治准备。会议从12月17日持续至25日。",
    location: { name: "瓦窑堡", coordinates: [37.05, 109.73] },
    forceId: "red_first",
    participants: ["毛泽东", "周恩来", "张闻天", "刘少奇"],
    certainty: "confirmed",
    relatedPersonIds: ["person_001", "person_002"],
    relatedPlaceIds: ["瓦窑堡"],
    spirit: "确立了抗日民族统一战线方针，体现了中国共产党'以民族大义为重、团结一切可以团结的力量'的政治智慧和历史担当。"
  },
  {
    id: "evt_047",
    date: "1934-12-10",
    title: "庾家河战斗",
    type: "战役",
    description: "红二十五军在陕西庾家河与国民党军第六十师激战，军长程子华、副军长徐海东均负重伤，政委吴焕先指挥部队经20余次冲杀击溃敌军，为创建鄂豫陕根据地奠定基础。",
    location: { name: "庾家河", coordinates: [33.70, 110.40] },
    forceId: "red_25th",
    participants: ["程子华", "徐海东", "吴焕先"],
    certainty: "confirmed",
    costType: "战斗牺牲",
    costDescription: "军长程子华、副军长徐海东均负重伤，部队伤亡惨重。",
    relatedPersonIds: ["person_012", "person_017", "person_018"],
    relatedPlaceIds: ["庾家河"]
  },
  {
    id: "evt_049",
    date: "1936-04-25",
    title: "石鼓渡江",
    type: "渡河",
    description: "红二方面军在云南丽江石鼓镇渡过金沙江，仅用四天三夜，以少量船只和木筏完成渡江，创造了军事史上的奇迹。",
    location: { name: "石鼓", coordinates: [26.87, 99.97] },
    forceId: "red_second",
    participants: ["贺龙", "任弼时", "萧克"],
    certainty: "confirmed",
    relatedPersonIds: ["person_007"],
    relatedPlaceIds: ["石鼓"]
  },
  {
    id: "evt_021",
    date: "1934-11-16",
    title: "红二十五军出发长征",
    type: "战略转移",
    description: "红二十五军2980人从河南罗山何家冲出发，开始长征。部队战士平均年龄仅16岁，被誉为\u201C娃娃军\u201D。",
    location: { name: "何家冲", coordinates: [31.88, 114.35] },
    forceId: "red_25th",
    participants: ["程子华", "吴焕先", "徐海东"],
    certainty: "confirmed",
    relatedPersonIds: ["person_012", "person_017", "person_018"],
    relatedPlaceIds: ["何家冲"]
  },
  {
    id: "evt_022",
    date: "1934-11-26",
    title: "独树镇战斗",
    type: "战役",
    description: "红二十五军在河南方城独树镇遭遇国民党军袭击，在极端恶劣天气下与敌激战，最终突出重围。",
    location: { name: "独树镇", coordinates: [33.36, 113.04] },
    forceId: "red_25th",
    participants: ["程子华", "吴焕先", "徐海东"],
    certainty: "confirmed",
    relatedPersonIds: ["person_012", "person_017", "person_018"],
    relatedPlaceIds: ["独树镇"]
  },
  {
    id: "evt_023",
    date: "1935-09-15",
    title: "永坪会师",
    type: "会师",
    description: "红二十五军与红二十六军、红二十七军在陕西永坪会师，合编为红十五军团，为中央红军到达陕北创造了条件。",
    location: { name: "永坪", coordinates: [36.90, 109.85] },
    forceId: "red_25th",
    participants: ["徐海东", "程子华", "刘志丹"],
    certainty: "confirmed",
    relatedPersonIds: ["person_014", "person_017", "person_018"],
    relatedPlaceIds: ["永坪"]
  },
  {
    id: "evt_024",
    date: "1935-03-28",
    title: "嘉陵江战役",
    type: "战役",
    description: "红四方面军发起嘉陵江战役，强渡嘉陵江，攻克剑门关，开始长征。",
    location: { name: "嘉陵江", coordinates: [31.83, 105.80] },
    forceId: "red_fourth",
    participants: ["徐向前", "陈昌浩", "李先念"],
    certainty: "confirmed",
    relatedPersonIds: ["person_008"],
    relatedPlaceIds: ["嘉陵江"]
  },
  {
    id: "evt_025",
    date: "1935-10-08",
    title: "百丈关战役",
    type: "战役",
    description: "红四方面军南下后在四川百丈关与国民党军激战七日，伤亡近万人，被迫后撤。",
    location: { name: "百丈关", coordinates: [30.17, 103.23] },
    forceId: "red_fourth",
    participants: ["徐向前", "陈昌浩"],
    certainty: "confirmed",
    costType: "重大减员",
    costDescription: "百丈关战役单次战斗伤亡近万人，红四方面军被迫放弃南下计划。",
    relatedPersonIds: ["person_008"],
    relatedPlaceIds: ["百丈关"]
  },
  {
    id: "evt_026",
    date: "1935-11-19",
    title: "红二方面军出发长征",
    type: "战略转移",
    description: "红二、六军团1.7万余人从湖南桑植出发，开始长征。贺龙之女贺捷生出生仅18天即随军长征。",
    location: { name: "桑植", coordinates: [29.40, 110.16] },
    forceId: "red_second",
    participants: ["贺龙", "任弼时", "萧克", "关向应"],
    certainty: "confirmed",
    relatedPersonIds: ["person_007"],
    relatedPlaceIds: ["桑植"]
  },
  {
    id: "evt_027",
    date: "1936-07-01",
    title: "甘孜会师",
    type: "会师",
    description: "红二、六军团与红四方面军在四川甘孜会师，随后共同北上。7月5日，红二、六军团和红三十二军正式合编为红二方面军。",
    location: { name: "甘孜", coordinates: [31.62, 100.00] },
    forceId: "red_second",
    participants: ["贺龙", "任弼时", "徐向前", "朱德", "刘伯承"],
    certainty: "confirmed",
    relatedPersonIds: ["person_003", "person_006", "person_007", "person_008"],
    relatedPlaceIds: ["甘孜"]
  },
  {
    id: "evt_028",
    date: "1936-10-09",
    title: "会宁会师",
    type: "会师",
    description: "红一、红四方面军在甘肃会宁会师，标志着长征即将胜利结束。",
    location: { name: "会宁", coordinates: [35.69, 105.05] },
    forceId: "red_first",
    participants: ["朱德", "徐向前", "陈昌浩"],
    certainty: "confirmed",
    relatedPersonIds: ["person_003", "person_008"],
    relatedPlaceIds: ["会宁"]
  },
  {
    id: "evt_029",
    date: "1936-10-22",
    title: "将台堡会师",
    type: "会师",
    description: "红一、红二方面军在宁夏将台堡会师，标志着红军长征全部胜利结束。全程历时两年，途经14个省，行程两万五千里。",
    location: { name: "将台堡", coordinates: [35.82, 105.88] },
    forceId: "red_second",
    participants: ["贺龙", "任弼时", "左权", "聂荣臻"],
    certainty: "confirmed",
    relatedPersonIds: ["person_007"],
    relatedPlaceIds: ["将台堡"],
    spirit: "三大主力红军胜利会师，标志着长征全部结束，体现了红军'团结一致、共同奋斗'的伟大力量，是中国革命新局面的开端。"
  },
  {
    id: "evt_030",
    date: "1936-04-14",
    title: "刘志丹牺牲",
    type: "战斗牺牲",
    description: "陕甘红军和西北根据地创始人之一刘志丹在山西中阳县三交镇战斗中牺牲，年仅33岁。",
    location: { name: "三交镇", coordinates: [37.37, 110.57] },
    forceId: "shaanbei_red",
    participants: ["刘志丹"],
    certainty: "confirmed",
    costType: "战斗牺牲",
    costDescription: "刘志丹（33岁）在山西中阳县三交镇战斗中牺牲。",
    relatedPersonIds: ["person_014"],
    relatedPlaceIds: ["三交镇"]
  }
];

// --- 人物数据 ---
const PERSONS = [
  {
    id: "person_001",
    name: "毛泽东",
    nameEn: "Mao Zedong",
    personType: "领袖",
    forceId: "red_first",
    hometown: "湖南湘潭",
    birthYear: 1893,
    deathYear: 1976,
    portrait: "images/portraits/maozedong.jpg",
    summary: "中国共产党、中国人民解放军和中华人民共和国的主要创立者。长征中在遵义会议上确立了领导地位，指挥红军四渡赤水、巧渡金沙江、强渡大渡河等重大战役。",
    themeTags: ["战略决策", "遵义会议", "四渡赤水"],
    relatedEventIds: ["evt_001", "evt_004", "evt_005", "evt_007", "evt_008", "evt_010", "evt_015", "evt_016", "evt_017", "evt_018", "evt_019", "evt_020"]
  },
  {
    id: "person_002",
    name: "周恩来",
    nameEn: "Zhou Enlai",
    personType: "领袖",
    forceId: "red_first",
    hometown: "江苏淮安",
    birthYear: 1898,
    deathYear: 1976,
    portrait: "images/portraits/zhouenlai.jpg",
    summary: "中国共产党和中华人民共和国的主要领导人之一。长征中负责军事指挥和组织工作，在遵义会议上支持毛泽东，为确立毛泽东的领导地位发挥了关键作用。",
    themeTags: ["遵义会议", "战略决策", "组织领导"],
    relatedEventIds: ["evt_001", "evt_004", "evt_005", "evt_007", "evt_008", "evt_010", "evt_015", "evt_016", "evt_017", "evt_018", "evt_019", "evt_020"]
  },
  {
    id: "person_003",
    name: "朱德",
    nameEn: "Zhu De",
    personType: "领袖",
    forceId: "red_first",
    hometown: "四川仪陇",
    birthYear: 1886,
    deathYear: 1976,
    portrait: "images/portraits/zhude.jpg",
    summary: "中国工农红军和中国人民解放军的主要创建者之一，十大元帅之首。长征中任红军总司令，参与指挥了多场重要战役。",
    themeTags: ["军事指挥", "红军总司令", "会师"],
    relatedEventIds: ["evt_001", "evt_007", "evt_008", "evt_010", "evt_015", "evt_016", "evt_027", "evt_028"]
  },
  {
    id: "person_004",
    name: "彭德怀",
    nameEn: "Peng Dehuai",
    personType: "将领",
    forceId: "red_first",
    hometown: "湖南湘潭",
    birthYear: 1898,
    deathYear: 1974,
    portrait: "images/portraits/pengdehuai.jpg",
    summary: "中国无产阶级革命家、军事家，十大元帅之一。长征中任红三军团军团长，在娄山关、遵义战役中屡建战功。",
    themeTags: ["军事指挥", "红三军团", "遵义战役"],
    relatedEventIds: ["evt_009", "evt_017", "evt_018", "evt_019", "evt_020"]
  },
  {
    id: "person_005",
    name: "林彪",
    nameEn: "Lin Biao",
    personType: "将领",
    forceId: "red_first",
    hometown: "湖北黄冈",
    birthYear: 1907,
    deathYear: 1971,
    portrait: "images/portraits/linbiao.jpg",
    summary: "十大元帅之一。长征中任红一军团军团长，率部担任前卫任务，参加四渡赤水、强渡大渡河、飞夺泸定桥等战役。",
    themeTags: ["军事指挥", "红一军团", "前卫"],
    relatedEventIds: ["evt_018"]
  },
  {
    id: "person_006",
    name: "刘伯承",
    nameEn: "Liu Bocheng",
    personType: "将领",
    forceId: "red_first",
    hometown: "重庆开州",
    birthYear: 1892,
    deathYear: 1986,
    portrait: "images/portraits/liubocheng.jpg",
    summary: "十大元帅之一，被誉为\u201C军神\u201D。长征中任红军总参谋长，指挥巧渡金沙江、彝海结盟、强渡大渡河等关键行动。",
    themeTags: ["军事指挥", "彝海结盟", "巧渡金沙江"],
    relatedEventIds: ["evt_006", "evt_010", "evt_011", "evt_012", "evt_013", "evt_027"]
  },
  {
    id: "person_007",
    name: "贺龙",
    nameEn: "He Long",
    personType: "将领",
    forceId: "red_second",
    hometown: "湖南桑植",
    birthYear: 1896,
    deathYear: 1969,
    portrait: "images/portraits/helong.jpg",
    summary: "十大元帅之一。长征中任红二方面军总指挥，率部进行乌蒙山回旋战，指挥红二方面军长征。",
    themeTags: ["军事指挥", "红二方面军", "将台堡会师"],
    relatedEventIds: ["evt_026", "evt_027", "evt_029"]
  },
  {
    id: "person_008",
    name: "徐向前",
    nameEn: "Xu Xiangqian",
    personType: "将领",
    forceId: "red_fourth",
    hometown: "山西五台",
    birthYear: 1901,
    deathYear: 1990,
    portrait: "images/portraits/xuxiangqian.jpg",
    summary: "十大元帅之一。长征中任红四方面军总指挥，指挥嘉陵江战役、百丈关战役等。",
    themeTags: ["军事指挥", "红四方面军", "嘉陵江战役"],
    relatedEventIds: ["evt_016", "evt_024", "evt_025", "evt_027", "evt_028"]
  },
  {
    id: "person_009",
    name: "陈树湘",
    nameEn: "Chen Shuxiang",
    personType: "烈士",
    forceId: "red_first",
    hometown: "湖南长沙",
    birthYear: 1905,
    deathYear: 1934,
    portrait: "",
    summary: "红三十四师师长。湘江战役中率部担任后卫，负伤被俘后，在担架上用手从腹部伤口绞断肠子，壮烈牺牲，年仅29岁。被誉为\u201C断肠明志\u201D的红军英雄。",
    themeTags: ["湘江战役", "绝命后卫", "断肠明志"],
    relatedEventIds: ["evt_003"]
  },
  {
    id: "person_010",
    name: "邓萍",
    nameEn: "Deng Ping",
    personType: "烈士",
    forceId: "red_first",
    hometown: "四川富顺",
    birthYear: 1908,
    deathYear: 1935,
    portrait: "images/portraits/dengping.jpg",
    summary: "红三军团参谋长。在遵义战役中亲临前线侦察敌情时不幸中弹牺牲，年仅27岁，是长征中牺牲的红军最高级别军事指挥员之一。",
    themeTags: ["遵义战役", "红三军团", "前线指挥"],
    relatedEventIds: ["evt_003", "evt_009"]
  },
  {
    id: "person_011",
    name: "洪超",
    nameEn: "Hong Chao",
    personType: "烈士",
    forceId: "red_first",
    hometown: "湖北黄梅",
    birthYear: 1909,
    deathYear: 1934,
    portrait: "images/portraits/hongchao.jpg",
    summary: "红四师师长。在长征初期突破第一道封锁线的百石战斗中亲临前线指挥，不幸中弹牺牲，年仅25岁，是长征中牺牲的第一位红军师长。",
    themeTags: ["突破封锁线", "首位牺牲师长", "百石战斗"],
    relatedEventIds: ["evt_002"]
  },
  {
    id: "person_012",
    name: "吴焕先",
    nameEn: "Wu Huanxian",
    personType: "烈士",
    forceId: "red_25th",
    hometown: "河南新县",
    birthYear: 1907,
    deathYear: 1935,
    portrait: "images/portraits/wuhuanxian.jpg",
    summary: "红二十五军政委。在长征途中于甘肃泾川四坡村战斗中牺牲，年仅28岁。是鄂豫皖根据地和红二十五军的主要创建者之一。",
    themeTags: ["红二十五军", "鄂豫皖根据地", "北上抗日"],
    relatedEventIds: ["evt_021", "evt_022"]
  },
  {
    id: "person_013",
    name: "罗南辉",
    nameEn: "Luo Nanhui",
    personType: "烈士",
    forceId: "red_fourth",
    hometown: "四川成都",
    birthYear: 1908,
    deathYear: 1936,
    portrait: "",
    summary: "红五军副军长。在会宁会师前后，为掩护主力部队转移，在甘肃华家岭阻击战中被敌机轰炸牺牲，年仅28岁。",
    themeTags: ["会宁会师", "后卫阻击", "红五军"],
    relatedEventIds: []
  },
  {
    id: "person_014",
    name: "刘志丹",
    nameEn: "Liu Zhidan",
    personType: "烈士",
    forceId: "shaanbei_red",
    hometown: "陕西保安",
    birthYear: 1903,
    deathYear: 1936,
    portrait: "images/portraits/liuzhidan.jpg",
    summary: "陕甘红军和西北根据地创始人之一。1936年4月在山西中阳县三交镇战斗中牺牲，年仅33岁。毛泽东称赞他为\u201C群众领袖，民族英雄\u201D。",
    themeTags: ["陕甘根据地", "西北红军", "群众领袖"],
    relatedEventIds: ["evt_023", "evt_030"]
  },
  {
    id: "person_015",
    name: "贺子珍",
    nameEn: "He Zizhen",
    personType: "女性",
    forceId: "red_first",
    hometown: "江西永新",
    birthYear: 1909,
    deathYear: 1984,
    portrait: "images/portraits/hezizhen.jpg",
    summary: "毛泽东夫人，长征中30位女红军之一。在长征途中生下一女，因行军条件艰苦不得不含泪托孤，展现了长征女性的伟大牺牲精神。",
    themeTags: ["女红军", "长征托孤", "巾帼英雄"],
    relatedEventIds: []
  },
  {
    id: "person_016",
    name: "邓颖超",
    nameEn: "Deng Yingchao",
    personType: "女性",
    forceId: "red_first",
    hometown: "河南光山",
    birthYear: 1904,
    deathYear: 1992,
    portrait: "images/portraits/dengyingchao.jpg",
    summary: "周恩来夫人，长征中30位女红军之一。在长征途中身患重病，靠担架和骑马走完长征全程，展现了非凡的毅力。",
    themeTags: ["女红军", "巾帼英雄", "不屈意志"],
    relatedEventIds: []
  },
  {
    id: "person_017",
    name: "徐海东",
    nameEn: "Xu Haidong",
    personType: "将领",
    forceId: "red_25th",
    hometown: "湖北大悟",
    birthYear: 1900,
    deathYear: 1970,
    portrait: "images/portraits/xuhaidong.jpg",
    summary: "中国人民解放军大将。长征中任红二十五军副军长，与程子华、吴焕先一起率红二十五军最早到达陕北。",
    themeTags: ["红二十五军", "最早到达陕北", "永坪会师"],
    relatedEventIds: ["evt_021", "evt_022", "evt_023"]
  },
  {
    id: "person_018",
    name: "程子华",
    nameEn: "Cheng Zihua",
    personType: "将领",
    forceId: "red_25th",
    hometown: "山西运城",
    birthYear: 1905,
    deathYear: 1991,
    portrait: "images/portraits/chengzihua.jpg",
    summary: "无产阶级革命家。长征中任红二十五军军长，率部转战鄂豫陕，最早到达陕北。",
    themeTags: ["红二十五军", "最早到达陕北", "鄂豫陕根据地"],
    relatedEventIds: ["evt_021", "evt_022", "evt_023"]
  },
  {
    id: "person_019",
    name: "小叶丹",
    nameEn: "Xiao Yedan",
    personType: "少数民族",
    forceId: "red_first",
    hometown: "四川冕宁",
    birthYear: 1894,
    deathYear: 1942,
    portrait: "images/portraits/xiaoyedan.jpg",
    summary: "彝族沽基部落首领。1935年5月与刘伯承在彝海歃血为盟，为红军顺利通过彝族地区提供了关键帮助，谱写了民族团结的佳话。",
    themeTags: ["彝海结盟", "民族团结", "少数民族"],
    relatedEventIds: ["evt_012"]
  },
  {
    id: "person_020",
    name: "谢子长",
    nameEn: "Xie Zichang",
    personType: "烈士",
    forceId: "shaanbei_red",
    hometown: "陕西安定",
    birthYear: 1897,
    deathYear: 1935,
    portrait: "images/portraits/xiezichang.jpg",
    summary: "陕北红军和苏区创建人之一。1935年2月在战斗中负伤后因伤势过重牺牲，年仅38岁。为中央红军长征提供了重要的落脚点基础。",
    themeTags: ["陕北根据地", "西北红军", "根据地建设"],
    relatedEventIds: []
  },
  {
    id: "person_021",
    name: "张闻天",
    nameEn: "Zhang Wentian",
    personType: "领袖",
    forceId: "red_first",
    hometown: "上海南汇",
    birthYear: 1900,
    deathYear: 1976,
    portrait: "images/portraits/zhangwentian.jpg",
    summary: "中国共产党重要领导人。长征中在遵义会议上支持毛泽东，会后代替博古负总责，主持中央日常工作。",
    themeTags: ["遵义会议", "中央领导", "抗日民族统一战线"],
    relatedEventIds: ["evt_004", "evt_005", "evt_007", "evt_034", "evt_039", "evt_040", "evt_041", "evt_042", "evt_044", "evt_050"]
  },
  {
    id: "person_022",
    name: "王稼祥",
    nameEn: "Wang Jiaxiang",
    personType: "领袖",
    forceId: "red_first",
    hometown: "安徽泾县",
    birthYear: 1906,
    deathYear: 1974,
    portrait: "images/portraits/wangjiaxiang.jpg",
    summary: "中国共产党重要领导人。长征中在遵义会议上投了关键一票支持毛泽东，对确立毛泽东的领导地位起了重要作用。",
    themeTags: ["遵义会议", "关键一票", "中央领导"],
    relatedEventIds: ["evt_004", "evt_005", "evt_007", "evt_034", "evt_041", "evt_042"]
  },
  {
    id: "person_023",
    name: "任弼时",
    nameEn: "Ren Bishi",
    personType: "领袖",
    forceId: "red_second",
    hometown: "湖南汨罗",
    birthYear: 1904,
    deathYear: 1950,
    portrait: "images/portraits/renbishi.jpg",
    summary: "中国共产党重要领导人。长征中任红二方面军政委，与贺龙一起率部完成长征。",
    themeTags: ["红二方面军", "政治工作", "将台堡会师"],
    relatedEventIds: ["evt_026", "evt_027", "evt_029", "evt_048", "evt_049"]
  },
  {
    id: "person_024",
    name: "萧克",
    nameEn: "Xiao Ke",
    personType: "将领",
    forceId: "red_second",
    hometown: "湖南嘉禾",
    birthYear: 1907,
    deathYear: 2008,
    portrait: "images/portraits/xiaoke.jpg",
    summary: "中国人民解放军上将。长征中任红六军团军团长、红二方面军副总指挥，协助贺龙指挥乌蒙山回旋战等著名战役。",
    themeTags: ["红二方面军", "乌蒙山回旋战", "军事指挥"],
    relatedEventIds: ["evt_026", "evt_048", "evt_049"]
  },
  {
    id: "person_025",
    name: "关向应",
    nameEn: "Guan Xiangying",
    personType: "将领",
    forceId: "red_second",
    hometown: "辽宁金州",
    birthYear: 1902,
    deathYear: 1946,
    portrait: "images/portraits/guanxiangying.jpg",
    summary: "中国共产党重要领导人。长征中任红二方面军副政委，协助贺龙、任弼时完成长征。",
    themeTags: ["红二方面军", "政治工作", "长征"],
    relatedEventIds: ["evt_026"]
  },
  {
    id: "person_026",
    name: "李先念",
    nameEn: "Li Xiannian",
    personType: "将领",
    forceId: "red_fourth",
    hometown: "湖北红安",
    birthYear: 1909,
    deathYear: 1992,
    portrait: "images/portraits/lixiannian.jpg",
    summary: "中国共产党和中华人民共和国重要领导人。长征中任红三十军政委，率部参加嘉陵江战役和西路军征战。",
    themeTags: ["红四方面军", "嘉陵江战役", "西路军"],
    relatedEventIds: ["evt_024"]
  },
  {
    id: "person_027",
    name: "陈昌浩",
    nameEn: "Chen Changhao",
    personType: "将领",
    forceId: "red_fourth",
    hometown: "湖北汉川",
    birthYear: 1906,
    deathYear: 1967,
    portrait: "images/portraits/chenchanghao.jpg",
    summary: "红四方面军政委。长征中与徐向前一起指挥红四方面军，参与嘉陵江战役、懋功会师等重大事件。",
    themeTags: ["红四方面军", "懋功会师", "嘉陵江战役"],
    relatedEventIds: ["evt_016", "evt_024", "evt_025", "evt_028"]
  },
  {
    id: "person_028",
    name: "聂荣臻",
    nameEn: "Nie Rongzhen",
    personType: "将领",
    forceId: "red_first",
    hometown: "重庆江津",
    birthYear: 1899,
    deathYear: 1992,
    portrait: "images/portraits/nierongzhen.jpg",
    summary: "十大元帅之一。长征中任红一军团政委，与林彪一起率部担任前卫，参加强渡大渡河、飞夺泸定桥等关键战役。",
    themeTags: ["红一军团", "前卫任务", "大渡河"],
    relatedEventIds: ["evt_013", "evt_032", "evt_043"]
  },
  {
    id: "person_029",
    name: "陈赓",
    nameEn: "Chen Geng",
    personType: "将领",
    forceId: "red_first",
    hometown: "湖南湘乡",
    birthYear: 1903,
    deathYear: 1961,
    portrait: "images/portraits/chengeng.jpg",
    summary: "中国人民解放军大将。长征中任干部团团长，在巧渡金沙江、强渡大渡河等战役中发挥了重要作用。",
    themeTags: ["干部团", "巧渡金沙江", "军事指挥"],
    relatedEventIds: ["evt_011"]
  },
  {
    id: "person_030",
    name: "杨成武",
    nameEn: "Yang Chengwu",
    personType: "将领",
    forceId: "red_first",
    hometown: "福建长汀",
    birthYear: 1914,
    deathYear: 2004,
    portrait: "images/portraits/yangchengwu.jpg",
    summary: "中国人民解放军上将。长征中任红四团政委，率部飞夺泸定桥、突破腊子口，是长征中的开路先锋。",
    themeTags: ["飞夺泸定桥", "腊子口", "开路先锋"],
    relatedEventIds: ["evt_014", "evt_043"]
  },
  {
    id: "person_031",
    name: "黄开湘",
    nameEn: "Huang Kaixiang",
    personType: "烈士",
    forceId: "red_first",
    hometown: "江西弋阳",
    birthYear: 1901,
    deathYear: 1935,
    portrait: "images/portraits/huangkaixiang.jpg",
    summary: "红四团团长。与杨成武一起率部飞夺泸定桥、突破腊子口。到达陕北后因伤寒病逝，年仅34岁，未能看到长征的最终胜利。",
    themeTags: ["飞夺泸定桥", "腊子口", "开路先锋"],
    relatedEventIds: ["evt_014", "evt_043"]
  },
  {
    id: "person_032",
    name: "康克清",
    nameEn: "Kang Keqing",
    personType: "女性",
    forceId: "red_first",
    hometown: "江西万安",
    birthYear: 1911,
    deathYear: 1992,
    portrait: "images/portraits/kangkeqing.jpg",
    summary: "朱德夫人，长征中30位女红军之一。在长征途中担任红军总司令部直属队政治指导员，与男战士一样行军作战，是女红军的杰出代表。",
    themeTags: ["女红军", "巾帼英雄", "朱德夫人"],
    relatedEventIds: []
  },
  {
    id: "person_033",
    name: "蔡畅",
    nameEn: "Cai Chang",
    personType: "女性",
    forceId: "red_first",
    hometown: "湖南双峰",
    birthYear: 1900,
    deathYear: 1990,
    portrait: "images/portraits/caichang.jpg",
    summary: "中国妇女运动先驱，长征中30位女红军中年龄最大者。长征途中坚持做宣传鼓动工作，被誉为'长征大姐'。",
    themeTags: ["女红军", "妇女运动", "长征大姐"],
    relatedEventIds: []
  },
  {
    id: "person_034",
    name: "李贞",
    nameEn: "Li Zhen",
    personType: "女性",
    forceId: "red_second",
    hometown: "湖南浏阳",
    birthYear: 1908,
    deathYear: 1990,
    portrait: "images/portraits/lizhen.jpg",
    summary: "中国人民解放军第一位女将军。长征中随红二方面军行动，在艰苦卓绝的环境中坚持行军作战，展现了革命女性的坚强意志。",
    themeTags: ["女将军", "红二方面军", "巾帼英雄"],
    relatedEventIds: ["evt_026"]
  },
  {
    id: "person_035",
    name: "博古",
    nameEn: "Bo Gu",
    personType: "领袖",
    forceId: "red_first",
    hometown: "江苏无锡",
    birthYear: 1907,
    deathYear: 1946,
    portrait: "images/portraits/bogu.jpg",
    summary: "中国共产党早期领导人。长征前为中共中央主要负责人，遵义会议上受到批评，会后逐步改正错误，继续为党工作。",
    themeTags: ["遵义会议", "中央领导", "左倾错误"],
    relatedEventIds: ["evt_001", "evt_004", "evt_007", "evt_034", "evt_040", "evt_041", "evt_042"]
  },
  {
    id: "person_036",
    name: "李德",
    nameEn: "Otto Braun",
    personType: "国际友人",
    forceId: "red_first",
    hometown: "德国慕尼黑",
    birthYear: 1900,
    deathYear: 1974,
    portrait: "images/portraits/lide.jpg",
    summary: "共产国际派驻中国的军事顾问。长征初期掌握军事指挥权，推行错误的军事路线，遵义会议上受到批评，后随红军长征到达陕北。",
    themeTags: ["共产国际", "军事顾问", "遵义会议"],
    relatedEventIds: ["evt_001", "evt_004"]
  },
  {
    id: "person_037",
    name: "左权",
    nameEn: "Zuo Quan",
    personType: "将领",
    forceId: "red_first",
    hometown: "湖南醴陵",
    birthYear: 1905,
    deathYear: 1942,
    portrait: "images/portraits/zuoquan.jpg",
    summary: "红军和八路军高级将领。长征中任红一军团参谋长，协助林彪、聂荣臻指挥前卫部队，在飞夺泸定桥等战役中发挥了重要作用。",
    themeTags: ["红一军团", "前卫指挥", "飞夺泸定桥"],
    relatedEventIds: ["evt_029"]
  },
  {
    id: "person_038",
    name: "刘少奇",
    nameEn: "Liu Shaoqi",
    personType: "领袖",
    forceId: "red_first",
    hometown: "湖南宁乡",
    birthYear: 1898,
    deathYear: 1969,
    portrait: "images/portraits/liushaoqi.jpg",
    summary: "中国共产党和中华人民共和国主要领导人之一。长征中参加遵义会议，支持毛泽东的正确主张，后随红军到达陕北。",
    themeTags: ["遵义会议", "中央领导", "政治工作"],
    relatedEventIds: ["evt_007", "evt_050"]
  },
  {
    id: "person_039",
    name: "陈云",
    nameEn: "Chen Yun",
    personType: "领袖",
    forceId: "red_first",
    hometown: "上海青浦",
    birthYear: 1905,
    deathYear: 1995,
    portrait: "images/portraits/chenyun.jpg",
    summary: "中国共产党重要领导人。长征中参加遵义会议，后奉命离开长征队伍前往上海恢复党的地下工作，再赴莫斯科汇报长征情况。",
    themeTags: ["遵义会议", "共产国际", "地下工作"],
    relatedEventIds: ["evt_007"]
  },
  {
    id: "person_040",
    name: "习仲勋",
    nameEn: "Xi Zhongxun",
    personType: "领袖",
    forceId: "shaanbei_red",
    hometown: "陕西富平",
    birthYear: 1913,
    deathYear: 2002,
    portrait: "images/portraits/xizhongxun.jpg",
    summary: "中国共产党优秀党员。陕甘边革命根据地的主要创建者和领导者之一，与刘志丹、谢子长一起创建了西北红军和西北根据地，为中央红军长征提供了落脚点。",
    themeTags: ["陕甘根据地", "西北红军", "根据地建设"],
    relatedEventIds: []
  }
];

// --- 路线数据 ---
const ROUTES = {
  "red_first": {
    name: "红一方面军",
    color: "#d73027",
    path: [
      [25.886, 115.98],   // 瑞金
      [25.95, 115.41],    // 于都
      [25.386, 114.92],   // 信丰
      [25.55, 113.68],    // 汝城
      [25.40, 112.95],    // 宜章
      [25.69, 111.28],    // 湘江
      [26.16, 109.78],    // 通道
      [27.07, 107.47],    // 猴场
      [26.23, 109.13],    // 黎平
      [27.32, 107.15],    // 乌江
      [27.70, 106.92],    // 遵义
      [28.57, 105.70],    // 赤水一渡
      [28.57, 105.70],    // 赤水二渡
      [27.98, 106.85],    // 娄山关
      [27.70, 106.92],    // 遵义再占
      [28.57, 105.70],    // 赤水三渡
      [28.57, 105.70],    // 赤水四渡
      [26.30, 102.50],    // 金沙江
      [28.67, 102.22],    // 彝海
      [29.27, 102.28],    // 大渡河
      [29.91, 102.23],    // 泸定
      [30.57, 102.85],    // 夹金山
      [30.99, 102.36],    // 懋功
      [31.30, 102.50],    // 两河口
      [32.60, 103.20],    // 沙窝
      [32.65, 103.05],    // 毛儿盖
      [33.58, 102.96],    // 松潘草地
      [33.58, 103.20],    // 巴西
      [34.06, 103.38],    // 俄界
      [34.08, 103.85],    // 腊子口
      [34.08, 104.18],    // 哈达铺
      [35.66, 106.18],    // 六盘山
      [36.93, 108.17],    // 吴起镇
      [35.96, 109.37],    // 直罗镇
      [37.05, 109.73],    // 瓦窑堡
    ],
    nodes: [
      { eventId: "evt_001", coordinates: [25.886, 115.98] },
      { eventId: "evt_031", coordinates: [25.95, 115.41] },
      { eventId: "evt_002", coordinates: [25.386, 114.92] },
      { eventId: "evt_032", coordinates: [25.55, 113.68] },
      { eventId: "evt_033", coordinates: [25.40, 112.95] },
      { eventId: "evt_003", coordinates: [25.69, 111.28] },
      { eventId: "evt_004", coordinates: [26.16, 109.78] },
      { eventId: "evt_034", coordinates: [27.07, 107.47] },
      { eventId: "evt_005", coordinates: [26.23, 109.13] },
      { eventId: "evt_035", coordinates: [27.32, 107.15] },
      { eventId: "evt_006", coordinates: [27.70, 106.92] },
      { eventId: "evt_007", coordinates: [27.70, 106.92] },
      { eventId: "evt_008", coordinates: [28.57, 105.70] },
      { eventId: "evt_036", coordinates: [28.57, 105.70] },
      { eventId: "evt_037", coordinates: [27.98, 106.85] },
      { eventId: "evt_009", coordinates: [27.70, 106.92] },
      { eventId: "evt_038", coordinates: [28.57, 105.70] },
      { eventId: "evt_010", coordinates: [28.57, 105.70] },
      { eventId: "evt_011", coordinates: [26.30, 102.50] },
      { eventId: "evt_012", coordinates: [28.67, 102.22] },
      { eventId: "evt_013", coordinates: [29.27, 102.28] },
      { eventId: "evt_014", coordinates: [29.91, 102.23] },
      { eventId: "evt_015", coordinates: [30.57, 102.85] },
      { eventId: "evt_016", coordinates: [30.99, 102.36] },
      { eventId: "evt_039", coordinates: [31.30, 102.50] },
      { eventId: "evt_040", coordinates: [32.60, 103.20] },
      { eventId: "evt_041", coordinates: [32.65, 103.05] },
      { eventId: "evt_017", coordinates: [33.58, 102.96] },
      { eventId: "evt_042", coordinates: [33.58, 103.20] },
      { eventId: "evt_018", coordinates: [34.06, 103.38] },
      { eventId: "evt_043", coordinates: [34.08, 103.85] },
      { eventId: "evt_044", coordinates: [34.08, 104.18] },
      { eventId: "evt_045", coordinates: [35.66, 106.18] },
      { eventId: "evt_019", coordinates: [36.93, 108.17] },
      { eventId: "evt_046", coordinates: [36.93, 108.17] },
      { eventId: "evt_020", coordinates: [35.96, 109.37] },
      { eventId: "evt_050", coordinates: [37.05, 109.73] },
    ]
  },
  "red_25th": {
    name: "红二十五军",
    color: "#fdae61",
    path: [
      [31.88, 114.35],    // 何家冲
      [33.36, 113.04],    // 独树镇
      [33.70, 110.40],    // 庾家河
      [36.90, 109.85],    // 永坪
    ],
    nodes: [
      { eventId: "evt_021", coordinates: [31.88, 114.35] },
      { eventId: "evt_022", coordinates: [33.36, 113.04] },
      { eventId: "evt_047", coordinates: [33.70, 110.40] },
      { eventId: "evt_023", coordinates: [36.90, 109.85] },
    ]
  },
  "red_fourth": {
    name: "红四方面军",
    color: "#4575b4",
    path: [
      [31.83, 105.80],    // 嘉陵江
      [30.17, 103.23],    // 百丈关
      [30.99, 102.36],    // 懋功
      [31.62, 100.00],    // 甘孜
      [35.69, 105.05],    // 会宁
    ],
    nodes: [
      { eventId: "evt_024", coordinates: [31.83, 105.80] },
      { eventId: "evt_025", coordinates: [30.17, 103.23] },
      { eventId: "evt_027", coordinates: [31.62, 100.00] },
      { eventId: "evt_028", coordinates: [35.69, 105.05] },
    ]
  },
  "red_second": {
    name: "红二方面军",
    color: "#1a9850",
    path: [
      [29.40, 110.16],    // 桑植
      [27.00, 104.30],    // 乌蒙山
      [26.87, 99.97],     // 石鼓
      [31.62, 100.00],    // 甘孜
      [35.82, 105.88],    // 将台堡
    ],
    nodes: [
      { eventId: "evt_026", coordinates: [29.40, 110.16] },
      { eventId: "evt_048", coordinates: [27.00, 104.30] },
      { eventId: "evt_049", coordinates: [26.87, 99.97] },
      { eventId: "evt_027", coordinates: [31.62, 100.00] },
      { eventId: "evt_029", coordinates: [35.82, 105.88] },
    ]
  },
  "shaanbei_red": {
    name: "陕甘红军",
    color: "#984ea3",
    path: [
      [36.90, 109.85],    // 永坪
      [37.37, 110.57],    // 三交镇
    ],
    nodes: [
      { eventId: "evt_023", coordinates: [36.90, 109.85] },
      { eventId: "evt_030", coordinates: [37.37, 110.57] },
    ]
  }
};

// --- 博物馆结构 ---
const MUSEUM = {
  halls: [
    { id: "route", title: "长征路线全景展板" },
    { id: "persons", title: "人物生命时间线" },
    { id: "archive", title: "资料档案与来源" },
    { id: "memorial", title: "纪念与学习路径" },
  ]
};

// --- 辅助函数 ---
function getSubject(id) { return SUBJECTS.find(s => s.id === id); }
function getEvent(id) { return EVENTS.find(e => e.id === id); }
function getPerson(id) { return PERSONS.find(p => p.id === id); }
function getCostEvents() { return EVENTS.filter(e => e.costType); }
function personLifespan(p) { return `${p.birthYear}–${p.deathYear}`; }
function formatDate(dateStr) { return dateStr; }
function getPersonEvents(personId) {
  const person = getPerson(personId);
  if (!person) return [];
  return person.relatedEventIds.map(id => getEvent(id)).filter(Boolean);
}
function getEventsByForce(forceId) {
  return EVENTS.filter(e => e.forceId === forceId);
}
function getPersonsByForce(forceId) {
  return PERSONS.filter(p => p.forceId === forceId);
}
function escapeHTML(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}