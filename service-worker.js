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
    "revision": "bd8728a7ee67310c3a303343f879ad6d"
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
    "url": "assets/js/11.e54fad52.js",
    "revision": "26a0a037131ebcfeb36436ef3382e56c"
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
    "url": "assets/js/15.f7fd5f97.js",
    "revision": "14dcabb7f54dd642577219e561ef4a31"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.67d0f78e.js",
    "revision": "88cd2bcad98703bc49fbf22b839908bd"
  },
  {
    "url": "assets/js/21.42019346.js",
    "revision": "6c9b06b2523788f2f10d9dba502cb85d"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.600c999d.js",
    "revision": "ad8e3b35f90bc9eda64162986b8eee43"
  },
  {
    "url": "assets/js/24.b437544f.js",
    "revision": "e5fab2d54b6b9d9c39c8c9f3b5a2f9d4"
  },
  {
    "url": "assets/js/25.ff5ccad5.js",
    "revision": "bb44d24ed25f1d134676d5c31373995c"
  },
  {
    "url": "assets/js/26.ed6bfba2.js",
    "revision": "16be13178a8afe4a61eb8a924c82365a"
  },
  {
    "url": "assets/js/27.d958ee49.js",
    "revision": "59a7606addf1e30f2de728082773f2b0"
  },
  {
    "url": "assets/js/28.0fd8d47e.js",
    "revision": "90876d0e6ec602eb0d7571e15582c7ce"
  },
  {
    "url": "assets/js/29.45a718d2.js",
    "revision": "a3f69b663a4cd16c9bc47e42f18d660f"
  },
  {
    "url": "assets/js/30.eb7e682c.js",
    "revision": "df66323c55891928a66fe198a84df0e7"
  },
  {
    "url": "assets/js/31.6b116dc3.js",
    "revision": "25b087dc799ea6b7d405b82a21a2c8de"
  },
  {
    "url": "assets/js/32.fd8f6a62.js",
    "revision": "e03e29ff4b9f0021a8778eddb84dd8b8"
  },
  {
    "url": "assets/js/33.a4a9c765.js",
    "revision": "7fc2d31324821489945952d7ddf61f91"
  },
  {
    "url": "assets/js/34.cc9e29d9.js",
    "revision": "1b5969da272ef9fb9e259d6cb6e3d45d"
  },
  {
    "url": "assets/js/35.6dcb036b.js",
    "revision": "5d75dc792052af21621c3c396d66e6fc"
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
    "url": "assets/js/app.58941df9.js",
    "revision": "9312ca37a24b7a114f1bd2567dfb3302"
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
    "revision": "0a97c4b365e24abb7ec0f3dfae458594"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e3e5c4530925444f3d6128223b920a6f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a9bec27d45a0e1b95c526c5ee740cc13"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c9496e9d4097f382ae41300c76fd7a9e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "7f9ea36c54782eb591b71355a2731e8f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6fb7433c6686cb432e0567e22ccd82c8"
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
    "revision": "8a949d1b1450756c394814e118fd6cde"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4bb3fe044f9e988abbb2ce6d645c01e6"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "d966c4a3e9b41fc7a39c7a33b72b1310"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "f3cb79c5f923d8b125482d350f8cdfb0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "97021221a5206e4b5016e2358db165da"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "316f6a29c31bc4dccc22a35614ff807d"
  },
  {
    "url": "tags/http/index.html",
    "revision": "1c0c771116849b4bd82b38b9fe7d3a60"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b9f3d3c540c1d20fb14a8d92e419c1ec"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8d665c688b61fa4bd42f33a34967e3ae"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ea7cd0d0f41ef7c84350a837d43c3327"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "de8c27b43e16fdc2707e45bae66075bd"
  },
  {
    "url": "tags/react/index.html",
    "revision": "ef5b1c1fa262a03cde404e45968767b7"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "3eb5f8d3e201ef8cf668570910d6b9f4"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "f16f0248e459dbd078d66c50b2bd8e6e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a0c878c353a80d82364ad63b1f2ba57d"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "d3b4dcf0fe922c5346483922625a7f52"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "7e195548ddc93fab32c8de7bc8960538"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "0826d8021a9a941ef979fc43fae31461"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ceaa18259062ad1b58d8f0207f3cd990"
  },
  {
    "url": "timeline/index.html",
    "revision": "a55a973a9f735e15709ecd86598519fd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "1e55c2035aed508fa16c1335845d21ad"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "604843c884ffac600cfb21b1441bc2e5"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "25a28469c3a0c044dc6be90fbf54123a"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "b2d097c17a3992468a9f2df0ac6c4b1d"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "461186a4f0bf03987f7922ae6de35e02"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "acf1b4afd9ddbca06bafb7faecc05b70"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "5ba6c5e67e3692a2b744de12ff773e46"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "3e55b548a75c54ffef87cc510b5949ba"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "5d7875f909855a3458457c2bbfca1dac"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "95832d65fd43ec762f6a098be637432e"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "afbb96686715d5ff1a8b038ae58e3dc5"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "4e86a37db7ed9249d2f9dc75261459e4"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "7f7f6cccb62370f02b9fbd66515954ba"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "f943fd65f6b573a43636dca251f77de7"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "df07be9e49e7a4eb2e7b792addca8e9e"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "98bbf2c7494cce5487809199bc78ab4d"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "082b8aa425c6604fb74de040650c1f2d"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "6205fe4248e3d10f29f74174f4fbde5b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f0a7e9a83a4a52840f2f193996a074e0"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "e4bf7a4a3d3f63d6e87b7df6ba60112c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5c198b0605e8c9e35450ea445b79a220"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d50b61f92b0f6515a26b40a1b20db665"
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
