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
    "revision": "77f5bb23bf7ef76985c54644251ffe28"
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
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.a84e1461.js",
    "revision": "db5f56610cd41b9fdb124ccb5553de26"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.42019346.js",
    "revision": "6c9b06b2523788f2f10d9dba502cb85d"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.953747cc.js",
    "revision": "bb8bf7515a9d9347976819f43585af9d"
  },
  {
    "url": "assets/js/24.6b877dce.js",
    "revision": "8802fc28baf3d7b89d4a28f3fe4779bf"
  },
  {
    "url": "assets/js/25.3108d61b.js",
    "revision": "8604f306f3f16b81e160184419b87de1"
  },
  {
    "url": "assets/js/26.ee6477d8.js",
    "revision": "9a743badd8b0ce2bb42f33885a6304de"
  },
  {
    "url": "assets/js/27.070cbaaa.js",
    "revision": "a105a4c3286ad47e5e1d686f2213fa67"
  },
  {
    "url": "assets/js/28.2de2ffb2.js",
    "revision": "6414877f6d74f08be7cd21873464c6ea"
  },
  {
    "url": "assets/js/29.2840da33.js",
    "revision": "3530fa434f9d3489fd5e85fbbcae0c20"
  },
  {
    "url": "assets/js/30.366e1ee2.js",
    "revision": "7345827febcf4b7e6ddc0bd763f54b31"
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
    "url": "assets/js/33.7a9602e2.js",
    "revision": "d5a91bb7aba3e95c2ccc7ecc4b5053ca"
  },
  {
    "url": "assets/js/34.4599eada.js",
    "revision": "e2a6f51392ca4aceb7f092969ce57b96"
  },
  {
    "url": "assets/js/35.efdb2f07.js",
    "revision": "6c712fb65dbb7cc84376f12824fe9350"
  },
  {
    "url": "assets/js/36.85a14100.js",
    "revision": "aa7334aac974eb83a0e80c770ebd76dd"
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
    "url": "assets/js/app.8e28394d.js",
    "revision": "bf4f5359d62167fe53f162255a70f171"
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
    "revision": "e26b98cf1cbde9be2e08c957da1970a1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "beaa15ef39e5144232dcfdc1bf6c0388"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6b21996618eada47e08263975ac56005"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "7bb7667440ffe2472cd5835a7e6cc7de"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "74b226c3f3ba04b785ed0e33d92759b6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4066f0599533c3b01c9d6c67a72cd814"
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
    "revision": "5273536e3fe0846ace5ff088b9c20940"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "cd81a106799e49d57f4d7bac5162f62b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "41a71395977c78b51b51027852ed98ec"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "448da5041bff5c4ca8aaaadff3b9f630"
  },
  {
    "url": "tags/git/index.html",
    "revision": "23987657bb445e3cb516302e8b0b1ba0"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "f102fdd8a117811095519096de3db2a8"
  },
  {
    "url": "tags/http/index.html",
    "revision": "eeb1d84ab659d2cfc20b4079e1fa7395"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8e451a4dbe8ed2c7e52b5ba2e31eecc7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "95bd3ba98b8d1d1e1a90ae4af13f81e0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7e1058a18d9a6b87f873cdaa8d9d4dba"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "c035b50c1ae961d93345305e52f714f4"
  },
  {
    "url": "tags/react/index.html",
    "revision": "2ed43d952baa00f8073709b8936f76e5"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "81c8591fb61388f1c97ccb2367812b10"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "1ce6caf04ebb2af15c6f113edea9f774"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b47a54010b24a6e90d96465d7d9d652b"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "0ad56f179fe02b83da30e75671cc0391"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "876bda5e5686e7de2766d205eae64d5f"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "5f5d95bad51888b6e76ea0d5c1250f7e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "47376af2d397b6f673c929f2d288b30b"
  },
  {
    "url": "timeline/index.html",
    "revision": "f72d0348975213eace861a89d966b993"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "5ed2970ef177555519f7a67bd79683e1"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "d5b1b82156c44c84533caa117287aee5"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "150bd2d503fc2a0c81d4aa68486966c0"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "9847709f5e33006d489cbde70986fc06"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "908301173658c23442e76efd86f77204"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "50978d18a5005ada2d8f834f874b61f9"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "4e481c61646add37c2f650d4a06adbc8"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "9d347968de5e23e9d17d18e3e831d060"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "42182fa958ea73a00f4060879f20eef9"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "1998f16cd323e2efa05df82f40237fe4"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "a9f52cc0c31a9a8689cf6d7e1dbcd683"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "2dfd3a4854163d9e81ae48f40210c6e0"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "1e2c41c867560c5c156b2a549166c9df"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "55ce44db84991f96957e44807b28dfe1"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "5ecb100a79044b567574c7bce3260b04"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "685b78530a9e124dfd3a7750aace65d1"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "f5b153ec0de342b400173c5e52798c55"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "505705c441df5b0127a39fe61187775c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "602202103fd0c35e7e2324324a0d2761"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "152a7384c362ae4daa1436da82728057"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "b12053910610c37390f46c35715e77bf"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3b87898afd7ce22d509f39e2322f4777"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "1e144791712ba8bda7c35ad662a03c97"
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
