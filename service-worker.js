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
    "revision": "42c158d55cad4af6a43bbee5ceb62157"
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
    "url": "assets/js/1.1287bda7.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.d19aa05a.js",
    "revision": "c8106fe705c1c2cba39308a38051e302"
  },
  {
    "url": "assets/js/11.d3c2368d.js",
    "revision": "0e6aea5c1f18d920def44f4551681a78"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.445cf38f.js",
    "revision": "3ab3104438cdd51a0c675c3fb7f1533e"
  },
  {
    "url": "assets/js/18.f745f921.js",
    "revision": "9e7f69a56c2429ed7ab51effa387adcf"
  },
  {
    "url": "assets/js/19.e237d646.js",
    "revision": "3280cbf045bf6cf7122ff295bdd21edc"
  },
  {
    "url": "assets/js/20.8991d178.js",
    "revision": "ebafc859d1f602323d6d794718c3f2f5"
  },
  {
    "url": "assets/js/21.84673eb3.js",
    "revision": "4e2c8864696256dba18babc631c2fae0"
  },
  {
    "url": "assets/js/22.d80f7c17.js",
    "revision": "99ec1fe729b10bad5c9c2354c07b91c6"
  },
  {
    "url": "assets/js/23.b76f8598.js",
    "revision": "b84cf02752708e5f16d8d9dd92154cb1"
  },
  {
    "url": "assets/js/24.2f1431e8.js",
    "revision": "d3e3cf88bc882b1f6f719a5e0f789cf0"
  },
  {
    "url": "assets/js/25.e75ed202.js",
    "revision": "bf2d2d3a3854f7c4f00e85a27227f782"
  },
  {
    "url": "assets/js/26.48103a19.js",
    "revision": "72bb5913327ea49977c73f78cd83c012"
  },
  {
    "url": "assets/js/27.40159c5c.js",
    "revision": "46ee63d229d884e56e922ebe1d545100"
  },
  {
    "url": "assets/js/28.44d92616.js",
    "revision": "546f40b475ada55b83ac1f7b4d1372ec"
  },
  {
    "url": "assets/js/29.a217edce.js",
    "revision": "0d1056ef511c5b2e070c6c2ab4236ab1"
  },
  {
    "url": "assets/js/30.c8883bd8.js",
    "revision": "091083c5ece07f88074a92cc79fda2f6"
  },
  {
    "url": "assets/js/31.e64bcaf8.js",
    "revision": "5cfb1dee9af986d6c1660aa85290fbc2"
  },
  {
    "url": "assets/js/32.11981096.js",
    "revision": "8c023699a626e4bc6a39b7e160036050"
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
    "url": "assets/js/app.235afd93.js",
    "revision": "deac73b5e4ca0574e926ad7093d821bb"
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
    "revision": "08e0ab49856e4a68bf20f3db7366e4fc"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e8d848577729728d1e136680eb6867d4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "aa2103a4fbe3a91bab16af03fd12e7e3"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "f96a30f72b4b9e5a6fc530e78948d908"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c3b38b806f7a6395b5a18640014a2c74"
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
    "revision": "9a57d616f765cd6b9cfbe5505bd65404"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4b969ac9c3ce37bb9d30807b05a889d7"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "5bc9f2ba95ecf3b81cd2c8bda1e0e45f"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "c5a261e3d4a4099ac5f581c5de670e9c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "532948e6fadcc163d2da314135837cdd"
  },
  {
    "url": "tags/http/index.html",
    "revision": "9d44191ff244d278c3379afeefd96c0a"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "056b010247b30b2568db0821aa0550a0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "77beb36f13acf68d3f9e14fe89235df3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d764f98574888a2f9e2fea9ac62a4efe"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "9024c6bc93015ce0d079005acbbb9494"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5b644efbd6b3f3266489757909c68338"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "5ca452f954a29bcd2d296c9c6c371e5d"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "34d45b7bf430ecea26e3de16bb8dda76"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "23aba8e4b640679f35122b5bf0ab4d41"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "0306f3e6e667e4e8f5c73f91868c9500"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "de9948a38dde5062b52648d5b8ebd451"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b3d0f2f11b3f564009dd845df2c7ea23"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5378e35522055543dd6664516117a268"
  },
  {
    "url": "timeline/index.html",
    "revision": "f834d5742f7918b72a81fd1e7e7c2b83"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "4d3f686fe7d7c1397da9534a83d76b9d"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "bfa63d4c1960882647d1f4bccba8b947"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "0d64d3bdee8a9c0182e5aa6f82ef5985"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "f87f964168bb39442733e03ea20e1b75"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "09684453476cfe0faaea2a5b956bc356"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "5c51f99262105278a69ce7374d63d954"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "123cf6c3fac839e8d45834e6d723b8ca"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "bec91a1b73524401245fcefb7a03da4d"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "6e0bb0b9aedc036cdaf255c3127a27ae"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "6ed36cf0e78984632aae6f3b3eeb298b"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "5998c4edcbe547360314913e18cad535"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "7df5adb4b45735d1c14f75ea849d6d37"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "78e96a9f5bf11acbc1705d3756bc8eb2"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "011ec7d9189230543787a6862ccacd6c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "1d4cd474bda52bf408037a61af2e2eb1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9025d551aea54f4e01357e1b959beeb6"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "b6f85bfba91f867339c82574401e391f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8170cf71103f6f20c4b94d67f09d2e50"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "e1e9501cc05f93949b1dd7ac10f282b4"
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
