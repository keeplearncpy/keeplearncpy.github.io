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
    "revision": "12b6ed837fc0c540eef998b3036a0767"
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
    "url": "assets/js/15.5bdc8076.js",
    "revision": "c8330db5d660646e0710d6553383fef9"
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
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.2e8599bc.js",
    "revision": "9eb84b708727145d89f5fc1712e34b06"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.5b8a2f66.js",
    "revision": "0cdf50028111cb6f362cc8ea13d81d47"
  },
  {
    "url": "assets/js/22.e6c5ed29.js",
    "revision": "65f72f9628bc0326eaf9c9666ad034be"
  },
  {
    "url": "assets/js/23.d23bcd9d.js",
    "revision": "59ff4008591d3ad04e279663ef0e6c16"
  },
  {
    "url": "assets/js/24.523ea93e.js",
    "revision": "dd7072ddb6c67fb38a4d49fa77a693cf"
  },
  {
    "url": "assets/js/25.e8e4638d.js",
    "revision": "2845024b385e75186ccb0bf187a1340b"
  },
  {
    "url": "assets/js/26.e5c41770.js",
    "revision": "1c8360a9bfaa65e7684f31f26ce062d5"
  },
  {
    "url": "assets/js/27.1b5cc956.js",
    "revision": "a509d39442e763bb4c4a52e4086f4cc2"
  },
  {
    "url": "assets/js/28.7ddf2184.js",
    "revision": "6ec9d882cc7151504ec925020b62ab43"
  },
  {
    "url": "assets/js/29.5b8d43a3.js",
    "revision": "113a63311cddf68945e3ae7f0f340ca1"
  },
  {
    "url": "assets/js/30.01bbdbf7.js",
    "revision": "4d21c3f8522d769e0e40b09294087c3e"
  },
  {
    "url": "assets/js/31.ed0836fa.js",
    "revision": "4a2a7bf02f239dac0ca27d0a900bc359"
  },
  {
    "url": "assets/js/32.a2d5f0e5.js",
    "revision": "f72dcd4d6b247e7549a48b62c6eea655"
  },
  {
    "url": "assets/js/33.39ee7c68.js",
    "revision": "e39bad641c732efb9f2ff640b7761d26"
  },
  {
    "url": "assets/js/34.932ef389.js",
    "revision": "9cbb7c99a46851796671413c1697f606"
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
    "url": "assets/js/37.7515be35.js",
    "revision": "aa4d97b84d6ef6cf9b3ea954587fe15a"
  },
  {
    "url": "assets/js/38.19be5926.js",
    "revision": "0d2261c23e6b6ab1222585d200ddd49f"
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
    "url": "assets/js/app.5a7ec29f.js",
    "revision": "19262d983997c0a6b24c006ecf2967b9"
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
    "revision": "02a71ea1f6e1c2249baad168cfc88b45"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b50b2d94649bba9bc5ecc4ebe98c34c6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "35a32272facb30344ecd9ec0d919445d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "22d102fbecb294c9b7251c1ed7b1d1be"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "93d875b3c90e64dc25f9de1dbf866812"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "801cb8d449e34b09e610cbc9ae3d349f"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "347f2112b89aab38ea4a56a7f1fc07bf"
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
    "revision": "abef115ae1212e1e007bc4a13abf172f"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "62ef3586e218e9f10063923fc289cc24"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "bb83b786a2598186282dd5a4b4154fb5"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "4efccd6e3346b3b5d1f8191077f1ec43"
  },
  {
    "url": "tags/git/index.html",
    "revision": "49f3c622ae44910c161c28a5dd97f0c7"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "dea7de3e70c39d201439e5177f4d0244"
  },
  {
    "url": "tags/http/index.html",
    "revision": "990a8981846d50227e100af065a429bb"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "3662c7a3731a596ee2a3186b70fb9ce8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "094b37b449c22396239bd4dffc6775bd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a8cc583721e9ab53b9a16de60dbc1770"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "1a4a0564495d9ae33a8cb4520b422bf1"
  },
  {
    "url": "tags/react/index.html",
    "revision": "41f30f7ee06a813fc3028d50731dc57f"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "7dc553befeb8149c7454dfa2b3226f44"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "d282b456b6af981e62a68aebedd64403"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e0700b3e9b9b0982197edeb18f0c5589"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "595ecb219d92043204f59c23239d9b12"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "91515df4fbd296730936e72ac565c5a6"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "901777f31c3615d362055ec39cb01717"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "35e7488aeb0f5fa88bbf05bf2cd09ff0"
  },
  {
    "url": "timeline/index.html",
    "revision": "9cf895a460271d20ea437b3d6cac3c59"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "573cc7acdafac5d0855627c16f39070a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "c9bd8a733e01a402989028e6cc81159c"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "5edf170f5490acfb967b8c9e45d02f66"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "3aa4e7b7d64a568b68f52e49d11863c6"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "0c57e092e941f0cbcccf2b7d2a565aca"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "4a31010f3c9b4bb7261897db5bb32b0a"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "173b47061822c7fee806d5fa19a9ca79"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "1afe0c66cfc2456243af514cdbec2e46"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "8f5e286d652408b877c698657ef79bf2"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e2d18a4484fa791a0a865d28d02e764e"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "945e13246c1aa915dea212fc870908ae"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "d74312a4a91cc38e4e23bdc8a8bd8a4a"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "12574791dca6b94d7d4a30c15e297254"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "18a3cb3731acf2bb22046b1d215f1343"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "e7df9fc2a92054e38ea580c3a27945d7"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "4af0fd73725df86884a3bef7510c3437"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "b8727f6dbaedac5a26527e2e76f3e72e"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "500c4fef87a1ed6480622195b767066d"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "8f904c74ba3f00070b1f37e82181de77"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "ccbf378f9afc7e41f3c6feb803f01415"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "717d1d8446804ce5e61a5a00db4b8ea4"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "39a34e6c4c9d3e1b8bad4b6dcb219a8b"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "8abc95083e50e2e048f2d5ff848e9c70"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d38dcb1143dfe51ab1daccce01d5ce9c"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f7811c1e94ec6c416e5bf93af7fe3ab8"
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
