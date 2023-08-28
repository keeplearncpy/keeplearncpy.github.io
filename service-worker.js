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
    "revision": "734da053a9fd4eece053b8e038bbfdb2"
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
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.d748c023.js",
    "revision": "446f00f9245fc0600563c47ef50ab885"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.14483c5d.js",
    "revision": "e1ac2aff551d47ca40b5bae53c934e3a"
  },
  {
    "url": "assets/js/18.f591f2f9.js",
    "revision": "e42d51c48284586b0f7124dc2c681674"
  },
  {
    "url": "assets/js/19.166cfcbb.js",
    "revision": "ad2ce7e771d34b9fa1b879d35bdd3773"
  },
  {
    "url": "assets/js/20.870cd892.js",
    "revision": "b045522d9f6f235c895afd1ea3231bde"
  },
  {
    "url": "assets/js/21.571745b7.js",
    "revision": "39fdc283fca5878fc5e1b36897e31d5d"
  },
  {
    "url": "assets/js/22.56f6590f.js",
    "revision": "465ca35567b20376634318db20f7c5d3"
  },
  {
    "url": "assets/js/23.2c2c5927.js",
    "revision": "f63b93ee6f1e050f0f99e602397ad78a"
  },
  {
    "url": "assets/js/24.17781649.js",
    "revision": "b4cd1408160870a0f9b950cbb31f5ebe"
  },
  {
    "url": "assets/js/25.cb3c7eef.js",
    "revision": "eab5f5148d320c8168730b086075c353"
  },
  {
    "url": "assets/js/26.48103a19.js",
    "revision": "72bb5913327ea49977c73f78cd83c012"
  },
  {
    "url": "assets/js/27.fd6310f2.js",
    "revision": "5d1ebb667a6c7aeba21e4fae93db320e"
  },
  {
    "url": "assets/js/28.238bb63d.js",
    "revision": "6962401c7d1ef55bc9ae936c1022b908"
  },
  {
    "url": "assets/js/29.924ae9f2.js",
    "revision": "d3d1fabf18643e378148c4f5b890d574"
  },
  {
    "url": "assets/js/30.120c7fe0.js",
    "revision": "013dc581c7c0eef39ece81285bc4920a"
  },
  {
    "url": "assets/js/31.8596ff0c.js",
    "revision": "99a985112c6f775d24f614d8663f86f6"
  },
  {
    "url": "assets/js/32.11981096.js",
    "revision": "8c023699a626e4bc6a39b7e160036050"
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
    "url": "assets/js/app.bc48ff20.js",
    "revision": "0ae21f5a3b1ea666795f5a0ec0cfc75d"
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
    "revision": "0bf13f222807f7de06d19d020b4d63de"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a07a51a228ed8c197fff9bb39390fc17"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d0404897204349f82006b6445687b8e0"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9387be8bc7370c7efcf6d9c436d041fe"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "918df3e90a94c6192c96dd559f68d3ee"
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
    "revision": "9d3ff56062e10e70776aedc3c64ed762"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "22eb844be3c1c044c6dad47c0cee0131"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "701db187cbc3aa15f2089759ec03adac"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d69f4d4e8362bbf4fad455143a805e71"
  },
  {
    "url": "tags/git/index.html",
    "revision": "6d2ea4653ec95efe4ff5afea9143c910"
  },
  {
    "url": "tags/http/index.html",
    "revision": "9f9c0ad86d2077dbb26288f3617bcfe3"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "e0280e9cf0783ce0353ae4d7d84e499c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "80d89659f9beebed32db1d26e5387c91"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0c791c1bffb93a4c1624907aefe6119f"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "b52f404cd68f608635ed01b0e4128017"
  },
  {
    "url": "tags/react/index.html",
    "revision": "4855d54f243a3325c5684d2bceecbc7a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "8b353e3f7b55656e9f045d2476cc2ddc"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "76242e3bb88bee50aa5e56bcdba162f9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4c5428dd38b9b69c8e33e30c1c30ad42"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "8c41faae328248dbed27b78f570f8972"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "01c0749c3ed6271ba6a35b5d4109c359"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d8207150bb62065d061cef984c4c4d60"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bce7cfae283a686d2bbc151d21b044d8"
  },
  {
    "url": "timeline/index.html",
    "revision": "91eddd12a198a3ae745bf382413f104d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "267b5c5277e0f14e0bf9a33f908c63f6"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "511066bbf825c3355b12f4e08b33009a"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "d6ebdf38df4a6f867557ee28b3846fa9"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "dfc3183cb65526ccbeed0d90328e0c59"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "660a44c2de747da8f7f7c0649ce476bc"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "1a1c7495811b6dc9f76178b13fddbaee"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "f4ac6af4325cf5b731305052250cb01a"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "0c2d50f5f4f22042b6a077f1b6098d08"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "f51d68418798a04c6739269083cec5db"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "2817210225de6219f51fe8df86b5b246"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "130ba85087badfa316314b13f2f2ccda"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "a76e805f29499fc706571ee2d4ebe237"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "f4d9bc243d4e12a93bb58c96899d6efe"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "5aaaaa6493853498e0d583069ed08e3d"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "fbdddf21fb15a80f931b158d5cf12570"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b3a59ae414c69e7245c7a9af573f4f3a"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "8e12a34d963c87cc259025f52fda3bf7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "813c66e415d1bbddbd487768d84440e8"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "331935a377feaf76dd5764c37eecf47a"
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
