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
    "revision": "a09dcf119bf85957e2ee77e395aecd0b"
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
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.bf885247.js",
    "revision": "fac326e6c9d934bbaadd91a3c3be3502"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
  },
  {
    "url": "assets/js/18.094890ce.js",
    "revision": "f8a71b90eabe617985ddb7233efb3a3d"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
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
    "url": "assets/js/23.0e20dd8d.js",
    "revision": "87fc8aa2ca19c8ad685187df8f99df24"
  },
  {
    "url": "assets/js/24.eadfd447.js",
    "revision": "069e1ac9de5d92ca27413181217d90a5"
  },
  {
    "url": "assets/js/25.4de0444a.js",
    "revision": "633d3fc8bd0e9109e92272b26906cfac"
  },
  {
    "url": "assets/js/26.33e8c203.js",
    "revision": "bef82014c21992655d06dec1d9aebc82"
  },
  {
    "url": "assets/js/27.50ca4ac9.js",
    "revision": "7f3b82e9028c19c36921da9baebeb926"
  },
  {
    "url": "assets/js/28.e711672d.js",
    "revision": "ea7483dc3983c1096a1ce38d7254adf5"
  },
  {
    "url": "assets/js/29.461153cd.js",
    "revision": "694181bf6c420972313efbe716d3b184"
  },
  {
    "url": "assets/js/30.e41a58db.js",
    "revision": "3ab5e194b347170746259a3424e951b0"
  },
  {
    "url": "assets/js/31.760ed51a.js",
    "revision": "417fbc42c5e8cff58e1638be0db3d33d"
  },
  {
    "url": "assets/js/32.c7f91bda.js",
    "revision": "9da46225f6c0c70310b001c9cc1f9af2"
  },
  {
    "url": "assets/js/33.5da44e04.js",
    "revision": "23842788594f722392f82e7199356c0d"
  },
  {
    "url": "assets/js/34.f8fc19c9.js",
    "revision": "b37e2a036ab188b580a180bd046427fe"
  },
  {
    "url": "assets/js/35.ecb41842.js",
    "revision": "faeeb11582e85ab1ae3675ea28a3ca41"
  },
  {
    "url": "assets/js/36.b08f1412.js",
    "revision": "8b5c0788c59983ad75b266d2e0480592"
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
    "url": "assets/js/app.a5e1f529.js",
    "revision": "6bbe98c5453ad204ac64221eed13ba1f"
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
    "revision": "45dc1fb454e23d58b96680bb6f393182"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4c48517428b218fcf2ad2851418a44a5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f43f592973696ab098dcc029c53389b6"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c80892a054bc107665aa07dd0e7851e8"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "cfd5cee5f1cc64c911d352d172f10c9f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b096f74fc292ef0d7fe1c0c0c7d57657"
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
    "revision": "a53d6e14f0b023209d825c6585969651"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "847dbf77207e94e8045b565d11cd27db"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "5d52f71528019deda0e418b872030721"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "71a5649122e359d08f06ba66f1539dd5"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d606ce1ea7d37d597a671a6e3757c724"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "b50b1de556d53ff80bf85bd91945a583"
  },
  {
    "url": "tags/http/index.html",
    "revision": "69a626c1ad70f33fc74bddb4e49d7bd5"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "78d7770cf460f9faf8d6e15c9ef7e050"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1683b491f4aa97a421619dcd55dd7cb8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "423527580f241994b1d5287d8dcd8895"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "b85a8be5e3f7c9561cb3aa9f6b878629"
  },
  {
    "url": "tags/react/index.html",
    "revision": "db39f95d094d450509123cdb7b9b2ca5"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "c06147824626ca025d74c2128242aeec"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "ee4234a3fa5f8565e3f46dad046287b7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7974bd9a7b4620752f37045692de8e44"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "abc6f90122f913f209cdc4371c9e6c31"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "bc24e284608733b765851d2cf045ac18"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "eb696825c229e30a872ef0adb34c44d4"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f96f64a03d930ed3aca90037b43567fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "759c9b76e673cf73c191a819c9ad8532"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "478b8d9f4a68295e17a8c38ae4dc11fa"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "45c9cfa179b1b5e81f21818dde1de96c"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "1a119310c1a0a36087923a0c4c8304ba"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "0c742d894139aab2e7de909cedb39676"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "459056531e9e9a1ef0672cb7e3e226f2"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "7f394b24bef93a88626d583e2c35f77d"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "1bf306208b14c68cae9a8158b45efc05"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "afb809beec85a9d2c2fe77b8dcfea48d"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "55552ad675a5bb73fc39d057ff26b205"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "f525fa571e6dc4305e550492c7db068c"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "5c286b12bdd3417b1c21da6f1b3cdc57"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "0787a14bf77545126540fb3cfa2ae867"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "eab1e215e90633f7f57957cc08a4f419"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "f8c1508984e4bc78aed02bcf2b61867d"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "8b4a63825c332e44cd9d117c000d3f37"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "6f3bddded6a5295cf6c5bb9a8b1114e3"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "39df98f415634e03ca31ee64a9775f23"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "9e218e8881521fe43bbb2ef2ef9d6701"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "05b9994e0e432560a29d262cd40e8c41"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f274ef58015fd529bb80d5c9732f7046"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "7a834cbfe4eba8c79a436c88923df0f6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "14d35eef67bc6cb32d2d606c0c48b740"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "68ace17d0357a78b5e30f08c98aa8946"
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
