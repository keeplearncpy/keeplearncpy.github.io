/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c2dc07d9ba4dcb6797f893d19b434b14"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.1287bda7.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.c2260bd4.js",
    "revision": "8c86f36c445e37d4ae1611f0471fa81b"
  },
  {
    "url": "assets/js/11.d500658b.js",
    "revision": "5bf925f7280523db7cefb5484ea66841"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.611a62bd.js",
    "revision": "794f7172b5815a12c7aadf69a0ab8539"
  },
  {
    "url": "assets/js/15.37ed5e9f.js",
    "revision": "c44fe4b4b1fe07d5031045998ecfd617"
  },
  {
    "url": "assets/js/16.57898672.js",
    "revision": "a4196893325c6a5212d490d1b8a45753"
  },
  {
    "url": "assets/js/17.327de010.js",
    "revision": "618edf1d73e822f61050ebed78c72e0c"
  },
  {
    "url": "assets/js/18.d5d9c9ed.js",
    "revision": "0c9210d06c5bac7cbf9b44c2e04cf6d7"
  },
  {
    "url": "assets/js/19.1e01eb17.js",
    "revision": "56c98d040de03e2fee8f0b8148952a10"
  },
  {
    "url": "assets/js/20.29a48119.js",
    "revision": "101f1b5d7542115a3d2313cc59c6ddb5"
  },
  {
    "url": "assets/js/21.bdb51f79.js",
    "revision": "20e11f6bdbeb3b0047b077cdf949ad58"
  },
  {
    "url": "assets/js/22.2926b652.js",
    "revision": "2d2d1f94c717283a4216f77c3a608f82"
  },
  {
    "url": "assets/js/23.0a83b0f2.js",
    "revision": "516dcedfa3e3655c07533ca7d71e2132"
  },
  {
    "url": "assets/js/24.ab2f8f46.js",
    "revision": "c36aa84302fe8533eb3d4a195d918aa2"
  },
  {
    "url": "assets/js/25.aed52b40.js",
    "revision": "b2672ee5f5645d3a493836c6408a9aa7"
  },
  {
    "url": "assets/js/26.74929151.js",
    "revision": "3d98abd8d21e2cdc62cf25eb8b414235"
  },
  {
    "url": "assets/js/27.bd78857a.js",
    "revision": "0cef932dd9d7437d7bc8111a01ca7a32"
  },
  {
    "url": "assets/js/4.08080986.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/5.1442be91.js",
    "revision": "b9d96a147090548206d9a93fa5196ece"
  },
  {
    "url": "assets/js/6.a90d1fe7.js",
    "revision": "36695367ee4859a08a01058a6c3ac770"
  },
  {
    "url": "assets/js/7.8504c2fd.js",
    "revision": "73d8c584d8c90a21c755828da770bc67"
  },
  {
    "url": "assets/js/8.05fc198f.js",
    "revision": "d36e27b50c5b87cd7bdb4c2130a4989d"
  },
  {
    "url": "assets/js/9.be95ca85.js",
    "revision": "76ff2e144d77b29951ed259e4416359f"
  },
  {
    "url": "assets/js/app.c4bbea3e.js",
    "revision": "b68666e26be9cc3771776f27a956f44d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.af4d3f11.js",
    "revision": "edca85aa74e4c030cffb56b25b077d94"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "37e8b7dd4552a10b8be2dfa01c4aa437"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2b90122344df0859cbb5ae744d4682f8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3bcbc5c0b31bc6449f5d72dc666d4586"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "295ed339a64b8b268544d711db07aab1"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e14c397d2e0190ddf082b2572a03874a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7174446ac7df0e05dc6b8d6c43d1efb5"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a52355caff4c2e7370f027d9c3bdd370"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "053aaeb3058e32decd562e231b673606"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "b1e6b6ce50f7c58d9187ff804cd890d5"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "32b53d028d4a7400ca9ba648dbf4784a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d3ba55743cdda8072a9a4180f80f6098"
  },
  {
    "url": "tags/http/index.html",
    "revision": "0bc4a1ba1c97343bc913104328915823"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "da012a23d28a35a3c147290fcfcfd18e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e8a05d2fdcb9c74ad5a36b427997f3e1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "72e3f74dc3831800c9c39ec9f425aecd"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "045007a721270a8a8d9d61d28c7aea44"
  },
  {
    "url": "tags/react/index.html",
    "revision": "3a9b14a6c9c8e2d0ec3c017ac94cc3d6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "b3aa3e8626a34bda0aa661c437ea53e2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0f229c4fce085d83fe53a9cd1c056578"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5c01aa49962b5da80d4e42c48b9f4b46"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "c36cbe9ad83e7cd3823183593a6545cd"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "2c237c2659ebd08212f9c7ce8d762d48"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "953e0c650c438e60e19ec5c22731a4b0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4cba975ed884b7a1f9ace42993e28cb4"
  },
  {
    "url": "timeline/index.html",
    "revision": "4f1d971baf870a3e7cae061ff8ec1ccb"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "5da9958fd222faaa30d973b9029cac54"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "db82bc5ccea14e5af4c80e9d6d371ed5"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "4ca80e15f6a5266dc6cfc0c774cda4ed"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "ac7dbbd374e4de6b0b3d3e5233b0e498"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "af6d8be1f7737c0e956a78857b61e7d9"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "fae8cda9b82ab5c65955c2214bd98f7e"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "647e52a5cee632c99eba86f632918777"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "587ff99863766588b2e6407d653b0ef0"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "a756ded8aa4c1b8aac8bc594d0ddd32b"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "67a92599bc76888eeddebfa35f705d85"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "28afd91b86369185caa6783b740b066f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0d8cbcb6d3556e5943ef9e906731344d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d8e40fa0e00c4b9c147c26c053199efc"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "74ffe1b0a2f9d213ae11bd84d7bdb0f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
