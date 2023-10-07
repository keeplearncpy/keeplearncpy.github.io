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
    "revision": "680327fe46c520a66f021a7e369e8e87"
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
    "url": "assets/js/1.1287bda7.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.d19aa05a.js",
    "revision": "c8106fe705c1c2cba39308a38051e302"
  },
  {
    "url": "assets/js/11.475c96ec.js",
    "revision": "ac695fff3c0b007e74932f04f75873dc"
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
    "url": "assets/js/15.d748c023.js",
    "revision": "446f00f9245fc0600563c47ef50ab885"
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
    "url": "assets/js/19.abfb2ceb.js",
    "revision": "c5ea1655fd700f37496961e24abf1550"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.2b92ddab.js",
    "revision": "45ea0a57616c505444c7cb6cf07619db"
  },
  {
    "url": "assets/js/23.c46ec2dc.js",
    "revision": "f179e3791ba241eb7f82bb72fe5aca98"
  },
  {
    "url": "assets/js/24.3e02fb5e.js",
    "revision": "d71533cbe45214e93d5cabd9e37189b9"
  },
  {
    "url": "assets/js/25.8ac9264c.js",
    "revision": "43cdb994c05f18dd8060eddbc823a198"
  },
  {
    "url": "assets/js/26.521754e2.js",
    "revision": "703534d76d5daa2dc6617ffa437b3230"
  },
  {
    "url": "assets/js/27.3d29b550.js",
    "revision": "98481cce17ce692d96d2f2218cd8166f"
  },
  {
    "url": "assets/js/28.599df8ed.js",
    "revision": "5ea77820b1707d68102fe9939ae71ada"
  },
  {
    "url": "assets/js/29.b6649a2d.js",
    "revision": "ab750dbc3baae20e464cc1f420797774"
  },
  {
    "url": "assets/js/30.3fbbf60f.js",
    "revision": "119bb87acd5b70b952c2a7717348d376"
  },
  {
    "url": "assets/js/31.7df0bf22.js",
    "revision": "48750595f4d13a5a7c3f6108f38ba8a9"
  },
  {
    "url": "assets/js/32.41bbbe2f.js",
    "revision": "81559d92b7f589f3607b80ef5c6abb0b"
  },
  {
    "url": "assets/js/33.c136347b.js",
    "revision": "e43949ed968beff5db12f0c5e59847a6"
  },
  {
    "url": "assets/js/34.23430798.js",
    "revision": "1b5969da272ef9fb9e259d6cb6e3d45d"
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
    "url": "assets/js/app.aa6ab523.js",
    "revision": "eee0ebe8160fc2057a691d5548634a2c"
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
    "revision": "e66d9dab94b089a82028937090b2547b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f3fc8e020d3868a14a95c493563632db"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d2dacb4c7d5afdb35b3768d89274d0e6"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "cd20e73467f65bd54366375df10c7bab"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ab1676d724ff630dce2060dca9288083"
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
    "revision": "57c17929f88a2935ac5e5d01ed7b27a1"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9a5ca5e58fdb96c7d9779ac3d1494f88"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "5a43e7cb6d8ef826b864639406c7e761"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "647f4504b7376857a23c53e1b5d14726"
  },
  {
    "url": "tags/git/index.html",
    "revision": "77f3bffce7d1cb5136c52af7444c4e6a"
  },
  {
    "url": "tags/http/index.html",
    "revision": "c224eb5bf8a90dd7145a8ac145844a78"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "21315d9ef034320d7d7c8165ded01154"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e8645c7c93d2c4ba930e3ea9fee96646"
  },
  {
    "url": "tags/js/index.html",
    "revision": "12a403a64f4f8d533ea576b0ec7c16e4"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "30d94559a1b649715be35b48caf1d99d"
  },
  {
    "url": "tags/react/index.html",
    "revision": "11e1d7496f17e714cc54aa1857bf783b"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "642c1f0fd5739745ed3c33eb38cde154"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "ace7dc5fcf1873559956cf347d77c0cd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f6f40a0858fa0ccfdc8c81e7e2aac877"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "4c4013a870ec6b03274969c7e9a056e8"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "60345dcd69e042f0c7190d1d36ad45d2"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "45060a495b0a448a733383efac6ae664"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ccc5815bdf55c8e21f16791b21a48781"
  },
  {
    "url": "timeline/index.html",
    "revision": "c920be2f99e7119f2fd48c13ab1c239a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "ea39d1418f2ad8e945ac209730c440b6"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "89aae42fd2979ab2cd20c96b1ccc801c"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "50f1cd85fe50409436fa7130c5184b8b"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "6d5532a3a182fc987417079f43c4a107"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "5aa2c93050fbbacc8010e12c75428d42"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "6bbdaa8fdedfaf53246ded36b3b3df64"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "59d4775152eaf4fea5cbba01e6d06bf5"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "3076a02e9baad1ca6ba93218e4ac43cd"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "8b4bbfdd1d727ce17314a0147e104172"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7ac2cb901679da1b20385b07b5878b0e"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "26be3072d1eaedf4f9c0a0572550248b"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "1243c2508841de480383fce070ff8f77"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "a172104426ebc03d33f5f0b656ad399d"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "85f79ddf2346b8d500955f56a9bb9d11"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "497d4649991e35b4ad72f01181e6c11f"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "44c6f16b463c7fd40bcd93525d37d530"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "2af0e29e6d3eecee667dbc1fa67f2aea"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f6e2e78848001bde18483883650c3610"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "c762ea7f10dc74f31a767d0af7128d7a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "54e746e2aa652ae13b8e2295abd313f2"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f07acb7a39d9b3f7c969aff552fcc4cf"
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
