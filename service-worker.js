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
    "revision": "570b4273b55bcf2b76286334a70a3b3a"
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
    "url": "assets/js/10.d19aa05a.js",
    "revision": "c8106fe705c1c2cba39308a38051e302"
  },
  {
    "url": "assets/js/11.475c96ec.js",
    "revision": "ac695fff3c0b007e74932f04f75873dc"
  },
  {
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.bacc0bd4.js",
    "revision": "31d52693f8ec1d27b4e7c72ea6377215"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.7474a423.js",
    "revision": "18e91a1f5a332542e482ead8d8436c37"
  },
  {
    "url": "assets/js/21.8dd37066.js",
    "revision": "7067e43bfc93c621fc3cca9cd87856e3"
  },
  {
    "url": "assets/js/22.2b92ddab.js",
    "revision": "45ea0a57616c505444c7cb6cf07619db"
  },
  {
    "url": "assets/js/23.cd4a366d.js",
    "revision": "9887b36ced353c8692f3394f125a9517"
  },
  {
    "url": "assets/js/24.3e02fb5e.js",
    "revision": "d71533cbe45214e93d5cabd9e37189b9"
  },
  {
    "url": "assets/js/25.3e473446.js",
    "revision": "5d4442a74291e3b456a16c99a3f28e02"
  },
  {
    "url": "assets/js/26.521754e2.js",
    "revision": "703534d76d5daa2dc6617ffa437b3230"
  },
  {
    "url": "assets/js/27.47f227d1.js",
    "revision": "6ffb595eaae72e01f5cc2a647ba8c16d"
  },
  {
    "url": "assets/js/28.4226f688.js",
    "revision": "cb665fb1b6fb8691687f63367a3d95ea"
  },
  {
    "url": "assets/js/29.7c3c1a0b.js",
    "revision": "3e8a35def0c75b9c4e09075e7841a696"
  },
  {
    "url": "assets/js/30.884a8ecc.js",
    "revision": "e1d7ed6098288651ad43def3a80d0730"
  },
  {
    "url": "assets/js/31.062ae097.js",
    "revision": "5361137a232bf7dff0a5a4082f5bb5d7"
  },
  {
    "url": "assets/js/32.bc596d6f.js",
    "revision": "f48874cf13c6d1dc97c6fdd14ec73e83"
  },
  {
    "url": "assets/js/33.60bae110.js",
    "revision": "098e0f7a454bb85d073cd6d58af88048"
  },
  {
    "url": "assets/js/34.25bb452a.js",
    "revision": "938a8580217220737ddcbfd12588ee02"
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
    "url": "assets/js/app.266c081d.js",
    "revision": "733e8f950666ce7f3c2d63a46b05ddab"
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
    "revision": "6468a9fbfaf1b2fb5771434b3b9ef5a6"
  },
  {
    "url": "categories/index.html",
    "revision": "8001e4e13d0b7e7cc7f03bb0e18a0618"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "66c16288e4ff9e0e6a6678e26c39dbb6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d604ddab0ebd12505651a8cbfd5d772c"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b26243fe30fc00dad3e41e8dc48bc5a3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "d679ff18c42b2cf81c2ee1cd0c7489c0"
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
    "revision": "30deaa6e1a4542e777e9aab395139688"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6c26f801baeadbaa7d42fa120792d6a7"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "eb6c1d49b871a08e2fc210f48f5315a6"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "a49541a634022b1b1a00614281f557c5"
  },
  {
    "url": "tags/git/index.html",
    "revision": "586e27ec60e3a0c3d9d40f36eb83bc34"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b043818af3002131fce77951f72a4d76"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "96effff0cde35fac25a12e2d52e04cff"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "56df9b1a4dfa5eedb4bc6e9165ce7bae"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ddf55161b4f5c19b7670127d0af46034"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "1ebf729076cd16c52c3f0fa2d76931e2"
  },
  {
    "url": "tags/react/index.html",
    "revision": "feac68ac7b4e536ee7fcb54550aa3473"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "376f2913193dd9ef1d26d2fb63778fac"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "f6fbc0d0bfc5db51b43fba7aa0ae6471"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4f2ebea99eeb8c19856f13b48eced774"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "8e65a9c78c23ebfc136e5461e97db01b"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "72b1f695392d2748de1a719ba1629127"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "a45664f10cf673bff477eddd53b7221b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "18807b04a4ca42d1b98ebbf121b1a6b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "e5a816c1acc4eba336f496caf7717d80"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "970d41977e1ffe11dc402f5a7c069cbd"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "a397ada95398eb515e571c8a34fa12e6"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ed3d24af9dc5ca9c682e6830b20d020e"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "81d5c9684eda6757fdc7d1bdb81041ab"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "5c75a097cfcf6b3c56ab99b8074240ff"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "0aee09acf80283d096f66821b21b404a"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "0bffa109988d12cde805d8db31e39260"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "022555670c482bea4522da92dd2a5bc2"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "f87a647863115dffa325cf8ddd3851bc"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "2c49fdb27790d9ac034ad03807d4365f"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "1400aa2116a1092f59aac0fde84afa87"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "a1f6f2fbce617186b8467c11c7310913"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "8a40ba5d7f3777702a152f55ed5f9c58"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "c76cd6900260deaad988bd6ed6838df0"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "ff3102d961dd7581efc1745dedbc0173"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "cb899f47874535647a199fb1cc97c750"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "112c3a499037302485eb4f52082e1431"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d6d488262f8411666d645cdbfbd4a5de"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "bc1d9eda350c20c6608b3f8786ae99ce"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7a457f50189ce78ac21c7a9181de9562"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "0bce26316c553d47c958dfb0baffc592"
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
