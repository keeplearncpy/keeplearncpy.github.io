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
    "revision": "b90b7787ce2412a38a5d201c9815b64b"
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
    "url": "assets/js/15.00d6efbe.js",
    "revision": "5a6182c70cf0f38dd4bb252fd2cd1bb1"
  },
  {
    "url": "assets/js/16.57898672.js",
    "revision": "a4196893325c6a5212d490d1b8a45753"
  },
  {
    "url": "assets/js/17.9de28c89.js",
    "revision": "4a75389d726519fa2dd178f7ea69a6cc"
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
    "url": "assets/js/20.8d6abd2a.js",
    "revision": "7c6af0eedc3c473ea8dc02ca1f67330a"
  },
  {
    "url": "assets/js/21.68e2c81f.js",
    "revision": "ceada0db078086c27c5f3f57dc32795d"
  },
  {
    "url": "assets/js/22.8f81f49d.js",
    "revision": "bef22f9596db5a7ce52d94ecac5db7d0"
  },
  {
    "url": "assets/js/23.7e91fdbc.js",
    "revision": "bfcee552bb8fefcf0ff4982306400c27"
  },
  {
    "url": "assets/js/24.3a7547e8.js",
    "revision": "e6980e27ce391896a4af3177806ea824"
  },
  {
    "url": "assets/js/25.2ed1ac0f.js",
    "revision": "0a0ce20e250a1c79709803dcb27f1fec"
  },
  {
    "url": "assets/js/26.3097a3ea.js",
    "revision": "e504fd1d3189dbff2a63e6b12aa2f113"
  },
  {
    "url": "assets/js/27.bb75763d.js",
    "revision": "12e832215be8712ce8e5ca1019487a03"
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
    "url": "assets/js/app.5e6526ce.js",
    "revision": "c6ccf5011077d1a03ffd9f5a801517ad"
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
    "revision": "1f5f63d66f522c055e5f31edfc1661c6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9550eb65a48b075f8e7aa7fbfdad1d26"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d40a746de9ea5e444dfcec14c248f57f"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "ffa4cd15ed757c8671e1de598124470f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4950d4a56187ef87993b0c4a6e560470"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4cdfd0180d9985dcf1d17482f6d3bab5"
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
    "revision": "2165afd779054946cb8b26ea93dc1f57"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6450bf7a988781674682196d2e093397"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "2da148f610104aa21450dbd64db13692"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "cd8685ca8b0bcd2e98584f619e8daefb"
  },
  {
    "url": "tags/git/index.html",
    "revision": "06bfde042e92a7fd4b97f95c43901dc2"
  },
  {
    "url": "tags/http/index.html",
    "revision": "d97c50264f0d485bd33515b6901d71ff"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "f17395fe596ffbf945193d63ede1f14a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c53441985ea3ee5391713604cd682dab"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ded111b14615b23687c5033a51270842"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "3a35e7ba54b6194db2305f09692e1886"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0ea1d02353bf55eedcbb132cf045b3d5"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "0be641245baac757155acfa366e83dac"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9e1076d30d6d102d2d662450df459f92"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a94e2af6d919bb26a14b94f6a609decb"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "5850f163802c4210d8e7d4697155324c"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "fd7546f8dc753174f2261c962b470992"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d00f8b1afa86aa8530033688706b4dd1"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "76870c6e0e8bdc6027473dfbe97c57f8"
  },
  {
    "url": "timeline/index.html",
    "revision": "2111bcb4cc43cc9b9bbcf40aee2cae8f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "2949a693b09ce12a3f43c787132b4f60"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "11f1d0573187b5ff2ec5331e281f3a72"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "a2c578f19745cb1c734d6aaba96f07c0"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "f264205a5f968c6c819d92ee23cbace9"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "282be0e150b34f025d019628923e9b91"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "b4d9d9967a680d9bb9aff8134c39fa1f"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "d945547f1a63112f13e9e9514948cfda"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "396b4957e0842ea751312b8f91996803"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "19f3c5266f6db00c7fb56357cec01cd4"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "752bff6566efaee99ed1655d71058b77"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "c1cfac58c992f8309ee862f04e21d157"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a1efd822dda1582f3465404dc1af5032"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7fe84d39fab0f65a025f759bd036c678"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "8d7c63fac64ab09601035be578527595"
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
