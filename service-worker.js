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
    "revision": "a288afd510e1a2b2641d62a5458e0bc3"
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
    "url": "assets/js/11.e54fad52.js",
    "revision": "26a0a037131ebcfeb36436ef3382e56c"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.03a61dd9.js",
    "revision": "bbb9b7136d3c7088343a4b055e4a807e"
  },
  {
    "url": "assets/js/14.4cece401.js",
    "revision": "3434244f9ec6e4a8fe346f7f1df064fd"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.9137fc8b.js",
    "revision": "2b18c9e0f07c609da06c5447cdf5d0aa"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
  },
  {
    "url": "assets/js/18.a84e1461.js",
    "revision": "db5f56610cd41b9fdb124ccb5553de26"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
  },
  {
    "url": "assets/js/20.b4a9beba.js",
    "revision": "8ec823f78a3311b9e3d72c958200ab94"
  },
  {
    "url": "assets/js/21.14dcf480.js",
    "revision": "db50a1ca700d1e8530fa3593ef6b4209"
  },
  {
    "url": "assets/js/22.993f21c3.js",
    "revision": "615d401a4a10bad8e79fef93f29853a2"
  },
  {
    "url": "assets/js/23.48146a12.js",
    "revision": "2684e9121575f7d45ed4f0e023c0927c"
  },
  {
    "url": "assets/js/24.1e396436.js",
    "revision": "fa194419dc8b97f135caa79a82d0e0c7"
  },
  {
    "url": "assets/js/25.e05bac29.js",
    "revision": "3dc339c3a3e212029dc0d22b510d3e3c"
  },
  {
    "url": "assets/js/26.6bb4434a.js",
    "revision": "77feaacdf8c390e3c131e2aa0c24f2f5"
  },
  {
    "url": "assets/js/27.bac1ad56.js",
    "revision": "1f16b5edd4f590422dcb5ed45a9869c4"
  },
  {
    "url": "assets/js/28.53eeb1b6.js",
    "revision": "7af3e3e5f94a83d52e7deaae306e2c9b"
  },
  {
    "url": "assets/js/29.1673af62.js",
    "revision": "106ba37228cbfd6cece74ac697fafcca"
  },
  {
    "url": "assets/js/30.eb7e682c.js",
    "revision": "df66323c55891928a66fe198a84df0e7"
  },
  {
    "url": "assets/js/31.8c184eeb.js",
    "revision": "6ebff70ac0b32554ab205af9f114991e"
  },
  {
    "url": "assets/js/32.9b918e99.js",
    "revision": "8738729b2f12881deaf6d792b18827f4"
  },
  {
    "url": "assets/js/33.39287bcf.js",
    "revision": "60cda6655443232dded7d72bbdab7fdb"
  },
  {
    "url": "assets/js/34.b78645aa.js",
    "revision": "5de816174f9fc8730cd8a33e7b74d11e"
  },
  {
    "url": "assets/js/35.244aeaf8.js",
    "revision": "6c712fb65dbb7cc84376f12824fe9350"
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
    "url": "assets/js/app.b9acd0f8.js",
    "revision": "9e8ea7e022a2a33129efa75a79aa9176"
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
    "revision": "3a0922a9c61aaea93e952c6978035e35"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7bf89e76174a39b845412717af0783dd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "412f948af947cec13e7cfcfa5b76d8df"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "39db96f939044ad0e5dbc26f38c61fa5"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b5d64e0442d6701613583ca8501ec3d5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e3a9a255dd9be4d0efa98c5f64c86210"
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
    "revision": "6513ae5d01d8a87e3cccf68a5ea8808f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c7b37b0c54699cd5e3b1aab56b357acb"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "6b83938131d9b18e9e8c0361622291ae"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d1e2047f857c9f799a3822388bc21eab"
  },
  {
    "url": "tags/git/index.html",
    "revision": "589ddfc8df58e5b4ac0e6e57d71644cd"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "eecd62134c07c499a1fbea1763e222a6"
  },
  {
    "url": "tags/http/index.html",
    "revision": "a31ea2abe64b79bedb364e7eea48fa75"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "60e0f9c1df7443d712536cc581f3467a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "19ece429a636fae1350b91df1dd6899d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "86f74fb11baf7ba4e9f55d3bbde8ae7e"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "dc61d0f07b11f14790593600ebfb9843"
  },
  {
    "url": "tags/react/index.html",
    "revision": "8b378c1fd0fa4a8ee2e74500046ab3ab"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "b76a19f016f6a4cb8eec978a32ac7777"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "fbe49a7d401e10ec35e24621e10cdc56"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "49c2a4c8920fcda01fd3afbe0f0fdb3f"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "63398389e3e8a91ee2b11b9540433a06"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "913a0e401533ab5e7799d934bdba716c"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "5a8724527ebdd87cb443e9a0a7dd401d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "569173114c45cca55539c18f5adbdb1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "4767aec3e6c2a97be2fabf8b51cf5fa8"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "1ea3e135e410d0a4fcf6152f3c90ccf0"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "6bbd9ad4893f5606e48f7a4de7bf94e5"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ef2e46b33cf282f72b6d6a6def23b8c1"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c8cdd6ffa8dd5d737cbf08744135e498"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "8bb649eec6b394c3f6093520c487b12f"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "958f75ee1deba4aee3ddd7fefd1cab9a"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "a488395e296f67da85cabb86f30511c7"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e7b01f5f561c995184bd77f96c724bc1"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "a30e0351782b305f23b726b48f9d7a33"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "768906526fb5588ab18b56a1c082e33a"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "98811aa425e129c8298117f2a80ecfd0"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "90525a7303ee964620ac7fc795f4e63d"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ef42580050e49a2f98f19b2fb00ca80a"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "bf55cd82d8e9d2711eab4c9e9f469678"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "6a401cdf1cdf564d3656536e2723781f"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "af05f75d76a88cd704168e9fc4bea87a"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "31b579a94ef5ed66e157ed81d8342cbd"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "3667a673ad16f954e59f62c2e060e5ca"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0cd0c77cdf646fd38159a921ed80d7b8"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "616a794228ff3d9e8a920ecfaddd6fb0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1e3e4aa624b8249344e308153fd6f8da"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "bfca5385b8c235392b886ac61d7f192d"
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
