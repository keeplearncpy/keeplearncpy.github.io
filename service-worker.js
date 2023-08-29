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
    "revision": "5da628092c40e4c591b1505d640b9461"
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
    "url": "assets/js/16.9749855f.js",
    "revision": "7086c49cd7063242c0dc55d3080794a5"
  },
  {
    "url": "assets/js/17.fb2c99c5.js",
    "revision": "8b5fefb1a8cf49d9998269e71c8824e5"
  },
  {
    "url": "assets/js/18.667a8e69.js",
    "revision": "5a061ee5b6f949b43dc77b12a16b4aa8"
  },
  {
    "url": "assets/js/19.b4d6d08c.js",
    "revision": "119e999a4655d206f35d41742b61c496"
  },
  {
    "url": "assets/js/20.5a6de1b5.js",
    "revision": "d3fb82aa15606976107169f280546470"
  },
  {
    "url": "assets/js/21.4f6c5927.js",
    "revision": "a13080bf30c232dda6295dbd0e967b57"
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
    "url": "assets/js/26.48103a19.js",
    "revision": "72bb5913327ea49977c73f78cd83c012"
  },
  {
    "url": "assets/js/27.fd6310f2.js",
    "revision": "5d1ebb667a6c7aeba21e4fae93db320e"
  },
  {
    "url": "assets/js/28.238bb63d.js",
    "revision": "6962401c7d1ef55bc9ae936c1022b908"
  },
  {
    "url": "assets/js/29.545c5349.js",
    "revision": "c902fe3649f0927ef77dad066bd7ba96"
  },
  {
    "url": "assets/js/30.c8883bd8.js",
    "revision": "091083c5ece07f88074a92cc79fda2f6"
  },
  {
    "url": "assets/js/31.8596ff0c.js",
    "revision": "99a985112c6f775d24f614d8663f86f6"
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
    "url": "assets/js/app.2707260f.js",
    "revision": "37c1c82650ae5f3fac18812c98e4b5e5"
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
    "revision": "cb3ffe56587441f0bae13ff6d9597f0b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "74e83ab8962cd7c6ea1b5ed42b002a4f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "61b091cc55dc6fb2fe04048f88380a57"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d3294c2544061997422fb250239a07b5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5be465e8a9fc1e0e40079db4992440a9"
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
    "revision": "a1144d51e31ecc5a9274030af145758e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d265f0f8edf9c8c1f9e9b08798fe0be2"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "efd310ab2e265d3ac3af24015a72f5ba"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "246410258dfc7656a15269d9f78cd7fd"
  },
  {
    "url": "tags/git/index.html",
    "revision": "955d7e0d50dcfd489e17ea34c43687ee"
  },
  {
    "url": "tags/http/index.html",
    "revision": "4a2513245a9600ab63f76d37e7d72214"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "05f705009219a273517d33b70337599a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6aaa5cd09da22a2179e4ade15454ca25"
  },
  {
    "url": "tags/js/index.html",
    "revision": "00226f26cbe6f95608240e9ed017d6b8"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "a669e8a43e0add591e6c3688c9e0a0cf"
  },
  {
    "url": "tags/react/index.html",
    "revision": "568509ab5e70bcf24b32d19182752e88"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "56eb49ecf8c6918f388f761a545e2600"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "6b654744514d799289576974d49aa660"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a3ecbe17be8cb4dc944f65295a490be9"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "f62a6411accf884f4ecd75373814a3fc"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "10697626016885972d4e8007142f31c3"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "87be078f1652d9e5eda4b1c34a13e13e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2581c77b2500cf2435b094c8ff6fdce1"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e6b41d12bc420071d167f3d3e07ee1c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "73b2f62cb22ee7614a50ff4c2010225e"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "6f698ed3853daa815d7bb9e1247fc6fe"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "0fb83ca6327ee28c10cbf67d4816b6ed"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "93c9ba476036c5e612010521c21225bb"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "6b1c19063bc9dd60719bcf88dd9e11f3"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "1e85fe48e402f48e27141608785319cc"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "8a0488106bd235a6f04db610dcc6bb87"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "a8750b0cd0759058683116ff383a58fe"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "47bf4c5e0772ca3590ef04b111f754eb"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "93bafe8323c8ea0d13ea58252193c850"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "f9c8ed13e00bf6eb1668b17ffb41c25b"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "b2bf212bec5ee363952deec4b889a0c1"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "cb8d44857b3cf112cf296ea0cd83a83b"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "4b223403b62f3e366a5dad068abf0d9a"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "6453ebcbbf43b6228ac64e8481daabcb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "caae07924908d64de002f99eac191827"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "07fa50776da4646701b7b3d64a1fd67e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "775ec65cec54a9e0a4e97e0f4543a27a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "0ec84d05ffcd69d433795f11a40b277d"
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
