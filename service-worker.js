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
    "revision": "4317fadaa8db35a2086bc5d51d8a72a5"
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
    "url": "assets/js/18.667a8e69.js",
    "revision": "5a061ee5b6f949b43dc77b12a16b4aa8"
  },
  {
    "url": "assets/js/19.bfc5420d.js",
    "revision": "9d76987e503bb9ad38cfd0583bae18a8"
  },
  {
    "url": "assets/js/20.8991d178.js",
    "revision": "ebafc859d1f602323d6d794718c3f2f5"
  },
  {
    "url": "assets/js/21.640af5a4.js",
    "revision": "c42207a0fee0362e32b2573f654a05e5"
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
    "url": "assets/js/25.cb3c7eef.js",
    "revision": "eab5f5148d320c8168730b086075c353"
  },
  {
    "url": "assets/js/26.48103a19.js",
    "revision": "72bb5913327ea49977c73f78cd83c012"
  },
  {
    "url": "assets/js/27.fd6310f2.js",
    "revision": "5d1ebb667a6c7aeba21e4fae93db320e"
  },
  {
    "url": "assets/js/28.238bb63d.js",
    "revision": "6962401c7d1ef55bc9ae936c1022b908"
  },
  {
    "url": "assets/js/29.e0f66071.js",
    "revision": "6b77259861e67403f6afd843717e4273"
  },
  {
    "url": "assets/js/30.120c7fe0.js",
    "revision": "013dc581c7c0eef39ece81285bc4920a"
  },
  {
    "url": "assets/js/31.dea03980.js",
    "revision": "237b521d7abd751044db7fb7f6752f7b"
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
    "url": "assets/js/app.7ee36bda.js",
    "revision": "2b75fe7e62d1d8d8b1c30cd87bd1ed5f"
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
    "revision": "b9962234d4584d5a3a6e0459bd90f020"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bf499fa79001122626465eef7bab818f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "45ef12a7cacf0b5e1e5265a040254be6"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "1cdc72ac25763fb5c4b98f88e1287f89"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "15d90db86f9359e2240cb968680fa176"
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
    "revision": "1a030eb863798b54f946a27e1b8f5da9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "54f2822ca005fc98d26ccbd09f726ae5"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "5dd05298e78b2b68654205531dacba7c"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "3a67f27f9eeea3548237d74044c2c528"
  },
  {
    "url": "tags/git/index.html",
    "revision": "829db3ec9f84c8dcbfa047f9fd46b1c5"
  },
  {
    "url": "tags/http/index.html",
    "revision": "d0033a3be995a1cf38ae76b9d3e35762"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "191121495d51ba903c559f8b4d8fd4bc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "faa13c2bc97db3921954bfafcf2cb175"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8876b47947be69775982f7fc4d24a0fe"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "055df1dbbfaaab13a14eb3441d673167"
  },
  {
    "url": "tags/react/index.html",
    "revision": "a070af85bbc656d4b1396fd0c562f8fc"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "3a3a42c41eef3067055d21961a3886a6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "4033b3c92d82c35efef34c6e4db4f8a1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "711942e04d70d77cd86529de9b4f3deb"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "eb69d59b6f6189fb0b78134b8ab9634c"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "cc1a1dd4ebf8546e9b2f36a7dbb47a8f"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "36cd8b5a976d921d6e67db926e06b6c7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "879dd6ef4fcb4a392e56d3c308f9c321"
  },
  {
    "url": "timeline/index.html",
    "revision": "95e1bff26a9f8294857ab7d172a05950"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "a751dc936fff80485fafc8d3779775dd"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "bcd9e62022987cb738abb8ce288d4250"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "7908ee7015ea0fe9bd5b9b685e56538d"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c15e9e74e9d0ba577def8d6d65b4a901"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "69339d5ec9279e94bc581328fc0273f1"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "023a81e1efa39ced3c35cf910a5b05e0"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "08b7e7e6719c0801f86185d68b7012fc"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "227c277ccd668a3e0b151ebb91feeb66"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "9a7bd3dd0078e71edc59c0349f69d28f"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "ed31c166aad22c362fef06bbd808e60f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "e0122c2d5f94c76b77f9e0d5700386ed"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "abda0e816d99392de6bf4fc68aee3574"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "7831568f2eeb5d6b76538d4c7814174d"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "c20b403960d6f284ba63939c9f0649f2"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "c46291ae8cb9546938890bf4b4977445"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3a06b606eb23feefc1f36fd1e3e46e55"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "89726e96e13fb5e288c0eb872d2925b3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5ffc4e8ef5c94f433292b81d7595b754"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a0b02763e0b01a98289e9c72b2a7baac"
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
