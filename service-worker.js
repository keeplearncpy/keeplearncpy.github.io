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
    "revision": "ce02f4d0405422c40514bf70407d69df"
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
    "url": "assets/js/16.2a07e74a.js",
    "revision": "4ce9146b28ea9562bf7ce2071dba5ffb"
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
    "url": "assets/js/19.549b710a.js",
    "revision": "e430664bcbd96d72a33a91703dfab49c"
  },
  {
    "url": "assets/js/20.8d6abd2a.js",
    "revision": "7c6af0eedc3c473ea8dc02ca1f67330a"
  },
  {
    "url": "assets/js/21.a6ee4493.js",
    "revision": "be9b40fa87ae630c9df5dc6966b0c603"
  },
  {
    "url": "assets/js/22.1f4e6dbf.js",
    "revision": "6e7df9479c6cc9199fb130039778a2e2"
  },
  {
    "url": "assets/js/23.f287c380.js",
    "revision": "8c686c2f667e13df9bd8d34fda769321"
  },
  {
    "url": "assets/js/24.08a51943.js",
    "revision": "d3ff0599f3221d46dbfe26657a1ceb50"
  },
  {
    "url": "assets/js/25.aed52b40.js",
    "revision": "b2672ee5f5645d3a493836c6408a9aa7"
  },
  {
    "url": "assets/js/26.6a694cfe.js",
    "revision": "e9ad8f9db287b7615ab4722b63ae5787"
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
    "url": "assets/js/app.6b73f480.js",
    "revision": "30f879f477b0269fe011ffffbaf6f0ea"
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
    "revision": "59d46c9a226a724f4962e8d28cacf65c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3892867358f26976098bec9e9de52a29"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "68bd32cd492c52832ee187d508341d3b"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "3ca9a520d1c4f4aa0d1a3a9668145309"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8652fa2167298c45df75d4243a6313d8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "50c0a4edda026930838bf1e87674c002"
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
    "revision": "0254fbc8a2325a4db1b6d757fe9c3657"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "da1ce4e48823948fe463378b2467089f"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "6e12105cd510aea445f00be9e10c5d31"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "138264327ae043bdf2c5ebce4b41d0f1"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c1bbf2c1b41faba8bc37ec262d17e299"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b11c4f5993041c0e1133f53ea671dc9e"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5418070c7955c81f73b65428e924eb09"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6a8b2b49857d394ed294f5d406ce55cb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a4a7b25558ecce7d882b736a5a0c9451"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "5cff1d7752ecf175c3fed97eb3d7d407"
  },
  {
    "url": "tags/react/index.html",
    "revision": "660c7030c4832ebdbe87cb20952cbe1c"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "1e163182160e81fedad45e9d32684de5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8d7122c204efb4a8f33cc502620cb7dc"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "102f9b5e94080b32387f5ff416c586ff"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "a18e7b5c6655babb40ca4740dff75dae"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "fa4bdf42f24d8efe1f855a5094700478"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5acfc2940018b8bfb8eccf19e7202120"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5a44284245cda9a4f42bbaa06774bcf5"
  },
  {
    "url": "timeline/index.html",
    "revision": "651bb8d4e39b932e04d65dfb27f4a841"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "6d52c0fe58d5fde1da2d650650b1f7f0"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "fd0b01c5eee49424bdddbef9417cb913"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "cacca3d66c28627c973c790958f80a8c"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c24bd9476bf4aea7df45e3cd6b1d9a78"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "6a0cf0f625f341d8f2b9da9ceb91d7b2"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "14f3353b5db25662adb67167a9706c81"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "6caf2cb2328b8bd4fbd2ae98c462f667"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "a51bd0882dce2be2666734fbd1bf1e83"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "62b8260bbdc491c893d63ff81b4c5a20"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "6ee9475497da298473015607fd2af9fa"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d13baaad205dacb6b723130cb04c5090"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "696a9b18a30696a35ead40a60f6ac07c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "25334fc2c473d6dd9fc7a107b7520178"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a5a4cdef037cc4a7869f62a137147b3a"
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
