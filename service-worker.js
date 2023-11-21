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
    "revision": "760b6c15e177730b985cfc608e667051"
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
    "url": "assets/js/11.d6fd15e8.js",
    "revision": "8ed198e4df1f96821999eaabde87bc3c"
  },
  {
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.329ac30e.js",
    "revision": "7d64fb0a95a3b3a986649dd320d29a4d"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
  },
  {
    "url": "assets/js/19.4853222c.js",
    "revision": "9fc5bec76e65b87654c9546403c88c4c"
  },
  {
    "url": "assets/js/20.b4a9beba.js",
    "revision": "8ec823f78a3311b9e3d72c958200ab94"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.2dbac243.js",
    "revision": "c2560f9a619e5a7444d2d3c8da8725c0"
  },
  {
    "url": "assets/js/23.ac6a31c3.js",
    "revision": "0c5d5ecbd9ff59981f1738ab5dc0be71"
  },
  {
    "url": "assets/js/24.525d2941.js",
    "revision": "f1006417f776d7f1d9a702f7d3507000"
  },
  {
    "url": "assets/js/25.a7d13a72.js",
    "revision": "c594e7d2981d178a7afe74faa7f9274a"
  },
  {
    "url": "assets/js/26.f73c6cac.js",
    "revision": "8b02271aed7432c12aff702ed9853169"
  },
  {
    "url": "assets/js/27.ab19c463.js",
    "revision": "49acc1dd3f6f76eb6932f96f86d1a2e6"
  },
  {
    "url": "assets/js/28.99efcf2a.js",
    "revision": "68915694a8b93b3c4456fcc578377487"
  },
  {
    "url": "assets/js/29.5b8d43a3.js",
    "revision": "113a63311cddf68945e3ae7f0f340ca1"
  },
  {
    "url": "assets/js/30.a163f1a7.js",
    "revision": "6f9fe923a37074dbbcba5f94c52280e6"
  },
  {
    "url": "assets/js/31.ed0836fa.js",
    "revision": "4a2a7bf02f239dac0ca27d0a900bc359"
  },
  {
    "url": "assets/js/32.175f3fa1.js",
    "revision": "7ed934122674a7c324dbc6223249c10a"
  },
  {
    "url": "assets/js/33.c8545c92.js",
    "revision": "d6f1a493f1c3200a17c5400357693440"
  },
  {
    "url": "assets/js/34.5a752295.js",
    "revision": "d6fa428761cf1c9658ca17c33c59a301"
  },
  {
    "url": "assets/js/35.ab445037.js",
    "revision": "4445c303a5f3cc8912b6feb33257acd9"
  },
  {
    "url": "assets/js/36.e3c9b558.js",
    "revision": "b9c19ecb7f2518f9a01140a8bbdd5be1"
  },
  {
    "url": "assets/js/37.bb3787c0.js",
    "revision": "557f5485e4368fe58651434db3b18fdc"
  },
  {
    "url": "assets/js/38.4854a0ec.js",
    "revision": "220cd243e5681403b4ab2e9147d58269"
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
    "url": "assets/js/app.c5b2501f.js",
    "revision": "130b5319564655e287fe4a58a61a6370"
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
    "revision": "59589baa00467bbfa862bd6d2e3e777b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "91104d0f53beada2b1676484f8178983"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "601e5751b708600ab8174af12ac5330a"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "a21345e860ab46fef3a6536e448fbb2d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "2937f297ced93c1b63b48b475ba0fb42"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "fc6fc8dd125e5cea85d1f3c42757a6a1"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "1b20df399eaf27764e477ca16aa6bebb"
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
    "revision": "0cd36223eda2a2000843d2292ecc969a"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f1277002ed566b57f3299628d4fde54b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "2fc71345fe3cce3bc18f5be7538a3630"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "8289db7b9061604f869c34c87a196903"
  },
  {
    "url": "tags/git/index.html",
    "revision": "20be04a771b1d351c1d349db3dddc6d8"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "66501f9cb76d372c1df6e51a86c2bfb3"
  },
  {
    "url": "tags/http/index.html",
    "revision": "c1ce43a3dd6d3a2a9c18e1541ac172ae"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "e69e47fc4329ca4fd8c05235a74145d7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2dcc69e2f8e518f5ad42fb947bb319ee"
  },
  {
    "url": "tags/js/index.html",
    "revision": "506daaf90fef554f5a16dbd9c8132ad3"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "9e1a861417369c70d16597389b308fff"
  },
  {
    "url": "tags/react/index.html",
    "revision": "ad3bf11caefabfc77b1c16907ce5af48"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "2ef421c685a9ff330ba69b06312fead9"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "49c211e8fa9ae202287724a0d6a9a130"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bc6d625f8cd4d4c5bc49d633922e4c03"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "7d5fc90c3514d10e8b3152711e6fb579"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "9b8a52a2b82832fe4bd30d00ea8fc800"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "4a59971a92f2d093be0f9c21b9166cd5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ebcda10e6ee2a9361b8224832b818d27"
  },
  {
    "url": "timeline/index.html",
    "revision": "1e12bfeea2e8d2b5e8f076505d1ba03a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "0e5dc2e71bf7df15cc55e5110a0c9c40"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "90670f9cc4e837f0d2799fd7924e539a"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "74a50a54e1069902cebdb99f6a036fe3"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "133f9a7ae2d9933c2b75d8084944f06d"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "d70f53d94a2c6fb1f61422211a49857b"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "4a9f2d48967d61c7c104e31710f93baa"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "e5c374d342e598caa3ffef36c8358e04"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "d56e5afc1e65a50bd5ede58353330228"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "a7c8ae668c48bc4aa0598b266eafaee3"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "3fe2b8560f0ec95d1e2f7017907b38aa"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "80888d60b01d8903a5fbfbca5c7e52b3"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "0fad0a4bcfeac770ef2221a36cb12eb8"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "f801d8092894dc89c04b1d1556e2c00f"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "8579e1c97162e06b3aeddbcf4d134307"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "fa37ce6137550114fa10f876c9a6839f"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "807efa66ec191d51b054338c901749d1"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "76ea58200fa7f2b3b490b14541fa5ece"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "9dbdef68bfd09800d0b54b0c55d73505"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "2a3f98f2db9d486715cd4ff3c3b61ed4"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "50d3af1361862f9e471cef450988f71b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0f99e506e714346224e245c700ce0aba"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "2fe25673f60bd1c58de385cdbc9a94bf"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "3a3e68fde4c3b290dec68ef5179e6029"
  },
  {
    "url": "生活分享/life.html",
    "revision": "61e183b0477ce55ee068d52fe4c4504c"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d0e7430269564a2eb29045be80abfba2"
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
