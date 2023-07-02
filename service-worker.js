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
    "revision": "eb1ef5155293465e3f9e9350e91b0033"
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
    "url": "assets/js/13.03a61dd9.js",
    "revision": "bbb9b7136d3c7088343a4b055e4a807e"
  },
  {
    "url": "assets/js/14.f10d8d5d.js",
    "revision": "643ced8c6c048fe5204a95b4798b86c5"
  },
  {
    "url": "assets/js/15.b880b1e5.js",
    "revision": "12bfca4702c2e4679aa464f96c58ad08"
  },
  {
    "url": "assets/js/16.b50df60d.js",
    "revision": "cb96ee24ed4de259d462d9e4f5a75864"
  },
  {
    "url": "assets/js/17.d320311a.js",
    "revision": "d3a557b3b52815f5bfff05a33f058e2a"
  },
  {
    "url": "assets/js/18.360926ae.js",
    "revision": "58dac5926efd9073af1cef4e293ef3e2"
  },
  {
    "url": "assets/js/19.932cb601.js",
    "revision": "44e36e516ba466fac3f50631528071bd"
  },
  {
    "url": "assets/js/20.8d6abd2a.js",
    "revision": "7c6af0eedc3c473ea8dc02ca1f67330a"
  },
  {
    "url": "assets/js/21.cb4b91de.js",
    "revision": "9361dd14d8d973a25ea9bbd239cb7cc9"
  },
  {
    "url": "assets/js/22.33e9a52d.js",
    "revision": "9bfaf3b08a14153123c1c70801316fed"
  },
  {
    "url": "assets/js/23.f23f834e.js",
    "revision": "5d3476ee2d3600c7a612dcbd303b53cf"
  },
  {
    "url": "assets/js/24.77bb3a39.js",
    "revision": "3da62150d6ae0192d5134313e9477992"
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
    "url": "assets/js/27.bb7ca1c6.js",
    "revision": "cdc1a98a098e6b21ba6e18635a9b4fa6"
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
    "url": "assets/js/app.87280ff9.js",
    "revision": "c74ecac89cb8182804f9a9791b62eaea"
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
    "revision": "18460efa6b17fd547ecc9a7536fc578e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8f9f3d8cca6f4e887a2115a4831ac2a9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "dc80c21810269fb0535823d221e3ba5e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "f496f0cd64b0b2fc805bea2c04bc0dd9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "50e41d30763590a03cb4105425d676c1"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "88ea263ffae23b494a64b21128f370cf"
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
    "revision": "d63444f4706e0e2fd03c3f64570931ca"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ba77dd41b4ced5a77d9c754bfcbc460d"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "c74f35470519b3a79222fa7908517205"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "8dbff87faa91c7f5d2cc6cac4f6c5c1a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d878923900bc5ef83bb24a5c002364dc"
  },
  {
    "url": "tags/http/index.html",
    "revision": "11698aa54bd43d69163b2205e3486775"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "265fb865922ce5c383e019086e61c967"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "39dc93037491d0c9529cbf8d041b9a6d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "492e35ad2684afb5aeb489e3c32ce7b5"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "387685093b73917a60531545a3be8d3e"
  },
  {
    "url": "tags/react/index.html",
    "revision": "6613e89877edd469b86c27fd26d968f6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "01ca395eec1599cfd477875a9edb54df"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7aca4f466a32393cf95d1013be5b38a8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "60f52879f263b0bd2da34446f7881806"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "702e86185c9f7b814561715342bd3d97"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "fb6ff89a52b2b1f81f2c0a22b1aa88e6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3f42c66a382e784a1ce5b1ac7790f220"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "74fcd0456317a846a77a531b81fa70dd"
  },
  {
    "url": "timeline/index.html",
    "revision": "21103cca676814461c0b6fdfb3b81c6f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "5fcfd57b78baf71ba35c0050105650c3"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "3744f49ec93d7d0cd7b8ef0cccdd2beb"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "eb76c94ccbc2e2b6899daf0eee4f6ecc"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "464a199437b5e7132c2b97a2def01020"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "66aa8a1fb1555db060a56b35229c6836"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "85d867a3fa8dff7bc175ecdac3994f11"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "a338ad326334ec209dce1184aae932a0"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "26d3c0ad12a95eacdcb658967bf564ed"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "d8b3529ac80ccd1cc61f72ec7954ec59"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ba008b385a46a54fc295620a3df2fcd4"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "43a5c021a754e81c4fe0cf9a7eeb28d2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4adaa8138c365490bd0babe950bff2bd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "71596e1b39ca79bd46515323b8551522"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "28641d4500fb023ba9e16c20c4b3044a"
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
