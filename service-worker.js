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
    "revision": "31bbd960084f8721f9c0b297a725fdff"
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
    "url": "assets/js/13.329ac30e.js",
    "revision": "7d64fb0a95a3b3a986649dd320d29a4d"
  },
  {
    "url": "assets/js/14.f10d8d5d.js",
    "revision": "643ced8c6c048fe5204a95b4798b86c5"
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
    "url": "assets/js/17.28c8383b.js",
    "revision": "987ee0377eaaa84930b5a94b9b2b748e"
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
    "url": "assets/js/20.bcf02b99.js",
    "revision": "46324aaa27e2649eff823a9030deffd6"
  },
  {
    "url": "assets/js/21.bdb51f79.js",
    "revision": "20e11f6bdbeb3b0047b077cdf949ad58"
  },
  {
    "url": "assets/js/22.18d23986.js",
    "revision": "4605cebc4acbf44c359771151a4c8d3c"
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
    "url": "assets/js/25.2ed1ac0f.js",
    "revision": "0a0ce20e250a1c79709803dcb27f1fec"
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
    "url": "assets/js/app.455dce32.js",
    "revision": "1050c73ac1a8429abd5931a6b3109378"
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
    "revision": "ce39f575eeef7aff9d351167f53118b4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "39dcc8216087562e8ee2acec4d43d55d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "849471c7d3394befed3efb5ec6e523c1"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "22d2796d4821dd609029c0ee60b9ecd9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c1ac15ffd32f32590a2b10a0bda3bc08"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "08b2a25ceda619fe0a57d7d53f0f607f"
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
    "revision": "ee6d3ba6bb65966dc70e96dea39722ca"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "87e538284dd01ed583d4e93a62d49933"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "af55a4e3d0ce21eb4d2af7a669d0b20a"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "9a9742bbfced7d9a0a40a76d719b1721"
  },
  {
    "url": "tags/git/index.html",
    "revision": "9af9eb109817286c66eea1ba2420a735"
  },
  {
    "url": "tags/http/index.html",
    "revision": "df0a84c3fd45d47695a6f3df084ace9c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "dcf8d87b3b764a49f772966e2b4e7fe6"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "258656e96768d0a1d55dfd81906d8c42"
  },
  {
    "url": "tags/js/index.html",
    "revision": "419977f6c73baaa3a532100d335b4074"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "46e693bdc6944467c855ddc9a799a7e0"
  },
  {
    "url": "tags/react/index.html",
    "revision": "2783d3dd36f2b9bcfda6eee64af818e0"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "980c5ec79703596736952956a9c28c2c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0297441b9076d37c949e2253a53cfb8a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7cd57c0c5b2164066df30b255acd6424"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "1c9cd02d790933ea1082faecf1c47f61"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e1c9820c57fd11b40af2a110bd4a41d5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "60dfe7dbb1dab3273feddc4e10df818c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "85a035e3e25aba2f68b3fb2a36d1ff7a"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e4b1cf7f33a092a31cfc15b78b8a065"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "665904eceb709c97499874716a4fa60b"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "a3cf24ed80c277a2010179db62e89868"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "b4cdaca203704fcc53a365bd0f210923"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "1be919a90a0c24c86508272e0714025c"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "e499a41248502321062db526fa5f2316"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "8529f88b7abaa6154d6250e8f94da03f"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "10f2ec09cef88afcd77c88636a3309b6"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "5d8a709af1a8202c89bc885cfce13a73"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "b18e47e1b2b4d5a087fe34586bfc14c4"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "dca897c29450aded8443eb2ded2254d8"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "fb45ed0c1bd718c1e408f1dfb0ab1629"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3201ce4e0634583a13db6fe482a4ca29"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7d8bd9bda0c1c008a87c5f1aee4ade17"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "1c7ac3d5d2f0ea0e8ca01781ab5302f9"
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
