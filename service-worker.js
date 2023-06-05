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
    "revision": "83f640dbe43abc9460d24062dbb17797"
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
    "url": "assets/js/14.85d58451.js",
    "revision": "e98fbaeef380d95b51d4e9ba7c9da518"
  },
  {
    "url": "assets/js/15.00d6efbe.js",
    "revision": "5a6182c70cf0f38dd4bb252fd2cd1bb1"
  },
  {
    "url": "assets/js/16.a65a1c49.js",
    "revision": "acfd97de0465b35755b97f1ddcce3553"
  },
  {
    "url": "assets/js/17.28c8383b.js",
    "revision": "987ee0377eaaa84930b5a94b9b2b748e"
  },
  {
    "url": "assets/js/18.e2156884.js",
    "revision": "c069ba8b622aa7684962f612bcf5d7be"
  },
  {
    "url": "assets/js/19.549b710a.js",
    "revision": "e430664bcbd96d72a33a91703dfab49c"
  },
  {
    "url": "assets/js/20.8d6abd2a.js",
    "revision": "7c6af0eedc3c473ea8dc02ca1f67330a"
  },
  {
    "url": "assets/js/21.5dc7cfd1.js",
    "revision": "3cff0dd581b98bf898f63af84381df98"
  },
  {
    "url": "assets/js/22.18d23986.js",
    "revision": "4605cebc4acbf44c359771151a4c8d3c"
  },
  {
    "url": "assets/js/23.282902a0.js",
    "revision": "75caabb1a6906d89922c502fad10fcd2"
  },
  {
    "url": "assets/js/24.77bb3a39.js",
    "revision": "3da62150d6ae0192d5134313e9477992"
  },
  {
    "url": "assets/js/25.aed52b40.js",
    "revision": "b2672ee5f5645d3a493836c6408a9aa7"
  },
  {
    "url": "assets/js/26.6a694cfe.js",
    "revision": "e9ad8f9db287b7615ab4722b63ae5787"
  },
  {
    "url": "assets/js/27.bb7ca1c6.js",
    "revision": "cdc1a98a098e6b21ba6e18635a9b4fa6"
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
    "url": "assets/js/app.528522f9.js",
    "revision": "b6c24447ec1fa88750383cd0242f5f8a"
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
    "revision": "c7a09546335c52a17961a0e95e2ad769"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4efd8f44b5959ddf2a9c20fdb095d5da"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7055a22ade100dfcc4dc2a4545a251cf"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "10e2a83fb80567143228e062a4d8ea35"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "683e24ee007b7e54023e3ff6a296050a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f243184c7ab6fa70d85ca804f17c09c1"
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
    "revision": "f198df6e00e88a951e3fcd0882baa854"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f00061a0ef5aa0e6b647f10cf20afc38"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "7ebc782d2fc95e357a310ab4600603fd"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "6c57d3185762fd9e1afe2cbdb66d1bb4"
  },
  {
    "url": "tags/git/index.html",
    "revision": "109596ff7ac0d8419be5df7ae635d24c"
  },
  {
    "url": "tags/http/index.html",
    "revision": "f50c2bd00f34c1d964aed8eb7a039bbc"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "d7fcde2fc7e0305b1483c776ca742967"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3f76c9a297b911600140b544fa14f779"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d44a7c407a1d312509a440d1d2d74cb3"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "bd7914e503575ff30fecc073b7cb5234"
  },
  {
    "url": "tags/react/index.html",
    "revision": "ac082e683a50461a3f4472372dbd2705"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "773e9486e32a53a2403c55d7591f9ff0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ef9f399774ab571393ffd2ee2a2ba551"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "28a17e2fa88d3fe0c2a32a52d21d9a3d"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "0ea180434bb41395c07941c09192933c"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e5995856cad523cd43b076fe4c92eb8b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e04627a5da088bb60fca7c3c92117414"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8093a807115c4052c2786b2afa9f22c5"
  },
  {
    "url": "timeline/index.html",
    "revision": "1695e9d0701dc086cb238f6a4b714af3"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "1396f98888563d89984193bc6f13ede4"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "79f8d2287b564cb33c7c1973807e0048"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "1d49bc7793dc1e339f0716c569fea909"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "37f065fe15dab9044582980461756d34"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "2ae565c90a03969481d227efece478a8"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "4606d48bcfaf0156cf07d4df525901d8"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "cd2d2be00990db29b76bca7d46ebae6c"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7701d2ac2305445a4b2991425d1275be"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "3260a79555af32a3f1666a068c378ad8"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "77541a1be8d682d13a8cabd468c56946"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "c5bd47f74d74adac0754068d3253f9c0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "dad2ad45691261469413a5f9e76fb558"
  },
  {
    "url": "生活分享/life.html",
    "revision": "20db77813725940abfb66ac88d23be4a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "c0b43660b96dd0b89db4dbdf3c9485bf"
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
