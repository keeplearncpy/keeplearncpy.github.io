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
    "revision": "e6b3896b046bfe1f84181d84fa945530"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.7f0d5ef5.js",
    "revision": "6d9791789995922d3eabada6944de9e8"
  },
  {
    "url": "assets/js/18.8e1dd9cb.js",
    "revision": "f78ead17e1bb07455ecb7f8f86374be6"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
  },
  {
    "url": "assets/js/20.3d27528a.js",
    "revision": "ab4d82ef2e8cfe6dc61a4095454f6605"
  },
  {
    "url": "assets/js/21.42019346.js",
    "revision": "6c9b06b2523788f2f10d9dba502cb85d"
  },
  {
    "url": "assets/js/22.993f21c3.js",
    "revision": "615d401a4a10bad8e79fef93f29853a2"
  },
  {
    "url": "assets/js/23.36f269db.js",
    "revision": "de2834bd2ee9958f5e8f12283fa6919e"
  },
  {
    "url": "assets/js/24.e25b883a.js",
    "revision": "d2e0966262f3aca22795176000830f28"
  },
  {
    "url": "assets/js/25.ff5ccad5.js",
    "revision": "bb44d24ed25f1d134676d5c31373995c"
  },
  {
    "url": "assets/js/26.ed6bfba2.js",
    "revision": "16be13178a8afe4a61eb8a924c82365a"
  },
  {
    "url": "assets/js/27.bac1ad56.js",
    "revision": "1f16b5edd4f590422dcb5ed45a9869c4"
  },
  {
    "url": "assets/js/28.5cbb6f37.js",
    "revision": "e34f3c9d11ffb93b25129a76692d5566"
  },
  {
    "url": "assets/js/29.7da23065.js",
    "revision": "d928bbabe89c924d53864118e0bc31e4"
  },
  {
    "url": "assets/js/30.5977bb60.js",
    "revision": "d65c137eabba29344c8918a5bfb0b00e"
  },
  {
    "url": "assets/js/31.8c184eeb.js",
    "revision": "6ebff70ac0b32554ab205af9f114991e"
  },
  {
    "url": "assets/js/32.fd8f6a62.js",
    "revision": "e03e29ff4b9f0021a8778eddb84dd8b8"
  },
  {
    "url": "assets/js/33.d9a47e1d.js",
    "revision": "56ca7d46b423d20417cdd568216afce1"
  },
  {
    "url": "assets/js/34.c3873175.js",
    "revision": "938a8580217220737ddcbfd12588ee02"
  },
  {
    "url": "assets/js/35.53ae4149.js",
    "revision": "faeeb11582e85ab1ae3675ea28a3ca41"
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
    "url": "assets/js/app.010b9510.js",
    "revision": "141339fae4f9d8349cfa78f520339251"
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
    "revision": "f1fad7deed5bc1bb4d22ae8f91d0b3df"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f9fd664f34ce9e4696fafea3ea5c704c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "95edc6afd0f5558bd0ed94eac929f861"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9ae682216ff6459762bf059ac464b69f"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "563d8a997d6afeb498be02aeb90d430e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "45b4d223e2634e4231eeb20e08237f4a"
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
    "revision": "004a8f72d53fc86c42eef2e9386e163b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "26146fc2f1e347673218f52b51394c63"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "eee263cf8d6089e99477f44772bcd7ef"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "4af48866493fa449aef950141460a6f8"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c1c6058068d761124dd29d337914a606"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "48e38551dd621f2a4783906979ae4d6f"
  },
  {
    "url": "tags/http/index.html",
    "revision": "84b435aeb6432e4b5d18e006baccdbd6"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "502de2f2a4d404dd2b6335591caebfbe"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "08d9f0b624d2532569d5643c49f6964e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4e6299d5b39f0d13c90fc9963a449455"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "22d2b60984d329c98cae52dadd1f46fa"
  },
  {
    "url": "tags/react/index.html",
    "revision": "58bd11a27cbe0302235411bccac9a65a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "b1e7053b8972f02043ca7c05180483ba"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "27d8bb6874b8c22964cd4119115edbe3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c6d52fba0f270358ca9d71ad9764e774"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "0f8aed7b239951fa68b93460a27bae79"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "47165bffd7695288004efb17d029fb81"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "dcb6b5349ae05ba75ab4ffc3c681d53a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "63ff2ff16346e97d92877e71df6cdcb0"
  },
  {
    "url": "timeline/index.html",
    "revision": "c7ebd250be3ae371fb6e84510460f6dd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "53729002fcaad61741d5f0d8c55eea90"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "9b07e43a9829b63a7da1450a0687a2c7"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "2af39ed9ee1498ca338bc61190d9dc47"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c36d32408cbd19335417dd604dfbee85"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "419dd58a70aebc4044118e07732f200c"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "f75b67c66cfb9df4efffa191bbec4fc7"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "28196493b2e3cd80f56aca016e2abf7b"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "f8e078bc9ce8378907fa81dc8d029b30"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "94cbfdbbc93349e0285c799a64cff1d1"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "a71a1d4d92249885f9d85adcc199ad1c"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "914822be9743ed103621e1d3ff8fdc83"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "114b069489314fec215e59c54650febe"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ea3166150e229f970f3a87c8d47479cd"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "dc7d9add9a542dd47cf6e47fdcafffea"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "d22d7d1a5aff8993c814d7458e33484e"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "d7acc39dd8ef179443feb364688a8b07"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "2efd20bda494c29307887676e61980d8"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "8bae736677bce5dfac7557d745f274d2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d41dd59923a2748942a99261d3af7db6"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "4b30d5dd70caf8afd3f17bcebdce6a9a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c2e6f20a37b82d5a432b828eab76a1ee"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "92644b128b69aabc2c54f0770079a85b"
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
