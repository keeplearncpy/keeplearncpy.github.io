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
    "revision": "4434e24cdc212c4413b2f854ccbe6a0b"
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
    "url": "assets/js/14.059ae5ae.js",
    "revision": "f9bd841b2e5dce7605d539c757a49bc4"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.3091672a.js",
    "revision": "090d1ebcb56a50a63bbd21eaad5bae91"
  },
  {
    "url": "assets/js/17.bae41df7.js",
    "revision": "9436b2d7ff537c902dd90a38c597a310"
  },
  {
    "url": "assets/js/18.de89d0c4.js",
    "revision": "46ec7615677b33f75c6d3995bde1ef37"
  },
  {
    "url": "assets/js/19.ac8f5973.js",
    "revision": "27e495257db2744c8d27960721d47167"
  },
  {
    "url": "assets/js/20.870cd892.js",
    "revision": "b045522d9f6f235c895afd1ea3231bde"
  },
  {
    "url": "assets/js/21.4f6c5927.js",
    "revision": "a13080bf30c232dda6295dbd0e967b57"
  },
  {
    "url": "assets/js/22.ef36a845.js",
    "revision": "16bfe1589269f56469dde51705dd4716"
  },
  {
    "url": "assets/js/23.2c2c5927.js",
    "revision": "f63b93ee6f1e050f0f99e602397ad78a"
  },
  {
    "url": "assets/js/24.b429c3dd.js",
    "revision": "25df7d63e2472acf8de12a669976429b"
  },
  {
    "url": "assets/js/25.cb3c7eef.js",
    "revision": "eab5f5148d320c8168730b086075c353"
  },
  {
    "url": "assets/js/26.b257bfdd.js",
    "revision": "89c3575469e1f13b408892ec7f4cc89e"
  },
  {
    "url": "assets/js/27.2883ac71.js",
    "revision": "e55a197bc8b84457d2ddc4a78a450bb6"
  },
  {
    "url": "assets/js/28.44d92616.js",
    "revision": "546f40b475ada55b83ac1f7b4d1372ec"
  },
  {
    "url": "assets/js/29.e0f66071.js",
    "revision": "6b77259861e67403f6afd843717e4273"
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
    "url": "assets/js/32.11981096.js",
    "revision": "8c023699a626e4bc6a39b7e160036050"
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
    "url": "assets/js/app.405b2513.js",
    "revision": "b5d8c6cb65746aac433da050ab8c6c5d"
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
    "revision": "bfa82c87eec5db26ecba57519a30d51b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a746f26d2df1394debfe459f93ff74dd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "36492e955fd1e1106e3b8a179a8f9fd9"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "cd504b7e8f98a5fc067c854e945d2455"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "377ba2bb78a62759ef703c7a324d4a93"
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
    "revision": "d2feacae83deb931f69caf06b1328f4c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f0d1c2c12d84092609a0269f64071a83"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "42a3b1e9ded0604f4e39296887777bca"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "8dc32bba81c063b712841e53baefa8fd"
  },
  {
    "url": "tags/git/index.html",
    "revision": "3218219d2f9adcce31ee4b5b8d537b41"
  },
  {
    "url": "tags/http/index.html",
    "revision": "4e33e1b666802093f05b0337271a792d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "80442305a31cc060d19c0ab5b452253a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "bff826a37ae26b643c816e7708ff3173"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9d020039cf0b0c79c331096f735a77ea"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "cd061c4610af638bfd71627309da57ab"
  },
  {
    "url": "tags/react/index.html",
    "revision": "52f03462e9c776afeae4142a1c4e83b7"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "e055cb5d50a345d0f07aff366e4f31a2"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "ffaf462bda8709701cc97e3e2cbae6fe"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a62486440989d303786ca6798d3ca4c3"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "5423471625cc30b373f71482e5bf5d5b"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "1e3c8cb759e6c219ba17a58d83286059"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "38fcd4709ee626603d68b27ae0afcbb7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "618dfa8054350c7ba04e942bbda5eb08"
  },
  {
    "url": "timeline/index.html",
    "revision": "f1eb81cdfd5e81da9659e23039773126"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "ae24fc643d2e37cecf20dbbcbb97cb55"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "6fc56975dedae846ad966aa2e640348e"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "00dd3e55756b149b95ed4117511bc340"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "bf2ef7cb4630d6bdac5ba25c14722ed4"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f5ce2413b9c1ead6c2f2a1bdb8ccb923"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "438efafc8d4ca3ab40d8a4a1a59210ca"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "9458613652bb68a603eaeda3ec4b513d"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "c0c7cfeb01fd1e1b84824d4a8c96715c"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "fab1bcd502d1946813017e1be05673a2"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "10cfaafb9f61b1adb11ee593d1d92613"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "14ee77f22088c62343819739f589fb80"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "2e5345cbd227bd97130ceebe3e4ff0f6"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "9d7043d35537745e0e10cc6be96a2d6e"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "fc6f1d6f9ca5db241746e2e067ea247a"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "bd4b8d016f73473760a4dc1eb908239a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "237eb40b37fbf61aec921b14c803ee61"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "0dec2f7fafee894a4d69c0b5b133d327"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8b2448ddbd411e0225baa200f773bcfe"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "bef123b7966a2f76246004d66270027d"
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
