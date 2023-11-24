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
    "revision": "cc50cc47b7db7873768b4edc944ff8f2"
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
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.54e58abc.js",
    "revision": "4f7139b2c9d76a163a19b03777eb60a5"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
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
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.ac6a31c3.js",
    "revision": "0c5d5ecbd9ff59981f1738ab5dc0be71"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.779d57a1.js",
    "revision": "88c558328bb9179deeaa87641a86c97b"
  },
  {
    "url": "assets/js/26.d34ef5ac.js",
    "revision": "8c05f10d0f28be7ece2095871d50539f"
  },
  {
    "url": "assets/js/27.740a98e1.js",
    "revision": "76625dbc4d38098f5faa0baba7362be5"
  },
  {
    "url": "assets/js/28.f6879937.js",
    "revision": "77bc41dac6d237ef10fd7c300e162e31"
  },
  {
    "url": "assets/js/29.951101b7.js",
    "revision": "b940e47f7c8b34a3ca3f1f877f3b4b50"
  },
  {
    "url": "assets/js/30.6a946240.js",
    "revision": "9c72c8f3d18d19302fe5bc5b97f28d72"
  },
  {
    "url": "assets/js/31.dc565286.js",
    "revision": "eaa3c9a566ebdc8819fef7ff06455823"
  },
  {
    "url": "assets/js/32.cc39ff9a.js",
    "revision": "3ee6f57fa193217598703b9688c470b2"
  },
  {
    "url": "assets/js/33.99a4f16a.js",
    "revision": "449fe6a7135242b3c3c46c81d9a4f8aa"
  },
  {
    "url": "assets/js/34.c3a3cd0e.js",
    "revision": "5beee4852e3dcb1a44f7aec409408269"
  },
  {
    "url": "assets/js/35.71d5f06f.js",
    "revision": "65782d2d8dd51ca7d29bc80933cbe60f"
  },
  {
    "url": "assets/js/36.1892a224.js",
    "revision": "a795d5de048241cd7e53821cfe2636db"
  },
  {
    "url": "assets/js/37.bb3787c0.js",
    "revision": "557f5485e4368fe58651434db3b18fdc"
  },
  {
    "url": "assets/js/38.8b3cb783.js",
    "revision": "30ff85bcbd714ae4518bf882d03e4982"
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
    "url": "assets/js/app.312b1c00.js",
    "revision": "b14e890c74a69ba211fcf2881ba0cf65"
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
    "revision": "6183ed4c560e7b70ff3140f962aa7bad"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4f5d214456491485dce70d3cab295411"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d983b8dd865a111cfefc69e9b4cedb63"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "f39ba35a2eda6c7a5a5dd1dbd365eb3b"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "55b31be000039cd42a496838967faf7f"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "7aeeafffc0f1caf7506e13d643fafe58"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "153fd238a8c47dbd0d32306f8a0d855b"
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
    "revision": "37c6095bfa6adc35f5d1c30113449c4c"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "bce685a076cf9e5c65f0cb5a3d7988cd"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "5e62049b574220d3ddd57a1bd2d43eb7"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "800f15a00c127c433a8db38e9badaaf3"
  },
  {
    "url": "tags/git/index.html",
    "revision": "386e8052ebfa807aee7d475f5dabfbcf"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "1a26f5fc990cee024ab31c078be337f8"
  },
  {
    "url": "tags/http/index.html",
    "revision": "584fc5d47b596973680dcd81ee29938a"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "6c912c8a9bd992835bfc4c687789a79c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d8bfe140067ffc9d161d6af7be7b90ec"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "22b0fd68d8d35934bba2392287f357cc"
  },
  {
    "url": "tags/react/index.html",
    "revision": "e45af2da3a8b85cbcfcd91f4ad7e3650"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "3f189be794ca13b7b4039da9f9b1dec5"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "95e1280744b00308417492002de14e61"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "de6e58ae1b5d4fc1194dfad931941a56"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "c60b6b043c13b85f5afc82d990e1f541"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "00556433f8b75dcf0b3004fc8c9a3f84"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "35776611909ceba914987fae42496d41"
  },
  {
    "url": "timeline/index.html",
    "revision": "565fc2ba2eefe8bd5b0b367cff378c2a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "2a92d408a013e8a7f256c8ec52fd62ec"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "0a9ad9b39a2cb5119d9715f053b37a94"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "652a33bd59869e3d7cf2d50b5db26cb2"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "56fd6eec0ebbdd37a5786b5b44c8372a"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "7626d3be57044eb37ea8487c85841bea"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "5e471696c750d14e35a7fdf97a8b24f2"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "94ca8479d323a138cf6554f101004a4a"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "7b155d20036a8fe214706120ffe25ef2"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "c4afcf7c457b99c90d2c1d30a3ef6399"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e9585a7d96e4b2241e6e6570ed4315f5"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "c3f246d58f5f00e1cb773470c10ecf9b"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "081b23debead910c5d6354f2c5816ef1"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "9029e6950e9c64b7a579957ca99c76d8"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "67ce01bf658bf6da32ca432cb0c5ca76"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "f418118a694ffccbbfcad5a7315ebbc5"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "f44c0081cefc9d6c4352a48877aae5fa"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "6ba627b8b938d057158868d2cbd08935"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "0a42dfa95fa8f6885623c7fd0048fed1"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "ca35162578e02c9df5f4a76217b20319"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "6574237080f1bd3b6e509767b47f7835"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ae716ed221a4add586f9908833bf5408"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "f34488f0981113a07085466e79b8e5f0"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "0513636f31596f60040850b582e72441"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8bbebde68a3f2b75a68a04b532659786"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "afde42b00de26754e5595162b23ffe26"
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
