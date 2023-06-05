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
    "revision": "9fe26f7613bffac3173147a4e25d1cd4"
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
    "url": "assets/js/14.11686aa7.js",
    "revision": "5746ced4bf6a080e2aaeeb4098b30a9f"
  },
  {
    "url": "assets/js/15.f299a2ab.js",
    "revision": "454d8ab7df405a6277541f08710b2068"
  },
  {
    "url": "assets/js/16.57898672.js",
    "revision": "a4196893325c6a5212d490d1b8a45753"
  },
  {
    "url": "assets/js/17.69c49cca.js",
    "revision": "eaa0943b3bad4cfccc0ca1cb3dc47945"
  },
  {
    "url": "assets/js/18.50199ae4.js",
    "revision": "7c3487e41f7e4130f3801eb0578fb856"
  },
  {
    "url": "assets/js/19.64c2c3f8.js",
    "revision": "1994f3f49c79a6f46b9144e3e3fefde0"
  },
  {
    "url": "assets/js/20.393d2957.js",
    "revision": "81d3d46fc776c5d10608258c99821104"
  },
  {
    "url": "assets/js/21.254f009e.js",
    "revision": "d0da01f839a5973270cd3b31fddd0ccb"
  },
  {
    "url": "assets/js/22.8f81f49d.js",
    "revision": "bef22f9596db5a7ce52d94ecac5db7d0"
  },
  {
    "url": "assets/js/23.6fce534f.js",
    "revision": "43aa83e544abfb813c8a4686b694bad3"
  },
  {
    "url": "assets/js/24.24ff7f34.js",
    "revision": "7de1500cf905c7ac2789d69d73c7852a"
  },
  {
    "url": "assets/js/25.ea08e707.js",
    "revision": "98bdcf17811929734d318e20a9955373"
  },
  {
    "url": "assets/js/26.3097a3ea.js",
    "revision": "e504fd1d3189dbff2a63e6b12aa2f113"
  },
  {
    "url": "assets/js/27.a1fdf573.js",
    "revision": "1fc97550a542378bb4ed7b4fe3e8e3b1"
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
    "url": "assets/js/app.d68bb9c1.js",
    "revision": "2db7ce39378d781c8c649ab1ae482602"
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
    "revision": "6f9c50daafd85956d01101a139ae596a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "89354d05adf02b9667989b4a9538f2ac"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c10f9698845fc5bff03c783346279bcd"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "fb8de142a1c2b6db909d5dc946de1a3c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5540d0e190e6012314bc7a8ec5bee3d8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "12275852611ae7e2c075e76da1577ef1"
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
    "revision": "932656581b0ecb4fc5923b72b1a88db3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0ec4cf040f3bb8193a90c3893cf926a1"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "88520d6bba19515c32aab8d6449c7046"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "f7042723556a2573b7285d52512843a6"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2fb7cb1b43e8123f4eb6009d155549d2"
  },
  {
    "url": "tags/http/index.html",
    "revision": "854a5b5b6723cf0a6ca35cb2a508310a"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "530849daefeddd05cd054d3e6554bc54"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "52cda230a1a29144d6ee5b502f542fa5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "30a1f273321d263c6e0463399a49d84d"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "b05d13627497f08173c724688ab2e16b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "bf84d59b929617cdf402f6b7f8cf19a7"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "a2098d81a67fd532d59063df973d8150"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2504f7cfb3e90ffcd9cadea3e8e9a753"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ba60d39224db4d7bea20a5459200a86f"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "fb25dfe2990017480acf8c667c998ee8"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "f96d86927caf025375ee473b08d039c1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e8764a08dbd873b04c5d688761247340"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7ff82d850b35fc9dabf1e4707ad786e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "23a454c05dee94cdfe8f81e3009f7546"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "067da883937526d8cac8224497e3a9d0"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "b79f21bec252b2317b26c91928c02e7e"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "370ce0300884ab4c81f0bd274167abf2"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "5ed0fae9c9e79b62cd148a1458a4cf94"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "8e66d651a6a71a20dce0be23dc9a538e"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "338c3cc82d9bc5e4cda881ac2632b426"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "31723cd5ac90dc094d1a03f269f5a20f"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "eca5adabc8e095935ee92fe871a4eaa5"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "23aa7de4389bd31ef1726711679427c6"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "0de5b60805add755bc4e2f3f600b041c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "4263494fa958ab24435c3befe951f79c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f8352ebb4feef099a2a29527e7e0cd3b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2335a06dbd5587fdd3f554b09f99da8e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "4f211da30efea0e244c152b45d8675a8"
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
