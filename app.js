/* 서울 착륙 — 화면 렌더링 · 언어 전환 · Trip Finder · 여행지 비교
   콘텐츠: content/ko.js · zh.js · ja.js (가이드 문구), content/places.js (여행지 9곳),
           content/quiz.js (Trip Finder 점수), content/shared.js (링크 · 영상 · 공통 값)
   새 언어를 더하려면 content/en.js 를 만들고 LANGS 에 ["en", "English"] 를 추가하면 돼요. */
(function () {
  "use strict";
  var SL = window.SL, S = SL.shared, Q = SL.quiz;
  var LANGS = [["ko", "한국어"], ["zh", "中文"], ["ja", "日本語"]].filter(function (l) { return SL[l[0]]; });
  var STAGES = ["before", "during", "tips", "where"];
  var STAGE_EN = { before: "BEFORE TRIP", during: "DURING TRIP", tips: "TRAVEL TIPS", where: "WHERE TO GO" };
  var ORDER = Object.keys(Q.dest);
  var LBL = { what: "WHAT", how: "HOW", step: "STEP BY STEP", foreigner: "FOREIGNER TIP", real: "REAL TIP", watch: "WATCH", official: "OFFICIAL INFO" };
  /* 단계별 배경 사진 — 이미 출처가 정리된 여행지 사진을 재사용(출처는 사진 아래에 함께 표기) */
  var STAGE_PHOTO = { before: "seongbuk", during: "wonju", tips: "asan", where: "gangneung", help: "chungju" };
  /* 디자인 개편으로 새로 필요한 짧은 문구 (3개 언어) */
  var EXTRA = {
    ko: { stagesKicker: "준비부터 귀국까지", open: "자세히 보기", photo: "사진", credits: "사진 출처 전체 보기", footStages: "여행 단계", footHelp: "문제 해결", footEmg: "긴급 · 도움 전화", listCredit: "카드 사진의 촬영자 · 라이선스는 각 여행지 상세보기 화면에 표기." },
    zh: { stagesKicker: "从准备到回国", open: "查看详情", photo: "图片", credits: "查看全部图片来源", footStages: "旅行阶段", footHelp: "问题解决", footEmg: "紧急 · 求助电话", listCredit: "卡片图片的作者与许可信息，标注在各目的地的详情页中。" },
    ja: { stagesKicker: "準備から帰国まで", open: "くわしく見る", photo: "写真", credits: "写真の出典をすべて見る", footStages: "旅のステップ", footHelp: "トラブル解決", footEmg: "緊急 · 相談ダイヤル", listCredit: "カード写真の撮影者・ライセンスは、各旅先の詳細ページに記載しています。" }
  };
  function X() { return EXTRA[lang] || EXTRA.ko; }
  /* 첫 화면 사진: 경복궁 경회루 야경 (Wikimedia Commons, CC BY-SA 4.0) */
  var HERO_PHOTO = { src: "assets/seoul-hero.jpg", w: 2400, h: 1600, alt: { ko: "경복궁 경회루 야경", zh: "景福宫庆会楼夜景", ja: "景福宮・慶会楼の夜景" },
    author: "Hhk1201", source: "https://commons.wikimedia.org/wiki/File:Gyeonghoeru_Pavilion_in_Gyeongbokgung_Palace.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" };
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
    plane: '<path d="M21 3L3 10l7 3 3 8 8-18zM10 13l5-5"/>'
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
      case "text":
        return '<div class="blk">' + h + "<p>" + esc(b.text) + "</p></div>";
      case "steps":
        return '<div class="blk">' + (b.title ? h : tag(LBL.step)) + '<ol class="steps2">' + b.items.map(stepItem).join("") + "</ol>" +
          (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "flow":
        return '<div class="blk">' + h + '<ol class="flow">' + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ol>" +
          (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
      case "chips":
        return '<div class="blk">' + h + '<ul class="chips">' + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
      case "search":
        return '<div class="blk">' + h + '<ul class="chips search">' + b.items.map(function (q) {
          return '<li><a href="' + esc(mapUrl(q)) + '" target="_blank" rel="noopener noreferrer">' + quietIcon("search") + esc(q) + ICONS.ext + "</a></li>";
        }).join("") + "</ul>" + (b.caption ? '<p class="cap">' + esc(b.caption) + "</p>" : "") + "</div>";
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
          return '<div class="phrase-group"><p class="phrase-head">' + esc(g.title) + '</p><ul class="phrases">' + g.items.map(function (p) {
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
      '<div class="card-body"><div class="card-main">' + c.blocks.map(function (b, i) { return block(b, c.id, i); }).join("") + "</div>" +
      (side ? '<aside class="card-side">' + side + "</aside>" : "") + "</div>" +
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
    var hid = "qh-" + (cls || "home");
    return '<section class="quick ' + (cls || "wrap") + '"' + (cls ? "" : ' id="home-help"') + ' aria-labelledby="' + hid + '"><div class="quick-head"><div><span class="eyebrow">' + esc(X().footHelp) + '</span><h2 id="' + hid + '">I NEED HELP WITH...</h2><p>' + esc(C.ui.intro) + "</p></div>" +
      '<a class="sos-link" href="#during-sos">' + quietIcon("sos") + esc(H.sos) + "</a></div>" +
      '<ul class="quick-grid">' + C.items.map(function (item, i) {
        return '<li><a href="#help-' + esc(item.id) + '"><span class="q-icon">' + quietIcon(item.icon) + '</span><span class="q-text"><small>' + esc(item.stage) + '</small><strong>' + esc(item.short) + "</strong></span>" +
          '<span class="q-no" aria-hidden="true">' + (i < 9 ? "0" : "") + (i + 1) + "</span></a></li>";
      }).join("") + '</ul><details class="quick-shortcuts"' + (cls ? "" : " open") + '><summary>' + esc(C.ui.shortcuts) + '</summary><ul>' + items.map(function (i) {
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
      '<div class="hero-cta"><a class="button light" href="#before">' + esc(C.ctaStart) + ' <span aria-hidden="true">→</span></a><a class="button glass-btn" href="#where-finder">' + esc(C.ctaFinder) + "</a></div></div>" +
      '<p class="photo-note on-photo">' + esc(E.photo) + ' · <a href="' + HERO_PHOTO.source + '" target="_blank" rel="noopener noreferrer">' + esc(HERO_PHOTO.alt[lang] || HERO_PHOTO.alt.ko) + "</a> · " + HERO_PHOTO.author +
      ' · <a href="' + HERO_PHOTO.licenseUrl + '" target="_blank" rel="noopener noreferrer">' + HERO_PHOTO.license + "</a></p></section>";
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
    var flow = '<section class="flowline" aria-labelledby="flow-title"><div class="wrap"><div class="band-head left"><span class="eyebrow">HOW TO USE</span><h2 id="flow-title">' + esc(C.flowHead) + "</h2><p>" + esc(C.flowSub) + "</p></div>" +
      '<ol class="route">' + C.flow.map(function (f) {
        return '<li class="' + f[0] + '"><a href="' + esc(f[2]) + '"><b>' + esc(f[1]) + "</b><small>" + esc(f[3]) + "</small></a></li>";
      }).join("") + '</ol><p class="route-sum">' + C.flowSum.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join('<i aria-hidden="true">→</i>') + "</p></div></section>";
    return hero + stages + '<div class="help-band">' + quickHelp() + "</div>" + flow;
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
      '<div class="detail help-detail"><div class="help-layout"><article class="help-content"><section aria-labelledby="help-choose"><h2 id="help-choose">' + esc(T.choose) + '</h2><div class="help-cases">' + item.choices.map(function (choice, i) {
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
        return '<li class="place-card">' + '<a class="pc-link" href="#place-' + k + '"><span class="pc-media">' + photoBox(k) + '<span class="pc-dur">' + esc(p.duration) + "</span></span>" +
          '<span class="pc-body"><strong>' + esc(longName(k)) + "</strong><small>" + esc(p.tag) + "</small>" +
          '<span class="pc-meta"><span>' + quietIcon("clock") + esc(p.overview.time) + "</span><span>" + quietIcon("train") + esc(p.overview.main) + "</span></span>" +
          '<span class="pc-themes">' + p.themes.slice(0, 3).map(function (x) { return "#" + esc(x); }).join(" ") + "</span></span></a>" +
          '<div class="pc-act"><a class="button small" href="#place-' + k + '">' + esc(T.detail) + "</a>" + cmpBtn(k) + "</div></li>";
      }).join("") + "</ul></div>";
    }).join("");
    return intro("where", Pg) + '<div class="detail where">' + journey("where") +
      subnav([["where-finder", "Trip Finder"], ["where-list", T.listHead], ["where-compare", T.cmpHead]]) +
      '<p class="where-why">' + esc(Pg.why) + "</p>" +
      quizSection() +
      '<section class="places" id="where-list" aria-labelledby="pl-title"><div class="sec-head"><span class="eyebrow">9 DESTINATIONS</span><h2 id="pl-title">' + esc(T.listHead) + "</h2><p>" + esc(T.listSub) + "</p></div>" + groups +
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
      var ko = sh.spots[n] || s;
      return '<li><div><strong>' + esc(s) + "</strong>" + (ko !== s ? ' <small lang="ko">' + esc(ko) + "</small>" : "") + '</div><div class="must-act">' + mapBtn(ko) + copyBtn(ko) + "</div></li>";
    }).join("") + "</ul></section>";
    var food = '<section class="sec food">' + tag("FOOD", T.foodSub) + '<ul class="chips">' + p.food.map(function (f) { return "<li>" + quietIcon("food") + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<div class="findfood">' + tag("FIND FOOD", T.findFoodSub) + '<ol class="flow">' + T.findFoodSteps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
      '<div class="ff-act">' + extLink(mapUrl(sh.food), T.findFoodBtn.replace("{q}", sh.food), "button") + '<a class="inline-go" href="#tips-food">' + esc(T.moreFood) + " →</a></div></div></section>";
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
    }).join("");
    document.getElementById("foot-tag").textContent = T.footerTag;
    document.getElementById("foot-note").textContent = T.footerNote;
    renderFooter();
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
      col(E.footHelp, C.items.map(function (it) { return '<li><a href="#help-' + esc(it.id) + '">' + esc(it.short) + "</a></li>"; })) +
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
  function openSheet() { lastFocus = document.activeElement; sheet.hidden = false; document.getElementById("fab").setAttribute("aria-expanded", "true"); document.getElementById("sheet-close").focus(); }
  function closeSheet(restoreFocus) { if (!sheet || sheet.hidden) return; sheet.hidden = true; document.getElementById("fab").setAttribute("aria-expanded", "false"); if (restoreFocus !== false && lastFocus) lastFocus.focus(); }
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
  document.addEventListener("change", function (e) {
    var t = e.target;
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

  document.addEventListener("click", function (e) {
    var t = e.target;
    var b = t.closest("[data-lang]");
    if (b) { setLang(b.getAttribute("data-lang")); return; }
    if (t.closest("#skip")) { e.preventDefault(); document.getElementById("main").focus(); return; }
    var c = t.closest("[data-copy]");
    if (c) { copyText(c.getAttribute("data-copy"), c); return; }
    var s = t.closest("[data-show]");
    if (s) { openBig(s.getAttribute("data-show"), s.getAttribute("data-roman"), s.getAttribute("data-mean")); return; }
    if (t.closest("#fab")) { sheet.hidden ? openSheet() : closeSheet(); return; }
    if (t.closest("#sheet-close") || t === sheet) { closeSheet(); return; }
    if (t.closest("#big-close") || t === big) { closeBig(); return; }
    if (t.closest("#sheet a")) { closeSheet(false); }
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
  render(true);
})();
