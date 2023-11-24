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
    "revision": "2d8a401f6a4bde0cb930b1f4178eff94"
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
    "url": "assets/js/12.72b6a995.js",
    "revision": "e673d17c5d3d085caccd3996be399e89"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.0389f4ad.js",
    "revision": "7deefef1483822ce7d568d229df1f65d"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.35a0267f.js",
    "revision": "9a7538eb68a9be64b473aefa1216b90d"
  },
  {
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
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
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.2b92ddab.js",
    "revision": "45ea0a57616c505444c7cb6cf07619db"
  },
  {
    "url": "assets/js/23.ac6a31c3.js",
    "revision": "0c5d5ecbd9ff59981f1738ab5dc0be71"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.9ffd4f62.js",
    "revision": "af7aaa83fed15d706492603e541155e7"
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
    "url": "assets/js/31.095b3ad6.js",
    "revision": "1d97fbd418c0527794ab40a776492370"
  },
  {
    "url": "assets/js/32.6c10328f.js",
    "revision": "db1d96d7c2db66900edd9d83c80f0a12"
  },
  {
    "url": "assets/js/33.72b14e06.js",
    "revision": "ad44385992ef4fdbb94e37182859cd66"
  },
  {
    "url": "assets/js/34.3b97db28.js",
    "revision": "0b149f8d0ee45e22dbd59cac54f8ec98"
  },
  {
    "url": "assets/js/35.eb3e68e0.js",
    "revision": "e84ad727af2b3207906d1c31633dd83e"
  },
  {
    "url": "assets/js/36.1892a224.js",
    "revision": "a795d5de048241cd7e53821cfe2636db"
  },
  {
    "url": "assets/js/37.bb3787c0.js",
    "revision": "557f5485e4368fe58651434db3b18fdc"
  },
  {
    "url": "assets/js/38.1d4f598a.js",
    "revision": "855f7d4bc0e631437aaa4e8d71c0f8ed"
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
    "url": "assets/js/app.ab0bbe03.js",
    "revision": "de03f344d4ff8813b15a00381dcd051b"
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
    "revision": "2bb877e96e464c4c8f7883cd8b28ef7d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b8f301a8001ace32db72fbcd28a3188b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cfdfa149407c1e5637fe6bd56787f723"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "5457c32d35e316a440934db8079214e7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "9ddbc84294850038f420354e4a8b2f08"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8c86f2f91a5f76ddb01d9a7a228cda7c"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "518e9c4f59d3061fe9fc308a5c3f77cd"
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
    "revision": "fa80474ee251f10a0dc32cdec476c41e"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "16a8fde0d7e1b012384586e0568edf6c"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "2d4dba4fe7b0b264f935303b07770d34"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "c3b77f83cb6306ab61a0f418451826c4"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a69c104c258aeeaac27ba1c48342d1d4"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "7147f0ae71c083c278caf15fb870363b"
  },
  {
    "url": "tags/http/index.html",
    "revision": "2586714392e6cdd408289897070d6840"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "07978ac81d62260823c445080bc60cca"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3303e25da239cdff746afa2a2c3525a4"
  },
  {
    "url": "tags/js/index.html",
    "revision": "413d2091a7bf13847f5c0f3864736882"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "041862a3260bbed76d6970bf496236ca"
  },
  {
    "url": "tags/react/index.html",
    "revision": "f19448b87e3e4210ef566db175b8b478"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "9208191dbeb479a87fa795795346c0be"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "edf3b9045faf42dd8659610b9226f235"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "87fa989fff6ba35f20080f33b4e0feec"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "18f23abca27b96fa3d2142f71f131a45"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "0051b7b29b9c250cc583f25d69ddc4c4"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1bc5ec613358a76475b55dc8c4ef43a4"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "08d24fd9039bb26043e2d4f9d6925030"
  },
  {
    "url": "timeline/index.html",
    "revision": "66527e944ff3416068bd89a3eef823a2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "184d459ab7aec0ef465370594ddde0ca"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "d8fe6e48d502386631e13b21e7f5a5b3"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "8567ccc96469ff087d15f43da518d20b"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "43757fa1525b4caa61d5813a20fb0841"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "6517fa69d51bf4341272858bfdbc4224"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "f385b0f712d4101ce2235b6f12536800"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "c5eeb7850d24ae7fff3db903f2af5976"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "b9a44e4eafd6a086fae9b332bf22cb64"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "acba99e8d6c14bcd478d5677fdee45c2"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "6aef21bcb2509757480daef8af12d95d"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "61efc67fd439339e87145b83d8978f95"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "7ed3c2a0e7967cfafd2fc1f9c7dca3c1"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "ef4a74c85b06fc1a75e78d4a6a4c4b61"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "ecb996088c13f7041ba241d063184d0f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "e84da4ce31482b74fd588eb71c548bce"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "c09fa812acb13d691476adee5bd4f900"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "cd3c51e05db99d25c8654f8ff9f4a3c5"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "ff3cef927f9f52e965491231e4b662ee"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "8aed97316e2923007622769d2496b62a"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "5bf3871ff304a4906de531f6a304f433"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8e46c7b9469b6ceca53fa2e9f4d1ec2d"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "ed12ca5112a3a490d0d297bdf1fe8764"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "1d3539b3a0f1170ac448c99586f2934b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3e0bdcfd32cfb845d6df09d21b71014e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "974a3a1780a39051aed85bb20b4a858b"
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
