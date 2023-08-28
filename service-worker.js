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
    "revision": "6eea97187e60cc9484d5ef28c3769328"
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
    "url": "assets/js/15.c3f270e5.js",
    "revision": "76c088ccbdcee7f09838695dff7e2ec4"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.a9a20f67.js",
    "revision": "5c444d6d7765ca076c6a5ede6ed935a5"
  },
  {
    "url": "assets/js/18.f745f921.js",
    "revision": "9e7f69a56c2429ed7ab51effa387adcf"
  },
  {
    "url": "assets/js/19.b4d6d08c.js",
    "revision": "119e999a4655d206f35d41742b61c496"
  },
  {
    "url": "assets/js/20.3890d1c4.js",
    "revision": "3a96f21836ebf4fd75d30e867e9181f9"
  },
  {
    "url": "assets/js/21.b0fb566a.js",
    "revision": "1d95bd7c326ce7025a5a686fc3b4b089"
  },
  {
    "url": "assets/js/22.f16b95f8.js",
    "revision": "863bb79e6b57aa677182d797dc2b6f62"
  },
  {
    "url": "assets/js/23.333b53a3.js",
    "revision": "e4754414d3236299b3d7305af10ae3ae"
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
    "url": "assets/js/27.d8b990d8.js",
    "revision": "72db7048f512c91110a80dfc64829107"
  },
  {
    "url": "assets/js/28.44d92616.js",
    "revision": "546f40b475ada55b83ac1f7b4d1372ec"
  },
  {
    "url": "assets/js/29.e0f66071.js",
    "revision": "6b77259861e67403f6afd843717e4273"
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
    "url": "assets/js/app.efc26a61.js",
    "revision": "b0baae3a8c11d7997299994d27f502c1"
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
    "revision": "20ed0c386b275639355dfd0d23a9f83b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e7bf25528863bf9817c1b2d4d3265e52"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5f67ddbd72778fb03ee8efd105c0ab29"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "da4ccf0b66a27703429b11b89a91bffb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e774981605b11f23156268da9fb54848"
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
    "revision": "74b3d6fb1ff3bb6ca99ab9a141b394ab"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d8595ae45f53d338e7b19cde291a4b89"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "317e6b17fee6ed5ab22361bcae2be60f"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "57797a79381bb37eb429fe98b6543b06"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c7b47d1e75e35d76fecdd191e8efe8c0"
  },
  {
    "url": "tags/http/index.html",
    "revision": "52ab1e64abd6360f4a9050dbc83ef7db"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "1a368ad6c96a4294d29731dcf897daf0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "bd56ede6bee5dcf2022ee80f16082755"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8b493abea7ee95a0015907dedb0391b0"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "7783f484c6656e1df7cdc708293c8750"
  },
  {
    "url": "tags/react/index.html",
    "revision": "fec0597301c1ff919f5844eba8f3943a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "aa11d78dd321be64779657b6097368c5"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "e4c5feb11787f7b34c606037091c4fc6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "61162b31179b8352357cd61598a886e3"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "3627da91bd1e32260255ae73d1eb9e29"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "b18947c50c88fc6243025c87334e2204"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1a7e8e62f5108eb002c34656889f1cf0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c8d9e4c2334db2369f5f053962710931"
  },
  {
    "url": "timeline/index.html",
    "revision": "d9dafa90181f7fd2928d73762f74d264"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "5b0daf58b7c0adca61dca28bcdd00fa7"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "750837170cf38b961c37a5b5e1250044"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "dc02a9614aa6511abc8627e6d6d72087"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "74b869954f533ffce695d0f7f529782e"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "3d41626e862e05c3f686ccb1d6704af0"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "6f9936f0ab7fdd6f997a107f73833126"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "9dabe91d157f5f019076125d4713dc30"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "92077fcb2e3327622d55a1156f801a58"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "af4a68b19b72225d5944ba53495539f4"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "6bc1304add3c03febb2e994a6f7533cf"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "a121278e9987477ac299c7a55aac47fc"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "ff7c94574e57e48f2354f08a7bdace60"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "b18f8eb398a9e32f721cbc28a751336d"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "87132b19ab8147d7afb38be759d2610f"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "ec966f41d43b72a0bb43709bde410780"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e0b12ebd676e1f4dd53aebf1d52bdb0f"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "ba811863fbdff6d22940793f5e704d7e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c9b93366f4d345f4901771463fe49ad2"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "6e08fd03dec8c33ef512d130aa2aab6f"
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
