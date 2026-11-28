/* 서울 착륙 — 화면 렌더링 · 언어 전환 · Trip Finder · 여행지 비교
   콘텐츠: content/ko.js · zh.js · ja.js (가이드 문구), content/places.js (여행지 9곳),
           content/quiz.js (Trip Finder 점수), content/shared.js (링크 · 영상 · 공통 값)
   새 언어를 더하려면 content/en.js 를 만들고 LANGS 에 ["en", "English"] 를 추가하면 돼요. */
(function () {
  "use strict";
  var SL = window.SL, S = SL.shared, Q = SL.quiz;
  var LANGS = [["ko", "한국어"], ["zh", "中文"], ["ja", "日本語"], ["en", "English"]].filter(function (l) { return SL[l[0]]; });
  var STAGES = ["before", "during", "tips", "where"];
  var STAGE_EN = { before: "BEFORE TRIP", during: "DURING TRIP", tips: "TRAVEL TIPS", where: "WHERE TO GO" };
  var ORDER = Object.keys(Q.dest);
  var LBL = { what: "WHAT", how: "HOW", step: "STEP BY STEP", foreigner: "FOREIGNER TIP", real: "REAL TIP", watch: "WATCH", official: "OFFICIAL INFO", situation: "REAL SITUATION", ifneed: "IF YOU NEED..." };
  /* 단계별 배경 사진 — 이미 출처가 정리된 여행지 사진을 재사용(출처는 사진 아래에 함께 표기) */
  var STAGE_PHOTO = { before: "seongbuk", during: "wonju", tips: "asan", where: "gangneung", help: "chungju" };
  /* 디자인 개편으로 새로 필요한 짧은 문구 (3개 언어) */
  var EXTRA = {
    ko: { stagesKicker: "준비부터 귀국까지", open: "자세히 보기", photo: "사진", credits: "사진 출처 전체 보기", footStages: "여행 단계", footHelp: "문제 해결", footEmg: "긴급 · 도움 전화", listCredit: "카드 사진의 촬영자 · 라이선스는 각 여행지 상세보기에서 확인 가능.",
      sayKo: "상황별 회화 예문", searchMap: "NAVER Map에서 검색", dietTip: "채식 · 할랄 · 알레르기 TIP", quickNow: "지금 이런 문제가 있다면", quickMore: "여행 단계별 문제",
      pb: { situation: "지금 상황", fast: "가장 빠른 방법", search: "직접 검색하려면", check: "추가 확인 사항", say: "현장에서 필요하면", fallback: "해결되지 않았다면", when: "언제 쓰나요?", open: "열기", steps: "진행 순서", fbText: "문의처를 모르겠다면 1330 전화 · 채팅 이용. 통역도 지원.", smart: "Smart Help에 고민 적기", call: "1330 전화하기" } },
    zh: { stagesKicker: "从准备到回国", open: "查看详情", photo: "图片", credits: "查看全部图片来源", footStages: "旅行阶段", footHelp: "问题解决", footEmg: "紧急 · 求助电话", listCredit: "卡片图片的作者与许可信息，标注在各目的地的详情页中。",
      sayKo: "可以这样说", searchMap: "在 NAVER 地图搜索", dietTip: "素食 · 清真 · 过敏 TIP", quickNow: "现在遇到这些问题？", quickMore: "按旅行阶段的问题",
      pb: { situation: "现在的情况", fast: "最快的方法", search: "想自己搜索的话", check: "也要确认这些", say: "在现场需要的话", fallback: "还是解决不了的话", when: "什么时候用？", open: "打开", steps: "按这个顺序试试", fbText: "不知道该问哪里时，拨打或在线咨询 1330，也能帮忙翻译。", smart: "在 Smart Help 写下问题", call: "拨打 1330" } },
    ja: { stagesKicker: "準備から帰国まで", open: "くわしく見る", photo: "写真", credits: "写真の出典をすべて見る", footStages: "旅のステップ", footHelp: "トラブル解決", footEmg: "緊急 · 相談ダイヤル", listCredit: "カード写真の撮影者・ライセンスは、各旅先の詳細ページに記載しています。",
      sayKo: "こう伝えてみよう", searchMap: "NAVER マップで検索", dietTip: "ベジタリアン · ハラール · アレルギー TIP", quickNow: "こんなことでお困りですか？", quickMore: "旅行の各ステップで起こりやすい困りごと",
      pb: { situation: "いまの状況", fast: "いちばん早い方法", search: "自分で検索するなら", check: "これも確認しましょう", say: "現地で必要なら", fallback: "それでも解決しないなら", when: "いつ使う？", open: "開く", steps: "この順番で試してみましょう", fbText: "どこに聞けばいいか分からないときは、1330 に電話かチャットを。通訳も手伝ってくれます。", smart: "Smart Help に困りごとを書く", call: "1330 に電話" } },
    en: { stagesKicker: "From planning to going home", open: "See details", photo: "Photo", credits: "See all photo credits", footStages: "Travel stages", footHelp: "Get help", footEmg: "Emergency · help lines", listCredit: "Photographers and licenses for card photos are listed on each destination's detail page.",
      sayKo: "Say it like this", searchMap: "Search on NAVER Map", dietTip: "Vegetarian · halal · allergy tips", quickNow: "If you have one of these problems now", quickMore: "Problems by travel stage",
      pb: { situation: "Your situation", fast: "Fastest way", search: "If you'd rather search yourself", check: "Also check", say: "If you need it on the spot", fallback: "Still stuck?", when: "When to use it", open: "Open", steps: "Try these steps in order", fbText: "Not sure who to ask? Call or chat with 1330. They can interpret for you too.", smart: "Describe it in Smart Help", call: "Call 1330" } }
  };
  function X() { return EXTRA[lang] || EXTRA.ko; }
  /* 첫 화면 사진: 남산 서울타워와 서울 도심 야경 (Wikimedia Commons, CC BY-SA 4.0) */
  var HERO_PHOTO = { src: "assets/seoul-hero.jpg", w: 3840, h: 2561, alt: { ko: "남산 서울타워와 서울 도심 야경", zh: "南山首尔塔与首尔市中心夜景", ja: "南山ソウルタワーとソウル都心の夜景", en: "N Seoul Tower and the Seoul city skyline at night" },
    author: "Chensiyuan", source: "https://commons.wikimedia.org/wiki/File:1_ansan_mountain_night_2018.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" };
  /* 예전 주소(#trip, #transport ...)로 들어와도 새 위치로 */
  var ALIAS = { trip: "where", transport: "before-card", "transport-card": "before-card", "transport-map": "before-apps", "transport-subway": "during-subway", "transport-bus": "during-bus", school: "home" };

  var SVG = function (body, vb) { return '<svg viewBox="' + (vb || "0 0 64 64") + '" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + "</svg>"; };
  var ICONS = {
    before: SVG('<rect x="12" y="18" width="40" height="36" rx="6"/><path d="M24 18v-6h16v6M12 32h40M28 32v6h8v-6"/>'),
    during: SVG('<rect x="14" y="7" width="36" height="40" rx="9"/><path d="M14 29h36M24 47l-6 9m22-9 6 9M24 14h16"/><circle cx="24" cy="38" r="2"/><circle cx="40" cy="38" r="2"/>'),
    tips: SVG('<path d="M32 8a16 16 0 0 0-9 29c2 2 3 4 3 7h12c0-3 1-5 3-7a16 16 0 0 0-9-29zM26 50h12M28 56h8"/>'),
    where: SVG('<path d="M32 57s-17-15-17-29a17 17 0 0 1 34 0c0 14-17 29-17 29z"/><circle cx="32" cy="28" r="6"/>'),
    play: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="currentColor"/><path d="M19 15l15 9-15 9z" fill="var(--surface)"/></svg>',
    ext: '<span class="ext" aria-hidden="true">↗</span>',
    phone: SVG('<path d="M20 8h8l4 12-6 4a30 30 0 0 0 14 14l4-6 12 4v8a4 4 0 0 1-4 4C29 56 8 35 8 12a4 4 0 0 1 4-4z"/>', "0 0 64 64"),
    help: SVG('<circle cx="32" cy="32" r="24"/><path d="M25 25a7 7 0 1 1 10 6c-2 1-3 3-3 5M32 45v1"/>')
  };

  /* 컬러 이모지 대신 같은 굵기와 색으로 표시하는 장식용 선 아이콘. */
  var QUIET_ICONS = {
    card: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M7 15h4"/>',
    subway: '<rect x="5" y="3" width="14" height="15" rx="4"/><path d="M5 11h14M9 6h6M8 18l-2 3m10-3 2 3"/><path d="M8 14h1m6 0h1"/>',
    bus: '<rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M8 3v8m8-8v8M7 19v2m10-2v2M7 15h2m6 0h2"/>',
    taxi: '<path d="M4 11l2-5h12l2 5M9 6V3h6v3"/><rect x="3" y="11" width="18" height="8" rx="2"/><path d="M6 19v2m12-2v2M6 15h2m8 0h2"/>',
    food: '<path d="M4 3v5a3 3 0 0 0 6 0V3M7 3v18M20 3c-3 1-5 5-5 9h5M20 3v18"/>',
    reserve: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18M8 14h2m4 0h2m-8 3h2"/>',
    popup: '<path d="M5 8h14l2 13H3L5 8zM8 8V6a4 4 0 0 1 8 0v2"/>',
    map: '<path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2V5zM9 3v16m6-14v16"/>',
    sos: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6m0 4v.1"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    train: '<rect x="5" y="3" width="14" height="15" rx="4"/><path d="M5 10h14M12 3v7M8 18l-2 3m10-3 2 3M8 14h1m6 0h1"/>',
    culture: '<path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-4c-1-1 0-2 1-2h2a4 4 0 0 0 4-4c0-5-4-8-9-8z"/><circle cx="7" cy="11" r=".8"/><circle cx="10" cy="7" r=".8"/><circle cx="15" cy="7" r=".8"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M16 16l5 5"/>',
    tip: '<path d="M9 17c0-3-4-4-4-8a7 7 0 0 1 14 0c0 4-4 5-4 8H9zM9 20h6m-5 3h4"/>',
    bag: '<rect x="5" y="6" width="14" height="15" rx="4"/><path d="M9 6V4a3 3 0 0 1 6 0v2M8 13h8v5H8v-5zM8 10h8"/>',
    passport: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="4"/><path d="M8 10h8M12 6c-2 2-2 6 0 8m0-8c2 2 2 6 0 8M9 18h6"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2M9 10a5 5 0 0 1 6 0m-4 3h2"/>',
    home: '<path d="M3 10l9-7 9 7M5 9v12h14V9M9 21v-7h6v7"/>',
    plane: '<path d="M21 3L3 10l7 3 3 8 8-18zM10 13l5-5"/>',
    /* 2026.11 보완: 식습관 · 기도 공간 · 건강 · 여행 Journey */
    leaf: '<path d="M5 20c-1-9 5-15 15-15 0 9-5 15-14 15"/><path d="M5 20c3-5 6-8 10-10"/>',
    moon: '<path d="M19 15.5A8 8 0 1 1 9.5 4.2a6.3 6.3 0 0 0 9.5 11.3z"/><path d="M17 4.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z"/>',
    alert: '<path d="M12 3.5l9 16H3l9-16z"/><path d="M12 10v4m0 3v.1"/>',
    pray: '<path d="M4 21h16M6 21v-7a6 6 0 0 1 12 0v7M12 4v4M10 21v-3a2 2 0 0 1 4 0v3"/>',
    pill: '<path d="M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7l-6 6zM7 10l7 7"/>',
    hospital: '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/>',
    luggage: '<rect x="6" y="7" width="12" height="13" rx="2.5"/><path d="M9.5 7V4h5v3M10 11v5m4-5v5M8.5 20v1.5m7-1.5v1.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
    ticket: '<path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4V7z"/><path d="M14 8v1.5m0 2v1.5m0 2v1"/>',
    lifebuoy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.8"/><path d="M5.6 5.6l3.7 3.7m5.4 5.4l3.7 3.7m0-12.8l-3.7 3.7m-5.4 5.4l-3.7 3.7"/>',
    takeoff: '<path d="M3 21h18"/><path d="M5 16.5l-2.2-3.3 1.8-.5 2.2 1.5 3.4-1.2-3.5-5.3 2.1-.6 5.8 4.6 4-1.4a1.7 1.7 0 0 1 1.1 3.2L7.5 18z"/>'
  };
  function quietIcon(name) {
    if (!QUIET_ICONS[name]) return "";
    return '<span class="quiet-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" focusable="false">' + QUIET_ICONS[name] + '</svg></span>';
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function lines(s) { return esc(s).replace(/\n/g, "<br>"); }
  function U() { return SL[lang].ui; }
  function P(key) { return SL.places[lang][key]; }
  function helpContent() { return SL.help[lang]; }
  function helpItem(key) { return helpContent().items.find(function (item) { return item.id === key; }); }
  function surveyUI() { return SL.survey[lang]; }
  function labelledCopy(text, label) { return '<button type="button" class="mini-btn" data-copy="' + esc(text) + '">' + esc(label) + '</button>'; }
  function placeSearchText(key) {
    return LANGS.map(function(l){var p=SL.places[l[0]][key];return [p.name,p.tag,p.themes.join(' '),p.sights.join(' ')].join(' ');}).join(' ').toLowerCase();
  }
  var placeQuery = '', placeDuration = '';
  function placeFilters() {
    var t=surveyUI();
    return '<div class="place-filters"><label for="place-query">' + esc(t.filter) + '</label><input type="search" id="place-query" value="' + esc(placeQuery) + '" placeholder="' + esc(t.filterHint) + '"><label class="sr-only" for="place-duration">' + esc(U().where.rows.duration) + '</label><select id="place-duration"><option value="">' + esc(t.all) + '</option>' + U().where.groups.map(function(g,i){return '<option value="' + i + '"' + (String(i)===placeDuration?' selected':'') + '>' + esc(g) + '</option>';}).join('') + '</select><p id="place-filter-status" role="status"></p></div>';
  }
  function filterPlaces() {
    var count=0, q=placeQuery.toLowerCase().trim(), words=q.split(/\s+/).filter(Boolean);
    document.querySelectorAll('[data-place-key]').forEach(function(el){var key=el.getAttribute('data-place-key'), text=placeSearchText(key);var yes=(!placeDuration || String(Q.dest[key].dur)===placeDuration) && words.every(function(w){return text.indexOf(w)>=0;});el.hidden=!yes;if(yes)count++;});
    document.querySelectorAll('.pgroup').forEach(function(g){g.hidden=!Array.from(g.querySelectorAll('[data-place-key]')).some(function(el){return !el.hidden;});});
    var status=document.getElementById('place-filter-status');if(status)status.textContent=count?surveyUI().found.replace('{n}',count):surveyUI().none;
  }
  function translationForm() {
    var t=surveyUI();
    return '<form class="quick-translate" action="https://translate.google.com/" method="get" target="_blank" rel="noopener noreferrer"><label for="translate-text">' + esc(t.text) + '</label><textarea id="translate-text" name="text" required maxlength="1500" rows="4"></textarea><input type="hidden" name="sl" value="auto"><input type="hidden" name="op" value="translate"><label for="translate-target">' + esc(t.target) + '</label><select id="translate-target" name="tl"><option value="ko">한국어</option><option value="en">English</option><option value="ja">日本語</option><option value="zh-CN">中文</option></select><p>' + esc(t.translateNote) + '</p><div class="translate-actions"><button type="submit" class="button">' + esc(t.translateGo) + '</button>' + extLink('https://papago.naver.com',t.papago) + '</div></form>';
  }
  function climateMap() {
    return SL.climateAtlas.render(lang);
  }

  /* ---------- 언어 ---------- */
  function storedLang() {
    try { var v = localStorage.getItem("sl-lang"); if (v && SL[v]) return v; } catch (e) {}
    var n = (navigator.language || "ko").slice(0, 2);
    return SL[n] ? n : "ko";
  }
  var lang = storedLang();
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("sl-lang", l); } catch (e) {}
    render(false);
  }

  /* ---------- 링크 ---------- */
  function mapUrl(q) { return "https://map.naver.com/p/search/" + encodeURIComponent(q); }
  function linkHref(l) {
    if (l.url) return l.url;
    if (l.href) return S.links[l.href];
    if (l.map) return mapUrl(l.map);
    if (l.yt) return "https://www.youtube.com/results?search_query=" + encodeURIComponent(l.yt);
    return "#";
  }
  function extLink(href, label, cls) {
    return '<a class="' + (cls || "out") + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' +
      esc(label) + ICONS.ext + '<span class="sr-only"> (' + esc(U().newTab) + ")</span></a>";
  }
  function copyBtn(text) {
    return '<button type="button" class="mini-btn" data-copy="' + esc(text) + '">' + esc(U().copy) + "</button>";
  }
  function mapBtn(q) {
    return '<a class="mini-btn" href="' + esc(mapUrl(q)) + '" target="_blank" rel="noopener noreferrer">' + esc(U().map) + ICONS.ext + "</a>";
  }
  function tag(label, sub) {
    return '<p class="tag">' + esc(label) + (sub ? " <span>" + esc(sub) + "</span>" : "") + "</p>";
  }

  /* ---------- 영상 ---------- */
  function videoCard(v) {
    var T = U(), href, thumb = "", badge;
    if (v.ref) {
      var meta = S.videos[v.ref];
      href = meta.kind === "short" ? "https://www.youtube.com/shorts/" + meta.id : "https://www.youtube.com/watch?v=" + meta.id;
      thumb = '<img src="https://i.ytimg.com/vi/' + meta.id + '/hqdefault.jpg" alt="" loading="lazy">';
      badge = meta.kind === "short" ? T.short : T.video;
    } else {
      href = linkHref({ yt: v.query });
      badge = "YouTube";
    }
    return '<li><a class="video" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' +
      '<span class="thumb' + (v.ref ? "" : " search") + '">' + thumb + '<span class="play">' + ICONS.play + "</span>" +
      '<span class="badge">' + esc(badge) + "</span></span>" +
      '<span class="vbody"><strong>' + esc(v.title) + "</strong>" +
      '<span class="vsum">' + esc(v.summary) + "</span>" +
      '<span class="watch">WATCH VIDEO' + ICONS.ext + "</span></span></a></li>";
  }
  function watchBlock(list) {
    if (!list || !list.length) return "";
    return '<section class="sec watch-sec">' + tag(LBL.watch, U().watchSub) + '<ul class="video-grid">' + list.map(videoCard).join("") + "</ul></section>";
  }
  function officialBlock(list, label) {
    if (!list || !list.length) return "";
    return '<section class="sec official">' + tag(label || LBL.official, U().officialSub) + "<ul>" + list.map(function (l) {
      return "<li>" + extLink(linkHref(l), l.label || (U().mapSearch + " · " + l.map)) + "</li>";
    }).join("") + "</ul></section>";
  }

  /* ---------- 고민 검색 · 검색 키워드 추천 (2026.11 보완 34~45) ----------
     1순위 서울착륙 안의 관련 페이지 → 2순위 해결 방법 · 여행 한국어 → 3순위 NAVER · Google 검색어
     데이터 · 템플릿: content/search.js */
  function SU() { return SL.search.ui[lang] || SL.search.ui.ko; }
  function isLatin(s) { return /^[\x00-\x7f]+$/.test(s); }
  /* 영어 키워드는 단어 앞부분에서만 일치 (pleasant 속 asan 같은 오인 방지) */
  function findKey(text, k) {
    var i = text.indexOf(k);
    if (!isLatin(k)) return i;
    while (i >= 0 && (/[a-z]/.test(text.charAt(i - 1)) || (/[a-z]/.test(text.charAt(i+k.length)) && !/^(s|es)\b/.test(text.slice(i+k.length)) && !/^(injur|dermatolog)$/.test(k)))) i = text.indexOf(k, i + 1);
    return i;
  }
  function firstHit(text, list) {
    var best = null;
    list.forEach(function (it) {
      it.keys.forEach(function (k) {
        var i = findKey(text, k.toLowerCase());
        if (i >= 0 && (!best || i < best.i)) best = { it: it, i: i, len: k.length };
      });
    });
    return best;
  }
  function askAnalyze(q) {
    var S = SL.search, text = " " + q.toLowerCase().replace(/\s+/g, " ") + " ";
    /* 지역: 적힌 순서대로, 다른 지역명 안에 포함된 것(서울역 속 '서울')은 제외 */
    var hits = [];
    S.areas.forEach(function (a) {
      a.keys.forEach(function (k) {
        var i = findKey(text, k.toLowerCase());
        if (i >= 0) hits.push({ a: a, i: i, e: i + k.length });
      });
    });
    hits = hits.filter(function (h) { return !hits.some(function (o) { return o !== h && o.i <= h.i && o.e >= h.e && (o.e - o.i) > (h.e - h.i); }); });
    hits.sort(function (x, y) { return x.i - y.i; });
    var areas = [];
    hits.forEach(function (h) { if (areas.indexOf(h.a) < 0) areas.push(h.a); });
    var specific = areas.filter(function (a) { return !a.generic; });
    if (specific.length) areas = specific;
    var A = areas[0];
    /* 상황 */
    var scored = S.topics.map(function (t) {
      var txt = text;
      if ((t.unless || []).some(function (u) { return findKey(text, u.toLowerCase()) >= 0; })) return { t: t, s: 0 };
      (t.not || []).forEach(function (n) { txt = txt.split(n.toLowerCase()).join(" "); });
      var s = 0;
      t.keys.forEach(function (k) { if (findKey(txt, k.toLowerCase()) >= 0) s += isLatin(k) ? k.length / 3 : k.length; });
      return { t: t, s: s * (t.w || 1) };
    }).filter(function (x) { return x.s > 0; }).sort(function (x, y) { return y.s - x.s; });
    var top = scored.length ? scored[0].s : 0;
    var topics = scored.filter(function (x) { return x.s >= top * 0.6 || (scored[0].t.broad && !x.t.broad); }).map(function (x) { return x.t; });
    /* '맛집 · 여행지' 같은 넓은 상황은 '채식 식당'처럼 구체적인 상황이 있으면 뺀다 */
    if (topics.some(function (t) { return !t.broad; })) topics = topics.filter(function (t) { return !t.broad; });
    topics = topics.slice(0, 3);
    var ing = firstHit(text, S.ingredients), dish = firstHit(text, S.dishes);
    var two = specific.length > 1;
    var ctx = {
      area: A ? A.ko : "한국", areaEn: A ? A.en : "Korea", city: A && !A.city ? "Seoul" : "Korea",
      station: A && A.st, stationEn: A && A.stEn, month: String(new Date().getMonth() + 1),
      from: two ? specific[0].ko : null, to: two ? specific[1].ko : null, fromEn: two ? specific[0].en : null, toEn: two ? specific[1].en : null,
      ing: ing && ing.it.ko, ingEn: ing && ing.it.en, dish: dish && dish.it.ko
    };
    function fill(tpl) {
      var miss = false;
      var out = tpl.replace(/\{(\w+)\}/g, function (m, k) { var v = ctx[k]; if (!v) { miss = true; return ""; } return v; });
      if (miss) return null;
      /* 지역을 못 찾아 'Seoul' 이 겹치면 한 번만 (Seoul restaurant reservation Seoul → Seoul restaurant reservation) */
      var seen = {};
      return out.replace(/\s+/g, " ").trim().split(" ").filter(function (w, i, arr) {
        var lw = w.toLowerCase();
        if (i && lw === arr[i - 1].toLowerCase()) return false;
        if (lw === "seoul" || lw === "korea") { if (seen[lw]) return false; seen[lw] = true; }
        return true;
      }).join(" ");
    }
    function gather(key, max) {
      var list = [];
      var src = topics.length ? topics : [S.fallback];
      src.forEach(function (t) { (t[key] || []).forEach(function (tpl) { var v = fill(tpl); if (v && list.indexOf(v) < 0) list.push(v); }); });
      return list.slice(0, max);
    }
    var internal = [];
    areas.forEach(function (a) { if (a.place && internal.indexOf("#place-" + a.place) < 0) internal.push("#place-" + a.place); });
    topics.forEach(function (t) { t.internal.forEach(function (h) { if (internal.indexOf(h) < 0) internal.push(h); }); });
    var say = [];
    topics.forEach(function (t) { (t.say || []).forEach(function (p) { if (say.indexOf(p) < 0) say.push(p); }); });
    /* 바로 쓰는 서비스 — { id, area } 는 그 지역을 적었을 때만 (성수야 → 성수) */
    var svcs = [];
    topics.forEach(function (t) {
      (t.services || []).forEach(function (sv) {
        var id = typeof sv === "string" ? sv : (A && A.ko === sv.area ? sv.id : null);
        if (id && svcs.indexOf(id) < 0) svcs.push(id);
      });
    });
    return {
      areas: areas, topics: topics, internal: internal.slice(0, 4), say: say.slice(0, 3),
      live: topics.some(function (t) { return t.live; }), naver: gather("naver", 3), google: gather("google", 3),
      insta: gather("insta", 4).map(function (x) { return x.replace(/\s+/g, ""); }), services: svcs.slice(0, 3)
    };
  }
  /* 서울착륙 안의 링크 → 현재 언어의 제목 · 설명 */
  function deepHas(o, id) {
    if (!o || typeof o !== "object") return null;
    if (o.id === id) return o;
    for (var k in o) { var f = deepHas(o[k], id); if (f) return f; }
    return null;
  }
  function resolveLink(href) {
    var id = href.slice(1), L = SL[lang], T = U();
    if (id.indexOf("help-") === 0) { var it = helpItem(id.slice(5)); return it && { title: it.title, sub: it.stage }; }
    if (id.indexOf("place-") === 0) { var p = id.slice(6); return { title: longName(p), sub: SU().place }; }
    if (id === "where-finder") return { title: "Trip Finder", sub: T.nav.where };
    if (id === "where") return { title: T.nav.where, sub: T.where.listHead };
    var res = null;
    ["before", "during", "tips"].some(function (k) {
      return L[k].cards.some(function (c) {
        if (c.id === id) { res = { title: c.title, sub: c.lead, num: c.num }; return true; }
        var f = deepHas(c, id);
        if (f) { res = { title: c.title + (f.title ? " · " + f.title : ""), sub: c.lead, num: c.num }; return true; }
        return false;
      });
    });
    return res;
  }
  /* 기존 콘텐츠에 있는 여행 한국어 문장 찾기 (현재 언어의 뜻 · 발음 그대로) */
  function findPhrase(ko) {
    var found = null;
    (function walk(o) {
      if (found || !o || typeof o !== "object") return;
      if (Array.isArray(o) && o[0] === ko && o.length >= 3 && typeof o[1] === "string") { found = [o[0], o[1], o[2]]; return; }
      for (var k in o) walk(o[k]);
    })([SL[lang].before, SL[lang].during, SL[lang].tips, helpContent().items]);
    return found;
  }
  function askForm(scope) {
    var S = SU(), hero = scope === "hero";
    return '<form class="ask' + (hero ? " ask-hero" : "") + '" data-ask novalidate' + (hero ? ' id="home-ask" data-out="hero-ask-out"' : "") + '><label class="ask-label" for="ask-' + esc(scope) + '">' + quietIcon("search") + esc(S.head) + "</label>" +
      '<div class="ask-row"><input id="ask-' + esc(scope) + '" name="q" type="search" autocomplete="off" enterkeyhint="search" placeholder="' + esc(S.ph) + '" aria-describedby="ask-try-' + esc(scope) + '">' +
      '<button type="submit" class="ask-go">' + esc(S.go) + "</button></div>" +
      '<div class="ask-try" id="ask-try-' + esc(scope) + '"><span>' + esc(S.tryLabel) + "</span>" + S.tries.map(function (t) {
        return '<button type="button" data-ask-try="' + esc(t) + '">' + esc(t) + "</button>";
      }).join("") + "</div></form>" + (hero ? "" : '<div class="ask-out" aria-live="polite"></div>');
  }
  function extCol(kind, list) {
    var S = SU(), url = KW[kind].url;
    if (!list.length) return "";
    return '<div class="ext-col ext-' + kind + '"><p class="ext-h">' + esc(S[kind]) + "</p><ul>" + list.map(function (q) {
      return '<li><a href="' + esc(url(q)) + '" target="_blank" rel="noopener noreferrer">' + esc(q) + ICONS.ext + "</a>" + copyBtn(q) + "</li>";
    }).join("") + '</ul><a class="ext-btn" href="' + esc(url(list[0])) + '" target="_blank" rel="noopener noreferrer" title="' + esc(S.newTab) + '">' + esc(S[kind + "Go"]) + " →</a></div>";
  }
  function askResult(q) {
    var S = SU(), r = askAnalyze(q);
    var links = r.internal.map(function (h) { var x = resolveLink(h); return x && { href: h, x: x }; }).filter(Boolean);
    var say = r.say.map(findPhrase).filter(Boolean);
    var chips = '<span class="ask-chip"><b>' + esc(S.area) + "</b>" + (r.areas.length && !r.areas[0].generic ? r.areas.map(function (a) { return esc(a.ko) + " (" + esc(a.en) + ")"; }).join(" → ") : esc(S.seoul)) + "</span>" +
      r.topics.map(function (t) { return '<span class="ask-chip"><b>' + esc(S.topic) + "</b>" + esc(t.name[lang] || t.name.ko) + "</span>"; }).join("");
    if (!r.areas.length) chips=chips.replace(esc(S.seoul),esc(surveyUI().areaUnknown));
    var html = '<div class="ask-res"><p class="ask-intent"><span class="mini">' + esc(S.understood) + "</span>" + chips + "</p>" + (!r.areas.length?'<p class="cap">'+esc(surveyUI().regionNote)+'</p>':'');
    if(r.topics.some(function(t){return t.id==='urgentMedical';}))html+='<a class="h-alert" href="tel:119">119 · '+esc(SL[lang].during.cards.find(function(c){return c.id==='during-health';}).title)+'</a>';
    /* 1) 바로 쓰는 서비스 → 2) 서울착륙 안내 → 3) NAVER · Google · Instagram 검색어 → 4) 1330 */
    if (r.services.length) html += '<section class="ask-svc"><h3 class="ask-h">' + esc(S.fastTitle) + "</h3>" + svcList(r.services) + "</section>";
    if (links.length) {
      html += '<section class="ask-rec"><h3 class="ask-h">' + esc(S.recTitle) + '</h3><ol class="ask-list">' + links.map(function (l, i) {
        return '<li><a href="' + esc(l.href) + '"><span class="ask-n">' + (i + 1) + '</span><span class="ask-t"><strong>' + esc(l.x.title) + "</strong><small>" + esc(l.x.sub || "") + "</small></span><span class=\"ask-arrow\" aria-hidden=\"true\">→</span></a></li>";
      }).join("") + "</ol>" + (say.length ? '<p class="tip-sub">' + esc(S.sayTitle) + "</p>" + phraseMini(say) : "") + "</section>";
    } else {
      html += '<section class="ask-none"><h3 class="ask-h">' + esc(S.noneTitle) + "</h3><p>" + esc(S.noneSub) + "</p></section>";
    }
    if (r.naver.length || r.google.length || r.insta.length) {
      var title = r.live ? S.liveTitle : S.extTitle, text = r.live ? S.liveText : S.extText;
      html += '<section class="ext-card' + (r.live ? " live" : "") + '">' + (links.length ? '<p class="ext-title">' + quietIcon("search") + esc(title) + '</p><p class="ext-text">' + esc(text) + "</p>" : "") +
        '<div class="ext-cols">' + extCol("naver", r.naver) + extCol("google", r.google) + extCol("insta", r.insta) + "</div></section>";
    }
    var P = X().pb;
    html += '<section class="ask-fb"><h3 class="ask-h">' + esc(S.fbTitle) + '</h3><p>' + esc(P.fbText) + '</p><a class="pb-btn call" href="tel:1330">' + quietIcon("phone") + esc(P.call) + "</a></section>";
    return html + "</div>";
  }
  function reduceMotion() { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function askRun(form, q) {
    var outId = form.getAttribute("data-out"), out = (outId && document.getElementById(outId)) || form.nextElementSibling, input = form.querySelector("input");
    if (typeof q === "string") input.value = q;
    q = input.value.trim();
    out.innerHTML = q ? askResult(q) : '<p class="cap">' + esc(SU().empty) + "</p>";
    if (outId && q) out.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
  }

  /* ---------- 2026.11 개편: 실제 서비스 · 검색어 · 현장 한국어 ----------
     svcList: content/services.js 의 서비스를 '언제 쓰나요?'와 함께 카드로
     kwCols: NAVER · Google · Instagram 검색어 (누르면 새 탭 검색, 옆에 복사)
     playbook: 모든 페이지 공통 형식 — 지금 상황 → 가장 빠른 방법 → 직접 검색 → 이것도 확인 → 현장 한국어 → 해결되지 않았다면 */
  function svcList(ids) {
    var SV = SL.services || {}, P = X().pb;
    var list = (ids || []).map(function (id) { return SV[id] && { id: id, s: SV[id] }; }).filter(Boolean);
    if (!list.length) return "";
    return '<ul class="svc-list">' + list.map(function (x) {
      var s = x.s, when = s.when[lang] || s.when.ko, what = s.what[lang] || s.what.ko;
      return '<li class="svc"><div class="svc-copy"><p class="svc-when"><b>' + esc(P.when) + "</b>" + esc(when) + "</p>" +
        '<p class="svc-name"><strong>' + esc(s.name) + "</strong>" + (s.tag ? '<span class="svc-tag">' + esc(s.tag) + "</span>" : "") + "</p><p class=\"svc-what\">" + esc(what) + "</p></div>" +
        '<div class="svc-act">' + (s.tel ? '<a class="svc-go tel" href="tel:' + esc(s.tel) + '">' + esc(s.tel) + "</a>" : "") +
        '<a class="svc-go" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(P.open) + ICONS.ext + '<span class="sr-only"> (' + esc(U().newTab) + ")</span></a></div></li>";
    }).join("") + "</ul>";
  }
  var KW = {
    naver: { label: "NAVER", url: function (q) { return "https://search.naver.com/search.naver?query=" + encodeURIComponent(q); } },
    google: { label: "Google", url: function (q) { return "https://www.google.com/search?q=" + encodeURIComponent(q); } },
    insta: { label: "Instagram", url: function (q) { return "https://www.instagram.com/explore/tags/" + encodeURIComponent(q.replace(/^#/, "")) + "/"; } }
  };
  function kwCols(k) {
    if (!k) return "";
    var cols = ["naver", "google", "insta"].filter(function (n) { return k[n] && k[n].length; });
    if (!cols.length) return "";
    return '<div class="kw-cols">' + cols.map(function (n) {
      return '<div class="kw-col kw-' + n + '"><p class="kw-h">' + KW[n].label + "</p><ul>" + k[n].map(function (q) {
        return '<li><a href="' + esc(KW[n].url(q)) + '" target="_blank" rel="noopener noreferrer">' + esc(q) + ICONS.ext + "</a>" + copyBtn(q) + "</li>";
      }).join("") + "</ul></div>";
    }).join("") + "</div>";
  }
  function playbook(b) {
    var P = X().pb, sec = function (cls, title, body) { return body ? '<section class="pb-sec ' + cls + '"><h3 class="pb-h">' + esc(title) + "</h3>" + body + "</section>" : ""; };
    var fb = b.fallback === false ? "" : '<p class="pb-fb-text">' + esc(b.fallbackText || P.fbText) + '</p><div class="pb-fb-act">' +
      '<a class="pb-btn call" href="tel:1330">' + quietIcon("phone") + esc(P.call) + "</a>" +
      '<a class="pb-btn" href="#home-ask">' + quietIcon("search") + esc(P.smart) + "</a>" +
      (b.more || []).map(function (m) { return m[0].charAt(0) === "#" ? '<a class="pb-btn" href="' + esc(m[0]) + '">' + esc(m[1]) + " →</a>" : extLink(m[0], m[1], "pb-btn out"); }).join("") + "</div>";
    return '<div class="playbook"' + (b.id ? ' id="' + esc(b.id) + '"' : "") + ">" +
      '<p class="pb-situation"><span>' + esc(b.label || P.situation) + "</span>" + esc(b.situation) + "</p>" +
      (b.intro ? '<p class="pb-intro">' + esc(b.intro) + "</p>" : "") +
      sec("pb-fast", P.fast, svcList(b.fast)) +
      sec("pb-steps", b.stepsTitle || P.steps, b.steps ? '<ol class="flow vertical">' + b.steps.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>" : "") +
      sec("pb-search", P.search, kwCols(b.search)) +
      sec("pb-check", b.checkTitle || P.check, b.check ? '<ul class="pb-checks">' + b.check.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" + (b.note ? '<p class="cap">' + esc(b.note) + "</p>" : "") : "") +
      sec("pb-say", P.say, b.say ? phraseMini(b.say) : "") +
      sec("pb-fallback", P.fallback, fb) + "</div>";
  }

  /* ---------- 외국인 상황별 TIP (2026.11 보완) ---------- */
  function searchChips(items) {
    return '<ul class="chips search">' + items.map(function (q) {
      return '<li><a href="' + esc(mapUrl(q)) + '" target="_blank" rel="noopener noreferrer">' + quietIcon("search") + esc(q) + ICONS.ext + "</a></li>";
    }).join("") + "</ul>";
  }
  /* 짧은 한국어 표현 — 기존 여행 한국어와 같은 '크게 보기 · 복사' 버튼 */
  function phraseMini(list) {
    var T = U();
    return '<ul class="phr-mini">' + list.map(function (p) {
      return '<li><div class="pm-text"><p class="ko" lang="ko">' + esc(p[0]) + '</p><p class="roman">' + esc(p[1]) + '</p><p class="mean">' + esc(p[2]) + "</p></div>" +
        '<div class="phrase-act"><button type="button" class="mini-btn" data-show="' + esc(p[0]) + '" data-roman="' + esc(p[1]) + '" data-mean="' + esc(p[2]) + '">' + esc(T.show) + "</button>" + copyBtn(p[0]) + "</div></li>";
    }).join("") + "</ul>";
  }
  function goLinks(b) {
    if (!b.go && !b.link) return "";
    return '<div class="tip-go">' + (b.link ? extLink(linkHref(b.link), b.link.label, "out small") : "") +
      (b.go ? '<a class="inline-go" href="' + esc(b.go[0]) + '">' + esc(b.go[1]) + " →</a>" : "") + "</div>";
  }
  function tipBox(b) {
    return '<div class="tipbox tone-' + esc(b.tone || "note") + '"' + (b.id ? ' id="' + esc(b.id) + '"' : "") + ">" +
      '<p class="tip-label">' + quietIcon(b.icon || "tip") + esc(b.label || LBL.foreigner) + "</p>" +
      (b.title ? '<h3 class="tip-title">' + esc(b.title) + "</h3>" : "") +
      (b.situation ? '<p class="tip-sit"><b>' + esc(LBL.situation) + "</b>" + esc(b.situation) + "</p>" : "") +
      (b.text ? '<p class="tip-text">' + esc(b.text) + "</p>" : "") +
      (b.services ? svcList(b.services) : "") +
      (b.search ? '<p class="tip-sub">' + esc(X().searchMap) + "</p>" + searchChips(b.search) : "") +
      (b.kw ? kwCols(b.kw) : "") +
      (b.words ? '<p class="tip-sub">' + esc(b.wordsTitle || "") + '</p><ul class="word-chips">' + b.words.map(function (w) { return '<li><span lang="ko">' + esc(w[0]) + "</span>" + (w[1] ? "<small>" + esc(w[1]) + "</small>" : "") + copyBtn(w[0]) + "</li>"; }).join("") + "</ul>" : "") +
      (b.phrases ? '<p class="tip-sub">' + esc(X().sayKo) + "</p>" + phraseMini(b.phrases) : "") +
      (b.note ? '<p class="cap">' + esc(b.note) + "</p>" : "") + goLinks(b) + "</div>";
  }

  /* ---------- 가이드 블록 ---------- */
  var checks = {};
  function stepItem(i) {
    if (typeof i === "string") return "<li><div><strong>" + esc(i) + "</strong></div></li>";
    return "<li><div><strong>" + esc(i.t) + "</strong>" + (i.d ? "<p>" + esc(i.d) + "</p>" : "") +
      (i.list ? '<ul class="dots">' + i.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
      (i.go ? '<a class="inline-go" href="' + esc(i.go[0]) + '">' + esc(i.go[1]) + " →</a>" : "") + "</div></li>";
  }
  function block(b, cid, bi) {
    var h = b.title ? '<h3 class="mini">' + esc(b.title) + "</h3>" : "";
    var T = U();
    switch (b.type) {
      case "quickTranslate": return translationForm();
      case "climateMap": return climateMap();
      case "text":
        return '<div class="blk">' + h + "<p>" + esc(b.text) + "</p></div>";
      case "steps":
        return '<div class="blk">' + (b.title ? h : tag(LBL.step)) + '<ol class="steps2"' + (b.start ? ' style="counter-reset: s ' + (+b.start) + '"' : "") + ">" + b.items.map(stepItem).join("") + "</ol>" +
          (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "flow":
        return '<div class="blk">' + h + '<ol class="flow">' + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ol>" +
          (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "chips":
        return '<div class="blk">' + h + '<ul class="chips">' + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
      case "search":
        return '<div class="blk">' + h + searchChips(b.items) + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "tipbox":
        return '<div class="blk">' + tipBox(b) + "</div>";
      case "playbook":
        return '<div class="blk">' + (b.title ? h : "") + playbook(b) + "</div>";
      case "services":
        return '<div class="blk">' + h + svcList(b.items) + "</div>";
      case "keywords":
        return '<div class="blk">' + h + kwCols(b) + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "keyset":
        /* 목적별 검색어: [라벨, 검색어, 검색어...] */
        return '<div class="blk">' + h + '<ul class="keyset">' + b.items.map(function (row) {
          return '<li><span class="ks-label">' + esc(row[0]) + '</span><span class="ks-kws">' + row.slice(1).map(function (q) {
            return '<span class="ks-kw"><a href="' + esc(KW.naver.url(q)) + '" target="_blank" rel="noopener noreferrer">' + esc(q) + ICONS.ext + "</a>" + copyBtn(q) + "</span>";
          }).join("") + "</span></li>";
        }).join("") + "</ul>" + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "routes":
        /* 하루 동선: 비추천 1개 + 추천 여러 개 */
        var route = function (r, bad) {
          return '<div class="rt' + (bad ? " bad" : "") + '"><p class="rt-h">' + (bad ? "✕ " : "✓ ") + esc(r.title) + '</p><ol class="rt-stops">' + r.stops.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>" + (r.note ? '<p class="rt-note">' + esc(r.note) + "</p>" : "") + "</div>";
        };
        return '<div class="blk">' + h + (b.lead ? '<p class="routes-lead">' + esc(b.lead) + "</p>" : "") + '<div class="routes">' + route(b.bad, true) + b.good.map(function (r) { return route(r); }).join("") + "</div></div>";
      case "tipgrid":
        return '<div class="blk tipgrid-wrap"' + (b.id ? ' id="' + esc(b.id) + '"' : "") + ">" + tag(b.label || LBL.ifneed, b.title) +
          (b.intro ? '<p class="tipgrid-intro">' + esc(b.intro) + "</p>" : "") + '<div class="tipgrid">' + b.items.map(tipBox).join("") + "</div></div>";
      case "spots":
        return '<div class="blk">' + h + '<ul class="spots">' + b.items.map(function (s) {
          return "<li>" + quietIcon(s.icon) + "<strong>" + esc(s.t) + "</strong><p>" + esc(s.d) + "</p></li>";
        }).join("") + "</ul></div>";
      case "jump":
        return '<nav class="blk jump" aria-label="' + esc(b.title || "") + '">' + (b.title ? '<p class="mini">' + esc(b.title) + "</p>" : "") + "<ul>" + b.items.map(function (j) {
          return '<li><a href="' + esc(j[0]) + '">' + quietIcon(j[2]) + esc(j[1]) + "</a></li>";
        }).join("") + "</ul></nav>";
      case "health":
        return '<div class="blk health">' + (b.alert ? '<a class="h-alert" href="tel:119">' + quietIcon("sos") + esc(b.alert) + "</a>" : "") + '<div class="health-grid">' + b.items.map(function (it, n) {
          return '<section class="hcase hc-' + esc(it.key) + '"><p class="tip-label"><span class="hc-n">' + (n + 1) + "</span>" + quietIcon(it.icon) + esc(it.label) + "</p><h3>" + esc(it.title) + "</h3>" +
            (it.num ? '<a class="call119" href="tel:' + esc(it.num) + '"><span class="n">' + esc(it.num) + '</span><span class="l">' + esc(it.call) + (it.sub ? "<small>" + esc(it.sub) + "</small>" : "") + "</span></a>" : "") +
            '<p class="tip-text">' + esc(it.text) + "</p>" +
            (it.steps ? '<ol class="flow vertical">' + it.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" : "") +
            (it.search ? searchChips(it.search) : "") +
            (it.kw ? kwCols(it.kw) : "") +
            (it.services ? svcList(it.services) : "") +
            (it.note ? '<p class="cap">' + esc(it.note) + "</p>" : "") +
            (it.phrases ? '<p class="tip-sub">' + esc(X().sayKo) + "</p>" + phraseMini(it.phrases) : "") +
            goLinks(it) + "</section>";
        }).join("") + "</div>" + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "checklist":
        return '<div class="blk">' + h + '<ul class="checklist">' + b.items.map(function (i, n) {
          var id = cid + "-c" + bi + "-" + n;
          return '<li><input type="checkbox" id="' + id + '"' + (checks[id] ? " checked" : "") + '><label for="' + id + '">' + esc(i) + "</label></li>";
        }).join("") + "</ul>" + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "faq":
        return '<div class="blk">' + h + '<div class="faq">' + b.items.map(function (i) {
          return "<details><summary>" + esc(i[0]) + "</summary><p>" + esc(i[1]) + "</p></details>";
        }).join("") + "</div></div>";
      case "accordion":
        return '<div class="blk">' + h + '<div class="faq acc">' + b.items.map(function (i, n) {
          return "<details" + (n === 0 ? " open" : "") + "><summary>" + esc(i.title) + (i.sub ? " <small>" + esc(i.sub) + "</small>" : "") + "</summary>" +
            (i.lead ? '<p class="acc-lead">' + esc(i.lead) + "</p>" : "") +
            (i.steps ? '<ol class="flow vertical">' + i.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" : "") +
            (i.note ? '<p class="cap">' + quietIcon("tip") + esc(i.note) + "</p>" : "") +
            (i.link ? "<p>" + extLink(linkHref(i.link), i.link.label, "out") + "</p>" : "") + "</details>";
        }).join("") + "</div></div>";
      case "defs":
        var media = b.items.some(function (i) { return i[2]; });
        return '<div class="blk">' + h + '<dl class="defs' + (media ? " media" : "") + '">' + b.items.map(function (i) {
          return "<div><dt>" + esc(i[0]) + "</dt><dd>" + esc(i[1]) + "</dd>" +
            (media ? '<dd class="pic">' + (i[2] ? '<img src="' + esc(i[2]) + '" alt="' + esc(i[0]) + '" loading="lazy">' : "") + "</dd>" : "") + "</div>";
        }).join("") + "</dl></div>";
      case "apps":
        var A = T.app;
        return '<div class="blk"><div class="apps">' + b.apps.map(function (a) {
          var rows = [["use", a.use], ["lang", a.lang], ["signup", a.signup], ["phone", a.phone], ["when", a.when]].filter(function (r) { return r[1]; });
          return '<section class="app"><h3>' + esc(a.name) + (a.sub ? " <small>" + esc(a.sub) + "</small>" : "") + "</h3>" +
            '<dl class="rows">' + rows.map(function (r) { return "<div><dt>" + esc(A[r[0]]) + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("") + "</dl>" +
            (a.tip ? '<p class="app-tip"><b>' + esc(LBL.foreigner) + "</b> " + esc(a.tip) + "</p>" : "") +
            (a.href ? extLink(linkHref({ href: a.href }), A.open, "out small") : "") + "</section>";
        }).join("") + "</div>" + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "phrases":
        return '<div class="blk">' + h + b.groups.map(function (g) {
          return '<div class="phrase-group"' + (g.id ? ' id="' + esc(g.id) + '"' : "") + '><p class="phrase-head">' + esc(g.title) + '</p><ul class="phrases">' + g.items.map(function (p) {
            return '<li class="phrase"><p class="ko" lang="ko">' + esc(p[0]) + '</p><p class="roman">' + esc(p[1]) + '</p><p class="mean">' + esc(p[2]) + "</p>" +
              (p[3] ? '<p class="when">' + esc(p[3]) + "</p>" : "") +
              '<div class="phrase-act"><button type="button" class="mini-btn" data-show="' + esc(p[0]) + '" data-roman="' + esc(p[1]) + '" data-mean="' + esc(p[2]) + '">' + esc(T.show) + "</button>" + copyBtn(p[0]) + "</div></li>";
          }).join("") + "</ul></div>";
        }).join("") + "</div>";
      case "sos":
        return '<div class="blk">' + h + '<ul class="sos">' + b.items.map(function (s) {
          return '<li class="sos-item' + (s.urgent ? " urgent" : "") + '"><a href="tel:' + esc(s.tel || s.num) + '"><span class="sos-num">' + esc(s.num) + "</span>" +
            '<span class="sos-body"><strong>' + esc(s.title) + "</strong><small>" + esc(s.desc) + '</small></span><span class="call">' + ICONS.phone + "</span></a></li>";
        }).join("") + "</ul>" + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "cases":
        return '<div class="blk">' + h + '<div class="faq cases">' + b.items.map(function (c) {
          return "<details><summary>" + quietIcon(c.icon) + esc(c.title) + "</summary>" + '<ol class="flow vertical">' + c.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
            (c.link ? "<p>" + extLink(linkHref(c.link), c.link.label, "out") + "</p>" : "") + "</details>";
        }).join("") + "</div></div>";
      case "warn":
        return '<div class="blk warn">' + h + '<ul class="dots">' + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
    }
    return "";
  }

  function guideCard(c) {
    var side = "";
    if (c.tips) side += '<section class="note">' + tag(LBL.foreigner, U().tipsSub) + "<ul>" + c.tips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></section>";
    if (c.real) side += '<section class="real">' + tag(LBL.real, U().realSub) + c.real.map(function (q) { return "<blockquote><p>“" + esc(q) + "”</p></blockquote>"; }).join("") +
      '<p class="real-by">— ' + esc(U().realBy) + "</p></section>";
    if (c.caution) side += '<section class="caution"><h3>' + esc(U().caution) + "</h3><p>" + esc(c.caution) + "</p></section>";
    return '<article class="card" id="' + c.id + '">' +
      '<header class="card-head"><span class="num">' + esc(c.num) + '</span><div><p class="what">' + esc(c.kicker || LBL.what) + "</p><h2>" + esc(c.title) + '</h2><p class="lead">' + esc(c.lead) + "</p></div></header>" +
      (c.top ? '<div class="card-top">' + c.top.map(function (b, i) { return block(b, c.id + "-t", i); }).join("") + "</div>" : "") +
      ((c.blocks && c.blocks.length) || side ? '<div class="card-body"><div class="card-main">' + (c.blocks || []).map(function (b, i) { return block(b, c.id, i); }).join("") + "</div>" +
      (side ? '<aside class="card-side">' + side + "</aside>" : "") + "</div>" : "") +
      watchBlock(c.watch) + officialBlock(c.links) +
      (c.next ? '<a class="next-step" href="' + esc(c.next[0]) + '"><span>' + esc(U().nextStep) + "</span>" + esc(c.next[1]) + ' <b aria-hidden="true">→</b></a>' : "") +
      "</article>";
  }

  /* ---------- 공통 페이지 머리 ---------- */
  function journey(current) {
    var T = U();
    return '<nav class="journey" aria-label="' + esc(T.journeyLabel) + '"><ol>' + STAGES.map(function (k, i) {
      return '<li class="' + k + (k === current ? " on" : "") + '"><a href="#' + k + '"' + (k === current ? ' aria-current="step"' : "") + '><b>0' + (i + 1) + "</b><span>" + esc(T.nav[k]) + "</span></a></li>";
    }).join("") + "</ol></nav>";
  }
  /* 사진 한 장의 짧은 출처 표기 (배경으로 쓴 사진용) */
  function photoNote(placeKey, cls) {
    var meta = (S.places[placeKey].photoMeta || [])[0];
    if (!meta) return "";
    return '<p class="photo-note ' + (cls || "") + '">' + esc(X().photo) + ' · <a href="' + esc(meta.source) + '" target="_blank" rel="noopener noreferrer">' + esc(photoAlt(placeKey, 0)) + "</a> · " + esc(meta.author) +
      ' · <a href="' + esc(meta.licenseUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(meta.license) + "</a></p>";
  }
  function stagePhoto(k) { return S.places[STAGE_PHOTO[k]].photos[0]; }
  /* 상세 페이지 공통 머리: 사진 배경 + 반투명 안내 패널 */
  function banner(cls, photoKey, back, panel) {
    return '<section class="page-banner ' + cls + '"><img class="banner-art" src="' + esc(stagePhoto(photoKey)) + '" alt="" decoding="async">' +
      '<div class="banner-shade" aria-hidden="true"></div><div class="banner-inner wrap">' + back + panel + "</div>" + photoNote(STAGE_PHOTO[photoKey], "on-photo") + "</section>";
  }
  function intro(key, Pg) {
    var n = STAGES.indexOf(key) + 1;
    return banner(key, key, '<a class="back" href="#home">' + esc(U().back) + "</a>",
      '<div class="page-intro glass"><div><span class="eyebrow">STEP 0' + n + " · " + STAGE_EN[key] + "</span><h1>" + lines(Pg.title) + "</h1><p>" + esc(Pg.intro) + "</p></div>" +
      '<span class="page-icon">' + ICONS[key] + "</span></div>");
  }
  function subnav(items) {
    var T = U();
    return '<nav class="subnav" aria-label="' + esc(T.onPage) + '"><span>' + esc(T.onPage) + "</span><ul>" +
      items.map(function (c) { return '<li><a href="#' + c[0] + '">' + esc(c[1]) + "</a></li>"; }).join("") + "</ul></nav>";
  }
  function stageNext(current) {
    var T = U(), i = STAGES.indexOf(current), nx = STAGES[i + 1];
    var html = '<nav class="stage-next" aria-label="' + esc(T.nextStage) + '">';
    if (nx) html += '<a class="big ' + nx + '" href="#' + nx + '"><span>' + esc(T.nextStage) + " · 0" + (i + 2) + " " + STAGE_EN[nx] + "</span><strong>" + esc(SL[lang].home.cards[nx].title) + ' →</strong><small>' + esc(SL[lang].home.cards[nx].desc) + "</small></a>";
    else html += '<a class="big before" href="#home"><span>SEOUL LANDING</span><strong>' + esc(T.backHome) + ' →</strong></a>';
    return html + "</nav>";
  }

  /* ---------- 홈 ---------- */
  function quickHelp(cls) {
    var T = U(), H = T.quick, C = helpContent();
    var items = [["card", "#before-card", "card"], ["subway", "#during-subway", "subway"], ["bus", "#during-bus", "bus"], ["taxi", "#during-taxi", "taxi"],
      ["food", "#tips-food", "food"], ["reserve", "#tips-reserve", "reserve"], ["popup", "#tips-popup", "popup"], ["where", "#where", "map"]];
    var hid = "qh-" + (cls || "home"), E = X(), n = 0;
    function tile(href, icon, small, strong, urgent) {
      n++;
      return '<li><a href="' + esc(href) + '"' + (urgent ? ' class="urgent"' : "") + '><span class="q-icon">' + quietIcon(icon) + '</span><span class="q-text"><strong>' + esc(strong) + "</strong><small>" + esc(small) + "</small></span>" +
        '<span class="q-no" aria-hidden="true">' + (n < 10 ? "0" : "") + n + "</span></a></li>";
    }
    /* 위: 지금 겪는 문제 (식습관 · 기도 · 아플 때 · 예약 · 짐 · 긴급) / 아래: 나머지 단계별 문제 */
    var now = C.quick || [], used = now.map(function (q) { return q.href; });
    var rest = C.items.filter(function (item) { return used.indexOf("#help-" + item.id) < 0; });
    return '<section class="quick ' + (cls || "wrap") + '"' + (cls ? "" : ' id="home-help"') + ' aria-labelledby="' + hid + '"><div class="quick-head"><div><span class="eyebrow">' + esc(E.footHelp) + '</span><h2 id="' + hid + '">I NEED HELP WITH...</h2><p>' + esc(C.ui.intro) + "</p></div>" +
      '<a class="sos-link" href="#during-sos">' + quietIcon("sos") + esc(H.sos) + "</a></div>" +
      (cls ? askForm(cls) : "") +
      (now.length ? '<p class="quick-sub">' + esc(E.quickNow) + '</p><ul class="quick-grid now">' + now.map(function (q) { return tile(q.href, q.icon, q.sub, q.short, q.urgent); }).join("") + "</ul>" +
        '<p class="quick-sub">' + esc(E.quickMore) + "</p>" : "") +
      '<ul class="quick-grid">' + rest.map(function (item) { return tile("#help-" + item.id, item.icon, item.stage, item.short); }).join("") +
      '</ul><details class="quick-shortcuts"' + (cls ? "" : " open") + '><summary>' + esc(C.ui.shortcuts) + '</summary><ul>' + items.map(function (i) {
        return '<li><a href="' + i[1] + '">' + quietIcon(i[2]) + esc(H[i[0]]) + "</a></li>";
      }).join("") + "</ul></details></section>";
  }
  function stageLinks(k) {
    if (k === "where") { var W = U().where; return [["where-finder", "Trip Finder"], ["where-list", W.listHead], ["where-compare", W.cmpHead]]; }
    return SL[lang][k].cards.map(function (c) { return [c.id, c.short || c.title]; });
  }
  function viewHome() {
    var C = SL[lang].home, E = X();
    var hero = '<section class="hero" aria-labelledby="hero-title"><img class="hero-art" src="' + HERO_PHOTO.src + '" alt="' + esc(HERO_PHOTO.alt[lang] || HERO_PHOTO.alt.ko) + '" width="' + HERO_PHOTO.w + '" height="' + HERO_PHOTO.h + '" decoding="async" fetchpriority="high">' +
      '<div class="hero-shade" aria-hidden="true"></div><div class="hero-copy wrap"><span class="pill">SEOUL LANDING · ' + esc(C.eyebrow) + '</span><h1 id="hero-title">' + lines(C.title) + "</h1><p>" + lines(C.sub) + "</p>" +
      askForm("hero") +
      '<div class="hero-cta"><a class="button light" href="#before">' + esc(C.ctaStart) + ' <span aria-hidden="true">→</span></a><a class="button glass-btn" href="#where-finder">' + esc(C.ctaFinder) + "</a></div></div>" +
      '<p class="photo-note on-photo">' + esc(E.photo) + ' · <a href="' + HERO_PHOTO.source + '" target="_blank" rel="noopener noreferrer">' + esc(HERO_PHOTO.alt[lang] || HERO_PHOTO.alt.ko) + "</a> · " + HERO_PHOTO.author +
      ' · <a href="' + HERO_PHOTO.licenseUrl + '" target="_blank" rel="noopener noreferrer">' + HERO_PHOTO.license + "</a></p></section>" +
      /* 첫 화면 Smart Help 결과는 사진 아래 별도 영역에 */
      '<section class="ask-band" aria-live="polite"><div class="wrap"><div class="ask-out" id="hero-ask-out"></div></div></section>';
    var stages = '<section class="stages" aria-labelledby="stages-title"><div class="band-head wrap"><span class="eyebrow">' + esc(E.stagesKicker) + '</span><h2 id="stages-title">' + esc(C.guideHead) + "</h2><p>" + esc(C.guideSub) + "</p></div>" +
      '<ol class="stage-list">' + STAGES.map(function (k, i) {
        var m = C.cards[k];
        return '<li class="stage ' + k + '"><img class="stage-art" src="' + esc(stagePhoto(k)) + '" alt="" loading="lazy" decoding="async"><div class="stage-shade" aria-hidden="true"></div>' +
          '<div class="stage-inner wrap"><p class="stage-big" aria-hidden="true"><small>STEP 0' + (i + 1) + "</small>" + STAGE_EN[k] + "</p>" +
          '<div class="stage-panel glass"><div class="stage-top"><span class="icon">' + ICONS[k] + '</span><span class="stage-count">0' + (i + 1) + " <i>/</i> 04</span></div>" +
          '<span class="eyebrow">STEP 0' + (i + 1) + " · " + STAGE_EN[k] + "</span><h3>" + esc(m.title) + "</h3><p>" + esc(m.desc) + "</p>" +
          '<ul class="stage-links">' + stageLinks(k).map(function (l) { return '<li><a href="#' + esc(l[0]) + '">' + esc(l[1]) + "</a></li>"; }).join("") + "</ul>" +
          '<a class="button" href="#' + k + '">' + esc(E.open) + '<span class="sr-only"> · ' + esc(m.title) + '</span> <span aria-hidden="true">→</span></a></div></div>' +
          photoNote(STAGE_PHOTO[k], "on-photo") + "</li>";
      }).join("") + "</ol></section>";
    return hero + tripJourney() + stages + '<div class="help-band">' + quickHelp() + "</div>";
  }
  /* 입국 → 준비 → 이동 → 탐색 → 체험 → 문제 해결 → 출국 (PC 가로 · 모바일 세로 타임라인) */
  function guidePaths() {
    var C = SL.guidePaths[lang] || SL.guidePaths.en;
    return '<section class="guide-paths" id="home-guide-paths" aria-labelledby="guide-paths-title"><div class="guide-paths-heading"><h3 id="guide-paths-title">' + esc(C.title) + '</h3><p>' + esc(C.intro) + '</p></div><div class="guide-path-grid">' + C.paths.map(function (p) {
      return '<article class="guide-path guide-path-' + esc(p.id) + '" aria-labelledby="guide-path-' + esc(p.id) + '-title"><div class="guide-path-top"><span class="guide-path-icon" aria-hidden="true">' + quietIcon(p.icon) + '</span><span class="eyebrow">' + esc(p.tag) + '</span></div>' +
        '<h4 id="guide-path-' + esc(p.id) + '-title">' + esc(p.title) + '</h4><p class="guide-path-desc">' + esc(p.desc) + '</p><ul class="guide-path-links">' + p.links.map(function (l) {
          return '<li><a href="' + esc(l[0]) + '"><span>' + esc(l[1]) + '</span><span aria-hidden="true">→</span></a></li>';
        }).join('') + '</ul><a class="button guide-path-cta" href="' + esc(p.href) + '">' + esc(p.cta) + '<span aria-hidden="true">→</span></a></article>';
    }).join('') + '</div></section>';
  }
  function tripJourney() {
    var J = SL[lang].home.journey;
    if (!J) return "";
    return '<section class="trip-journey" id="home-journey" aria-labelledby="tj-title"><div class="wrap"><div class="band-head"><span class="eyebrow">' + esc(J.eyebrow) + '</span><h2 id="tj-title">' + esc(J.head) + "</h2><p>" + esc(J.sub) + "</p></div>" +
      guidePaths() + '<ol class="tj-list">' + J.steps.map(function (s, i) {
        return '<li class="tj tj-' + (i + 1) + '"><a class="tj-main" href="' + esc(s.href) + '"><span class="tj-dot" aria-hidden="true">' + quietIcon(s.icon) + "</span>" +
          '<span class="tj-copy"><span class="tj-no">0' + (i + 1) + " " + esc(s.en) + "</span><strong>" + esc(s.t) + "</strong><small>" + esc(s.d) + "</small></span></a>" +
          '<ul class="tj-links">' + s.links.map(function (l) { return '<li><a href="' + esc(l[0]) + '">' + esc(l[1]) + "</a></li>"; }).join("") + "</ul></li>";
      }).join("") + "</ol></div></section>";
  }

  /* ---------- 가이드 페이지 ---------- */
  function viewGuide(key) {
    var Pg = SL[lang][key];
    return intro(key, Pg) + '<div class="detail ' + key + '">' + journey(key) + subnav(Pg.cards.map(function (c) { return [c.id, c.short || c.title]; })) +
      '<div class="cards">' + Pg.cards.map(guideCard).join("") + "</div>" + stageNext(key) + "</div>";
  }

  /* ---------- 상황별 문제 해결 ---------- */
  function viewHelp(key) {
    var C = helpContent(), T = C.ui, item = helpItem(key);
    return banner("help-banner", "help", '<a class="back" href="#home-help">' + esc(T.back) + "</a>",
        '<header class="page-intro glass"><div><span class="help-stage">' + quietIcon(item.icon) + esc(item.stage) + '</span><h1>' + esc(item.title) + '</h1><p>' + esc(item.lead) + '</p></div></header>') +
      '<div class="detail help-detail"><div class="help-layout"><article class="help-content">' + (item.playbooks || []).map(function (pb) { return '<section class="help-pb">' + playbook(pb) + "</section>"; }).join("") + '<section aria-labelledby="help-choose"><h2 id="help-choose">' + esc(T.choose) + '</h2><div class="help-cases">' + item.choices.map(function (choice, i) {
        return '<details class="help-case"' + (i === 0 ? ' open' : '') + '><summary>' + esc(choice.label) + '</summary><div class="help-case-body"><h3>' + esc(T.first) + '</h3><ol class="steps2">' + choice.steps.map(stepItem).join('') + '</ol>' +
          '<div class="help-alternative"><h3>' + esc(T.alternative) + '</h3><p>' + esc(choice.fallback) + '</p></div></div></details>';
      }).join('') + '</div></section><section class="help-phrases" aria-labelledby="help-phrases"><h2 id="help-phrases">' + esc(T.phrases) + '</h2>' +
      block({ type: 'phrases', groups: [{ title: '', items: item.phrases }] }, 'help-' + item.id, 0) + '</section></article>' +
      '<aside class="help-aside"><section><h2>' + esc(T.official) + '</h2><ul class="help-links">' + item.links.map(function (link) {
        return '<li>' + extLink(link.url, link.label) + '</li>';
      }).join('') + '</ul><p class="help-updated">' + esc(T.updated) + '</p></section><section><h2>' + esc(T.related) + '</h2><ul class="help-links">' + item.related.map(function (link) {
        return '<li><a href="' + esc(link[0]) + '">' + esc(link[1]) + '</a></li>';
      }).join('') + '</ul></section></aside></div>' +
      '<nav class="help-other" aria-label="' + esc(T.all) + '"><h2>' + esc(T.all) + '</h2><ul>' + C.items.map(function (other) {
        return '<li><a href="#help-' + esc(other.id) + '"' + (other.id === key ? ' aria-current="page"' : '') + '>' + esc(other.short) + '</a></li>';
      }).join('') + '</ul></nav></div>';
  }

  /* ---------- 여행지 공통 ---------- */
  function fmtMin(m) {
    var t = U().where;
    var h = Math.floor(m / 60), r = m % 60;
    return (h ? h + t.hour + (r ? " " : "") : "") + (r ? r + t.min : "");
  }
  function levelHtml(lv) {
    var t = U().place;
    return '<span class="level l' + lv + '"><span class="dots3" aria-hidden="true">' + [1, 2, 3].map(function (i) { return "<i" + (i <= lv ? ' class="on"' : "") + "></i>"; }).join("") + "</span>" + esc(t.levels[lv - 1]) + "</span>";
  }
  function styleOf(key) {
    var st = Q.dest[key].style, best = "slow";
    Object.keys(st).forEach(function (k) { if (st[k] > st[best]) best = k; });
    return Q[lang].questions[3].options[Q.values[3].indexOf(best)];
  }
  function longName(key) { return Q[lang].dest[key].name; }
  function photoAlt(key, n) {
    var meta = (S.places[key].photoMeta || [])[n];
    return meta && meta.alt ? (meta.alt[lang] || meta.alt.ko) : (P(key).sights[n] || P(key).name);
  }
  function photoCredit(key) {
    var credits = S.places[key].photoMeta || [];
    if (!credits.length) return "";
    var label = { ko: "사진 출처", zh: "图片来源", ja: "写真出典" }[lang] || "Photo credits";
    return '<div class="photo-credits">' + credits.map(function (p, n) {
      return '<p>' + esc(label) + ': <a href="' + esc(p.source) + '" title="' + esc(p.title) + '" target="_blank" rel="noopener noreferrer">' + esc(photoAlt(key, n)) + '</a> · ' + esc(p.author) + ' · <a href="' + esc(p.licenseUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(p.license) + '</a></p>';
    }).join("") + '</div>';
  }
  function photoBox(key, cls) {
    var ph = (S.places[key].photos || [])[0];
    return '<span class="pbox ' + (cls || "") + '">' + (ph ? '<img src="' + esc(ph) + '" alt="" loading="lazy">' : '<span class="pfallback" aria-hidden="true">' + ICONS.where + "</span>") + "</span>";
  }
  var cmp = [];
  var cmpMsg = "";
  function cmpBtn(key) {
    var T = U().where, on = cmp.indexOf(key) >= 0;
    return '<button type="button" class="ghost cmp-btn" data-cmp="' + key + '" aria-pressed="' + on + '">' + esc(on ? "✓ " + T.added : "+ " + T.add) + "</button>";
  }

  /* ---------- WHERE TO GO ---------- */
  function viewWhere() {
    var Pg = SL[lang].where, T = U().where;
    var groups = [0, 1, 2].map(function (d) {
      var keys = ORDER.filter(function (k) { return Q.dest[k].dur === d; });
      return '<div class="pgroup"><h3 class="group-head"><span class="duration">' + esc(T.groups[d]) + "</span></h3><ul class=\"place-grid\">" + keys.map(function (k) {
        var p = P(k);
        return '<li class="place-card" data-place-key="' + k + '">' + '<a class="pc-link" href="#place-' + k + '"><span class="pc-media">' + photoBox(k) + '<span class="pc-dur">' + esc(p.duration) + "</span></span>" +
          '<span class="pc-body"><strong>' + esc(longName(k)) + "</strong>" + (lang!=='ko'?'<span lang="ko" class="place-ko">'+esc(SL.places.ko[k].name)+'</span>':'') + "<small>" + esc(p.tag) + "</small>" +
          '<span class="pc-meta"><span>' + quietIcon("clock") + esc(p.overview.time) + "</span><span>" + quietIcon("train") + esc(p.overview.main) + "</span></span>" +
          '<span class="pc-themes">' + p.themes.slice(0, 3).map(function (x) { return "#" + esc(x); }).join(" ") + "</span></span></a>" +
          '<div class="pc-act"><a class="button small" href="#place-' + k + '">' + esc(T.detail) + "</a>" + cmpBtn(k) + "</div></li>";
      }).join("") + "</ul></div>";
    }).join("");
    return intro("where", Pg) + '<div class="detail where">' + journey("where") +
      subnav([["where-finder", "Trip Finder"], ["where-list", T.listHead], ["where-compare", T.cmpHead]]) +
      '<p class="where-why">' + esc(Pg.why) + "</p>" +
      quizSection() +
      '<section class="places" id="where-list" aria-labelledby="pl-title"><div class="sec-head"><span class="eyebrow">9 DESTINATIONS</span><h2 id="pl-title">' + esc(T.listHead) + "</h2><p>" + esc(T.listSub) + "</p></div>" + placeFilters() + groups +
      '<p class="list-credit">' + esc(X().listCredit) + ' <a href="PHOTO-CREDITS.txt" target="_blank" rel="noopener">' + esc(X().credits) + "</a></p></section>" +
      compareSection() +
      '<p class="trip-note">' + esc(Pg.note) + "</p>" + stageNext("where") + "</div>";
  }

  function compareSection() {
    var T = U().where;
    var body;
    if (cmp.length < 2) {
      body = '<div class="cmp-empty"><p>' + esc(T.cmpHint) + "</p>" + (cmp.length ? '<p class="cap">' + esc(T.cmpNow) + " " + cmp.map(longName).map(esc).join(", ") + "</p>" : "") + "</div>";
    } else {
      var R = T.rows;
      var rows = [
        [R.duration, function (k) { return esc(P(k).duration); }],
        [R.time, function (k) { var m = S.places[k].minutes; return esc(P(k).overview.time) + '<span class="bar" role="img" aria-label="' + esc(fmtMin(m[0]) + " – " + fmtMin(m[1])) + '"><i style="left:' + (m[0] / 180 * 100).toFixed(1) + "%;width:" + ((m[1] - m[0]) / 180 * 100).toFixed(1) + '%"></i></span>'; }],
        [R.transport, function (k) { return esc(P(k).overview.main) + "<br><small>" + esc(P(k).overview.fare) + "</small>"; }],
        [R.theme, function (k) { return esc(P(k).themes.join(" · ")); }],
        [R.sights, function (k) { return esc(P(k).sights.slice(0, 3).join(", ")); }],
        [R.experience, function (k) { return esc(P(k).culture ? P(k).culture.name : "—"); }],
        [R.access, function (k) { return levelHtml(S.places[k].level); }],
        [R.style, function (k) { return esc(styleOf(k)); }]
      ];
      body = '<div class="table-wrap"><table class="cmp-table"><thead><tr><th scope="col"><span class="sr-only">' + esc(T.cmpHead) + "</span></th>" + cmp.map(function (k) {
        return '<th scope="col"><a href="#place-' + k + '">' + esc(longName(k)) + '</a><button type="button" class="x" data-cmp="' + k + '" aria-label="' + esc(T.remove) + '">×</button></th>';
      }).join("") + "</tr></thead><tbody>" + rows.map(function (r) {
        return '<tr><th scope="row">' + esc(r[0]) + "</th>" + cmp.map(function (k) { return "<td>" + r[1](k) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>" + '<button type="button" class="ghost" id="cmp-clear">' + esc(T.cmpClear) + "</button>";
    }
    return '<section class="compare" id="where-compare" aria-labelledby="cmp-title" aria-live="polite"><div class="sec-head"><span class="eyebrow">COMPARE</span><h2 id="cmp-title">' + esc(T.cmpHead) + "</h2><p>" + esc(T.cmpSub) + "</p></div>" +
      (cmpMsg ? '<p class="cmp-msg">' + esc(cmpMsg) + "</p>" : "") + body + "</section>";
  }

  /* ---------- 여행지 상세 ---------- */
  function viewPlace(key) {
    var p = P(key), sh = S.places[key], T = U().place, W = U().where;
    var i = ORDER.indexOf(key), prev = ORDER[(i + ORDER.length - 1) % ORDER.length], next = ORDER[(i + 1) % ORDER.length];
    var photos = (sh.photos || []);
    var shown = photos.slice(0, 3);
    var hero = '<section class="page-banner p-hero place' + (photos.length ? "" : " nophoto") + '">' +
      (photos.length ? '<div class="place-media"><ul class="p-photos n' + shown.length + '">' + shown.map(function (src, n) { return '<li><img src="' + esc(src) + '" alt="' + esc(photoAlt(key, n)) + '" decoding="async"' + (n ? ' loading="lazy"' : "") + "></li>"; }).join("") + "</ul></div>" : '<span class="pfallback big" aria-hidden="true">' + ICONS.where + "</span>") +
      '<div class="banner-shade" aria-hidden="true"></div><div class="banner-inner wrap"><a class="back" href="#where-list">' + esc(T.back) + "</a>" +
      '<div class="p-title glass"><span class="duration">' + esc(p.duration) + "</span><h1>" + esc(longName(key)) + '</h1><p class="lead">' + esc(p.tag) + '</p><ul class="themes">' +
      p.themes.map(function (x) { return "<li>#" + esc(x) + "</li>"; }).join("") + "</ul>" + '<div class="p-act">' + cmpBtn(key) + "</div></div></div>" + photoCredit(key) + "</section>";
    var basic = '<section class="sec basic">' + tag("BASIC INFO", T.basicSub) + '<dl class="facts">' +
      "<div><dt>" + esc(T.period) + "</dt><dd>" + esc(p.duration) + "</dd></div>" +
      "<div><dt>" + esc(T.time) + "</dt><dd>" + esc(p.facts[1][1]) + "</dd></div>" +
      "<div><dt>" + esc(T.transport) + "</dt><dd>" + esc(p.facts[0][1]) + "</dd></div>" +
      "<div><dt>" + esc(T.fare) + "</dt><dd>" + esc(p.facts[2][1]) + "</dd></div>" +
      "<div><dt>" + esc(T.difficulty) + "</dt><dd>" + levelHtml(sh.level) + "<small>" + esc(p.facts[3][1]) + "</small></dd></div>" +
      "<div><dt>" + esc(T.theme) + "</dt><dd>" + esc(p.themes.join(" · ")) + "</dd></div>" +
      "</dl>" + '<p class="arrive"><span>' + esc(T.arrive) + '</span> <b lang="ko">' + esc(sh.station) + "</b> " + mapBtn(sh.station) + copyBtn(sh.station) + "</p>" +
      '<p class="before-go"><span>' + esc(T.beforeGo) + "</span>" + T.beforeLinks.map(function (l) { return '<a href="' + esc(l[0]) + '">' + esc(l[1]) + "</a>"; }).join("") + "</p></section>";
    var culture = "";
    if (p.culture) {
      culture = '<div class="note culture"><p class="product">' + quietIcon("culture") + esc(p.culture.name) + "</p>" +
        (p.culture.flow ? '<ol class="flow small">' + p.culture.flow.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" : "") +
        (p.culture.text ? "<p>" + esc(p.culture.text) + "</p>" : "") + (p.culture.note ? '<p class="cap">' + esc(p.culture.note) + "</p>" : "") +
        (p.extra ? extLink(mapUrl(p.extra.map), p.extra.label, "out small") : "") + "</div>";
    }
    var why = '<section class="sec">' + tag("WHY HERE?", T.whySub) + '<p class="why-text">' + esc(p.why) + "</p>" + culture + "</section>";
    var course = '<section class="sec">' + tag("COURSE", T.courseSub) + p.days.map(function (d) {
      return '<div class="day"><p class="day-label">' + esc(d.label) + (d.title ? " · " + esc(d.title) : "") + '</p><ol class="flow">' + d.stops.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol></div>";
    }).join("") + "</section>";
    var must = '<section class="sec">' + tag("MUST VISIT", T.mustSub) + '<ul class="must">' + p.sights.map(function (s, n) {
      var ko = sh.spots[n] || s, meta=(SL.placeAddresses[key]||[])[n] || {}, t=surveyUI(), query=ko+' '+(meta.address||'');
      return '<li><div><strong>' + esc(s) + "</strong>" + (ko !== s ? ' <small lang="ko">' + esc(ko) + "</small>" : "") + (meta.address?'<p class="spot-address" lang="ko">'+esc(meta.address)+'</p>':'<p class="cap">'+esc(t.noAddress)+'</p>') + (meta.source?extLink(meta.source,t.source,'out small'):'') + '</div><div class="must-act">' + mapBtn(query) + labelledCopy(ko,t.nameCopy) + (meta.address?labelledCopy(meta.address,t.addressCopy)+labelledCopy(ko+'\n'+meta.address,t.bothCopy):'') + extLink('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query),t.reviews,'mini-btn') + "</div></li>";
    }).join("") + '</ul><p class="cap">' + esc(surveyUI().reviewNote) + '</p></section>';
    var food = '<section class="sec food">' + tag("FOOD", T.foodSub) + '<ul class="chips">' + p.food.map(function (f) { return "<li>" + quietIcon("food") + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<div class="findfood">' + tag("FIND FOOD", T.findFoodSub) + '<ol class="flow">' + T.findFoodSteps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
      '<div class="ff-act">' + extLink(mapUrl(sh.food), T.findFoodBtn.replace("{q}", sh.food), "button") + '<a class="inline-go" href="#tips-food">' + esc(T.moreFood) + ' →</a><a class="inline-go" href="#tips-food-diet">' + esc(X().dietTip) + " →</a></div></div></section>";
    var vrefs = sh.vlogs || [], vitems = (p.vlog && p.vlog.items) || [];
    var vids = vrefs.length && vitems.length
      ? vrefs.map(function (r, n) { var it = vitems[n] || vitems[0]; return { ref: r, title: it.title, summary: it.summary }; })
      : [{ query: p.vlog.query, title: T.vlogSearch, summary: T.vlogPending }];
    var video = '<section class="sec watch-sec">' + tag("VIDEO", T.videoSub) + '<ul class="video-grid">' + vids.map(videoCard).join("") + "</ul></section>";
    var offl = [{ url: sh.official, label: (Q[lang].official) + " · " + (Q[lang].dest[key].official || p.name) }, { href: "visitkorea", label: "VISITKOREA" }];
    if (/KTX|무궁화|ITX|无穷花|ムグンファ|イウム|이음/.test(p.overview.main)) offl.push({ href: "korail", label: T.korail });
    var nav = '<nav class="place-nav" aria-label="' + esc(T.more) + '"><a href="#place-' + prev + '">← ' + esc(longName(prev)) + '</a><a href="#where-finder">' + esc(T.finder) + '</a><a href="#place-' + next + '">' + esc(longName(next)) + " →</a></nav>";
    return hero + '<div class="detail place">' + journey("where") +
      '<article class="place-page">' + basic +
      '<div class="place-cols"><div>' + why + course + must + "</div><div>" + food + "</div></div>" +
      video + officialBlock(offl) + "</article>" + nav + "</div>";
  }

  /* ---------- Trip Finder ---------- */
  var answers = [null, null, null, null];
  var showAll = false;
  function scoreDest(d) {
    var V = Q.values;
    var s = 0, why = [];
    var dur = V[0][answers[0]], it = V[1][answers[1]], acc = V[2][answers[2]], st = V[3][answers[3]];
    var dDiff = Math.abs(d.dur - dur);
    s += dDiff === 0 ? 6 : dDiff === 1 ? 2 : -2;
    if (dDiff === 0) why.push("dur");
    s += d.int[it] * 3;
    if (d.int[it] >= 3) why.push("int");
    var a = 0;
    if (acc === "seoul") a = d.access === "seoul" ? 6 : d.access === "near" ? (d.bus ? -2 : 0) : -5;
    else if (acc === "near") a = d.access === "near" ? 3 : d.access === "seoul" ? 1 : -3;
    else if (acc === "far") a = d.access === "far" ? 3 : 1;
    else a = d.bus ? 2 : 1;
    s += a;
    if (a >= 2) why.push("access");
    s += d.style[st] * 2;
    if (d.style[st] >= 3) why.push("style");
    return { score: s, why: why };
  }
  var MAX_SCORE = 6 + 9 + 6 + 6, MIN_SCORE = -2 - 5;
  function quizResults() {
    var QL = Q[lang], T = U();
    if (answers.indexOf(null) >= 0) return '<p class="quiz-empty">' + esc(QL.empty) + "</p>";
    var ranked = ORDER.map(function (k) { var r = scoreDest(Q.dest[k]); return { key: k, score: r.score, why: r.why }; })
      .sort(function (a, b) { return b.score - a.score; });
    var shown = showAll ? ranked.slice(0, 6) : ranked.slice(0, 3);
    var cards = shown.map(function (r, i) {
      var t = QL.dest[r.key], p = P(r.key);
      var pct = Math.max(5, Math.min(99, Math.round((r.score - MIN_SCORE) / (MAX_SCORE - MIN_SCORE) * 100)));
      return '<li class="result' + (i === 0 ? " top" : "") + '">' + photoBox(r.key, "small") +
        '<div class="result-head"><span class="rank">TOP ' + (i + 1) + "</span><h3>" + esc(t.name) + "</h3>" +
        '<span class="match"><span class="meter" aria-hidden="true"><i style="width:' + pct + '%"></i></span>' + esc(QL.match) + " " + pct + "%</span></div>" +
        (r.why.length ? '<ul class="reasons">' + r.why.map(function (w) { return "<li>✓ " + esc(QL.reasons[w]) + "</li>"; }).join("") + "</ul>" : "") +
        '<p class="point">' + esc(t.point) + "</p>" +
        '<dl class="rows">' +
        "<div><dt>" + esc(QL.labels.duration) + "</dt><dd>" + esc(p.duration) + "</dd></div>" +
        "<div><dt>" + esc(QL.labels.theme) + "</dt><dd>" + esc(t.themes) + "</dd></div>" +
        "<div><dt>" + esc(T.where.rows.time) + "</dt><dd>" + esc(p.overview.time) + " · " + esc(p.overview.main) + "</dd></div></dl>" +
        '<div class="result-links"><a class="button small" href="#place-' + r.key + '">' + esc(QL.detail) + " →</a>" + cmpBtn(r.key) + "</div></li>";
    }).join("");
    return '<div class="results-head"><h3>' + esc(QL.resultHead) + '</h3><button type="button" class="ghost" id="quiz-reset">' + esc(QL.reset) + "</button></div>" +
      '<ol class="results">' + cards + "</ol>" +
      '<button type="button" class="ghost more" id="quiz-more" aria-expanded="' + showAll + '">' + esc(showAll ? QL.less : QL.more) + "</button>";
  }
  function quizSection() {
    var QL = Q[lang];
    var n = answers.filter(function (a) { return a !== null; }).length;
    return '<section class="quiz" id="where-finder" aria-labelledby="quiz-title">' +
      '<div class="quiz-intro"><span class="eyebrow">TRIP FINDER</span><h2 id="quiz-title">' + esc(QL.title) + "</h2><p>" + esc(QL.sub) + "</p>" +
      '<p class="progress" id="quiz-progress">' + esc(QL.progress.replace("{n}", n)) + "</p></div>" +
      '<form class="quiz-form" id="quiz-form">' + QL.questions.map(function (q, qi) {
        return '<fieldset><legend><span class="qn">Q' + (qi + 1) + "</span>" + esc(q.q) + '</legend><div class="opts">' +
          q.options.map(function (o, oi) {
            var id = "q" + qi + "-" + oi;
            return '<input type="radio" id="' + id + '" name="q' + qi + '" value="' + oi + '"' + (answers[qi] === oi ? " checked" : "") + '><label for="' + id + '">' + esc(o) + "</label>";
          }).join("") + "</div></fieldset>";
      }).join("") + "</form>" +
      '<div class="quiz-results" id="quiz-results" aria-live="polite">' + quizResults() + "</div></section>";
  }
  function refreshQuiz() {
    var QL = Q[lang];
    var n = answers.filter(function (a) { return a !== null; }).length;
    var p = document.getElementById("quiz-progress");
    if (p) p.textContent = QL.progress.replace("{n}", n);
    var box = document.getElementById("quiz-results");
    if (box) box.innerHTML = quizResults();
    fixThumbs(box);
  }

  /* ---------- 라우팅 ---------- */
  function route() {
    var h = decodeURIComponent((location.hash || "").slice(1));
    if (ALIAS[h]) h = ALIAS[h];
    var m = /^trip-([a-z]+)$/.exec(h);
    if (m && Q.dest[m[1]]) h = "place-" + m[1];
    if (h.indexOf("place-") === 0 && Q.dest[h.slice(6)]) return { view: "place", key: h.slice(6) };
    if (h.indexOf("help-") === 0 && helpItem(h.slice(5))) return { view: "help", key: h.slice(5) };
    var v = h.split("-")[0];
    if (STAGES.indexOf(v) >= 0) return { view: v, anchor: h === v ? null : h };
    return { view: "home", anchor: h && h !== "home" ? h : null };
  }

  function fixThumbs(root) {
    (root || document).querySelectorAll(".thumb img, .pbox img").forEach(function (img) {
      function drop() { img.remove(); }
      img.addEventListener("error", drop);
      if (img.complete && !img.naturalWidth) drop();
    });
  }

  var lastKey = null;
  function render(fromNav) {
    var L = SL[lang], T = L.ui;
    var r = route();
    var key = r.view + (r.key || "");
    document.documentElement.lang = L.meta.htmlLang;
    document.title = (r.view === "home" ? "" : (r.view === "place" ? longName(r.key) : r.view === "help" ? helpItem(r.key).title : T.nav[r.view]) + " | ") + L.meta.title;
    document.getElementById("skip").textContent = T.skip;
    var navView = r.view === "place" ? "where" : r.view;
    document.getElementById("nav").innerHTML = STAGES.map(function (k, i) {
      return '<a class="' + k + '" href="#' + k + '"' + (navView === k ? ' aria-current="page"' : "") + "><b>0" + (i + 1) + "</b>" + esc(T.nav[k]) + "</a>";
    }).join("");
    var langEl = document.getElementById("lang");
    langEl.setAttribute("aria-label", T.langLabel);
    langEl.innerHTML = LANGS.map(function (l) {
      return '<button type="button" lang="' + l[0] + '" data-lang="' + l[0] + '" aria-pressed="' + (l[0] === lang) + '">' + l[1] + "</button>";
    }).join("") +
      /* 모바일: 4개 언어 버튼 대신 드롭다운 (휴대폰 기본 선택창으로 열림) */
      '<label class="lang-pick"><span class="sr-only">' + esc(T.langLabel) + '</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>' +
      '<select class="lang-select">' + LANGS.map(function (l) { return '<option value="' + l[0] + '"' + (l[0] === lang ? " selected" : "") + ">" + l[1] + "</option>"; }).join("") + "</select></label>";
    document.getElementById("foot-tag").textContent = T.footerTag;
    document.getElementById("foot-note").textContent = T.footerNote;
    renderFooter();
    /* 모바일 하단 탭바: 여행 전 · 여행 중 · 여행 TIP · 여행지 · HELP */
    var tabbar = document.getElementById("tabbar");
    if (tabbar) {
      tabbar.setAttribute("aria-label", X().footStages);
      tabbar.innerHTML = STAGES.map(function (k) {
        return '<a class="tab ' + k + '" href="#' + k + '"' + (navView === k ? ' aria-current="page"' : "") + ">" + ICONS[k] + "<span>" + esc(T.nav[k]) + "</span></a>";
      }).join("") + '<button type="button" class="tab tab-help" data-open-help aria-controls="sheet" aria-expanded="false">' + ICONS.help + "<span>" + esc(T.help) + "</span></button>";
    }
    var fab = document.getElementById("fab");
    fab.innerHTML = ICONS.help + "<span>" + esc(T.help) + "</span>";
    fab.setAttribute("aria-label", T.helpOpen);
    document.getElementById("sheet-body").innerHTML = quickHelp("in-sheet") + emergencyStrip();
    document.getElementById("sheet-close").textContent = T.close;
    document.getElementById("big-close").textContent = T.close;

    var main = document.getElementById("main");
    var y = window.scrollY;
    main.innerHTML = r.view === "home" ? viewHome() : r.view === "where" ? viewWhere() : r.view === "place" ? viewPlace(r.key) : r.view === "help" ? viewHelp(r.key) : viewGuide(r.view);
    document.body.dataset.view = r.view;
    fixThumbs(main);
    if(r.view==='where')filterPlaces();

    if (fromNav) {
      closeSheet(false);
      if (lastKey !== null) main.focus({ preventScroll: true });
      if (r.anchor) {
        var el = document.getElementById(r.anchor);
        if (el) { lastKey = key; el.scrollIntoView(); return; }
      }
      if (lastKey !== key) window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, y);
    }
    lastKey = key;
  }

  function renderFooter() {
    var T = U(), E = X(), C = helpContent();
    var col = function (title, items) { return '<section class="foot-col"><h2>' + esc(title) + "</h2><ul>" + items.join("") + "</ul></section>"; };
    document.getElementById("foot-cols").innerHTML =
      col(E.footStages, STAGES.map(function (k, i) { return '<li><a href="#' + k + '"><b>0' + (i + 1) + "</b>" + esc(T.nav[k]) + "</a></li>"; })) +
      col(E.footHelp, (C.quick || []).map(function (q) { return '<li><a href="' + esc(q.href) + '">' + esc(q.short) + "</a></li>"; }).concat(
        C.items.filter(function (it) { return !(C.quick || []).some(function (q) { return q.href === "#help-" + it.id; }); })
          .map(function (it) { return '<li><a href="#help-' + esc(it.id) + '">' + esc(it.short) + "</a></li>"; }))) +
      col(E.footEmg, T.emgList.map(function (e) { return '<li><a href="tel:' + esc(e[0]) + '"><b>' + esc(e[0]) + "</b>" + esc(e[1]) + "</a></li>"; }).concat(['<li><a class="foot-sos" href="#during-sos">' + esc(T.quick.sos) + " →</a></li>"]));
    document.getElementById("foot-bottom").innerHTML = '<span>SEOUL LANDING · 서울 착륙</span><a href="PHOTO-CREDITS.txt" target="_blank" rel="noopener">' + esc(E.credits) + "</a>";
  }

  function emergencyStrip() {
    var T = U();
    return '<div class="emg"><p class="mini">' + esc(T.emergency) + "</p><ul>" + T.emgList.map(function (e) {
      return '<li><a href="tel:' + esc(e[0]) + '"><b>' + esc(e[0]) + "</b>" + esc(e[1]) + "</a></li>";
    }).join("") + "</ul></div>";
  }

  /* ---------- 도움 시트 · 크게 보기 ---------- */
  var sheet, big, lastFocus;
  function helpExpanded(v) { document.querySelectorAll("#fab, [data-open-help]").forEach(function (b) { b.setAttribute("aria-expanded", v); }); }
  function openSheet() { lastFocus = document.activeElement; sheet.hidden = false; helpExpanded("true"); document.getElementById("sheet-close").focus(); }
  function closeSheet(restoreFocus) { if (!sheet || sheet.hidden) return; sheet.hidden = true; helpExpanded("false"); if (restoreFocus !== false && lastFocus) lastFocus.focus(); }
  function openBig(ko, roman, mean) {
    lastFocus = document.activeElement;
    document.getElementById("big-ko").textContent = ko;
    document.getElementById("big-roman").textContent = roman;
    document.getElementById("big-mean").textContent = mean;
    big.hidden = false;
    document.getElementById("big-close").focus();
  }
  function closeBig() { if (big.hidden) return; big.hidden = true; if (lastFocus) lastFocus.focus(); }

  function copyText(text, btn) {
    function done() {
      var T = U(), old = btn.textContent;
      btn.textContent = "✓ " + T.copied; btn.classList.add("done");
      setTimeout(function () { btn.textContent = old; btn.classList.remove("done"); }, 1500);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      ta.remove();
    }
  }

  /* ---------- 이벤트 ---------- */
  document.addEventListener('input',function(e){if(e.target.id==='place-query'){placeQuery=e.target.value;filterPlaces();}});
  document.addEventListener("change", function (e) {
    var t = e.target;
    if(t.id==='place-duration'){placeDuration=t.value;filterPlaces();return;}
    if (t.matches && t.matches(".lang-select")) { setLang(t.value); return; }
    if (t.matches && t.matches('.checklist input[type="checkbox"]')) { checks[t.id] = t.checked; return; }
    if (!t.matches || !t.matches('#quiz-form input[type="radio"]')) return;
    var before = answers.indexOf(null) < 0;
    answers[+t.name.slice(1)] = +t.value;
    var nowComplete = answers.indexOf(null) < 0;
    refreshQuiz();
    if (!before && nowComplete) {
      var box = document.getElementById("quiz-results");
      if (box && box.getBoundingClientRect().top > window.innerHeight * 0.6) box.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  /* 고민 검색 */
  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (f.matches && f.matches("[data-ask]")) { e.preventDefault(); askRun(f); }
  });
  document.addEventListener("click", function (e) {
    var t = e.target;
    var b = t.closest("[data-lang]");
    if (b) { setLang(b.getAttribute("data-lang")); return; }
    if (t.closest("#skip")) { e.preventDefault(); document.getElementById("main").focus(); return; }
    var c = t.closest("[data-copy]");
    if (c) { copyText(c.getAttribute("data-copy"), c); return; }
    var s = t.closest("[data-show]");
    if (s) { openBig(s.getAttribute("data-show"), s.getAttribute("data-roman"), s.getAttribute("data-mean")); return; }
    if (t.closest("#fab, [data-open-help]")) { sheet.hidden ? openSheet() : closeSheet(); return; }
    if (t.closest("#sheet-close") || t === sheet) { closeSheet(); return; }
    if (t.closest("#big-close") || t === big) { closeBig(); return; }
    var tr = t.closest("[data-ask-try]");
    if (tr) { askRun(tr.closest("form"), tr.getAttribute("data-ask-try")); return; }
    if (t.closest('#sheet a[href^="#"]')) { closeSheet(false); }
    var k = t.closest("[data-cmp]");
    if (k) {
      var key = k.getAttribute("data-cmp"), at = cmp.indexOf(key);
      cmpMsg = "";
      if (at >= 0) cmp.splice(at, 1);
      else if (cmp.length >= 3) cmpMsg = U().where.cmpFull;
      else cmp.push(key);
      render(false);
      return;
    }
    if (t.closest("#cmp-clear")) { cmp = []; cmpMsg = ""; render(false); return; }
    if (t.closest("#quiz-reset")) {
      answers = [null, null, null, null]; showAll = false;
      document.querySelectorAll('#quiz-form input[type="radio"]').forEach(function (i) { i.checked = false; });
      refreshQuiz();
      var f = document.getElementById("where-finder"); if (f) f.scrollIntoView({ block: "start" });
      return;
    }
    if (t.closest("#quiz-more")) { showAll = !showAll; refreshQuiz(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeBig(); closeSheet(); }
  });

  /* 사진 위에 떠 있는 헤더 높이만큼 첫 화면 내용을 내려 줌 */
  var headerEl = document.getElementById("site-header");
  function syncHeader() {
    var r = headerEl.getBoundingClientRect();
    document.documentElement.style.setProperty("--head-h", Math.ceil(r.height + (r.top + window.scrollY)) + "px");
  }
  if (window.ResizeObserver) new ResizeObserver(syncHeader).observe(headerEl);
  window.addEventListener("resize", syncHeader);
  syncHeader();

  sheet = document.getElementById("sheet");
  big = document.getElementById("big");
  window.addEventListener("hashchange", function () { render(true); });
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
  render(true);
})();
