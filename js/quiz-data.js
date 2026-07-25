// ============================================================
// 问卷调查题库
// 每道题目关联事件ID、人物ID、地点ID，用于智能组卷
// ============================================================

const QUIZ_BANK = [
  // === 红一方面军相关 ===
  {
    id: "q_001",
    type: "single",
    difficulty: 1,
    question: "中央红军长征出发的地点是？",
    options: ["江西瑞金", "湖南桑植", "四川懋功", "甘肃会宁"],
    answer: [0],
    explanation: "1934年10月10日，中央红军主力8.6万余人从江西瑞金、于都等地出发，开始战略转移。",
    tags: { eventIds: ["evt_001"], personIds: [], placeIds: ["瑞金"], forceIds: ["red_first"] }
  },
  {
    id: "q_002",
    type: "single",
    difficulty: 1,
    question: "遵义会议召开的时间是？",
    options: ["1934年12月", "1935年1月", "1935年3月", "1935年6月"],
    answer: [1],
    explanation: "1935年1月15日至17日，中共中央政治局在遵义召开扩大会议，确立了毛泽东在党和红军中的领导地位。",
    tags: { eventIds: ["evt_007"], personIds: ["person_001", "person_002"], placeIds: ["遵义"], forceIds: ["red_first"] }
  },
  {
    id: "q_003",
    type: "single",
    difficulty: 2,
    question: "湘江战役后，中央红军从出发时的8.6万人锐减至多少人？",
    options: ["约5万人", "约4万人", "约3万人", "约2万人"],
    answer: [2],
    explanation: "湘江战役中，中央红军与国民党军苦战五昼夜，从8.6万人锐减至3万余人，损失惨重。",
    tags: { eventIds: ["evt_003"], personIds: ["person_009"], placeIds: ["湘江"], forceIds: ["red_first"] }
  },
  {
    id: "q_004",
    type: "single",
    difficulty: 2,
    question: "四渡赤水战役体现了谁的高超军事指挥艺术？",
    options: ["朱德", "彭德怀", "毛泽东", "林彪"],
    answer: [2],
    explanation: "四渡赤水是毛泽东军事指挥艺术的经典之作，通过灵活机动摆脱了国民党军的围追堵截。",
    tags: { eventIds: ["evt_008", "evt_010"], personIds: ["person_001"], placeIds: ["赤水"], forceIds: ["red_first"] }
  },
  {
    id: "q_005",
    type: "single",
    difficulty: 1,
    question: "飞夺泸定桥的红军勇士共有多少人？",
    options: ["12人", "18人", "22人", "30人"],
    answer: [2],
    explanation: "红军二十二名勇士冒着敌人密集火力，攀援13根铁索飞夺泸定桥，创造了战争史上的奇迹。",
    tags: { eventIds: ["evt_014"], personIds: [], placeIds: ["泸定"], forceIds: ["red_first"] }
  },
  {
    id: "q_006",
    type: "multi",
    difficulty: 2,
    question: "以下哪些事件属于中央红军长征中的关键节点？（多选）",
    options: ["遵义会议", "彝海结盟", "永坪会师", "飞夺泸定桥"],
    answer: [0, 1, 3],
    explanation: "遵义会议、彝海结盟和飞夺泸定桥都是中央红军长征中的关键事件。永坪会师是红二十五军与陕甘红军的会师。",
    tags: { eventIds: ["evt_007", "evt_012", "evt_014"], personIds: ["person_001", "person_006"], placeIds: [], forceIds: ["red_first"] }
  },
  {
    id: "q_007",
    type: "boolean",
    difficulty: 1,
    question: "中央红军长征行程约二万五千里。",
    options: ["正确", "错误"],
    answer: [0],
    explanation: "中央红军（红一方面军）长征行程约二万五千里，途经11个省。",
    tags: { eventIds: ["evt_001"], personIds: [], placeIds: [], forceIds: ["red_first"] }
  },
  {
    id: "q_008",
    type: "single",
    difficulty: 2,
    question: "刘伯承与哪位彝族首领在彝海歃血为盟？",
    options: ["阿合", "小叶丹", "吉克", "木呷"],
    answer: [1],
    explanation: "1935年5月22日，刘伯承与彝族沽基部落首领小叶丹在彝海歃血为盟，红军顺利通过彝族地区。",
    tags: { eventIds: ["evt_012"], personIds: ["person_006", "person_019"], placeIds: ["彝海"], forceIds: ["red_first"] }
  },
  {
    id: "q_009",
    type: "single",
    difficulty: 2,
    question: "中央红军翻越的第一座大雪山是？",
    options: ["梦笔山", "夹金山", "党岭山", "玉龙雪山"],
    answer: [1],
    explanation: "1935年6月12日，中央红军翻越海拔4000多米的夹金山，这是长征中翻越的第一座大雪山。",
    tags: { eventIds: ["evt_015"], personIds: [], placeIds: ["夹金山"], forceIds: ["red_first"] }
  },
  {
    id: "q_010",
    type: "single",
    difficulty: 1,
    question: "中央红军长征的终点是哪里？",
    options: ["甘肃会宁", "陕西吴起镇", "宁夏将台堡", "甘肃甘孜"],
    answer: [1],
    explanation: "1935年10月19日，中央红军主力到达陕北吴起镇，标志着红一方面军长征胜利结束。",
    tags: { eventIds: ["evt_019"], personIds: [], placeIds: ["吴起镇"], forceIds: ["red_first"] }
  },

  // === 红二十五军相关 ===
  {
    id: "q_011",
    type: "single",
    difficulty: 2,
    question: "红二十五军出发长征时共有多少人？",
    options: ["约5000人", "约4000人", "约2980人", "约2000人"],
    answer: [2],
    explanation: "1934年11月16日，红二十五军2980人从河南罗山何家冲出发，开始长征。",
    tags: { eventIds: ["evt_021"], personIds: [], placeIds: ["何家冲"], forceIds: ["red_25th"] }
  },
  {
    id: "q_012",
    type: "single",
    difficulty: 1,
    question: "红二十五军战士平均年龄是多少？",
    options: ["约20岁", "约18岁", "约16岁", "约22岁"],
    answer: [2],
    explanation: "红二十五军部队战士平均年龄仅16岁，18岁以下少年兵占72%，被誉为\u201C娃娃军\u201D。",
    tags: { eventIds: ["evt_021"], personIds: [], placeIds: [], forceIds: ["red_25th"] }
  },
  {
    id: "q_013",
    type: "single",
    difficulty: 2,
    question: "红二十五军与哪两支红军在永坪会师？",
    options: ["红一、红二军团", "红二十六、红二十七军", "红四、红九军", "红二、红六军团"],
    answer: [1],
    explanation: "红二十五军与红二十六军、红二十七军在陕西永坪会师，合编为红十五军团。",
    tags: { eventIds: ["evt_023"], personIds: ["person_014", "person_017"], placeIds: ["永坪"], forceIds: ["red_25th", "shaanbei_red"] }
  },
  {
    id: "q_014",
    type: "single",
    difficulty: 2,
    question: "红二十五军的主要领导人包括？",
    options: ["贺龙、任弼时", "程子华、吴焕先、徐海东", "徐向前、陈昌浩", "朱德、刘伯承"],
    answer: [1],
    explanation: "红二十五军由程子华（军长）、吴焕先（政委）、徐海东（副军长）领导。",
    tags: { eventIds: ["evt_021"], personIds: ["person_012", "person_017", "person_018"], placeIds: [], forceIds: ["red_25th"] }
  },

  // === 红四方面军相关 ===
  {
    id: "q_015",
    type: "single",
    difficulty: 2,
    question: "红四方面军开始长征的标志性战役是？",
    options: ["湘江战役", "百丈关战役", "嘉陵江战役", "直罗镇战役"],
    answer: [2],
    explanation: "1935年3月28日，红四方面军发起嘉陵江战役，强渡嘉陵江，开始长征。",
    tags: { eventIds: ["evt_024"], personIds: ["person_008"], placeIds: ["嘉陵江"], forceIds: ["red_fourth"] }
  },
  {
    id: "q_016",
    type: "single",
    difficulty: 3,
    question: "红四方面军百丈关战役伤亡约多少人？",
    options: ["约3000人", "约6000人", "近万人", "约2万人"],
    answer: [2],
    explanation: "百丈关战役中红四方面军与国民党军激战七日，伤亡近万人，被迫放弃南下计划。",
    tags: { eventIds: ["evt_025"], personIds: ["person_008"], placeIds: ["百丈关"], forceIds: ["red_fourth"] }
  },

  // === 红二方面军相关 ===
  {
    id: "q_017",
    type: "single",
    difficulty: 2,
    question: "红二方面军从何处出发开始长征？",
    options: ["江西瑞金", "湖南桑植", "河南何家冲", "四川苍溪"],
    answer: [1],
    explanation: "1935年11月19日，红二、六军团1.7万余人从湖南桑植出发，开始长征。",
    tags: { eventIds: ["evt_026"], personIds: ["person_007"], placeIds: ["桑植"], forceIds: ["red_second"] }
  },
  {
    id: "q_018",
    type: "single",
    difficulty: 1,
    question: "长征胜利结束的标志性事件是？",
    options: ["懋功会师", "甘孜会师", "会宁会师", "将台堡会师"],
    answer: [3],
    explanation: "1936年10月22日，红一、红二方面军在宁夏将台堡会师，标志着红军长征全部胜利结束。",
    tags: { eventIds: ["evt_029"], personIds: ["person_007"], placeIds: ["将台堡"], forceIds: ["red_second"] }
  },

  // === 人物相关 ===
  {
    id: "q_019",
    type: "single",
    difficulty: 2,
    question: "被毛泽东称赞为\u201C群众领袖，民族英雄\u201D的是谁？",
    options: ["谢子长", "刘志丹", "徐海东", "程子华"],
    answer: [1],
    explanation: "刘志丹是陕甘红军和西北根据地创始人之一，1936年4月牺牲，毛泽东称赞他为\u201C群众领袖，民族英雄\u201D。",
    tags: { eventIds: ["evt_030"], personIds: ["person_014"], placeIds: [], forceIds: ["shaanbei_red"] }
  },
  {
    id: "q_020",
    type: "single",
    difficulty: 3,
    question: "长征中牺牲的第一位红军师长是谁？",
    options: ["陈树湘", "邓萍", "洪超", "罗南辉"],
    answer: [2],
    explanation: "洪超，红四师师长，在长征初期突破第一道封锁线的百石战斗中牺牲，年仅25岁，是长征中牺牲的第一位红军师长。",
    tags: { eventIds: ["evt_002"], personIds: ["person_011"], placeIds: [], forceIds: ["red_first"] }
  },
  {
    id: "q_021",
    type: "single",
    difficulty: 2,
    question: "\u201C断肠明志\u201D的红军英雄指的是谁？",
    options: ["邓萍", "洪超", "陈树湘", "吴焕先"],
    answer: [2],
    explanation: "陈树湘，红三十四师师长，湘江战役中负伤被俘后，用手从腹部伤口绞断肠子，壮烈牺牲，年仅29岁。",
    tags: { eventIds: ["evt_003"], personIds: ["person_009"], placeIds: ["湘江"], forceIds: ["red_first"] }
  },
  {
    id: "q_022",
    type: "single",
    difficulty: 3,
    question: "长征中牺牲的红军最高级别军事指挥员之一，红三军团参谋长是谁？",
    options: ["洪超", "陈树湘", "邓萍", "罗南辉"],
    answer: [2],
    explanation: "邓萍，红三军团参谋长，在遵义战役中亲临前线侦察时牺牲，年仅27岁。",
    tags: { eventIds: ["evt_009"], personIds: ["person_010"], placeIds: ["遵义"], forceIds: ["red_first"] }
  },
  {
    id: "q_023",
    type: "single",
    difficulty: 1,
    question: "十大元帅中，哪位在长征中任红军总司令？",
    options: ["彭德怀", "林彪", "朱德", "刘伯承"],
    answer: [2],
    explanation: "朱德在长征中任红军总司令，是十大元帅之首。",
    tags: { eventIds: [], personIds: ["person_003"], placeIds: [], forceIds: ["red_first"] }
  },
  {
    id: "q_024",
    type: "multi",
    difficulty: 2,
    question: "以下哪些人属于长征中的女性红军？（多选）",
    options: ["贺子珍", "邓颖超", "蔡畅", "康克清"],
    answer: [0, 1, 2, 3],
    explanation: "贺子珍、邓颖超、蔡畅、康克清都是长征中著名的女性红军，她们展现了非凡的毅力。",
    tags: { eventIds: [], personIds: ["person_015", "person_016"], placeIds: [], forceIds: ["red_first"] }
  },
  {
    id: "q_025",
    type: "single",
    difficulty: 2,
    question: "贺龙领导的哪支部队参加了长征？",
    options: ["红一方面军", "红二方面军", "红四方面军", "红二十五军"],
    answer: [1],
    explanation: "贺龙任红二方面军总指挥，率部进行长征，最终到达将台堡。",
    tags: { eventIds: ["evt_026", "evt_029"], personIds: ["person_007"], placeIds: [], forceIds: ["red_second"] }
  },

  // === 代价相关 ===
  {
    id: "q_026",
    type: "single",
    difficulty: 2,
    question: "长征中非战斗减员最惨重的路段是？",
    options: ["湘江战役", "翻越夹金山", "穿越松潘草地", "百丈关战役"],
    answer: [2],
    explanation: "松潘草地全程非战斗减员超万人，平均每公里牺牲近100人，90%无墓碑、无籍贯、无姓名。",
    tags: { eventIds: ["evt_017"], personIds: [], placeIds: ["松潘草地"], forceIds: ["red_first"] }
  },
  {
    id: "q_027",
    type: "single",
    difficulty: 1,
    question: "各路红军长征总初始兵力合计约多少人？",
    options: ["约10万人", "约15万人", "约20.6万人", "约30万人"],
    answer: [2],
    explanation: "各路红军长征总初始兵力合计约20.6万人，到达陕北时仅存约5.7万人。",
    tags: { eventIds: [], personIds: [], placeIds: [], forceIds: [] }
  },
  {
    id: "q_028",
    type: "boolean",
    difficulty: 2,
    question: "长征全程平均每行进1公里就有3-4名红军将士牺牲。",
    options: ["正确", "错误"],
    answer: [0],
    explanation: "长征全程两万五千里，平均每行进1公里，就有3-4名红军将士牺牲，平均每300米便有一名战士倒在征途。",
    tags: { eventIds: [], personIds: [], placeIds: [], forceIds: [] }
  },

  // === 综合题 ===
  {
    id: "q_029",
    type: "multi",
    difficulty: 3,
    question: "以下哪些会师发生在长征期间？（多选）",
    options: ["懋功会师", "甘孜会师", "会宁会师", "将台堡会师"],
    answer: [0, 1, 2, 3],
    explanation: "懋功会师（1935年6月）、甘孜会师（1936年7月）、会宁会师（1936年10月）、将台堡会师（1936年10月）都是长征期间的重要会师。",
    tags: { eventIds: ["evt_016", "evt_027", "evt_028", "evt_029"], personIds: [], placeIds: [], forceIds: [] }
  },
  {
    id: "q_030",
    type: "single",
    difficulty: 2,
    question: "长征途中召开的哪次会议，确立了毛泽东在党和红军中的领导地位？",
    options: ["通道会议", "黎平会议", "遵义会议", "俄界会议"],
    answer: [2],
    explanation: "1935年1月召开的遵义会议，确立了毛泽东在党和红军中的领导地位，是中国共产党历史上生死攸关的转折点。",
    tags: { eventIds: ["evt_007"], personIds: ["person_001"], placeIds: ["遵义"], forceIds: ["red_first"] }
  },
  {
    id: "q_031",
    type: "single",
    difficulty: 2,
    question: "最早到达陕北的红军部队是？",
    options: ["红一方面军", "红二方面军", "红四方面军", "红二十五军"],
    answer: [3],
    explanation: "红二十五军于1935年9月15日到达陕北永坪，是最早到达陕北的红军部队，为中央红军落脚陕北创造了条件。",
    tags: { eventIds: ["evt_023"], personIds: [], placeIds: ["永坪"], forceIds: ["red_25th"] }
  },
  {
    id: "q_032",
    type: "single",
    difficulty: 3,
    question: "哪场战役被称为\u201C为中共中央把全国革命大本营放在西北举行了奠基礼\u201D？",
    options: ["遵义战役", "四渡赤水", "飞夺泸定桥", "直罗镇战役"],
    answer: [3],
    explanation: "直罗镇战役歼灭国民党军一个师又一个团，毛泽东称其为\u201C给党中央把全国革命大本营放在西北的任务，举行了一个奠基礼\u201D。",
    tags: { eventIds: ["evt_020"], personIds: [], placeIds: ["直罗镇"], forceIds: ["red_first"] }
  },
  {
    id: "q_033",
    type: "boolean",
    difficulty: 1,
    question: "长征历时两年，途经14个省。",
    options: ["正确", "错误"],
    answer: [0],
    explanation: "长征历时两年（1934年10月-1936年10月），途经14个省，行程两万五千里。",
    tags: { eventIds: [], personIds: [], placeIds: [], forceIds: [] }
  },
  {
    id: "q_034",
    type: "single",
    difficulty: 2,
    question: "\u201C巧渡金沙江\u201D主要是谁的指挥功绩？",
    options: ["毛泽东", "朱德", "刘伯承", "彭德怀"],
    answer: [2],
    explanation: "刘伯承在皎平渡指挥红军巧渡金沙江，摆脱了数十万国民党军队的围追堵截。",
    tags: { eventIds: ["evt_011"], personIds: ["person_006"], placeIds: ["金沙江"], forceIds: ["red_first"] }
  },
  {
    id: "q_035",
    type: "single",
    difficulty: 3,
    question: "红五军副军长罗南辉是在什么情况下牺牲的？",
    options: ["湘江战役", "翻越雪山", "为掩护主力部队转移被敌机轰炸", "草地行军"],
    answer: [2],
    explanation: "罗南辉在会宁会师前后，为掩护主力部队转移，在甘肃华家岭阻击战中被敌机轰炸牺牲，年仅28岁。",
    tags: { eventIds: [], personIds: ["person_013"], placeIds: [], forceIds: ["red_fourth"] }
  }
];

// ============================================================
// 组卷逻辑
// ============================================================

/**
 * 根据已选的事件ID和人物ID，从题库中智能组合问卷
 * @param {string[]} selectedEventIds - 用户选择过的事件ID
 * @param {string[]} selectedPersonIds - 用户点击过的人物ID
 * @param {string[]} selectedPlaceIds - 用户浏览过的地点ID
 * @param {number} count - 需要生成的题目数量，默认10
 * @returns {object[]} 匹配的题目数组
 */
function generateQuiz(selectedEventIds, selectedPersonIds, selectedPlaceIds, count) {
  count = count || 10;
  selectedEventIds = selectedEventIds || [];
  selectedPersonIds = selectedPersonIds || [];
  selectedPlaceIds = selectedPlaceIds || [];

  // 计算每道题的匹配度
  const scored = QUIZ_BANK.map(function(q) {
    var score = 0;
    var tags = q.tags || {};

    // 匹配事件
    if (tags.eventIds) {
      tags.eventIds.forEach(function(eid) {
        if (selectedEventIds.indexOf(eid) >= 0) score += 3;
      });
    }
    // 匹配人物
    if (tags.personIds) {
      tags.personIds.forEach(function(pid) {
        if (selectedPersonIds.indexOf(pid) >= 0) score += 3;
      });
    }
    // 匹配地点
    if (tags.placeIds) {
      tags.placeIds.forEach(function(pid) {
        if (selectedPlaceIds.indexOf(pid) >= 0) score += 2;
      });
    }
    // 匹配部队
    if (tags.forceIds) {
      // 通过事件间接匹配部队
      tags.forceIds.forEach(function(fid) {
        var hasMatch = selectedEventIds.some(function(eid) {
          var evt = getEvent(eid);
          return evt && evt.forceId === fid;
        });
        if (hasMatch) score += 1;
      });
    }

    return { question: q, score: score };
  });

  // 按匹配度降序排列
  scored.sort(function(a, b) { return b.score - a.score; });

  // 取前 count 道题
  var selected = scored.slice(0, count).map(function(s) { return s.question; });

  // 如果匹配的题目不够，补充通用题目（难度1的题目）
  if (selected.length < count) {
    var remaining = QUIZ_BANK.filter(function(q) {
      return selected.indexOf(q) < 0 && q.difficulty === 1;
    });
    remaining.sort(function() { return Math.random() - 0.5; });
    var needed = count - selected.length;
    selected = selected.concat(remaining.slice(0, needed));
  }

  // 判断用户是否有足够的交互历史
  var hasHistory = selectedEventIds.length > 0 || selectedPersonIds.length > 0 || selectedPlaceIds.length > 0;

  return {
    questions: selected,
    hasHistory: hasHistory,
    totalMatched: scored.filter(function(s) { return s.score > 0; }).length
  };
}