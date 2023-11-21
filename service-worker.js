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
    "revision": "93ee5e160b910232356ed2e13156b584"
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
    "url": "assets/js/11.d6fd15e8.js",
    "revision": "8ed198e4df1f96821999eaabde87bc3c"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.329ac30e.js",
    "revision": "7d64fb0a95a3b3a986649dd320d29a4d"
  },
  {
    "url": "assets/js/14.70f0dd13.js",
    "revision": "d442013fb0a6f6d6435c0232b6ed6c77"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.02b4b513.js",
    "revision": "62a124da7e15423a7fe6754fb0484bc9"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.4a8d0c1b.js",
    "revision": "c9d963387f9a2ad590b8eff298c6d43b"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.9db70f02.js",
    "revision": "4f503faa00c2ac458dfb202de48787b9"
  },
  {
    "url": "assets/js/24.6b877dce.js",
    "revision": "8802fc28baf3d7b89d4a28f3fe4779bf"
  },
  {
    "url": "assets/js/25.e1cea6b7.js",
    "revision": "abfbb9d2d7a5d722391f990c889c9a80"
  },
  {
    "url": "assets/js/26.9536dfd0.js",
    "revision": "1661f71a82662ce714578549700ae653"
  },
  {
    "url": "assets/js/27.740a98e1.js",
    "revision": "76625dbc4d38098f5faa0baba7362be5"
  },
  {
    "url": "assets/js/28.fe41ccea.js",
    "revision": "89c70044f653793c93eb2480c9cb7809"
  },
  {
    "url": "assets/js/29.82b4bcb9.js",
    "revision": "4086473b677cd61042b93aa739a57d37"
  },
  {
    "url": "assets/js/30.004d8755.js",
    "revision": "023d56471cef0afdac6af2c2c27e13ec"
  },
  {
    "url": "assets/js/31.dc565286.js",
    "revision": "eaa3c9a566ebdc8819fef7ff06455823"
  },
  {
    "url": "assets/js/32.6c10328f.js",
    "revision": "db1d96d7c2db66900edd9d83c80f0a12"
  },
  {
    "url": "assets/js/33.999e72c6.js",
    "revision": "8946cb8a6a81b91c88d06157dd535c5f"
  },
  {
    "url": "assets/js/34.4dfd904a.js",
    "revision": "fb3bc2f0b1033782c1ef4bbf4bbe87ca"
  },
  {
    "url": "assets/js/35.71d5f06f.js",
    "revision": "65782d2d8dd51ca7d29bc80933cbe60f"
  },
  {
    "url": "assets/js/36.0176a407.js",
    "revision": "7f34aab746180b38de39b3976eae253a"
  },
  {
    "url": "assets/js/37.156fe2cc.js",
    "revision": "a277294d9adff460c8f7ab60cb7287a6"
  },
  {
    "url": "assets/js/38.1d4f598a.js",
    "revision": "855f7d4bc0e631437aaa4e8d71c0f8ed"
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
    "url": "assets/js/app.998b753e.js",
    "revision": "1154267e6f7be9cbf91dac8a3bce54e1"
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
    "revision": "85106e90e5083a0a9c9eb09e42f98ff9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b8ccbb31d11f81c109c1df30c05e0e59"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a327962df7c458c766791fbd8cef6daf"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "29df1a29babbe137d158d0aee44cd8e5"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "10abe38cec3de70ab998d0aa72d2c6da"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "6a846c5e59dc0d6f7a2d74a39e013ccc"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c21030880bbdd7e005e0ff9eb2b63091"
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
    "revision": "90399e5b88ae734fb1d2b4453d498048"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "26a527d09f143d24513e8c9cf2b4076b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "a72b88b68dc013bf4bfe365e81c150f6"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "7ee763acaa53de05cd30eba5946eb1ae"
  },
  {
    "url": "tags/git/index.html",
    "revision": "88b192f52aa7d2eed7fbf23c428d36c4"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "989cc96515aff5f84141737b6f349aaf"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b1ed000df778f43cb2a59abc4c13e187"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "0e39014c817c34b9cde131fa6aa42a08"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4b639d8ee902280fde3a93fd2b190677"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d40c309d4246f9cddbdf64d341f0fc8b"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "68bba55d6a74aa3d13cec4728c673df5"
  },
  {
    "url": "tags/react/index.html",
    "revision": "a0fa1ee63b8cb565d3a759c8cf68fd8c"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "19eae43c8afafe61b6d1584ef60c8798"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "9d8451e37d39391b02777e43e9a284cd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b09a1374519586e568a6d944e540eacc"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "d6fe049f14f1855f863aff78043985ca"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "f9b57e6510ef72f66111a0663648fa1c"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "743c22e5f8a33d1f8e7d42555a234c92"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e8c0573bd0f6571d2d212ce9d5aa2fe8"
  },
  {
    "url": "timeline/index.html",
    "revision": "32be2b7064a88acbcc10358de54b24b6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "9236b106586708bcf31cdfa81a47d14d"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "aa46e3646edcea726dad540e7aa7ee24"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "31dd28ceca593ad057c0cbaa4745edd4"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "5c6dd2551d07a4dae6352bdf8d91927d"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "b1a30fd10917520840408e0625b5215c"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "95fe4fc06dca4ac09f5a00b1e542b980"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "3fbd0d43eec0a41063ebd675fce71e1b"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "4852dfcbc971466c3195c5c7c3ea4530"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "d8cc22d954ab6b1de2a9e3914c35b0fb"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "ca14c7d404c023cd0aaeed946ead02b6"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "7d8c670cbf9d435b0b04e2d86f6efc37"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "73d56a45856b4d4021ca5df1743c82d5"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "1a0ed61b7a33b8664cd66cd997540622"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "e8ad22c4259a33a50bd1e1950143fa03"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "a14c0531ca35576696cbca1811ca01d3"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "5037dbe19e1954a6f56b5a4d78078aab"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "e52bf93ae2c33878ac7d850aa841c479"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "47fbb134f5768c39121facbaeb8839e8"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "ef13ff3936111353953c8c49b64ec0a8"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "5efd8d3303c2332cebcb6a8bb3658664"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4c2360573c6e799cea5542683299a593"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "8f8bd84775fd64df5eee2a6d6b9779a3"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "3efc368d960415fd15f40d1606e67d93"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2ba1b3a2766756d0a7a95027eef9bd69"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "2ef35228ce2c711c32b930875c78e67a"
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
