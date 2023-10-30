'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a15eec09df29d10a9c89d481b9a65c99",
"index.html": "75e7622c7bfdf93ccfb77ccb52e05c01",
"/": "75e7622c7bfdf93ccfb77ccb52e05c01",
"main.dart.js": "ef72e1c78dee60766f8353c6d4dec141",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60dadf59a68af1ca1ce7845b3f8b3bc2",
".git/ORIG_HEAD": "2ca45437d003731d513f0ec8c4bedc4e",
".git/config": "5534fc4357a016de6be5b1e3f2739acd",
".git/objects/61/32ec7bf0cb5a0c6b6267a2d0f306a73640672b": "adcb1001bacef53dfd7887b508e5e719",
".git/objects/0d/55e3ea40d3c89f5f368fbee8ff69de282c7331": "06538b65491c4be854eca65989cd4465",
".git/objects/59/5d9f88ce174f41af170a630846265c015b22ad": "7e32337b253846d71906473355a36c8d",
".git/objects/59/2c941b081e83d2b78874c5131bc92b56eaac8a": "cc3b9345e9f201243db076834e9938e9",
".git/objects/59/293ee2ccb9ac8fba97d4029760c2bbc94cb7da": "422ce8b07930009b68c94349169b56b5",
".git/objects/59/d499c12e984634557dde16c14411123b89fe7f": "f7cef2a73cf6489e744732db855f3791",
".git/objects/59/abbf5d22286f8d87c378995f6e3fe46aa977d6": "b9ae98a2130fabbd2dc12c440c3c89aa",
".git/objects/92/53d95a21983207e16440e602b7e290ab7f25aa": "33535681c624b9b9750a8cc0bcef99ad",
".git/objects/92/4ab83e6dd63478d1d04d321af5b4044ef46b9d": "006d1dc227c5ed950e6a08683fc0ccdb",
".git/objects/66/dd918db84279ab31cdf9ca57f7340cab5dd04c": "59cd4f3ed5ff06f3b2eba0318d78abce",
".git/objects/3e/205940d3ad05fe5aa605431f7a1e2865a2ca5d": "2bbcfe7d0fe3db2a3dd3e01aef2c4f2b",
".git/objects/50/0eb51670bbbe681e4a9eed9a68c5fe15f3850a": "925152bc51ff43e7fe8d3b6cccd896ba",
".git/objects/3b/b019c7c2cf9cf901fd8945e0d69b30afce9050": "bce099ce0111789fdf99179c6d4caca9",
".git/objects/03/d8ad88def0e4b95db827ecc9422567a08f9da2": "9283df0803db2820cb3db4eccd623b5b",
".git/objects/9b/690185ce7500c3d768d4f32578587885a5b094": "5dd092a434961b90c8a80bb7af4fdfb0",
".git/objects/9e/589a19f5aedf5c513e69d92e109537373b0f86": "b0a8542f99893925d020d6a61e85e835",
".git/objects/9e/0f0e74f316121d98b65f5bbc83fa27254f7287": "5bfdde7ccefe0d1bcdae8b06cbd587b8",
".git/objects/04/aa2fd6a8a01e1f6610879cecc2827baa2720f0": "356f9cc5fb4756a5119a710fb17722a4",
".git/objects/6a/d0494f13af4f3d77e81fd1b193d9a2c76b833a": "fdc0827f3b7fa7c86e4be43b7151ca72",
".git/objects/6a/b55aa8338ab559faa903cb01f04db30c666686": "215ed6346b2952c5edc50ce35406f8fc",
".git/objects/6a/4aa29bfafbb9bca52ae70400decd5c8c7cd931": "e60ed9d12194df27e49f3a294582bc69",
".git/objects/32/4366d2d1b3b2f654e628944e4c62dbffe8aae7": "e4e9bbed7922500277032450c7aecc2f",
".git/objects/32/2b4d0bd5be8a034ace6dd2f4eac9f8650484a5": "91cb36b4c6af02303f2809b5124ff63a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/abf07037a0122fc1f1e62027e92bc966a3942e": "582692820b1786e429368bd85e611e98",
".git/objects/3c/3a0ef72251da3a7c8523b50c03b734249cf0d6": "26296912a0b207104bb6cdcca36f5aa8",
".git/objects/3c/98898a1b3b11bd22698f0e1ebfee96a2310e02": "7318f6cc6da919b00e3c0497b825f2f5",
".git/objects/56/3996ebe9e19be6845b1b1abfe8d6972a4ee17b": "12bb77533f0aedb5152ff454079aa1cb",
".git/objects/58/a44da08157c5cea46849bc0d5f37d9a9a28a21": "a64bdf7686ca641eb8460e4e382e6da9",
".git/objects/67/b383a6551557bc376515d2ea70b5a4c5fe8e72": "6be48a7548bed5e136845af002f7513d",
".git/objects/0b/eba46db6909e613ebaabf71122685749361d1b": "a7215171799268d993ba67532a026d45",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0e/cdbaecc989b2f561e980fae2b32f9073172305": "f5d0ec560e0c4bab168a8a66582cb012",
".git/objects/0e/6faa951bdd5f4748f5db8cc815265e302873c6": "f244557afa4898d45070b466403bcd1e",
".git/objects/34/36f108fbc5550324806a93e8b6d66b1618a66a": "9cd584ffa0e6670e0d7d70d91e5f253c",
".git/objects/34/dec4b698d83e57cd006f5953e468628b5ab50d": "79843aa9c55f45b3001ffd156a103857",
".git/objects/5a/bc30976bce52891aac626635afbcab29149c1c": "13c29cc4e6f1180e57ed293820defb5c",
".git/objects/5a/5dafa60559fb7f0642b46e85b2d757e2b35e92": "9e295e5367495f2dd852bd9ddf9f7392",
".git/objects/5f/aa4bd5b5275cc416a26a3997c8382230fbdfc3": "592980ccfdcf01a4eb83aa30a9d104e0",
".git/objects/5f/86a6148052fc606170215f5fd4c59bce4c80a5": "63f4bc23454ef82777996f23e5063e01",
".git/objects/9d/c9292675b0acd41bcaaf7ac3d56388d9618e6c": "a8bf5a0325ca9be351c4d72e41f56e32",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/02/63f410a028f46f459c340ec2763cc231296bb9": "dbba999a623202d9027fd0d2a92ad16a",
".git/objects/a4/cba17805656dbd0e50fea4e3ef11c6f3f03c05": "24d1de0ba0ac55cae352509496a4cd67",
".git/objects/a4/33f95e5f0f72ee1cffe5ae698962910c1b4607": "b429dbb302424f1b8cc332a7efcb6f3d",
".git/objects/a4/bd128abcb8f431256a1da918596b10085f5dbd": "8575175a6dabe2c6f8fbeafd1bb20281",
".git/objects/a4/c32bbd4088e8a7df3d058905c5b3fa43a23002": "c92f923bbaefb65fe2866d590cad715e",
".git/objects/a3/0d76511a440a01159e9127d3833a1d74f4c8a2": "40c1c763484489646c8aac68af113fa8",
".git/objects/a3/cf624009602e9d8f07aecbdb6c28109c8e1019": "e290f6ebca0569cb414f8c35c52e9f2a",
".git/objects/ac/83ac2665c1ad9c44de4ecc541f53b98aa18bbc": "d4d2722d7406c14ffd5a597e9fab8797",
".git/objects/ad/d687ccd10cf4ac74a9be8ed35e3967d0eb47dd": "fdc752a9cf49369568cb83a6b393dc41",
".git/objects/bb/934c246fb7269a314884c0716ac4372c431a73": "42edf08915b653873a015df63a4145b4",
".git/objects/bb/5230df8d013aae607ae2a46ab79681b63329b4": "6a986e96cc47be6de80cfd3a044806d0",
".git/objects/bb/f030a11bd93bd5bfc266193ac0cc4ff0cff204": "6e02d4a9b4477199fc6ed5cc44c64eea",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/03c73e542c13547c021f868af21a526fd113e9": "3381badb30007060b1b170b6253c4634",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/be/ac6891e31addfa991c11f4465378fb1a4040f9": "4118e2eaca9618c849a08096a0c1ebe6",
".git/objects/df/d17fdcfd08c719f69bcb3b973ffecb87625836": "1fcce6aa554623c67b8640d9799a8882",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/7309d9bed5f9e701b045062334a7c35d70a500": "5c20fdae67d612696b4f91fdfd375de0",
".git/objects/b4/4b53e931cff5ed973e83644ecca344b664f7eb": "159438b7a66212dd866a770c8a48ee50",
".git/objects/b4/5b54425bf3836d789f41b34a9c47f5775f15d6": "0760941c38b1854079e5488e6a026a4e",
".git/objects/a5/d21190ac9c419d9edd5c183fa3b268e65066fd": "a863b0518d29a2b86c755625b202e022",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/9bdbaa99303f8881bd54abb6a64075c95381f6": "54365cc988dc49cfa9bb25f3efd59296",
".git/objects/ab/3b669ea2efaddfded3c2e13dc859fa043831d2": "0d9af2d8aa7ba1ed7812a3c99aa2c4d4",
".git/objects/e5/c9ad20df3cb10b0ba5246f1a1612e548e21295": "929478b1b8f98cfe8f689a7d58e8d829",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/937bd1f9eed9d4b889676fd269bffea4c659a8": "0a600ce83c7f80eb5b78e69b4792a016",
".git/objects/f3/ece4e4a6691ee0f51b5c47118b4355334d67da": "86233e9ec40b1a9fe18dfcc0368fdb7d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/693a42412e3da09da78ad62215161b98c40440": "0885e5f62918719955c4f9e90ba66adb",
".git/objects/c0/354a8668c46cd471eab046f561f6d33600e425": "318b54a9235753349ec801a37e8e0a54",
".git/objects/c0/ede8d101b271380249db0f6ecc6ccee8253223": "053ad645b78c33c84603ed58fb420cb9",
".git/objects/ee/569ba9e8c0e2577a5758b4dc400e2d3d8fdb73": "7681b4794d30adf06d237c7edee39bd1",
".git/objects/c9/4515eae0b8ee3efd6a8c6a75aa1bd3390e07d8": "6032cfc7a5e6bf21cfe549bc93d19be2",
".git/objects/c9/67666a8d3c8adf8be07a02dd74706f242e4372": "38212689b6dcb7f5e2b14dfc3b1657ba",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/145485cd13f6f4a1c4340dff3feb687820a995": "49aca75d87765a1795e87fceeb8b713e",
".git/objects/cf/e9d5c1ecd135d93da28a842da2c78e863cf0fe": "88c61c50c3c1139c841672f2e87a0057",
".git/objects/cf/3dbd97485f7293011f32d163f7e8e9a857e972": "aec48106cbeb2099bd981b16f959d668",
".git/objects/ca/5c073f723d5e540aaf5279795deee12a9da575": "064e898ae7cec89913dd71d22030f91f",
".git/objects/ca/2db545ea5341939e11b18c394ac7542c527492": "4d36c6cf7225991fbf613a7b7063a81d",
".git/objects/ca/3f4d966fde3cb83ae6291f843a0e16e832033d": "4620856b7e361e8b815c8e74ecbdebbe",
".git/objects/ca/b3cba1c572731333abc51500e0bf6f18df6925": "8afd801acd8033643945f177590d6e81",
".git/objects/fb/47825eca3ef26a12564186639d1564d7c676a6": "58019727fc7aa259eb126336fd3f9937",
".git/objects/ed/51adf6531b6e3b4b964b9352fafb5b4bc4c99a": "96fa192efdb45b74ec0ab5534b33fc0b",
".git/objects/ed/aebe8ae0ea295e99afd4a61a23e9acad5338cd": "62ada7e6ee8a4baa4104c0832f75fec5",
".git/objects/ec/8160b65e8967207508ecce7c8c73569b6d7dc4": "d05b1012c6e47533d60a2cb8079da057",
".git/objects/ec/7124a706748c2807eda7bf50913d81385d2e85": "c706d9c61efd71c94422efa3a0ccc7b4",
".git/objects/4e/3bc5aa9fe53938c0c4dccb8f0d775fa9bf8a96": "61109a1a00341bb4e0d4edbe23ed0bc7",
".git/objects/4e/90569f02b91fc418193bea4718bca8d3438b32": "979d20a5a33408a14663f2b3679b9f0a",
".git/objects/4e/82f67adb43430f449d0cb1a3ef83ba5a5bc8af": "2db6cee86c2bc8e925ed62dfa37f3068",
".git/objects/20/03624102afc0620d9c9f16003690e03fb5cc3e": "5b8b74bc6693b264b0f732ef0dbd1af5",
".git/objects/18/df40d5088f51a9b40724af9b70f24d3713cc9e": "da320fb421a572953957e2c70685e28b",
".git/objects/4b/fd3ec30b691d024e66c8e7b9c4cae80cd2dab9": "ab36ef0800a47b81afff13c48a054d10",
".git/objects/4b/f3e20fd79702017604822ee8e834d48adbbff9": "c910d53a6013b25c415e583c49cc861b",
".git/objects/4b/5ee493af96dd4efe32ad144283f574e95be634": "84a1d552984fa4d5efb50876409c7aa9",
".git/objects/7d/dc0d78f2d666361543b944c7822f16ecf20c88": "16ab5764ca6fcdf36e37fb6de67ee175",
".git/objects/42/b703bfda8c4a25c629b1bffbb3830b5eaf693b": "420eebc2fc8b56cfc2e69377aceb2444",
".git/objects/45/4848084bf0fb0f20eb3cd01003610fca2c15e7": "ad008b4981a5b83ebbc3a9873a4b63e0",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/f800c6d6213619d9e4181c9c9f9e1bed2b5496": "9c0dd50d75ec47d5a97ca7d6f068bfd3",
".git/objects/73/56abe13e95692839145c40682ed159c7c3e1e8": "011d5b20b3babef06e1ac4c36c037ed6",
".git/objects/87/05dcc4985f229867bb22a087a13163ed6e4644": "5453e1f82b51fd40a087c9101affd348",
".git/objects/80/89d4dc28046ada0ebbe77491ab04fade1d1b2f": "c0440baae1bc1bf7dc06409369d81f95",
".git/objects/80/e634d0db016b971305c77fb344d0ea83429b4f": "6d628714fb23c710ccd69d9f6c3e471e",
".git/objects/74/5a48f5b6a8bf327336771c41f40a2a70079e35": "bfb189f6edd411491130577cac29243d",
".git/objects/74/6eb2003ffc68b53038e1ac5233f7f909b9b822": "a44ed8c89a4fe6e0a895a41b41811e1c",
".git/objects/28/8f2315733db73b0c9e4a8ebafa8d1a7f84b318": "c3d11bc980c87638f68ce41df18a09b0",
".git/objects/7b/1b2e56a7d0327ac6b0463c418296e4d90d2a97": "4743bc61441d67e79249916c41234269",
".git/objects/7b/825c694d04d0123eb089be1ca5f6fbfedd339f": "bf51d90fa09b91058f05f3596b86c49c",
".git/objects/7b/68853348b6b62e43303f0a55428253f9feb1b4": "37081924f3c1c85105aa6095b66dd21e",
".git/objects/8f/5f0cfc90344721d424e48ced5c93b4718db3c2": "810b7f83fa322d0bc34a44df0ed331d0",
".git/objects/8a/824cb00a5babfd80bfc3921e1536670fd2d5ca": "05d0e10fb52f73cc716f3c5f203a5e91",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c6aad68760a80fb63f6cacf0e07857f53b3e5f": "2accc9ae160cd66b9bcb1cfc58ba4dba",
".git/objects/7e/6553c528e6839049907a9481232b788bfc7884": "252e72a2d8a2bad0bd196d01d6c9e6a1",
".git/objects/7e/ccd0c34abd08aae9a138c066efebc1f86fa505": "6c17a1efe91ac0bb8a6c9d467114512c",
".git/objects/7e/a16f022b4a47481c3177a939f16fb626a0b494": "3e5204b4b171953bb551c4f8a57a0472",
".git/objects/10/88054274c3c29abd489000a10be8847a865987": "a720ad4dab8c3f8357621109c45f0b56",
".git/objects/10/59ebd6053ac0991f0466d0e78598c8972dea61": "7f092fb07b955588631eb1e907672b84",
".git/objects/19/3e5d53f31998c616ce606a0526590177d94467": "f0250d6ef717c5c278a35a923f44142c",
".git/objects/19/0014faf1d1ef4c1afa9f59f781fd0777c9247e": "e01b491cb372e9094e0c88dc7059dbfb",
".git/objects/21/6ea3e555a01d2b7c28170cfa8aa43e6134f505": "222507a79c20a4bf08ad8bb74e7b78b1",
".git/objects/21/06ed09ec19f81634cf817807117ed7ad724fcd": "81d45f3b1c0084771360574acf6bbf57",
".git/objects/4d/f788cc899c061099b52a50659182d1678dea1e": "f9445510072fafeaac4ec0cbd29605f3",
".git/objects/75/a35744964e1b187e98fbf0e8da3dd867361c63": "0799457c0caac2416e3e24c1d46735ca",
".git/objects/81/778b6e3a40215f7e56e8b689e2827dde2ca3dc": "bcd46dc723f3c8f61665e277548ce22a",
".git/objects/81/b513dfa7dddaf27f127919bdb5f5a67ad5ce93": "5b8a7c1cf18d3b98fc07efa28692e98f",
".git/objects/86/e78862879dd6cb4e20261dfdb55a1c2f6d086e": "c0eea2ec7129bceb67abf04f6e8aa4b2",
".git/objects/72/9de914e8e0f8b1d030481510e7d67aec63fb05": "745c68aa1c4ce7a772bded2242105f6b",
".git/objects/2f/e2bfa0a756650905db260213886998ddc7ec91": "c4a321342a92598a5ac18e06b337c130",
".git/objects/2f/abd60318537d223c5f688269ebcc1176ff6148": "2380f383964740f4b3f85bcdc4b57133",
".git/objects/2f/d5ac84a40cabfda285268c648ec9a053b1d613": "78d670e635a78a5daec9dd8f7f92e7cc",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/0e140cabddc9fb77ff680f0d3570f9ff4efc14": "5adea259ffca9544149c5fc715d43ba1",
".git/objects/43/9a6946b4aff94386623325ef9e26ba82bb9bb4": "d6ebbd4c45df143870b2cd4e140a341a",
".git/objects/88/b7b3d9e115c5d0c70fc6d8f224237091567c26": "9b02fc24d30c884b1fac02221bdcd6d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/82b112067d2b50a3020fb51d88c98f3b5e5096": "d101ba5906e2ba30bffe0b2343c2f1e5",
".git/objects/9f/a42d0d99bbfbfd80543fee8e6e1bae9ffd8cfa": "187c6d1e28446c7ade0ccce076ca89c8",
".git/objects/38/21398b106879f5dcc57346d69eeff60b7252eb": "7f4680cdc228d1cf1d6758ca8e79e684",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/38/410d35cba3489d628fee039a5923c77ad8e09f": "0b0d65a4e4162fac7bb692646b50ff95",
".git/objects/38/5400edda690530e73263377bbf507db73e9e60": "fd7328006a5e269d8084412dd7134bc4",
".git/objects/38/05aa67390debb61bb4e9365cc5cf6c7791ab20": "b6bdb70afdec91ce354e362290024dff",
".git/objects/00/4a665cfe0e922cbdb10b57ee30173161da2deb": "f41a72c670dd2699894d3ea406c6c2ca",
".git/objects/6e/7d60595ef3744116ea38c4bb829d1fafdfbce5": "349f024cf36cb1891893333f0d0b0c96",
".git/objects/6e/7e065fd5c659e8c8ceb7227982caec31b6ba16": "4ad5d2ffdce7bd36002f95cb0e391d13",
".git/objects/09/ebcb0c5276fde564fe3382a07afde3e02b82ca": "20ba4641005907a40aff51941cc52bbd",
".git/objects/09/e1bcb6a2fb309a10834b4ed7670c41650942b7": "13e26c65983d294bc6c9ebad5afee88b",
".git/objects/5d/d5f1e62aeee6639e3901ee47c408571a2371bd": "88b1587d33800ddc2101d58124f2a84d",
".git/objects/5d/f2506cd8c9705e5546c01e68187593188fb65c": "ef6eb49ed1027ee1be6e58af50334fe2",
".git/objects/91/d7eb6f1bca4982da17a04caee50d39c08e7b72": "593f3a710851350cfc0129c85ef4a001",
".git/objects/91/36e9efea1ac505668f5d93311fdccc3aca261d": "19b21b82ed12f6208742d375c27aa03f",
".git/objects/65/467cdb6eedf58cbcb102564b27d1c7565ac8e7": "558e6e8ba84dc650978b502b9e6d7b85",
".git/objects/65/40ee3b6ae6d23f85223e3c5b2de415ba4cc53b": "72e4a218f4275336e739e6b6e71be875",
".git/objects/65/6e9af286356ff7b654f25adc47c8d653f0ff84": "a831dd466c7a4df7a5da0fb6778756d5",
".git/objects/96/89165aea0913d73529c7d1c03982b7738af9d7": "70860f7d39225b7605cc5023deb1d3f6",
".git/objects/96/87198530b12570445c16ac8dd0137435aef61c": "78bfe79cdb34b5f1416a41039e192292",
".git/objects/54/f962cbca5d20af13ff0f47b800d24eef2d28ac": "273073e468d36138e450a0f5a2472df2",
".git/objects/53/206ee44d1b61f943c978a2f1fe841cd63d3f48": "50b4436c26b6d0227b88bd0f414e898a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/68d8706207cc1752b0e63cdab92bea2c2e61b7": "e4756ca536de0d59a5e215fa95032059",
".git/objects/3f/90e562e62c9d2abcb9640ebe3a80cf0193da36": "51aeb04f46bb9a6df157fb790f1b6e54",
".git/objects/30/ed81877ff10cf9ba761c9a8d718459b062df86": "92b9d66ca40047e0bcd9da20beb78ca8",
".git/objects/30/c01c8ce3710f7607e7e143af6bcfb7940f5064": "a6d5a977a44e8800855656074bbf327a",
".git/objects/30/d626dbcf6fe5d1219d793b8d10559c7d13bfad": "469197521efa00b2ae8acf7ca6f7b60c",
".git/objects/5e/42f131bc39416e7e4710ae75d3331cb4f35197": "e751edd5877935a85d48948498f9df6e",
".git/objects/5b/59b3495bdad76d4a5d84735146065aeb8b17da": "4896489b3ef905288dcec884d2071161",
".git/objects/5b/a2a3467ed5f37ab8e87a2c6708d601588f8ead": "1727ea11091c7d50fd74418a655cf48a",
".git/objects/37/389e866bf59ec51d5ef49b092fd9794fa3db21": "42dfbe2511759a1a587ca48c8cd0ba7d",
".git/objects/08/313d99bab0908fad09d416fb5d5704c2911284": "5bebc8d47f8442cfeaff30e57be190cc",
".git/objects/6d/a2b01d1fa401cf15b5a9fec08bfc11146b90a9": "9a8e86131677236cbc7bb31ccd4e8899",
".git/objects/6d/8c47d190de659097a12f85bc36aa509c82eb6b": "bfa9508de453df39e34b3ae9fe6e59bb",
".git/objects/01/d244b4c59a47627f052e75de34b0df8a189d3e": "5d69fd77e595ef0d0cb6a381e5fbf5e2",
".git/objects/01/a00f93512aa8721b6d95d3645b228532f7dd81": "9324edd1d1a2cd3ad02e8bd451d61f79",
".git/objects/01/f906a5c6760465d8cb6bdd4bc76c42329ff506": "0f11dc2805108f9d655cf7118f93c50a",
".git/objects/01/847c6a7552755cbde0a0b3568b8b2a27a70ffe": "065edba31e847e652ae44da3a5d63f60",
".git/objects/06/07b933afc0a3ef5afb1524f73842214637ec59": "73c6d57c4e14b2addcd4c151ebc8eee8",
".git/objects/06/7eb25b76e46e18c8b1088c138e93be2d8d266a": "4994b3d4084e5e55597c8004e300a838",
".git/objects/52/6bda706abc454cf6333aec6bec064ad99906f5": "93dd5e1516829f38481f444c358d6154",
".git/objects/52/8583b0372b431271b573e41a98fdd67e35da1b": "2c7c990170322d8482bec5b8b30704ab",
".git/objects/55/3de2dc9507def020d2125f03599a243b8db7b7": "e3c0ed850be3ef0c93e24dfd458b494a",
".git/objects/55/ade2da962d49afba829430da46a9c730b399ca": "e1cef0325b3560fe2846c95d69cce9c6",
".git/objects/55/c054d37491319fadb9833b3fff733cf664c1c8": "5efa292d4c1722bcb9439efd66f4a663",
".git/objects/97/b4ea00d583698d9f0eb8a783326af1f38793f2": "dfcc686617c34a5bcdd60f29156432ae",
".git/objects/97/d50df726ba666d325562adc9685f7c137686a6": "53c8797788e3234364e9d7729885b4d3",
".git/objects/0f/d9470c3baf1886c7fae306fda9c5720749f550": "d9f99b590d22ab7ccc2eddf2a5601eef",
".git/objects/0f/5efc8a864e830471f3e4dc2935b50fbfe5b764": "0cf8e4434473fa6cc98ec7ad19b223f9",
".git/objects/0a/2b8ddbd1cd14740bd55b7b4e4d663ee9b72f59": "faa3301c666de730ac630d46771c724a",
".git/objects/64/91ff99bb50ecb9c985ef85260e816a1b80c5a0": "216906daf8b32a5454bad98b0c951dff",
".git/objects/90/d606813fbe3db7ae6c2d33c2099f5fc4328643": "dfdd0c222cc37ae518e058691a77c32d",
".git/objects/90/73f132364af1188aebe5443bbde58dd412f035": "ae52e2c1de4ae689ceb8a6d3fb5c6336",
".git/objects/d3/7aad68c47262e47aaf74091506e0e9cdc8bd83": "2c8be443f0fcf23f5d5105552c3f5592",
".git/objects/d3/4901573d44b4eedefff6e0f5286eee1cbbe19f": "25d20503e58a9a4caff6e4ff8faee3b8",
".git/objects/d3/2805f588678b6a2ce4a2ed3ea8e46c90ddeccc": "da4fad1a20be95eade4d0caf4b9e7e68",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/51fbcd3e5cf0a58f5fdaaf4643745fea1af0ad": "5493c1a7d5428298a8d960d0b7075831",
".git/objects/a0/200b765e9efc57c45ecf1bf146a4638fe61035": "d742eaa4ddf0b1eabf60362bb70b27d3",
".git/objects/b8/2e2efd2b87a4efb45164db6cbaef57e00e8c84": "11f39455fd2fd8f7bf6c98ab64f00a81",
".git/objects/b8/ccd80fe85da2f612dc4893b7273bb61ef210a0": "c31383551b7073251b129c434cae1f48",
".git/objects/dd/b16da01caec42e04397e529b41b1dd88b92da9": "7e0836095301a2d915782134be80db20",
".git/objects/b6/70ce3b5259078cdae69fccdd2040eb2332de0f": "33d8eb67d332a1227b268d5b1d99e764",
".git/objects/a9/1895a2bdef9a18b00c4bb372f935a89310c251": "923d62d495da683933b2536dac516474",
".git/objects/d5/c22588e654d53772dcbcc7149e9ef64312b592": "abb4ce0f49648f83819ee2c3946a6f20",
".git/objects/d5/49b488366dc7b580c6af55c09752f8060ec709": "9020f151e2f50967ff84b1d192ca321e",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/741d21ebb215064e86df3c1db9f5ef3a426875": "f46c259c7a350c640110db6cc8a6955b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e6cae331ab72450607f071fb49827a3c0ca1ac": "47f7f721147e17d84d52e6a9244cbd85",
".git/objects/b7/af74b6581fe10fef76321eb2ffd5a6eb6d91ee": "94120736f11229e051f68d8deb56e40c",
".git/objects/db/4e02672d138888485c1d45565e109599817e1e": "689d753e63c8c049f94779edfa5f0d69",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/2ca4d8623ea0f1cc6ad6b454e5fbf8209373b3": "517699a95553a5bbaa20208bc624b204",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/42cae83a81e66ce960c09415537358d0212ab0": "189cee8b2b6bd5c0eca3c5a7de6dde68",
".git/objects/a1/ab9c600062a58f35aea377eac5bd1135ea0a2b": "b30a84fa0eb3d4c18b7107d1a41b0b51",
".git/objects/ea/ee2a70d4b7f1d4e8ad5519d9fe3114af3667de": "465dc13a2daffbd1d1557494d55719f1",
".git/objects/cd/8ef5b42300db5c2b9901764b7d9897703c8cf6": "358df8833452fa3b30377426236512ee",
".git/objects/e6/b29c0af2584c0f3bcd19d8d9fb2e3b1296d312": "44d499684bb5766a305d2c17a7e251f8",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/a0e9531389d064ac7a82a872c0319998cf25f5": "36ac729935e7ef681f97a50c052f75c1",
".git/objects/f7/8d81f2ed34e1ef612e513ab990058e22e03be7": "cc052aef2088371aeeb3f2ad2319e39b",
".git/objects/e8/6f384a1a03557ac91b61329d6e98126f99e503": "309f89dfdde7a05e86ee7434da5ede0b",
".git/objects/c5/c21e5c12db8eb55efdd7389eb2bded50cc7548": "44aece89b17b032e235422af320864af",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/49e4fc6d0d329d09af5c416cb0aeaaa276e53d": "a1f6b91ce557774fb9dae1ee425071ce",
".git/objects/f6/8b593bf7d3830206b3b1530094ee36c3e35b8e": "138187d232212052ead8d06c6b3fb556",
".git/objects/e9/8e16545b3fecd168b3a97bd00d64447cabe4d0": "1caa2f698d20366ae50bcc62b856c645",
".git/objects/f1/c428d4d4862611338b22108dd55f5c69f5cda7": "e829d222719322da71b9b573570c6353",
".git/objects/cb/e9935dfd192c9aff75f49dd9b273694360d8b5": "9953f5f510f47f4f16884c717fbea16e",
".git/objects/cb/11f8d7e57b406166a0ce6b8c93082fe922ebf8": "d75d05a3565eb0d1788482e9b7b54531",
".git/objects/ce/0214337eb88c19a9361886b51b1a498d40977a": "f101e5f0ca757f850ae0566b534875c8",
".git/objects/ce/c2b3efe90b78ff8ff9157cdfe6243758b06f62": "c0a61ef41faf5b028113469e37ce8a2c",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/16b5e224da2081a0097aabaa4983f77adc9cf6": "7dfa8e10903c42a225f7e3a83ef2b8c3",
".git/objects/2c/43381b2dac89ee23249b0303c6c835700bc296": "b2eaf5d16acf316ddf7dec8f3788e0f5",
".git/objects/2d/d6e16099a2555d2275e8c79fc52cb5e8379b9f": "88672894d7de304f570e45f049ab4b33",
".git/objects/2d/d38b1354f754cf63cb51bd3aa5fdba8786613d": "169b8e73f2be8b9a06698f29be8eca4a",
".git/objects/83/98f7ac035c81ac1003129f8e7479fc7ebd893c": "4228459800e5b544f6f201fdc71c9dfd",
".git/objects/83/5d788b02e2abd4766329e1095944dc6861df01": "586f2cde717617162b09677d452dc080",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/70/db6f574c0ec659b83e6721919b53150d08d22e": "c15b57c4535bfac541991c163d8c430d",
".git/objects/70/d7325fd332036436a88f7a09a4bf698e29c297": "59f126552aed85370cf2be4eb7cde6f8",
".git/objects/70/8e5414f319a43f19a17ba521c186c65d7c9cdc": "8a5b9b7c07dcdd54dc31cec8e3ede848",
".git/objects/4f/cdeb1a4466b40c2d69c23d3341bae19cdd4d8e": "6a924549cdeff30af54730c892e46800",
".git/objects/8d/247e5366ca4d5bd80a1fa7147d501277c25511": "54139846bc5709fa6fafdce3f028b957",
".git/objects/8d/50bb9a1a210c8bab437a042fa7910905cbdbbb": "c962986c727acc8a7074642fd4ebeb6d",
".git/objects/12/e94175c1c7038a65cf59ff39f198736b358cc1": "35ba2e435b1ddac778826150430a2dda",
".git/objects/12/112b05b222d9162f77459f1862abfbf9c98237": "74474b104a98c26113446e01b0cd0819",
".git/objects/8c/68bd867c8f1d71951912620db99ee4b0d67f50": "df19f064279082014f14553409b9fa56",
".git/objects/8c/5e2e00d1ef292fe3d19d34269df54135938000": "f973af4f455587b028bc30423a4e07f1",
".git/objects/85/5874370dd2d30985ab809ac7c135c75f620117": "539f19f11d05ad1044b808b5214acf89",
".git/objects/85/79ed490d9998233b40916c1d74bb8bff32969d": "4e25ec81c88e03461d8b989b0fc9ab08",
".git/objects/1d/fff07abf7b6208d09b7e23a6f8d58b601b5e3b": "2cf5fb2570d356f19576c6988804c97a",
".git/objects/1c/fa6e73678a7114f6882fe61fea71d9339cca9a": "c5619d8140c0887067e5489a22634585",
".git/objects/82/9a6852f053bf90081873c36d50b1252cfdea02": "66bb4fc55bb73651b207a6b2fbca05eb",
".git/objects/82/a5fa414a4d4c2f843216fb23750229d1bf0e7d": "9621129eff5e18cad139059eb684ba1c",
".git/objects/49/8e0bc3f43c0f362971a25994cffd0744d2a6e6": "7d1fed2079c900bf8ec2c0a9adb8495b",
".git/objects/2e/2974915e2b27eb603f735cdce4fa115cdd6892": "0996a3f013f8d11eb966829306cc4178",
".git/objects/2b/1db92e70de4e197fa0dc9c1c6b6a3b64053db0": "e2aab042692c2357872e3aea794744b3",
".git/objects/2b/010f8d926ac2bf75e8e70c1e29d942b892984d": "729ffecfbcf56619ef64295e29d4d9ee",
".git/objects/47/a2dc7ac989a0458a03e4098e0ca2a085f0366d": "34d5270bfbdcda9526d9a6c2cd6c6cd4",
".git/objects/47/95c301e6384dd17e8bfd84c21b2cb3d249a56f": "261a3fe652cb3c550cf745048d397388",
".git/objects/47/e4ad2a3d04685bc02bc4a7b2eb4d723b780505": "273ff1894e6c6e4a1fae7093d9812cae",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/8b/e52e218aa10a01eae39d528dc654956d69943d": "73f0277c14b44ffec4e6162a3500c68c",
".git/objects/7f/1bc102608049e0b9186f22f708edf77d1dcf93": "997efaaf62c69e2a6437270b0e4bfd36",
".git/objects/7a/fcb4654956f9a2608930db3f0d04d74cea100d": "1ab11085dd75cfb17cebc071d4bc8d04",
".git/objects/7a/3db94a9b7d065f24d40d6e4d94c8296e1291c8": "e299cf64ba1c5a69d896e677e96a57a8",
".git/objects/14/8657ee17ac4b604439c15bc4e9066fbb735d1b": "ce66b745971a5eb0049a534467fe2121",
".git/objects/14/428e923c28e0a1dccfbbe0ce65e286e46be49a": "fefe8e7871052321715fbefacd6efa16",
".git/objects/8e/8a13ba90f398243c27cfb0bed6ca774dc4641b": "0202b098a4ea2892e6f69335dc20c891",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/22/5899a4ae24909127564d065a307cd0bb52942e": "d8b547bcaadbadca0cc8acaac16e809c",
".git/objects/25/05283aeaf42e0791200ab7ba4002ce772212c8": "79e47ce3b0add09398ca93a744ca4390",
".git/objects/25/8f2d8a11d1f34470d8f0dff381997565743b09": "e46078250d28230a91d2912e3ee1764a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "552a3ec7be0419491848ff9c7e78993c",
".git/logs/refs/heads/master": "552a3ec7be0419491848ff9c7e78993c",
".git/logs/refs/remotes/origin/master": "daec6a39b820d29df7ab298113d3f3ef",
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
".git/refs/heads/master": "3365fc2a19b0c6807d517d465146872d",
".git/refs/remotes/origin/master": "3365fc2a19b0c6807d517d465146872d",
".git/index": "23c3583ee8a85664d7644b8429c810e1",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/FETCH_HEAD": "b9420116526a4d1f9c3d1a252cf0a431",
"assets/AssetManifest.json": "27df1e5deb7e5c0328e2be25fba55620",
"assets/NOTICES": "4cd81f51a5dd4c7d182c8015e1a6614a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6ed462de0ab156f4e20968b620c0db89",
"assets/fonts/MaterialIcons-Regular.otf": "43d679a07da571a6fd39965e89ae805b",
"assets/assets/images/avt.jpg": "671f453cad67b39f5bed8caa5305d3a0",
"assets/assets/images/profile/Prolile.png": "3b9273639c45d36bd3995dea7b8d2581",
"assets/assets/images/kitchen/FoodPicture.png": "e76e8b8a23c064c3ed5e4e0dc3f81a26",
"assets/assets/images/kitchen/Heart.png": "6c961c19d8f71396e6c77dc0133aee5b",
"assets/assets/icons/home/Home.png": "57abdbdeb7c893a5ff42c8e090d1b216",
"assets/assets/icons/home/Folder.png": "3b5af7a113dbed2e337cfad4737cf5f5",
"assets/assets/icons/home/Profile.png": "0fe4364acd00fe6007dbd9b9ee1520a0",
"assets/assets/icons/home/Chat.png": "de4e1ecb0b071f02f62fa6e24949164d",
"assets/assets/icons/Ellipse172.png": "ea08ee7ef087d9b097b169fb12101956",
"assets/assets/icons/Ellipse.png": "a00c023a07454cf6df100a4337ea178d",
"assets/assets/icons/business/directions.png": "1c013d5eac002ffa61562e8351f672f2",
"assets/assets/icons/business/EditSquare.png": "93c040eb7a5c32a26557cb2be2f20719",
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
