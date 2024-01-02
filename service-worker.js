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
    "revision": "79ef89ef638b1f2a1955fdafaee08cbc"
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
    "url": "assets/js/1.f8e58f18.js",
    "revision": "235f14af27f33d405704fecb1267617a"
  },
  {
    "url": "assets/js/10.261f3ec2.js",
    "revision": "31ca423181830af932cc1ef09fdb879a"
  },
  {
    "url": "assets/js/11.361b2351.js",
    "revision": "bf9951a19c91691545f404a04c5b2610"
  },
  {
    "url": "assets/js/12.685107e5.js",
    "revision": "e3694de6886194b4512d322cc8e80e93"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.9137fc8b.js",
    "revision": "2b18c9e0f07c609da06c5447cdf5d0aa"
  },
  {
    "url": "assets/js/17.7f0d5ef5.js",
    "revision": "6d9791789995922d3eabada6944de9e8"
  },
  {
    "url": "assets/js/18.8e1dd9cb.js",
    "revision": "f78ead17e1bb07455ecb7f8f86374be6"
  },
  {
    "url": "assets/js/19.bd296078.js",
    "revision": "24f20be2746d9c72e48d0caa600b7de6"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.63ac64ec.js",
    "revision": "f83d923f535ad9ead6ffe24452203e7c"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.87734daf.js",
    "revision": "b036457850c0761b4c0a402ebd549683"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.baa51eb7.js",
    "revision": "89832e5398f4cfa1fbcfeba6f0e98453"
  },
  {
    "url": "assets/js/26.9a51cbf0.js",
    "revision": "19347a5f7dcf2e06caf1945ea7d1c89c"
  },
  {
    "url": "assets/js/27.44fd35de.js",
    "revision": "467a056c4b7cf1d8e89dfe61f2860ffa"
  },
  {
    "url": "assets/js/28.f6879937.js",
    "revision": "77bc41dac6d237ef10fd7c300e162e31"
  },
  {
    "url": "assets/js/29.4ddececa.js",
    "revision": "ab586d22bee6d90dab5ad37c2c91588a"
  },
  {
    "url": "assets/js/30.0d2829ab.js",
    "revision": "d245ede5cf64a6a0ec334097fb410b47"
  },
  {
    "url": "assets/js/31.22c40953.js",
    "revision": "68e5ef051d06d178cbf771919c1be7b6"
  },
  {
    "url": "assets/js/32.0db68922.js",
    "revision": "813bbfe5d90fe0ba623810764b7d4ae1"
  },
  {
    "url": "assets/js/33.e9df4b37.js",
    "revision": "aa16226147b74e22e7f57323a363eabb"
  },
  {
    "url": "assets/js/34.e50feabf.js",
    "revision": "cf33bcad68d7053b3aed1432a9802bb4"
  },
  {
    "url": "assets/js/35.c7d6863c.js",
    "revision": "6bf8a93b4e0865455b1963cca9ed81f8"
  },
  {
    "url": "assets/js/36.40234a6f.js",
    "revision": "1a94ad38b4e64d059beb1b1724062e5f"
  },
  {
    "url": "assets/js/37.bb3787c0.js",
    "revision": "557f5485e4368fe58651434db3b18fdc"
  },
  {
    "url": "assets/js/38.4d408a7d.js",
    "revision": "bbaf1394dbc972c6696d52b14678bbbf"
  },
  {
    "url": "assets/js/39.2d255894.js",
    "revision": "90380132dd2c8664a02abf487ac5abd3"
  },
  {
    "url": "assets/js/4.08080986.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.55e4635e.js",
    "revision": "1e31a6c6f11aedf522c0776190f3e84c"
  },
  {
    "url": "assets/js/41.bfc401c9.js",
    "revision": "893cf2a7a25d6be687b3a4a30e4bc99c"
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
    "url": "assets/js/app.347ba350.js",
    "revision": "9cdaf0e005eba534789b9fb800414fe2"
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
    "revision": "eb99908f56c017aa3defd7892bcb4758"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "598a22c382619a30829052705a1caa55"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "300bcf10e2ef01b9c34ccaf471754dd6"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "aa1d98973b63f04166d1e78e9e192d87"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b3643f959cbfd362dce8f57a84d7198e"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "1ae1a5911c5911a97dbe050dca3f4651"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a4d7d642340af7adaacf91bbdef16bc9"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "2b558e2b2dd83fa5ca10def60b1243bc"
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
    "revision": "4552fbce1782423c36b051d18a8e03c6"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "24df7b0436159ea1e9fa75124cb714f5"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "3ff0b226ebac36345c5f1249d6115099"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "4c06267ec85305e29da1aa6419e28ec3"
  },
  {
    "url": "tags/git/index.html",
    "revision": "607124fcd62c55f497e51d172ae153be"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "e35b7c93554e56064abc64cbfbc55dbf"
  },
  {
    "url": "tags/http/index.html",
    "revision": "d56155ecdbb37f206916315e6ebd3104"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "534c87afac3e3fcf143bec33fd22754f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ae5698f30c97a34378d420539fec0818"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "ffaf084a0419cd77ad8fbb3bde30682b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "a619257153fc03fd398327e5a193e008"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "45204694587783126d92381b701ef60a"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "769268a22bef49a261de5c5a79d80bcc"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "757467fd249a217f35ba286cce90dcec"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "024bb4bd6cce1f1664ba814968bb2ef4"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "735e6f0fa5800601a701cbffe74957ef"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "387a080e703c9e8df76694beb831d34f"
  },
  {
    "url": "timeline/index.html",
    "revision": "cbbe07416439f57db9bd76767c409f1a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "093b90e5c8c59d379a4d491114fff8cd"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "7953e6c791c767468ecfadecfda4495c"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "66ecb8ed8f779e485a7ef3639865810d"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "570667e36d028fb274e4b49f891b5dbb"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "0a1bdaeea61cecc34db3ea56fa78cea1"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "9c361856b8a84a3a9d92e810890ba4ac"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "aa4bfdcd8ec698a248a90622ab0709d2"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "8b6c8543ace5163c316f76d3ba3eb5c0"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "a9ca8d5eaa915e41f7ea9014fa69daf1"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "285e7f99ab88bd04c4842cd4eabb7c32"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "eb4c980b52f18e3d4db4b8998f29cd6d"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "0012e7c88a2b6852dbfa66ad09162f96"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "f08f1fb699f2c9b3a0981352d3c8e572"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "1100a27643b5110111e8d322f41582d1"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "c6f9f67a675c4b3020c02ee2ea024d64"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "66ab60bc882dbc1a853525c6c678d3aa"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "e4e65798d1bd93916da2cd6360c49ebd"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "db392297c327c0205900cd69a5f271ab"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "d7fc804a0ec6b2876a1f78b5cdb7476d"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "c40ac9f1666c1f178d1826f74f68af63"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "070c1b2b3e3d98f191d3b668f122f968"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "2e290e27d7fd30060bccdc1095096f25"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "572f9cf99f2b99c2f853f5064ee8d511"
  },
  {
    "url": "生活分享/life.html",
    "revision": "78e29cb78efc6f745357412cbd730b0d"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "4f4cd22166f341ee4624d278b7df755d"
  },
  {
    "url": "项目搭建/vue从0到1项目搭建.html",
    "revision": "294705caf1fed6078007a3dd582a26b4"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a7df7889fa2f8e3fd876e40ad941e69b"
  },
  {
    "url": "鸿蒙/Harmony.html",
    "revision": "981011b20d414d9dc330f93bfa0a0fbe"
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
