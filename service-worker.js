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
    "revision": "a77c19504dc7e520a760111f3221f2c7"
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
    "url": "assets/js/17.c4c27d8f.js",
    "revision": "fff9f926a57cacf229a4bdc7f74fd473"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
  },
  {
    "url": "assets/js/19.abfb2ceb.js",
    "revision": "c5ea1655fd700f37496961e24abf1550"
  },
  {
    "url": "assets/js/20.b4a9beba.js",
    "revision": "8ec823f78a3311b9e3d72c958200ab94"
  },
  {
    "url": "assets/js/21.42019346.js",
    "revision": "6c9b06b2523788f2f10d9dba502cb85d"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.f1fe21ca.js",
    "revision": "e96b6364291a0a751b42f0965e98b49e"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.75e5dfe8.js",
    "revision": "d8055665b641badc3b32bd7bbf696eec"
  },
  {
    "url": "assets/js/26.c8f98bf1.js",
    "revision": "c827eaa536e757fe7b9221eaab7dee9a"
  },
  {
    "url": "assets/js/27.1b5cc956.js",
    "revision": "a509d39442e763bb4c4a52e4086f4cc2"
  },
  {
    "url": "assets/js/28.f6879937.js",
    "revision": "77bc41dac6d237ef10fd7c300e162e31"
  },
  {
    "url": "assets/js/29.951101b7.js",
    "revision": "b940e47f7c8b34a3ca3f1f877f3b4b50"
  },
  {
    "url": "assets/js/30.6a946240.js",
    "revision": "9c72c8f3d18d19302fe5bc5b97f28d72"
  },
  {
    "url": "assets/js/31.dc565286.js",
    "revision": "eaa3c9a566ebdc8819fef7ff06455823"
  },
  {
    "url": "assets/js/32.cc39ff9a.js",
    "revision": "3ee6f57fa193217598703b9688c470b2"
  },
  {
    "url": "assets/js/33.39ee7c68.js",
    "revision": "e39bad641c732efb9f2ff640b7761d26"
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
    "url": "assets/js/app.ba6c7196.js",
    "revision": "ee2885b47383a05c629cf6fe4e1fc883"
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
    "revision": "17dc840130ba86bf4a7dfdd656df0ca8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4e849850186aa1e2063bf36f33829060"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "20f154cdbc8d4b25753d41f0bd37ebce"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "103a5aa1426c651e283af652fb69848c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "a3fbab0368dafda2f9ac47ebccde128b"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "432daafc553c390e6807503a9b5ed733"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3148b68f4edde34f982a63318e4ab560"
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
    "revision": "811dcce9cb2b4f3f74feaee40ed62bcf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "75c55ca32c4d9afc44e2b3b4fa5d74fd"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e2ce32083619e913784a9f4adad65079"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "27de714121a663787eedb4c5ce49535d"
  },
  {
    "url": "tags/git/index.html",
    "revision": "12fcaf5a2790d8411fc7f7de26e65356"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "d46a151e935e838bdcb0e88c12807c4e"
  },
  {
    "url": "tags/http/index.html",
    "revision": "ab5312c25fa92f04256cecf3e3c1d9c4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "9718c9182e44d6426bd657427192eb66"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "34d046ad821d7b40b9dc8f1da192597b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a6e1a111c3c8132cd7844f25ddd5db50"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "10edceb887366fa67b6b2aead3097346"
  },
  {
    "url": "tags/react/index.html",
    "revision": "32e2c5cb2520dc16785817803d5d607d"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "3fe9b0ff52af0627294e4ac0c97ad9be"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "92858b74dc763f3156db4af0a48f8240"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "31dea2afee233985186678f8f4408884"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "9a268aaf4305cc6c7f08e6d7b82ba0de"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "2d8f468d5a386761e5c90f2cdeb03bf2"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b54342029bef17646e547142a7de09a0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3f3bfaa4fc28a962c0c661a304da9327"
  },
  {
    "url": "timeline/index.html",
    "revision": "88605c1e92c6b1ddb4704c81f9ec2511"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "7d7188380a9725c3007cae43048c11ee"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "6710e9a12b4f71e0248dfdebcd46935d"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "34689009c96320e33cca2b90eb19be2f"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "6bb9ed7c312abafc74b9b7322675c724"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "231acf51f27ffdce9b6a017ec9420de5"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "9fd0be7710eb2a09359b39899fbf40a1"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "fc6ace2b72e8ef379f9d24ff154f17cc"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "6bba68933a119c2858509e92db8e56fe"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f22f5db37a313b37f6deae8915b7d3eb"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "7c98710b9802e10210ebbf64ae05d88e"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "d8e9ae929cda4b38181fb622efcbfd95"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "4fcd4de104c195628146264e06c4d9c0"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "3dbb1d22fea9fdfc2c34b46fd55d30f9"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "2ac11d6b16eee2161e5a1ef7ea84d70f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "060b071cc5a3e0d6cd30930b174e04c1"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "05fc5f7c0dc8e0f6b10f1852d055d563"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "5086274b59fa449a21664355cb3732de"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "5c82778b3b147b72ff6c8940686c4e23"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "e3b2301b9282a9041a0fb95f9aca7629"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d3a9082cfe70cdb3f81004249a87bcd0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0c954fc52c57c65e2f2de157ba1936c4"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "258d88d0338b8fc52262e93c017e4772"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "5bd8fb43c2b00c40dfaef7be7cd69137"
  },
  {
    "url": "生活分享/life.html",
    "revision": "26843601f5f94fba1c58fdc4273e2447"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "ad3ee7091a46808626c50c4f0952b5f1"
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
