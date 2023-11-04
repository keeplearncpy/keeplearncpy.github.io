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
    "revision": "15968ca873f703c3657e12b571579188"
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
    "url": "assets/js/11.68ec98b5.js",
    "revision": "6a2625a16070503310aaff1ce22c5b42"
  },
  {
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.fe7c245b.js",
    "revision": "5e174ccd958e84cc3b2242c0a4eca998"
  },
  {
    "url": "assets/js/17.c4c27d8f.js",
    "revision": "fff9f926a57cacf229a4bdc7f74fd473"
  },
  {
    "url": "assets/js/18.02b4b513.js",
    "revision": "62a124da7e15423a7fe6754fb0484bc9"
  },
  {
    "url": "assets/js/19.4cce212b.js",
    "revision": "9b8a5f1b3bc2da34b43921fb9d15642b"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.14dcf480.js",
    "revision": "db50a1ca700d1e8530fa3593ef6b4209"
  },
  {
    "url": "assets/js/22.79f03374.js",
    "revision": "15938accafd4cbc81c137e44a9555699"
  },
  {
    "url": "assets/js/23.6f6e1825.js",
    "revision": "e501f92b7927d04146db9b125e223869"
  },
  {
    "url": "assets/js/24.37582efd.js",
    "revision": "b615bfd7535453dc3cc4726699964077"
  },
  {
    "url": "assets/js/25.42b056d2.js",
    "revision": "f0b9d63b0fc72228b78c841941b62e18"
  },
  {
    "url": "assets/js/26.1f3ef11d.js",
    "revision": "9bce3d4e6e48f00cc562760e0c2df021"
  },
  {
    "url": "assets/js/27.070cbaaa.js",
    "revision": "a105a4c3286ad47e5e1d686f2213fa67"
  },
  {
    "url": "assets/js/28.c1568b34.js",
    "revision": "f1b5466aa2bccc33d7eb209cd9dff2b1"
  },
  {
    "url": "assets/js/29.5ba02799.js",
    "revision": "c6379547cd801f9afad2690fd3f1db47"
  },
  {
    "url": "assets/js/30.1cbda52c.js",
    "revision": "39804671e82b785797db20ee174fd8f3"
  },
  {
    "url": "assets/js/31.f835cfb7.js",
    "revision": "80b1b067eb3fa673e7c663cbc33c2d65"
  },
  {
    "url": "assets/js/32.693e9156.js",
    "revision": "5c19e31e42692d9c4462497d3031a41a"
  },
  {
    "url": "assets/js/33.b6e3c087.js",
    "revision": "9350d9ad6d8a5ac5e541fa8a0098476c"
  },
  {
    "url": "assets/js/34.f8fc19c9.js",
    "revision": "b37e2a036ab188b580a180bd046427fe"
  },
  {
    "url": "assets/js/35.efdb2f07.js",
    "revision": "6c712fb65dbb7cc84376f12824fe9350"
  },
  {
    "url": "assets/js/36.94c79ebe.js",
    "revision": "c163b0882c3f7d1f98751c6b39be3cae"
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
    "url": "assets/js/app.8111c724.js",
    "revision": "678980a07a1968d61f64241c3d52a6fe"
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
    "revision": "04e56ae369c0bf4a51056836ea25cf03"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e6f6683aa0b5e454355831dd1c0ab5e8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "74db3c2c59d04021496f2e1c5e501ac9"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "4d0e39ddfbd8149b14da979a6af612e7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "06ba386efb61d2f5e6d15a024d68de7c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9f0235553b753dfe9eb45bcfb5be8791"
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
    "revision": "4b2703ed263c24ebf152a6edaf38ac7f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "edc89b9f649536ee1994c9c9ffe07566"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "1b938232d813494603fd6d6868f9cfae"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "a6c2f26839716cafb1e0cd3eafef900e"
  },
  {
    "url": "tags/git/index.html",
    "revision": "b9105a7f3091525517198d0f9dc4995a"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "8492d6fc558fe054309b5314d922a9db"
  },
  {
    "url": "tags/http/index.html",
    "revision": "eed9ab31d00888f5b9f8bc4e1199933b"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "22fa9de774bc7ccace171e5de7f0be60"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "68611854fc924314da37278019fd1de3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "09b00e6516362d475ff81c2ff8245ff2"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "a1d6989398f17be4627f41e7762f9278"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5eb7e1414b696978a4c27311a0f4088b"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "d57f0f071a3ca218417310a9650e03fe"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "29b16736c2daea61605815741f5cfec8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "83db6c5d60c5e62491af9a4149f40e7a"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "1805780e6c39d0719b9e22fdea099240"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "db2090427106b7757be0ac2b6716d616"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "f5a2c20b0a87c61d463b4e1ea991f0b7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8f3b662037e9f480790abc0efafe64b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "fe6e5127f02849dee16d5c750e91080f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "16a232434372e5b94fba6af811e82648"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "7176e2b58405cd0b352e6a4d6afbab66"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e899b087e35a93e13f5d4f27525738cf"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c68b472c8a8c7a492ace99f00291a686"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "18bd5c7dd6ce6fbfdbd85c60b92f542d"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "a5afcbcc47f36d63c4be99912ee5a224"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "22f71caa3cb464084b15d1dd6c7224d3"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "5110c68d4ab4742bfa354e4bb76027d1"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "f635d58681487ff94d8d1b4142452bae"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "f287a687b83a95908da06e8621f9f802"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "cf73cce7d8b402a580beb3b67af2d066"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "dc514aa9842a07b799bdc73d88fc292f"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "833b4d0d29d5fdea32670c170b8886e7"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "3467e85c2ce5d2f74f105971842e3ba3"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "0f0755f93f32e572baeb3db3a7fcc885"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "6fcaf471f5e73ed27e87598f7151af46"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "9c6347d920d199f70a68acbb0d40495f"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "e6aeb3adbf46791fecb4265cb26b3750"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "5e63dd4a4615040704afa18c8866e46c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3983e58e512310bac073264dc7439871"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "14640bf66301c52fc2816430b55937ad"
  },
  {
    "url": "生活分享/life.html",
    "revision": "183c30999d2646a87dd1d7d5cc0bd758"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "b8ad9a8fcaaaebfc375e8525901f0be9"
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
