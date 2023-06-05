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
    "revision": "9093110f044accfbdadd222e8e3e9ce2"
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
    "url": "assets/js/16.4cdca479.js",
    "revision": "e3b70b39f7e2a6a260412eba28d960db"
  },
  {
    "url": "assets/js/17.9de28c89.js",
    "revision": "4a75389d726519fa2dd178f7ea69a6cc"
  },
  {
    "url": "assets/js/18.096f70cb.js",
    "revision": "719f6cf55980d9f8f31cd85d2024056d"
  },
  {
    "url": "assets/js/19.8098259c.js",
    "revision": "512a6723045aa2c4fcc9fd0872df9db2"
  },
  {
    "url": "assets/js/20.393d2957.js",
    "revision": "81d3d46fc776c5d10608258c99821104"
  },
  {
    "url": "assets/js/21.3d8cdbf5.js",
    "revision": "c10558f5d666155bee636d6ed075c179"
  },
  {
    "url": "assets/js/22.33e9a52d.js",
    "revision": "9bfaf3b08a14153123c1c70801316fed"
  },
  {
    "url": "assets/js/23.f287c380.js",
    "revision": "8c686c2f667e13df9bd8d34fda769321"
  },
  {
    "url": "assets/js/24.08a51943.js",
    "revision": "d3ff0599f3221d46dbfe26657a1ceb50"
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
    "url": "assets/js/app.f53b6888.js",
    "revision": "81eada241861db34c46f80479e03a2cc"
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
    "revision": "d46351f95bc762a597505bda4c911e40"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "991d9976bccfe518d0e8012abf57d8b5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e577250ebbfd21dae8475a27c687c692"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "affd33cb1ec37cf67ec63100cbbc8549"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e229866c6254711694fb5d4bcdf56394"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "dcf995fe93c1403a9371b21cfd3a8b75"
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
    "revision": "f62c577a834bb9fcc0fb0f615b8c6730"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "fc54d25de245e20b89fefbff6e2a5d7d"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "785ef3e384d5e7c409f2a51e77054afd"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "3cf8c1a3a0e3c34e20d1faea67d35605"
  },
  {
    "url": "tags/git/index.html",
    "revision": "aa95d6c457d4c18dea588f1516392bb8"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5d878971aecdbca5bf5bf5445d46c084"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "1cb08ff198d036739586d5d4e0929a6c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "99536cd2a61594530593b5a0fe353cd9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "be5f71c7ae1b88f7f3733594807c2b9d"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "6b2200f243155cc3abc968a09f73277b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5f22f7a35020c3c5c2cb8de85968f5c3"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "afc74aead9c7851f706ce942b7ab3e53"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d5739593796165543350f4c898241aa8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2f11399038ffeb0d1247258bbc726c78"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "40c33173cf7dee8d189f3b6802c5ee8a"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "2b97d318aca458a65f8827705ccc84f0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "28b1e6fea8fbaee1a70450ba9694cfdf"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1963a9792da01bff9c2ce4eac55aa955"
  },
  {
    "url": "timeline/index.html",
    "revision": "94dad6d8bf2a9ae4ec1e83a02b2725f5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "b075a978a14228c157f9d76bc2cd8398"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "357b44abd93d690b43f8efefa8f058e2"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "70c553e1ccfd073279347651c1bae739"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "50bbfa46276b0be8ed139bd0fee61711"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f08254a174665f8a26917810110ae8c7"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "775f2fc5e6ccee1f8830cddb4f0e007a"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "c7454475cb86f029f877c53621ad1549"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "8f811122c7b2175fddbbb7d859d71bbc"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "a16faf96d74fa7902ae8adb140f64dc6"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "3941c287b0e50c67848c9e1bf1002c2b"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "643f66089fe324bc851fe3c239628f03"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "fac290300e9afdea5d8c963d069657a9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f9340448658219e4dcf4ddce029912ae"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "623f5e46e3442c6eb429f725ea6e2f2a"
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
