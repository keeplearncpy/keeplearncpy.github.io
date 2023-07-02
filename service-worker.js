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
    "revision": "71c30fb4e53269e6380ae86aa55e3050"
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
    "url": "assets/js/13.bd48ab19.js",
    "revision": "cb6df97cd5b40ba3a85e3aab8e7ef44d"
  },
  {
    "url": "assets/js/14.f10d8d5d.js",
    "revision": "643ced8c6c048fe5204a95b4798b86c5"
  },
  {
    "url": "assets/js/15.21b0b6d7.js",
    "revision": "36b3358eedfb364bc7e32421814b80be"
  },
  {
    "url": "assets/js/16.4cdca479.js",
    "revision": "e3b70b39f7e2a6a260412eba28d960db"
  },
  {
    "url": "assets/js/17.d320311a.js",
    "revision": "d3a557b3b52815f5bfff05a33f058e2a"
  },
  {
    "url": "assets/js/18.9d119a1b.js",
    "revision": "74a042ed681d66c8ed5abb4ea673ab08"
  },
  {
    "url": "assets/js/19.932cb601.js",
    "revision": "44e36e516ba466fac3f50631528071bd"
  },
  {
    "url": "assets/js/20.417adbc9.js",
    "revision": "10e9cf324d97b5ffe69f9a1db9f4e1d3"
  },
  {
    "url": "assets/js/21.a126b5fa.js",
    "revision": "ad3be638637cbef57a8178a0ed4c2d1a"
  },
  {
    "url": "assets/js/22.18d23986.js",
    "revision": "4605cebc4acbf44c359771151a4c8d3c"
  },
  {
    "url": "assets/js/23.3ea24d14.js",
    "revision": "20ff8f315edeaf99758ed38e1037b435"
  },
  {
    "url": "assets/js/24.24ff7f34.js",
    "revision": "7de1500cf905c7ac2789d69d73c7852a"
  },
  {
    "url": "assets/js/25.19928883.js",
    "revision": "b25c77273f62b9cac8f1b9ab63186488"
  },
  {
    "url": "assets/js/26.3097a3ea.js",
    "revision": "e504fd1d3189dbff2a63e6b12aa2f113"
  },
  {
    "url": "assets/js/27.26092a32.js",
    "revision": "fa9194e8c51925ffa835c0762b58b01f"
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
    "url": "assets/js/app.1aa98772.js",
    "revision": "6e401b480e8418b3218a7a36f48b8db0"
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
    "revision": "f8cd8d654f7c2e7fa38452fc9338a11c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bb653b99673453e32eceb8325f80a9c8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e62dd848f0e6f45823a65dafd697f063"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "29942825d43fa5c2f69da0145f18e715"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "060a1bbe0bf2e894c9ab7691eba49015"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7b168b4116a5d9c7b4b9051798b168c7"
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
    "revision": "1054208cdf38ade96fec7194256a4bbf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "869b5a2fb95a3f882941a40f9e0e93db"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "93ff37e649ade3f32b3d82884c99cfa4"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "64af909ba2a1e3d4106a92f24e9f988f"
  },
  {
    "url": "tags/git/index.html",
    "revision": "7b065c1fc936223f248f58cb4a6f7562"
  },
  {
    "url": "tags/http/index.html",
    "revision": "ad80a5513a85c714f5a848daed622775"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "298bae1664c89e6946f4fc1d0f573f13"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f2805fb978e3426cd5d224b18e2f875c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ab0f7748aec33cc6fe3075b4ebdaf031"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "29bb281b1f5050abeee23dda2d870961"
  },
  {
    "url": "tags/react/index.html",
    "revision": "219e6d472eec443a1cfd917bdab92e9a"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "7e013a7a984205a37dcba36d808a957d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c93e69a7d61eb63f55e664ab1ce9b1ac"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "dc21266093917587d67a45569919b989"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "be625174bae73284f6ed39c16cf874ec"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "c23fe02415e4ec30b2fdc9023fd11b7d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8ffb3fb8987a3cbad3a3ede59f63b221"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c4a391e0d24c18a3420f41d5d922ba02"
  },
  {
    "url": "timeline/index.html",
    "revision": "70576e39d4a2fdcfcdcdadcc2c284aac"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "18241584ae3e0d1d268fc4329c2f9172"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "19c41f4287ccb860b74b0ea7789a4ace"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "cdc90d89f5929bbba864efe101742817"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "020b305c9a45fbfda52e2c52c1db59e1"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "dc20f798563f55aa84c7a1e3ed9a7c9f"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "0b57d7e82169f4677a1ff86e4734bad2"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "a5434e54654236b3ea6275af09328dce"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "a6c90bb381b08324a952ff059432d550"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "504a4acb3341293240b3fa85f9df8732"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ed5dd58f60128442f62b5be7a49cbcac"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "feb655c96a204af5e1f108c2f6fb6f34"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8d3978fb71cf788e23839b772a73bbda"
  },
  {
    "url": "生活分享/life.html",
    "revision": "de54367a72fa3a147d5ba5fa90ed33b4"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "afbaf779c1a2fdb11d72035c6d3c431c"
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
