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
    "revision": "243b9f8e8de823cc285bfdef48ac0ecb"
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
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.c65845af.js",
    "revision": "487307bfd37902ffe53b87fdc98df494"
  },
  {
    "url": "assets/js/18.117bd38a.js",
    "revision": "9d63a863e045b60289f362e2dc11337d"
  },
  {
    "url": "assets/js/19.bfc5420d.js",
    "revision": "9d76987e503bb9ad38cfd0583bae18a8"
  },
  {
    "url": "assets/js/20.870cd892.js",
    "revision": "b045522d9f6f235c895afd1ea3231bde"
  },
  {
    "url": "assets/js/21.b0fb566a.js",
    "revision": "1d95bd7c326ce7025a5a686fc3b4b089"
  },
  {
    "url": "assets/js/22.56f6590f.js",
    "revision": "465ca35567b20376634318db20f7c5d3"
  },
  {
    "url": "assets/js/23.2c2c5927.js",
    "revision": "f63b93ee6f1e050f0f99e602397ad78a"
  },
  {
    "url": "assets/js/24.2aebafdc.js",
    "revision": "c2263fd3f3f6c23c49329efb5b3aa132"
  },
  {
    "url": "assets/js/25.aaddfe94.js",
    "revision": "00d1ba9a2c0c5f78a812ed29c6a0a61f"
  },
  {
    "url": "assets/js/26.b257bfdd.js",
    "revision": "89c3575469e1f13b408892ec7f4cc89e"
  },
  {
    "url": "assets/js/27.2883ac71.js",
    "revision": "e55a197bc8b84457d2ddc4a78a450bb6"
  },
  {
    "url": "assets/js/28.44d92616.js",
    "revision": "546f40b475ada55b83ac1f7b4d1372ec"
  },
  {
    "url": "assets/js/29.e0f66071.js",
    "revision": "6b77259861e67403f6afd843717e4273"
  },
  {
    "url": "assets/js/30.c8883bd8.js",
    "revision": "091083c5ece07f88074a92cc79fda2f6"
  },
  {
    "url": "assets/js/31.f51b6c3e.js",
    "revision": "aa903423763f6e707fe5c100e5401231"
  },
  {
    "url": "assets/js/32.11981096.js",
    "revision": "8c023699a626e4bc6a39b7e160036050"
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
    "url": "assets/js/app.d7682e8b.js",
    "revision": "b2948c295d647655e9ca906957a4f9ad"
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
    "revision": "4e750fda9ed2dada8b72365690328f41"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "cf4574c89081456b0d8a94e13fd1fce5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c74e132128e42cd0cd8faf90a2c9cf28"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "921d2ea3db6e5b80c16156b73aa66091"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "fc60eb88248c179e258dee78f0014a17"
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
    "revision": "8d77b2b308ab818a8ea3be72d0774c4f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9257ac4e91093f59c80aa661d4d8d6ec"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "c3289527de7b72a2984017bf0756e096"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "0598e90daac9bf07b0f8c22bdd5d0376"
  },
  {
    "url": "tags/git/index.html",
    "revision": "df779062f40ffa542a7816b69e6f5a94"
  },
  {
    "url": "tags/http/index.html",
    "revision": "a67b57b9275fe1ac70854f5df289149a"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8e42b597084e7c29ba064d19439b6c98"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9ed6f3469dce9d80822fa793d46c1f5b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0e5644f98381abbaccdf7a2dbcf63508"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "d95d8a4c878809b9361538287f3bbe3d"
  },
  {
    "url": "tags/react/index.html",
    "revision": "b24277f3da483bcabbbdf4ffca8ff638"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "08b1382c52775787406bcfcd0b3807a5"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "4014ca38026a4d880a414b9ead9aaeac"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b1e3470a28d3a36addf992d7d1fd5373"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "53a199483b79e4dff3b90913bd65861a"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "b82aed37d1d99ac65d651054c1379b91"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "896661740b18a8cff61072277e57c98f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "930e6907cad19da01b20eabc2e3c91e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "6317cd7f15d587610a6a1b14b3def89d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "405c524cd3efdfb2581a427502042e2a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "ebc5e561f2f8dc14ba410799a61c4c2e"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "6e70c33f81e66c88a9aa006dd7f7cf78"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "cef6766ac37155ffa0a3682842a217d4"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "dc5bacae1a02ea3144788e93bbaff59b"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "c0ebec4426126bdbe277103860f6a60c"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "5a162dccad40db0ec66028cf13bae547"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "898daa2f79dba061580165315d5d59b8"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "fd4d3353f2698c9bde85b55aca9e296f"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "687a925dae18ff29bd0325c10f3a1012"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "97748153f6dad67d2af1f625ce43de18"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "ec7da5fed35cf0e6c1c945b49e1387c4"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "371386e537d01f2d853a23996d1acb8c"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "fe1fec300f8c45d246e15099670f9602"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "8d51c2347656106abf1620dd94cabff7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "809aac6d19f6af605a8b7bbb612f2258"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "0fb626ac26bb29a0fee2cc9bfe8c218c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "34a0e472ffc05fb1828c65335984804e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d0f86f7cbfd0f0aa511c2297d3a26677"
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
