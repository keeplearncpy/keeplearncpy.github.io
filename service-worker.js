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
    "revision": "80466ba1f8265f5f4f512c8355db42e0"
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
    "url": "assets/js/11.e58503a7.js",
    "revision": "c112dac0ef2ce83731aebc186a15f46f"
  },
  {
    "url": "assets/js/12.9c2b83bc.js",
    "revision": "cdbf35f69d75f5215cd8baf5b5e52875"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.7f0d5ef5.js",
    "revision": "6d9791789995922d3eabada6944de9e8"
  },
  {
    "url": "assets/js/18.9e11e0f1.js",
    "revision": "b15edd0e52e72db8a6e07de066de6293"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
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
    "url": "assets/js/23.ac6a31c3.js",
    "revision": "0c5d5ecbd9ff59981f1738ab5dc0be71"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.9652b80a.js",
    "revision": "b6e1742857a564c9b86a37614c09ee10"
  },
  {
    "url": "assets/js/26.e61c9e8b.js",
    "revision": "a02143bc63c39df13f26fc88aee65e9e"
  },
  {
    "url": "assets/js/27.82dacda8.js",
    "revision": "57a9a5e48eaa46ebda384c1193a1d1d6"
  },
  {
    "url": "assets/js/28.f6879937.js",
    "revision": "77bc41dac6d237ef10fd7c300e162e31"
  },
  {
    "url": "assets/js/29.4ddececa.js",
    "revision": "ab586d22bee6d90dab5ad37c2c91588a"
  },
  {
    "url": "assets/js/30.004d8755.js",
    "revision": "023d56471cef0afdac6af2c2c27e13ec"
  },
  {
    "url": "assets/js/31.5a691524.js",
    "revision": "91f6f1120268c25d128006e843a5dcec"
  },
  {
    "url": "assets/js/32.6c10328f.js",
    "revision": "db1d96d7c2db66900edd9d83c80f0a12"
  },
  {
    "url": "assets/js/33.16a0a7c8.js",
    "revision": "965e13a5763aa3bed6a22bc99fa0c6a3"
  },
  {
    "url": "assets/js/34.7821464a.js",
    "revision": "09576675e6ba2bdcc71f76249e6fb27c"
  },
  {
    "url": "assets/js/35.90b1feef.js",
    "revision": "dbddc8293b9f4a00c36eb29288656625"
  },
  {
    "url": "assets/js/36.8521cbb5.js",
    "revision": "b037954b425f9b17c982dc0e4a2b2d66"
  },
  {
    "url": "assets/js/37.bc29940f.js",
    "revision": "7a0b34bd85e954f4960967095e7f9459"
  },
  {
    "url": "assets/js/38.4541660d.js",
    "revision": "379bbf9197af29919d207853f16b2bf9"
  },
  {
    "url": "assets/js/39.3dd98354.js",
    "revision": "352930544026ba5b71c299019a8cec98"
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
    "url": "assets/js/app.a04259ff.js",
    "revision": "51880ea07784ec8ccd27941cceeec099"
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
    "revision": "d7b1ca3406eece563f410509217891ea"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bba8e788e36d544a09dab8e8b47bca4c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c4ce9c1d0066ae35842ff2a9dbc34db0"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "bab39a0d6030f4df230f163e4888b983"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "9ac6accf0466c89926d5f7a866204c50"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "34504b8c870f249fd75619414222c1e4"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "8d0d8972dd0ee6c0e4ef4081f3e0dc3a"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "66ee6c501b41e50a91959352f8f20ee4"
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
    "revision": "35375af9ba43fabadd629a21e77d695a"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "6e39ebe18610828e7437eb3fbf84ce3c"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "a35ef2624bd9f1cd5a4f371c8ae0d1ce"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d316ffe83cc2f3c96c961a78dba7db13"
  },
  {
    "url": "tags/git/index.html",
    "revision": "42a47f3472c52d8aef2f5cb32d49b230"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "f307ab8488c6d0d51ba3f02ffd65e8ab"
  },
  {
    "url": "tags/http/index.html",
    "revision": "1de12861149a54b8752e608e2aff9f16"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b1ee9df4e3bacc5763a17c934e49dff8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "712fd94112e3975de9a47062203ef83a"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "59a8289dcd7db7c59a81b1ffc4d55a20"
  },
  {
    "url": "tags/react/index.html",
    "revision": "8e0b39b42841d4d41bf443302b52e250"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "9f3b31d97ced7c9a7ecebce56d756a3e"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "7f8bdcb14515563dc9b0716f37bb04b0"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "34fb9859a08fd4016ff9fafd6ae36188"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "4d51b922d3d7358ff6f56d51a4054b85"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "916261d351f56ef4146dc3bbcc1dd97e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ebadf894c90ab6ddce38fb06aabf6a30"
  },
  {
    "url": "timeline/index.html",
    "revision": "b71ead2cd53ecbbf127b356debab622c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "c46d1efed6ecbcb7fd27386019c84923"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "ca013cb98bf09a74f822e1304eb155f3"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e496b1feff7a7bd717cb9a8ed13467c9"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "f70df28e09eef8f4a0819a4a956513ef"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "cb2b2667744b47fb856d9c51ec2c048c"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "c5cf5a30756aefa27e6495fd871a9964"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "72590f1733644c45dce72f87c276c981"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "6b9d1d29925a59561fee1be460e9913c"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "cc5abfe3eb0c9c9bced543067ddeb3f7"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "a7b9b5eac366f7383dd30a9f450f0990"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "51cd4908b5f1c15f2e9b21e7dbf38433"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "52fd80ae3338f72e153dd68472990ede"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "6baa669117a3cd60390eee731a0c2c00"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "3b17de2b5429ecbfc69e42864a2f32e4"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "faad99430d5103ea4067862cd5206af5"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "68ee902944843644c23d1bea5768bb0d"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "87794b46832cc700d02cc26d440b1489"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "8ddaf55ad9ff045aec65eef6e6320beb"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "f63d4ad761ca84461a82f5d052e01c20"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "b7baef7a969887f328aa0af4b102887b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2246eb1c45362aff76ffaea602e8a325"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "646774bbeb5162392a9fcbab784c1257"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "5111718e539004c209c492f55d2a54c5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "066910cd1cd2311b4d49fb9171b58a95"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "79ea89102ab2d5636ac457aba3925b15"
  },
  {
    "url": "项目搭建/vue从0到1项目搭建.html",
    "revision": "e1a121f4870644a844d9a6d53d634397"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f19bb51f7454eba011b8ce48eee6f6dd"
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
