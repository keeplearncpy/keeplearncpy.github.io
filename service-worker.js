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
    "revision": "573951b32e7ba53ddf72e3bcf00fb0d2"
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
    "url": "assets/js/14.34576c41.js",
    "revision": "a5ed78c664485fdad4c06f300b21e994"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.3091672a.js",
    "revision": "090d1ebcb56a50a63bbd21eaad5bae91"
  },
  {
    "url": "assets/js/17.da6fedcc.js",
    "revision": "2e1aa78444e38b32230fad52c2fae1aa"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
  },
  {
    "url": "assets/js/19.bd296078.js",
    "revision": "24f20be2746d9c72e48d0caa600b7de6"
  },
  {
    "url": "assets/js/20.b4a9beba.js",
    "revision": "8ec823f78a3311b9e3d72c958200ab94"
  },
  {
    "url": "assets/js/21.9fbce1a3.js",
    "revision": "3946a1e8800ee8c062e17de6b3d7e77a"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.fd6d6b19.js",
    "revision": "3d017e233235c63cb68812f2ea19c852"
  },
  {
    "url": "assets/js/24.8403c412.js",
    "revision": "c85a5599d03f226988854f6ad4052d3e"
  },
  {
    "url": "assets/js/25.028db378.js",
    "revision": "a20f6b1c361e2115c9f1c6d5f0a22bdf"
  },
  {
    "url": "assets/js/26.ee6477d8.js",
    "revision": "9a743badd8b0ce2bb42f33885a6304de"
  },
  {
    "url": "assets/js/27.4e89a434.js",
    "revision": "b0e7cedc030cafb4091cd49047cf75da"
  },
  {
    "url": "assets/js/28.e711672d.js",
    "revision": "ea7483dc3983c1096a1ce38d7254adf5"
  },
  {
    "url": "assets/js/29.5ba02799.js",
    "revision": "c6379547cd801f9afad2690fd3f1db47"
  },
  {
    "url": "assets/js/30.6b663685.js",
    "revision": "f0d5bac3a566501740522f0c973f81f2"
  },
  {
    "url": "assets/js/31.b5956f68.js",
    "revision": "53baa52e4095f098b6648e613f4e1961"
  },
  {
    "url": "assets/js/32.fdf1bbe3.js",
    "revision": "fb219c494c4346b492f0f810f8aba3c2"
  },
  {
    "url": "assets/js/33.5da44e04.js",
    "revision": "23842788594f722392f82e7199356c0d"
  },
  {
    "url": "assets/js/34.c1bf352d.js",
    "revision": "7ce449d8c11cb27ed97fb8fc93c4e548"
  },
  {
    "url": "assets/js/35.8f5e0842.js",
    "revision": "10cb1aadea15672b9317d6279e183fed"
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
    "url": "assets/js/app.33c8b195.js",
    "revision": "a0dd81322a1afb9c72a282a1d5fd925c"
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
    "revision": "a739056d0836ad9f85acf4c3f07e227b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "abd5a43ce9c2693cdbdc08fbb0ff58e1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f95987631c5a7cae9c781703fb42f0e4"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "f4dbad47cd1655a1bcd99a3e92ca3bd2"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "6746a381ef58cec92140475085b97095"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "76054a8ddd6be4199bb2bacd1f643f9b"
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
    "revision": "c58406e65c1a5faefca08702be10b91f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "298f6b873ed3222700e09885dd1fd7c2"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "77c12ff0d77c269c0ad13223063c0593"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "70448574953037b7d5719f4bd34a7c52"
  },
  {
    "url": "tags/git/index.html",
    "revision": "8324c7a8b6aa01608d3289b3200a330c"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "ad10bacfcea89b45ceb40865bb4547f2"
  },
  {
    "url": "tags/http/index.html",
    "revision": "8e63e85564aec09317ae0ae2636502c6"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "738d6be247b3f1636c162831e2794060"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "27912012f6a0466188b3d4ad93277f9b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "39d96db49e545e97f8174ecb1e0bd4c5"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "33956e7df8c6b0c9baacdb008cabc2be"
  },
  {
    "url": "tags/react/index.html",
    "revision": "f4aec8a20d0e67bd182961d4b8ce11e1"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "71653255cc4dffd0a1e534e92fceada4"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "e121e3d504727fdeaf0ed180c40583bd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f4e0df473914efbcbcbdef93b56376b0"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "0000c460b78c96bf90c0d1e928c27735"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "a858316fbfa457ef3f073a3cf0b608ae"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d10db21bc0479e57890d03802e7bc791"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b6623a5a71239fbf0f9a4807a45e5ca4"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c43491b433f739f4bbfeae5e31e2d6c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "c6ec3dbe387e7369f9b43dbd4d156dde"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "4d01274fd90a01184b4d4274bb8aea73"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "976dd461001d1940608a7a2d8bfed25f"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "7bdb1f0da3c46cf83bb8e4065a3502f1"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "24b4f99089c8d0a152d2e6a7504eb62d"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "bc28cfc2887d594c35c7dbafe5a8ee5f"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "2432be15c56fa00b3bb54f8cdd115b92"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "d00aaace2a681644a1bd908ee0238013"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "d5117c3813fe0416b7a648c38965c575"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "a30102c25d9c4c94b3275576f66e36d6"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "17feaa22c119d3c29f7d7a7cd15e2bf8"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "a4551a8b652b6a8230bd6a16bab8de88"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "ff387f48aa8c2a893a4e8dece1e8816f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "2190e8e7f41b5992d07eaa93aba74750"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "b8443112f920fb7cc4593ebb8a9adc67"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "3293194ef2093a7c68f64a24b39f8378"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "2b91c8b2c20072646824d0c1d0dfaea0"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "1514bf34d95d5632de7f62d115047bb4"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "484bb59b4c0d447c90a15cbe39003c27"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6d03a14f963824f01634733fb158737b"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "d8bef647c671a91efeb6a241b78fee54"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a16ea70ae176543f3cc841cc5b030b1a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "64f095a709dc19eba36884c47465103e"
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
