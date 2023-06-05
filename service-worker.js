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
    "revision": "a87ee78fd521595ff903d4767795a6be"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.45d1b92b.js",
    "revision": "82c4ee683d766040ad519b98e9979cc8"
  },
  {
    "url": "assets/js/15.de2de36e.js",
    "revision": "a6fd990107649ade9586b0f3b3c64590"
  },
  {
    "url": "assets/js/16.b47657be.js",
    "revision": "1b15d750fd3d166eff2a515961efc3d4"
  },
  {
    "url": "assets/js/17.1968e30c.js",
    "revision": "bcfc0a35aaec4b2d18610f101a0f3b77"
  },
  {
    "url": "assets/js/18.9d119a1b.js",
    "revision": "74a042ed681d66c8ed5abb4ea673ab08"
  },
  {
    "url": "assets/js/19.747d07b5.js",
    "revision": "39741c85d53d8328a10d9e509a52b598"
  },
  {
    "url": "assets/js/20.bcf02b99.js",
    "revision": "46324aaa27e2649eff823a9030deffd6"
  },
  {
    "url": "assets/js/21.c4f07604.js",
    "revision": "233b6dcd91a86ba41b7c4f44df66296f"
  },
  {
    "url": "assets/js/22.2926b652.js",
    "revision": "2d2d1f94c717283a4216f77c3a608f82"
  },
  {
    "url": "assets/js/23.f287c380.js",
    "revision": "8c686c2f667e13df9bd8d34fda769321"
  },
  {
    "url": "assets/js/24.77bb3a39.js",
    "revision": "3da62150d6ae0192d5134313e9477992"
  },
  {
    "url": "assets/js/25.d735b86a.js",
    "revision": "8e305fd11bb9797a30aa1f64b2d83c94"
  },
  {
    "url": "assets/js/26.e7d4479b.js",
    "revision": "71ff8404823aa253de198cd25a4768fd"
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
    "url": "assets/js/app.fbc329f3.js",
    "revision": "9b555be043ea29f0e684451ef426b491"
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
    "revision": "fab83990db6beee78def6cd58d27a5d3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "aef6503b2224887d70fe987fb87574ba"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "515d51ed9328de7abbb1f18f7bba7733"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b18948caaf10f0f329c6ae65ee4fd1ec"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c7e551334db86ed104696f4406ffa063"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6a67697ff8904ab251ec0f7640f848e3"
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
    "revision": "43ae61098f0c4400f82ee9c7ae128b64"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "eda7e20304e9e23e468782ae3c856dff"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "3e81dacd6c41635f444f7fe42fa82eff"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "f5b4ede68000b7f9e85de4818dcccafb"
  },
  {
    "url": "tags/git/index.html",
    "revision": "e5d9ab99c1693d96fc795200cc5fd0a1"
  },
  {
    "url": "tags/http/index.html",
    "revision": "793ce829401c79a3f7091cc4d4dff4da"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "c39dcea1fd14903d6ebbec594f6e02f4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "742168260954963210e029b82d8daaef"
  },
  {
    "url": "tags/js/index.html",
    "revision": "64ab137cf641c5a8f7cf25e90d3c4c7d"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "093682f475a19ff3a7ffe4d137133437"
  },
  {
    "url": "tags/react/index.html",
    "revision": "c24fb5aa5aae2cfd2061cbdc0bf5274c"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "79a62379f24d63f2df6dbe0954d88ded"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "84b6dbe2a3aea78502e0023ad9b4bbf3"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "edf10a24049da5b727e5a231fb1770ff"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "bdf71586ad7553f1001318febe33978d"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "89a7238faa70bb9b0ae1126833d30ae9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "46617f9d11d538ad16e227d7b9dc8971"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "63f97a4f06ccdf2418ded57343e743f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "b93396fdd902c993638b4a68d6d98128"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "e5c9561b46e28ed27fad2878ca5e589c"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "86646d496f4151e6e5a9066709a1b73b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ccfb3d6328c6ed7b801409e2a3db714a"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "0a0878abd8181e871e0e0d1245fe632e"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "359a0da3eac120e33b588780bbfe8d3f"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "ede1cf57999eae6e2bb35a5898e06659"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "2c37f8e435d28f74079f4a51a35818d3"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "111f8f3b702bc3a4f356b8b48c19a533"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "0940ba32ac429d2cfc80fedc0a6917f5"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "1262da4c8b048c65f13e8ff37a33e326"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "00635dd29a5f60949b3fb6259566c38d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d973e6261d019d3a18d18955889a909c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "cda8101b207a28e5360eb9261de98240"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "4a2f872e56428d511d3ba8eac513071c"
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
