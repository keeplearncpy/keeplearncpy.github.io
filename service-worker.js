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
    "revision": "a8d4a16bc76351044ec335b258bc05d1"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.059ae5ae.js",
    "revision": "f9bd841b2e5dce7605d539c757a49bc4"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.9a2c84bd.js",
    "revision": "285788547b9886dcedf18a643e813328"
  },
  {
    "url": "assets/js/17.6058d5f5.js",
    "revision": "d8ddf90d70ae69a2f7268f939caea245"
  },
  {
    "url": "assets/js/18.68138f3f.js",
    "revision": "83b35e5a346e0531603ad3c377579329"
  },
  {
    "url": "assets/js/19.45267743.js",
    "revision": "e6cf14b307a6a1f2765edf7f21baf38a"
  },
  {
    "url": "assets/js/20.6a119650.js",
    "revision": "6436fbc621507fe498ebb970eca7aeac"
  },
  {
    "url": "assets/js/21.0c91be1b.js",
    "revision": "d06f4493852fe4b5d1a4b50bf5b31d0f"
  },
  {
    "url": "assets/js/22.db1ae101.js",
    "revision": "413ea54a7a1f8f059d8418a5b86a5556"
  },
  {
    "url": "assets/js/23.25f379ee.js",
    "revision": "a20570058d1106269d3c7204d3217dbc"
  },
  {
    "url": "assets/js/24.5fd1094c.js",
    "revision": "c0bd6c063d6b6829f33edeeabf425ccf"
  },
  {
    "url": "assets/js/25.e521b6fd.js",
    "revision": "0fa677d656f8db29cf90f57278f83cc0"
  },
  {
    "url": "assets/js/26.1133a090.js",
    "revision": "812462bbca086406c37b7da45ae6b381"
  },
  {
    "url": "assets/js/27.7bb1760e.js",
    "revision": "c61c9b88376174e2c630d1686636547e"
  },
  {
    "url": "assets/js/28.55771668.js",
    "revision": "3a1b75e3cfdee71d75fa166b2e2b7890"
  },
  {
    "url": "assets/js/29.108d7263.js",
    "revision": "18165720b73049101ca1b4cd5ada905c"
  },
  {
    "url": "assets/js/30.c0cbf137.js",
    "revision": "a51d9702588b8b8491c5e9b1e987f827"
  },
  {
    "url": "assets/js/31.502bdcfa.js",
    "revision": "237b521d7abd751044db7fb7f6752f7b"
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
    "url": "assets/js/app.fd47d62f.js",
    "revision": "300b75f918c0e6849122f63ca7f144e4"
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
    "revision": "adc3895e7cff4a7a3df9681dffeef69a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7f03892f00a8d22e1249d127047d576c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5e85d8ff1ceda1d4ff7c7cad45267c46"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9f8ac18fd5027a0b56a5f981dc2a2f41"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "d014b5dd5699352c47d7206f7bf840c1"
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
    "revision": "48934c5fecbf9e4f286f65eb5419cdd3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9e02c9b1a17556ad806974011ade99a3"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e7af96fcb921a0c116a5bbc7c3d85f7f"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "e6b8058f6cb3ec6d1d993f865d9a33f0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2a3c2dea9bdcbba4c7ec626b72c9e6eb"
  },
  {
    "url": "tags/http/index.html",
    "revision": "f8a47a6888bf56ed0b0c07a9a46ed90c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5e61a92abeccf842fc184da39ad95611"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "eee82af3bd690c10884be769acd18c49"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9813d467eff20bd3fb12ae81875b595f"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "e92a46d2e97bd3068ac9a9f19d7302b7"
  },
  {
    "url": "tags/react/index.html",
    "revision": "d7fe36022b2315fb5a82c8ffe00e42c4"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "1610ae59284eca6d434bbbfb162052b4"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "005e83756df282a24a0cca655791a685"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e2ff6909eacb03d4ffe9caa2fe47996b"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "d1f82ba1077bb2ef9025befc75945363"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "4fac147ea444145c7381cd3665a01ae1"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "5ace3a680ba1a2f7289eac9cddccd6bb"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "09199de99b920edf11d3b288d7bb903d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5090a7f3db778eb38c0888906e08ef46"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "08668230b9b309199d2971fd88d90139"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "da6557e724a7c8facd2e7f835c2d5b63"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "4bd18f4de6bb396609fa0f013b9ace49"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "e5cbc1c3470289247ed9d0fc14592fc1"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "91ab7c05d573285010fddf865cb63233"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "405255c9c20cae3537df0b163dfc66e9"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "fb25d38ae4ddc569a2620ac042c93413"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "2205b94e7630189676ea9ad577e2e504"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7ff705999e2ba7ff6bdfb9bf4e5aa61d"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "c5e4d3c431d25737982b34b3e0938521"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "f12007cea71d46c822aa8375694a485e"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "05d75e7b46bc3a24216eb5c168b206a5"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "0931f3b5a25a751aee8de0946a8201a2"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "95df587970d34b1b15626a460dccb04c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2373456ea24f99561e501f5a0b7e2bc6"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "3d69e6bbadca3b9672fff76576e7491e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "11edfef2375658f5f0669746451a5603"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "06f4f6eeb3513dd1889928bf8af03143"
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
