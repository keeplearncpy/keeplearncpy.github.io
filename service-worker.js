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
    "revision": "f879b5384733238719674f6f9310c1e3"
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
    "url": "assets/js/12.9e7ae566.js",
    "revision": "fc45ae2e63d6a2569e031cf1a167f8a3"
  },
  {
    "url": "assets/js/13.48564eeb.js",
    "revision": "f34038c99b3dfa8e6a3464dd4579ee69"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.81401030.js",
    "revision": "ce097072e3cc7411da9a2e98ce78db3a"
  },
  {
    "url": "assets/js/17.3250a5ad.js",
    "revision": "f49dfd64cc859dfdcfd5ff8611c9bcc5"
  },
  {
    "url": "assets/js/18.de89d0c4.js",
    "revision": "46ec7615677b33f75c6d3995bde1ef37"
  },
  {
    "url": "assets/js/19.166cfcbb.js",
    "revision": "ad2ce7e771d34b9fa1b879d35bdd3773"
  },
  {
    "url": "assets/js/20.3890d1c4.js",
    "revision": "3a96f21836ebf4fd75d30e867e9181f9"
  },
  {
    "url": "assets/js/21.501150c3.js",
    "revision": "f89a609bc8ea542da67e8254ccd28fac"
  },
  {
    "url": "assets/js/22.a129910d.js",
    "revision": "d11a4905ac07f189569fa83221a0d95c"
  },
  {
    "url": "assets/js/23.c9f5ca34.js",
    "revision": "adc5e6107635278003e2a508b507b27a"
  },
  {
    "url": "assets/js/24.97ebea17.js",
    "revision": "025adf0bfe18aadd46b367e0d2dac111"
  },
  {
    "url": "assets/js/25.5182b41b.js",
    "revision": "0535bbbe9cebf58d6a753783df666698"
  },
  {
    "url": "assets/js/26.3799e3c6.js",
    "revision": "e9f51171704c10f1a7407821d8315775"
  },
  {
    "url": "assets/js/27.d8b990d8.js",
    "revision": "72db7048f512c91110a80dfc64829107"
  },
  {
    "url": "assets/js/28.fbdfa525.js",
    "revision": "a3c0dcf5f55c97e7b9321c1005537304"
  },
  {
    "url": "assets/js/29.3dcd2289.js",
    "revision": "4959961e1ab4a27c07b723dad3cbed8f"
  },
  {
    "url": "assets/js/30.8343acc4.js",
    "revision": "91021845b206fcdf09d3ceb4bd8b0912"
  },
  {
    "url": "assets/js/31.0e075e8d.js",
    "revision": "e71625e51144cf9d54ed18cea5c93c7b"
  },
  {
    "url": "assets/js/32.d2a05daa.js",
    "revision": "c0eb1ceac7b3d0d387a426f401273a5f"
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
    "url": "assets/js/app.0b6b8d20.js",
    "revision": "b8f7c329aebd0a84943454cd809c1453"
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
    "revision": "749a5fd5f5a8a9cb6a3391e3d3409134"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c2e4b3647e9d974d63c88ee1232c0d23"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d0c53d05a12919fa183bde487151c2e1"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d9e41338c8f43f8516cae9063d47e47d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b90cfe9fc2814a765b667469956cc130"
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
    "revision": "ddd19058c702b12cedab4685f4f26dc8"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "fe8f1936749d63a07e06aa5fef29551d"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "7ef1781028d2ca1e7f762af8759bd77c"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d32af2234dd815a84ab39a55346e412a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c1be94536e2752398589021473977036"
  },
  {
    "url": "tags/http/index.html",
    "revision": "693d2cd940b889794adb84fdf9e06b3f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "4f838ecde99fc6348e95975640c79361"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d81492caf07453dd2f76c8b667968cc0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "88a74dd0701aa11385987545d5d90348"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "85d74f767cb63197130303b5e8e34bf5"
  },
  {
    "url": "tags/react/index.html",
    "revision": "98883e62919cc6bceab3a0a1f75e7ea6"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "f37c854b2d0f1ca4f60fd40c415efd32"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "8f61430ecd986b7fc54e5b2308e21f8c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4c28fee891237d2386ba9ef1cb660656"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "24d19deaeb9abaf3b739d0f29da73a0b"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "bab41513bdf1a013acf3df62dae7f097"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e0e048f532be23f855d15d010e5642ca"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "19c94b78f203f0354c8b5072a0c62870"
  },
  {
    "url": "timeline/index.html",
    "revision": "d6e7b37126fce93475b7d9160edf283b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "53e75e4eeb25802f4e126f6abd69c3a6"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "6641b1275f7ea5ae8afeff159b05c545"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ab7470a26da11d513d869130886e2632"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "438aad7ae5450d268db05ef5199cacdd"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "e0b8cf755cd33a6a5a955781c2467926"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "41243890e5c5d10abd84793062e20314"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "f03ecfc281519d058b9d65e5806c8aa6"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "0c6faa08f57087508b7616f6058454eb"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "45f237c148833cf141973c9bf6eb4ff3"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "8b2104b8e6f369724585b7cc90c5e7b1"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "a80b77dd21ac5cb769deea1be482edc4"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "1b303a1a9a3a64e77b92f42aa13dc68c"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "a5ecc48e363a8a3f17923b9a5b30c3c9"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "a8319d2a0c1db9acca3d981eef398d14"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "8c94d86afd5ee53baac15679e6d358f8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2adf66a0bdeccf59f2806c3b099860ef"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "73e885d09e3fc936129b56c78d702f54"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a1a0ef6c0b891777618659e1b04fd9bf"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "c147d3eb4986ba3020acc28383f68acb"
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
