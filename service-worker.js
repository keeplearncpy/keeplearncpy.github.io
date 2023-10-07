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
    "revision": "77e090a269ac647b13d0486c256f0a39"
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
    "url": "assets/js/11.475c96ec.js",
    "revision": "ac695fff3c0b007e74932f04f75873dc"
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
    "url": "assets/js/14.de7cbc49.js",
    "revision": "bf78fd8bd2b9d0788f15eeb5eb2af14c"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.2b7cbc22.js",
    "revision": "f3a928e696cdfee4b1b06a41f690e575"
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
    "url": "assets/js/23.aff6f4dc.js",
    "revision": "35e02300772ac507c5703ac4e0f16c9b"
  },
  {
    "url": "assets/js/24.3f6972a2.js",
    "revision": "6889985c30f7358796425544d8937f9b"
  },
  {
    "url": "assets/js/25.9bb7f4eb.js",
    "revision": "b191a7ec1714a365ff432f3da672cfe7"
  },
  {
    "url": "assets/js/26.da72d433.js",
    "revision": "63cebce5ad6f75114f8ab3034ca54590"
  },
  {
    "url": "assets/js/27.47f227d1.js",
    "revision": "6ffb595eaae72e01f5cc2a647ba8c16d"
  },
  {
    "url": "assets/js/28.a5c916aa.js",
    "revision": "f5952027db685da5d8f3759e05762266"
  },
  {
    "url": "assets/js/29.e16c7f1c.js",
    "revision": "8e27ea81e2eb4d789e0c6380065ae44d"
  },
  {
    "url": "assets/js/30.884a8ecc.js",
    "revision": "e1d7ed6098288651ad43def3a80d0730"
  },
  {
    "url": "assets/js/31.062ae097.js",
    "revision": "5361137a232bf7dff0a5a4082f5bb5d7"
  },
  {
    "url": "assets/js/32.41bbbe2f.js",
    "revision": "81559d92b7f589f3607b80ef5c6abb0b"
  },
  {
    "url": "assets/js/33.60bae110.js",
    "revision": "098e0f7a454bb85d073cd6d58af88048"
  },
  {
    "url": "assets/js/34.23430798.js",
    "revision": "1b5969da272ef9fb9e259d6cb6e3d45d"
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
    "url": "assets/js/app.5ff9cf49.js",
    "revision": "b88c14a26093f754017b32ebab939ea1"
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
    "revision": "1c89d41bec95ce29c1a1cfe209c6175d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "39eeafaf5b2d9f019a62363a8bd64129"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9678be79aba4417a50cbf77eec093b04"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "2fa20dc0605643d16cebebcc1c289b4e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0e5a6d120bc9a7e41f52b5176f94a57c"
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
    "revision": "0ffd427dfcdd935025c9c35e5a7697cd"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0191662b1c22e375d8f2efab5dc0bbfb"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "c95dccf5a164269665262a86112a7078"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "81034ac0c34c855e1bae4f9bfc0fe96d"
  },
  {
    "url": "tags/git/index.html",
    "revision": "daab529bcb88adeafd3d0f992c1bc2d3"
  },
  {
    "url": "tags/http/index.html",
    "revision": "d02e904a69d4e37791a90bff9be830c4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "6696d4b5ac24f4d9667b6f0b5998525d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9546de676fd26580eb236e6f652b563e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "268ad601b9f34807f997f03a4caf00b0"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "d79b8a3ba952dce0afb2f885022284e5"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0153228f219a59e6eb2112512ccb59f7"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "2f588d49f7a50da30535d79422d93431"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "ea1ca0b8a13450d6d8e5ca63ac50cc50"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ac0bf04bad424bfa0f1281535966972b"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "346494b1080a512ee6a9129d3a7920e2"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "a2fe880308a003734ec482ee94fdd6d7"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b3283630322656ef79e69e1a28d32d79"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3c08238a38d2104f865ca5bb5bc479aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d8d703ea499e14bf869c59663cc71d9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "f613e0ed1f5872cf9f2e9a9cd0813e1d"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "a5b526b28178cfbb9c1bd1155b10144c"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "fd2f5f6bc7c3ce2fe9be6c308e73c6c2"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "8134a6a8309aafed6bbd713d570b54e0"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "ef2018d70f9fcbbbaf07340c9836e73d"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "96501c1b29639ba3a8e764490efaf7a8"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "2bbac77e59d8e6533484f63f047b4697"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "3154662b9e9f1d986d6262a54894d7fb"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "c0f5e31287cc090b8ac7b799612c5b1e"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "d848e249583491d412acd1d03f3640b8"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "042e0eb9df977f64544192b2a8baf905"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "44ae4d195f108d343ea629c1e363cda7"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "16c0196e043e3bf6411f1b1677fabc08"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "846f4056c5df7699c1de006fb4d8da83"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "3f847151b7308b09a3b95e47bb7f6f0a"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "645d54b820aaf65718a3c2773022b825"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "3ec1eb26560a89b30e436132f7d7cfe1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e5dff15cd079d25cb4877b3242f5b3d7"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "4d5df6df4ba41b3918906e4b175423af"
  },
  {
    "url": "生活分享/life.html",
    "revision": "cc35a28b155711e14e6b8f173c1cb427"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "ebddf4c31fbd14b47f5764b8c684606f"
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
