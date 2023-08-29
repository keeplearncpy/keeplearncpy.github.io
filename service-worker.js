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
    "revision": "8180dfa7639aea0fa37000c58b81e6fa"
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
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.c65845af.js",
    "revision": "487307bfd37902ffe53b87fdc98df494"
  },
  {
    "url": "assets/js/18.f745f921.js",
    "revision": "9e7f69a56c2429ed7ab51effa387adcf"
  },
  {
    "url": "assets/js/19.166cfcbb.js",
    "revision": "ad2ce7e771d34b9fa1b879d35bdd3773"
  },
  {
    "url": "assets/js/20.870cd892.js",
    "revision": "b045522d9f6f235c895afd1ea3231bde"
  },
  {
    "url": "assets/js/21.70515407.js",
    "revision": "a829788e02b921bea53ef8101485d1c9"
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
    "url": "assets/js/24.4a4d351f.js",
    "revision": "61a4ba4d93351aee0a591572a1113cda"
  },
  {
    "url": "assets/js/25.e75ed202.js",
    "revision": "bf2d2d3a3854f7c4f00e85a27227f782"
  },
  {
    "url": "assets/js/26.e1477472.js",
    "revision": "d8682a045b40519ca4dc7cbeb8971aa9"
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
    "url": "assets/js/30.457230b7.js",
    "revision": "ff2015e464f307e7d1ebe6659c3982ca"
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
    "url": "assets/js/app.b104a4c8.js",
    "revision": "393698ea1d6c24d2e8834d44c39e0ccd"
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
    "revision": "9645889dd9c74fe9bbeb1980167630d4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "196ea4eb32a3230877ee6e9d99ca90a1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a2d942d2caa92a61a557a080f42e2567"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "fe4480c07336288c9aa63276258faf45"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "009cc6ca7bd55b2d1431aabf8531c6fe"
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
    "revision": "6a3598f4bf51b7133f6c69fe4f830dc6"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "727469146ea79e2cf7d306c0523a92bf"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "479a6e6e3be84e0a8fd239fcf90de81a"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "9b0f8d530898a84fe1b694e9edb28f24"
  },
  {
    "url": "tags/git/index.html",
    "revision": "79cc9da9d544e2ed1acce5765b5cba88"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b1e9a63d3f946a1006816281e7eccbc3"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "57a95086f2f1349551ee9662a4b245ae"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c4fe41bd6e4d9b2b535795893844fe27"
  },
  {
    "url": "tags/js/index.html",
    "revision": "29c2ed607a814e884f1c0d0b01e389bb"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "5963b362cf34d665011e7da0c9493d14"
  },
  {
    "url": "tags/react/index.html",
    "revision": "dd93497dda5074f9bac833c0bc98f4c0"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "cecbb7c1720babcaab8ca8ed5c424085"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "b5c1cdea7bd9ea3c10dee11554af5dda"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b79d213cc037938e6409f7591f3a5047"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "4302cdd512e6324a8eaaf66ea86fd4da"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "b5ec3ce6af322d323a620ae36e44f0b1"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "0009d3c6b48257924f9c749f42fd8909"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f8c12738510f96b86452322be869d4d2"
  },
  {
    "url": "timeline/index.html",
    "revision": "01bd636e27265f2b93cf120827f0a262"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "8b1e61c0ffab2f06e758fc8d982cdc44"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "53c13cb17e5352071c519c8ae10443e5"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "be0c1a94cc7d97a53732dc6bf34b9ded"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "e0a94c19e3eae9d85a42425d80375c66"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "4e8bc5e9009a34aa5952400c6d7e6bcd"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "b4a22e7dff689e2ac1b6aecf844759bf"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "a820edf37e4811515fd019f348f85821"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "932b6518c47dde66f7331e23ba500b2d"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "66622cc9a11cb9d57470dd9ca3ffe0d1"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "dc71fc704242153f61379bcd828a99ae"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "e7d720bb98986e4664973c05a9017e0a"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "fa338ea4840798bc7f0d4a137b6278b7"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "092284c55c0a42f2ffea7a3d007ca816"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "4521e4ddddc2046614459812925c3705"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d6f18804e73ff36aa0a5bf26d841a4b7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "677d954080aa26ca1f4a29cdd762f8a4"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "8edc88fb398b88f1eed5ee6fe53dcd80"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6b9873b3f80a2a32ce8fc821000bdb66"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "2e6c36be0254e0c6c6fd6bae8e76f637"
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
