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
    "revision": "bb0d9fe6be20b567a86c0005930bffb8"
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
    "url": "assets/js/1.1a88221e.js",
    "revision": "f88db81f1490c1bf9cb1954ef5a22916"
  },
  {
    "url": "assets/js/10.a468ed7f.js",
    "revision": "8bcaa1892a23d47b3f994db3e4d51977"
  },
  {
    "url": "assets/js/11.0799c84b.js",
    "revision": "43e5331f8e1bb6a8974a5221b40ba63f"
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
    "url": "assets/js/14.732eb05a.js",
    "revision": "161b87352bf870c6c1eddd714a5c0b25"
  },
  {
    "url": "assets/js/15.39ecc099.js",
    "revision": "5e66d1b8f939dcd6bbb57434b270e622"
  },
  {
    "url": "assets/js/16.212249f0.js",
    "revision": "bb96e172f78a30953fc1463bc279450a"
  },
  {
    "url": "assets/js/17.ef575bea.js",
    "revision": "96d3944898fd31add3cdf39676a04ad0"
  },
  {
    "url": "assets/js/18.1c1c1ea3.js",
    "revision": "9fa48fadf762c14f6902b8ccbbbdba2e"
  },
  {
    "url": "assets/js/19.9a075702.js",
    "revision": "635b73fe1f154b9af68bd3f2476b3e5a"
  },
  {
    "url": "assets/js/20.2b05e2b1.js",
    "revision": "e7be4c10458f7734582974273c00297b"
  },
  {
    "url": "assets/js/21.5d646057.js",
    "revision": "f78ea9bf7128c5205228fba5af2cdc1a"
  },
  {
    "url": "assets/js/22.7b213ce0.js",
    "revision": "3c9536b2c41bedb19405a1ce65518bd7"
  },
  {
    "url": "assets/js/23.7393c509.js",
    "revision": "613f14fd946233f59316befefe8cb930"
  },
  {
    "url": "assets/js/24.5cd2ea54.js",
    "revision": "d2f11ae4b3c473e450b46e338e0ede1b"
  },
  {
    "url": "assets/js/25.86fe6076.js",
    "revision": "4bc690e7c2ed040039181bbed3624aa1"
  },
  {
    "url": "assets/js/4.7af5a2ff.js",
    "revision": "425554c71d0bdeacfc25daedc82b0b99"
  },
  {
    "url": "assets/js/5.c1b8624d.js",
    "revision": "51d33e4c276087a7e2ac7abfab778b34"
  },
  {
    "url": "assets/js/6.03b5b6fc.js",
    "revision": "6b9ba3f44dc5852be04a599f22613d89"
  },
  {
    "url": "assets/js/7.945ae8bb.js",
    "revision": "b445eb400fe2d79b6c30b3e4b25da19e"
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
    "url": "assets/js/app.a3e8109d.js",
    "revision": "39f45bc9103fe808f9c2e75e50d1acb9"
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
    "revision": "9df2c4912389fd352c707e9b3da8afd2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8422c162817444a6d082d1deee1fb6e6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "52e714021459b9b1df8396d7f7265326"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a11fc48cdf05f0eca1fa2672d96f70e3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b5db7fb29c622cb49fe64ad06ce9d6e0"
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
    "revision": "593925499c387018551a138db2d62092"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9b79899183581ab1c58b13f4f0aea914"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "8c8ea82920c886eb2fdc94d5ab1e7600"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "fdd1cf61c6e11df568e496bed951a11b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "10fd768f53b922f1c787bc329c8bc650"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c03c8dcd831fda8be3a5463240307772"
  },
  {
    "url": "tags/react/index.html",
    "revision": "affbc8218f2f95e1f8f0f3ddff648a29"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "effe603b3008063dfadd358e501d18af"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e825a91dcb060ce0d2e85a95763c1447"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "16f01644f96d9c8a4cfa0ca91070a3dd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "88d1b3cc5753e8ef55737db1dd48c887"
  },
  {
    "url": "timeline/index.html",
    "revision": "cf2abc459c5545f0009e5379c05a2a9e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "53ac9bb5b1d7249282a6b1f6328b7b54"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "e9bf146d6448246a1913094791f88541"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "bb9babc4c18bc732090b13f120e2940c"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "98710e595a9099aa8cecbe3fba9e2beb"
  },
  {
    "url": "技术文章/http/httpo1.html",
    "revision": "d3ffe82298aebe0c2ccb9e773da88bb0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "43fcaaad1eea5c94a3344c6730852d03"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "22391305d2f008b966fba276282872de"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "a7e31d2015ebaa3816497f1b0c9e35d2"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "3ad5224177446f48e4bad4b3a64aedb1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "091dd8370254f381ee1bf36ccedc14fa"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ea511294accff72f1efa07d80ff346eb"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d491878afee9fa21613b01960f5de52e"
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
