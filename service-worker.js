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
    "revision": "091c195eee8b7a470607f4b1a8c0a671"
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
    "url": "assets/js/14.a99effd4.js",
    "revision": "d182765bab4f5924c9c0455095ab029d"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.7ee00cbf.js",
    "revision": "bd410b1c532217bc0991c58036214a8c"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.928007ed.js",
    "revision": "9fa1c71a01d1d782c5ce95de037bbc8a"
  },
  {
    "url": "assets/js/19.bd296078.js",
    "revision": "24f20be2746d9c72e48d0caa600b7de6"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.29af875f.js",
    "revision": "6b59cd2613d6b704321cdb081c89f76b"
  },
  {
    "url": "assets/js/22.79f03374.js",
    "revision": "15938accafd4cbc81c137e44a9555699"
  },
  {
    "url": "assets/js/23.48222719.js",
    "revision": "0408770c79f36b7c172c5a668a4d541e"
  },
  {
    "url": "assets/js/24.523ea93e.js",
    "revision": "dd7072ddb6c67fb38a4d49fa77a693cf"
  },
  {
    "url": "assets/js/25.17d74c45.js",
    "revision": "cbf8a83e258247a62ef1ce2be75d4a18"
  },
  {
    "url": "assets/js/26.33e8c203.js",
    "revision": "bef82014c21992655d06dec1d9aebc82"
  },
  {
    "url": "assets/js/27.c66fa2e6.js",
    "revision": "8fae859256d584b914dd215e62a2a0e0"
  },
  {
    "url": "assets/js/28.1e7df271.js",
    "revision": "fd9dc8d3b869a9573b0a28f3e50e60b9"
  },
  {
    "url": "assets/js/29.74b434d7.js",
    "revision": "c920ce90de25e136f35b97e34a0cc09a"
  },
  {
    "url": "assets/js/30.5d80f4e6.js",
    "revision": "1e814feabd745205b259e469a3acf5ee"
  },
  {
    "url": "assets/js/31.bc37455b.js",
    "revision": "c7f1d8d2dd8babc0fc52643e31407b5a"
  },
  {
    "url": "assets/js/32.fdf1bbe3.js",
    "revision": "fb219c494c4346b492f0f810f8aba3c2"
  },
  {
    "url": "assets/js/33.b6e3c087.js",
    "revision": "9350d9ad6d8a5ac5e541fa8a0098476c"
  },
  {
    "url": "assets/js/34.9a1a8e18.js",
    "revision": "845c2ad2c3392714ce7f472477c9025f"
  },
  {
    "url": "assets/js/35.8f5e0842.js",
    "revision": "10cb1aadea15672b9317d6279e183fed"
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
    "url": "assets/js/app.23ccf18e.js",
    "revision": "8c6fdd911c6371958b9a4a2b3d0da9ca"
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
    "revision": "0e35f7254c26c2a80804db12432b14c5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c310bb89190d093c7193e40225c936c3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c19c069f727d2cf173fce30ebc2dce15"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e2928bbdd89638e961e34ef79ae9563a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d091ee751a9d79fda9bc5aff3d3bf82c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "582f444e2e6b3cbd678cdd39c8bdecde"
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
    "revision": "3e377c6b1301c1cdd7aad3eff4c0d364"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "cc4f399a516b6c2bcbb89ab7abbe36ef"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "6142a9038e83b4caa0867ad3fc602351"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "5eb440a246e52ecb4691a1f3d15d3a00"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c6a38613904270ac593d1c838f0b92d4"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "ccaa0b0869e65b31088fa168cd7f48b2"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b2a9aad01492a95459766301411ad828"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "81ae1ed7d7204b55301c7a4764952f72"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "dd95b26617228b271ef22aaf2b532282"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ca23fceb1f435d9558a82d964e0864f1"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "94c99ed85c880c1b031d86971f7c18dd"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0cb679b9558b46fe8fad0f1f16bdcb6c"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "4348d119ca7a523f3b2803e5770792cb"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "71b3a078a8a4ee84ff39715c74aa3dca"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3b285a8b470350ca8fe545c14cac8d9c"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "89e0e098b2721fa06882668628ef5a3e"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "ba012a472fc5a1e9d561d2f0a1c2f823"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "8db3411ced360f2d2cc78e8fbda6115a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d7e22835fb457b472f248fe428c4ccff"
  },
  {
    "url": "timeline/index.html",
    "revision": "62faf270ae94ea2315c9a70735fb1c03"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "17514ddb951df0e52e0dd2b9eb153933"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "11c9150787b0fa8b90732cc4ca638865"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "4c7427b14d8a0cc437363410f2ec787e"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "4790abc6526795744bdda0d445bff203"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "8659e9b17b7b3047497a54f7c8bb6d7a"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "7df4627ee7e0eb0dfa4539c9eac4da6d"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "09dbc581bff98725f75229ddd6c83d4d"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "7b81b7adc4302cbaf6ee75e5912b7cb5"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "0be79fe74ebaf489b832f852f504da58"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "ce6edd1d607b926a292022ad18ee230d"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "9c6878447c455fffb445800890b330b5"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "9e3046c1d322adfb0a9d092a585a3345"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "bb576fbc74a6d086a1e92d977486c4fc"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "574e1404ebceacc738dcc4e3ead0d53a"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "caa57b8f28d5b20c160d866c7785d086"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "f9c86738b4411ea867ed9e0aae3a8e22"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "f0f9b13d4305f5820928ccf57c547431"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "7cd67e37445ee2b2e05273805858cef2"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "b84089acf95f4adb6627d022888f4292"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a128eae1d9e78071e564e1b79f075818"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "557a2613f58624364f3c61effb901c17"
  },
  {
    "url": "生活分享/life.html",
    "revision": "be1160dca2c9867962505c2ef41ecb32"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "4a094d18bd36f5fbbab03955b26eda36"
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
