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
    "revision": "d94c91c257dbc93959c426a48a4f7f04"
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
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.bf885247.js",
    "revision": "fac326e6c9d934bbaadd91a3c3be3502"
  },
  {
    "url": "assets/js/16.f46437dd.js",
    "revision": "f92a627c5403b30792689da4772eeddd"
  },
  {
    "url": "assets/js/17.da6fedcc.js",
    "revision": "2e1aa78444e38b32230fad52c2fae1aa"
  },
  {
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.4853222c.js",
    "revision": "9fc5bec76e65b87654c9546403c88c4c"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.2cb9c50c.js",
    "revision": "949b6e7cc11a4672122af43818677b30"
  },
  {
    "url": "assets/js/23.6143b4bf.js",
    "revision": "b2da95bbbcb423bf9ed91cd2a0c8db39"
  },
  {
    "url": "assets/js/24.f854ce6e.js",
    "revision": "900612bcef83fec04697161f5f0db58d"
  },
  {
    "url": "assets/js/25.13b50e2b.js",
    "revision": "0cfacefe89914f5e595d89e7111a4702"
  },
  {
    "url": "assets/js/26.ca8d74b6.js",
    "revision": "45d12203d42032d83e00a2b5209af9d5"
  },
  {
    "url": "assets/js/27.bead8d0a.js",
    "revision": "49e852ec3366a009610b78b3b8a0d242"
  },
  {
    "url": "assets/js/28.c1c07122.js",
    "revision": "a767bca732d994f6581bbb367aa0fe80"
  },
  {
    "url": "assets/js/29.a8105037.js",
    "revision": "02e87bd225f678621df6e5cba77675bb"
  },
  {
    "url": "assets/js/30.ab30e83b.js",
    "revision": "c6a86f5c48bcb5736c4bc98fbc3e7b5f"
  },
  {
    "url": "assets/js/31.60b2d144.js",
    "revision": "d32ecf5940d273b9228002da127b6bdd"
  },
  {
    "url": "assets/js/32.b61dff2c.js",
    "revision": "4678114d3bc18c7038b60f71fdb5e4cd"
  },
  {
    "url": "assets/js/33.d9a47e1d.js",
    "revision": "56ca7d46b423d20417cdd568216afce1"
  },
  {
    "url": "assets/js/34.4b8a7215.js",
    "revision": "5c8b5ef7f2b6a200d9752da03b14435f"
  },
  {
    "url": "assets/js/35.f1ac2645.js",
    "revision": "d5f91623db0cce57585525cc84d5ee4b"
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
    "url": "assets/js/app.cd9bbacd.js",
    "revision": "b5351147958952dc5bf783fce79826a8"
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
    "revision": "d377a98b509d8c51cf96ca31febb92e6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e554c0fbf2026f24815e9fcf822df8e9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6904ae13131d2cc488dc365c42a31c4d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "8562358b042543178315e19fba75ef6d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "78b273c1f4c8838fd807dd9ff626f820"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ea967bc7274599be5665203fb6cf6dd8"
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
    "revision": "4006c7f961110a58e59ffa950c223fdc"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4d3089acb8f86d458502b78bcfcdb001"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "cd98101f8cb66cc3b93130b4eb0d37b6"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "fa9269852558856addb954a5003c73f5"
  },
  {
    "url": "tags/git/index.html",
    "revision": "05efc1c773f9e3a5a8dc5bdd6412f0b1"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "9b6c3b1b88146e854a887158a5e49cc3"
  },
  {
    "url": "tags/http/index.html",
    "revision": "4a43bc4223bac2c338bbdd6d14c90737"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "178874c34761ff19182c44e134ccd55d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "379109f87b226d961106b07a8127c652"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3d3ec055b37662b22a07c556bc3cd468"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "a1780c9cc06e700f3516242b9395c4dd"
  },
  {
    "url": "tags/react/index.html",
    "revision": "fd8a7625d16a87633a46c5ea6e187725"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "b5ab9ed494a97a980c7d5b2f35ebb186"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "acb62679fdc0c629790ebb8c01b3c8b8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f8997f6cef45abba8644e80093bd3de1"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "0d2306d6dbcb88272fcba3c09068d76e"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "bac44d68c082f231f3206874744eeced"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "488919bf081cd0763749e807bf845872"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4b8067834405a00aaf1571b5d7f72e7a"
  },
  {
    "url": "timeline/index.html",
    "revision": "e69c4ba24152166f102a613d023a99d2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "3adaa44da8c4ecbfae6f150ae15e9c98"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "595549b7aed91bc510dfda271c266b84"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e3a736dd8a8352e8f8d195dadd03245d"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "75a30974be762e2ffcc614e01867e181"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "d8fc1f86343acae02770e9632042d99e"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "7aa9bcdf37de2e341b3661b7c1d687d1"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "c0171155c48745092dbe0f90bc2eb51c"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "df9b206b2f669cf3682777fd0279c796"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "b602c242e87b2d0e924554c11f50514f"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "78d6894043e39f47b0d98200f82f0fcd"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "56c9bd250b9156c8c28cc20ed27570c6"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "7d30f78a692178a885706edbae35e74d"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "5383ae64968f67fd1b774a7b360ba0ad"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "54f97caa6b11ee7d0d24b9357f4514b0"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "5558cb8c78dc8cdd28ced349731ec783"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "69c65302e3403de24580c909e6f01952"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "ebcbe3aa3f6708d3fe6fd97b12da5288"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d73ec32ca3443276bb4401ea1436df75"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2d9b01bb2242f76040bb20844b2d0996"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "0fc7f859aa3ba88231532a68b86a3792"
  },
  {
    "url": "生活分享/life.html",
    "revision": "074819db5b4e4208d3bb7feb937f06fb"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "7ebd64b3f3e78e6295827ccca6f9f117"
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
