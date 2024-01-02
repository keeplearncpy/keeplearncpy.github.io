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
    "revision": "456dd1c2053d1c2c4b880bfb48dd977f"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.d748c023.js",
    "revision": "446f00f9245fc0600563c47ef50ab885"
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
    "url": "assets/js/18.8e1dd9cb.js",
    "revision": "f78ead17e1bb07455ecb7f8f86374be6"
  },
  {
    "url": "assets/js/19.abfb2ceb.js",
    "revision": "c5ea1655fd700f37496961e24abf1550"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.70f10704.js",
    "revision": "dce064fb1e2ccf788886c6cce7d9abcc"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.9db70f02.js",
    "revision": "4f503faa00c2ac458dfb202de48787b9"
  },
  {
    "url": "assets/js/24.59763f00.js",
    "revision": "b3ee1d44cd9e040bd42ae4305d454b27"
  },
  {
    "url": "assets/js/25.a7d13a72.js",
    "revision": "c594e7d2981d178a7afe74faa7f9274a"
  },
  {
    "url": "assets/js/26.d34ef5ac.js",
    "revision": "8c05f10d0f28be7ece2095871d50539f"
  },
  {
    "url": "assets/js/27.47549b9d.js",
    "revision": "0f72b8876d3a2a4a5488a79a91cb7a2a"
  },
  {
    "url": "assets/js/28.1701a94b.js",
    "revision": "8a760d0ca99fa9499f62290beec6c96b"
  },
  {
    "url": "assets/js/29.2b5d69ec.js",
    "revision": "646826eeb2e97c444ba8a1a83f0eff69"
  },
  {
    "url": "assets/js/30.7a0445d4.js",
    "revision": "61bce6a5796c204925963030fefea4ec"
  },
  {
    "url": "assets/js/31.8980757d.js",
    "revision": "c5ec21e85bfa81a8a26dc1e8dba7e7fd"
  },
  {
    "url": "assets/js/32.175f3fa1.js",
    "revision": "7ed934122674a7c324dbc6223249c10a"
  },
  {
    "url": "assets/js/33.846ce04a.js",
    "revision": "5c10c64d33df3b3f01068a54390b70ad"
  },
  {
    "url": "assets/js/34.c3a3cd0e.js",
    "revision": "5beee4852e3dcb1a44f7aec409408269"
  },
  {
    "url": "assets/js/35.2f3cb1b8.js",
    "revision": "f1829b1a47b561e1717cc91e9c95b116"
  },
  {
    "url": "assets/js/36.3af23973.js",
    "revision": "6cc2ff612446dd3f564a69d7f5a01707"
  },
  {
    "url": "assets/js/37.4b4d2288.js",
    "revision": "b56164849fe36fc56f0fae6092fe15cc"
  },
  {
    "url": "assets/js/38.035b1bf6.js",
    "revision": "1178cb9242b3cddd041f917b98e1d1e3"
  },
  {
    "url": "assets/js/39.a89d253d.js",
    "revision": "10dd92b7de6822cf280951a3f6779ed2"
  },
  {
    "url": "assets/js/4.08080986.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.d3cdd4bf.js",
    "revision": "8c33e8c31fc6bb97ba799bc5344a3698"
  },
  {
    "url": "assets/js/41.bfc401c9.js",
    "revision": "893cf2a7a25d6be687b3a4a30e4bc99c"
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
    "url": "assets/js/app.02e40e69.js",
    "revision": "cadd1da1328a49499d63b05a5543452e"
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
    "revision": "fe6ba65752c739b95a514707477e33f7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ed3b89c07dab29473d826ebc4db1350e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "de66a88696b7160b9d8da8afcf038c6e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "2c9bb5ab6acfc1cb287eb2a8cc299aeb"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "7f5fd66e714e58f0ea1c99b5c7925a38"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "230140121a80d3de28c8228f7279e23c"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "995f2399e407b52d7cdcdd55f15c6eb9"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "e73012c5edfbdcbd233c2856707f0b30"
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
    "revision": "d4036a775a40367c48ff0addaa33ec43"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "11c634256db74c30daa883571fc13a1d"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "9e22a49cbd7ea715fc4ef7c8fb810f90"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "3be760c34224e52df27c8c4836a6b34c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "bb9527d0fc24823e1d78251625c475ea"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "6bc1928d0e7d3babefbbb8ab40691ab1"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b4b0ef0a9323c2e3d89f23641eba9d5f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "48a44ae91ba2e793ddaa6814d4e7b3fe"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d2c3c2ce0845f38ec50267e4f806f721"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "b5f5f96ec5b07a3d6fa4aad4947903ff"
  },
  {
    "url": "tags/react/index.html",
    "revision": "1b057ed9a1fbaab020943e6c5ae0ea2e"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "e4d00f40d5dec18313b8899bea4e05be"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "3c4ebdcb60f2195ecec646a888b320d1"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "27a510e15c691afe6e346c5fc5f6f5e0"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "01b58223b3f6838d72cf67d2e3158a99"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b522489c1bc590c707fa532b3f322a88"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d5ea62c3f3eac8f78132cad86b563ec1"
  },
  {
    "url": "timeline/index.html",
    "revision": "02ff11a6ed5378ddcf2423010a614086"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "a80d296a2c0b9ae57a8cf60b215b222c"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "816652d2cccfc444ce2bf5559794016b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "3e9a77139274b5ae72079baa25ebff40"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "7fbc081857d4d05f2bcb3640c429834f"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "a985d115bacb70885e8bbfb53f3b14e9"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "a89189466fcc616a0505fa7ea934348c"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "d53290c5f84dbd9ceb1807f901009c71"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "46765532afa0ef8108732c2fd64cdbfe"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "e7b70b82651e1fe51cc29b9138235c4d"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "2f68429a8f165ec37d16a549b6c34a8c"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "162f1a05a28e17e12273d5f21dca22f6"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "d7507d2fdee661dd2851d33170fc89e0"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "607b09c183c97d00f77a044cbb028964"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "79cb7b97c7fcdf4c373756e802acad2d"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "fcc7c3240e4f864f175127b56e8b5ec5"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "0e91d4d0e077389c62d9775387a26e0e"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "6b5e92c93276e6401a1e6ba61b3f5f25"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "5de63646596d7d301a058fc5ebfa186e"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "994e38c823b1a84e0ebedca5771f605f"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "ba834c29bad440a959f9901385c4fea2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "75c97906e856e63c9f5b72050e699af1"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "32d62ef5a0b3b99ec30b6e017371ced8"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "0a205e77a81e82887a9af4d49caca7df"
  },
  {
    "url": "生活分享/life.html",
    "revision": "09cfc1146d1a686928a49bedeef07f1d"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "27c48b2c773a0b114eca95926ab8eb65"
  },
  {
    "url": "项目搭建/vue从0到1项目搭建.html",
    "revision": "a6194923df7f528b42a3ee6be2051a5b"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "7c172deda691cdc6cce14b8e0c75a812"
  },
  {
    "url": "鸿蒙/Harmony.html",
    "revision": "21e379ebbc78a1802444d2826f9412ee"
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
