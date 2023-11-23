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
    "revision": "2d3525cb93c4b4fdd58f1ccd6807ea60"
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
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.8fa5e0ff.js",
    "revision": "1962297767003bfc75dc825d4456f659"
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
    "url": "assets/js/21.51007622.js",
    "revision": "545107f802dc8a169004ebe7b691f0f8"
  },
  {
    "url": "assets/js/22.993f21c3.js",
    "revision": "615d401a4a10bad8e79fef93f29853a2"
  },
  {
    "url": "assets/js/23.af992947.js",
    "revision": "5dbbc10d00145c966e886e315dc6b7ce"
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
    "url": "assets/js/26.26d95775.js",
    "revision": "4fea7a16a73ea9c1bef1d93fb8d35242"
  },
  {
    "url": "assets/js/27.82dacda8.js",
    "revision": "57a9a5e48eaa46ebda384c1193a1d1d6"
  },
  {
    "url": "assets/js/28.1701a94b.js",
    "revision": "8a760d0ca99fa9499f62290beec6c96b"
  },
  {
    "url": "assets/js/29.82b4bcb9.js",
    "revision": "4086473b677cd61042b93aa739a57d37"
  },
  {
    "url": "assets/js/30.0d2829ab.js",
    "revision": "d245ede5cf64a6a0ec334097fb410b47"
  },
  {
    "url": "assets/js/31.329712e7.js",
    "revision": "75b9624525676eb66cbd0d26d4b2177e"
  },
  {
    "url": "assets/js/32.3d1af4fd.js",
    "revision": "7f744343845d85bc764e0fadf01ee6c0"
  },
  {
    "url": "assets/js/33.999e72c6.js",
    "revision": "8946cb8a6a81b91c88d06157dd535c5f"
  },
  {
    "url": "assets/js/34.127d937a.js",
    "revision": "fc0457094caca51d3848b3db3456baa4"
  },
  {
    "url": "assets/js/35.eb3e68e0.js",
    "revision": "e84ad727af2b3207906d1c31633dd83e"
  },
  {
    "url": "assets/js/36.0176a407.js",
    "revision": "7f34aab746180b38de39b3976eae253a"
  },
  {
    "url": "assets/js/37.bc29940f.js",
    "revision": "7a0b34bd85e954f4960967095e7f9459"
  },
  {
    "url": "assets/js/38.6f870891.js",
    "revision": "6bcaad1739885780b1343adbd8d4fc1d"
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
    "url": "assets/js/app.bdd3e543.js",
    "revision": "7120edb3dea208dae14665467876d289"
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
    "revision": "d62fd9a3f0daf78b21aea797cdd7d6e6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a9c25980805a76c81e286a1f946d6e6e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "76342154b8e03d3ebe11b28dee888932"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "4cb35cb1bccbc7d027f2f7c819abdd0d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "38ecf6ab5c4a2a3b8e2b4fb5f5621efb"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8e445c41c7c2cb5b967b23813d1d29f7"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "1f96d0233c1577de29bceb17c0899be3"
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
    "revision": "3f19ba8ad4d06374067bc08cb36a04e9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ff01ccaeba8840b87440ca55d4c70f92"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "f3f7127f61125c819639b438c76f9bee"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "37be5efa39a8c9e47bcc1eeff217ec11"
  },
  {
    "url": "tags/git/index.html",
    "revision": "4f5a7824c9cbc8058d0e664473e51122"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "c888728db4670e0b3d39c531ad5a1063"
  },
  {
    "url": "tags/http/index.html",
    "revision": "edab9dcdd95f88447494c0a64e0d5994"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "91aace4cbcff654190e0dc3a48964203"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9f75a5d7362fcb9ced9118fce9841d0b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7e7c916478036f59b2cf6366a8883201"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "8388285a6007581ae0698d360065524b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "b43cce69980cb3ed77660d2587eb6b92"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "f23d58d58b6ba6c8166b4b19f51338dc"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "b333013df398f903bc240935fdcb92eb"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "edbacb6b9c2862ca6f0f077295a4abbb"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "225bc01ab28175597ef7cdc3c84e0ad1"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "e5b27372e253e808d549fb01a5274258"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "72e17fb005fc1b8c5a9252ad69f61bcd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3c7117654959d6de04cf04b21c9cd9ac"
  },
  {
    "url": "timeline/index.html",
    "revision": "e1adfca098e7f98010d47eba58c885a2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "62b8e50d18e3095fa1a670b841cf5769"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "ff773f49c08ed30906f0748c97ddce1b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "88d48f63784678f5d6cab382dacc27e2"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "d522a49c51ff2c6722b714411a7ece43"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "97db1d5fb72c92a41249faeb8de692c8"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "8a51582a38cf1734cf348a15d47cccf5"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "902b887bb21ddb14acda79e21dd36587"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "211dd2b482e1bde7e691f51482485f1a"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "3e7c2323ced61fe785b8480e60d5c276"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "3a896eb3482122670f5f6997150a489b"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "808c853771c2f5023f4f83209226ddae"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "5589f0ba2784b0c0850fd4b15d20295d"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "cf82242e3ee1c5404738ad58d39f57ee"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "f4ac315974c8bb7f849fdbaf8450a36e"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "4c0c42558659d57c18a64be536d6ee45"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "71939911fb479582efe336b32a8cafc2"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "d979c29d7337a7be54c55ed1d9074499"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "1a27c33224bc44f93b911d2591f23340"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "4e7379a63085dc5aa862a21323c0976f"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d1f8b9a79ebbd716b6552c9206234fd0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "527a0935d89ded7aa835d89c87c7de4d"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "99da9b4583cd5af10ccefce5ce30c53f"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "47d035473cc2612a5fa3759c4c537766"
  },
  {
    "url": "生活分享/life.html",
    "revision": "12aa5271b31840a691464da9bc200648"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f1d52d8b278d7aa8d0d1c49dad9221ed"
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
