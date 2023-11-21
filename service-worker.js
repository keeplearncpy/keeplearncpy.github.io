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
    "revision": "8bf5fc1dcd3c6aeb02a5451591569b35"
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
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.8b3ac561.js",
    "revision": "dce11164ce6b803af95cc121ebd29efd"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.0bff03c2.js",
    "revision": "e73c154175223afc075c90bc4bff5c79"
  },
  {
    "url": "assets/js/19.026caace.js",
    "revision": "035f047a1bb88ed1c4be0e3ef6ab4486"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.70f10704.js",
    "revision": "dce064fb1e2ccf788886c6cce7d9abcc"
  },
  {
    "url": "assets/js/22.7cbb79df.js",
    "revision": "bea80951de6f56dae27d7877cecd2420"
  },
  {
    "url": "assets/js/23.87734daf.js",
    "revision": "b036457850c0761b4c0a402ebd549683"
  },
  {
    "url": "assets/js/24.8403c412.js",
    "revision": "c85a5599d03f226988854f6ad4052d3e"
  },
  {
    "url": "assets/js/25.75e5dfe8.js",
    "revision": "d8055665b641badc3b32bd7bbf696eec"
  },
  {
    "url": "assets/js/26.675bd8ab.js",
    "revision": "15d254cc876de8af6e1e8587cbfbc9b2"
  },
  {
    "url": "assets/js/27.740a98e1.js",
    "revision": "76625dbc4d38098f5faa0baba7362be5"
  },
  {
    "url": "assets/js/28.fe41ccea.js",
    "revision": "89c70044f653793c93eb2480c9cb7809"
  },
  {
    "url": "assets/js/29.951101b7.js",
    "revision": "b940e47f7c8b34a3ca3f1f877f3b4b50"
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
    "url": "assets/js/38.1d4f598a.js",
    "revision": "855f7d4bc0e631437aaa4e8d71c0f8ed"
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
    "url": "assets/js/app.ee52b09d.js",
    "revision": "e0f8fdb75d5e31af15ace7b2438350b1"
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
    "revision": "b8aecb4b050f63ab53e21d5db939ef8f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "42e07e6788566a017b31e6ecdde4a0ea"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d95047ab55cd23a67614661e296316af"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "010e670f802ac9bdef8544edf280ec2a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "62d17c49dad95e716c5b1d3916b22d81"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "94312e16ff5d876adc4d6082714c991a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "329291068555f6c32498d8a6322ace41"
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
    "revision": "78b00f2536da743bfc764b891cb4bfc6"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "41f90fa5cde50c2230d6882a6563a52f"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e2834f82535afbad79c775352b1e878b"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "fe20dfa4c09340f74b65bc0bb71e5888"
  },
  {
    "url": "tags/git/index.html",
    "revision": "92008420927e715bbbe3e930578c5a0d"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "fbfb2a4bbe2a567edab723b8145075bd"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5ce6f19c81d3d4935988b954b18cce75"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "796f8b6d700fdc24456b0c08da859577"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0b9624a67ec6673d163cc28df56d51d3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4aef5da43e9385b8e05513d482f40805"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "e33e933a9ef7c3624f0dfe0c5ab2c197"
  },
  {
    "url": "tags/react/index.html",
    "revision": "33c1430a620a49fd3eb6ecb58d1e59f9"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "0accd8d8bb5e6e92bd252667779d1805"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "f824fa9857bd2154b670af22b139de8c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "60fa38cff4d1477ced55eec419ed5b49"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "6a6832fef44fd43595b99b823fe0ace0"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "7c3357ed79159be9274f54fc973b1f75"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "a19cbe93b43e12fc52c17ada0de5e818"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "acdf97217b99603ef80d205497895463"
  },
  {
    "url": "timeline/index.html",
    "revision": "c0055803cf0cde7c1f2948cd609aea36"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "bbf4aea474cce6e814c3b018f5f40c2a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "47c18509ca54b5482434283cd0dfc01f"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "3a8b8b17bd5e01d35721f5976d0da29c"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "f118f4cf7fae928f3f83a11bd3dfb429"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "0cee3447481869c8670c3ef49e88dfd9"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "94dc3e96d1e23ddef6ba6532896ced79"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "bf9078c412e079546e1af05da7a3b360"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "beffbc5b19fa5444e58ea8ab8681a734"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "af8b2a80839c976005041868eb2f6f20"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "ea0021ab09f2662250454e9d322faf49"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "79e33c793971995f8e69efad2b2c776e"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "1bcdc24099022050aa4598233de2eada"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7c5f4575ee8684b12817df11453008e2"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "fe66cf6aa2392b6d99348abc614cc7f2"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "20ff97e39138051c53ffeac280a54949"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "0ce53a788471cdb45f188d8e88131f43"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "64d0627534143cdf9c7890fe3f8d7e98"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "48d718ef81f5c80d5bab15a768180b16"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "028005306d10033f24b1134fd8cbf50e"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "fefa930aa73709c344b9ae3c8835353e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e2cffca96aea9b4f7b00f0f78a63642c"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "6b2a13102ef3b27ddafa62c93fbfbb63"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "cf03ef05ee41d67aeee766c541daedcb"
  },
  {
    "url": "生活分享/life.html",
    "revision": "239d57e037abb5b5a82bc119202557a6"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "13ad1234ba74dd45be807708535900ff"
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
