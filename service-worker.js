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
    "revision": "908996cffd28770e4867488fb777906e"
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
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.a99effd4.js",
    "revision": "d182765bab4f5924c9c0455095ab029d"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
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
    "url": "assets/js/21.1e61f9dc.js",
    "revision": "160e260e138ad049a9dec2320a70e668"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.ac6a31c3.js",
    "revision": "0c5d5ecbd9ff59981f1738ab5dc0be71"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.baa51eb7.js",
    "revision": "89832e5398f4cfa1fbcfeba6f0e98453"
  },
  {
    "url": "assets/js/26.d34ef5ac.js",
    "revision": "8c05f10d0f28be7ece2095871d50539f"
  },
  {
    "url": "assets/js/27.740a98e1.js",
    "revision": "76625dbc4d38098f5faa0baba7362be5"
  },
  {
    "url": "assets/js/28.1701a94b.js",
    "revision": "8a760d0ca99fa9499f62290beec6c96b"
  },
  {
    "url": "assets/js/29.82b4bcb9.js",
    "revision": "4086473b677cd61042b93aa739a57d37"
  },
  {
    "url": "assets/js/30.004d8755.js",
    "revision": "023d56471cef0afdac6af2c2c27e13ec"
  },
  {
    "url": "assets/js/31.ed0836fa.js",
    "revision": "4a2a7bf02f239dac0ca27d0a900bc359"
  },
  {
    "url": "assets/js/32.0db68922.js",
    "revision": "813bbfe5d90fe0ba623810764b7d4ae1"
  },
  {
    "url": "assets/js/33.72b14e06.js",
    "revision": "ad44385992ef4fdbb94e37182859cd66"
  },
  {
    "url": "assets/js/34.127d937a.js",
    "revision": "fc0457094caca51d3848b3db3456baa4"
  },
  {
    "url": "assets/js/35.71d5f06f.js",
    "revision": "65782d2d8dd51ca7d29bc80933cbe60f"
  },
  {
    "url": "assets/js/36.f773bddb.js",
    "revision": "47cbcb16e7a3de30f61421936c1eb7bf"
  },
  {
    "url": "assets/js/37.156fe2cc.js",
    "revision": "a277294d9adff460c8f7ab60cb7287a6"
  },
  {
    "url": "assets/js/38.036a9dd3.js",
    "revision": "1f746b927c818bd52411117ee91ed472"
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
    "url": "assets/js/app.15bee42b.js",
    "revision": "7b159daecaf30ad40c350f86d43d9be6"
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
    "revision": "f049d1c250cc53ef5004ec525bd12512"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c66c4c71aca66bd7c0f7c360a5e4bff5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6bf2677ed0a18029bfb520b6a06f8c01"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "362fd639a631fd7dc4fa37dbae4d1cb8"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "7d60646d9826b59a06364ec725be0322"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "2df57ff3258ded69e1d49c28d3c2ae63"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "4601bee2e1a1e50791b147516d3d005a"
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
    "revision": "951c50079e666f40ab61ba4ecd4fffcd"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "45097c56e2ff81b9c05b1a59864b0bda"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "4a6d98e5e56f69aab8560bde61a8d075"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "fef7b2589f6d7d8a67d8715217fe9b72"
  },
  {
    "url": "tags/git/index.html",
    "revision": "dd44837c25c2cc332c3dd6f10dedf000"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "d59c2cfc885b941442ce957f548b91e0"
  },
  {
    "url": "tags/http/index.html",
    "revision": "c5d1d72059eff9ea1c68b5dc91a8b4c4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b49ea6ddfdac9f43e0e71715a1b187db"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2469e980cb1e7e9b52ed111f37daec96"
  },
  {
    "url": "tags/js/index.html",
    "revision": "815205d4504873d68574eac911ddd0c5"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "1cb22061df643285979b0e2847ee620a"
  },
  {
    "url": "tags/react/index.html",
    "revision": "45b03d9ecf0fa4a47b2d0a4492fc1a59"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "a2c276e0aa8653f60cade638f5dcf898"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "0afa6f9ebb79ae257ba6687264053670"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b7f94d541eb649492df3ffc651afe368"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "48180d7a5652a83057e4c65c0118ccd5"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "6f1de1b4bf31af024f2f20655a46cc02"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "02ca1bc3ebe746b21e30a04bfedb585c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "08279d44649fbb3a849e46cce896e854"
  },
  {
    "url": "timeline/index.html",
    "revision": "41655395681f6ccdc477f963be979905"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "10e1fae4f7e3cad053f4fc0ffc238201"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "59ae29c9f5d5b8997b3c9f945c9c39ea"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "28d5f39e2692d19576b6334ef336f813"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "badfb79b63c1e1e91e60990cc35b94b2"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "4bf07ac105fcc9d8ac2f990e78867199"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "485c9660a72e104b15c9f61a2d886612"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "201c305b37b3b1495585ac8e8b423c6b"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "0cdc6c4ae4cbc653fc9c7ed9f284347d"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "57cfde572a712129715ce3202a7366e3"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "358d21cabc5e9c091608899f724f0df7"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "27dd4d640918ba8bc72fba114cd623a8"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "551db08e7c2cc258e35adea9a24f435e"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "e9db214f0eb3ed850ef1be01cba55371"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "4b32913efa535267570c3f25ea87cc6e"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "f742213dfdc0d317f9bb9d7fc7b677a6"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "f029bbcce6a4ba24ddd77c6ed9169f1c"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "c29f674bdb9bd9dc17b5265472357051"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "673bb90cdbe41266d0e7f416277cac27"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "3844da8660f114d9aa903d2d2c430f8e"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "1eea07c9f0047a67404e28eaea2fefa0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4b01c90631aca8124f356359ff3a6e39"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "0d48145c962d1e65bdc2a2bda39c94bf"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "5443ab363db24fdbdc5ec9677aeb72c9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f91a863bdb1bf40eedf25215c5672b7c"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "3af140c2c49e6ec8606d45ae593077a9"
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
