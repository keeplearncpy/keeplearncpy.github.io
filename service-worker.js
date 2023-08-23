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
    "revision": "0327279bb4153d0b5815b07f01e747b0"
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
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.03a61dd9.js",
    "revision": "bbb9b7136d3c7088343a4b055e4a807e"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
  },
  {
    "url": "assets/js/15.0603beef.js",
    "revision": "1a6aa1eed925ab69a8568aaaf5dd860c"
  },
  {
    "url": "assets/js/16.414032a1.js",
    "revision": "6f44383da5b71d45ec2d196f3a2b0d0c"
  },
  {
    "url": "assets/js/17.9e8749f8.js",
    "revision": "5a84d1a13ad2b5a78a07029274bf6ca1"
  },
  {
    "url": "assets/js/18.15680898.js",
    "revision": "13bf20f603be2c5ec7a976e3f98d883f"
  },
  {
    "url": "assets/js/19.1e7fb3ca.js",
    "revision": "10377a18d6e8c91bcc89ee3a9050ab8d"
  },
  {
    "url": "assets/js/20.942b114f.js",
    "revision": "57da18df9608adcc7353946b96c2a263"
  },
  {
    "url": "assets/js/21.8d518c8d.js",
    "revision": "f0c77a5245121a53ff2c4beaba39276f"
  },
  {
    "url": "assets/js/22.232636af.js",
    "revision": "cbaf0e744d809af1842755cdfc73b6ed"
  },
  {
    "url": "assets/js/23.cbed9f11.js",
    "revision": "6a1251fbb516634693856c262f654e0c"
  },
  {
    "url": "assets/js/24.39742c46.js",
    "revision": "af0d0535ddd352829d30557cc8249be0"
  },
  {
    "url": "assets/js/25.b93e51b8.js",
    "revision": "e9582ddc6fead81d6ee337a69bdb1269"
  },
  {
    "url": "assets/js/26.9ec7dffd.js",
    "revision": "420ecfb75640aa8b7f5e6a2157ce412e"
  },
  {
    "url": "assets/js/27.7fb94ec8.js",
    "revision": "51fc51a124ac827ea98dbe1fa2fa5cb4"
  },
  {
    "url": "assets/js/28.655c56d4.js",
    "revision": "bb80943b2b957ae31b77d869b6af9f8b"
  },
  {
    "url": "assets/js/29.f1138feb.js",
    "revision": "a5b5663019a5f737247b8a61247bb570"
  },
  {
    "url": "assets/js/30.782c6bf7.js",
    "revision": "d0e3262a9817ff54887bed1029f6c2b7"
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
    "url": "assets/js/app.526ecdf6.js",
    "revision": "a15eaeccd918b2c3300d7211e9a3b73d"
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
    "revision": "830fc8dd6d95cb033ca4eda641bc601c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "292fb22068b22d7344def09ca7b64a78"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d5ce90423d886a362fd2bef6257729f2"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e305cda3a339a9f1af9846b46ef257a3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1618948a565f15b50922fb67c46ea9ca"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "002d4c5e70da15d1563c304402aa79be"
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
    "revision": "30277058335749cb8051264f8ed96471"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0f46db3c665b54b95bf2ead0a615ab22"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "a7b39e5f8d016d0019a79fdd0380628a"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "39185f7a830e8073e290a3313237bb13"
  },
  {
    "url": "tags/git/index.html",
    "revision": "597d20dd7c23f0234bc64903dd0a5e48"
  },
  {
    "url": "tags/http/index.html",
    "revision": "4329bb3a248aee32a740eec5cfbade6a"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "c6c9307584cf1e1726f9bb5bca9770f4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b1841eb17334bf158df028bc49477de9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "73a8730838e6c275d0c56330e74a594e"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "8fec95dc518d18a3b591a1c44f114a5b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "789ce8656c929d3ddb69b3b8847d7286"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "ae32adb23c4b822cc9413caf3bdcec3b"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "5678321e48e0291f0200f1bdcf623e9a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "dbcafd5591977e250fc412f432635a2a"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "498e7b6dc4809bc940e22ed8786c0ad0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5b382920aba9e055c974dfaf2405f8e2"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "b8321904d99783904b7c5b9bb5cf4a56"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "72f662a0b78aa6cdd92e2b13e3f63eeb"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "dfa0d3b7097bed71cd35a66b4577e574"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d83a1e54ebf73d74e727a9addb58b918"
  },
  {
    "url": "timeline/index.html",
    "revision": "8e38252d6692b849744f8d78b7e1df0c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "beec3e21b344c455d9e5c88239b9eb43"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "fdcf6467ca996f60f18baf413badbfff"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "9a0a37f82575c2889d415685f4c58cd9"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "28009b52d5b8f15cb3192fd0f9ed7c84"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "d7399f0025cec50b0e5783797546b255"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "9a6ed30b8bd3c3fb40832866cc236397"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "89ed41404f3c180da02c7bd2ab8dabae"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "57c6b734d8b8c8adcba3c972f2bec915"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "a5abfc5a3430e7a678a6f0e0fcf68fdc"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "fa28c76d4e0749a5eb1af207116e7f4d"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "e740bf2143d9f18fb8d73d1cfaab3a0c"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "6c7e71d814ccc285a8a2d83e83bba849"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "51482fcde3e5545b3ef573ce91db9a84"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ded40faaa5de3fde93e4420175ce2227"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "5d6381384ed5ff7ca39d299d72e5e843"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d050e0b5d2911bda7c141b55d5e93190"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a9869a67ad22ec5875188fd7d92459c6"
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
