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
    "revision": "7b52d32de44fae7061e973ad51cc3248"
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
    "url": "assets/js/11.6f41bd8e.js",
    "revision": "7f1dceccb5a447209f5f8e539e831ad4"
  },
  {
    "url": "assets/js/12.9c2b83bc.js",
    "revision": "cdbf35f69d75f5215cd8baf5b5e52875"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.ee601bd2.js",
    "revision": "1683403b7a4c2320b0f8c8200bbffe41"
  },
  {
    "url": "assets/js/15.bca674a2.js",
    "revision": "5e9f98139a44ecc65c3c3f1227a35396"
  },
  {
    "url": "assets/js/16.feda2649.js",
    "revision": "5cd0ead10154587e97c3a7496a3c5c90"
  },
  {
    "url": "assets/js/17.bd772568.js",
    "revision": "fdc8ca5c17e34cde15fffe04f10680f9"
  },
  {
    "url": "assets/js/18.1c103149.js",
    "revision": "e129c2d9448f245234186a615d6e6878"
  },
  {
    "url": "assets/js/19.34a9a2a5.js",
    "revision": "3c687b4a0be375857052e594486963b5"
  },
  {
    "url": "assets/js/20.e233857a.js",
    "revision": "b90c8d1eeec777770319e5ea514708dc"
  },
  {
    "url": "assets/js/21.65ee0cb4.js",
    "revision": "ed7b13b4f248a4c611693193c8d79846"
  },
  {
    "url": "assets/js/22.1582edbb.js",
    "revision": "d8881ea3e20ac8c4bd1e3e19f2eeaeb9"
  },
  {
    "url": "assets/js/23.f3dfc081.js",
    "revision": "d6c15d113ce1d479ea9b3884874beaca"
  },
  {
    "url": "assets/js/24.1563cfe3.js",
    "revision": "78add5b0a6e347413b1f245def5b8a1a"
  },
  {
    "url": "assets/js/25.be7ad9b0.js",
    "revision": "7e463b8409280497a1543581053fd24d"
  },
  {
    "url": "assets/js/26.6705c21b.js",
    "revision": "56a4ef294f6bad3a1c7a3a05fdf029ce"
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
    "url": "assets/js/app.fa8e59fc.js",
    "revision": "0c7a4b703b975ceb1a8bd04073b8c740"
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
    "revision": "7824f588fc4de48d42ea4a3f3906e2aa"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4781b659391b131a4277ee7a2546d3bf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2ab8618f67468985d011dc175ec5b93d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "04e27710745ea529197485c28cdd9682"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "03bc84d44ac1fc21a9eed1a191dba183"
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
    "revision": "50a750d02a03d2aaa6ca1eeac331ee55"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f3c3b0a376fa7988f3eed7c1d311cc3e"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "d422d6660d25bbdf44797d41d2b96e1b"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "7b921eff710309b78c4af764a96a4dcd"
  },
  {
    "url": "tags/git/index.html",
    "revision": "7de891a14da8169345b029a5528f9968"
  },
  {
    "url": "tags/http/index.html",
    "revision": "eddbfd0df20dffa2ee5ee4c6d7d581ac"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c2e69237902cb83ec1a273bfcec1d158"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9c3624c300f01b09119e6cfa3082bbad"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "0c0006cc6f17789d385821f9e50290e5"
  },
  {
    "url": "tags/react/index.html",
    "revision": "7923604b6fc4bc05b6c976866e86600b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fc951eb3e83c82af4d44a389309e4a72"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b01c401a0af81115d60aa26a4847b6e6"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "34c2d0a6e83d86ac54f1f886a7298b39"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9c61736cad8cd997e8bd0f33afcf02a0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bda4b94fe81855a6e763ba409d3a8c33"
  },
  {
    "url": "timeline/index.html",
    "revision": "cf6737c4abf66063c3b14731aa9e526d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "0440e772e4ead5f0bb83e68e5f136a6f"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "1dbac45d9751661c66560fb69352d830"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "bec2a04da7909a2e9c9fb3dddf76b3de"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "90e750c094ae5b040fe5c4a690968db7"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "479aa27f6c68961b37f6c80b772043f6"
  },
  {
    "url": "技术文章/index.html",
    "revision": "619cd54b311ca64c924e11dbb5c1b460"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "e85eb6d284eb3d94bddb211db3fcc6de"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "73fb6d64dc0605e6b183a40af2f0f592"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "567e786f68eb6d955e96f65e3500a52e"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "03f8aa3aaf9d48be523997f3e8065e60"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d9f421dd6390eba1eb390c433503054e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c28ef480b7ce37dd604a7003a5e403d1"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "17e8de43f52b5603d246fbb59ab99d45"
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
