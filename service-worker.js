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
    "revision": "556bfe845def181c09ea4352d84db124"
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
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
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
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.8e1dd9cb.js",
    "revision": "f78ead17e1bb07455ecb7f8f86374be6"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.14dcf480.js",
    "revision": "db50a1ca700d1e8530fa3593ef6b4209"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.ff8fb97c.js",
    "revision": "48320211d6011240d2bb7c9c2c87e0cd"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.baa51eb7.js",
    "revision": "89832e5398f4cfa1fbcfeba6f0e98453"
  },
  {
    "url": "assets/js/26.25370c83.js",
    "revision": "29931cb7486e985d5fe345dafa1a7512"
  },
  {
    "url": "assets/js/27.82dacda8.js",
    "revision": "57a9a5e48eaa46ebda384c1193a1d1d6"
  },
  {
    "url": "assets/js/28.99efcf2a.js",
    "revision": "68915694a8b93b3c4456fcc578377487"
  },
  {
    "url": "assets/js/29.4ddececa.js",
    "revision": "ab586d22bee6d90dab5ad37c2c91588a"
  },
  {
    "url": "assets/js/30.7a0445d4.js",
    "revision": "61bce6a5796c204925963030fefea4ec"
  },
  {
    "url": "assets/js/31.dc565286.js",
    "revision": "eaa3c9a566ebdc8819fef7ff06455823"
  },
  {
    "url": "assets/js/32.6c10328f.js",
    "revision": "db1d96d7c2db66900edd9d83c80f0a12"
  },
  {
    "url": "assets/js/33.999e72c6.js",
    "revision": "8946cb8a6a81b91c88d06157dd535c5f"
  },
  {
    "url": "assets/js/34.3b97db28.js",
    "revision": "0b149f8d0ee45e22dbd59cac54f8ec98"
  },
  {
    "url": "assets/js/35.eb3e68e0.js",
    "revision": "e84ad727af2b3207906d1c31633dd83e"
  },
  {
    "url": "assets/js/36.0176a407.js",
    "revision": "7f34aab746180b38de39b3976eae253a"
  },
  {
    "url": "assets/js/37.156fe2cc.js",
    "revision": "a277294d9adff460c8f7ab60cb7287a6"
  },
  {
    "url": "assets/js/38.8b3cb783.js",
    "revision": "30ff85bcbd714ae4518bf882d03e4982"
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
    "url": "assets/js/app.f4daa769.js",
    "revision": "bd12fddbf155984e5bc7ec6da01cd6fa"
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
    "revision": "198da2ad57ecb3039f4e3a5691baeef4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "89b652dd83a21c22aeb4ccff708fb2c1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "92696015db904cbc48c0202d7ef0d570"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "3a2145f527a6280bca2411adb93124f6"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "87c573ba56c8feb89de20231918386ba"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "38efb76ea573c5506af2aa518baaa50c"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "d012c41ff6ec6b1027bf84cd4e0e0022"
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
    "revision": "713e48d77d3ad6a8d66a93a78ff8b25b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ab6d9b1b21b5a51dfd1bb03d708b96d5"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "bc900a8fcb9d74481419c2ec124938b4"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "f83f0d276ca028681197b6191b8aef1a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "828fd1f2b35ef395d453d56430d71248"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "7ceeb16287c7184b79ff4743deda70c2"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5b6df4661ac2295cb715f6545415f1f8"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b54b27c456bf692ed8a9a2276e3c5794"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "10641ce00e35815bfcb799ef07015b86"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8797ef5e767be9036ba60d6a18ec4214"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "807614cd4a586ca29ad9a4b9e767c551"
  },
  {
    "url": "tags/react/index.html",
    "revision": "6f91b1a66a0773480949b66c51644ba3"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "1b4f8dc924bdaee990b14f3a24e467d6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "f446f3e4ead9d42dbdc1a555ffb13b70"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e02f529c1387ba6fb089b1cb528c7b91"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "20035546f3622dbf67481f4a49724d90"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "8bb9c441ec9cc5107d62770fb6a82e4f"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "706600d88670408412cb13eae29fe383"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f64fd2bf2d1f555a0588d8bf8480c7d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "95b22a5b5530fdba78c6680e1d2bafb0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "ada96774701e8d0c2d9a1b2a50344b00"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "bacb3d2c9f9d7855fcfbdaa76325b1d9"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "debe0ff911780def2689295411e46fbf"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "976616f73a5ea1f398a6fd7285e0a2dd"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "2f5119edda94d9367a8307420cfaecae"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "ed839d878da3bad37ba42c3cf71b24a0"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "20b19fd546932d93e69d17bfa2664534"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "6bdad849da518415e0f41d8abe0856c2"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f1a94cd78782c114084f778773a57f93"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "af4a361c1efdb9c972d46284820b10f5"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "acee25fdba24124c5dfa47d29d549854"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "d435805c22658591e976d15942236a2d"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "6e5ad19dd9dbccc896e4530d75b0c151"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "c84c708530efa0800d595e4f398b490b"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "1a49e7ba63720a72a63118ffca4278c1"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "b32e5b7a4d436012571cc7827867a6a1"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "824cdf32ab46410e079bc0bcc9624d68"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "90a779005751cb84930c6de4eb729d2f"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "e9c9d76b25577a0c08c98602cd0cd41a"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "4af633b95f62cfd59d1800d4c03f28e3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c9efc62e4d6ed75b4d2d242f9957dbde"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "417a1437e50e214d7fe68078c5ad82ed"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "8913681f02a2ad3a6862d53888e027fd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "786de0ab477dd614a0a02aa197fb8d82"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "343f8ef8575ab58ddad2b5047b3975de"
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
