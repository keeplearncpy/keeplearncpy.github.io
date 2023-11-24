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
    "revision": "ce92448ee625b447f25df8c7d04f146c"
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
    "url": "assets/js/1.f8e58f18.js",
    "revision": "235f14af27f33d405704fecb1267617a"
  },
  {
    "url": "assets/js/10.261f3ec2.js",
    "revision": "31ca423181830af932cc1ef09fdb879a"
  },
  {
    "url": "assets/js/11.d6fd15e8.js",
    "revision": "8ed198e4df1f96821999eaabde87bc3c"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.bd48ab19.js",
    "revision": "cb6df97cd5b40ba3a85e3aab8e7ef44d"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.ff620953.js",
    "revision": "f9f477ab12ccb26d834fb8406f424391"
  },
  {
    "url": "assets/js/17.7f0d5ef5.js",
    "revision": "6d9791789995922d3eabada6944de9e8"
  },
  {
    "url": "assets/js/18.02b4b513.js",
    "revision": "62a124da7e15423a7fe6754fb0484bc9"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
  },
  {
    "url": "assets/js/20.c7c309ce.js",
    "revision": "d6ae69587c985c54ff41a7cbc4d5b864"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.c39de68d.js",
    "revision": "a5cbedd637a4e53dc5c7b32c3b84d4a0"
  },
  {
    "url": "assets/js/23.ff8fb97c.js",
    "revision": "48320211d6011240d2bb7c9c2c87e0cd"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.e1cea6b7.js",
    "revision": "abfbb9d2d7a5d722391f990c889c9a80"
  },
  {
    "url": "assets/js/26.65e45483.js",
    "revision": "3b866836800e193caacc4c8b481eb9c0"
  },
  {
    "url": "assets/js/27.c9064254.js",
    "revision": "d79363a3cae2fc13edafaebb3f03c803"
  },
  {
    "url": "assets/js/28.7e679efb.js",
    "revision": "3a8367617ebdf6c987771a8ea9920845"
  },
  {
    "url": "assets/js/29.4ddececa.js",
    "revision": "ab586d22bee6d90dab5ad37c2c91588a"
  },
  {
    "url": "assets/js/30.01bbdbf7.js",
    "revision": "4d21c3f8522d769e0e40b09294087c3e"
  },
  {
    "url": "assets/js/31.dc565286.js",
    "revision": "eaa3c9a566ebdc8819fef7ff06455823"
  },
  {
    "url": "assets/js/32.14986b20.js",
    "revision": "20ea45ebaea91a12e44196962c5927f1"
  },
  {
    "url": "assets/js/33.39ee7c68.js",
    "revision": "e39bad641c732efb9f2ff640b7761d26"
  },
  {
    "url": "assets/js/34.e50feabf.js",
    "revision": "cf33bcad68d7053b3aed1432a9802bb4"
  },
  {
    "url": "assets/js/35.eb3e68e0.js",
    "revision": "e84ad727af2b3207906d1c31633dd83e"
  },
  {
    "url": "assets/js/36.13572a37.js",
    "revision": "2cf63ea19ecbc3d7311fdde1c9d9b124"
  },
  {
    "url": "assets/js/37.156fe2cc.js",
    "revision": "a277294d9adff460c8f7ab60cb7287a6"
  },
  {
    "url": "assets/js/38.036a9dd3.js",
    "revision": "1f746b927c818bd52411117ee91ed472"
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
    "url": "assets/js/app.1e2c1008.js",
    "revision": "2cec5c6c52767dec0742e6bd5dedec97"
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
    "revision": "85eac1400d80a43c9e2e0354eaadd6ba"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7f366a9571664f561002f9192564cce6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f1f4ae20c0c2f8cfdf0dcaf661bc85d4"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "41babf0d49a407d978d5e6084780befc"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "22f77f535d670db69c0ab7a7cee32d2f"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "9ce16482c64b06a177dd93ffd66304be"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "30a6c75e90f6339a984081b8bbaadba7"
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
    "revision": "9cf4be0afa510f029a99a7a657fd6250"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "94fec1529db5ebeeb2261c42ed5235e7"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e02482df4b977d14cc21235cc8b07976"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "298956f929caf84988bd00fd3c92ab42"
  },
  {
    "url": "tags/git/index.html",
    "revision": "f5adb98bdcd184452cf8a7be82cc7f62"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "3a17c708fb6b868245cec6d7cbf7c5f6"
  },
  {
    "url": "tags/http/index.html",
    "revision": "d55035894407510024704112596d0d72"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "d8a9fed5ac515bba229ce3f0bcc7f0c0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "194bc44f1aa03e5339cc77246ba50ca3"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "9a0067bc981be08d85f70595dd2a7a22"
  },
  {
    "url": "tags/react/index.html",
    "revision": "54c62fa0fd22e034d21e218cec572e74"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "7d5c4676d7e48a3601b9150708b6d44c"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "4ca9d9e0e54459db30e9c97d6e60d2fb"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "f14662ea1154ac0a6cd35ed129eaa03e"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "4d617872629569b8134a3383143b93d8"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d68ad873131cc5d8a1566318a3565cd2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "16343458bc2a41f56cecd75175c705b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "f4192483d98dc52c38ca87f83b1ba9ba"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "77f4d52d30cba9fe192db51f80eafa81"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "31345f70adedaa5d1ef155f8e8b901d8"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "22a6110012333c1f8493d7346a5db429"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "fbff9247a8a7b63c3b9c9319b9577db7"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "17d5efbd2cb7e30a4207c580153212f7"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "4c19bc976d088d5e40a21a65c974ec14"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "4e1c22be696132b71b311f8db1eee781"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "4d5a3d9805184be4171e2ac6a4c9894c"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "c68d081ae627dfefd9721d396bea98d8"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "8c73588da09ac90f30c6f3f8254b1e98"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "4842f9cb3b42fafd7ad72abdefc60e2c"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "ae3721c9d675f4e0d757b2ee8ad3eb25"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7e956fb377ecd5a86f342439b1cbcaf8"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "08e00eec1b6cb398273c39e13c101435"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "aff14875c7cd7b551973dfbdf4abc23d"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "47b57f1fd382c16efd63564873ab4885"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "edb7841903d623d462b0d933cc230e47"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "1d39a4f6d9fc42a461579a7393d4a1de"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "0e8859d726a326403b7956de3b683672"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d98559d0908be66ded37a4c4a3b2b4ff"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8e7f1758bbc1a27706c7c022dc365242"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "0a3bd2abcd87dbf72efffac649a7567e"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "74c8aaecf94635d21188a5eb7b2e76c6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6deb10a11220e57f751f8c1d95b03582"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "aa58d3382bd59f022c87315b1e4f4f34"
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
