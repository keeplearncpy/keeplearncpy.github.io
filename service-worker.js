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
    "revision": "e2f93e078210c08b36e9e2685973a055"
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
    "url": "assets/js/11.361b2351.js",
    "revision": "bf9951a19c91691545f404a04c5b2610"
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
    "url": "assets/js/15.44ed01e9.js",
    "revision": "8f157fc4284904152754e90aff58413e"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
  },
  {
    "url": "assets/js/19.2e8599bc.js",
    "revision": "9eb84b708727145d89f5fc1712e34b06"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.ebfdcdab.js",
    "revision": "fa0241c29687e0b42727ec83e50cef3c"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.9ffd4f62.js",
    "revision": "af7aaa83fed15d706492603e541155e7"
  },
  {
    "url": "assets/js/26.d34ef5ac.js",
    "revision": "8c05f10d0f28be7ece2095871d50539f"
  },
  {
    "url": "assets/js/27.05cf27f9.js",
    "revision": "70fdefad3e1f54bce1402fffa485c366"
  },
  {
    "url": "assets/js/28.b2486fdf.js",
    "revision": "b3c8c8ab2cb6c8b8e4c26a2d8161bad6"
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
    "url": "assets/js/31.62f87b94.js",
    "revision": "dffe45b42c62728d37230756c98c130b"
  },
  {
    "url": "assets/js/32.175f3fa1.js",
    "revision": "7ed934122674a7c324dbc6223249c10a"
  },
  {
    "url": "assets/js/33.e6ccf27c.js",
    "revision": "92c04b290318a19d65886ccf13b14df0"
  },
  {
    "url": "assets/js/34.e50feabf.js",
    "revision": "cf33bcad68d7053b3aed1432a9802bb4"
  },
  {
    "url": "assets/js/35.71d5f06f.js",
    "revision": "65782d2d8dd51ca7d29bc80933cbe60f"
  },
  {
    "url": "assets/js/36.4edadb3e.js",
    "revision": "a5a52de5fc31cdd1c00f020d23fe2738"
  },
  {
    "url": "assets/js/37.4e4705ab.js",
    "revision": "cc14cfa49b71f31bed775a27a8fac8e2"
  },
  {
    "url": "assets/js/38.c91b1241.js",
    "revision": "a65f7a5cce87276352976f2553a4c350"
  },
  {
    "url": "assets/js/39.e227cda6.js",
    "revision": "27c4d5d3fe04695cf8fc0c99c4a84d7b"
  },
  {
    "url": "assets/js/4.08080986.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.4d649427.js",
    "revision": "561149ea9f09b36fa92b38f3d39f8c31"
  },
  {
    "url": "assets/js/41.9c64b56a.js",
    "revision": "c5c7dfda0d134658b41bc5d05597c2ce"
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
    "url": "assets/js/app.3f52dee8.js",
    "revision": "093b8a80b2899b335f418c834fee513f"
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
    "revision": "e047b6a5a4dfe12e988fccef283cfa16"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "be403abd7845eec34fb781adb59239bf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a749e1afefd5bbc7988fb6a3120137d2"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "f7cf418cd4ee56cca158aab99aee1f2e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "35fc362cf9e248d6c3cc7fa6f1e67b7e"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "ef7fcc6fe19d28ccb38b8558bbdaaaa5"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "094f3e6cd6c9b2c27f2e175a54c7423a"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "e382153bfca441a6400a893f1f26ce9c"
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
    "revision": "175dfbbf10b18adb44b0b5d262190528"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "9113b1f05d5a7e6c04f1ba82a5aae232"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "abb6c3906c0a0e4abfc45cdc2602cf06"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "4c9795cd266c6a46db00bc3ffa093883"
  },
  {
    "url": "tags/git/index.html",
    "revision": "73527fdbb0897adee2efa7d48d9400eb"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "abd2c28bedef17b760a6a427e2bb43ff"
  },
  {
    "url": "tags/http/index.html",
    "revision": "96aee0d17c3d702d47c36e229760b9ac"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5dbf71775d250e7be05f0bf61e084aac"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "16dd7ae79fae69005414259988a2b716"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "d33236a71461afd1c793dbe3a89d7ca9"
  },
  {
    "url": "tags/react/index.html",
    "revision": "639913b6c0232b17a747453f4cdc36cc"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "368cfd4236e0f18269bd17a7626648dd"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "0fc8bded0af4a497c79f3a46f197c1eb"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "0c9e9f9df62a09f8face511f615b824e"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "f164f96264f24abbb1eceb82fb382b34"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "556d5a6282e4e86407e0639fbb05e0c8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2dc38ddcaad45637ef7e25d45fa3731d"
  },
  {
    "url": "timeline/index.html",
    "revision": "72282f113fd43eabfc033917fd296fdb"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "5fd00a7d31eb81106801da9e75914da6"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "23798f313e44b48b64f425c7f16c163a"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ffe52a7fbdda644fecb5152480710638"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "52715f6fad980ae162f95964444de515"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "78786333919fbafcf17123a5508f1366"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "139da3aecfcdd24313883065a6269b57"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "1cb7d54a2a0b750cac2666a00125b1b7"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "63b5e21d8ba8389ad5f948cfbc8d6cd4"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "d6c7f8cdd1e7a49a19899d845be91837"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "d84be40f3cbab07280db1c1d458563f2"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "b0778f592fc704d9c74669beee58a772"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "144b415f3696aa5d5b7dae2890a1e5cd"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "45aad03dd300394630808b35e95c5757"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "79f25e2915a675800c5c0bcb8aa7b674"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "0465b62dd06888d637841aaabd8359d1"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "0ea3f9e770680df4f68080801d5f84b7"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "303f9febe300cd4f5a577b9946ebdf97"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "107d05eb53c7236a13eab058fed62ff2"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "ff30f0e3cf855502d538782803d2fc96"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "43ffc50084139cac99732c81bd3651b0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f0084588e7a6428806e5bf214c89063c"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "a5067255cba07903da0819f547d06534"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "d579ebb0e0232b9ccaae9c1a516cbcfc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f75c7ce807cade438048603bdfc3dddd"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "728548c1299552cc84364626890674bd"
  },
  {
    "url": "项目搭建/vue从0到1项目搭建.html",
    "revision": "50ee090d3dc4cbdf4e3ed6f32fbdedeb"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "c68eb769513f39a5e6454d1706fd8217"
  },
  {
    "url": "鸿蒙/Harmony.html",
    "revision": "ec4b6c7fb1f0de3fa1f915125e7afead"
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
