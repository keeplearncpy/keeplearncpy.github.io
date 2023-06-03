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
    "revision": "45b169b07f5ba147f8f3375ed13b232f"
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
    "url": "assets/js/10.c2260bd4.js",
    "revision": "8c86f36c445e37d4ae1611f0471fa81b"
  },
  {
    "url": "assets/js/11.d500658b.js",
    "revision": "5bf925f7280523db7cefb5484ea66841"
  },
  {
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.aa4399cf.js",
    "revision": "f8714d650fcb5c10b6b163bf2698b055"
  },
  {
    "url": "assets/js/15.fc2ec115.js",
    "revision": "9285e7d5fa317fa1a628cf7f0b743b16"
  },
  {
    "url": "assets/js/16.feda2649.js",
    "revision": "5cd0ead10154587e97c3a7496a3c5c90"
  },
  {
    "url": "assets/js/17.e9f184dd.js",
    "revision": "dc3d7bca3d2da6ea2ccf7c8be79782e7"
  },
  {
    "url": "assets/js/18.1c103149.js",
    "revision": "e129c2d9448f245234186a615d6e6878"
  },
  {
    "url": "assets/js/19.c2ede1d0.js",
    "revision": "b0efbcc42eda8e03b92ed4dcae5411d5"
  },
  {
    "url": "assets/js/20.1a4024ef.js",
    "revision": "a48db0e7ff05a9f11e78e290db751a7f"
  },
  {
    "url": "assets/js/21.5b0fcb9b.js",
    "revision": "05b8ee6f6f2f72ee354a0b79b09a18ec"
  },
  {
    "url": "assets/js/22.a2f882d1.js",
    "revision": "22ebfd437f2b0b47b3c7701db2f8d5a5"
  },
  {
    "url": "assets/js/23.994d78f0.js",
    "revision": "f3476182554eadd4ad5adaf055f37ffa"
  },
  {
    "url": "assets/js/24.89f1c504.js",
    "revision": "036740af9b815a0c9b372546bc53b759"
  },
  {
    "url": "assets/js/25.cae02cc2.js",
    "revision": "04f57813cbde387fd34995b5845b19eb"
  },
  {
    "url": "assets/js/26.4c7e7aaa.js",
    "revision": "5fd526efa31bf69c9ff8c086a5a25beb"
  },
  {
    "url": "assets/js/27.26092a32.js",
    "revision": "fa9194e8c51925ffa835c0762b58b01f"
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
    "url": "assets/js/app.c5a3ef07.js",
    "revision": "e9b80b7cb1f9bd4fd5e5c2a10c5ae888"
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
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "ee428ec4de6acb365f1acc70ab9e9796"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "882cb2a922e62610516e6ea8ca0efe7c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fe3b7b34a3e0d1bf6bbc39df5ee512e8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6f97922a763c62667346938c3a6eb324"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f89955162dbd75448de73eb7a829a737"
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
    "revision": "22733b678a8ef1746ca8c92ed4e46c4a"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1581cb557d9c53e73238685b856b5e76"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "405cc6a9675d60bc867d20be96e0e210"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "ad4246fb49b96d2f0f9eaf21d5aa9b52"
  },
  {
    "url": "tags/git/index.html",
    "revision": "22fb222c8d1e905da6b2189ee943e865"
  },
  {
    "url": "tags/http/index.html",
    "revision": "a8ddd71638210a621d35201ded5df1a0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4e0c93ddc37f3a8bf20fb5da7d022ec9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4bd22a0aedcab74a06c4e16a30b0a1f0"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "ffc5eefc52f9b7bb4c80d754db997adc"
  },
  {
    "url": "tags/react/index.html",
    "revision": "94c5390618c8ee540100e28d30cc834d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7e28b610035af2b101d04c492823c0fd"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7a0c8f512abe802012650fc73ec10e3b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1f8b0bf36ae5331ce56eed6b442c27fa"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2f6ce718bdede489775736d84bc0777c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "002d3dec107ec34380b63a2c33db28a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "15243268174573cb858d0ddaca281da2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "3a29884260206abac6de907af3b53713"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "3d77b99bef1f4e292c187f8b4048adbe"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "25598d634a18c51cb951cdfbba3dc015"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "1115543b8b2df47f5a86e8cf17c511d0"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "ee7a1a61084d166e1e0d2fc86ee7680d"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2e094ca4b532db5f7acca706289bbecd"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "5eaafb737db4bb6a716d842c4afa4439"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "afadaa996d624abb696864fa094fc0c0"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "3c5cd8ba70a686f9759276098035816d"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "e348c8c07b459db25a9f0a4481c3948b"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "0a52db3505ab125c4e7876a9f251bc4e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "113e61bb15bf3931321e91441147d103"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0379085e996c1ef19da6ea49f14bdbbb"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "6bcdeab29f62c0df00f2c63aae7905ef"
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
