'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e3e68e6850a22251fbea36e3035da641",
"/": "e3e68e6850a22251fbea36e3035da641",
"main.dart.js": "18042eac3028230fe59a41577fc06eb8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d6642082eb24e194e7ea0c84afa79e1",
"assets/LICENSE": "15e3b196ed5d94f4a41d0304f6b8a680",
"assets/AssetManifest.json": "506b8f3b773bf38eefb2d42da8704458",
"assets/FontManifest.json": "50fe94e5f0f120d0fa605d189a741ab3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/arcadepix.ttf": "fb2d739ca446e61b2b83335d3caacd55",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/logo.png": "afeb2c545fbcfd49dbe5d61c7fb045bb"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
