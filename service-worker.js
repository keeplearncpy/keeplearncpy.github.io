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
    "revision": "a7057cfb97c0b6fa225d77f1754eecab"
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
    "url": "assets/js/10.c2260bd4.js",
    "revision": "8c86f36c445e37d4ae1611f0471fa81b"
  },
  {
    "url": "assets/js/11.d500658b.js",
    "revision": "5bf925f7280523db7cefb5484ea66841"
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
    "url": "assets/js/14.11686aa7.js",
    "revision": "5746ced4bf6a080e2aaeeb4098b30a9f"
  },
  {
    "url": "assets/js/15.f299a2ab.js",
    "revision": "454d8ab7df405a6277541f08710b2068"
  },
  {
    "url": "assets/js/16.8abd223d.js",
    "revision": "f5917343b4df40df2436baea4134add2"
  },
  {
    "url": "assets/js/17.69c49cca.js",
    "revision": "eaa0943b3bad4cfccc0ca1cb3dc47945"
  },
  {
    "url": "assets/js/18.e2156884.js",
    "revision": "c069ba8b622aa7684962f612bcf5d7be"
  },
  {
    "url": "assets/js/19.1e01eb17.js",
    "revision": "56c98d040de03e2fee8f0b8148952a10"
  },
  {
    "url": "assets/js/20.6eb56b1a.js",
    "revision": "47ad5357acc9330a20431373a1b814db"
  },
  {
    "url": "assets/js/21.bdb51f79.js",
    "revision": "20e11f6bdbeb3b0047b077cdf949ad58"
  },
  {
    "url": "assets/js/22.fc618284.js",
    "revision": "bb8e12485993abf9e172ca34ef114c88"
  },
  {
    "url": "assets/js/23.d4a2c147.js",
    "revision": "9b276c0f3947b7128e7df9fb7692116a"
  },
  {
    "url": "assets/js/24.08a51943.js",
    "revision": "d3ff0599f3221d46dbfe26657a1ceb50"
  },
  {
    "url": "assets/js/25.2ed1ac0f.js",
    "revision": "0a0ce20e250a1c79709803dcb27f1fec"
  },
  {
    "url": "assets/js/26.3097a3ea.js",
    "revision": "e504fd1d3189dbff2a63e6b12aa2f113"
  },
  {
    "url": "assets/js/27.bb75763d.js",
    "revision": "12e832215be8712ce8e5ca1019487a03"
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
    "url": "assets/js/app.8819c3c1.js",
    "revision": "d901d8ecb885c93ec58951550d89be2d"
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
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "07734544cf47769f46689d37c37a537e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b954eb26b88db7261016d501035eb52a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c69029c4dcf14861d50442827f519c9a"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "f79842e2368c63b9b40aa0df21aa217b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e34fdcabbc08fbf3453144f1d27ea066"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6faeef0502923fdf382a284d9db0df92"
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
    "revision": "1f5f9e2845f7a05a1065e95a6c6efdef"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "880cfc6ae20650fb234d5c3d7e9c0677"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "16c9b18d8fb5a9925ddd51a2b95e150d"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d5d5be34f8c6c84140bcc007176ce81a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "89d389e5fc26687e1e156d2e5aad9bc5"
  },
  {
    "url": "tags/http/index.html",
    "revision": "efc6cb481cb0ae169f7e8f319b8f2f1b"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "341769ff21be9a5892480222da2def1a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "442e14b362c11645bbece013aa5be5bd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "719c561f9b032a4bf241bc3ba1238d4b"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "7d40761060741cbab121d06bc9d9c82b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "9e46d8b57193e216ff9825240116b878"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "e3a07a6ab781ce32613267f2e765a979"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fc2c9c4b6b6698d9470798d48810180d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a997d0a0a2455490133afdac221893e3"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "b077cc169e842d3222069b5e20ee4c72"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "3ac24bcfdb91fa65b836edb3ed056ae0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b21b9d22747a2672ee835ea52ca16f3d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "dcdea6dd97dd44a75b6ff571b3975421"
  },
  {
    "url": "timeline/index.html",
    "revision": "3aca579481d8b716527909fd7173dd72"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "045153d31b6af4d2acaa951d71ba1fa2"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "2443793fe356787b54e8ad3633933ac1"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e2d4e757a7a908c16fe8bab73bce76de"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "9f31318df284b3a8743caec5f38f36bb"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "52b713503b40559b49ab5d303458fb57"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "1928d2e71eb58b5d47e6f5439c3a9c11"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "2d6744b7488869a7b727cef470cf9824"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "bfaa28432b502a98857b376ee1a0dca3"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "037003f6933a79066c2d4a0143769eab"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "098249890cf3898008a95d5dcbcc6672"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "aee767677009041d5e5f751f85cfb692"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "23ee26b679fdf01546ce4c0c749cb3b6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9ef5d51562a764cbd3e2ea96e98aaebb"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "6cf2a16d75ed35b4f41b320d7a291b6f"
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
