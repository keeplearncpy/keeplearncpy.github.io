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
    "revision": "321cc039525820a0a9e56ec985c6ebf1"
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
    "url": "assets/js/14.de7cbc49.js",
    "revision": "bf78fd8bd2b9d0788f15eeb5eb2af14c"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
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
    "url": "assets/js/18.c29714a1.js",
    "revision": "a145db131731339dece2e2e3a62b3bea"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.7474a423.js",
    "revision": "18e91a1f5a332542e482ead8d8436c37"
  },
  {
    "url": "assets/js/21.971817ed.js",
    "revision": "6ff9882174c95723a050e31ec25b679f"
  },
  {
    "url": "assets/js/22.c39de68d.js",
    "revision": "a5cbedd637a4e53dc5c7b32c3b84d4a0"
  },
  {
    "url": "assets/js/23.c7417911.js",
    "revision": "aaf8b4ab485fcd40e0e0085f6093cd68"
  },
  {
    "url": "assets/js/24.eadfd447.js",
    "revision": "069e1ac9de5d92ca27413181217d90a5"
  },
  {
    "url": "assets/js/25.4de0444a.js",
    "revision": "633d3fc8bd0e9109e92272b26906cfac"
  },
  {
    "url": "assets/js/26.1f3ef11d.js",
    "revision": "9bce3d4e6e48f00cc562760e0c2df021"
  },
  {
    "url": "assets/js/27.50ca4ac9.js",
    "revision": "7f3b82e9028c19c36921da9baebeb926"
  },
  {
    "url": "assets/js/28.e711672d.js",
    "revision": "ea7483dc3983c1096a1ce38d7254adf5"
  },
  {
    "url": "assets/js/29.320f47ff.js",
    "revision": "01255bc22a0855da00a7a4bff1e90655"
  },
  {
    "url": "assets/js/30.e41a58db.js",
    "revision": "3ab5e194b347170746259a3424e951b0"
  },
  {
    "url": "assets/js/31.760ed51a.js",
    "revision": "417fbc42c5e8cff58e1638be0db3d33d"
  },
  {
    "url": "assets/js/32.c7f91bda.js",
    "revision": "9da46225f6c0c70310b001c9cc1f9af2"
  },
  {
    "url": "assets/js/33.c283eb13.js",
    "revision": "b658d63b81a8320796197ab015ab3d3e"
  },
  {
    "url": "assets/js/34.4599eada.js",
    "revision": "e2a6f51392ca4aceb7f092969ce57b96"
  },
  {
    "url": "assets/js/35.efdb2f07.js",
    "revision": "6c712fb65dbb7cc84376f12824fe9350"
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
    "url": "assets/js/app.82ed039b.js",
    "revision": "9268068069506d2466b551d4bf2ac64d"
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
    "revision": "20f24d6ba1a4e72cecdfb094b16d4fb2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "37b17d93ede93d482792459aef87206a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "02798869fb391b96459fa98c10ec8736"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e309354a0fe9bb85f974e03da279b365"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "56ce4e2b61fc97e07fdde8fe51451e30"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "531b527a8ae331110db24479adaeffd9"
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
    "revision": "3b11e01b6ed1e5ee2ede8e4614e9057b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "393323e742d176e92f41e7a75f3d53db"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "bd661ac736c2cb54086a087331239e81"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "186b42896b7d2abeaa582a3a9cd5e09c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "ab58148e2076e97e37a8d1e79fe5a87d"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "9dbc0b071dca95da8c852b9a2bd3aad4"
  },
  {
    "url": "tags/http/index.html",
    "revision": "1a5df66ace81ac5b245d343375e7c376"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "ac561e9bf5bbdc18dafa94bde0ced8ce"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9ed6be34e948dc0f9ffc859306028595"
  },
  {
    "url": "tags/js/index.html",
    "revision": "842c92b8e1b3f67cf092879910319cbd"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "df4133640eab1e314f90027bc9d1bcb6"
  },
  {
    "url": "tags/react/index.html",
    "revision": "71042ab52db3bb1d1a903af57cc6afce"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "a7631ac82d93212065d5800270774c23"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "9ea635819799a343d867981c832591dd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "31d6e43bd2bdcce55dd707adfeff8521"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "7a54a7974dff892f5b795e76bc2bf930"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "7a3eff695ec3646548afd4b59b38a95c"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e6407b25858253d9a8e2216e2c5a3db5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "13947f96ad80f93c7b0f5accc9fbc57d"
  },
  {
    "url": "timeline/index.html",
    "revision": "df2ef0d444de66c55db6d716a606651f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "b0f68ce1bee49cb4ff3bb5df616e4de7"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "d9d3732b8293614aeca6b4a1c07850d7"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "f31dd213ae5d90e90a89da8fef234d9f"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "8c637122930f9780d6f63eacf3f9c16b"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "6eaaddd51bea5446346901a0410da0a6"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "69ee215366495a6df8792fb691df0934"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "0794f65a9023868caad015b0d953681e"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "bc4e1a590a9c339c4cb893f589d4dd2b"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "2dc8fe0afe68830e73d5ed1f8c1a21cb"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "72441385d5d7712fd3c384338cae0561"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "507e0ee3703b81224d73387b5a060f5f"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "2da4ed99cfb996211a4712ac47d3d87a"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "77897960b0e0d399dabce3531003694d"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ff0153c309d00247b0983f97b46df525"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "850e022f9bcbdc3b5192b7aa0a472c37"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "0901ae8d49128bf02dbf49bcd6df6448"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "a33447fa81dba7b6c127b914202ab814"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "f9c5486ac4eb448790326b598f2387c4"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "95c102223591dd035f2ee8e8ea4d599c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d078c1ed081a46e4ba3784267a436f28"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "db5ec2850ee36a4348a5683019a57a49"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d0ba07e93b45ef3f6b846fbf39a64558"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "004b93a7db1ca510ccea6a07da06567b"
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
