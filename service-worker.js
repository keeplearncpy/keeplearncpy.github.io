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
    "revision": "f7e4886c6b07c12d218d7e70b845d94d"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.11686aa7.js",
    "revision": "5746ced4bf6a080e2aaeeb4098b30a9f"
  },
  {
    "url": "assets/js/15.37ed5e9f.js",
    "revision": "c44fe4b4b1fe07d5031045998ecfd617"
  },
  {
    "url": "assets/js/16.4cdca479.js",
    "revision": "e3b70b39f7e2a6a260412eba28d960db"
  },
  {
    "url": "assets/js/17.69c49cca.js",
    "revision": "eaa0943b3bad4cfccc0ca1cb3dc47945"
  },
  {
    "url": "assets/js/18.e2156884.js",
    "revision": "c069ba8b622aa7684962f612bcf5d7be"
  },
  {
    "url": "assets/js/19.813ffe55.js",
    "revision": "62762e4327bad663136cb9388bd3638e"
  },
  {
    "url": "assets/js/20.393d2957.js",
    "revision": "81d3d46fc776c5d10608258c99821104"
  },
  {
    "url": "assets/js/21.a126b5fa.js",
    "revision": "ad3be638637cbef57a8178a0ed4c2d1a"
  },
  {
    "url": "assets/js/22.33e9a52d.js",
    "revision": "9bfaf3b08a14153123c1c70801316fed"
  },
  {
    "url": "assets/js/23.86bd88ab.js",
    "revision": "26acbb7b8ba70f54ee3d67d5687d3d18"
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
    "url": "assets/js/26.4c7e7aaa.js",
    "revision": "5fd526efa31bf69c9ff8c086a5a25beb"
  },
  {
    "url": "assets/js/27.3173397d.js",
    "revision": "7588ddc60363906ff90135a39f3b80ab"
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
    "url": "assets/js/app.874b8889.js",
    "revision": "0c97f3d936c5261875ddb152a09c0a61"
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
    "revision": "09d21e1c03534528eb585eb46d7f57e8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8c042c958823f0d249ffbcd07844a54c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e2b13f7c8cd6b387a9a7744c0e67fa49"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "11f650ee992e138e52c1f49db20827f4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d2a32497629f4c26378aad58504610e0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "afdf993a3d8eb16f348abdcc3e27e3ec"
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
    "revision": "5ae0b804af7449d18ad0f509f4660efb"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "84fb9b1bdaa6cfc15546f92c754c98d6"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "a49051ba822830996635bd4318cc4dcf"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "f46d3e0cad96509f79ecfdf7a2f6e199"
  },
  {
    "url": "tags/git/index.html",
    "revision": "1e1c4afe720c497bc6a5dd9bdb3e76a1"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b4324ca956a03923d0ed6b43dd52d5e0"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "c51b30e01e17a9d2c0a33268f341b579"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cd6921b18f3a11bf711932750e9f70b5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "dc5b1a6eab7d15e7d07669a2cc4937a8"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "6ee44788bb7132c154905c16070c58a2"
  },
  {
    "url": "tags/react/index.html",
    "revision": "a53c869c1c07c961896395939223f2e3"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "88fc3ddea2eeab6889c696272e54d532"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4a27312cd2e52ccd8f666250c490e9bb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f0780ff1292c92f659976622fdf8dcea"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "8e72c3e05c7f0947633833d1f11bca67"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "42c7dd07f4c7793624868fce7157b03d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a72855a24b336a3d050470d6b2b7a302"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b667aea4e4dd46fd3589bfb9092632d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "5483a99351cd41e9c62bbd12d228a91e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "2cf4a7d0739bb4943eb6715502cf3149"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "b5a8c4773dc1f6afd89fa1ec8850993d"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ce37ffe66a9a9320df1f0c88b3278bc3"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "0ebeadf3beffa9c0eb0c998bc5048cb6"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "bb6ae2e3bfdb415474cc1b7e454d095b"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "38da69b672164e3dc57707f8da1c7feb"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "baf0a5287de52c18b07c5a130b6929d3"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "f8bded9d07409d201d737177c5f2ad27"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "964b1863115cf524ab3f7f7953ff0fdf"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "08adcd46a6b5d700a0fa36619f5068a0"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "47d39270f139eaf28b50b0a32247d64e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "fd183bb4b29ac73ff297b7b3b6e39cfb"
  },
  {
    "url": "生活分享/life.html",
    "revision": "584e9b0b11891027a5dd1a384d853632"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "b2021daf27bd3e7d0f380c10ebc664e5"
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
