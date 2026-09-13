/* Gargul v4.2.0 — service worker
   cache-first para o app (index, manifest, ícones); as fontes do Google entram no cache na primeira
   visita e passam a servir sem rede (stale-while-revalidate). Mude CACHE ao publicar uma versão nova. */
var CACHE = "gargul-v4.2.0";
var APP = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(APP); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  var fonte = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (fonte) {
    e.respondWith(caches.open(CACHE).then(function (c) {
      return c.match(e.request).then(function (hit) {
        var rede = fetch(e.request).then(function (r) { if (r && (r.ok || r.type === "opaque")) c.put(e.request, r.clone()); return r; }).catch(function () { return hit; });
        return hit || rede;
      });
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  var pagina = e.request.mode === "navigate" || /\/(index\.html)?$/.test(url.pathname) || /\.(webmanifest|js)$/.test(url.pathname);
  if (pagina) {
    /* a página e o próprio sw: rede primeiro (versão nova chega na hora), cache quando não há rede */
    e.respondWith(fetch(e.request).then(function (r) { if (r && r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); } return r; })
      .catch(function () { return caches.match(e.request, { ignoreSearch: true }).then(function (hit) { return hit || caches.match("./index.html"); }); }));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    if (hit) return hit;
    return fetch(e.request).then(function (r) { if (r && r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); } return r; })
      .catch(function () { return caches.match("./index.html"); });
  }));
});
