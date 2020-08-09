'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e3e68e6850a22251fbea36e3035da641",
"/": "e3e68e6850a22251fbea36e3035da641",
"main.dart.js": "8d00f3bc442a2ae3bd01dbcfedfd6c8f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d6642082eb24e194e7ea0c84afa79e1",
"assets/LICENSE": "15e3b196ed5d94f4a41d0304f6b8a680",
"assets/AssetManifest.json": "821fb07c30b0d48e73610a24e3f598e8",
"assets/FontManifest.json": "65e1bd92f688f799fd7f2d14fc25c911",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/arcadepix.ttf": "fb2d739ca446e61b2b83335d3caacd55",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/assets/logo-white.png": "7a2ab269d0cc830b27e5748e4082f57b",
"assets/assets/logo-G.png": "74339da568248896cb3586d0b017fd61",
"assets/assets/logo.png": "1ed89effbd508acd29cf7c10a51d70cb",
"assets/assets/icons/icon_video_black.png": "6ad5fae18deb00a11baa5380e9102de2",
"assets/assets/icons/icon_review.png": "77cb0089653b8c7bde850bf59599feb4",
"assets/assets/icons/icon_review_black.png": "567901443546679f7cc8e71367b3917e",
"assets/assets/icons/icon_video.png": "0143abfa51163e73bb4aedb459b02390",
"assets/assets/icons/icon_podcast.png": "6e30075451266f7d30c54a83b74495ce",
"assets/assets/icons/icon_news.png": "c6899f82730812a826dfab47e0d0c06f",
"assets/assets/icons/icon_podcast_black.png": "d1bc9e3db24c250115b71c575b6d7ffd",
"assets/assets/icons/icon_news_black.png": "bd13b36e4945335bbf16f3359d42da08"
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
