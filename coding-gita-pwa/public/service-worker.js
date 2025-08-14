const CACHE_NAME = 'coding-gita-cache-v2'; // Increment version to force update

// On install, cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // We only cache the entry point. Other assets are cached on-the-fly.
        return cache.addAll(['/', '/index.html']);
      })
      .then(() => self.skipWaiting())
  );
});

// On activate, clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// On fetch, use a network-first strategy for navigation and stale-while-revalidate for others
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  // Strategy: Network-First for HTML pages (navigations)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If successful, clone and cache the response
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // Strategy: Stale-While-Revalidate for all other assets (CSS, JS, images)
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Fetch from network to update the cache in the background
      const fetchPromise = fetch(event.request).then(networkResponse => {
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });

      // Return the cached response immediately if available, otherwise wait for the network
      return cachedResponse || fetchPromise;
    })
  );
});
