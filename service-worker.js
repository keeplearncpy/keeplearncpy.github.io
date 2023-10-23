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
    "revision": "276b8c42a57d9830226a8c999cb6da1b"
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
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.fe7c245b.js",
    "revision": "5e174ccd958e84cc3b2242c0a4eca998"
  },
  {
    "url": "assets/js/17.da6fedcc.js",
    "revision": "2e1aa78444e38b32230fad52c2fae1aa"
  },
  {
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.c4e2ea46.js",
    "revision": "1444c49ff8fc3cd44420a14a3dd6c91f"
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
    "url": "assets/js/22.c18c6ec0.js",
    "revision": "8d9f176b2a7623200528530da4e8985d"
  },
  {
    "url": "assets/js/23.67e7c118.js",
    "revision": "2091fd56c50d50589402a58541cc585a"
  },
  {
    "url": "assets/js/24.1834ce85.js",
    "revision": "56f316bde15b7559c01309b7984f7b5e"
  },
  {
    "url": "assets/js/25.e05bac29.js",
    "revision": "3dc339c3a3e212029dc0d22b510d3e3c"
  },
  {
    "url": "assets/js/26.cbb0d633.js",
    "revision": "4a7cee979f7a03527de2f0bd78d3d352"
  },
  {
    "url": "assets/js/27.1cd1384e.js",
    "revision": "bdfa35eeb920000e0540df14f9f4177e"
  },
  {
    "url": "assets/js/28.15accfad.js",
    "revision": "e157fcd3a111d9670f2b4877eb4f8c78"
  },
  {
    "url": "assets/js/29.f78fb175.js",
    "revision": "5a6ffbaa28898a2b9397297ab0039d13"
  },
  {
    "url": "assets/js/30.fb17ac24.js",
    "revision": "b12a542dbefacd8b3518211adb3475fe"
  },
  {
    "url": "assets/js/31.d3ed53f5.js",
    "revision": "0ccc9e6f8ad511e8f471da46be23db99"
  },
  {
    "url": "assets/js/32.d4518921.js",
    "revision": "ee17396ec3ca681724f93a12317c5700"
  },
  {
    "url": "assets/js/33.39287bcf.js",
    "revision": "60cda6655443232dded7d72bbdab7fdb"
  },
  {
    "url": "assets/js/34.c3873175.js",
    "revision": "938a8580217220737ddcbfd12588ee02"
  },
  {
    "url": "assets/js/35.ccc5a261.js",
    "revision": "b382167d1b41cd92f00edaa18f935d0e"
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
    "url": "assets/js/app.6232d1e1.js",
    "revision": "d330445b897731f8469db8163c5d7870"
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
    "revision": "44ac45f9eb878d21d36efca6930169fe"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "baf5bea461b172cbb904ad93fe723d85"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5cc60077379440d98d24165d2f0d247b"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "82207dc71c6f73f3940a434c0c917394"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "6be5ef612fb5d54429aa9db8478537c4"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2c954343742fd4dadb2801ae439d6a85"
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
    "revision": "87573d92aa2849cb1b29c0062549cd69"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c5245d6835236fcaf9d729baa8d68465"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "b8e232f00704124b33fe1edf062dedd5"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "11f668efe730a43855e201f0b1a0aa51"
  },
  {
    "url": "tags/git/index.html",
    "revision": "ef90bb3802160a3546d280051ebea29b"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "07e20dc5f12d817cb883df217cb1c9a7"
  },
  {
    "url": "tags/http/index.html",
    "revision": "adc5d4d815dca4ac3d297ab07be038f6"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b9375a82e9d9a4df290094e9f1845e3f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "de72a74bba0cc8ef619b618a7ae104b3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "832fde584768c07fec55d846f051a8c0"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "fa7dd75f316053dea6e58e71004e0142"
  },
  {
    "url": "tags/react/index.html",
    "revision": "291ab1a189476707f3f48d87ffa8b7d3"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "193c61718c53454c0ca2b60ea720a13a"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "89e9c8bd8cf88553f87bb5eb76bddb25"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f998a598f3dd794948d1196ce5846fd4"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "e6f0fd3ba6ebc69fd88ed9c0698f733c"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "25d1ee3c68027d7e1dad42212622f80f"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "3bf51a385afff8eea6f56842d94689fa"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b62dbf88999f18a700fe095d85d36b70"
  },
  {
    "url": "timeline/index.html",
    "revision": "5d4e2557d5f5e6777d4bb6a97a7b7a72"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "d476455ef77ceb8c3f0649f875d9a73b"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "6bc93b6c6f08a84e2126db6c4c136540"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "c9540953841b4c2de4237c759807777a"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "3f72d95f8f42b49eea495cee491b1397"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "b1f12b54352cc4a5a1d83b1b86b9c30c"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "6ebb1ddc1c4b2d0dbf0e170e1b471926"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "91b560506656acc81f3c6c7eff0497e9"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "c356baead9b5a4b86b0117768a820ff4"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "26738b306f2168cfb7a6b7cffa785b44"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "830eb3b58d3203a1539a2389957e06b7"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "aa9abe90abc5cacb39aa3a5a677926f6"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "9f11f9d69ce1fb2f9ac9b892d5437a6b"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "379542acad87d90eb81c009cbc3c6c68"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "8e96da43fe243071c69dce41c371b388"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "9a644743ab71232eab8dce8ba21407a8"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "4ddc7b009723ab5ecfb3dd92f78d9442"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "67247749e8df04a278ee07881e8b999c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "21920dfd58dd7b747108380bcc10fb0f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cd12212aa5b0c17dc9b79b9d28d257c4"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "04b3e2c3fea0cd5116b2c6e6745ad233"
  },
  {
    "url": "生活分享/life.html",
    "revision": "34ea4f9af0655bcd9908c43fddeab103"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "54145f8fc67aaf0a24e1eeb97fbebb2c"
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
