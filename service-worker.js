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
    "revision": "cf1d6f3b677559fcaae012d1dc25e7a8"
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
    "url": "assets/js/11.0799c84b.js",
    "revision": "43e5331f8e1bb6a8974a5221b40ba63f"
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
    "url": "assets/js/14.732eb05a.js",
    "revision": "161b87352bf870c6c1eddd714a5c0b25"
  },
  {
    "url": "assets/js/15.3d26dd6b.js",
    "revision": "194e208d0ed87600ec681728f5ccb240"
  },
  {
    "url": "assets/js/16.a92bbccc.js",
    "revision": "635ec7fc73bf6edd54d6ffe9c536baeb"
  },
  {
    "url": "assets/js/17.b9aca86b.js",
    "revision": "1b1aa212a6defc7a5f76dc13ca15d655"
  },
  {
    "url": "assets/js/18.e32087bb.js",
    "revision": "abaf9a8d984f20b43407a35a37311223"
  },
  {
    "url": "assets/js/19.40bd4130.js",
    "revision": "fcfb862040f8b867f64b4fc2b91ac805"
  },
  {
    "url": "assets/js/20.7563c65f.js",
    "revision": "def2cc866ad6004040dd81107fbc1a61"
  },
  {
    "url": "assets/js/21.2fe8ed80.js",
    "revision": "c2c1af4c0139090e92269d841a65d1d6"
  },
  {
    "url": "assets/js/22.08aaa19f.js",
    "revision": "04814f7d4d164bce058c894406542fec"
  },
  {
    "url": "assets/js/23.7393c509.js",
    "revision": "613f14fd946233f59316befefe8cb930"
  },
  {
    "url": "assets/js/24.414f9449.js",
    "revision": "5d08f248a1069e930ca1009289649d4e"
  },
  {
    "url": "assets/js/25.699228e5.js",
    "revision": "0940ed422ecbbd85a9866b5597942f1f"
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
    "url": "assets/js/app.cfe56cbc.js",
    "revision": "fc75e1c9fd8085be993c2d6d86c62069"
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
    "revision": "b8cc51c1e99c869c627be488de484a0b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "af236a289d96beea9b7ddc1f72efc196"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d174f2b3c2eb0d68bd42338e4f4b633e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2f9c9c758257d63a5e92bef728687e20"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a2c1f4f7ed6db0fb9356332eeaa13457"
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
    "revision": "39395c2f0b2d906144c659a8c607c024"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5032522390764ebf58bd7c4b92e4539f"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "15bd23bc8f372549bedea4fe88aa2c49"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "8eb17b2c4c8b5874d94f714a56e4df22"
  },
  {
    "url": "tags/git/index.html",
    "revision": "790c1de9cd3e192a8bae941e01ca105f"
  },
  {
    "url": "tags/http/index.html",
    "revision": "ab98cf7de3468681c0becaa415539273"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f4bf14cf9df88a2486057296c796d799"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b19b04d215c4b8202f28a4cb291b2f59"
  },
  {
    "url": "tags/react/index.html",
    "revision": "364d8a205f0868bff71b805eff01871a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "46f590738fe737765c972bcbdc83fc6b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4f9e5c2d8547113c5445d6a0f864975a"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e82fb44f1d3a5273eb4f7397bdd03f96"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "49188e8753b0e900d975bec17218aeda"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "481704dc1f3efdc178f7d6eeed13812d"
  },
  {
    "url": "timeline/index.html",
    "revision": "2572f1762bb8cbe18ad5fa9e6fbe65af"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "bfa8d4a3ce6c250d48f6db55c2be0430"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "e6d53449aed28e928a536fa1db445e69"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "610b75b97d4bc8dd8de9ccfd8c69fd1e"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "4ceef85a769f509f525d5901ff87bb00"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "ce767a5e1e0bd9e22d693bcd99970c7a"
  },
  {
    "url": "技术文章/index.html",
    "revision": "32cd6a6480d5407ec4dce2b3573ab99c"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "0bf27f8c1d2ede694d46383591c17867"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "8512df41a78ca2d528fe12693b7097ad"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "f8bd47d1fb099c8f7d85194f933693aa"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "40e6d77ebc42416009a8275150b590b8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8242a938cb88915c015340caacdc3a88"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f2812485b110705cf0c24b7df84f564b"
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
