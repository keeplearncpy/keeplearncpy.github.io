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
    "revision": "4af31bc811fb5b3d59c22ea25baa678d"
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
    "url": "assets/js/14.45d1b92b.js",
    "revision": "82c4ee683d766040ad519b98e9979cc8"
  },
  {
    "url": "assets/js/15.00d6efbe.js",
    "revision": "5a6182c70cf0f38dd4bb252fd2cd1bb1"
  },
  {
    "url": "assets/js/16.a65a1c49.js",
    "revision": "acfd97de0465b35755b97f1ddcce3553"
  },
  {
    "url": "assets/js/17.d320311a.js",
    "revision": "d3a557b3b52815f5bfff05a33f058e2a"
  },
  {
    "url": "assets/js/18.360926ae.js",
    "revision": "58dac5926efd9073af1cef4e293ef3e2"
  },
  {
    "url": "assets/js/19.549b710a.js",
    "revision": "e430664bcbd96d72a33a91703dfab49c"
  },
  {
    "url": "assets/js/20.417adbc9.js",
    "revision": "10e9cf324d97b5ffe69f9a1db9f4e1d3"
  },
  {
    "url": "assets/js/21.e863de6f.js",
    "revision": "594aec2c35995ffd48c044d7bd0723de"
  },
  {
    "url": "assets/js/22.18d23986.js",
    "revision": "4605cebc4acbf44c359771151a4c8d3c"
  },
  {
    "url": "assets/js/23.282902a0.js",
    "revision": "75caabb1a6906d89922c502fad10fcd2"
  },
  {
    "url": "assets/js/24.ab2f8f46.js",
    "revision": "c36aa84302fe8533eb3d4a195d918aa2"
  },
  {
    "url": "assets/js/25.d735b86a.js",
    "revision": "8e305fd11bb9797a30aa1f64b2d83c94"
  },
  {
    "url": "assets/js/26.3097a3ea.js",
    "revision": "e504fd1d3189dbff2a63e6b12aa2f113"
  },
  {
    "url": "assets/js/27.bb7ca1c6.js",
    "revision": "cdc1a98a098e6b21ba6e18635a9b4fa6"
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
    "url": "assets/js/app.0d1bec6b.js",
    "revision": "d9943c63ced1ae7a0abbe69829e3eefd"
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
    "revision": "dd3ff887020e8130efb634ea5507595c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "eb8ef55d541e2f5f329e60bfac8880f2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9213c1e41886cf73c374ee588a97e555"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "2ed464b37ad80b56c2e44e89387cfb08"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3063d8f8aa14df2773e25fc11067017d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f5ad2bfa0900d238397adf0136c3e86d"
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
    "revision": "22c61e66c7e0c9f5a2b0a7789a09f2fb"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "508bea7bd9cedfd7fbfa4a9c308743f3"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "3f09eb1fad14c70e1fdb23056edf4e58"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "5fde01e7402d09368c8e77f9b234feba"
  },
  {
    "url": "tags/git/index.html",
    "revision": "3b6e1909112f5438ccaf023883afb7fc"
  },
  {
    "url": "tags/http/index.html",
    "revision": "301690458f73dec35f9e67a8560cb0e0"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "201b7071008e7bff7bc85a347c1493f7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "73f115666e7911581752c35cd9aae61a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1e12c3e691d267c9c9f6c15a5424b3ce"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "48075d561042cc2228db7be7dae75943"
  },
  {
    "url": "tags/react/index.html",
    "revision": "104188aa41753006f4ec1d239cec1f47"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "90d1ffbd493e65b70e6848b6c7be89bc"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bb4582ddd40059bc73b3c74c9d182e45"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "85c13acb958c551e925aa8db8da56630"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "e7bfc71f89bf304c057c395accf34ad6"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "5703e98c96481d8a2ad2c184bb10567d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ad504643d0604eef51c3f94d2cb3a021"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "02c2620319f66caf51a51a82acc0da7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "606b0c82f5d2cc1b2892a337b0cba844"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "dc4921cbc5367cfece9c87421c179b3a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "0849077ff1ef4e09f97e55f569130b78"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "7ceb4f3d25d890cc228b592b3172f6b1"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c08fbc36b55752efcf20977dc5de3e54"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "5cdf344e2b7dcef80da71a2fa397fc8f"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "fa7f37f28e925b97711489679f82e0d6"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "553a2e611f1b35198097ada36ad79dfb"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "b2a5fd3bead3d0aa2e61200cbf2b378a"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "7c58650ce2cf9db8da5605b1cccaf930"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "c54a4c9518fe9e5b74fdfb8b0131f06b"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d6858ab9ff6928908ae7257266f04ce8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f91c1cc2e3e9992be213e5751ec5000b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "545e93c0b48a1f3013cd04ea541b4b54"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "574630624429c06b7c3569305cdd418e"
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
