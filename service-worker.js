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
    "revision": "72a764bb330d350114b4ced298415254"
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
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
  },
  {
    "url": "assets/js/15.14b7631d.js",
    "revision": "1464901ee239ff1e9bf7ef53d33624f2"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.a8985cd7.js",
    "revision": "02ecb456eb2ad3d6c227433bf45e6187"
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
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
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
    "url": "assets/js/29.951101b7.js",
    "revision": "b940e47f7c8b34a3ca3f1f877f3b4b50"
  },
  {
    "url": "assets/js/30.7a0445d4.js",
    "revision": "61bce6a5796c204925963030fefea4ec"
  },
  {
    "url": "assets/js/31.dc565286.js",
    "revision": "eaa3c9a566ebdc8819fef7ff06455823"
  },
  {
    "url": "assets/js/32.6c10328f.js",
    "revision": "db1d96d7c2db66900edd9d83c80f0a12"
  },
  {
    "url": "assets/js/33.999e72c6.js",
    "revision": "8946cb8a6a81b91c88d06157dd535c5f"
  },
  {
    "url": "assets/js/34.3b97db28.js",
    "revision": "0b149f8d0ee45e22dbd59cac54f8ec98"
  },
  {
    "url": "assets/js/35.2f3cb1b8.js",
    "revision": "f1829b1a47b561e1717cc91e9c95b116"
  },
  {
    "url": "assets/js/36.1892a224.js",
    "revision": "a795d5de048241cd7e53821cfe2636db"
  },
  {
    "url": "assets/js/37.e6bfa5ce.js",
    "revision": "1b48234f1e0398613f3d8ac0313519cc"
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
    "url": "assets/js/app.4b70622c.js",
    "revision": "d0d5843de26e8499a4607679402ca7c8"
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
    "revision": "b3f5d85602b63030c2638ddeeeed337d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3835c27889372028d14e786628264d96"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "32ebede2210572636771459be14b9ad9"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "80d156657dbe9403bd2527d297012e9d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "1a7c30c8c633c71cebfa522c5eaa00d4"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "4e94720c915e035a8541d9bb13739de8"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "56440d26f4513202f321f776db000858"
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
    "revision": "d62a621493ace705b1161a4f98a08d8d"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "bc3904d1e6e5418f290aa3e95df2db5b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "de4501adb16f0d664d403860ec3109f1"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "793ac407bf9828ebac092a1c49bedc7a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "f5d86bfedfb5dc1c6b753dff9b0bdee3"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "90338006898f31fad060d6386c878ed5"
  },
  {
    "url": "tags/http/index.html",
    "revision": "d952660ef363e959f9511967a47a3548"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "18abfda1a2feeb12d104bb42378ad626"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "34ee978aa4b55480ada7c996e51041ae"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6e398d9ce38ffe68bc3ef30fedb27f85"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "0b1673a49001cda4bbea0e2411efbc4b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "39d9d9c4b6d7cdf75d4082e508c014c1"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "3f340873c416101f41cbe02c62f1c7b5"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "89de24ce6fce034c3ccae68eae18b72c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0f40abfdd9365b7c41472b3b42e1631e"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "3628c30efca4b6e12af5a016bd60e895"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "8266f8398a4cf8ce29a89d14238baa59"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "7aaf6a6051393b9cdd88bfd3905a85e2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5b6fa25f2e248cc7cb93a82178de63c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "010b161ff7969327563378ac3c617c37"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "9942642df12fd1d678b77a5e0b89da9a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "2d0d97df5fdec9412d7dd8e029b406f5"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ae1bfa5430b107172ba2aef064de1f43"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "e686f33f3f6a79c589d4aa9c0bc12143"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "8140a0e73dd3b055d260e5d0e739f565"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "3c3239a292bed4f098d0a28b71058029"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "c30649104161957f0c6dd816919a8a14"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "1b6f516387b16b41f5386a0eac9a8686"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "b08d1652d4b7bf2b1773589075408306"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "357d627a95050aa4a103093c852dbbda"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "c85c4d18e6ceafda73103fbba32713ca"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "90fc13c490a53648cafeceff743ee093"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "08d28faebfe25183651fb54e13efab38"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "ab66b7f676b90d13020ea8af16c8e2b8"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "3777b3294ea193b7868d70a6ef32a28f"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "30d2e6d69d459fdb698aa29da15b9c1e"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "3a66960469487fe95f4d7fa7a255d123"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "c6d5649bca9d25a7c8ef6d129d59039d"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "e3337927a2f3c3a7c8d069a922ac5898"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "164e7742d03aa7a030317ef312fc4954"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c76a297aada61cc0e0c5f17e44984833"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "db513f90153d69406b7028e0deec42f2"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "cce444dca42d1b949a0bc0109519e4df"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8c0d6c68a05576af42fabcace84d579a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "4168ec87b876ca44498001b87424b45f"
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
