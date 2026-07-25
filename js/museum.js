// ============================================================
// 展馆页面逻辑
// ============================================================

// --- 全局状态 ---
let map = null;
let routeLayers = {};
let nodeMarkers = {};
let animationTimer = null;
let isAnimating = false;
let animationPaused = false;
let animationSpeed = 500;
let animationIndex = 0;
let allSortedNodes = [];
let personTypeFilter = 'all';
let catalogModule = 'persons';
let catalogQuery = '';

// 用户交互记录（用于问卷组卷）
let userSelections = {
  eventIds: [],
  personIds: [],
  placeIds: []
};

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', initMuseum);

function initMuseum() {
  loadUserSelections();
  renderMetrics();
  renderHallNav();
  renderCuratorialLanes();
  initMap();
  renderMapLegend();
  renderPersonBrowser();
  renderCatalog();
  bindNavHighlight();
  document.getElementById('museum-loading').classList.add('hidden');
}

// --- 用户选择记录 ---
function loadUserSelections() {
  try {
    var stored = sessionStorage.getItem('red_map_selections');
    if (stored) {
      userSelections = JSON.parse(stored);
    }
  } catch (e) {
    userSelections = { eventIds: [], personIds: [], placeIds: [] };
  }
}

function saveUserSelections() {
  try {
    sessionStorage.setItem('red_map_selections', JSON.stringify(userSelections));
  } catch (e) {}
}

function recordEventSelection(eventId) {
  if (userSelections.eventIds.indexOf(eventId) < 0) {
    userSelections.eventIds.push(eventId);
    var evt = getEvent(eventId);
    if (evt && evt.location && evt.location.name) {
      if (userSelections.placeIds.indexOf(evt.location.name) < 0) {
        userSelections.placeIds.push(evt.location.name);
      }
    }
    saveUserSelections();
  }
}

function recordPersonSelection(personId) {
  if (userSelections.personIds.indexOf(personId) < 0) {
    userSelections.personIds.push(personId);
    saveUserSelections();
  }
}

// --- Hero 区域 ---
function renderMetrics() {
  var container = document.getElementById('metrics-row');
  var martyrs = PERSONS.filter(function(p) { return p.personType === '烈士'; });
  var costs = EVENTS.filter(function(e) { return e.costType; });

  var metrics = [
    { value: EVENTS.length, label: '事件条目' },
    { value: PERSONS.length, label: '人物档案' },
    { value: martyrs.length, label: '英烈展板' },
    { value: costs.length, label: '代价记录' },
  ];

  container.innerHTML = metrics.map(function(m) {
    return '<div class="metric-item"><span class="metric-value">' + m.value + '</span><span class="metric-label">' + m.label + '</span></div>';
  }).join('');
}

function renderHallNav() {
  var nav = document.getElementById('hall-nav');
  var halls = MUSEUM.halls;
  var links = halls.map(function(h) {
    return '<a href="#' + escapeAttr(h.id) + '">' + escapeHTML(h.title) + '</a>';
  });
  nav.innerHTML = links.join('');
}

function renderCuratorialLanes() {
  var box = document.getElementById('curatorial-lanes');
  var lanes = [
    { title: '时间线', value: EVENTS.length + ' 条史实', body: '路线、战役、会议、渡河与会师，把长征写成一条不断转向的行进史。', href: '#route' },
    { title: '人物透镜', value: PERSONS.length + ' 个档案', body: '把目光从"部队"收回到"人"：每个名字都有自己的抉择、伤痛与坚持。', href: '#persons' },
    { title: '总览层', value: '信息平面铺开', body: '路线、战役、会师与人物，按时间与部队分类铺开，让纪念不止于叙述，也经得起回看与考证。', href: '#archive' },
  ];

  box.innerHTML = lanes.map(function(lane) {
    return '<a class="lane-card" href="' + escapeAttr(lane.href) + '"><span>' + escapeHTML(lane.title) + '</span><strong>' + escapeHTML(lane.value) + '</strong><p>' + escapeHTML(lane.body) + '</p></a>';
  }).join('');
}

// --- 地图初始化 ---
function initMap() {
  map = L.map('map', {
    center: [31.5, 106],
    zoom: 6,
    zoomControl: true,
    attributionControl: false
  });

  // 使用高德地图中文瓦片
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    maxZoom: 18,
    minZoom: 4
  }).addTo(map);

  // 绘制各部队路线
  Object.keys(ROUTES).forEach(function(forceId) {
    renderRoute(forceId);
  });

  // 调整地图视野
  var allCoords = [];
  Object.values(ROUTES).forEach(function(route) {
    allCoords = allCoords.concat(route.path);
  });
  if (allCoords.length > 0) {
    map.fitBounds(L.latLngBounds(allCoords), { padding: [40, 40] });
  }
}

function renderRoute(forceId) {
  var route = ROUTES[forceId];
  if (!route) return;

  // 绘制路径线
  var polyline = L.polyline(route.path, {
    color: route.color,
    weight: 3,
    opacity: 0.8,
    dashArray: forceId === 'red_first' ? null : '8, 6'
  }).addTo(map);

  polyline.bindPopup('<strong>' + route.name + '</strong>');

  // 按坐标分组节点，解决重叠问题
  var coordGroups = {};
  route.nodes.forEach(function(node) {
    var key = node.coordinates[0].toFixed(4) + ',' + node.coordinates[1].toFixed(4);
    if (!coordGroups[key]) {
      coordGroups[key] = [];
    }
    coordGroups[key].push(node);
  });

  if (!nodeMarkers[forceId]) nodeMarkers[forceId] = [];

  // 为每组坐标创建标记
  Object.keys(coordGroups).forEach(function(key) {
    var group = coordGroups[key];
    var coords = group[0].coordinates;

    if (group.length === 1) {
      // 单个事件节点
      var node = group[0];
      var evt = getEvent(node.eventId);
      if (!evt) return;

      var marker = L.circleMarker(coords, {
        radius: 6,
        fillColor: route.color,
        color: '#fff',
        weight: 1.5,
        fillOpacity: 0.9
      }).addTo(map);

      var popupHTML = buildPopupHTML(evt);
      marker.bindPopup(popupHTML);

      marker.on('click', function() {
        recordEventSelection(node.eventId);
      });

      nodeMarkers[forceId].push({ marker: marker, eventId: node.eventId, coords: coords, forceId: forceId });
    } else {
      // 多个事件在同一位置，偏移显示
      var offsets = getOffsets(group.length);
      group.forEach(function(node, idx) {
        var evt = getEvent(node.eventId);
        if (!evt) return;

        var offsetCoords = [coords[0] + offsets[idx][0], coords[1] + offsets[idx][1]];

        var marker = L.circleMarker(offsetCoords, {
          radius: 6,
          fillColor: route.color,
          color: '#fff',
          weight: 1.5,
          fillOpacity: 0.9
        }).addTo(map);

        var popupHTML = buildPopupHTML(evt);
        marker.bindPopup(popupHTML);

        marker.on('click', function() {
          recordEventSelection(node.eventId);
        });

        nodeMarkers[forceId].push({ marker: marker, eventId: node.eventId, coords: offsetCoords, forceId: forceId });
      });
    }
  });
}

function getOffsets(count) {
  // 为重叠节点生成微小偏移
  var offsets = [];
  var step = 0.015;
  if (count === 2) {
    offsets = [[0, step], [0, -step]];
  } else if (count === 3) {
    offsets = [[0, step * 1.5], [step * 1.2, -step * 0.8], [-step * 1.2, -step * 0.8]];
  } else if (count === 4) {
    offsets = [[step, step], [-step, step], [step, -step], [-step, -step]];
  } else {
    for (var i = 0; i < count; i++) {
      var angle = (2 * Math.PI * i) / count;
      offsets.push([step * Math.cos(angle), step * Math.sin(angle)]);
    }
  }
  return offsets;
}

function buildPopupHTML(evt) {
  var html = '<div class="popup-type">' + escapeHTML(evt.type || '事件') + '</div>';
  html += '<h4>' + escapeHTML(evt.title) + '</h4>';
  html += '<p>' + escapeHTML(evt.date) + ' · ' + escapeHTML(evt.location.name) + '</p>';
  if (evt.description) {
    var desc = evt.description.length > 80 ? evt.description.substring(0, 80) + '...' : evt.description;
    html += '<p style="margin-top:4px">' + escapeHTML(desc) + '</p>';
  }
  if (evt.costType) {
    html += '<p style="margin-top:4px;color:#b71c1c;font-size:11px">' + escapeHTML(evt.costType) + '</p>';
  }
  if (evt.spirit) {
    html += '<div class="popup-spirit"><span class="popup-spirit-icon">★</span>' + escapeHTML(evt.spirit) + '</div>';
  }
  return html;
}

function renderMapLegend() {
  var legend = document.getElementById('map-legend');
  var items = SUBJECTS.map(function(s) {
    return '<div class="legend-item"><span class="legend-dot" style="background:' + s.color + '"></span>' + escapeHTML(s.shortName) + '</div>';
  });
  legend.innerHTML = items.join('');
}

// --- 时间线动画（带进度条） ---
function toggleAnimation() {
  if (isAnimating && !animationPaused) {
    pauseAnimation();
    return;
  }
  if (isAnimating && animationPaused) {
    resumeAnimation();
    return;
  }
  startTimelineAnimation();
}

function startTimelineAnimation() {
  // 构建排序节点列表
  allSortedNodes = [];
  Object.keys(ROUTES).forEach(function(forceId) {
    var markers = nodeMarkers[forceId] || [];
    markers.forEach(function(item) {
      var evt = getEvent(item.eventId);
      allSortedNodes.push({
        forceId: forceId,
        markerItem: item,
        event: evt,
        date: evt ? evt.date : ''
      });
    });
  });

  // 按日期排序
  allSortedNodes.sort(function(a, b) {
    return a.date.localeCompare(b.date);
  });

  // 初始隐藏所有节点
  Object.keys(nodeMarkers).forEach(function(forceId) {
    nodeMarkers[forceId].forEach(function(item) {
      item.marker.setStyle({ fillOpacity: 0, opacity: 0, radius: 0 });
    });
  });

  // 重置状态
  animationIndex = 0;
  isAnimating = true;
  animationPaused = false;
  document.getElementById('btn-play').textContent = '暂停动画';

  // 显示进度条
  var bar = document.getElementById('timeline-bar');
  bar.style.display = 'block';
  document.getElementById('timeline-progress').style.width = '0%';

  animateNextNode();
}

function animateNextNode() {
  if (!isAnimating || animationPaused) return;

  if (animationIndex >= allSortedNodes.length) {
    finishAnimation();
    return;
  }

  var item = allSortedNodes[animationIndex];
  var markerItem = item.markerItem;
  var evt = item.event;

  // 让节点出现
  markerItem.marker.setStyle({ fillOpacity: 0.9, opacity: 1, radius: 6 });
  markerItem.marker.setRadius(10);
  setTimeout(function() {
    markerItem.marker.setRadius(6);
  }, animationSpeed * 0.6);

  // 更新进度条
  var progress = ((animationIndex + 1) / allSortedNodes.length) * 100;
  document.getElementById('timeline-progress').style.width = progress + '%';

  // 更新标签
  var label = evt ? evt.date + ' ' + evt.title : '';
  document.getElementById('timeline-label').textContent = label;

  animationIndex++;
  animationTimer = setTimeout(animateNextNode, animationSpeed);
}

function pauseAnimation() {
  animationPaused = true;
  document.getElementById('btn-play').textContent = '继续播放';
  if (animationTimer) {
    clearTimeout(animationTimer);
    animationTimer = null;
  }
}

function resumeAnimation() {
  animationPaused = false;
  document.getElementById('btn-play').textContent = '暂停动画';
  animateNextNode();
}

function finishAnimation() {
  stopAnimation();
  document.getElementById('timeline-label').textContent = '动画播放完毕';
  // 进度条保持一段时间后隐藏
  setTimeout(function() {
    document.getElementById('timeline-bar').style.display = 'none';
  }, 3000);
}

function stopAnimation() {
  isAnimating = false;
  animationPaused = false;
  document.getElementById('btn-play').textContent = '播放路线动画';
  if (animationTimer) {
    clearTimeout(animationTimer);
    animationTimer = null;
  }
  // 恢复所有节点可见
  Object.keys(nodeMarkers).forEach(function(forceId) {
    nodeMarkers[forceId].forEach(function(item) {
      item.marker.setStyle({ fillOpacity: 0.9, opacity: 1, radius: 6 });
    });
  });
  document.getElementById('timeline-bar').style.display = 'none';
}

function resetMap() {
  stopAnimation();
  var allCoords = [];
  Object.values(ROUTES).forEach(function(route) {
    allCoords = allCoords.concat(route.path);
  });
  if (allCoords.length > 0) {
    map.fitBounds(L.latLngBounds(allCoords), { padding: [40, 40] });
  }
}

function setSpeed(val) {
  animationSpeed = parseInt(val);
}

// --- 人物头像渲染 ---
function renderPersonFace(person, className) {
  if (person.portrait && person.portrait.trim() !== '') {
    return '<div class="' + className + ' portrait-img" style="background-image:url(' + escapeAttr(person.portrait) + ')"></div>';
  }
  return '<div class="' + className + '">' + escapeHTML(person.name.slice(0, 1)) + '</div>';
}

// --- 人物时间线 ---
function renderPersonBrowser() {
  var filters = document.getElementById('person-filters');
  var list = document.getElementById('person-list');

  var types = ['all'];
  var seen = {};
  PERSONS.forEach(function(p) {
    if (!seen[p.personType]) {
      seen[p.personType] = true;
      types.push(p.personType);
    }
  });

  filters.innerHTML = types.map(function(t) {
    var cls = t === personTypeFilter ? ' active' : '';
    return '<button class="' + cls + '" data-type="' + escapeAttr(t) + '">' + escapeHTML(t === 'all' ? '全部' : t) + '</button>';
  }).join('');

  filters.querySelectorAll('button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      personTypeFilter = btn.dataset.type;
      renderPersonBrowser();
    });
  });

  var shown = personTypeFilter === 'all' ? PERSONS : PERSONS.filter(function(p) { return p.personType === personTypeFilter; });

  list.innerHTML = shown.map(function(person) {
    var subject = getSubject(person.forceId);
    return '<article class="person-card" data-person-id="' + escapeAttr(person.id) + '">' +
      renderPersonFace(person, 'person-avatar') +
      '<div class="person-info">' +
        '<span class="person-type">' + escapeHTML(person.personType) + '</span>' +
        '<h3>' + escapeHTML(person.name) + '</h3>' +
        '<p>' + escapeHTML(person.summary) + '</p>' +
      '</div>' +
    '</article>';
  }).join('');

  list.querySelectorAll('.person-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var pid = card.dataset.personId;
      recordPersonSelection(pid);
      showPersonModal(pid);
    });
  });
}

// --- 人物详情弹窗 ---
function showPersonModal(personId) {
  var person = getPerson(personId);
  if (!person) return;

  var subject = getSubject(person.forceId);
  var events = getPersonEvents(personId);
  var modal = document.getElementById('person-modal');
  var content = document.getElementById('modal-content');

  var portraitSection = '';
  if (person.portrait && person.portrait.trim() !== '') {
    portraitSection = '<div class="modal-portrait"><img src="' + escapeAttr(person.portrait) + '" alt="' + escapeAttr(person.name) + '" onerror="this.style.display=\'none\'"></div>';
  }

  content.innerHTML =
    '<button class="modal-close" onclick="closeModalDirect()">&times;</button>' +
    portraitSection +
    '<h3>' + escapeHTML(person.name) + '</h3>' +
    '<div class="modal-subtitle">' + escapeHTML(person.personType) + ' · ' + escapeHTML(person.hometown) + ' · ' + personLifespan(person) + '</div>' +
    '<div class="modal-body">' + escapeHTML(person.summary) + '</div>' +
    '<div class="modal-meta">' +
      '<span>部队：' + escapeHTML(subject ? subject.shortName : '未知') + '</span>' +
      '<span>关联事件：' + events.length + ' 个</span>' +
    '</div>' +
    '<div class="modal-tags">' + (person.themeTags || []).map(function(t) { return '<span>' + escapeHTML(t) + '</span>'; }).join('') + '</div>';

  if (events.length > 0) {
    content.innerHTML += '<div style="margin-top:16px"><h4 style="color:var(--color-gold);font-size:14px;margin-bottom:8px">关联事件</h4>';
    content.innerHTML += events.slice(0, 5).map(function(e) {
      return '<div style="font-size:13px;color:var(--color-text-muted);margin-bottom:4px">' + escapeHTML(e.date) + ' · ' + escapeHTML(e.title) + '</div>';
    }).join('');
    content.innerHTML += '</div>';
  }

  modal.classList.remove('hidden');
}

function closeModal(event) {
  if (event.target === document.getElementById('person-modal')) {
    document.getElementById('person-modal').classList.add('hidden');
  }
}

function closeModalDirect() {
  document.getElementById('person-modal').classList.add('hidden');
}

// --- 资料目录 ---
function renderCatalog() {
  renderCatalogTabs();
  bindCatalogSearch();
  renderCatalogContent();
}

function renderCatalogTabs() {
  var tabs = document.getElementById('catalog-tabs');
  var modules = [
    { id: 'persons', label: '人物', count: PERSONS.length },
    { id: 'places', label: '地点', count: getPlaceCount() },
    { id: 'events', label: '事件', count: EVENTS.length },
    { id: 'forces', label: '部队', count: SUBJECTS.length },
  ];

  tabs.innerHTML = modules.map(function(m) {
    var cls = m.id === catalogModule ? ' active' : '';
    return '<button class="' + cls + '" data-module="' + escapeAttr(m.id) + '"><span>' + escapeHTML(m.label) + '</span><strong>' + m.count + '</strong></button>';
  }).join('');

  tabs.querySelectorAll('button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      catalogModule = btn.dataset.module;
      catalogQuery = '';
      document.getElementById('catalog-search').value = '';
      renderCatalog();
    });
  });
}

function getPlaceCount() {
  var places = {};
  EVENTS.forEach(function(e) {
    if (e.location && e.location.name) places[e.location.name] = true;
  });
  return Object.keys(places).length;
}

function bindCatalogSearch() {
  var search = document.getElementById('catalog-search');
  search.oninput = function() {
    catalogQuery = search.value.trim();
    renderCatalogContent();
  };
}

function renderCatalogContent() {
  var stats = document.getElementById('catalog-stats');
  var grid = document.getElementById('catalog-grid');
  var items = getCatalogItems();
  var shown = filterCatalogItems(items);

  stats.innerHTML = '共 ' + items.length + ' 条，当前显示 ' + shown.length + ' 条';

  if (shown.length === 0) {
    grid.innerHTML = '<div class="catalog-empty">没有匹配的条目</div>';
    return;
  }

  grid.innerHTML = shown.map(function(item) {
    return catalogCard(item);
  }).join('');

  bindCatalogCardEvents();
}

function getCatalogItems() {
  if (catalogModule === 'events') return getEventModules();
  if (catalogModule === 'forces') return getForceModules();
  if (catalogModule === 'places') return getPlaceModules();
  return getPersonModules();
}

function getPersonModules() {
  return PERSONS.map(function(p) {
    var subject = getSubject(p.forceId);
    var events = getPersonEvents(p.id);
    return {
      kind: 'persons',
      id: p.id,
      title: p.name,
      subtitle: p.personType,
      body: p.summary,
      accent: subject ? subject.color : '#8B0000',
      chips: [subject ? subject.shortName : '', p.hometown, personLifespan(p), events.length + ' 个关联事件'].filter(Boolean),
      tags: p.themeTags || [],
      searchText: [p.name, p.nameEn, p.personType, p.hometown, p.summary].concat(p.themeTags || []).join(' '),
      person: p
    };
  });
}

function getEventModules() {
  return EVENTS.map(function(e) {
    var subject = getSubject(e.forceId);
    return {
      kind: 'events',
      id: e.id,
      title: e.title,
      subtitle: e.type,
      body: e.description,
      accent: subject ? subject.color : '#8B0000',
      chips: [e.date, e.location.name, subject ? subject.shortName : '', e.certainty].filter(Boolean),
      tags: [e.type],
      searchText: [e.title, e.description, e.type, e.location.name].join(' '),
      event: e
    };
  });
}

function getPlaceModules() {
  var places = {};
  EVENTS.forEach(function(e) {
    var name = e.location.name;
    if (!places[name]) {
      places[name] = { name: name, events: [], forceIds: [] };
    }
    places[name].events.push(e);
    if (e.forceId && places[name].forceIds.indexOf(e.forceId) < 0) {
      places[name].forceIds.push(e.forceId);
    }
  });

  return Object.values(places).map(function(p) {
    var titles = p.events.slice(0, 3).map(function(e) { return e.title; });
    return {
      kind: 'places',
      id: p.name,
      title: p.name,
      body: titles.join(' / '),
      chips: [p.events.length + ' 个事件', p.events[0].date],
      searchText: [p.name].concat(titles).join(' '),
      place: p
    };
  });
}

function getForceModules() {
  return SUBJECTS.map(function(s) {
    var events = EVENTS.filter(function(e) { return e.forceId === s.id; });
    var persons = PERSONS.filter(function(p) { return p.forceId === s.id; });
    return {
      kind: 'forces',
      id: s.id,
      title: s.shortName,
      subtitle: '部队',
      body: s.description,
      accent: s.color,
      chips: [events.length + ' 个事件', persons.length + ' 个人物', s.leader].filter(Boolean),
      tags: s.subUnits || [],
      searchText: [s.name, s.shortName, s.leader, s.description].concat(s.subUnits || []).join(' '),
      subject: s
    };
  });
}

function filterCatalogItems(items) {
  if (!catalogQuery) return items;
  var q = catalogQuery.toLowerCase();
  return items.filter(function(item) {
    return (item.searchText || '').toLowerCase().indexOf(q) >= 0;
  });
}

function catalogCard(item) {
  var html = '<article class="catalog-card" style="--accent:' + (item.accent || '#8B0000') + '" data-kind="' + item.kind + '" data-id="' + escapeAttr(item.id) + '">';
  html += '<div class="module-kicker"><span>' + escapeHTML(item.subtitle || '') + '</span><strong>' + escapeHTML(item.chips[0] || '') + '</strong></div>';
  html += '<h3>' + escapeHTML(item.title) + '</h3>';
  html += '<p>' + escapeHTML(item.body || '') + '</p>';
  if (item.chips.length > 1) {
    html += '<div class="module-meta">' + item.chips.slice(1).map(function(c) { return '<span>' + escapeHTML(c) + '</span>'; }).join('') + '</div>';
  }
  if (item.tags && item.tags.length > 0) {
    html += '<div class="tag-row">' + item.tags.slice(0, 5).map(function(t) { return '<span>' + escapeHTML(t) + '</span>'; }).join('') + '</div>';
  }
  html += '</article>';
  return html;
}

function bindCatalogCardEvents() {
  document.querySelectorAll('.catalog-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var kind = card.dataset.kind;
      var id = card.dataset.id;
      if (kind === 'persons') {
        recordPersonSelection(id);
        showPersonModal(id);
      } else if (kind === 'events') {
        recordEventSelection(id);
        var evt = getEvent(id);
        if (evt && evt.location && evt.location.coordinates && map) {
          map.setView(evt.location.coordinates, 10, { animate: true });
          document.getElementById('route').scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// --- 导航高亮 ---
function bindNavHighlight() {
  var sections = document.querySelectorAll('.hall-section[id], .hero-section[id]');
  var navLinks = document.querySelectorAll('#hall-nav a');

  window.addEventListener('scroll', function() {
    var current = '';
    sections.forEach(function(section) {
      var top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}