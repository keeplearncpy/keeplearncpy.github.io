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
    "revision": "5ca8437556fab179ce9ec19dda4d0ce9"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.34576c41.js",
    "revision": "a5ed78c664485fdad4c06f300b21e994"
  },
  {
    "url": "assets/js/15.44ed01e9.js",
    "revision": "8f157fc4284904152754e90aff58413e"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.da6fedcc.js",
    "revision": "2e1aa78444e38b32230fad52c2fae1aa"
  },
  {
    "url": "assets/js/18.d7edf73b.js",
    "revision": "941a84e035e62491bb883783bb197a12"
  },
  {
    "url": "assets/js/19.4cce212b.js",
    "revision": "9b8a5f1b3bc2da34b43921fb9d15642b"
  },
  {
    "url": "assets/js/20.4a8d0c1b.js",
    "revision": "c9d963387f9a2ad590b8eff298c6d43b"
  },
  {
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.993f21c3.js",
    "revision": "615d401a4a10bad8e79fef93f29853a2"
  },
  {
    "url": "assets/js/23.a4b7953e.js",
    "revision": "e871eabbef1fafc4034e81886a7343d4"
  },
  {
    "url": "assets/js/24.8403c412.js",
    "revision": "c85a5599d03f226988854f6ad4052d3e"
  },
  {
    "url": "assets/js/25.42b056d2.js",
    "revision": "f0b9d63b0fc72228b78c841941b62e18"
  },
  {
    "url": "assets/js/26.ee6477d8.js",
    "revision": "9a743badd8b0ce2bb42f33885a6304de"
  },
  {
    "url": "assets/js/27.95105962.js",
    "revision": "7925f03d4daac75bbb983a18f5936519"
  },
  {
    "url": "assets/js/28.fb653a7f.js",
    "revision": "48788ecfe3b6087370a5f0a75164f332"
  },
  {
    "url": "assets/js/29.cc1890fd.js",
    "revision": "6c75856431854d2950e43cb45c815b68"
  },
  {
    "url": "assets/js/30.e41a58db.js",
    "revision": "3ab5e194b347170746259a3424e951b0"
  },
  {
    "url": "assets/js/31.f835cfb7.js",
    "revision": "80b1b067eb3fa673e7c663cbc33c2d65"
  },
  {
    "url": "assets/js/32.d6627d01.js",
    "revision": "17c76925938ac45ce2d7b361ece2e90e"
  },
  {
    "url": "assets/js/33.35b7c808.js",
    "revision": "87705621eb8ca1da824f6529451e0bd8"
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
    "url": "assets/js/36.8ffe8c0a.js",
    "revision": "d3b6715b555031a6a07b47621fe60d8f"
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
    "url": "assets/js/app.559b9a2c.js",
    "revision": "0d76748480a5538af13d289ade576420"
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
    "revision": "5707a9218714344dafd621ace4824aa5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b00096430b8151b71584176475df0b0d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2db44812d17a6e63c28860f728f559ce"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c19b7ef43daffba84f54c317319bd092"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "56651ec9f6cdac7dd02a89c992770b0b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5583bd064618057b08d95c731c1632e9"
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
    "revision": "f41dcf4c8575f352106fda1791ecc1c2"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ed720ae44eb446a520032003ba00789e"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "d687be7ad8637e7f2c4f854ad8638bc6"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "e1ffeeca32737d6beb32377907318031"
  },
  {
    "url": "tags/git/index.html",
    "revision": "6d37f7b2242ddbddbd3cfea0b1d2ed21"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "e696123a56bf11fb048352028b6143bc"
  },
  {
    "url": "tags/http/index.html",
    "revision": "424121ea972802a5d99edb4e006bc0fb"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "d1f7111bde291cfd7d671da30bc775ae"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ce3221d012803a4c115ad41045cb7275"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5d619a250f7d798683d72caf2dba526a"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "f6f1d278da2a137e40a7e1ae6faa11ed"
  },
  {
    "url": "tags/react/index.html",
    "revision": "3520c45a8c168b78f9e20ab70aefa15a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "d8a85b79fa15bd04501088cf9cecccf0"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "07e8eef574355bb297abfb371b6fe2d9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "35c5bcee66821ce9350f77db02db35d8"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "e268dec7458cf01013058009a1b6fe16"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "504c8c04a86748827777cf74025dec5b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "ee2509cafba0b290b6114b2ca8430f02"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fb1edf03325493510a878561b8a036a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "6c534be5fa901e2849ddd68391277472"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "6ae23e57b14e310874c65047af4f995a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "0d2776832895fbbd1c6cc402f2fc2796"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "7fcb7a4d7b1e8314094fa1e4683c08c5"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "09f862a2f91b8323501d6b1ab791c81f"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "b3fcbcfd44c62ebcd9411463df19a10e"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "7b5f61d1188d8b2c91810ce5470538ad"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "31f52d44618b0baaa536dfc0b4cde04a"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "e46adc02c2d636d88bcf33adfa9fd37e"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e90c4081ee01c1ae0b97832d84ebef26"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "834ac05af930b400fc65fffeb971fc30"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "f570645b1b48712ed381c6d8c0d5810f"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "42af0533c42abeb25c33028f65b64323"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "a74f883475e7ecd8384073da0cf67256"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "474dc4c1a3464de942de4ca1331db89f"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "249675a83e4146fb99bd87254570af9b"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "5702e7b253f73dcdde3d1c977a512ee5"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "ebf7070d0d1290702234cb2a53c9cebb"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "1ce59a0cc30b7b4c67a6b49d32da5cb7"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "88f1470fefe6601116539a20c75b7f8c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "72b8bbf51501b5e5adb2b46b274abc1c"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "f802c5f4d421daa0a32d621b689e008c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6cdae5c657d8e846852f3329378abed4"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "25dc915036df6c79c6472f43b1222dce"
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
