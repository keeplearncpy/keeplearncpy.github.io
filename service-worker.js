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
    "revision": "1e21d3942958102236b004381a19f4f0"
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
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.0389f4ad.js",
    "revision": "7deefef1483822ce7d568d229df1f65d"
  },
  {
    "url": "assets/js/16.fe7c245b.js",
    "revision": "5e174ccd958e84cc3b2242c0a4eca998"
  },
  {
    "url": "assets/js/17.1b8ef2f0.js",
    "revision": "466beabe30de7cd383b513109ab4ee5d"
  },
  {
    "url": "assets/js/18.d8b208cb.js",
    "revision": "a54cf1e29309ed8868ce5c515e9cc516"
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
    "url": "assets/js/21.501150c3.js",
    "revision": "f89a609bc8ea542da67e8254ccd28fac"
  },
  {
    "url": "assets/js/22.56f6590f.js",
    "revision": "465ca35567b20376634318db20f7c5d3"
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
    "url": "assets/js/27.3ead34f7.js",
    "revision": "1588ee0d9a6b93328848290c2798df54"
  },
  {
    "url": "assets/js/28.fbdfa525.js",
    "revision": "a3c0dcf5f55c97e7b9321c1005537304"
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
    "url": "assets/js/app.a85468a2.js",
    "revision": "f610bca5a218c1d1955e2fd0b2a079a3"
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
    "revision": "4200a82fce648e98ed4291da30f1f6d9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "82c355b5f9dec142038ed15f9370a767"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3676ad6bd1fdbb2d58c3007bde6181e5"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "117366ec3800fd259458256f8939c712"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "07bc75aacb5a36f22a70d53e78d30cb9"
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
    "revision": "7e019e6cc93c987effd17a3975e6d05a"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f36652a4430650b4e1834d6fbbe4d0e7"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "66f444b104bd0360ce2aa14f47533977"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "a60173f679fa63b76637e69b93995f1a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "07c21dc13214512bdb770d65fda6dc4f"
  },
  {
    "url": "tags/http/index.html",
    "revision": "121f50cfdb65d6f6a3998e7eb5b5e8d6"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "31660ee70ca609f93405dab6da4ab6a8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "86caf2199f3023310de6dbcdc07f6575"
  },
  {
    "url": "tags/js/index.html",
    "revision": "cb880b9450a0e539452dc77e4456a263"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "37a4c7f008ce78c0312422cc9e78b440"
  },
  {
    "url": "tags/react/index.html",
    "revision": "f9e1dcc970fb742c41234a9b64db2186"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "5dbbe0184b8b226fe8ac78d5ec39867b"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "123bd18a8922fe417d1719a3249c6bf4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "79f7bf7adc29e8d60d652ce9c2469387"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "8fd8c254a68148089530a2443414d008"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "46e79426162bf6b390571a68dae3f790"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "827e7d5d14f80bc18aabaa31ee70bf64"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bd08d128a7319b624acd99034d0e136b"
  },
  {
    "url": "timeline/index.html",
    "revision": "e4e014e70471fe985f8ab0f918789588"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "f933cd2731b707926f040d2419d099be"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "4ed687648cd68dc1fa4ff36550189f39"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "c9c88fd25aabfa831ac6863585236b04"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "16742b883569098ff92a59f1e2326b28"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "3cc4b3bbae21d60d8d5b392c15d68b53"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "53343df9568ae3c3e51452f6d7e71e86"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "0a6ccedbeab672f55d1afea2994d8011"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "0aa134a6400da5dd384b542a7752d576"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "4be821c06a97291829214238dd217b95"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "bb6ca231df00f66df5ca6e73d7c0c7bd"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "9b4fd490717be57a682a84e9aecffb4a"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "85e9e7f5d7e2986803775c32d419e55b"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "fb881c0b37670b71696a469caf1d6894"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "2c5c12b86e8238230f3e9443aef884c8"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "cd383a19c41c7638362f5ab2b5ac10a8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "df90dcd3beba756770e8ccec17e84346"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "350b401742370c86c4392cc543d48e91"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f50bb71d1e27299b94b5d0142dec0a2f"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "054de75aa08a74b1f2d309f36b1a7fbd"
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
