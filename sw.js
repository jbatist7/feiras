const CACHE_NAME = 'feira-agroecologica-v2';
const urlsToCache = [
  './',
  './index.html',
  './gerente.html',
  './fornecedor.html',
  './coordenacao.html',
  './encomendas.html',
  './manifest-gerente.json',
  './manifest-fornecedor.json',
  './manifest-coordenacao.json',
  './manifest-encomendas.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
