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
    "revision": "f9c69f5ecc50fdda5114b9d2602e6ec9"
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
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
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
    "url": "assets/js/17.a8985cd7.js",
    "revision": "02ecb456eb2ad3d6c227433bf45e6187"
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
    "url": "assets/js/20.3d27528a.js",
    "revision": "ab4d82ef2e8cfe6dc61a4095454f6605"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.522ea95e.js",
    "revision": "be913a1e21136814ccb6cc6c74dafc02"
  },
  {
    "url": "assets/js/24.a02a5d3a.js",
    "revision": "8636e23e255e9e8cf3bb7de0d97e4187"
  },
  {
    "url": "assets/js/25.ff5ccad5.js",
    "revision": "bb44d24ed25f1d134676d5c31373995c"
  },
  {
    "url": "assets/js/26.442e3b9d.js",
    "revision": "9564d4501eda26ecc2606f458488434b"
  },
  {
    "url": "assets/js/27.28aa0527.js",
    "revision": "dca780ac05bc304f4cd0287f49dcd209"
  },
  {
    "url": "assets/js/28.7e9248e9.js",
    "revision": "70e3bcdc8d8179f62e5b26324264af08"
  },
  {
    "url": "assets/js/29.7da23065.js",
    "revision": "d928bbabe89c924d53864118e0bc31e4"
  },
  {
    "url": "assets/js/30.6fe3ddc0.js",
    "revision": "e1026c5352fa6fcfe8897ceb650ebb8a"
  },
  {
    "url": "assets/js/31.2e4e3903.js",
    "revision": "c0dec3eb22e7628aeeb8dfd148add76b"
  },
  {
    "url": "assets/js/32.26e1413b.js",
    "revision": "bae6ccd35271c7a024bb46ddac684c7f"
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
    "url": "assets/js/app.4799ae7f.js",
    "revision": "dc4255a89b4bbf49977c68d4ef8401bc"
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
    "revision": "77b5fb9383565e65c1ccb21de5661cb1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c76ed013103e79d2a29d56f431aa2335"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "933185597b80447afc61a80846c9d56e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "510f83f37d523cf2a634749bb916a4ef"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "f00d7aebef92650c1fb67f2917c0f1ab"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "8324560dc7428b15ac1dad271dc12b11"
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
    "revision": "d148f0d97f061c54e6ba021b45182de0"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b996890518069d5b96fbe012e1d5bb4a"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "047d89a8801c2b021e34cef64321d5f9"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "3f187db90729b4b21cfe3ae9a0ced649"
  },
  {
    "url": "tags/git/index.html",
    "revision": "116107877f94fbc70f0175300c2ed45f"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "407abda7c857e7886457bd0d04352de2"
  },
  {
    "url": "tags/http/index.html",
    "revision": "6d6cee8d9b582cf3c8f7548ed0648319"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "81a85cfa23d15b8a4ecdc795fa82b169"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "01730f7e9616b91d44a4ac299a688550"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4b8e800eb0511033fac1f3db729fe467"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "79ddb52fae0c3f84e6b40c7512b84aaf"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0616e4229ff2a5fb3d4e5d3ebc782f80"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "5bb4dcce95296fc10d44f06be3de50ab"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "acc6462430a68211704cb22fcf15ca87"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8dc87363ee2144e5a6c646292efea1a3"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "446f0d4d4fcb5d82f43da89f4701cc44"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "dc129b7ed324ccde76a7dd0f3b404ded"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b5e3841226ebfff6e3572706b6adcb2d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "74d9dce050398cae5e8ffcc8ac681cbb"
  },
  {
    "url": "timeline/index.html",
    "revision": "3feaef7802be31b85daffdc2f931fe2a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "ff1ceb03c53d496d6af08cb65db9aea9"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "0ccd8d1511babaac74f4ee7187e869f5"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "696056ebc74297280784ef0ef310b251"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "24e54dfa7a30acd30b2b69631c2da16d"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "fea756b1331a842fc9f88090621b5a63"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "f049bae34603690a0e96f98a1e2d9106"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "b637417b683c3877ae9e2bb86b84e424"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "ee261fe5242ada11145a6776313c2dbe"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "8bc0abd7535a44fe2c0a27970937b851"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "2168b6da90bb3b1b7229538a707f99db"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "3876957764b967d93f412eb55419dbce"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "46da3c95557ad7c966d14477a7f38351"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ff0e59c515053a82101b31b093609fe7"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "1d29435116049b62a75d0412832e31cb"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "b77c0d41ade87d935a2afe839843a4d6"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "80ff4fef0ab2706a8f42916f0c5e5b95"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "0121f7b21be17cb483f7299fb202b809"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "395715a068abf0d12043a6821a933406"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "dceda6c33f4d2ccfb5064c71c52320b0"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "c18b704c5e76a5fc391f659a104f8dc8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0161a8c6d377f95b0c6f64fd45c401b7"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "84a80e1eb92438d1ff900757150cf524"
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
