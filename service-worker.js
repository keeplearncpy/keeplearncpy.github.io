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
    "revision": "31be760b588ab86f6b1944ffcd07262d"
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
    "url": "assets/js/11.d3c2368d.js",
    "revision": "0e6aea5c1f18d920def44f4551681a78"
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
    "url": "assets/js/14.a99effd4.js",
    "revision": "d182765bab4f5924c9c0455095ab029d"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.73e40615.js",
    "revision": "6b9782c7403ecc3ab63688924f3fe503"
  },
  {
    "url": "assets/js/17.ae9ff662.js",
    "revision": "3f59a896d0bacee6ed2acfc0f9832b41"
  },
  {
    "url": "assets/js/18.f745f921.js",
    "revision": "9e7f69a56c2429ed7ab51effa387adcf"
  },
  {
    "url": "assets/js/19.b4d6d08c.js",
    "revision": "119e999a4655d206f35d41742b61c496"
  },
  {
    "url": "assets/js/20.3890d1c4.js",
    "revision": "3a96f21836ebf4fd75d30e867e9181f9"
  },
  {
    "url": "assets/js/21.b0fb566a.js",
    "revision": "1d95bd7c326ce7025a5a686fc3b4b089"
  },
  {
    "url": "assets/js/22.82f58f58.js",
    "revision": "f19a6c2a45d9054b27ecd3f0e87d5a80"
  },
  {
    "url": "assets/js/23.333b53a3.js",
    "revision": "e4754414d3236299b3d7305af10ae3ae"
  },
  {
    "url": "assets/js/24.17781649.js",
    "revision": "b4cd1408160870a0f9b950cbb31f5ebe"
  },
  {
    "url": "assets/js/25.cb3c7eef.js",
    "revision": "eab5f5148d320c8168730b086075c353"
  },
  {
    "url": "assets/js/26.0c24df9f.js",
    "revision": "7a17e290db110b9b3ccde9071d1b1a05"
  },
  {
    "url": "assets/js/27.40159c5c.js",
    "revision": "46ee63d229d884e56e922ebe1d545100"
  },
  {
    "url": "assets/js/28.a935858b.js",
    "revision": "92ce97ce34db231f021130076ca84294"
  },
  {
    "url": "assets/js/29.76b61ce5.js",
    "revision": "5de974da0bdc880d081f9ebae0929f9f"
  },
  {
    "url": "assets/js/30.c8883bd8.js",
    "revision": "091083c5ece07f88074a92cc79fda2f6"
  },
  {
    "url": "assets/js/31.0e075e8d.js",
    "revision": "e71625e51144cf9d54ed18cea5c93c7b"
  },
  {
    "url": "assets/js/32.f0bf83f5.js",
    "revision": "6f9aeb634cb3ab4be6ba37f6e5acb4c9"
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
    "url": "assets/js/app.e48ae290.js",
    "revision": "0b1f0c893b454c75ecb69f9f6c57561c"
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
    "revision": "54a8335221a366e0f9ed41b839f49008"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9c821cf438dd823745b749a94b633930"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "da97c3fd187a105cd460f2dbdba9d5a8"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "027600b4734c9a023cb400eb0ce0ca30"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "bddcd83f76633a35b00ecfe77745f592"
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
    "revision": "7b8d043ac61ac135bd974fce36abfe8f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "bd8ec3d1f8ed6813e33cdb44e779ce00"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "fc2924aa1656e84173301a2d414d8b0b"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "8b2a526152aa7ca41e22b24633c3f573"
  },
  {
    "url": "tags/git/index.html",
    "revision": "14e005bd39c98cc890f69b297496e0e0"
  },
  {
    "url": "tags/http/index.html",
    "revision": "00db72255e3dc86abb0b8ae8e43a32cc"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "f1467fc8c91d8c0d857e5ee60d783fee"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ceb1bfcf1535cddb895087e595045bbe"
  },
  {
    "url": "tags/js/index.html",
    "revision": "811331710f1e0b3eee96e46865fb021d"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "da98ee1104b8dd8464706e4ddd3f3c53"
  },
  {
    "url": "tags/react/index.html",
    "revision": "511d81f2d78d6af5f303a801ded3af19"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "8ea4cb1e9148de6a4f68cf4a0a9ad141"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "d8fc5b22951b93dc489124b36f198de3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "12a9305456b22b4738c8c195bdd6a85b"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "35ef75acab28309407fdbcd6bd0f32f8"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "bb92d86d868d4891120025e3d00bd1a2"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "cab19ffba1dce361b8f9ab2be2440f58"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "91875f5d8c8aa52d161c3f5fafc67372"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ce1a20ee038b91ebf9f19549ee29d34"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "8c4fb069ae309aa9e3da4d70e2221c3f"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "b90f9cfa916e5f2d99eaf52ec873d96a"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "9c3bf6dc3731d39ad6e4d21158d2d0ae"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c291e2c7cfd70e9e44687782d9d05c3b"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "bf7b14bdbff5bb38b9a002ab11976d49"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "84ae5026532ab33e791287c5a3391a96"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "f7f23e7f886c0017ec5bb78945ee0019"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "acd38065e6d0cd5f02e84b46d77589bb"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "13b2aced348954b4d4c80cee0a0bcf03"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "ba9330d4b11c1004f6ead163b35ed2f2"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "e906999026e90c8046952751fc38d808"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "c2575b6ef10fbe1cfdb9a28d517cf3b0"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "aed9b3adc2e1fded765c32007f93a8a2"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "2d6ca48e63ad4f396722efe7f71de641"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "547689201b73ee7552b88ce45440930d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ddccf06f38b83ff0ff0e43d6f0e15f60"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "9f31a1f1e558dc73d05b4b756fefe8e2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6d7858771dba42bd3aa2656d6b33f0d9"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f186c47ae1d2332b9ae8cdeccfb83087"
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
