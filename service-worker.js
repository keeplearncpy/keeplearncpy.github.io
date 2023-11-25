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
    "revision": "d2cebacf9aeede0f5c4f60d012dcb456"
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
    "url": "assets/js/11.99b6478d.js",
    "revision": "302f89320966504ecfbbef428561e1b8"
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
    "url": "assets/js/17.2b81b82d.js",
    "revision": "91a704d09d7579c4bcf371f444fa8333"
  },
  {
    "url": "assets/js/18.6f3b8ee2.js",
    "revision": "d255ca23384b23de8dd3c1db8e728816"
  },
  {
    "url": "assets/js/19.bd296078.js",
    "revision": "24f20be2746d9c72e48d0caa600b7de6"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
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
    "url": "assets/js/23.dc8eeace.js",
    "revision": "d03466284d29736dce506bc8a3d8766a"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.ef1af269.js",
    "revision": "cb8903f3b91cb543f8138d0a5b2b1c96"
  },
  {
    "url": "assets/js/26.83f4a896.js",
    "revision": "874855dff6599a082ac5cbe0b647fb8b"
  },
  {
    "url": "assets/js/27.c9064254.js",
    "revision": "d79363a3cae2fc13edafaebb3f03c803"
  },
  {
    "url": "assets/js/28.99efcf2a.js",
    "revision": "68915694a8b93b3c4456fcc578377487"
  },
  {
    "url": "assets/js/29.a26a5a62.js",
    "revision": "dd8dd7dbe4a3309d3280833fb07aea40"
  },
  {
    "url": "assets/js/30.004d8755.js",
    "revision": "023d56471cef0afdac6af2c2c27e13ec"
  },
  {
    "url": "assets/js/31.a0612a8d.js",
    "revision": "78d33444302a87112f8cee8c202c8724"
  },
  {
    "url": "assets/js/32.f25ddaa5.js",
    "revision": "bad99555cacd55e1fdcd0703189d27db"
  },
  {
    "url": "assets/js/33.46cddce5.js",
    "revision": "c0ca6d4a88e4d335aa7d75813acbf693"
  },
  {
    "url": "assets/js/34.365a975f.js",
    "revision": "85f196a1704908184f443cc61c16de31"
  },
  {
    "url": "assets/js/35.c7d6863c.js",
    "revision": "6bf8a93b4e0865455b1963cca9ed81f8"
  },
  {
    "url": "assets/js/36.4edadb3e.js",
    "revision": "a5a52de5fc31cdd1c00f020d23fe2738"
  },
  {
    "url": "assets/js/37.156fe2cc.js",
    "revision": "a277294d9adff460c8f7ab60cb7287a6"
  },
  {
    "url": "assets/js/38.1cec7c42.js",
    "revision": "72be69f04b7128b648117eece1a15406"
  },
  {
    "url": "assets/js/39.9de732b4.js",
    "revision": "6688f7d13d8d59f012d53fd84d71668d"
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
    "url": "assets/js/app.e4129259.js",
    "revision": "4bbe2b74e983160cfce90abe5f5dfeb1"
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
    "revision": "dbc31d82bd5b74376ae3632d1c42b3a8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ac822d479cf17f9092b9c404dde48556"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7c2d7f0f8e535198f2e7b6a94e8838da"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d459ff6bd789188147d21f194bedf950"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8ab96dd6c28b32217b018bc51ff60656"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "f446555392be5bdb45434c56df703a01"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "c2648120cca5a4c0a593961151d63883"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "2f3e23c4d7f1824daff3b2c7daee6e11"
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
    "revision": "f94e6c7f161364f8439b8e6e36a3df90"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "3e1f677233079f50bf2938bda8c9fc44"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "6e205dc945ea381d884029b205e9a503"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "187eae7d5c97684905ba6e7430de5a3e"
  },
  {
    "url": "tags/git/index.html",
    "revision": "af165164fed0a143333c393f24af379e"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "8466a3bca99a5ac1c738727e44576189"
  },
  {
    "url": "tags/http/index.html",
    "revision": "6d5c2c0297b6a3892b76e0478788e5ad"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "e3047f29a3b93a9f9fb95aadbac0e26b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e4796ed4b67b4fc3c86815f127d4a3aa"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "dce5566c90f7aaa7ae316193f7fdb97f"
  },
  {
    "url": "tags/react/index.html",
    "revision": "6b83ca549b60d64c58bf6fc557ac5449"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "a4298640d0581040369bb47c6ec2b1c6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "3ddd705b20899e84e5bd4c1e9cd851d2"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "5c4f023cf5307654565a8bd61ac3de76"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "563d95d615685e8963034c866f3ab0ac"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "58accb65cec102db56af61650e7db9c6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "967fb9f0ae2cb08f454a834896fad150"
  },
  {
    "url": "timeline/index.html",
    "revision": "521a0e7913dee554075a038dfe572f1e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "98afffe8789d51a09f82d2537e5ebd54"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "497a79377a6468de8e432c56df44e4b0"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "7ee77a14d326b32bdeb27168366b0706"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "02b4c52f596981b84da91af8c6b7ab08"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "bb3a8a90e818615a78f1bdfa1523ccdd"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "9694f0e1b407d2c14bfbe02f72c2699b"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "06693e6feefaed5bc804e2a15b9e7d81"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "958dd01403a1ced218fc9ce9367c82ba"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "e6c3c1038d138c3cac600bb6528987a5"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "0ccd461822caf5fcf7e10e963ee76d15"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "177ee80ddfbb158540548b989a38d89f"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "b1f804c9e9dba35f5035c972730057db"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "b94d238b7d0293b070b4f67a74233ba7"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "f55eb829e0cbf45e267503de91b8670a"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "35a31103d499c40c5315de9798ba0e04"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "50a42998f896dab8ce8a789f043f4d9b"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "e607cc501cc675e134a3e724443028e7"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "59128036680e5554140afaf23275ec82"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "acfc486c20d6f3a8c3e5b6e40788175b"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "eefb2fb767b2065e8d91a231c5b69774"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "326920b37de69cc1351b394c57c4db5c"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "9ae5d8f99553ee7adc1838198336e755"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "e63144e4802520196e8d3a723ed2f5c0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bfb9d79f72f9fec8db6cadeca2bd3b41"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "4b2f35cccf95980b403075235a4ae57e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "daafe449c9a9355be5f78d3656cc76e2"
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
