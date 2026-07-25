// ============================================================
// 问卷页面逻辑
// ============================================================

var quizQuestions = [];
var currentIndex = 0;
var userAnswers = [];
var quizSubmitted = false;
var selectedEventIds = [];
var selectedPersonIds = [];
var selectedPlaceIds = [];

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', initQuestionnaire);

function initQuestionnaire() {
  loadSelections();
  renderSidebar();
  updateMatchInfo();
}

// --- 加载用户选择 ---
function loadSelections() {
  try {
    var stored = sessionStorage.getItem('red_map_selections');
    if (stored) {
      var data = JSON.parse(stored);
      selectedEventIds = data.eventIds || [];
      selectedPersonIds = data.personIds || [];
      selectedPlaceIds = data.placeIds || [];
    }
  } catch (e) {
    selectedEventIds = [];
    selectedPersonIds = [];
    selectedPlaceIds = [];
  }
}

// --- 渲染侧边栏 ---
function renderSidebar() {
  // 已选事件
  var eventsDiv = document.getElementById('selected-events');
  if (selectedEventIds.length === 0) {
    eventsDiv.innerHTML = '<span class="empty-hint">尚未选择任何事件节点</span>';
  } else {
    eventsDiv.innerHTML = selectedEventIds.map(function(eid) {
      var evt = getEvent(eid);
      return evt ? '<span class="selection-tag">' + escapeHTML(evt.title) + '</span>' : '';
    }).join('');
  }

  // 已选人物
  var personsDiv = document.getElementById('selected-persons');
  if (selectedPersonIds.length === 0) {
    personsDiv.innerHTML = '<span class="empty-hint">尚未查看任何人物</span>';
  } else {
    personsDiv.innerHTML = selectedPersonIds.map(function(pid) {
      var person = getPerson(pid);
      return person ? '<span class="selection-tag">' + escapeHTML(person.name) + '</span>' : '';
    }).join('');
  }

  // 已选地点
  var placesDiv = document.getElementById('selected-places');
  if (selectedPlaceIds.length === 0) {
    placesDiv.innerHTML = '<span class="empty-hint">尚未浏览任何地点</span>';
  } else {
    placesDiv.innerHTML = selectedPlaceIds.map(function(p) {
      return '<span class="selection-tag">' + escapeHTML(p) + '</span>';
    }).join('');
  }
}

// --- 更新匹配信息 ---
function updateMatchInfo() {
  var info = document.getElementById('match-info');
  var result = generateQuiz(selectedEventIds, selectedPersonIds, selectedPlaceIds, 100);
  var total = result.totalMatched;

  if (total === 0) {
    info.textContent = '暂无匹配题目，将生成通用问卷';
  } else {
    info.textContent = '共匹配到 ' + total + ' 道相关题目';
  }
}

// --- 开始测验 ---
function startQuiz() {
  var count = parseInt(document.getElementById('quiz-count').value);
  var result = generateQuiz(selectedEventIds, selectedPersonIds, selectedPlaceIds, count);

  quizQuestions = result.questions;
  currentIndex = 0;
  userAnswers = new Array(quizQuestions.length).fill(null);
  quizSubmitted = false;

  document.getElementById('quiz-welcome').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-questions').classList.remove('hidden');
  document.getElementById('btn-generate').style.display = 'none';
  document.getElementById('btn-retry').style.display = 'block';

  // 更新欢迎文本
  var welcomeText = document.getElementById('welcome-text');
  if (result.hasHistory) {
    welcomeText.textContent = '系统已根据你在展馆中浏览的内容，为你匹配了 ' + quizQuestions.length + ' 道个性化题目。';
  } else {
    welcomeText.textContent = '你尚未在展馆中浏览内容，系统将为你生成通用问卷。建议先浏览展馆再回来答题。';
  }

  renderQuestion();
  scrollToTop();
}

// --- 渲染当前题目 ---
function renderQuestion() {
  var container = document.getElementById('quiz-questions');
  var q = quizQuestions[currentIndex];
  if (!q) return;

  var typeLabel = q.type === 'single' ? '单选题' : q.type === 'multi' ? '多选题' : '判断题';
  var difficultyStars = '';
  for (var i = 0; i < q.difficulty; i++) { difficultyStars += '★'; }
  for (var i = q.difficulty; i < 3; i++) { difficultyStars += '☆'; }

  var html = '';

  // 进度条
  html += '<div class="quiz-progress">';
  html += '<div class="progress-text"><span>第 ' + (currentIndex + 1) + ' / ' + quizQuestions.length + ' 题</span><span>' + escapeHTML(typeLabel) + ' · ' + difficultyStars + '</span></div>';
  html += '<div class="progress-bar"><div class="progress-fill" style="width:' + ((currentIndex + 1) / quizQuestions.length * 100) + '%"></div></div>';
  html += '</div>';

  // 题目卡片
  html += '<div class="question-card">';
  html += '<div class="q-header">';
  html += '<span class="q-number">第 ' + (currentIndex + 1) + ' 题</span>';
  html += '<span class="q-type">' + escapeHTML(typeLabel) + '</span>';
  html += '</div>';
  html += '<div class="q-text">' + escapeHTML(q.question) + '</div>';

  // 选项
  html += '<div class="options-list">';
  var userAnswer = userAnswers[currentIndex];
  q.options.forEach(function(opt, idx) {
    var cls = 'option-item';
    if (quizSubmitted) {
      var isCorrect = q.answer.indexOf(idx) >= 0;
      var isSelected = userAnswer && userAnswer.indexOf(idx) >= 0;
      if (isCorrect) cls += ' correct';
      else if (isSelected) cls += ' incorrect';
    } else if (userAnswer && userAnswer.indexOf(idx) >= 0) {
      cls += ' selected';
    }

    var marker = '';
    if (quizSubmitted) {
      var isCorrect2 = q.answer.indexOf(idx) >= 0;
      marker = isCorrect2 ? '✓' : '✗';
    } else if (userAnswer && userAnswer.indexOf(idx) >= 0) {
      marker = '✓';
    }

    html += '<div class="' + cls + '" data-index="' + idx + '" onclick="selectOption(' + idx + ')">';
    html += '<span class="option-marker">' + marker + '</span>';
    html += '<span class="option-text">' + escapeHTML(opt) + '</span>';
    html += '</div>';
  });
  html += '</div>';

  // 答案解析（已提交后显示）
  if (quizSubmitted && q.explanation) {
    html += '<div class="explanation-box">' + escapeHTML(q.explanation) + '</div>';
  }

  html += '</div>';

  // 导航按钮
  html += '<div class="quiz-nav">';
  if (currentIndex > 0) {
    html += '<button class="btn" onclick="prevQuestion()">上一题</button>';
  }
  if (currentIndex < quizQuestions.length - 1) {
    html += '<button class="btn btn-primary" onclick="nextQuestion()">下一题</button>';
  } else {
    if (!quizSubmitted) {
      html += '<button class="btn btn-primary" onclick="submitQuiz()">提交答卷</button>';
    }
  }
  html += '</div>';

  if (quizSubmitted && currentIndex === quizQuestions.length - 1) {
    html += '<div class="quiz-nav"><button class="btn btn-primary" onclick="showResult()">查看结果</button></div>';
  }

  container.innerHTML = html;
}

// --- 选择选项 ---
function selectOption(index) {
  if (quizSubmitted) return;

  var q = quizQuestions[currentIndex];
  var currentAnswer = userAnswers[currentIndex] || [];

  if (q.type === 'single' || q.type === 'boolean') {
    userAnswers[currentIndex] = [index];
  } else if (q.type === 'multi') {
    var pos = currentAnswer.indexOf(index);
    if (pos >= 0) {
      currentAnswer.splice(pos, 1);
    } else {
      currentAnswer.push(index);
    }
    userAnswers[currentIndex] = currentAnswer;
  }

  renderQuestion();
}

// --- 上一题 ---
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    scrollToTop();
  }
}

// --- 下一题 ---
function nextQuestion() {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
    scrollToTop();
  }
}

// --- 提交 ---
function submitQuiz() {
  quizSubmitted = true;
  renderQuestion();
  showResult();
}

// --- 显示结果 ---
function showResult() {
  var container = document.getElementById('quiz-result');
  container.classList.remove('hidden');
  document.getElementById('quiz-questions').classList.add('hidden');

  var correct = 0;
  var wrong = 0;
  var unanswered = 0;

  quizQuestions.forEach(function(q, i) {
    var answer = userAnswers[i];
    if (!answer || answer.length === 0) {
      unanswered++;
    } else if (arraysEqual(answer.sort(), q.answer.slice().sort())) {
      correct++;
    } else {
      wrong++;
    }
  });

  var total = quizQuestions.length;
  var score = Math.round(correct / total * 100);
  var message = getScoreMessage(score);

  var html = '';
  html += '<div class="quiz-result">';
  html += '<div class="result-score">' + score + '</div>';
  html += '<div class="result-label">分</div>';
  html += '<div class="result-detail">';
  html += '<div class="result-stat"><div class="stat-value" style="color:var(--color-success)">' + correct + '</div><div class="stat-label">正确</div></div>';
  html += '<div class="result-stat"><div class="stat-value" style="color:var(--color-error)">' + wrong + '</div><div class="stat-label">错误</div></div>';
  html += '<div class="result-stat"><div class="stat-value" style="color:var(--color-text-dim)">' + unanswered + '</div><div class="stat-label">未答</div></div>';
  html += '</div>';
  html += '<div class="result-message">' + message + '</div>';
  html += '</div>';

  // 答案回顾
  html += '<div class="answer-review">';
  html += '<h3>答案解析</h3>';
  quizQuestions.forEach(function(q, i) {
    var answer = userAnswers[i];
    var isCorrect = answer && arraysEqual(answer.slice().sort(), q.answer.slice().sort());
    var statusClass = isCorrect ? 'correct-status' : 'wrong-status';
    var statusText = isCorrect ? '✓ 正确' : (answer && answer.length > 0 ? '✗ 错误' : '— 未答');

    html += '<div class="review-item">';
    html += '<div class="review-status ' + statusClass + '">' + statusText + '</div>';
    html += '<div class="review-question">' + (i + 1) + '. ' + escapeHTML(q.question) + '</div>';
    html += '<div class="review-answer">正确答案：' + q.answer.map(function(a) { return escapeHTML(q.options[a]); }).join('、') + '</div>';
    if (q.explanation) {
      html += '<div class="review-answer" style="margin-top:4px">' + escapeHTML(q.explanation) + '</div>';
    }
    html += '</div>';
  });
  html += '</div>';

  container.innerHTML = html;
  scrollToTop();
}

function getScoreMessage(score) {
  if (score >= 90) return '非常出色！你对长征历史有着深入的了解，每一段征程都铭记在心。';
  if (score >= 70) return '表现不错！你对长征有了基本的了解，建议回到展馆继续深入学习。';
  if (score >= 50) return '还需努力！长征是一部波澜壮阔的史诗，多回展馆看看会有更多收获。';
  return '继续加油！建议回到展馆仔细浏览各个展厅，再来挑战一次。';
}

// --- 重置 ---
function resetQuiz() {
  quizQuestions = [];
  currentIndex = 0;
  userAnswers = [];
  quizSubmitted = false;

  document.getElementById('quiz-welcome').classList.remove('hidden');
  document.getElementById('quiz-questions').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('btn-generate').style.display = 'block';
  document.getElementById('btn-retry').style.display = 'none';
}

// --- 辅助函数 ---
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function scrollToTop() {
  document.getElementById('quiz-main').scrollIntoView({ behavior: 'smooth' });
}