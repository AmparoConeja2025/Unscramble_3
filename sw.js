// Service worker: network-first, self-updating.
// Goal: users always get the latest deployed version when online.

// Take over immediately when a new version is deployed,
// instead of waiting for all tabs to close first.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// For every request: go to the network first (get the freshest file).
// Only if the network completely fails do we do nothing special —
// the browser handles the error as it normally would.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Network failed (offline). We don't have an offline cache,
      // so let the request fail naturally, same as a normal website.
      return Response.error();
    })
  );
});