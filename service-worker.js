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
    "revision": "7da725cd1a64816bd17da5596cdf52a7"
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
    "url": "assets/js/13.03a61dd9.js",
    "revision": "bbb9b7136d3c7088343a4b055e4a807e"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
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
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.2e8599bc.js",
    "revision": "9eb84b708727145d89f5fc1712e34b06"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.fdb6f8b5.js",
    "revision": "561aab633c172dfb3daa9bc22fea468c"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.6f6e1825.js",
    "revision": "e501f92b7927d04146db9b125e223869"
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
    "url": "assets/js/26.1f3ef11d.js",
    "revision": "9bce3d4e6e48f00cc562760e0c2df021"
  },
  {
    "url": "assets/js/27.923ae5e7.js",
    "revision": "0e8f78edda0bed139aaf6e5b835f8676"
  },
  {
    "url": "assets/js/28.f1dc6511.js",
    "revision": "9b267ef637ae8e0cdf1d09de07e1c6be"
  },
  {
    "url": "assets/js/29.cc1890fd.js",
    "revision": "6c75856431854d2950e43cb45c815b68"
  },
  {
    "url": "assets/js/30.82cdc83d.js",
    "revision": "cd48715b7e17b86c5aecd0e42a7ed53c"
  },
  {
    "url": "assets/js/31.b5956f68.js",
    "revision": "53baa52e4095f098b6648e613f4e1961"
  },
  {
    "url": "assets/js/32.35f41159.js",
    "revision": "f22770c96b0408bdc778138758dfefe1"
  },
  {
    "url": "assets/js/33.35b7c808.js",
    "revision": "87705621eb8ca1da824f6529451e0bd8"
  },
  {
    "url": "assets/js/34.395b62ae.js",
    "revision": "9599fe3bf47a86ef8e621c58226a20ab"
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
    "url": "assets/js/app.efb59294.js",
    "revision": "dfd89b8470aa0ce08c810f93af7a4850"
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
    "revision": "d7370b10b82212ff3f1a6c34e71437b8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "243af87603cad472fad2f2c0290d3373"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "dc9620f08a6ba172e3c5363abfbc9146"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "80292cf8064e722197ae81eadd353add"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "1d7da2aef3275b275eca5d2577d2fdda"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f9ed617cb7f1f9a139fd8e37a55462c8"
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
    "revision": "19f6c57ef3d10dc53d2c909beaba71c8"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "384495d8701f221fc681d358e769b576"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "d3f2a78b10eab90c1216d30bff2a2034"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "977778951aefd578d04339ed06dc695b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "201d0b58b8324140195f5c51b99cf2c8"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "3871c2682185e97172d64986f4b46ad6"
  },
  {
    "url": "tags/http/index.html",
    "revision": "34d5c2b8dda986ea19e6e75cdd0eec6e"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "20be86875598ce39aec9e8870a76551e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "319e8763f1c945422ca2646cfc4cd3a2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8c1f74c108d2d5af726debbbcaeeaac0"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "be61b1261c045c806b1987b4f57906f1"
  },
  {
    "url": "tags/react/index.html",
    "revision": "4b10f7bd4f3414fed164d278a9eeab33"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "cd0cab160ee0e0ad8d942bf1de8a8352"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "6a51a45f3c24537add5c80dcede99b9a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5cb4eade803e774c70ce28f32cbdfc0e"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "6eb5f47fddeddacabdb8e39e64d2ea62"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "9b9cc2bd4d1152dd5b9e574408bd9c3b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "010fb4fb6601f5d7d940571dec3a4f44"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a6288a7d8483dfa3db97f14f9daf2a4f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4c91e2a5dad3274086ba90706a80efbd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "b09cd3f12fd351ebc295733f84281382"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "cdad2bb404530abcc6c5122f255cb688"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "f46b74ceb871c850c4447cdccd66a5d1"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "88d8211f28a0617ddc1559c26a202a50"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "031e45e4aea2d962189b7623beb78b5b"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "707d28e310a1e76e023921b28f616754"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "7ec8fc9a4a1400d2161850cf7e179b91"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "605834b045dccd6cc95aba7b38805b57"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "177d4148d59168813f03d0f2b1abfa0a"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "5a54be26042cfe3b08b6bf768496012c"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "063f8616c76315603cb2ff5db20caa80"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7cce491d9d651a765324c83cc0aea199"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "b6ed43fe51d544633b9c886154b659be"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "cfd545b9fd1a49ded24863b38c45b3e3"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "dca66dd160919959a786e09ad63534b3"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "b04834096cffaac6de80a8d2c5e82cde"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "cb45879d00db9548148bea10e039df67"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "65d3bfa473e63befba9babb0788d1ff1"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "e5144ccd31cce1b95c097f25d3c6984d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "21f7df4489bd73a1a248ebb91565e39c"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "5142d4e9edf0d10c22cd30e8db29492c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8aab10b0554e16622294b119f2ae90bf"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "46ea78fd3bfcf4508dd810530937426d"
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
