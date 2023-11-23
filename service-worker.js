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
    "revision": "f1620294d3a3f42c623d0807d3ce99a0"
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
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.a8985cd7.js",
    "revision": "02ecb456eb2ad3d6c227433bf45e6187"
  },
  {
    "url": "assets/js/18.8e1dd9cb.js",
    "revision": "f78ead17e1bb07455ecb7f8f86374be6"
  },
  {
    "url": "assets/js/19.c968069c.js",
    "revision": "82b3327fd7f4889fa67b330521fc7415"
  },
  {
    "url": "assets/js/20.1ee69ff8.js",
    "revision": "c32c20db9553d91f24875d079979641e"
  },
  {
    "url": "assets/js/21.70f10704.js",
    "revision": "dce064fb1e2ccf788886c6cce7d9abcc"
  },
  {
    "url": "assets/js/22.1c9f4c39.js",
    "revision": "31afde0518c1470cc65d5d65548f58ff"
  },
  {
    "url": "assets/js/23.9db70f02.js",
    "revision": "4f503faa00c2ac458dfb202de48787b9"
  },
  {
    "url": "assets/js/24.768eb26e.js",
    "revision": "c8347ed179d2d78a8086d86a667026f9"
  },
  {
    "url": "assets/js/25.e1cea6b7.js",
    "revision": "abfbb9d2d7a5d722391f990c889c9a80"
  },
  {
    "url": "assets/js/26.e61c9e8b.js",
    "revision": "a02143bc63c39df13f26fc88aee65e9e"
  },
  {
    "url": "assets/js/27.82dacda8.js",
    "revision": "57a9a5e48eaa46ebda384c1193a1d1d6"
  },
  {
    "url": "assets/js/28.04caaad7.js",
    "revision": "0066d73e4eb8edf60212b21b8c2ab224"
  },
  {
    "url": "assets/js/29.a26a5a62.js",
    "revision": "dd8dd7dbe4a3309d3280833fb07aea40"
  },
  {
    "url": "assets/js/30.6a946240.js",
    "revision": "9c72c8f3d18d19302fe5bc5b97f28d72"
  },
  {
    "url": "assets/js/31.62f87b94.js",
    "revision": "dffe45b42c62728d37230756c98c130b"
  },
  {
    "url": "assets/js/32.8932761f.js",
    "revision": "cd47b210fc4025e2530586b7d71a73d0"
  },
  {
    "url": "assets/js/33.99a4f16a.js",
    "revision": "449fe6a7135242b3c3c46c81d9a4f8aa"
  },
  {
    "url": "assets/js/34.7305beea.js",
    "revision": "7dd24d8be2ff540eb4b5df49c1bc7309"
  },
  {
    "url": "assets/js/35.71d5f06f.js",
    "revision": "65782d2d8dd51ca7d29bc80933cbe60f"
  },
  {
    "url": "assets/js/36.958f1743.js",
    "revision": "63eec3df74e7cefbe1db9088c7d3bc96"
  },
  {
    "url": "assets/js/37.bb3787c0.js",
    "revision": "557f5485e4368fe58651434db3b18fdc"
  },
  {
    "url": "assets/js/38.a39e9a37.js",
    "revision": "ebb7773fdfe08c6f964811fc6295aee9"
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
    "url": "assets/js/app.c5ebbc75.js",
    "revision": "7260b9dfbd87f7b444bfb5963cbd3002"
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
    "revision": "63f543c5b54b67f8b187289de6216db4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c2f83adcbe58565969295e76793074eb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "27ce38e2d3edd60cbd5b342cf0d1f622"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "4331a8ab12c8fef7d3f7a05af716b6b7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "691d9db6b94b3407ba6ebd6e575af3f3"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "a1d389b4504f33513119dbd1c0eb7cda"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "6ccb88174394c98c6aa9080c34c6798a"
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
    "revision": "2b07e8f975e69988c4c5746e5f9c9c79"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "371f341229e4408807cf2135b465cc78"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "ecf8250d6ff01705aebebf9f3c815de7"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "c966e25cf21e7ea74c16ffa5e305eb8d"
  },
  {
    "url": "tags/git/index.html",
    "revision": "52ee7df43fc12899ae85c4a1ffb3970f"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "9d1253a5f131075193dc2b4428a748e8"
  },
  {
    "url": "tags/http/index.html",
    "revision": "c6a914ad13772f67c5a656c9924ee9f3"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "58d40c9ff526a9abafccc7f28d7bb11e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9eff4d5a853b6b9c43bebbe9266eefa8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6d1a51c41219535c0c1c152df8f2c17e"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "a579687ab6f1258b61fb566f6adf9698"
  },
  {
    "url": "tags/react/index.html",
    "revision": "8793fdb50f25e5a961bf5984207f2344"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "2b93c90a042915efe6a293578c8e14a6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "14b5e8615b2c815ee66c0bb2ea03a9ff"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fdc0c0cd01f8e6d2e71dfceb0d99a270"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "0de7791744228a33d6c8aedbf980791e"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "007c6167edcf6d7d44158b601d3d21ba"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "46a3a38e7efc8062c1fee738733a2231"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3f18c75239c3dcdcdceaa27f6b9f2d45"
  },
  {
    "url": "timeline/index.html",
    "revision": "a93d2108fd22b995d67f938c4883d3c1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "f5191b10747572b0ccd6fe3dfa372c24"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "54a2dad82515b798da6103cb8b94d732"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "6ac0cb023830a78fd54e6ff0ee3f0c54"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "5a7c09c63589a70128b79c2902db75a0"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "5dd8264c33ea7feaebc994e3a72c431e"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "713a20165b1ceff426b4a9fe52e87163"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "80b1cec537c7d63aeb55ad855233fea7"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "40f5a67a8cde3c6f99ac9dfe349f4656"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "87f192939c9edbffcd97c900d8fa8931"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "f1225df83ac2ddef0b5ea75d7e59fdff"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "1301f7b2257fd8073d1f7ac3949dacd2"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "3b17303aa53eb45102f2211cbce9d39c"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "ae011539f9c624675452cf484c177706"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "e898e7db5cacea7bd7a282c5c0a9ad62"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "392c5a138fab9622ecc02cb2991a695f"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "59c268bf17711d8d807749b485d0fe6a"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "cff0ad1ee44b44e17e337e3175d415ac"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "dcb667ee57d82c2b1884b0c66fd85fe5"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "c093ba096fb3e5c27163f82e72e6f35c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "607a3652280a13e0855651c2d2548f65"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7645008f5362f672d5d62d1cdf6e422b"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "6167246942f91e2eaf42aded25cdbfdb"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "5c774c9bb56b95bd366855e85e2dc2a4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b1bde45d2b0776e7a986cc5a0aebd2f2"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "8b1d33726a52055ea336ecb3c540661f"
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
