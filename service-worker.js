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
    "revision": "deaeee1a9e60864f18827de1141be959"
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
    "url": "assets/js/11.e027dcff.js",
    "revision": "b8115a6446c95d3a7944b543f0a146ed"
  },
  {
    "url": "assets/js/12.9c2b83bc.js",
    "revision": "cdbf35f69d75f5215cd8baf5b5e52875"
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
    "url": "assets/js/15.70efe991.js",
    "revision": "03361088347e8614b51f63018c1de017"
  },
  {
    "url": "assets/js/16.414032a1.js",
    "revision": "6f44383da5b71d45ec2d196f3a2b0d0c"
  },
  {
    "url": "assets/js/17.083c45e7.js",
    "revision": "c8e7a9610091962ba185cb04c0824cf8"
  },
  {
    "url": "assets/js/18.28d68ff0.js",
    "revision": "995c18c5a469a69359c53da938eec26a"
  },
  {
    "url": "assets/js/19.7e3fd812.js",
    "revision": "7eb24b7d4992d019ebd0ff37ac01530b"
  },
  {
    "url": "assets/js/20.6b8aa256.js",
    "revision": "fd6dc60eac7b2da4618c6110ac7a3bfb"
  },
  {
    "url": "assets/js/21.15ea705c.js",
    "revision": "caf31b7985241ac53c260928b556d544"
  },
  {
    "url": "assets/js/22.3973d1e6.js",
    "revision": "4cb8af8b1ed34a1b3a13b48f2634db4a"
  },
  {
    "url": "assets/js/23.bea4c760.js",
    "revision": "8d2ac4fe4ec60b5b2766c14ea803addc"
  },
  {
    "url": "assets/js/24.04164a94.js",
    "revision": "c190289087cc9a8c12dbb9d6007f2f78"
  },
  {
    "url": "assets/js/25.6192edde.js",
    "revision": "ab416fdb8b56785c039df427d08c6315"
  },
  {
    "url": "assets/js/26.47a9bae9.js",
    "revision": "acd9d3aff3ec06ac051c9fbac95e1455"
  },
  {
    "url": "assets/js/27.6bf4715a.js",
    "revision": "a542d0e5c29ab5138fad295938cb53a0"
  },
  {
    "url": "assets/js/28.24b9dec5.js",
    "revision": "9b25f4b12d50f845e412e7298e0ff268"
  },
  {
    "url": "assets/js/29.da1038c5.js",
    "revision": "bb00dd8b898c7563c82cf5529f920745"
  },
  {
    "url": "assets/js/30.502c048f.js",
    "revision": "7e7cc7cd52c78ca472ffd61bbe4817ed"
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
    "url": "assets/js/app.6c64143a.js",
    "revision": "eb295223cce24c2901c36288ea7a9a06"
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
    "revision": "454295a42756b646ed8cf967fc3f857c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3e4c4bd1ff3e606c3ee3d3771f6f0523"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "dc22b7955ef7c7905d7d7163dfbd7c2e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "db0c7db086bad33f52b8f6eb8d9e3a88"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b817a27d656e4840ebcef4723e219e44"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "42a850a8d2179b1873c5fafc5345f738"
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
    "revision": "6ff329742f9e3dfd1ce4ba28ffb234de"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "25cdc0024727a982b94240774757e5d3"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e083f58bf65847df8680112bf3cd3ffe"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "a1b4faba0ccdc69dac7780b56df89173"
  },
  {
    "url": "tags/git/index.html",
    "revision": "3263b86f93c6d70f71713c61d21b71f8"
  },
  {
    "url": "tags/http/index.html",
    "revision": "e1993201e4bdfe8af1af49cb1092df57"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "dc9a6f17039fe9cef969ffad3569e026"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b26050a2495112296a5a867863df59e2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "14d64dec9061e1fd5f9e6273bd29cc24"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "5b6233c4d1c6062d3cd6bc1dbe974579"
  },
  {
    "url": "tags/react/index.html",
    "revision": "e53341e5b6a208713b8ca2aea31816e0"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "082c60e21fbf39b9e0da13119a8aab60"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "e75ebc2102eb901319ac51bd78e7a3d8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "11117357545371a03388c231113ed533"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "b1cc397c8ab33141b52326cb46845943"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "855324c6b3887c40be0a24d67bcfbb97"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "8cd63ec023ee04ddabd465a58eda317c"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "15d18d23ec504cab2ab453cee3f21bac"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2b27ee3a0d82544c273f6f526a02f053"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3ee795efce690c629b2d88c074c7da39"
  },
  {
    "url": "timeline/index.html",
    "revision": "7920f030b8d1635250422fb9d83c6cf7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "70dfd9a5e90005e1008d49887d76fc7b"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "42a1ded856b92094367c07f06303e958"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "f6cd53c4d9c814aea1cd0a15a7d8ec6c"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "e1aafcd6a931f0dc46ada1a4855618e1"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "3097539cb84995bd3545b7ae3e008d2f"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "c17691900fe066e62bd70b4616c1f743"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "15004ecaa5fa8cd90bfd7652fa6e373b"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "4877c1a7caee9c1233192973fd625050"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "c060b5086a00a8f4c78b26137c2aeff3"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "82b5427043a379f401038bee21d78aa5"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "5a03b5cf4f324a8dccff6c5bf1422358"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "31c34c3b19f470a9adc8819aa85afdf7"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "2fac61ffc6e7d9a0024bb1843cebbe16"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bf9b0d16eb1de262e163fbdaa359de89"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "9b6e385d5fc6085011a2a5b19c4947e5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d7c8cd6a3e90651475ff59d7853c49a3"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "b47357f514e2d3bce8d60196900b00a5"
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
