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
    "revision": "880d361790c93120363057eeeb6415c2"
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
    "url": "assets/js/11.a20c9089.js",
    "revision": "689f37f972e6539aabc5a70e1565f22a"
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
    "url": "assets/js/14.aa4399cf.js",
    "revision": "f8714d650fcb5c10b6b163bf2698b055"
  },
  {
    "url": "assets/js/15.056eb836.js",
    "revision": "bc106d30554b37591dac8527f5c10585"
  },
  {
    "url": "assets/js/16.e828ab45.js",
    "revision": "7a239a224678ae42792c291dd8e85616"
  },
  {
    "url": "assets/js/17.dd299896.js",
    "revision": "8380a541341f716a0e6205e23ed8a71c"
  },
  {
    "url": "assets/js/18.015fb991.js",
    "revision": "9e13710e3a42473df92392e4ce8b5b34"
  },
  {
    "url": "assets/js/19.7df09e1f.js",
    "revision": "00b57076f163265ad1a10d0136b180c9"
  },
  {
    "url": "assets/js/20.20b39ba8.js",
    "revision": "d3e47f694fbfad203718a3d5dd2d6d20"
  },
  {
    "url": "assets/js/21.f11feb48.js",
    "revision": "29add0b9005c60c87f5d144b3b3ed21b"
  },
  {
    "url": "assets/js/22.6aaa226d.js",
    "revision": "f93b0ca88e54a54778bb31144de982c6"
  },
  {
    "url": "assets/js/23.37827046.js",
    "revision": "b178a5be625525019d7e2aa2939f7dfa"
  },
  {
    "url": "assets/js/24.6eaf297e.js",
    "revision": "16dd933897abb4f67353b2f6a9b1df3f"
  },
  {
    "url": "assets/js/25.a0d50f87.js",
    "revision": "f775ad883c3d2f49d06e4004d5afd7fe"
  },
  {
    "url": "assets/js/26.3cc28301.js",
    "revision": "f014cfae9c23de823300d4a72cc0f78d"
  },
  {
    "url": "assets/js/27.7af76588.js",
    "revision": "9807d99872383a4551ad307e6190c2c6"
  },
  {
    "url": "assets/js/28.26e0d3d6.js",
    "revision": "df0297e082ff4363ee1a14c905ea07db"
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
    "url": "assets/js/app.047732e1.js",
    "revision": "87c4fd46d2c03fb07014d0ebab951b5a"
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
    "revision": "e88307b302bf44dbf0a4dc377e4b0be4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ee6d46d6cb167160e517b4a804850cfd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "894cf92ff4eaa1e84f03b62c2847e608"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ad36d4c7debe3c88240ef606abe684b0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ea7a3022f31725cf476cac74c40e30e2"
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
    "revision": "ca92c354c3f3d65858d403230113115f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9f6ff620f4e90133157c975c8e3f09db"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e9405a3e9fb71fa2e35643d636beabfb"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "09138f1fe64e5fd546467df8dee32829"
  },
  {
    "url": "tags/git/index.html",
    "revision": "90706065a8b2543c08bab9570309de1a"
  },
  {
    "url": "tags/http/index.html",
    "revision": "736be24742e6d12474bf35f58d505bc1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cbcaf486c713869a12f16c69dbb229bf"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5163c9324bfd37c52189d4604106a823"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "b14ee1e8a05b134f7e845fd7eccd8d24"
  },
  {
    "url": "tags/react/index.html",
    "revision": "6f1fae3f8f0f3d98f91b7d980ec65020"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "aaf1c4991ce2e68154f38e22bfbdba3f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "312c0a104604db4f5d79d11a7196f9d2"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d4d6cdf87324b3292a51df97d1254585"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2b228ee8e59cf0dbea25634a078cc099"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0fcb2bf462e199cfc943eb1d840b9bc7"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e08b4b227ea13d829a00c1452212007"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "daed7b65ffd61fc31ac849d7254c4ed7"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "015d1f5264898f73aff97e08361fd25e"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ae9f149c0e42040e4bf087789295d476"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "5b4ebd64902e7037b21472d5caa246a5"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "89f29754a286f50f4c365a1813788a14"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f80d671072141680987459b76da817b5"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "548901e4877a4387486089892142f413"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "99ba0f30b0dbc556474cf157b6b966d9"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "0885675cfb0420014b4d6a0b19552722"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "b9228256b7ef8d28f97b9e2f01cd34d5"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "6d2a7588aaa5271f196c455b742a1ce9"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "b1f0bf80ef70493b983db23c22496b07"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "93f221e6e545dd3802af814820be7b50"
  },
  {
    "url": "生活分享/life.html",
    "revision": "583ed93a2038e481fadd79c971b518ed"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a82ec3672e4e518b7703571d8ec66a5a"
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
