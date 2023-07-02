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
    "revision": "2420e130cf8d40ac10d0a5b31bf9258f"
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
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.f10d8d5d.js",
    "revision": "643ced8c6c048fe5204a95b4798b86c5"
  },
  {
    "url": "assets/js/15.f299a2ab.js",
    "revision": "454d8ab7df405a6277541f08710b2068"
  },
  {
    "url": "assets/js/16.2a07e74a.js",
    "revision": "4ce9146b28ea9562bf7ce2071dba5ffb"
  },
  {
    "url": "assets/js/17.d320311a.js",
    "revision": "d3a557b3b52815f5bfff05a33f058e2a"
  },
  {
    "url": "assets/js/18.a2ceeec9.js",
    "revision": "c5796241b8c7010c16ddd11b6fee8975"
  },
  {
    "url": "assets/js/19.932cb601.js",
    "revision": "44e36e516ba466fac3f50631528071bd"
  },
  {
    "url": "assets/js/20.93e46149.js",
    "revision": "3d7ead8b3c38e25b26bf8b5fc792975a"
  },
  {
    "url": "assets/js/21.a126b5fa.js",
    "revision": "ad3be638637cbef57a8178a0ed4c2d1a"
  },
  {
    "url": "assets/js/22.d800dc73.js",
    "revision": "aa4444fbb7b8231169f40f28236574cc"
  },
  {
    "url": "assets/js/23.f23f834e.js",
    "revision": "5d3476ee2d3600c7a612dcbd303b53cf"
  },
  {
    "url": "assets/js/24.24ff7f34.js",
    "revision": "7de1500cf905c7ac2789d69d73c7852a"
  },
  {
    "url": "assets/js/25.ea08e707.js",
    "revision": "98bdcf17811929734d318e20a9955373"
  },
  {
    "url": "assets/js/26.74929151.js",
    "revision": "3d98abd8d21e2cdc62cf25eb8b414235"
  },
  {
    "url": "assets/js/27.3173397d.js",
    "revision": "7588ddc60363906ff90135a39f3b80ab"
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
    "url": "assets/js/app.b8472e3d.js",
    "revision": "9eeb3a0fbac633df846859efd3416c94"
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
    "revision": "b5979bcc414a240f90d089aea85b0d10"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5661818207d60cf312fcce4015ca4e20"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b692b672918488d10402e36eab2a1912"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d616a0a8deb98c0e7f15d17ed5ab056f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c5bb319ec3b1629303f906b1c0a9ccd2"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "d12d787093ab25f5b872700e5f315700"
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
    "revision": "c9b4f26aa49f1c67f3125a8868518df0"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9bb08b90191dd2d5ff1062489e637c76"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "b57ffc55863675d4ad0d87acbb1985ad"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "2cb92e248c80f7936b41b914f8c513d4"
  },
  {
    "url": "tags/git/index.html",
    "revision": "acb4e7169eafe1bc846422d27b3049c5"
  },
  {
    "url": "tags/http/index.html",
    "revision": "15ef1247d159033cca9b39c2abe7f344"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "20565e70e8757e0ddab5ab95c920d7eb"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "97f91505336a2451cabe0da4a41aa613"
  },
  {
    "url": "tags/js/index.html",
    "revision": "58bced3ea5f051d98f44f425f03180f8"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "bcb6d3de6f5460a5f5a18b566a4d9ddb"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5aa23ad3637b0f8e58311a390b293bca"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "3da0687c0b14fda4294a05616187409b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f615c7821e0e35a7c82097369aab9b6c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6a97f72ae9de1066d4c15b3f456dbf3d"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "de4712e00b5a9e2e924766775f84da23"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "19ab8a8d9711f34e30ab6c9833ab7501"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8f6ce54bbe832d43926743658477b2db"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0604963201ec79eca0bde7cc2eb5a19e"
  },
  {
    "url": "timeline/index.html",
    "revision": "0ab14a06958eefb37bf5367345348635"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "80e6b0aff11a4bd769956896cffce49b"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "1b67c27332e2e1ddf3a72fc4fe7b1e8b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "f827b42245beb782d63fe05e5bf594fc"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "8da5a960d76e7b027eb1be811543418d"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "ce11a13803e5ef52c863c31c0a14cebc"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e5fec576eb1ae532e5a9d00b4b7ada93"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "4ea6f98cfc310524be24399fca558647"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "832d6863de8d57904c18eaa6a01100dc"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "d3291ab63b1e13886f5e22b7da711626"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "5698db5982e86be6dd724e45cefa0744"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "0094ee573804324904d420706632771c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d6d45c9b0b4fecab253b50c5276d3ea1"
  },
  {
    "url": "生活分享/life.html",
    "revision": "22d200bd0edf9fb97ec043e01fdf7eed"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a76bef9fba497083e041ef3c4079865b"
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
