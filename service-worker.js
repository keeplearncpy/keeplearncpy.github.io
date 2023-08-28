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
    "revision": "a3f7bad6da0c8d943561dd39a4165892"
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
    "url": "assets/js/13.03a61dd9.js",
    "revision": "bbb9b7136d3c7088343a4b055e4a807e"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
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
    "url": "assets/js/17.445cf38f.js",
    "revision": "3ab3104438cdd51a0c675c3fb7f1533e"
  },
  {
    "url": "assets/js/18.f745f921.js",
    "revision": "9e7f69a56c2429ed7ab51effa387adcf"
  },
  {
    "url": "assets/js/19.3f198beb.js",
    "revision": "c4733367fcad74d57c58ab17289d72aa"
  },
  {
    "url": "assets/js/20.66683c73.js",
    "revision": "45ad497bfdf429b8ad29fb8d386aae5a"
  },
  {
    "url": "assets/js/21.15adec21.js",
    "revision": "53e945c305af73049e048f1aa94bd047"
  },
  {
    "url": "assets/js/22.f16b95f8.js",
    "revision": "863bb79e6b57aa677182d797dc2b6f62"
  },
  {
    "url": "assets/js/23.0dd1fdb1.js",
    "revision": "b7099b4da16eaaca1989ebf9d1c33672"
  },
  {
    "url": "assets/js/24.4a4d351f.js",
    "revision": "61a4ba4d93351aee0a591572a1113cda"
  },
  {
    "url": "assets/js/25.4def3517.js",
    "revision": "f4e59c5cee2d837bb441d1d59d8c07a5"
  },
  {
    "url": "assets/js/26.b257bfdd.js",
    "revision": "89c3575469e1f13b408892ec7f4cc89e"
  },
  {
    "url": "assets/js/27.a9a07960.js",
    "revision": "4a2660ba332fb8370d44bb12eaada134"
  },
  {
    "url": "assets/js/28.a935858b.js",
    "revision": "92ce97ce34db231f021130076ca84294"
  },
  {
    "url": "assets/js/29.05b1cad7.js",
    "revision": "c9f4e7743a8b0ebfe3bd0b9047adaa5b"
  },
  {
    "url": "assets/js/30.32766be4.js",
    "revision": "dfab5d3978cc35afa72a29bfd45ef7e3"
  },
  {
    "url": "assets/js/31.e64bcaf8.js",
    "revision": "5cfb1dee9af986d6c1660aa85290fbc2"
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
    "url": "assets/js/app.f89409bd.js",
    "revision": "dc863a1601aa060919c26fbc76a319aa"
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
    "revision": "340caeefb76264bb1475e91452a783e8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "88e4ac001dfdae53b93f04457eb61ac8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f078c37d9826b3bddd7a288c9c8a71c5"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "6728d07e1bd7fcced44c0bfac96b7cfa"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4bd98d4184f488fae08d49660356008d"
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
    "revision": "31aff22075f529bad8dfe0093b80829f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "46b8199649a7325dd6d8eb077bd3fc71"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "b58b86f341a33ec3088036acb22aea3e"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "7a7decce46feaa4947c4e72c9e9184e2"
  },
  {
    "url": "tags/git/index.html",
    "revision": "afd27f212a489cb1030508f32631a1ab"
  },
  {
    "url": "tags/http/index.html",
    "revision": "c6c73e6a4acb61ec9fc7b20e367b9169"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "febb49ae08a49ad6ecc8fcd77e07a043"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1254c6fade4741529c0ce68ab027dbef"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b45a43df4ad615ea2d934a56a916ee80"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "1af1d535cfff7b25d82c48565470269e"
  },
  {
    "url": "tags/react/index.html",
    "revision": "c2b93c5d52eaf0854bf8964634635b7a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "f40e8b9c645c30da80c82d57233b56ed"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "4071de07d5911fe06b726a0fd2c5e1ff"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f11bdaa512ce5b651bfffc77e9ed13de"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "592458702c978d48e7727c5ae23f1947"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "f717d1fd68523d9c1c0898965bdb8151"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b5d5531ed39dcc6a7bf1cd1795a94d62"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6a1fa474e1d38df7ab724f4f6cd5905e"
  },
  {
    "url": "timeline/index.html",
    "revision": "c020722fc5026b146e5ccd90c150144f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "24d037280238ff7d0af58f5978fca0db"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "0d6985215e0a1006e9a17c9c9bffe2cf"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e3fb8a2709de886972d1887ca909832a"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "6de6a51ac3237114a79e1f8ceda763df"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "205af1cbe331858efa4a70e4aa70aeb1"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "eae53fa51b9fd40e06cef56028f729c3"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "c8603d5ee4bc0e662b629638a8995c46"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "8db14ea224748afaf78640a726938b83"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "3d0368f5a9a4bd6ee15696f59246c98b"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "7361207df1e386d4edc4a3eed111d25f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "146556e1d176c2baa4896d797bfe74b1"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "099e031528953314327610ac1a1f293b"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "6984603bf8d4e3a16915105570d944cb"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "3f533bada5590495f0be1e87eb631bf8"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "64373f3a1cd39f733e341e1a622b0923"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9a73553de4d8844e61cec28a0b3b37d4"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "fde8dc266cfe3792a74d4d758fb3375f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fca7b400b6eede68fbc9f452aee38c9a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "4cfbf7318a3af934c47d5f026466629d"
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
