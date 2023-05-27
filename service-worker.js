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
    "revision": "efd63fcbb8fe524ec3ac370cfb138dbf"
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
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.1e5df4f9.js",
    "revision": "7f15c82aa56a3823cf0f9d255555e0a4"
  },
  {
    "url": "assets/js/15.056eb836.js",
    "revision": "bc106d30554b37591dac8527f5c10585"
  },
  {
    "url": "assets/js/16.29d63fd0.js",
    "revision": "0be2b23d99e8a11557b7def2a331d5c0"
  },
  {
    "url": "assets/js/17.b9aca86b.js",
    "revision": "1b1aa212a6defc7a5f76dc13ca15d655"
  },
  {
    "url": "assets/js/18.7ac493fd.js",
    "revision": "06b4ef2545eabbb4481c50f4998767c5"
  },
  {
    "url": "assets/js/19.c2ede1d0.js",
    "revision": "b0efbcc42eda8e03b92ed4dcae5411d5"
  },
  {
    "url": "assets/js/20.55b75dee.js",
    "revision": "debeb700c4eec69b6179c92bc0f0ba1e"
  },
  {
    "url": "assets/js/21.f0f63467.js",
    "revision": "37cc9db0f0c086e854048ada3d827af0"
  },
  {
    "url": "assets/js/22.cef330bb.js",
    "revision": "ac0f970602da29ade92384aaae8c66b6"
  },
  {
    "url": "assets/js/23.7393c509.js",
    "revision": "613f14fd946233f59316befefe8cb930"
  },
  {
    "url": "assets/js/24.4bfcee21.js",
    "revision": "cda50c66b99ca45ceedeef0f9039f315"
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
    "url": "assets/js/app.ce177cbe.js",
    "revision": "b9eb58830f07f18cbc9d53a3647a607d"
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
    "revision": "5594114e782730bb6ef1c32775b858ae"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "46259c516854409f6d0a5668751ffd4c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ef2b4ef5b1cd00f07a36cf8fe653d092"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1a74f6dcb1b22ebe1ecbf15186aea640"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c4968e0301eac642224179bd8f2e770f"
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
    "revision": "5a35b465156d94b10d68a98eac20fc13"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "995e878520363d032158541772bb6d25"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "ea550a242f7b77b1c434fae3f4698a60"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "5a6f35ec003f9c75e2e5947305a45827"
  },
  {
    "url": "tags/git/index.html",
    "revision": "8a7cebec65b268e105892600c3ecaf2e"
  },
  {
    "url": "tags/http/index.html",
    "revision": "594ad7b115b71b645facbaaecc991d6b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "efe966a337f440ad9ed058b1661e9dd2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2d933e0a8915f01c26bfe9b311e834b7"
  },
  {
    "url": "tags/react/index.html",
    "revision": "b665ec4e6cbb86ff215f857814394b78"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e4fd0824b84197e767041a446b9a7da1"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d35999ea96c7e6d4b2030190e25a8040"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "2568ad06dd96f9e9934059cfd2ca636c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8a16c180f6f6cfa91f4370516e128743"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "60cd5fe03438106c3e462049e6d9ed46"
  },
  {
    "url": "timeline/index.html",
    "revision": "83e75bc3707ba2302788afead116f39a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "e77a66082ef063506cbeadf962e82c9b"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "34a8f78e8d68fd2c18b91e25d33cf770"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "3d17ac0fa7c9b951ccad4deeabf7b1a6"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "b13fe0def066484b609880d2edf12954"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "41018220b66c83417ea7f30f9bc66629"
  },
  {
    "url": "技术文章/index.html",
    "revision": "68c806948337641c668a2a9cfc691360"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "3ad41639f29874f009519d8be8773116"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "9fe3aa504ff86f8d398ffa63b932b26f"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "049f51016bda31135e78a0e3f3f616ef"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2c152b0a5ad76343454841682984d8cd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "03a16b5f8e5830f67ef5e0a39169392d"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "6ed134a8a46b16557b692e8c694e53e9"
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
