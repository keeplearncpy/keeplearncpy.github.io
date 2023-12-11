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
    "revision": "aab395fa6f032cf88ae1d7332dd0eeb1"
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
    "url": "assets/js/11.e58503a7.js",
    "revision": "c112dac0ef2ce83731aebc186a15f46f"
  },
  {
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.03a61dd9.js",
    "revision": "bbb9b7136d3c7088343a4b055e4a807e"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
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
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.6c5e9651.js",
    "revision": "92feb882819c70eeebf5287cfec61e43"
  },
  {
    "url": "assets/js/23.7a9f5d7a.js",
    "revision": "e4383e4ab0af7e57b4a5bb59c95d4d21"
  },
  {
    "url": "assets/js/24.37582efd.js",
    "revision": "b615bfd7535453dc3cc4726699964077"
  },
  {
    "url": "assets/js/25.75e5dfe8.js",
    "revision": "d8055665b641badc3b32bd7bbf696eec"
  },
  {
    "url": "assets/js/26.e5c41770.js",
    "revision": "1c8360a9bfaa65e7684f31f26ce062d5"
  },
  {
    "url": "assets/js/27.1b1d5d26.js",
    "revision": "b699d8d9572299f6164fe3a4edf34089"
  },
  {
    "url": "assets/js/28.f6879937.js",
    "revision": "77bc41dac6d237ef10fd7c300e162e31"
  },
  {
    "url": "assets/js/29.dc9b2974.js",
    "revision": "1e4e32ece8a5c6b1491dfe4c06b5fa61"
  },
  {
    "url": "assets/js/30.6a946240.js",
    "revision": "9c72c8f3d18d19302fe5bc5b97f28d72"
  },
  {
    "url": "assets/js/31.329712e7.js",
    "revision": "75b9624525676eb66cbd0d26d4b2177e"
  },
  {
    "url": "assets/js/32.2be0fe19.js",
    "revision": "a348ad3aadb420aadf84b29169b84394"
  },
  {
    "url": "assets/js/33.4d8de15a.js",
    "revision": "4a2fe841e318c01ce219a5d73575d36d"
  },
  {
    "url": "assets/js/34.e50feabf.js",
    "revision": "cf33bcad68d7053b3aed1432a9802bb4"
  },
  {
    "url": "assets/js/35.71d5f06f.js",
    "revision": "65782d2d8dd51ca7d29bc80933cbe60f"
  },
  {
    "url": "assets/js/36.40234a6f.js",
    "revision": "1a94ad38b4e64d059beb1b1724062e5f"
  },
  {
    "url": "assets/js/37.bb3787c0.js",
    "revision": "557f5485e4368fe58651434db3b18fdc"
  },
  {
    "url": "assets/js/38.5a693da4.js",
    "revision": "0ae2f9a0538a43a5514c01fe4afe1844"
  },
  {
    "url": "assets/js/39.3dd98354.js",
    "revision": "352930544026ba5b71c299019a8cec98"
  },
  {
    "url": "assets/js/4.08080986.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.de164594.js",
    "revision": "4fb52e060863d7417deb22564163ef5d"
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
    "url": "assets/js/app.9a90a6d4.js",
    "revision": "b0935c8a424b875d4de53fc6b206b228"
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
    "revision": "7fd4b7ae8ade214cbed8d2827bb8b302"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bcb63208c907ccdd17b803f37c150c34"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e4709a22d0a7f7cf521ae1920f1152bc"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e0f6297b0e05f951dd897e915b4bb783"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "e9d9c1582394f5b2f539d8f20722fa54"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "81b33efa5f8bbc54a466a4790c343693"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "05d105cc675324513aaa4e923b05e0ec"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "60900ee2496f86596a2ec259496713c5"
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
    "revision": "6115fc6bc0b38252f545ecf9d4ec1586"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "a5239132a326b79c0d06138ccd308d9a"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "b02c16f0f0c88964a6625b9cf0b8f265"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "0cc59f63065935087e88d2ac7fc87c4f"
  },
  {
    "url": "tags/git/index.html",
    "revision": "f7d0cd91e7ef7c1c7cb8396fe1470e3a"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "69e1aa62dffcb98fb0425f95b16a4fda"
  },
  {
    "url": "tags/http/index.html",
    "revision": "02ba5c53ec9379a77c9e11c75528382e"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "83071347983e55ea923dd8e9fb054af3"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8c09088f0b588422d59d62b9726584f6"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "af067146aaf85f2709081106d84b401e"
  },
  {
    "url": "tags/react/index.html",
    "revision": "d553cd8dce5be68f2eea43fa65e0af0c"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "c554d047501ee0354578603ca576454a"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "aea649558b0d182b686d298bcdd085cd"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "d55ec239ee224d63f05afb2f6fdc9261"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "dd80049aa6de11149dda23c5cb080f73"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1ad2c6656529195cdbbb908aef34cbe6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "65c648a316fd3a1af8ea2e0f899a5fa3"
  },
  {
    "url": "timeline/index.html",
    "revision": "347225ab275faa425480b9f34071cc40"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "a41f125facd5dc35641d2557b5c69550"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "a9426f10cc99cc5879859f51fc8eab18"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "b39f7f54df9bf82c4934b52384484227"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "d2d7df777f5922d7b13797b8f78f8bde"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "8d8f5c32c1202d2110c2ba12213a472e"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "008f73fc7de5253ea57ab3e0ad9fa9c2"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "eac860b07ff0d46b7b6c234be6774f0c"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "453da914e984cd9f613d3c6e97874545"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "d145d7c27b90df60d51430bd4b62e6de"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "aaacf712bdd58851ff18457c27203249"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "f977737f110ba58533cdc080e0e626a6"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "2007820e7c3234843df119abffa1a630"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "a90611dbdbd250e81afa4999c2f92847"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "99bbe7f1c8ab21225cc6783e01c03b9e"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ea548e46a745d11b97df6cb408b4d393"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "c4912974ded98f45af29cd2355f667f9"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "d5d133318957b534a829790c53bdaf7c"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "ba35fae5ab9517695d97a29a35ec2a42"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "81cfaf9eb1b0a26a953b0ba1b9b6ce9f"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "e62c4668da391ee62168248eddc4ede8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "370933b5553c22ab29f74b496391a121"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "34fdb63ddbdf145090c5cd4a6c4653ac"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "f877738bdf19198952364916d344ba33"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fe637aeb736bff9f6b43dd0909a8f7d4"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "1a8dee5679a0d967734c285d110870fe"
  },
  {
    "url": "项目搭建/vue从0到1项目搭建.html",
    "revision": "659dbdeb766538d78c399e91ffc26225"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "1aa9df419215c68aff142c56de84f923"
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
