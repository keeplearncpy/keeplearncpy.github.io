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
    "revision": "f19c096cc176a4f9f236dfecc1b84614"
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
    "url": "assets/js/1.bd5fcdc6.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.6b566cf9.js",
    "revision": "f4e17f2c4e1cdd000a9917ef855b62a7"
  },
  {
    "url": "assets/js/11.0156ed38.js",
    "revision": "8b1f255053c639dc1f66b950bd004e3e"
  },
  {
    "url": "assets/js/12.e8d347d7.js",
    "revision": "4677c372b05e570589dd0ff49a4f9013"
  },
  {
    "url": "assets/js/13.f198523d.js",
    "revision": "871593a6b8a44f756b6530eb3779457e"
  },
  {
    "url": "assets/js/14.22f1e88a.js",
    "revision": "af88db3e24e034b51ef6022633e0f155"
  },
  {
    "url": "assets/js/15.48d53e53.js",
    "revision": "eb3abd5fb33a3b8f8a120ef43020012c"
  },
  {
    "url": "assets/js/16.fa2c0c09.js",
    "revision": "b0b12e92a4b724d780731254c0694a31"
  },
  {
    "url": "assets/js/17.179ad2e1.js",
    "revision": "6f7988bec8bbb914c733dafe5e244fc1"
  },
  {
    "url": "assets/js/18.5728ba82.js",
    "revision": "744ad124dcb0b9b0add88ff2772f3b28"
  },
  {
    "url": "assets/js/19.4e1ed01b.js",
    "revision": "13b6d88c424282ec97764df3125859ed"
  },
  {
    "url": "assets/js/20.cdafc2c1.js",
    "revision": "fdc1d645f801ff3590f4a9e0a6bfb74e"
  },
  {
    "url": "assets/js/21.48649693.js",
    "revision": "54fd0d16d9af9f385deeb4e85aeea8f7"
  },
  {
    "url": "assets/js/22.fe6dc9fe.js",
    "revision": "73185e2f47202b24009db9b0119b30a5"
  },
  {
    "url": "assets/js/4.6123ed03.js",
    "revision": "0cd782a39c2cc04b114883182718ae95"
  },
  {
    "url": "assets/js/5.eaa9e91a.js",
    "revision": "258c45f563c75a070464fc4de3d84c04"
  },
  {
    "url": "assets/js/6.0c9b39ae.js",
    "revision": "8873a48f1cde6e64b974552614de3380"
  },
  {
    "url": "assets/js/7.c59d9949.js",
    "revision": "df552cd6564b0f9a5969529f6d5fe445"
  },
  {
    "url": "assets/js/8.d8b87a3c.js",
    "revision": "4bd6723c068a61f753459deb3c2c39ed"
  },
  {
    "url": "assets/js/9.4baef992.js",
    "revision": "4f1788b56f47c6b80450b59d1aaf74d3"
  },
  {
    "url": "assets/js/app.886bf7eb.js",
    "revision": "f6589e85d04bc0195cd80b6ab51212f2"
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
    "revision": "6c08054e750fd1e1a51f74b39e645096"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2bbb31653cc1e11010888ee61220f336"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "005b33e64909fc472b0044aa00533f77"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5faf8914baaeb93cc8df9dd8e01b8383"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e58974d7713f6b1ba0f87a248bb2d156"
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
    "revision": "2689fe15d4738b220a95f2309adbb548"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3ebc3bb0064da082e292f90a3b2987a4"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "32df8b1c8517d1ffa198c359da7b92a3"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d2a50da49128d5471e02463aba7e77bc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5a3e7c261f3d76df2f955b124920baa5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4976162eade0bcb48ffe06b36c8a0028"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "188bd75fea80aa898909bfd7c9928b4f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "52e4d6609181333e5d8f2fc6f2ba5d9b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "1abc218bfb60bbe4e32d8886db3b76c8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "29ca238dff9d703342027577dd221f00"
  },
  {
    "url": "timeline/index.html",
    "revision": "534c06943247abcb8064d04ad1f559b6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "8833284921cd788fab512d3c6efa78bc"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "5e7954d0bf7fa20b6f890bf5e1fe2956"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "a4719a29d16431c47511ba1b100beeef"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "a34e307bdbac09078c718585f651aa61"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7ffe12dbcfb706a97029785a377b8388"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "86aaad6dd0308f8cbbd29b0a350a834f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "aefd53d5e809532e97c6430f594878e9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8365e38e76e3f651dab5375efd9dc0d2"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "e80b7cb87cb975c25538767a12c0207d"
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
