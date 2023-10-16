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
    "revision": "034766ad2b01193418c8dc98c983e0e5"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.0389f4ad.js",
    "revision": "7deefef1483822ce7d568d229df1f65d"
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
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.63ac64ec.js",
    "revision": "f83d923f535ad9ead6ffe24452203e7c"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.53c5982b.js",
    "revision": "4099e0f1c90e5989a517cfa5774483a1"
  },
  {
    "url": "assets/js/24.5fcf9427.js",
    "revision": "24547fda200b87285d874e787fd7ea8f"
  },
  {
    "url": "assets/js/25.f1c85261.js",
    "revision": "d12aa6c8fd7498b361fb68a0eb946d84"
  },
  {
    "url": "assets/js/26.442e3b9d.js",
    "revision": "9564d4501eda26ecc2606f458488434b"
  },
  {
    "url": "assets/js/27.28aa0527.js",
    "revision": "dca780ac05bc304f4cd0287f49dcd209"
  },
  {
    "url": "assets/js/28.53eeb1b6.js",
    "revision": "7af3e3e5f94a83d52e7deaae306e2c9b"
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
    "url": "assets/js/31.eb3497de.js",
    "revision": "757da3a9e47784b8a02d87549607a9c4"
  },
  {
    "url": "assets/js/32.872dab96.js",
    "revision": "b2bfab22389206780e937301031190f0"
  },
  {
    "url": "assets/js/33.f137f2bc.js",
    "revision": "4c9c3ada953321210219c62874fff001"
  },
  {
    "url": "assets/js/34.c3873175.js",
    "revision": "938a8580217220737ddcbfd12588ee02"
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
    "url": "assets/js/app.0a3b4f8c.js",
    "revision": "eb3ecd8762ff94bfa142872704a60998"
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
    "revision": "c0bddf6d10a1a53764489c3468f8acb2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "cce9ae8a7f83fc1140b2d5146e42e700"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9fbca1f5a4cd62a0baba96ea3be3051a"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "2cc9617fc6c825bca00c26e7a4c41dc3"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d8f8988ff1f67e934fc0300a020b312f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0a6f62bf9af1930636bdae214e4a9b26"
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
    "revision": "ee5639e71f9f0846a992b57f3d4915cf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9ae23aadb57ab631a36d2773352a603c"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "b83004c23dbf5474d51f9c0655376fb8"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "68fac11ba2299b19adaf89593869926c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "bdf1d408adbccd3735c447935766bd1d"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "408711210c3cc61296999ace6db4183d"
  },
  {
    "url": "tags/http/index.html",
    "revision": "20da562ecda9cba724fee21981d52568"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "6bd26f8fac58e4e1570519344ade4848"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6cce35ae87d20e56fc2026970f272e3f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "081ea3e7e92b43e31afa252541e98d9e"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "056889242be9e47f3870c0d07c1b5a33"
  },
  {
    "url": "tags/react/index.html",
    "revision": "12da7952c4ba2d7f9f29e20d905c32f4"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "8fb8fc691c71fd394e9a75186e2e0027"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "02810b81c4ba39b7806c34112727fa1e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f0224045bbe87062357d109a4228c64a"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "2222eb1794111c4d4defae5d7e74a617"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "e0f5d6a392e99634c2d66e19feb16698"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "f4740661e7fbb6485c9b6fe540a8321b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "83452be78483e2e178f5b44061f571bc"
  },
  {
    "url": "timeline/index.html",
    "revision": "083c1315bc77232be0ea2a093c751c7d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "277e2415b1577163441409e930821c3d"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "11da799ed3aaec685347ceb2e17c903c"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "a1f3878f9b664542ea1903b5f9d72278"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "48a7b106581ec31a33ecaa3a74cb4a88"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "73ed6c51b2b47563d72555121953b12c"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "a69313b49a82e32e2ec465b9567ad5c1"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "226b7f72d970faa6ecfb52403602ad02"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "662db241e2bc2b9ba0bd071c473befe8"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "4e9fa57a1801cb98c11f4de342dbd0ee"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "4e13aa7cace3331dc251065b833178a3"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "47c7e6084e5dc66cd818b87091dd713e"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "36b16f814a59fa011829f9fb356714d1"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "b4b8fac261c94320256e7cbaab06b599"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "5bbc3067d55d37f1da08f48c7cc96862"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "f67fb906773a91104ca85a0749c67b51"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "36594a4ae54ad5e0366ec739e08d0030"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "132b0222121dabb8c5b8283e334b922c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "829ec9925b19f07e95a9c975661c623c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2e526a4b78d7a3f0a692ce0cdefa3167"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "2f6d2f0e90e1550825d96030d3f075b1"
  },
  {
    "url": "生活分享/life.html",
    "revision": "278a7428aca8666e21c2cd28e027d88a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d7e25a05aa26c7b1c10edab15acc4155"
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
