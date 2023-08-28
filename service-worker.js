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
    "revision": "769d7383b68fd6b26bbfd027783b1659"
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
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.a99effd4.js",
    "revision": "d182765bab4f5924c9c0455095ab029d"
  },
  {
    "url": "assets/js/15.f7fd5f97.js",
    "revision": "14dcabb7f54dd642577219e561ef4a31"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.14483c5d.js",
    "revision": "e1ac2aff551d47ca40b5bae53c934e3a"
  },
  {
    "url": "assets/js/18.ecc5bf15.js",
    "revision": "337de4924db2559eeff9b3305aca43de"
  },
  {
    "url": "assets/js/19.b4d6d08c.js",
    "revision": "119e999a4655d206f35d41742b61c496"
  },
  {
    "url": "assets/js/20.5a6de1b5.js",
    "revision": "d3fb82aa15606976107169f280546470"
  },
  {
    "url": "assets/js/21.640af5a4.js",
    "revision": "c42207a0fee0362e32b2573f654a05e5"
  },
  {
    "url": "assets/js/22.bb1dc071.js",
    "revision": "86cb0b613e95e1fb996e61d083065ff8"
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
    "url": "assets/js/25.5182b41b.js",
    "revision": "0535bbbe9cebf58d6a753783df666698"
  },
  {
    "url": "assets/js/26.48103a19.js",
    "revision": "72bb5913327ea49977c73f78cd83c012"
  },
  {
    "url": "assets/js/27.a9a07960.js",
    "revision": "4a2660ba332fb8370d44bb12eaada134"
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
    "url": "assets/js/30.c8883bd8.js",
    "revision": "091083c5ece07f88074a92cc79fda2f6"
  },
  {
    "url": "assets/js/31.0e075e8d.js",
    "revision": "e71625e51144cf9d54ed18cea5c93c7b"
  },
  {
    "url": "assets/js/32.f0bf83f5.js",
    "revision": "6f9aeb634cb3ab4be6ba37f6e5acb4c9"
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
    "url": "assets/js/app.f4762fc1.js",
    "revision": "b77a38daeedc561a0bc6c97273470618"
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
    "revision": "4cde446fa4b71e52b6b1c911383b1ccf"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "27a891d61e01e9ddbe939186a4025152"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6bb850bc2a7dfb3f0525828d837134fb"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "8f9e52cddf93f057912efe1d59057149"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "79a728959de2109cbad520c63e18f4dc"
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
    "revision": "66560240fd0981b4550426646a216bff"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1d68b39a30101a73d346f9a51221fdfe"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "8249c0bdb3ba6128d927ebbfc73cd775"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "f094fa59f3f447ac4ed96516f4c25aac"
  },
  {
    "url": "tags/git/index.html",
    "revision": "323c471ac60d9a7e68ebcb0ce534f054"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5a99ad3c1fc6ade78b17c91439e41f3e"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "87c5f77e8d90858b3cae949bac37f917"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "74d680e1390d1b09397d41d693eba2f7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "78bd5512aefd93a8db455d1646a50402"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "dd472057c80cd927fd12f9391e6c2ec2"
  },
  {
    "url": "tags/react/index.html",
    "revision": "1075486b881ecb8c562d552b4c219011"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "4ae912551f4c930be0e8d9824fe1ba19"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "d3c66ce5010755605a8196cb913d3ea1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a41156b2803ecbf1edbb1573cfcc381e"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "07504237673a476c8abbe3d1159ad53d"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "196ba4bfccb76acb192092f23ce64140"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "65c7900d8441779457f5592108069e5a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "415d81d7d2d603a6b3a22aab496ec2bd"
  },
  {
    "url": "timeline/index.html",
    "revision": "461b781064ab003ddaccbf5a0f0194a1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "6e34912ae04dc578964b217d75a5d39a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "922de59fb3794609c6986258ba861001"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "7e4e8d058f1c28069a56d7840e2c9818"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "5f90d244b783732ee7fd3de67bd32e00"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "45f1259d3aeb2a9723b50602587f2d98"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e81fedb5b03c5c6e339d58440c6c8841"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "aa70390e2bbc32fd5af63a8bd3096a38"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "b1edc2c73ba157d04c933b55cd8fce62"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "ac0e2be1de4b24c22fde79c436970bbe"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "20445b40ab2ebe31919b646f2ff58d46"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "d3dacf892143de68a727787f55800b1a"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "973a0400f06088c4f4fdd847fa1b5f77"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "32711e7cca3a7498b43fe6be67cee72c"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "5c1bc60df84960009968bb443bfee109"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "bba8373aea6e116fb0588d44d95bb30b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6f8ebe29d72502081eb5adc0119d3d93"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "b007959e543da0bf9ac2be5ebd01d676"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5469e4903e6c1d502afa02ae4a8a9aac"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "468661f141c8948211f26398ee9e150a"
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
