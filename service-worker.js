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
    "revision": "e78c8a2db2551d25fa7a5171ae85d00b"
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
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.83cdd98d.js",
    "revision": "3b26a91e9dc9010e51bcd23ab48b084d"
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
    "url": "assets/js/16.3091672a.js",
    "revision": "090d1ebcb56a50a63bbd21eaad5bae91"
  },
  {
    "url": "assets/js/17.0c942475.js",
    "revision": "4d3d9a40b8b19149d97a7619f1ec0d09"
  },
  {
    "url": "assets/js/18.f3ec8925.js",
    "revision": "fb985770d70a38881fe0a3a3f69a9e93"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.4a8d0c1b.js",
    "revision": "c9d963387f9a2ad590b8eff298c6d43b"
  },
  {
    "url": "assets/js/21.b30ac1d1.js",
    "revision": "719aed487da292f20c6a20af5027d703"
  },
  {
    "url": "assets/js/22.2b92ddab.js",
    "revision": "45ea0a57616c505444c7cb6cf07619db"
  },
  {
    "url": "assets/js/23.bca271fe.js",
    "revision": "ef8e8205991c003e0692e5e97aff3ec9"
  },
  {
    "url": "assets/js/24.5fcf9427.js",
    "revision": "24547fda200b87285d874e787fd7ea8f"
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
    "url": "assets/js/28.506687d3.js",
    "revision": "51651f8173c3a2941301ecce0627843d"
  },
  {
    "url": "assets/js/29.45a718d2.js",
    "revision": "a3f69b663a4cd16c9bc47e42f18d660f"
  },
  {
    "url": "assets/js/30.ab30e83b.js",
    "revision": "c6a86f5c48bcb5736c4bc98fbc3e7b5f"
  },
  {
    "url": "assets/js/31.60be2054.js",
    "revision": "7f780ffc66a355ff38cc5f2e5c73cdb0"
  },
  {
    "url": "assets/js/32.fd8f6a62.js",
    "revision": "e03e29ff4b9f0021a8778eddb84dd8b8"
  },
  {
    "url": "assets/js/33.2ab4d850.js",
    "revision": "1458b7223acfaa6e063d8f63a52a2176"
  },
  {
    "url": "assets/js/34.b78645aa.js",
    "revision": "5de816174f9fc8730cd8a33e7b74d11e"
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
    "url": "assets/js/app.b1d1bfcb.js",
    "revision": "6cfed19965e7fab123088efcec5c1f2c"
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
    "revision": "24ed6282c4a02ea5c0009d627c10708c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1c0434c00d59521027552e1f8c1e636a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "df49c2c257705bed465557b882c13359"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "92e5498d730609a49c14a790cf9d0312"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "42cc1ef054fd4c35441e6de6875ad001"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "014772998454369895f94a142232649f"
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
    "revision": "b237d7932b5af42094c25b76419e0a1c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "929c1d728109bb17157938d1f4cee7c9"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "1c8856f98fda75c76415543f90e072e2"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "58070902ed752e3e337919c5aaee024a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "e77a33cfc7a0260b56c9912e62c0341f"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "0b5fe009b8c8270363cc6785a184e072"
  },
  {
    "url": "tags/http/index.html",
    "revision": "cdf71cdfc5f0aa0b1e57b31ef95190f0"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "9098105b7ce7018815632b4792cdaa03"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e45e201025042e24b6d1406897c69d5b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "77d52bc3ab36317609d0753a89d47c58"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "74593b173b4efbab89fd7a79d769ffa4"
  },
  {
    "url": "tags/react/index.html",
    "revision": "a6a06448fdbfef2fdf1d543a534ae30d"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "6b06ee4ff75138db053eb3d30404ef72"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "2ca9dd0809365dd46a03cf95ec4d8f4e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "776937b75ead4321b642efe8eabe84f5"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "48efe4f6354c90c15f8e6655b1743942"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "1b73308ffa4bb27524e5ddae176cb819"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "3e721dc0c5d07d377e8876e4476126a9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "62385c7c35adb60ea348bf99463010f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "a3a68809626d89ddd0f19f89bdad49d2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "2a43ec916a72cd812dec4da114fbed91"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "a9f568629208a73be28de41270251458"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e41f774f4d43b3de79081a7728e30511"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "65a25b394af910104681912657a2913d"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "0f79cbea308f98d44fd531f5ce1cbb58"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "ce1dc97495d8f7207fc09d72bba4a536"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "b88d005e08c94b23d2eb48fbb1c76ce7"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "420a8817591a287c77b4a646d44e4998"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "88aaba55d43293d2f0df978cb9d6fcda"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "fbafaa6c9771b7bd96c9ec0a5cf29ad6"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "79d630593b615edde05dad402295a045"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "2789db278914548aded5e4add51871ec"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "83107caa48028ad86e6733b60834586c"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "05d146065f22d53501634a89eeb9a685"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "ec7458c8f4e730697b4ed872d1a0984b"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "62d5ca913311b68be05be085ea79d6d3"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "d11163d892858e1f10f25a735bb86c9c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "bb1ea7cabb493e3329714a94292568d6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a8a083e6ed71c10cf02e885a86d29307"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "e87d946d6f5548ff4d2b78aeec1a3fb6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5334ae51dd0a8a4a7f9927c41a329481"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "ce684f02cd0b9363f9d2dcf9365c50a3"
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
