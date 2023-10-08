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
    "revision": "3e3e01a378fa719126c34db177d8097b"
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
    "url": "assets/js/11.475c96ec.js",
    "revision": "ac695fff3c0b007e74932f04f75873dc"
  },
  {
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
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
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.8d85993f.js",
    "revision": "c865338917de21ffb3ef2efdea505860"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
  },
  {
    "url": "assets/js/19.c4e2ea46.js",
    "revision": "1444c49ff8fc3cd44420a14a3dd6c91f"
  },
  {
    "url": "assets/js/20.297dd85d.js",
    "revision": "2b978397d79c956570c27e1e2015ed47"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.993f21c3.js",
    "revision": "615d401a4a10bad8e79fef93f29853a2"
  },
  {
    "url": "assets/js/23.58f82ce7.js",
    "revision": "5641addf4c086838d50be64f4e437948"
  },
  {
    "url": "assets/js/24.3f6972a2.js",
    "revision": "6889985c30f7358796425544d8937f9b"
  },
  {
    "url": "assets/js/25.26d950e0.js",
    "revision": "626590d099861bc5fb6d1d1c9a0ffdbf"
  },
  {
    "url": "assets/js/26.3277f17f.js",
    "revision": "081004dddabfba6cbb7bb62e7ca3200c"
  },
  {
    "url": "assets/js/27.95bf5a1b.js",
    "revision": "c9d7fccf772da3947525787e2e71bd02"
  },
  {
    "url": "assets/js/28.736c6e4e.js",
    "revision": "adf3e7d48800a852122a148c4227bb7e"
  },
  {
    "url": "assets/js/29.a4f9af49.js",
    "revision": "c412c03c315b28b20016e801b60d1e7a"
  },
  {
    "url": "assets/js/30.eea3fb18.js",
    "revision": "fee0a9781133e08ffe0ac2198b3eef38"
  },
  {
    "url": "assets/js/31.b902f1c2.js",
    "revision": "33625e65b22dd8bae24b8162f2938192"
  },
  {
    "url": "assets/js/32.5b7d837c.js",
    "revision": "bc90bd695431a06f40de2233c09c72a7"
  },
  {
    "url": "assets/js/33.adb290a0.js",
    "revision": "8448927f35839b4a7a7986fc4ca2a426"
  },
  {
    "url": "assets/js/34.3bb7fb4c.js",
    "revision": "a21e58e2898b612580633d2aa2826498"
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
    "url": "assets/js/app.a3e581bf.js",
    "revision": "73524cf0d0ccc807f9d434247a13790a"
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
    "revision": "d29a7291dea846f7ad5c86f7b314353a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "02d49ed532348977474a3d1a65463cbb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b1b4d1d7772b374f790d18e5dea78393"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "56f41bc57edc656b3a3727bc55b0bf66"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e61fdee48113ed5468f9fff842200143"
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
    "revision": "98358b8f104be912c61421f51fe3f2ff"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4308c3d093545e2514a8da923791e65f"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "3dcf1d3ea76ebfae9828810433301f1a"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "b650e1b7410b62472a3c153bccd2d91b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "ffc103b30bc2270b1497654cdb3e50e6"
  },
  {
    "url": "tags/http/index.html",
    "revision": "8431887834c06a2c21e14aa416c77c2b"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "9ed42aca3caf9a5043a5a3020b14ef3e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f4e342aafa8245a0edab1557009cac43"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7d8c6a748eaaf00904f3b5fadd2fa6e5"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "340ac9e42f32bde451b37c50b1f99975"
  },
  {
    "url": "tags/react/index.html",
    "revision": "ffddc9a28c72f2c97a9175b2b4bb64ae"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "8c73b927082a693647095b088fae5e1a"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "db157c8b66713b9af6eab48d96d4aa2e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "455c23a6ac8d9472018550550eed0a79"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "9295d71792f11e67af75c30ce411ecfc"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "305bd695f576a5050393b271a3820681"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "5aa0ae30a7adae60f2214cbc50b93150"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "06ca81d7965b0ac0c520914ab54fec11"
  },
  {
    "url": "timeline/index.html",
    "revision": "efb9691ec175474ec0a23df142b39a93"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "04458af2498acc0d0da55414d1b317e7"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "9cbcf9a840d586333d530dcd612519da"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "720a5e7ae70126436675cd412f57106b"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "7cbf87acb0f8d63d115deae5a75f44ce"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "e64145741da5f44c2caede5e7570b3c3"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "a5e535449c9638ddccaccd7de4400a42"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "4841b195f097be7e16034fa5c3f27496"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "a92f3f0428be941777faaf593e164e4f"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "44dea9bbd0cce374fd7c154e8c287deb"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "414bc938d0c0a923889306fecacc8536"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "4daece26ed65e8d51527ffb23dd81892"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "1d4cfd828ac264514ac6e87e5406d16a"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "b365c799be8e4bafe29f9ecff6f6fe28"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "0cd0bad08db3b908aee857b3ece7a640"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "c32a20087e2a3ae150520d296fb75adc"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "9a0751008f482ece0eac4173341d61cf"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "355070864683f0dd635163c520c2a9b2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cf59d1d0a1fa4e52cc018460c6d2b60f"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "8848a7fd23e98803b7c222e6aa6d9548"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a2af4a136212797c969c5089f3cb4d98"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "52edac8e1646ca23b9ef6ae5bfc1f572"
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
