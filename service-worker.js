const cacheName = 'hk-v1';
const assets = [
  './',
  './sng-hk1.html',
  './manifest.json',
  './style.css',
  './video/zot-1.mp4',
  './images/icon-192.jpeg',
  './images/icon-512.jpeg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
