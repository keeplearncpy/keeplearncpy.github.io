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
    "revision": "3c0c996c66e93d1e95f06df198b79aa2"
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
    "url": "assets/js/11.475c96ec.js",
    "revision": "ac695fff3c0b007e74932f04f75873dc"
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
    "url": "assets/js/14.9412d05b.js",
    "revision": "635ac14570f018ed1a94984bf1eafc07"
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
    "url": "assets/js/17.a8985cd7.js",
    "revision": "02ecb456eb2ad3d6c227433bf45e6187"
  },
  {
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
  },
  {
    "url": "assets/js/19.2e8599bc.js",
    "revision": "9eb84b708727145d89f5fc1712e34b06"
  },
  {
    "url": "assets/js/20.b4a9beba.js",
    "revision": "8ec823f78a3311b9e3d72c958200ab94"
  },
  {
    "url": "assets/js/21.14dcf480.js",
    "revision": "db50a1ca700d1e8530fa3593ef6b4209"
  },
  {
    "url": "assets/js/22.e6c5ed29.js",
    "revision": "65f72f9628bc0326eaf9c9666ad034be"
  },
  {
    "url": "assets/js/23.42c54aa0.js",
    "revision": "83e64e353c62688e8d7e871b066d09f9"
  },
  {
    "url": "assets/js/24.3f6972a2.js",
    "revision": "6889985c30f7358796425544d8937f9b"
  },
  {
    "url": "assets/js/25.8ac9264c.js",
    "revision": "43cdb994c05f18dd8060eddbc823a198"
  },
  {
    "url": "assets/js/26.521754e2.js",
    "revision": "703534d76d5daa2dc6617ffa437b3230"
  },
  {
    "url": "assets/js/27.3d29b550.js",
    "revision": "98481cce17ce692d96d2f2218cd8166f"
  },
  {
    "url": "assets/js/28.7acfe2a0.js",
    "revision": "95d1d0f547ad158026edebb389c1d5ad"
  },
  {
    "url": "assets/js/29.0d8f2a14.js",
    "revision": "0ec2ea400316d78ac2a1245af98f0f49"
  },
  {
    "url": "assets/js/30.884a8ecc.js",
    "revision": "e1d7ed6098288651ad43def3a80d0730"
  },
  {
    "url": "assets/js/31.761c7ad2.js",
    "revision": "46b029ed0d041107edcbfe2a0309416c"
  },
  {
    "url": "assets/js/32.72dacabb.js",
    "revision": "2726ca548eb926cff5be55b524e2e478"
  },
  {
    "url": "assets/js/33.07519cdc.js",
    "revision": "6c488bf49d2ce82067866008af576846"
  },
  {
    "url": "assets/js/34.23430798.js",
    "revision": "1b5969da272ef9fb9e259d6cb6e3d45d"
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
    "url": "assets/js/app.dde9bf1c.js",
    "revision": "2a0a9be2937954d05137ee775bc3e94b"
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
    "revision": "66101cd020e1698df831c3339d4f38a7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0c1d8fdb8c0b3a5c510968d78fe36b8f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0e770fc134ab897375a3c1ee24b3fe88"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "113ed64f3b91b49436a520be3a942836"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e149cb6e6a7c2a24cf215c2c1a650ce5"
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
    "revision": "783e4b5d1cfa9ab5dbc995d98f8601b1"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b6f98d599c4e5cb49ef0bc94f1d03ea2"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "cd465d17ef517dc1b2a0a889ff6eeca2"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "62c02da736cbce34e9a52e4ef9c5fd74"
  },
  {
    "url": "tags/git/index.html",
    "revision": "fcf34c5da7f648c3f8cf6ac75779c065"
  },
  {
    "url": "tags/http/index.html",
    "revision": "6270903fd5b7d1534990ef3796b3f4fb"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "c2bc96f94c2c32f5af7f605c69e11bcc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "211b31a263be69b19be1926c3a38d6a9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ddbd8a9fab16217bbabe0cb71bf6be14"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "92abcec0ff33e4f58b4a8f87d3cc7628"
  },
  {
    "url": "tags/react/index.html",
    "revision": "3c8ebaa35ed18aef3c84ac6abbcbd308"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "61ba4889141a797d516d242bf0784fa7"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "181de51fee8607b62b2dcba7fa3e8b2a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ec7c2f5b885eccb2f7f40e2f259d61a8"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "84f7073d8c30de75601afd6ee9426e24"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "8bc34f040973544be6a97e40989533e4"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "7687662d7fac306ab664c1644a514fd3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "296ac6eb2db90b193d3b51831a98306a"
  },
  {
    "url": "timeline/index.html",
    "revision": "91fdfefbbb0c2f7fa620a193c91e9fa1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "5eeeb76a89a70457d3d7e41a974e1932"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "c9bd41f3d2c892cd30e29bb63005b6c2"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "245ce45a7e818aeb501678a24700d6bd"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "4831610da69cac6fbf76cc17187d501a"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "8d5e83445f380b0ff32f82939daf2c39"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "786c14b854c6f3ec5ce127c32c51d2b2"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "d9d7e0c01382622ec451862d61334c17"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "3772bcd172e21aa4aa0399c722ece3bf"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "50a378746fae21d11c5e7fab0ad90651"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "ec1bb3566395e72114cf68105bb79c80"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "d285b33feecbc673f65d9aa4b696b238"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "b5d543839af1849b6b68a5747c6dd53f"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "abc1bf159cb1c7d7e143cef3dd13861b"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "db75b013966d191fb7954cb76d452221"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "f2847e0d9bdcfdb14b93b687598fcf4b"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "48acc442784151cdade1d091b2797b13"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "51a51cd13673b3b443942c3ad869e8cd"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2d80001e0e7fd95949d02f05db3473d2"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "029c1f1f3458a8f583ebb212f4ed02ba"
  },
  {
    "url": "生活分享/life.html",
    "revision": "116b2ff63158fb711937ae0a55d9d38d"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f58ac84905fa05077e0429b5660e790d"
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
