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
    "revision": "7aaad6486532fcd5ee5b9e5bdf13e70c"
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
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.7f0d5ef5.js",
    "revision": "6d9791789995922d3eabada6944de9e8"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
  },
  {
    "url": "assets/js/19.c4e2ea46.js",
    "revision": "1444c49ff8fc3cd44420a14a3dd6c91f"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.fd6d6b19.js",
    "revision": "3d017e233235c63cb68812f2ea19c852"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.19b0b78d.js",
    "revision": "16301e6b25d8f9ab46f860fffae04ea8"
  },
  {
    "url": "assets/js/26.1f3ef11d.js",
    "revision": "9bce3d4e6e48f00cc562760e0c2df021"
  },
  {
    "url": "assets/js/27.070cbaaa.js",
    "revision": "a105a4c3286ad47e5e1d686f2213fa67"
  },
  {
    "url": "assets/js/28.fb653a7f.js",
    "revision": "48788ecfe3b6087370a5f0a75164f332"
  },
  {
    "url": "assets/js/29.2840da33.js",
    "revision": "3530fa434f9d3489fd5e85fbbcae0c20"
  },
  {
    "url": "assets/js/30.c7816e3d.js",
    "revision": "a9fc8c1fa9ea91df59068861c04fdcaf"
  },
  {
    "url": "assets/js/31.0cde688d.js",
    "revision": "2dc9a5e11ec53bc4d7d7ebc562d49334"
  },
  {
    "url": "assets/js/32.c7f91bda.js",
    "revision": "9da46225f6c0c70310b001c9cc1f9af2"
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
    "url": "assets/js/35.ecb41842.js",
    "revision": "faeeb11582e85ab1ae3675ea28a3ca41"
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
    "url": "assets/js/app.31d0cae7.js",
    "revision": "7f30b960df586af965b75f345977a6e9"
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
    "revision": "4aa9ad33570418316a74c293aed3a509"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4f9ce319ad847d669e177f7057f7a900"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3de255097370e9f9195f3c7ba5e7c033"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "91589e7f0242e29a46b90e59df9d3ef1"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "f6048e6f88dc2dc83c02468601d71347"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ee41223d841d1a2077f862fdddb1359c"
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
    "revision": "d30dee6e4bdc389f89b508054945df69"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1e58fde01bf5566a41c255be3467d221"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "32b1c8fa63dd1893871906ed2072afc0"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "5a5832030794d0779e5c21e461682c9b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c70bb3ba7eed9cfe69a04a3323c50c98"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "990b21ae4e08406c4d129712b02d53a3"
  },
  {
    "url": "tags/http/index.html",
    "revision": "f4ec415d1dd6ca62f2985c696762ebff"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5c0571edbde11cc7c7dc03181d2eaff6"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7fa98799888fc439348a8e98fff3fcea"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f84bc2f31a6d141e464bf8d9325baf0d"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "014e6187ebd4efa503d422a2d2c1b7ef"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0920c7b9fb0f0a1ac8d785f7075ac419"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "9be045410ed93b2f7cbd2d7b16cc30d7"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "a4024314b53e655b89b8782206d248fb"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3bd79cd40ca0f1c492f06eaef14aa60c"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "6a402f375f4ae9b81716b1ffc2e2f04c"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "4e623b0d3ef6b3f47dd614ee73eb45ba"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "50bd738d5fd2a343544fae0e87ee58b3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "53f56e1fb5d42f78f9888ebadb708b02"
  },
  {
    "url": "timeline/index.html",
    "revision": "8e1bd2997ce705658711475f3fe74e62"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "be5871a5859c01148dbffd9c7a1abf62"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "232102f07a6c6f9b565d5d3e02819137"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "36c39d1927fe88e78137b81358190665"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "42624283bcea6ef0cea42eafa8e797eb"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "790808a51f79330610fb03811c1192d3"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "207872bf00c73681bbd8ed123b50cba2"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "658e598711dbabf292d2917537960db5"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "09be383275c486213835e3e20f87d178"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "ce601d1ce848a0505a97f9f66cbbd371"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "a90fb1d6314a991935431490cea2eb7e"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "1bf50f42a3b45664f44c0c5215cc16c7"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "705db93b82650a2e46a5b3b907c3f476"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "0c45664f5b244fc2250fc656db39b133"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "763d616a9aa78cf02ec2652f97966e35"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "573600555964061184c96803e1cc12d3"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "1435d861651a4c60cbdcc79419560081"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "579d703cefb2a8b23872816e984cf637"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "25625f3c5a524a7640630bd486abf880"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "eef1d56b5112bde7c18c3358798a0a0f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e7003fbe8514b10f1e763ef68390a93e"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "5442afb8321eac1176bae54c53532168"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7261ab82545431ee29a7aa3fcf548367"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "6216f90bb250b6a9af987b1c726b53b0"
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
