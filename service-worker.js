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
    "revision": "68dd10ac41a371a67be7725def3b30f3"
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
    "url": "assets/js/10.c2260bd4.js",
    "revision": "8c86f36c445e37d4ae1611f0471fa81b"
  },
  {
    "url": "assets/js/11.d500658b.js",
    "revision": "5bf925f7280523db7cefb5484ea66841"
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
    "url": "assets/js/14.45d1b92b.js",
    "revision": "82c4ee683d766040ad519b98e9979cc8"
  },
  {
    "url": "assets/js/15.de2de36e.js",
    "revision": "a6fd990107649ade9586b0f3b3c64590"
  },
  {
    "url": "assets/js/16.a65a1c49.js",
    "revision": "acfd97de0465b35755b97f1ddcce3553"
  },
  {
    "url": "assets/js/17.111365bd.js",
    "revision": "84279dfe137f4472f389fcc58fa95ccd"
  },
  {
    "url": "assets/js/18.360926ae.js",
    "revision": "58dac5926efd9073af1cef4e293ef3e2"
  },
  {
    "url": "assets/js/19.813ffe55.js",
    "revision": "62762e4327bad663136cb9388bd3638e"
  },
  {
    "url": "assets/js/20.bcf02b99.js",
    "revision": "46324aaa27e2649eff823a9030deffd6"
  },
  {
    "url": "assets/js/21.a126b5fa.js",
    "revision": "ad3be638637cbef57a8178a0ed4c2d1a"
  },
  {
    "url": "assets/js/22.793ca3ff.js",
    "revision": "88bbbaac928e3955f31f48ad8384e275"
  },
  {
    "url": "assets/js/23.d4a2c147.js",
    "revision": "9b276c0f3947b7128e7df9fb7692116a"
  },
  {
    "url": "assets/js/24.08a51943.js",
    "revision": "d3ff0599f3221d46dbfe26657a1ceb50"
  },
  {
    "url": "assets/js/25.d735b86a.js",
    "revision": "8e305fd11bb9797a30aa1f64b2d83c94"
  },
  {
    "url": "assets/js/26.74929151.js",
    "revision": "3d98abd8d21e2cdc62cf25eb8b414235"
  },
  {
    "url": "assets/js/27.a1fdf573.js",
    "revision": "1fc97550a542378bb4ed7b4fe3e8e3b1"
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
    "url": "assets/js/app.3d036b29.js",
    "revision": "1ffd1bb3403ba62d393e2d46d130c9e9"
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
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "3bba8e539b13ada2fed8cb78e09c1ab7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f73e73192824e822575f64663cd8fe39"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "11ea096a499bc999ebb278f3733876f8"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "3f6b765b8658489e272b5b36d2c1fd57"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "dbf1768f969e702b6f86e048af092f01"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e35009c700cea4b000059cdbd1324b10"
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
    "revision": "73d234549e6c6bc5599e63124e49c682"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1050fc93cd5fde80a649ca7a7880ad1b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "5d946d36723f82d0bf4299ac526e5963"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "9ed69e21f02e8565152c87b2e9123b66"
  },
  {
    "url": "tags/git/index.html",
    "revision": "37ebe27081134cd67fd7a7893c7d4b98"
  },
  {
    "url": "tags/http/index.html",
    "revision": "90d7daa23927009aad111ee7d5af58eb"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b7d0d6a4a8c42d40d4ef35ca0ddf27be"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "bca9bdb8654ef68f8355466bab5a4a55"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7029945136a6800b1eef96e3c188adbf"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "e26e814a46e577fa988ba3e3459de155"
  },
  {
    "url": "tags/react/index.html",
    "revision": "53e1399b9c06a00372edfc3c6d94f24c"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "797bb707db2098193e3f01e5cfb324a9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f83f844a9e126677dd1956c12fcd3977"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "91baca8a7b480a0077ab0a2eeeff915e"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "1d6c8ff976336bd601cc04bde3b9b4ee"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "155e9e75acd8a82e2f1d97c4ee57ee69"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2fa4c08f1552c2aca0b43d7c86bc1425"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c1a0de17e80b406cdc9ed3534811f983"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f6c01a5df07a92790799a404a00bc51"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "52a653874f6e211c424ef62ac54cf7ad"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "5cd278b5e037e3a0592aaec88a5467cb"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "2bdc2408e726c8160c57480b9c542e31"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "1fa1c52b1f3ec3bf78f9279dbb955272"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "3b470deb09b7acd6d3d675502f89f7a1"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "728b20bbe43dab78c52c02087da955ed"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "ef824a9b3af11ebb5f755051bcf28ce1"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "6c5cd4d3986b693869f9ae8689a59a86"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "1d34b57889f5002b31fd027e55ca2049"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "217df7d55bb84a78a892555cae7f7dd1"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "b4fefac5a844d316ff218c4feb5b5c7f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "720a3325c88a5e93b85e2b29d2220e73"
  },
  {
    "url": "生活分享/life.html",
    "revision": "61329c5154dbc921d0d6db332e687b2f"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a18ca0ddd6be11ef9fe0b0e7ab0d8bc9"
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
