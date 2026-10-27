// Service worker: network-first, self-updating.
// Goal: users always get the latest deployed version when online.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 'no-cache' = always check with the server before using a stored copy.
// Unchanged files come back as a small "not modified" reply, not a full download.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' }).catch(() => Response.error())
  );
});