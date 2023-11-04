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
    "revision": "8a99d77decddb2aed63a8ab390bbbe1c"
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
    "url": "assets/js/11.68ec98b5.js",
    "revision": "6a2625a16070503310aaff1ce22c5b42"
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
    "url": "assets/js/14.8fa5e0ff.js",
    "revision": "1962297767003bfc75dc825d4456f659"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
  },
  {
    "url": "assets/js/17.da6fedcc.js",
    "revision": "2e1aa78444e38b32230fad52c2fae1aa"
  },
  {
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.c4e2ea46.js",
    "revision": "1444c49ff8fc3cd44420a14a3dd6c91f"
  },
  {
    "url": "assets/js/20.790ec68c.js",
    "revision": "3e8740dcff4fee4959d82bcc0998804e"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.1c9f4c39.js",
    "revision": "31afde0518c1470cc65d5d65548f58ff"
  },
  {
    "url": "assets/js/23.85f745b4.js",
    "revision": "e9d21eba0f010c0213a68ff88543b9dc"
  },
  {
    "url": "assets/js/24.6b877dce.js",
    "revision": "8802fc28baf3d7b89d4a28f3fe4779bf"
  },
  {
    "url": "assets/js/25.b824d499.js",
    "revision": "583663bb0768d48286d3d12fb41bd705"
  },
  {
    "url": "assets/js/26.33e8c203.js",
    "revision": "bef82014c21992655d06dec1d9aebc82"
  },
  {
    "url": "assets/js/27.56fba3b6.js",
    "revision": "6214cf93883ec4db346260e0fed926e4"
  },
  {
    "url": "assets/js/28.dd4f5cce.js",
    "revision": "a88cb311c9eeaf7ed50e932e68e3ecaf"
  },
  {
    "url": "assets/js/29.461153cd.js",
    "revision": "694181bf6c420972313efbe716d3b184"
  },
  {
    "url": "assets/js/30.5d80f4e6.js",
    "revision": "1e814feabd745205b259e469a3acf5ee"
  },
  {
    "url": "assets/js/31.0cde688d.js",
    "revision": "2dc9a5e11ec53bc4d7d7ebc562d49334"
  },
  {
    "url": "assets/js/32.c7f91bda.js",
    "revision": "9da46225f6c0c70310b001c9cc1f9af2"
  },
  {
    "url": "assets/js/33.5da44e04.js",
    "revision": "23842788594f722392f82e7199356c0d"
  },
  {
    "url": "assets/js/34.4599eada.js",
    "revision": "e2a6f51392ca4aceb7f092969ce57b96"
  },
  {
    "url": "assets/js/35.e9fde896.js",
    "revision": "5d75dc792052af21621c3c396d66e6fc"
  },
  {
    "url": "assets/js/36.b08f1412.js",
    "revision": "8b5c0788c59983ad75b266d2e0480592"
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
    "url": "assets/js/app.6033e254.js",
    "revision": "8dcb903799579ba72d82e2f7db9bb000"
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
    "revision": "484eff71aa76070d18e6a4e71a4b2f13"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "939410b29a12f254090ed84c154f98cc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f25eb71ecb7c658507ac1ceb2acf6843"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "654c97d2208471671d9308275f43a8d5"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "4c4a2c181e9c4e87437e3409a6346afc"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ba69875f219ea2a5b01caa64c33445e3"
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
    "revision": "4ac56d8bec95ba93787d37dd92440baa"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0b64ed782d1ac25071c4eb2ac2243876"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "ce6af570d02133cb8c591d1cf418d4a8"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "2e73c8f6c22b4d64e93034c3ef17689f"
  },
  {
    "url": "tags/git/index.html",
    "revision": "03fb5486d40bb61720c3cf6432492449"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "3fc992cf06b44b878ce42e4bd18234e9"
  },
  {
    "url": "tags/http/index.html",
    "revision": "90ba12b522700d0a24e88ada083cbab5"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5d9e80459f2c0a97119d5a93481a27c4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6b8dc798eb7d5dc0ac831b202adbd42a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e418f5f6b9e1b510d25b7e1422b3502b"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "f69e927179e46e3202419117165809e6"
  },
  {
    "url": "tags/react/index.html",
    "revision": "f5979844c084705c13a41c6aa0c54a05"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "0761f0086595e20d7f8f16d955d471ee"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "67e9da26040755983bb25f55c00009b7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f4f533803a0793f5816014a0845a55c5"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "2116075de3dd7a424e5ba73daa94c801"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "51197c7371185b53b06d749b0926e55f"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d76d0d05118a8c154c8769379b17bdbe"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c84b3cf0db3c0c0601bc0f2aa62a2c99"
  },
  {
    "url": "timeline/index.html",
    "revision": "378fa284b700f2053d0660290cfdabde"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "d9dc9c735a1127e59aad98fea0a606dd"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "87b57bee6631b9c881d5476507788600"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "63245117b34e444d6b804dfd45df1429"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "cfbebb29e381e7681d14ae94b78957ae"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "8cd2f38e7b3191299784c59da17cdd5a"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "f8fca9b060d446dea8cf3c79cf018a6e"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "c6d404e051ca688d252033ee9d4c6c0d"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "d0bd3bb90a85fa14ef332fac0bb49f2b"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "c3d49fdf8b32f8ca777092cf28a9aecd"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "bd27dc98cd70343da0d5f6b9f30b3d78"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "9f5e1b49b661a495cbe94ba091ba4254"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "53a9bb5fcca286a8e0858c750e00690e"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "99cb94418392a025ed4e54a23eec88ac"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "131ba26532531e6e2d871324cd431496"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "7cda6d5cc2654741a1837baea63d0b87"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "44d9cfa56b3e08df6652c25218182897"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "66a83562d4a5074c01dfbc4cdae23db2"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "82d8d50f54ed0b05f3aa271237f47bd0"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "39428254a1f9eec3a0f93c168c2883ac"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "60a15073ef77073ed6743ecdea2f1420"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "d1603d6a1722d4157cfa7f792ff21e03"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b9120ae9ab5b098e17df1ab6ae8aa024"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "1fab3d1222bb7a96f34c417ea97700a2"
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
