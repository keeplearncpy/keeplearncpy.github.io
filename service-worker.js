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
    "revision": "71e8211783fe58c0ce05af0a88e29de8"
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
    "url": "assets/js/1.1a88221e.js",
    "revision": "f88db81f1490c1bf9cb1954ef5a22916"
  },
  {
    "url": "assets/js/10.a468ed7f.js",
    "revision": "8bcaa1892a23d47b3f994db3e4d51977"
  },
  {
    "url": "assets/js/11.0799c84b.js",
    "revision": "43e5331f8e1bb6a8974a5221b40ba63f"
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
    "url": "assets/js/14.ee601bd2.js",
    "revision": "1683403b7a4c2320b0f8c8200bbffe41"
  },
  {
    "url": "assets/js/15.056eb836.js",
    "revision": "bc106d30554b37591dac8527f5c10585"
  },
  {
    "url": "assets/js/16.212249f0.js",
    "revision": "bb96e172f78a30953fc1463bc279450a"
  },
  {
    "url": "assets/js/17.73534216.js",
    "revision": "8ce093a2bcbd9c02c67035c8dfe943fa"
  },
  {
    "url": "assets/js/18.7ac493fd.js",
    "revision": "06b4ef2545eabbb4481c50f4998767c5"
  },
  {
    "url": "assets/js/19.dcb12a29.js",
    "revision": "cf7f0ec8491133422b2b05b0c8286a44"
  },
  {
    "url": "assets/js/20.4abecf78.js",
    "revision": "39716f5563cfcf2eed61f47df713c564"
  },
  {
    "url": "assets/js/21.ecd39396.js",
    "revision": "e10414b0e9066b0e97558907da5e9f0d"
  },
  {
    "url": "assets/js/22.cef330bb.js",
    "revision": "ac0f970602da29ade92384aaae8c66b6"
  },
  {
    "url": "assets/js/23.7393c509.js",
    "revision": "613f14fd946233f59316befefe8cb930"
  },
  {
    "url": "assets/js/24.4bfcee21.js",
    "revision": "cda50c66b99ca45ceedeef0f9039f315"
  },
  {
    "url": "assets/js/25.699228e5.js",
    "revision": "0940ed422ecbbd85a9866b5597942f1f"
  },
  {
    "url": "assets/js/4.7af5a2ff.js",
    "revision": "425554c71d0bdeacfc25daedc82b0b99"
  },
  {
    "url": "assets/js/5.c1b8624d.js",
    "revision": "51d33e4c276087a7e2ac7abfab778b34"
  },
  {
    "url": "assets/js/6.03b5b6fc.js",
    "revision": "6b9ba3f44dc5852be04a599f22613d89"
  },
  {
    "url": "assets/js/7.945ae8bb.js",
    "revision": "b445eb400fe2d79b6c30b3e4b25da19e"
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
    "url": "assets/js/app.6437bd99.js",
    "revision": "fad5eef2fc361ff117063a9a288e319f"
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
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "ed3c297549009e399cd80e799d2a2e76"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "95980cefd5b186a320468495ef0cdc7d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a2299371d98ebb740cef43e9c4bbec4e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "48294abf51db5af07f9a2104eef538b5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f5690f804477f1ec4fc18e1e64d77edc"
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
    "revision": "40673ab8aca9b4395a4b904d15202b6e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3401f2670676ba28b81769f9bc12aa18"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "832edc115cc581c01654a73c6f2ecd5a"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "f3f9f0f2ae81e2283b1e9eaec5875c84"
  },
  {
    "url": "tags/git/index.html",
    "revision": "dbeaf1ab87acb8dbaec1a558cdff8530"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e2c332e70188dd95cfdf4fba601bbe1d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ab215e32bd318a1543841d7bdbefd6fb"
  },
  {
    "url": "tags/react/index.html",
    "revision": "c5a0f960e92ae510285947f0450e9cc4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5663974863b9b010eb2874dcfc468bfa"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9fa0022844ddbb6fb6a44971943872d8"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9184ac5bbb30ee27a74e537653d00af2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b9e946050e375920f77fa443439e1693"
  },
  {
    "url": "timeline/index.html",
    "revision": "21ce25ea7aa2e2127ce83f7807ea4e39"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "e83bf7a5db83eefb1da9afe99bf24060"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "3af380bfa2b593f957dd02175c772d5b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "a00b8a29bdac30d30471759afbabfb7b"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "e54ff235e715c62a70248da4254b6703"
  },
  {
    "url": "技术文章/http/httpo1.html",
    "revision": "f1c19525a86a85dc34b19e6ec995cb7e"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c1b9793a8afad8808222b06464d78940"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "af5c21485c96161ec1443c16241ca5c4"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "bc36bc10ebb50fbeac0fb2dcebcf3052"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "c6ab44b7243158ad0755f699622b9e73"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "002cffef73b74b8e4c8615f3d0f9c1c1"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a4d5873264eaf6cb110d70054ea99403"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f7fb7906e4794fbdea333b54aeeec5d6"
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
