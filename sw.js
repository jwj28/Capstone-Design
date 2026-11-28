/* 서울 착륙 — 오프라인 캐시 (https 로 올렸을 때만 동작)
   여행 중 지하철 · 데이터가 끊긴 곳에서도 한 번 열어 본 화면을 다시 볼 수 있게 함.
   사이트 파일을 고친 뒤에는 VERSION 을 바꿔야 휴대폰에 새 버전이 반영돼요. */
var VERSION = "sl-2026-11-28-guide-paths-1";
var CORE = [
  "./", "index.html", "styles.css", "app.js", "manifest.webmanifest",
  "content/shared.js", "content/ko.js", "content/zh.js", "content/ja.js", "content/en.js",
  "content/places.js", "content/quiz.js", "content/search.js", "content/services.js",
  "content/survey-guides.js", "content/place-addresses.js", "content/survey.js",
  "content/climate-map.js",
  "content/guide-paths.js",
  "content/help-ko.js", "content/help-zh.js", "content/help-ja.js", "content/help-en.js",
  "assets/icons/icon-192.png", "assets/cards/tmoney.jpg", "assets/cards/ezl.jpg"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
/* 같은 사이트 파일: 캐시를 먼저 보여 주고 뒤에서 새로 받아 둠 (stale-while-revalidate). 외부 링크는 건드리지 않음 */
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) { if (res && res.ok) c.put(req, res.clone()); return res; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
