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
    "revision": "a9779e3f74a90f55281cd6a7b2f30b4a"
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
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.fe7c245b.js",
    "revision": "5e174ccd958e84cc3b2242c0a4eca998"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
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
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.f1fe21ca.js",
    "revision": "e96b6364291a0a751b42f0965e98b49e"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.75e5dfe8.js",
    "revision": "d8055665b641badc3b32bd7bbf696eec"
  },
  {
    "url": "assets/js/26.9a51cbf0.js",
    "revision": "19347a5f7dcf2e06caf1945ea7d1c89c"
  },
  {
    "url": "assets/js/27.1b5cc956.js",
    "revision": "a509d39442e763bb4c4a52e4086f4cc2"
  },
  {
    "url": "assets/js/28.f6879937.js",
    "revision": "77bc41dac6d237ef10fd7c300e162e31"
  },
  {
    "url": "assets/js/29.951101b7.js",
    "revision": "b940e47f7c8b34a3ca3f1f877f3b4b50"
  },
  {
    "url": "assets/js/30.0d2829ab.js",
    "revision": "d245ede5cf64a6a0ec334097fb410b47"
  },
  {
    "url": "assets/js/31.095b3ad6.js",
    "revision": "1d97fbd418c0527794ab40a776492370"
  },
  {
    "url": "assets/js/32.a2d5f0e5.js",
    "revision": "f72dcd4d6b247e7549a48b62c6eea655"
  },
  {
    "url": "assets/js/33.846ce04a.js",
    "revision": "5c10c64d33df3b3f01068a54390b70ad"
  },
  {
    "url": "assets/js/34.c3a3cd0e.js",
    "revision": "5beee4852e3dcb1a44f7aec409408269"
  },
  {
    "url": "assets/js/35.eb3e68e0.js",
    "revision": "e84ad727af2b3207906d1c31633dd83e"
  },
  {
    "url": "assets/js/36.8521cbb5.js",
    "revision": "b037954b425f9b17c982dc0e4a2b2d66"
  },
  {
    "url": "assets/js/37.7515be35.js",
    "revision": "aa4d97b84d6ef6cf9b3ea954587fe15a"
  },
  {
    "url": "assets/js/38.8b3cb783.js",
    "revision": "30ff85bcbd714ae4518bf882d03e4982"
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
    "url": "assets/js/app.8f8caeac.js",
    "revision": "15a6c44c221a3907e8ec06a2eff70587"
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
    "revision": "b6a8772d9b1964fabda532a28c8907cd"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "173fb7a1e344972acb523752894cefb6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cde9257b156dacfa65caa7388bad3242"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e4af458035f42018e946f2f57147a601"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "85f89caf5305776a8326f4f1c9eb52b9"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "0b5c22da9bb209db019b0db63c3f6351"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "f65ce806d538b0b940717b69bee3d5d2"
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
    "revision": "445e34e33dfe1742721cc451037e4a89"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "98a9b04304637016fc0129823bb4d657"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "4bfa77a2ff31d457fe9d761e61ee61ad"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "860727fc069183ffbb88120f7d85b830"
  },
  {
    "url": "tags/git/index.html",
    "revision": "8a54415f01cb825ad7203998816ddcb3"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "5fe331fd0e2d8c1fc2f5e00bd6d1b13a"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b184642a558c7a8a3a35057a6c178469"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "3f9515729d5641e9112a90bf411636b6"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6d90f1c130e36a452e5fbc218c6255c9"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "f0843045451d18c5b60f5e6e4f81956a"
  },
  {
    "url": "tags/react/index.html",
    "revision": "b6fdff5b9f1495314eee714ade19fa3a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "e932bf675946cb4f9fae286de523323f"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "255143a990031645165b789a11c3a386"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "8f04dd5912a4f043d30c71dccef7b6da"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "137acddf9a53b76f6623e124ebcfd19a"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "0b6822ba75e148f6bfb6f6b87fab38d5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "9ff742cdd9f78f37c4a676701bb210a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "1449ccb28fb7928101acb98422b1e366"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "9fc7c11ecb6dcb762c7365391dbc67bd"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "1da6e62277878d423e6fbd927c343ad3"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "a26f16e5057ff38cbb92a4f584425a56"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "6eb89d56e13daed5df9cddc51f34e2b6"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "ca5448a72a181d807b5ca27a0a0d638f"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "8b65e9335754003b4b777e6f9843e806"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "d98f946e1dae2b6af191381ea58965de"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "4e6e6855da1bab208bc6cba371d830de"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f92d163a22f6d22f68c9aca5b90cac35"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "f206d4546a4ea44924c64c766e6a4a78"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "1dcfc96e362f061a27765b90aa5072fa"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "ef188ec1c0ebd2df3ab67f4df78ca39a"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "b016410a243b034c9aea46e1f138df83"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "ebf5afe9f1b6890cec4881f07d779dc4"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "0f26e74ae9c17a0cb87518ad31c09287"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "6394d97eb7772be01291bb37dd291b27"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "58d2b72fe2d97adcb9192611a26a2c8e"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "9a1ac31b3580ab92646dc1454a4a0dcb"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "e0b9d93d1d9e50e4fd24e3cd5e84ac09"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "1502b1409564f19156107184ce104db9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ce2c226a86d6dd760070fb16d8c6e304"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "31a743576a8111d3c1378a6cc3d43079"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "e1878c7421d9341bec329d0b64672fe7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f7930164913ed6731b95feb843f65e84"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "b62035ad8c0595e27a8a919a05479f43"
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
