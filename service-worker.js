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
    "revision": "14d523a77ec0c841fb0431b635f1f07f"
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
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.73e40615.js",
    "revision": "6b9782c7403ecc3ab63688924f3fe503"
  },
  {
    "url": "assets/js/17.7f0d5ef5.js",
    "revision": "6d9791789995922d3eabada6944de9e8"
  },
  {
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
  },
  {
    "url": "assets/js/20.3d27528a.js",
    "revision": "ab4d82ef2e8cfe6dc61a4095454f6605"
  },
  {
    "url": "assets/js/21.42019346.js",
    "revision": "6c9b06b2523788f2f10d9dba502cb85d"
  },
  {
    "url": "assets/js/22.2dbac243.js",
    "revision": "c2560f9a619e5a7444d2d3c8da8725c0"
  },
  {
    "url": "assets/js/23.72fbfa07.js",
    "revision": "740a67f1804508900883e0565571bd13"
  },
  {
    "url": "assets/js/24.e25b883a.js",
    "revision": "d2e0966262f3aca22795176000830f28"
  },
  {
    "url": "assets/js/25.ff5ccad5.js",
    "revision": "bb44d24ed25f1d134676d5c31373995c"
  },
  {
    "url": "assets/js/26.ca8d74b6.js",
    "revision": "45d12203d42032d83e00a2b5209af9d5"
  },
  {
    "url": "assets/js/27.4affb059.js",
    "revision": "b43aae3f544bfeb8b29b5915ff928b33"
  },
  {
    "url": "assets/js/28.c1c07122.js",
    "revision": "a767bca732d994f6581bbb367aa0fe80"
  },
  {
    "url": "assets/js/29.b093532c.js",
    "revision": "0a413dcf4e93f8d042e7c6f8815d0c7c"
  },
  {
    "url": "assets/js/30.eb7e682c.js",
    "revision": "df66323c55891928a66fe198a84df0e7"
  },
  {
    "url": "assets/js/31.8c184eeb.js",
    "revision": "6ebff70ac0b32554ab205af9f114991e"
  },
  {
    "url": "assets/js/32.fd8f6a62.js",
    "revision": "e03e29ff4b9f0021a8778eddb84dd8b8"
  },
  {
    "url": "assets/js/33.1a519cfb.js",
    "revision": "04444f438b9428d90823a2596f545851"
  },
  {
    "url": "assets/js/34.cc9e29d9.js",
    "revision": "1b5969da272ef9fb9e259d6cb6e3d45d"
  },
  {
    "url": "assets/js/35.53ae4149.js",
    "revision": "faeeb11582e85ab1ae3675ea28a3ca41"
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
    "url": "assets/js/app.4bf02327.js",
    "revision": "0e22b351edd30265860b738892996efb"
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
    "revision": "b67418f0e96302169f67050adc48cb2e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "04da8dd1b3850dcb8cdbccc267cda645"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "46700321ccd7e3b2e4884529ac008e58"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "add1fc1ae6898bdf141d779ddc22c40a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "dd0bffb5d0ee3ebb41bda1c7367a1864"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "203e1e2ea906d2b0fce1ed8536e7aadd"
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
    "revision": "616f29846da385172cc84121ae94ad77"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3e7cbd9b7249f77e39642911bd19303b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "fdfe0d9d1dcff2805fcdea9e4306dc2e"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "8def3ce769697a78d562b790688984a9"
  },
  {
    "url": "tags/git/index.html",
    "revision": "860441ff1b305a95b04f0e67e884585a"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "f7e05e2489b564bf65e14df5361a16cf"
  },
  {
    "url": "tags/http/index.html",
    "revision": "2ccdca8293267f863f87941a2e7c1098"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "375b57665e9501dfc89e08917d433fda"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fcb08e71b6b6ef792666af93f46e0036"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f2d1bbf2852282487cc7343ca70777e8"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "db0a397332e3afbbf93eeddb91929134"
  },
  {
    "url": "tags/react/index.html",
    "revision": "a56be7340c905e17d1c747610ad850f1"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "8d4d6986bde3ab3070c2d21bc1894562"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "b4e1bb27132c49e6f519df36e7d384b0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7da4c704d790e087b54ed0bc88b2e8de"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "30eefdaed789413b0db987aef0e756df"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "50d082d982cc0c3c068425eda96be7cf"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "0177e13e9f8e2ca3af5accac1a552e1a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "91160497a8341204cc9b4aff0b26376b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fe6209215d6767080f2b197fbf45c09"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "7fc04e8d6161399bc0a978674ae6329c"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "9a6c28b9bc936368d038de146666d64a"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "f072b709413604619141028af2dcb07b"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "21497097c8863fb8a9c2eed2d86ae238"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "73cbffddc397dea775edbd0b9e26052c"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "934f2fefc889e752afe899e43d5aa793"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "192b220bc4e64273f81acfb7f91541fe"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "7f13fe4c57a356967d96537a5ccea037"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "42e6162400f2a116b8ae08fc1bf6306f"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "8a76809cfe0d235029a019eda2ed4759"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "f67f55f8c80a6a7edcaaf3279958c0d7"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "c06cb84011c223eafb20df72efa3e4b2"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "bf8f1f23c429651173470e1e972e514b"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "995f8795a1000a2fc157b6f522dd6e37"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "21259c16fd4cfad853d9d34e4d3c32f8"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "00b4cddbaeabb4a97f700a9a73ffe493"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "d8c888ea9c524640407def7fbf985426"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "1fea40fe01f10fd8af22583185b08877"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "46911e616d0a9b0e185b9e78956f10ef"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "e59f948856d4ebf24753027b68e04618"
  },
  {
    "url": "生活分享/life.html",
    "revision": "20de06ebff90e1e4faebb79b2d2a780a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "0f175e6c645cf74af855011c38980462"
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
