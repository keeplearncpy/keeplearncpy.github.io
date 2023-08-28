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
    "revision": "9cf112bee6bbac8484a4386358b7974c"
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
    "url": "assets/js/11.d3c2368d.js",
    "revision": "0e6aea5c1f18d920def44f4551681a78"
  },
  {
    "url": "assets/js/12.9c2b83bc.js",
    "revision": "cdbf35f69d75f5215cd8baf5b5e52875"
  },
  {
    "url": "assets/js/13.b95123ab.js",
    "revision": "7e50d3ea70e33dbdef30449496c17bbc"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.58e6efeb.js",
    "revision": "cfe2ca5c5f4ba2ad9ab925409c8e9b7e"
  },
  {
    "url": "assets/js/18.6b79e059.js",
    "revision": "29f8c3a6c074b79b869547d0bdffb539"
  },
  {
    "url": "assets/js/19.e237d646.js",
    "revision": "3280cbf045bf6cf7122ff295bdd21edc"
  },
  {
    "url": "assets/js/20.83382a6e.js",
    "revision": "5be64dc1fccb03785aed7e4967a6e13e"
  },
  {
    "url": "assets/js/21.501150c3.js",
    "revision": "f89a609bc8ea542da67e8254ccd28fac"
  },
  {
    "url": "assets/js/22.297e2be2.js",
    "revision": "9a2e47dcdae76ecb9283238e6ce5b82c"
  },
  {
    "url": "assets/js/23.333b53a3.js",
    "revision": "e4754414d3236299b3d7305af10ae3ae"
  },
  {
    "url": "assets/js/24.4a4d351f.js",
    "revision": "61a4ba4d93351aee0a591572a1113cda"
  },
  {
    "url": "assets/js/25.1a99b3d9.js",
    "revision": "5f5c3854e966156c3d3657049f8b4c0f"
  },
  {
    "url": "assets/js/26.7ee7dab5.js",
    "revision": "7fda2791bf08222520f1c5e71ebcf010"
  },
  {
    "url": "assets/js/27.370f9ade.js",
    "revision": "a36d02c038db6281921ba876de7fdb33"
  },
  {
    "url": "assets/js/28.7329b612.js",
    "revision": "7fda59f265432afe63e240da48162533"
  },
  {
    "url": "assets/js/29.3dcd2289.js",
    "revision": "4959961e1ab4a27c07b723dad3cbed8f"
  },
  {
    "url": "assets/js/30.057b3564.js",
    "revision": "00572ba950df907a15cc102c8699e792"
  },
  {
    "url": "assets/js/31.8596ff0c.js",
    "revision": "99a985112c6f775d24f614d8663f86f6"
  },
  {
    "url": "assets/js/32.5862209a.js",
    "revision": "809d009127c57fd234938860f9160244"
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
    "url": "assets/js/app.a3838bd1.js",
    "revision": "2419b96eded930217ab70e9b4ce26614"
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
    "revision": "910b7ff0cac052e80a6c8b84da4ddd02"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "78c673e206e3a2a7b4457f106f81879e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5244cc4031eda0433c24089de0921200"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "1c27058d73ce47f9771dd5108e4a1a9c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b205862c66b40990a9d94c69477ea568"
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
    "revision": "22daf72ae6d4682a6f39ee8487542478"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "69d33c37f949052a0e14c34c4b2c4c9b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "574b914fa70cd780489b7c7c21e5fcb9"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "966dabd37405b8febbad5cf9078de676"
  },
  {
    "url": "tags/git/index.html",
    "revision": "5d05e863b03b2d8ee54e0f481a27ecd6"
  },
  {
    "url": "tags/http/index.html",
    "revision": "164c4683db193ee10042f6fcdcf721ba"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "eeef82a585b5d89708fd36ae1bbbe03f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f4afeb05713b59d055aa95a230e0f1da"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c19dee19211db777c1cb78b12c747823"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "3c69056cafa76c910d070bb82fc2530b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "7ae3423724dfa70ca3c72922e43e6268"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "7b9c87998b45ec1147ad3956967857e1"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "2aadc8b85c5c67eba34507a2937fdd92"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f41f346f4a699f87addb8f27b1864cb9"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "b68e090bb5c093dd257916b9fd212da0"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "fba56c65beb2c8a7b617230f2fea750f"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "59a6c4178a7121ecae99e95ddcbbba47"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d8ab9fd7e518238b7b728566dc140668"
  },
  {
    "url": "timeline/index.html",
    "revision": "12a2ec82241ce46442c114e02f3044d7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "2f3f63dcacee6ab99c7ea92fca8fa0d2"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "99290b68e5a00f6e6b06fe997292294f"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "7c072b523ddbeba9c54e4b8332415625"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "0c2138928e4f5fc8f0c8af0ef4019e64"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "80f8a004f929d1f8dcb9aa953ee8df20"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "53aea33dbc95036dc44acebdcda3cb7d"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "b39b553f89172fe123de087bde6a0014"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "b7eb35afec25b589db474e544997d8f3"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "e135d1ce01604f2660d834c559375620"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "b59023d95a1edd6ee3d51a3f4518e0c6"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ca1ace15786718a5ef97d0db9678c534"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "3af983960fbcd8141044174948940533"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "360a82514b148675e2575191d4a2526f"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "c339481f296cccf3c27a2590334c4204"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "23050c8f587a71652b007349054164a3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5766fbecac165cab22d4460eb6903392"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "09e421dbd9976c1c1cddd8868db2daea"
  },
  {
    "url": "生活分享/life.html",
    "revision": "862760bc2fec4752434b7e61683915a8"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "93ea42d4686ae42a6d0edc8dc9238b6b"
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
