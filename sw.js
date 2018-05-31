let mainCache = 'cache-x';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(mainCache).then( cache => {
      return cache.addAll(
        [
          '/',
          '/css/styles.css',
          '/js/main.js',
          '/js/dbhelper.js',
          '/data/restaurants.json',
          '/js/restaurant_info.js'
        ]
      );
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then( cacheNames => {
      return Promise.all(
        cacheNames.filter( cacheName => {
          return cacheName.startsWith('cache-') &&
                 cacheName != mainCache;
        }).map( cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  caches.open(mainCache).then( cache => {
    if (event.request.url.startsWith('https://maps.googleapis.com/maps/api/js') ||
        event.request.url.startsWith('https://maps.googleapis.com/maps/vt') ||
        event.request.url.startsWith('https://maps.googleapis.com/maps-api-v3/')) {
      return 0;
    } else {
      cache.add(event.request.url);
    }
  });
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then( response => {
        return response || fetch(event.request);
    })
  );
});
