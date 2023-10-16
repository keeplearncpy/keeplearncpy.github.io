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
    "revision": "eb2c20294f79eb9f01ed7c8b97082a14"
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
    "url": "assets/js/11.e54fad52.js",
    "revision": "26a0a037131ebcfeb36436ef3382e56c"
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
    "url": "assets/js/15.490d56fd.js",
    "revision": "0844489ad4acd0d79d615bdd8aab4c43"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
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
    "url": "assets/js/23.53c5982b.js",
    "revision": "4099e0f1c90e5989a517cfa5774483a1"
  },
  {
    "url": "assets/js/24.0fe14637.js",
    "revision": "3037aec1b8d88e6f425889df4e9ea2d7"
  },
  {
    "url": "assets/js/25.f1c85261.js",
    "revision": "d12aa6c8fd7498b361fb68a0eb946d84"
  },
  {
    "url": "assets/js/26.ed6bfba2.js",
    "revision": "16be13178a8afe4a61eb8a924c82365a"
  },
  {
    "url": "assets/js/27.9903be9c.js",
    "revision": "7ae307857c96060724b03fb792ee803b"
  },
  {
    "url": "assets/js/28.93cd0fe9.js",
    "revision": "4b33539f73b69f25ea56bceb4291b5a1"
  },
  {
    "url": "assets/js/29.7da23065.js",
    "revision": "d928bbabe89c924d53864118e0bc31e4"
  },
  {
    "url": "assets/js/30.60e2ab02.js",
    "revision": "2aa1cbf30816955acf0bb60f0a24b153"
  },
  {
    "url": "assets/js/31.2e4e3903.js",
    "revision": "c0dec3eb22e7628aeeb8dfd148add76b"
  },
  {
    "url": "assets/js/32.9b918e99.js",
    "revision": "8738729b2f12881deaf6d792b18827f4"
  },
  {
    "url": "assets/js/33.39287bcf.js",
    "revision": "60cda6655443232dded7d72bbdab7fdb"
  },
  {
    "url": "assets/js/34.b78645aa.js",
    "revision": "5de816174f9fc8730cd8a33e7b74d11e"
  },
  {
    "url": "assets/js/35.244aeaf8.js",
    "revision": "6c712fb65dbb7cc84376f12824fe9350"
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
    "url": "assets/js/app.7642528e.js",
    "revision": "a2e459553c1cce25f4009659d4cdcd9e"
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
    "revision": "d2c107e36b4e51fafc0b69a1e38b15c7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "516687e69aab3404459574c7e09f558b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7a7df660fbdc1aa0270db43b3319775e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "a9d934ead72dc3cdd9fd90257d742fc0"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "158977136ac756601ad7a93922920e0d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b7bf802362a57057b68f9fb4ec636902"
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
    "revision": "d98300d2adb2086c94cce7d086465698"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "aebe0ba8aca27644e06bdb4d8d3ada95"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "4ea50e935f2b344dece3619c0e56cf5a"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "b643b7dfef2503ebe2d63e9de715437e"
  },
  {
    "url": "tags/git/index.html",
    "revision": "98dbc26bc0ea9e8c7e4e78df69eabbb6"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "2c2c4a07d870c05e3782608dea10d027"
  },
  {
    "url": "tags/http/index.html",
    "revision": "cf46540df504f8d33e328934a1c1dce1"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "4102827bbad49fc60ba9eb1d6c152e68"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "83d2a493b2108251448bafced8012d82"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2c762ee7e3a914926f20c04c81b95e28"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "bed663ac8237858017083201788574b7"
  },
  {
    "url": "tags/react/index.html",
    "revision": "227b7f8c85f125c4aea7f30da7afa537"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "b37125d5f1bb99c02505f76cc4253580"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "e6e1a5d638cd89f3aa34659f06115819"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7fb809e3de6cd490f545151205b42129"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "57252d97b84d402fd9b037b3b0bb65c6"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "15d71ac09efb7c1ef6d07ee16eea39f2"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "00e4a0cb8240a42e827a6dedba8f6a65"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "536db124533e8b2ff7831855fa3ce58e"
  },
  {
    "url": "timeline/index.html",
    "revision": "6fa12fa864359d45a0d6472c1c2b2b27"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "3ac3ebdf1d527f52f861f253d82e6ae5"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "11b18f33e7eb332bddb9f3ab2171e1f4"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "a7ef0b703d4796f57ed1a8b148ff9997"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "33ab2f42627d587e3527564410240135"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "487dcc728edfbbe43ca8ecbe2b761332"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "2804b03c2bdd3820a13177ae558e5559"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "1901bf0d12cc7660c1d16ce6e98d5b45"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "1dc2d4f708881d33c3714e10db65eb29"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "e16731441f733b4b443ce8283a14f4cc"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "7ef6bf9ed9193a318d165093ebbe2964"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "80a6f1776b7d62fe1ef31892e4f339ad"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "b175e987e3284ba7b6d57018dc685014"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "c206390128536f2bcdf22e787d711911"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "a909dfd45c1aa9041f1c9187e0e407c2"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "3d8c14404f338a39d48ac25a7ea00330"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "34a6b4e5c7e7a1a2c5d7dc30e5cda79c"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "940b560bde7a619289edf8c296d8f0a7"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "a0b8dd58936152704cdf071f318d74a5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6270f8824c63b488bb93b7da24800cbe"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "85480f17567df20f7b686eff8b9d2c74"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fe9f142401364d433d87330845eaead8"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "b869ab55ade82e48dd47385a5918a7f6"
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
