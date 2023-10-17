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
    "revision": "cafa5633f684cd21fe7916d3e3a569a1"
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
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.3c3ba6c3.js",
    "revision": "2f855cc3a5b1f3af1cfdcf940714eb9f"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.9137fc8b.js",
    "revision": "2b18c9e0f07c609da06c5447cdf5d0aa"
  },
  {
    "url": "assets/js/17.f5ffbcbb.js",
    "revision": "dd1964042319e5bb03fca27d9ab85237"
  },
  {
    "url": "assets/js/18.02b4b513.js",
    "revision": "62a124da7e15423a7fe6754fb0484bc9"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.1ee69ff8.js",
    "revision": "c32c20db9553d91f24875d079979641e"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.7cbb79df.js",
    "revision": "bea80951de6f56dae27d7877cecd2420"
  },
  {
    "url": "assets/js/23.522ea95e.js",
    "revision": "be913a1e21136814ccb6cc6c74dafc02"
  },
  {
    "url": "assets/js/24.3c456a8a.js",
    "revision": "b783107c4feb6062a2cf22b5a0f895f4"
  },
  {
    "url": "assets/js/25.f1c85261.js",
    "revision": "d12aa6c8fd7498b361fb68a0eb946d84"
  },
  {
    "url": "assets/js/26.6bb4434a.js",
    "revision": "77feaacdf8c390e3c131e2aa0c24f2f5"
  },
  {
    "url": "assets/js/27.28aa0527.js",
    "revision": "dca780ac05bc304f4cd0287f49dcd209"
  },
  {
    "url": "assets/js/28.15accfad.js",
    "revision": "e157fcd3a111d9670f2b4877eb4f8c78"
  },
  {
    "url": "assets/js/29.b093532c.js",
    "revision": "0a413dcf4e93f8d042e7c6f8815d0c7c"
  },
  {
    "url": "assets/js/30.60e2ab02.js",
    "revision": "2aa1cbf30816955acf0bb60f0a24b153"
  },
  {
    "url": "assets/js/31.b574796d.js",
    "revision": "3faffbe6466ad276985f186dae10b95b"
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
    "url": "assets/js/app.efd01aba.js",
    "revision": "8b8a1eba92540b00371f54367941d537"
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
    "revision": "74c09d70c2a7aa49bdd478636f07565f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "002586e5328b05de5c4eb3a11b9003ca"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fce5763514db4977c74ddd3c22b7ec46"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "6d5beb3477ac2331dda8d5c349924732"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "3bcce7d52a08d912508fe8a41ce6f838"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "039ff318c795513e5f80b514d61b4664"
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
    "revision": "16a028ec72270d771c4a2c50f6b8d1e3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "325b3709ceb4c75073db755f84ceb841"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "d81d9761ed671e74fab05ac8562ef527"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "dd67d421fa148bafea261b9ab56ac4c0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a62402f6cb64196e3677ddba46387d4c"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "186d14674cd345045299363baddbbf2e"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5954d2c9b334f08783d1a509bd74adba"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "81418ff333dcccdacc91d2faf0579f58"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8cb699b3f0cdb60f36441166b046f258"
  },
  {
    "url": "tags/js/index.html",
    "revision": "729ac6b7a34c794a6381aff202a7dd5b"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "81ef94c1fed08845e78e920aaf210bc1"
  },
  {
    "url": "tags/react/index.html",
    "revision": "422d5a1cece41dcae6a795674ea3f1b8"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "64838bf0125f72772d1cbad4a53547de"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "7fa6eb94cc9f0755768df21e25f0867a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3e27e8a4ba2814d4b4e22b31db79c98e"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "e8d79a9b34e65d76a4db993fce802074"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "e5fe5da9e69ee84168f4b95df9115a89"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "8c8416f93138d77d950337cbe17bca51"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "9911c73ebe384c729ad4a5308fe0201b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f145a318848f60a528b111d189d237c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "23b47294f539548b4504586016fc4be9"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "8d0d469f0f32d99643d04f7db7c6eaf2"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "5c956ce54b09ab442546a975c0a8391c"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "084e0fcf2a7125344e6088352aadfb50"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "d1b7591fd83ac46b0d896cd57d5d785c"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "7d9dd7f196207d08a5a1d94b7ffdf6de"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "4e19c7c821c582495bcdbcc7965a58b7"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "948cf4c5cdaa7a414860e7bfafed5c12"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "53929582f205ac891eab1afb09e61a40"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "a16920199f25d3f7879438933943dc1d"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "5914eb65f0357a2212d755c1e7caaf41"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "bd45a3e8441d66f6577d1a2eaa6ca0e8"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "b2dc64e192048936b59040e3222546ea"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "f08b6ba5b4deb40770ec1262db44dc91"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "4b895631f2bf5207f4830d51c613757e"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "f5a3a94ba44865b268ba4de8e2cfe8da"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "81057f1c6a0b76df2f05a93277054a20"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "385718143f3a79a762982a11a02101a0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "926495a537a21b17fce492d9db2e7a50"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "44f1e133c1e57b0adf0b061bfd6fed23"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fc0e3bcc4d2890397fd2ca9002a7c55c"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "c3208376c8c7a1a28e2d2872f6948ad0"
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
