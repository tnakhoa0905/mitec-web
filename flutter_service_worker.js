'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a15eec09df29d10a9c89d481b9a65c99",
"index.html": "35916eb376044e273ccfbea7cc673e36",
"/": "35916eb376044e273ccfbea7cc673e36",
"main.dart.js": "024789b851e79790e9dca2a1c34e9ea2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60dadf59a68af1ca1ce7845b3f8b3bc2",
".git/config": "5534fc4357a016de6be5b1e3f2739acd",
".git/objects/66/dd918db84279ab31cdf9ca57f7340cab5dd04c": "59cd4f3ed5ff06f3b2eba0318d78abce",
".git/objects/9b/690185ce7500c3d768d4f32578587885a5b094": "5dd092a434961b90c8a80bb7af4fdfb0",
".git/objects/9e/0f0e74f316121d98b65f5bbc83fa27254f7287": "5bfdde7ccefe0d1bcdae8b06cbd587b8",
".git/objects/6a/d0494f13af4f3d77e81fd1b193d9a2c76b833a": "fdc0827f3b7fa7c86e4be43b7151ca72",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/34/dec4b698d83e57cd006f5953e468628b5ab50d": "79843aa9c55f45b3001ffd156a103857",
".git/objects/9d/c9292675b0acd41bcaaf7ac3d56388d9618e6c": "a8bf5a0325ca9be351c4d72e41f56e32",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a4/cba17805656dbd0e50fea4e3ef11c6f3f03c05": "24d1de0ba0ac55cae352509496a4cd67",
".git/objects/a4/bd128abcb8f431256a1da918596b10085f5dbd": "8575175a6dabe2c6f8fbeafd1bb20281",
".git/objects/bb/f030a11bd93bd5bfc266193ac0cc4ff0cff204": "6e02d4a9b4477199fc6ed5cc44c64eea",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/03c73e542c13547c021f868af21a526fd113e9": "3381badb30007060b1b170b6253c4634",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f3/ece4e4a6691ee0f51b5c47118b4355334d67da": "86233e9ec40b1a9fe18dfcc0368fdb7d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/693a42412e3da09da78ad62215161b98c40440": "0885e5f62918719955c4f9e90ba66adb",
".git/objects/c0/354a8668c46cd471eab046f561f6d33600e425": "318b54a9235753349ec801a37e8e0a54",
".git/objects/c0/ede8d101b271380249db0f6ecc6ccee8253223": "053ad645b78c33c84603ed58fb420cb9",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/145485cd13f6f4a1c4340dff3feb687820a995": "49aca75d87765a1795e87fceeb8b713e",
".git/objects/ca/2db545ea5341939e11b18c394ac7542c527492": "4d36c6cf7225991fbf613a7b7063a81d",
".git/objects/ca/b3cba1c572731333abc51500e0bf6f18df6925": "8afd801acd8033643945f177590d6e81",
".git/objects/ed/aebe8ae0ea295e99afd4a61a23e9acad5338cd": "62ada7e6ee8a4baa4104c0832f75fec5",
".git/objects/ec/8160b65e8967207508ecce7c8c73569b6d7dc4": "d05b1012c6e47533d60a2cb8079da057",
".git/objects/42/b703bfda8c4a25c629b1bffbb3830b5eaf693b": "420eebc2fc8b56cfc2e69377aceb2444",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/f800c6d6213619d9e4181c9c9f9e1bed2b5496": "9c0dd50d75ec47d5a97ca7d6f068bfd3",
".git/objects/87/05dcc4985f229867bb22a087a13163ed6e4644": "5453e1f82b51fd40a087c9101affd348",
".git/objects/80/e634d0db016b971305c77fb344d0ea83429b4f": "6d628714fb23c710ccd69d9f6c3e471e",
".git/objects/74/6eb2003ffc68b53038e1ac5233f7f909b9b822": "a44ed8c89a4fe6e0a895a41b41811e1c",
".git/objects/7b/1b2e56a7d0327ac6b0463c418296e4d90d2a97": "4743bc61441d67e79249916c41234269",
".git/objects/8a/824cb00a5babfd80bfc3921e1536670fd2d5ca": "05d0e10fb52f73cc716f3c5f203a5e91",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/0014faf1d1ef4c1afa9f59f781fd0777c9247e": "e01b491cb372e9094e0c88dc7059dbfb",
".git/objects/21/06ed09ec19f81634cf817807117ed7ad724fcd": "81d45f3b1c0084771360574acf6bbf57",
".git/objects/72/9de914e8e0f8b1d030481510e7d67aec63fb05": "745c68aa1c4ce7a772bded2242105f6b",
".git/objects/2f/d5ac84a40cabfda285268c648ec9a053b1d613": "78d670e635a78a5daec9dd8f7f92e7cc",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/05aa67390debb61bb4e9365cc5cf6c7791ab20": "b6bdb70afdec91ce354e362290024dff",
".git/objects/6e/7d60595ef3744116ea38c4bb829d1fafdfbce5": "349f024cf36cb1891893333f0d0b0c96",
".git/objects/65/6e9af286356ff7b654f25adc47c8d653f0ff84": "a831dd466c7a4df7a5da0fb6778756d5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/ed81877ff10cf9ba761c9a8d718459b062df86": "92b9d66ca40047e0bcd9da20beb78ca8",
".git/objects/30/c01c8ce3710f7607e7e143af6bcfb7940f5064": "a6d5a977a44e8800855656074bbf327a",
".git/objects/30/d626dbcf6fe5d1219d793b8d10559c7d13bfad": "469197521efa00b2ae8acf7ca6f7b60c",
".git/objects/5e/42f131bc39416e7e4710ae75d3331cb4f35197": "e751edd5877935a85d48948498f9df6e",
".git/objects/5b/a2a3467ed5f37ab8e87a2c6708d601588f8ead": "1727ea11091c7d50fd74418a655cf48a",
".git/objects/6d/a2b01d1fa401cf15b5a9fec08bfc11146b90a9": "9a8e86131677236cbc7bb31ccd4e8899",
".git/objects/01/a00f93512aa8721b6d95d3645b228532f7dd81": "9324edd1d1a2cd3ad02e8bd451d61f79",
".git/objects/01/f906a5c6760465d8cb6bdd4bc76c42329ff506": "0f11dc2805108f9d655cf7118f93c50a",
".git/objects/97/b4ea00d583698d9f0eb8a783326af1f38793f2": "dfcc686617c34a5bcdd60f29156432ae",
".git/objects/d3/7aad68c47262e47aaf74091506e0e9cdc8bd83": "2c8be443f0fcf23f5d5105552c3f5592",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/2e2efd2b87a4efb45164db6cbaef57e00e8c84": "11f39455fd2fd8f7bf6c98ab64f00a81",
".git/objects/dd/b16da01caec42e04397e529b41b1dd88b92da9": "7e0836095301a2d915782134be80db20",
".git/objects/d5/c22588e654d53772dcbcc7149e9ef64312b592": "abb4ce0f49648f83819ee2c3946a6f20",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/6f384a1a03557ac91b61329d6e98126f99e503": "309f89dfdde7a05e86ee7434da5ede0b",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/49e4fc6d0d329d09af5c416cb0aeaaa276e53d": "a1f6b91ce557774fb9dae1ee425071ce",
".git/objects/f1/c428d4d4862611338b22108dd55f5c69f5cda7": "e829d222719322da71b9b573570c6353",
".git/objects/ce/0214337eb88c19a9361886b51b1a498d40977a": "f101e5f0ca757f850ae0566b534875c8",
".git/objects/ce/c2b3efe90b78ff8ff9157cdfe6243758b06f62": "c0a61ef41faf5b028113469e37ce8a2c",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/d7325fd332036436a88f7a09a4bf698e29c297": "59f126552aed85370cf2be4eb7cde6f8",
".git/objects/8d/247e5366ca4d5bd80a1fa7147d501277c25511": "54139846bc5709fa6fafdce3f028b957",
".git/objects/12/e94175c1c7038a65cf59ff39f198736b358cc1": "35ba2e435b1ddac778826150430a2dda",
".git/objects/8c/68bd867c8f1d71951912620db99ee4b0d67f50": "df19f064279082014f14553409b9fa56",
".git/objects/2e/2974915e2b27eb603f735cdce4fa115cdd6892": "0996a3f013f8d11eb966829306cc4178",
".git/objects/47/a2dc7ac989a0458a03e4098e0ca2a085f0366d": "34d5270bfbdcda9526d9a6c2cd6c6cd4",
".git/objects/47/e4ad2a3d04685bc02bc4a7b2eb4d723b780505": "273ff1894e6c6e4a1fae7093d9812cae",
".git/objects/7a/fcb4654956f9a2608930db3f0d04d74cea100d": "1ab11085dd75cfb17cebc071d4bc8d04",
".git/objects/7a/3db94a9b7d065f24d40d6e4d94c8296e1291c8": "e299cf64ba1c5a69d896e677e96a57a8",
".git/objects/8e/8a13ba90f398243c27cfb0bed6ca774dc4641b": "0202b098a4ea2892e6f69335dc20c891",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "125c6277bb934716f8ae5cc7d6c0812c",
".git/logs/refs/heads/master": "125c6277bb934716f8ae5cc7d6c0812c",
".git/logs/refs/remotes/origin/master": "9503400d9837accc1d969f0d22286a97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "44176883aa4729afc56fb6e2e6557fd2",
".git/refs/remotes/origin/master": "44176883aa4729afc56fb6e2e6557fd2",
".git/index": "0610f1151e453b71119d1837d82d5e7b",
".git/COMMIT_EDITMSG": "31fd34f39f12dc5d034587cafdd90db8",
"assets/AssetManifest.json": "d1da428a93b708b743288d920f6e6eca",
"assets/NOTICES": "5b8e909d8cf67c2d8777972a36f1d93d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5df8a1fc0c42c7c67c5faa3ad3d42fc6",
"assets/fonts/MaterialIcons-Regular.otf": "fed59e4fd0613d9ce29039c98550b902",
"assets/assets/images/profile/Prolile.png": "3b9273639c45d36bd3995dea7b8d2581",
"assets/assets/icons/home/Home.png": "57abdbdeb7c893a5ff42c8e090d1b216",
"assets/assets/icons/home/Folder.png": "3b5af7a113dbed2e337cfad4737cf5f5",
"assets/assets/icons/home/Profile.png": "0fe4364acd00fe6007dbd9b9ee1520a0",
"assets/assets/icons/home/Chat.png": "de4e1ecb0b071f02f62fa6e24949164d",
"assets/assets/icons/Ellipse172.png": "ea08ee7ef087d9b097b169fb12101956",
"assets/assets/icons/Ellipse.png": "a00c023a07454cf6df100a4337ea178d",
"assets/assets/icons/business/directions.png": "1c013d5eac002ffa61562e8351f672f2",
"assets/assets/icons/business/Clock.png": "8c60106d99baf5efa9c9678b49b997b9",
"assets/assets/icons/business/GoArrow.png": "b3b401f1b472aefd62dfa5483a48faf7",
"assets/assets/icons/profile/task.png": "4b891716ac5c1ba0ab2ad118b25fe1bd",
"assets/assets/icons/profile/task_done.png": "e54dc2507e6122f3b05ee400bab484c2",
"assets/assets/icons/profile/next.png": "0584187254fb210e5be348a939248b64",
"assets/assets/icons/task/Calendar.png": "258ca89e6f14d9dbfefa544f8f27df4f",
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
