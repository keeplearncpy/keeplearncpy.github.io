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
    "revision": "41485762af33fb2f00a9381dd277f4a9"
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
    "url": "assets/js/12.acb28b24.js",
    "revision": "9bfb7a3644ef187867020f12f2a5bcdd"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.3c996693.js",
    "revision": "d41dd2a3c7cf83aa661d4a1fcbdc8b13"
  },
  {
    "url": "assets/js/15.e2fc5df0.js",
    "revision": "ee2b005cc9c58588e28276733594027b"
  },
  {
    "url": "assets/js/16.4cdca479.js",
    "revision": "e3b70b39f7e2a6a260412eba28d960db"
  },
  {
    "url": "assets/js/17.111365bd.js",
    "revision": "84279dfe137f4472f389fcc58fa95ccd"
  },
  {
    "url": "assets/js/18.a2ceeec9.js",
    "revision": "c5796241b8c7010c16ddd11b6fee8975"
  },
  {
    "url": "assets/js/19.acef0898.js",
    "revision": "7a828f83075534520da4870926284883"
  },
  {
    "url": "assets/js/20.55b75dee.js",
    "revision": "debeb700c4eec69b6179c92bc0f0ba1e"
  },
  {
    "url": "assets/js/21.95ac8f30.js",
    "revision": "4a5987a1f3524b7c7a12c7574d244649"
  },
  {
    "url": "assets/js/22.793ca3ff.js",
    "revision": "88bbbaac928e3955f31f48ad8384e275"
  },
  {
    "url": "assets/js/23.0d232271.js",
    "revision": "9f7cc8ff97f2b16f8a24f86dc3a316b5"
  },
  {
    "url": "assets/js/24.77bb3a39.js",
    "revision": "3da62150d6ae0192d5134313e9477992"
  },
  {
    "url": "assets/js/25.2ed1ac0f.js",
    "revision": "0a0ce20e250a1c79709803dcb27f1fec"
  },
  {
    "url": "assets/js/26.74929151.js",
    "revision": "3d98abd8d21e2cdc62cf25eb8b414235"
  },
  {
    "url": "assets/js/27.bb75763d.js",
    "revision": "12e832215be8712ce8e5ca1019487a03"
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
    "url": "assets/js/app.1cc25cf5.js",
    "revision": "81fd7f5a4bbc35b432302cb1c37443b5"
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
    "revision": "a72528542c93ceaad3dd4e55247f83eb"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9e35775f540abd0968e2aab09dc6afd0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a39db3428cd5d149be1a0179fa55e87b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d256efbf819482f3cea52baad66cf9a8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9ccc453d925102bc394fd560df3fd155"
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
    "revision": "906ea881eb2c9acd592ca6f1d7021a08"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "58a498ad54acc14ad3f8e83bc28b8fe0"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "dbc4b19cf483c1e7ab48b8e2fdf7f5a1"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "4d19008ee84f41b2f61315c21e55d502"
  },
  {
    "url": "tags/git/index.html",
    "revision": "9d30a3ccce03d07290364ffb2e38308e"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5256e701c40ee5e7100862423abaac65"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "36e34aa165dab06b285e720877484c7f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "650dcf1cf3fd2207915fdfffe66e5f81"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "30a6d45cf219458cf10407a443475498"
  },
  {
    "url": "tags/react/index.html",
    "revision": "d5ba8b7702c310a783438dc026e422ee"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "2bafc2a4251f5f2817393c19c2bdf4c7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8e5ea0fa8bf7f43f8f13b040ae7f79cb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2663e879258ab7f97d5bb87f1e8eca7c"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "f961ac73de610f9f144c0be3226e983b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d1221e4fc2120753785de23445470ca3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "238d2b3d88de5da538366e8e74cb2462"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6d8f078dd0896ce77c98ac9f115fba6b"
  },
  {
    "url": "timeline/index.html",
    "revision": "e8eb3f35031a7365b16a57dde64de0ad"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "ecc9a55027ed55a0b8de141538e2df03"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "5b0d144ec0da7a27d65b551e80769424"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "b5a82e8303edd586f94aadbf2765b8f1"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c8e7b1ee9e2cb43880fa06fdb961be2b"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "7e9094413778c39f8200e49b7de71ba4"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "429df76006529a2da8c10d511bda937e"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "4c5bf1c7186d21927cacdf7a1ee1caf3"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "2ea12e72308a67267871408c544b356d"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "a238c446427ae8ba12ed316bf3fb982f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "47dc69862141cc3a277f444014938bb1"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "88ce24be3d69db4d682d2d1fed881deb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "eb99a340fc64d86f5c8a6c3f5917b595"
  },
  {
    "url": "生活分享/life.html",
    "revision": "795eac4abcff2d21f9ec2c442d292b32"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "82762af2caf7cabd2a2335d9e6406beb"
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
