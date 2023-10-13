'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a15eec09df29d10a9c89d481b9a65c99",
"index.html": "a423ea7210695cedb2b33f4957fc1848",
"/": "a423ea7210695cedb2b33f4957fc1848",
"main.dart.js": "31032210f33a632eb56cad25ea94ceff",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60dadf59a68af1ca1ce7845b3f8b3bc2",
"assets/AssetManifest.json": "a5ea27a85ea13be79c92c01318d9e5ca",
"assets/NOTICES": "3b40d1c62203ac10b9bd1d34f19c1ef4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3cef5ee8788f615ca1270938fc3622a8",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"assets/assets/images/profile/Prolile.png": "3b9273639c45d36bd3995dea7b8d2581",
"assets/assets/icons/home/Home.png": "57abdbdeb7c893a5ff42c8e090d1b216",
"assets/assets/icons/home/Folder.png": "3b5af7a113dbed2e337cfad4737cf5f5",
"assets/assets/icons/home/Profile.png": "0fe4364acd00fe6007dbd9b9ee1520a0",
"assets/assets/icons/home/Chat.png": "de4e1ecb0b071f02f62fa6e24949164d",
"assets/assets/icons/Ellipse172.png": "ea08ee7ef087d9b097b169fb12101956",
"assets/assets/icons/Ellipse.png": "a00c023a07454cf6df100a4337ea178d",
"assets/assets/icons/profile/task.png": "4b891716ac5c1ba0ab2ad118b25fe1bd",
"assets/assets/icons/profile/task_done.png": "e54dc2507e6122f3b05ee400bab484c2",
"assets/assets/icons/profile/next.png": "0584187254fb210e5be348a939248b64",
"assets/assets/icons/task/More.png": "f26f05716f34ea4eae0934b29a587b95",
"assets/assets/icons/setting/update.png": "bfd9f7835a1cc82303ccf0b9ee23c2e9",
"assets/assets/icons/setting/notif_red.png": "247df910fc9c59970cea1299ca2f60dc",
"assets/assets/icons/setting/avt.png": "9be663842d0e78894e6c04e326396a9f",
"assets/assets/icons/setting/person.png": "af23797586ef593d64d862521dfc5e68",
"assets/assets/icons/setting/notif.png": "52502c859d61cbc22b966d04f892ad79",
"assets/assets/icons/setting/language.png": "d516f73528360d13312a1763f9626e6f",
"assets/assets/icons/setting/edit.png": "36c1ea367d72f7d5d95ddbf8e325c5d5",
"assets/assets/icons/setting/next.png": "d6525cea0d4776bcb1da16f4aada7c67",
"assets/assets/icons/setting/star.png": "ca096c99bcc5396734a3009cb7d392cb",
"assets/assets/icons/setting/message.png": "cb6fbe77ea70b3240e375d61d356a7d2",
"assets/assets/icons/setting/Ellipse18.png": "46767bd93d3ac838e8a0f2781a2b436f",
"assets/assets/icons/Backarrow.png": "3cd599cfcb4c6993d2c720cbd722252a",
"assets/assets/icons/employee/Ellipse198.png": "13e42c1fe321b4f52b8826d5c5cd600b",
"assets/assets/icons/employee/Prolile_background.png": "2a9c58d0614ecfb10255f1bb377fd38d",
"assets/assets/icons/employee/Search.png": "a59cd300a954263d956991e83e457802",
"assets/assets/icons/employee/Camera.png": "49eb07bb0b0800266e88459335f41165",
"assets/assets/icons/employee/Prolile.png": "c5a70530b7d9eb5e58d9b3bd29fba723",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
