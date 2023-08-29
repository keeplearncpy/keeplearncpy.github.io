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
    "revision": "7eee7f87bef38ff8be3ab223ea849ab5"
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
    "url": "assets/js/14.8fa5e0ff.js",
    "revision": "1962297767003bfc75dc825d4456f659"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.fb2c99c5.js",
    "revision": "8b5fefb1a8cf49d9998269e71c8824e5"
  },
  {
    "url": "assets/js/18.f745f921.js",
    "revision": "9e7f69a56c2429ed7ab51effa387adcf"
  },
  {
    "url": "assets/js/19.e237d646.js",
    "revision": "3280cbf045bf6cf7122ff295bdd21edc"
  },
  {
    "url": "assets/js/20.5a6de1b5.js",
    "revision": "d3fb82aa15606976107169f280546470"
  },
  {
    "url": "assets/js/21.4f6c5927.js",
    "revision": "a13080bf30c232dda6295dbd0e967b57"
  },
  {
    "url": "assets/js/22.82f58f58.js",
    "revision": "f19a6c2a45d9054b27ecd3f0e87d5a80"
  },
  {
    "url": "assets/js/23.333b53a3.js",
    "revision": "e4754414d3236299b3d7305af10ae3ae"
  },
  {
    "url": "assets/js/24.17781649.js",
    "revision": "b4cd1408160870a0f9b950cbb31f5ebe"
  },
  {
    "url": "assets/js/25.cb3c7eef.js",
    "revision": "eab5f5148d320c8168730b086075c353"
  },
  {
    "url": "assets/js/26.48103a19.js",
    "revision": "72bb5913327ea49977c73f78cd83c012"
  },
  {
    "url": "assets/js/27.fd6310f2.js",
    "revision": "5d1ebb667a6c7aeba21e4fae93db320e"
  },
  {
    "url": "assets/js/28.9120ef16.js",
    "revision": "40aefb926c242fe42394c810ab3a48f4"
  },
  {
    "url": "assets/js/29.545c5349.js",
    "revision": "c902fe3649f0927ef77dad066bd7ba96"
  },
  {
    "url": "assets/js/30.8343acc4.js",
    "revision": "91021845b206fcdf09d3ceb4bd8b0912"
  },
  {
    "url": "assets/js/31.dea03980.js",
    "revision": "237b521d7abd751044db7fb7f6752f7b"
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
    "url": "assets/js/app.ad8b7a6e.js",
    "revision": "c4000d85773a3142433d0eaa6f10b3c5"
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
    "revision": "82414400153c191d026cbe173f98a926"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "328424da583ebf31dd29740afb708ab4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "87f697fd4e153da10e5025d5f8d33461"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "cc384a9c1b1165520b7b9e4fafd83e91"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "69c3e5a25cbaf89dc05190a337daea4f"
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
    "revision": "541becaf4d84d0f0ca64ce6892db9cc1"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "674e245548a376171254e5395e0ee8c9"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "7c760e3cf109bd9bcfcc82683a5e52b7"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "cdc1480f1d064ebc589695ee34b905f9"
  },
  {
    "url": "tags/git/index.html",
    "revision": "57a4b7b4db8593e62dafb1b3fc872d06"
  },
  {
    "url": "tags/http/index.html",
    "revision": "1aac6a94aa07c4e551d9442b8ab619c9"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "cbca683ca538ac797769cc9ca7488058"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4827a514a40d412d56ad581e5a0871ce"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f8a83b8e96bfc301bcc87d8c5aeba99f"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "087a35f888935ac1efccd8ef4514ccb0"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5fa7ae84c61375cd8d21809c57515da6"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "2c61c02e170aa240d4216a7f65804582"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "d74ab3b3be25e91b6ab5107d3b77af90"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f745aefb7bd26c6200185c98ebb247aa"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "88d87b8e5367453e2705632d7c90feb6"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "140b0502e1a4224daa6a9cf6e142ac46"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "389eeba5386dd61c8ff98f35b13aa55c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8cfc11925dbaa53e86f97a9ac1d600fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "3b10271c6d302260b62d1190c302257b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "8485b781524ea4c464537af197852ccb"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "27cb68c0b6b6dd367cf3a11074a4f994"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "8b3a1e3e528b784054b4a91c53462c64"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "305466263be801096b1cd6edda131144"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f46ed6208348036f542ea68248d0343c"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "cb05c343036acbfa8d845bb1ba2e5b9e"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "42cb34cb211e535729ca8a4a69553d05"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "d4c9200f418161dab8e5ab806fef948f"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "b2f3b9283d65dcac27401e2aaf599b9e"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "af7f8baca98d1effe92336a330083fe3"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "b0bc482ce50b69a92a4a40bf8f1fe476"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "146b140e9f2ddfc14baa70110b50ffe8"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "c9233d638b291fc1303aad4f544bc313"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "6e35795f51bf13ff1a27bfdd654bc79e"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "8c7d8dcee9b00be7c23956c5d9e7206c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e477b1a175a5274304cacfc3e9454380"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "72674dfdf832fcd51e43557a50a394b3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "680239442b4128531710c9e9366fe6bf"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "9648cbbdc00538098bb842af2528df06"
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
