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
    "revision": "af997afb64d11b19d877d62a2388ed8f"
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
    "url": "assets/js/11.78830bcf.js",
    "revision": "9e9c8f4ec73f55ca16f4e66a228ad422"
  },
  {
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.bd48ab19.js",
    "revision": "cb6df97cd5b40ba3a85e3aab8e7ef44d"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.9a2c84bd.js",
    "revision": "285788547b9886dcedf18a643e813328"
  },
  {
    "url": "assets/js/17.9e7d7d6a.js",
    "revision": "ece0878583b55d6547566d276bdbc6ec"
  },
  {
    "url": "assets/js/18.bd684d88.js",
    "revision": "fe676daa7260bb52d6e5e028a4284b66"
  },
  {
    "url": "assets/js/19.5eeca3ec.js",
    "revision": "6fbbad834cebff4792b2622120c0467f"
  },
  {
    "url": "assets/js/20.28c770f3.js",
    "revision": "2b3d715c6eb4804b9cbd01c8c4c460b3"
  },
  {
    "url": "assets/js/21.bfe94257.js",
    "revision": "b1083620f6bf548a94749648af654f0b"
  },
  {
    "url": "assets/js/22.c93fdad0.js",
    "revision": "62814a21ad3f1582ca5de5e412b1f283"
  },
  {
    "url": "assets/js/23.c8a44e3a.js",
    "revision": "9b1d11e2abd4a64e82f0ab6c2b2bbc86"
  },
  {
    "url": "assets/js/24.f868ca01.js",
    "revision": "37a0ab4076454a79b73b9368bf98962c"
  },
  {
    "url": "assets/js/25.c27a710d.js",
    "revision": "1bb8071d502a6ea65ecbb10c19e9b3a5"
  },
  {
    "url": "assets/js/26.da474bbd.js",
    "revision": "ea9aa3b5b2e8a636cb258342874cf572"
  },
  {
    "url": "assets/js/27.9bdf26dd.js",
    "revision": "0752a76a3e7319499b937d8227f7d500"
  },
  {
    "url": "assets/js/28.7443a2fa.js",
    "revision": "0891bd39dedca6f4259fd5cf2a02b3aa"
  },
  {
    "url": "assets/js/29.0a69699b.js",
    "revision": "10662871002a46f497a274f32e069655"
  },
  {
    "url": "assets/js/30.8da61401.js",
    "revision": "cbee7c3785462935e3f62991f5bb9b16"
  },
  {
    "url": "assets/js/31.7df9051e.js",
    "revision": "31ee428e423c7f0c0b8b73831cb434d0"
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
    "url": "assets/js/app.9eb96d9c.js",
    "revision": "e582ea435876b74eeb56067245947448"
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
    "revision": "a37ce38ae90cabcc798fdfcc814dec07"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c1f01969c96d703f8064190e729b4709"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "93f1aab4e8ffc32bf8528720fe15ebff"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9a417ba51b09330f2cea66aa203d8df4"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6a5da7ac64f7b86de98209ac57bc62d7"
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
    "revision": "c27ee13278726e54d3817e7a76f180fc"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c468fde985fdcaaa982e40b3176d00f9"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "1b7417d37157031c3c3e1554bc85ce48"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "599499f7f03c50dd52318987caf7fb3b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "02d8b7e08d8692fc1a413421f8e03a09"
  },
  {
    "url": "tags/http/index.html",
    "revision": "6f2c1ec28ef0fc2ce4c9ea7d87c84848"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "d60175dece7586637ba6718eb8c68e14"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5a5035972e7ccad5f3df458d7bc97736"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c8b70be63057b11056014702d996ec0a"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "345eb6098b7825f9f8148ae08428a8d1"
  },
  {
    "url": "tags/react/index.html",
    "revision": "69af84b6c5aaaa5e65827e965aa494bd"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "49a5ba08f2a2d293d540c1a214481e04"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "8756ef9f454672f4297d8acada5f9f34"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e8da8d91b3a15e16a1ac52e4930756e3"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "3435b19d6577518917465ba6b2d3ed77"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "debcdffd0e6bd2b87f42d5bb2a4c4236"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "64f134ce8670e78443e48723729511ba"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "70a71c916a530a9a3300118f0cf90119"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b6128d7b07ccf5dff231aa92d68f46b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "11ad2d17fb098fe0ce5bea4934dfc0f5"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "8c257ab290e1632faf247814360481d6"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "899b338c720758bdfa604af76ee96456"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "ff527ec09b8ca06f9daf4cfaea84d775"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "4ad593aed8af798eabbbeb92abb65008"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "02e8b03ba84f651d009a95e4d580777b"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "470e92523bce34a5fc804c8c92d3eb91"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "5c4802f80e2a79ae8ef05d44693a53e8"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "bf34261adcdb6e1fcb303483ec628d71"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "baf158aa1f84ac00699550636f748149"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "a44ae4654203e1cf3fcce0be9b928a28"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "5fb376b39bbed1d037631bb9c664f7d4"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "8ef7e0b984b772d2ddcc8fb3e56718a1"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "0f25c54af85a6be7beedcd6debbadc84"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5323d2465c2d280175e04375839b3246"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "adcb46dd02af94e91757afe597b5d6d3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bd8f042f62662319b7a0742c208f06fb"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d36196fc990b2c6aa3326be18a26507c"
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
