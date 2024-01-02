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
    "revision": "bab088ad6a425e5f83036d3e2a7470fe"
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
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.de7cbc49.js",
    "revision": "bf78fd8bd2b9d0788f15eeb5eb2af14c"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.9749855f.js",
    "revision": "7086c49cd7063242c0dc55d3080794a5"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.d7edf73b.js",
    "revision": "941a84e035e62491bb883783bb197a12"
  },
  {
    "url": "assets/js/19.86d3033b.js",
    "revision": "966dd3448c60adf0aa11e93e4cc447a2"
  },
  {
    "url": "assets/js/20.3d27528a.js",
    "revision": "ab4d82ef2e8cfe6dc61a4095454f6605"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.b32ce851.js",
    "revision": "73cf13f8b9c87ed4466b7dff4cd1edd9"
  },
  {
    "url": "assets/js/23.d23bcd9d.js",
    "revision": "59ff4008591d3ad04e279663ef0e6c16"
  },
  {
    "url": "assets/js/24.8403c412.js",
    "revision": "c85a5599d03f226988854f6ad4052d3e"
  },
  {
    "url": "assets/js/25.baa51eb7.js",
    "revision": "89832e5398f4cfa1fbcfeba6f0e98453"
  },
  {
    "url": "assets/js/26.e61c9e8b.js",
    "revision": "a02143bc63c39df13f26fc88aee65e9e"
  },
  {
    "url": "assets/js/27.740a98e1.js",
    "revision": "76625dbc4d38098f5faa0baba7362be5"
  },
  {
    "url": "assets/js/28.1701a94b.js",
    "revision": "8a760d0ca99fa9499f62290beec6c96b"
  },
  {
    "url": "assets/js/29.238aa8f9.js",
    "revision": "07fbf560d303e03041d9cbbc7139bbaa"
  },
  {
    "url": "assets/js/30.134d2447.js",
    "revision": "c64395c6075923598a7c4abe33afe901"
  },
  {
    "url": "assets/js/31.22c40953.js",
    "revision": "68e5ef051d06d178cbf771919c1be7b6"
  },
  {
    "url": "assets/js/32.2be0fe19.js",
    "revision": "a348ad3aadb420aadf84b29169b84394"
  },
  {
    "url": "assets/js/33.99a4f16a.js",
    "revision": "449fe6a7135242b3c3c46c81d9a4f8aa"
  },
  {
    "url": "assets/js/34.49be2ac0.js",
    "revision": "9751223f545993e0b12350c2f4fd45aa"
  },
  {
    "url": "assets/js/35.276d3864.js",
    "revision": "9a6a4ed627089fd10fcb94c365f36eaa"
  },
  {
    "url": "assets/js/36.40234a6f.js",
    "revision": "1a94ad38b4e64d059beb1b1724062e5f"
  },
  {
    "url": "assets/js/37.7515be35.js",
    "revision": "aa4d97b84d6ef6cf9b3ea954587fe15a"
  },
  {
    "url": "assets/js/38.59d83afe.js",
    "revision": "700557b6e62be0d071cb58e4eef7cacf"
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
    "url": "assets/js/40.29048c10.js",
    "revision": "df47c4a2cd614e40c3abc2a0b658dee5"
  },
  {
    "url": "assets/js/41.d90ad8a4.js",
    "revision": "faf828def198ed7bf3efeb2f5ca4d643"
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
    "url": "assets/js/app.3ad4d58b.js",
    "revision": "28df2b0a8da32fc5f496eeaf6f603143"
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
    "revision": "e0ec76a36cd4dbcb084595eeff0db6b6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7b455e1cc3bdf825979c59288ae9654c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ac42425f835c3271c2edeb53b3590f0c"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "33b77fa72bd7af9238cf2f1f5d3a1b8f"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "26d4a9aa96d950f4ed0192cd2b8580ba"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "29cc33ab4b891807563c6fc58e85b905"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "97970073ef97822efc89d979896224fc"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "261a4acf03198094190a71821d8e6219"
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
    "revision": "71a4521166673150134fde495915c404"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "cd2d3c48845172dad2422effc50bc972"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "080a94eeac6a04ec7d71b57f53600f01"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "354e799b62b843bb639c414a3979d8d0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2db63ab9c0755e602a08a4df7407cfbd"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "8a26afc18432c0f18f7ef133692e660b"
  },
  {
    "url": "tags/http/index.html",
    "revision": "a32f294360cff83aea6696718a3eed15"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "369745d54e1ec42992d04b57bffeac34"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "39295386f229897b74ea8f9caf4c5709"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "ef0e829ab54a38914ef2437f4477144a"
  },
  {
    "url": "tags/react/index.html",
    "revision": "849f0f1e0e59d5d81d325500eb77bc0a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "758edc0f148d62ff83196e5278082550"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "725cc3e9996ea1d767874d32e3c97f03"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "51d27ecb6cf29bc5b8f0df442baf6e9f"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "1f314be44714bf53e46e085e701239e3"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "fe0d65660e8eba5b192027013ccb9466"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7aba89c994e3cc0dc97814a1b89c3887"
  },
  {
    "url": "timeline/index.html",
    "revision": "fb01dd5c9a077203cf34e0e00f28226f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "f4ffccf374555961f1e58b343ca236d4"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "f5cccd8bb20b2cdfe1594ed011fb6623"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "d00e702c44a2ebaf2cf992cc3004d40c"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "dbc5699aabfa859065e23735b51dbbba"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "96beb441b31ab4701695bcd724ad53cc"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "501b8acd314089fa3ea4ef52920d94ef"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "0a32d00a8c0d5e8e625fb84eaeb88c9a"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "b643307c47d6ff3e403e47934418233a"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "2bfc2d01150a8873d094505b793205b1"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "2b4b3f94bac00d4fc364cf2f2fe866ec"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "19ff248ff03cade90ac0150246dbaf6a"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "fd01b7f029aff6e9465c4b053a4338de"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "5e91b3358753b6305fc9c605ac135b60"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "dd053812ef55bd847e717272cc4a9369"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "1d68c686c4acb88982c2fd3fb9b72cac"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "404d261092ae8d188f74843ee8792d7c"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "74879546811b4b08547d819c9d88574c"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "1b102c751d889fa99407b25d537d689a"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "5c642a4d93b55e47c1ca4fd73723f9f6"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d746acc5c280b37a568e7df2676e7489"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "99d2a859918c8ab7ead6ca47468f0cb8"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "18e152036bc6d43ec9a11f0deb81ffb5"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "f77ec81771697a7c55937b31f947307c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "647de36fb31664524b530b4b75fb32ee"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "68b483d2bfaffb74b12906e63d830dc9"
  },
  {
    "url": "项目搭建/vue从0到1项目搭建.html",
    "revision": "7285f7b068ce9b986b6404c42a85b48e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "593fcfde937f01312036907d16991b82"
  },
  {
    "url": "鸿蒙/Harmony.html",
    "revision": "36ce24f7b370f92bebaf2df1cd1e81a4"
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
