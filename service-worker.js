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
    "revision": "8f7e8c88ec01c56dac2ace0b27143b7c"
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
    "url": "assets/js/11.99b6478d.js",
    "revision": "302f89320966504ecfbbef428561e1b8"
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
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.44ed01e9.js",
    "revision": "8f157fc4284904152754e90aff58413e"
  },
  {
    "url": "assets/js/16.01db67ff.js",
    "revision": "73e9600dacaa8cc539aeea888ff482cf"
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
    "url": "assets/js/19.2e8599bc.js",
    "revision": "9eb84b708727145d89f5fc1712e34b06"
  },
  {
    "url": "assets/js/20.4a8d0c1b.js",
    "revision": "c9d963387f9a2ad590b8eff298c6d43b"
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
    "url": "assets/js/23.9db70f02.js",
    "revision": "4f503faa00c2ac458dfb202de48787b9"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.9652b80a.js",
    "revision": "b6e1742857a564c9b86a37614c09ee10"
  },
  {
    "url": "assets/js/26.d34ef5ac.js",
    "revision": "8c05f10d0f28be7ece2095871d50539f"
  },
  {
    "url": "assets/js/27.1b5cc956.js",
    "revision": "a509d39442e763bb4c4a52e4086f4cc2"
  },
  {
    "url": "assets/js/28.57e07547.js",
    "revision": "d4860c23b521a99bd82fcdcff241f77a"
  },
  {
    "url": "assets/js/29.267c19c7.js",
    "revision": "7bde479812e8b53c41f94e65fe318f6e"
  },
  {
    "url": "assets/js/30.fee7f696.js",
    "revision": "8f2e9d284499c66d50d40ab199c8c13b"
  },
  {
    "url": "assets/js/31.62f87b94.js",
    "revision": "dffe45b42c62728d37230756c98c130b"
  },
  {
    "url": "assets/js/32.cc39ff9a.js",
    "revision": "3ee6f57fa193217598703b9688c470b2"
  },
  {
    "url": "assets/js/33.72b14e06.js",
    "revision": "ad44385992ef4fdbb94e37182859cd66"
  },
  {
    "url": "assets/js/34.259d7738.js",
    "revision": "92f65eefe3a499a765719186824a8cd3"
  },
  {
    "url": "assets/js/35.3c9e0a50.js",
    "revision": "9a2bae0c878b156cd3f22266ad483c2f"
  },
  {
    "url": "assets/js/36.13572a37.js",
    "revision": "2cf63ea19ecbc3d7311fdde1c9d9b124"
  },
  {
    "url": "assets/js/37.e6bfa5ce.js",
    "revision": "1b48234f1e0398613f3d8ac0313519cc"
  },
  {
    "url": "assets/js/38.d12be558.js",
    "revision": "bb0d059f619e8112f210a3594182df91"
  },
  {
    "url": "assets/js/39.97cb4299.js",
    "revision": "97d6414e007b456bbc213a2e72a84a6f"
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
    "url": "assets/js/app.83b66830.js",
    "revision": "95298d516fbda912bb4f6baf3aeb4b7a"
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
    "revision": "09b881110d9c4d1d4a86c6fbe10fdff9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bb3a16af49de101e59115382562411e8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f28ba3f4b47329e9b4c861777fb5e76c"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "7d5d92a1fa102f1115efe6259a00385a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b0ea3b5f284070f955068541e181e921"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "7e40914724650df291ffbe65d98b8b7b"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "9ab080bb380189ef9dc7422de02a47c4"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "7a55ca522acf2e3886cda4cdaae9d066"
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
    "revision": "2b64ef62136ddb7cab639e510418265e"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "73353260a4ad389153c14ca10b7622fb"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "016bdd04c609a0f4442f935e16058d77"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "6b9a8da8ce565a39cf6e911f5bd1444f"
  },
  {
    "url": "tags/git/index.html",
    "revision": "cd4115e409b247eacb143471bced34e4"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "2b7f3bc0b501b34851a1189f013d2485"
  },
  {
    "url": "tags/http/index.html",
    "revision": "ffcacdd36a042f2dc93e9c00c4214ecc"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "33758d7313d05ce9a54706b27620349a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "14114035fe300b093d17dd861a7b8ab2"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "9a5fefaa98e5b829c4a5addb36861ad8"
  },
  {
    "url": "tags/react/index.html",
    "revision": "70b961236848cb7efbc22d9e02a002ba"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "aa853f35c7b0153e2d8c93b665814522"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "f20715910224b3dffabf937a6e8e5131"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "a9b32578f4f111c664a2a307dd237e44"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "d67ab3d521154182cf0e8112a03f1655"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1736b14686e4aff86be9728e6cf63490"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8ab45c0cf49222baa971363ff6d1f016"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad6d0affee571e6ead71387de44c67bd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "a371ba557a5135b9a8dad24dafab726b"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "a137df9d1745cc7e994dc18513d6203e"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "39a6cd03b82083173615250d8666920f"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c1664969dbd138006905e3053563873f"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "557ba9d7d8cbc9bc1b16b04015d73c0f"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "0c252ce29ce47c0d9514b034fd03a6c9"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "2a772c09bd9b56e3df9da809bde805ca"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "8d87bb698be2d190838ce195f444729d"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "7d3f3d3ff1d2564a9c5e39be6a1f93b1"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "78394bf470ae26a775a5e23d7718f7be"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "da44121e3ff4aa2d4f8df8a7ea3eb10b"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "bc2bf2f74f62c457368a5ca1f70c293a"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "15e6e77aa4c70ebac57eadab42052235"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "77d4bd33dfe451d32d755fa1d87baf74"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "f22c7b4fca3e07689e73c8ef106a38f8"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "d52acdd805cf33f58e56a7975999fae4"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "120bfe7b7ac060cbf80a0423c02725ae"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "e3239a3b8fe5a091fc9ac8f95bde62f9"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "f1e0df9a16888f94ed1a90871d99cf28"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "f1400bdd82d1d476bdf1c8424fa4a994"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6a1c00507e38717b57ba4da978465dce"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "c8f73b7fdc1c267b07c081eb909ccc28"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "8e6abe1c8e8670b64f9c2680778ca79f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e4b96feb85368ae9d263626f600e3a85"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "b8d7d9aa3592d0ab7edbd969669fb46c"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "82b164ef74425f77dec0a5a4a9cead80"
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
