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
    "revision": "aa127b6ebb8aacceea01a74ae9f0e2d5"
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
    "url": "assets/js/12.84267674.js",
    "revision": "71395825323eee63ea49135321f31b9e"
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
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
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
    "url": "assets/js/19.2e8599bc.js",
    "revision": "9eb84b708727145d89f5fc1712e34b06"
  },
  {
    "url": "assets/js/20.3d27528a.js",
    "revision": "ab4d82ef2e8cfe6dc61a4095454f6605"
  },
  {
    "url": "assets/js/21.9fbce1a3.js",
    "revision": "3946a1e8800ee8c062e17de6b3d7e77a"
  },
  {
    "url": "assets/js/22.7cbb79df.js",
    "revision": "bea80951de6f56dae27d7877cecd2420"
  },
  {
    "url": "assets/js/23.3d90448d.js",
    "revision": "dce2a9ae99bf36d5f0a8d2c9e939cd99"
  },
  {
    "url": "assets/js/24.e25b883a.js",
    "revision": "d2e0966262f3aca22795176000830f28"
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
    "url": "assets/js/27.d958ee49.js",
    "revision": "59a7606addf1e30f2de728082773f2b0"
  },
  {
    "url": "assets/js/28.7e9248e9.js",
    "revision": "70e3bcdc8d8179f62e5b26324264af08"
  },
  {
    "url": "assets/js/29.f85366c6.js",
    "revision": "9d6714ac64f4ea064079ecfe71c6c274"
  },
  {
    "url": "assets/js/30.eb7e682c.js",
    "revision": "df66323c55891928a66fe198a84df0e7"
  },
  {
    "url": "assets/js/31.eb3497de.js",
    "revision": "757da3a9e47784b8a02d87549607a9c4"
  },
  {
    "url": "assets/js/32.51b19d04.js",
    "revision": "b781bb053c24fe3458dc9ac0e9352098"
  },
  {
    "url": "assets/js/33.2ab4d850.js",
    "revision": "1458b7223acfaa6e063d8f63a52a2176"
  },
  {
    "url": "assets/js/34.b78645aa.js",
    "revision": "5de816174f9fc8730cd8a33e7b74d11e"
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
    "url": "assets/js/app.de0e5e45.js",
    "revision": "9a401a29624565143bc4d4d21360b6e7"
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
    "revision": "7e54e91b65855a5a4c21b1992eecd684"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "faa16776fa8de59c270f94eaa4aebab3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4a6e9c8aaaa91423a493c8846357cc45"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c9606d588362491ff57ccfab7dc9cae7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "0f0830980de87d0da49b3be5f46edeba"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e169f5a65163f267b0a5220c10a52717"
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
    "revision": "a788837dedd5c9ca04d2a36ba6700f75"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e26c659b3887636b2792dba36c5dc6cd"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "1fe563f02c60c50c07740bd477ceeb4d"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "5e07cfbd43a2485fc78780c8a25e93ed"
  },
  {
    "url": "tags/git/index.html",
    "revision": "8b5a7682df035bd2f3d2cf68a6434ebf"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "799e00385faafe5c0d44d9273e926045"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5241e555068d1df6c3af9e59768cab83"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8faff10f977ca4a9290148f780b9d3a9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "05600217cb8eefd0f8f79a3a6769bb7c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3fa32a947f2b9ee430886043cffd82e4"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "d484e237cb0c50eb32cc460d25e0704d"
  },
  {
    "url": "tags/react/index.html",
    "revision": "c2d87b16b37679e94566413cace4a7eb"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "5a18ee9aea221b6404d95bc9bfed939f"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "7bb81b4a4a6d6c64781e830d1c01e263"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4c336d1fc17423020ce8d470ab481f58"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "a48217a37fc997277d050d278986fa73"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "6decbb0e366647d1ca0d591c7dd68946"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b8552c63af22f50ab59442f5032a2cbe"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f257ae89665e68bafbf24e81bce75e19"
  },
  {
    "url": "timeline/index.html",
    "revision": "06788bd3eee95833d9823b9788f7f053"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "80973a5b7038e7d4dca50a4ac816e800"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "7dd77a5e3eb9e85e4aae5a648c6417f3"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e47f582080b7f00171d00e718a7faacc"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "a8f5f6b32fe41d66167cc8b5c27cd255"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "17505f419582744908cefc0639c1dfb1"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "279de9bbc779af768c143056e3ce25d7"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f79e2339be660e31b8844a6b9d9a5470"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "9e8f24315ae04cfdc55e2bdf0aed7a12"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "fc17fef8e7a84ae2083d6cd3fe97845f"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "b822f623cc0c7b3d007f9c86d7bfe0eb"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7c15be76698d4d742a6d1979cd29976a"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "151748a4a02200a5293533a84decd10e"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "43d441321e79d4d4e2e6526285c4ad9b"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "bd026bbb621b3f99621dd8a085b58d38"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "5687fbec060d2a8d481eb2b0bd0640fd"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "0fe895961f32a0f6ab2ab8d6d1082797"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "46eac28a6d27ce155dc8f6419128d591"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "5eec52edd0e50eb240341d4f68931010"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "50bd5f6595878ce936664bba50bfd92e"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "4d29f704a9a10042b0a20d12f4e5b09d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c832c2490f78d20a600d72965cd9311e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "125c89c2bf7b66b0eb6e9324ca1a802e"
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
