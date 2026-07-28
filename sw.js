JavaScript

const CACHE_NAME = 'test-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.webmanifest'
];

// 설치 시 캐시 저장
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 인터넷 우선, 끊기면 오프라인 캐시 사용
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
