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
    "revision": "d87abf476b2ec86dd07166c429fbf05e"
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
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
  },
  {
    "url": "assets/js/15.44ed01e9.js",
    "revision": "8f157fc4284904152754e90aff58413e"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
  },
  {
    "url": "assets/js/19.c4e2ea46.js",
    "revision": "1444c49ff8fc3cd44420a14a3dd6c91f"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
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
    "url": "assets/js/23.3a32445b.js",
    "revision": "bbb8f12fe580163f7a9c3f4d0005b5cf"
  },
  {
    "url": "assets/js/24.5fcf9427.js",
    "revision": "24547fda200b87285d874e787fd7ea8f"
  },
  {
    "url": "assets/js/25.f1c85261.js",
    "revision": "d12aa6c8fd7498b361fb68a0eb946d84"
  },
  {
    "url": "assets/js/26.ed6bfba2.js",
    "revision": "16be13178a8afe4a61eb8a924c82365a"
  },
  {
    "url": "assets/js/27.d958ee49.js",
    "revision": "59a7606addf1e30f2de728082773f2b0"
  },
  {
    "url": "assets/js/28.15accfad.js",
    "revision": "e157fcd3a111d9670f2b4877eb4f8c78"
  },
  {
    "url": "assets/js/29.45a718d2.js",
    "revision": "a3f69b663a4cd16c9bc47e42f18d660f"
  },
  {
    "url": "assets/js/30.6fe3ddc0.js",
    "revision": "e1026c5352fa6fcfe8897ceb650ebb8a"
  },
  {
    "url": "assets/js/31.8c184eeb.js",
    "revision": "6ebff70ac0b32554ab205af9f114991e"
  },
  {
    "url": "assets/js/32.d4518921.js",
    "revision": "ee17396ec3ca681724f93a12317c5700"
  },
  {
    "url": "assets/js/33.1a519cfb.js",
    "revision": "04444f438b9428d90823a2596f545851"
  },
  {
    "url": "assets/js/34.cc9e29d9.js",
    "revision": "1b5969da272ef9fb9e259d6cb6e3d45d"
  },
  {
    "url": "assets/js/35.53ae4149.js",
    "revision": "faeeb11582e85ab1ae3675ea28a3ca41"
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
    "url": "assets/js/app.1bd1e2be.js",
    "revision": "8831d280207a8c874a94d00cf55fba1f"
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
    "revision": "74eea000ad8a5367d64866ca7e6a7891"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ecca6767a819c082acc8f36c2c5bd4a2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5beaab9c28f0e09e61a577b03f6ee580"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "7a7782b454f2ca742b6f5983a5f7746e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "60382813f4faf62719f87e902ebb5117"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a760ce2cf5036faec2d1d55935f743b4"
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
    "revision": "b0096dd139b4fd77373c4b0b3ad35a10"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3b9d638568dd92b21787f5bff69c6efb"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "15bcc2c3f55cc233e2dfae8fcf0b5085"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d57084b4e9f2ffcffc5d3de96b0cad72"
  },
  {
    "url": "tags/git/index.html",
    "revision": "4c6e913093dda560173466d4421e5d6e"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "1e04cbff36dadaffdf41345551ca52fe"
  },
  {
    "url": "tags/http/index.html",
    "revision": "68c1465f100a2b6dba7871043be6d7c2"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "6adaf39e30ad8455575d655c27b44c09"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d353afd0e738c84be67d4875de9b2abc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "756916688f8d62635a7d65dfab401e56"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "cc149fa16de065e9f009579b2d6d97f3"
  },
  {
    "url": "tags/react/index.html",
    "revision": "eddde33c283d9466b5bfc47fefb55518"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "020ae09afb6acfe5a0337406fdf97572"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "67242c23240bb360dec153cb9fba0821"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "86a03f06a2ce11e1f93f3b075220775f"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "6b03402007d7b87f25e9bd30a8df77b7"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "4ef4dee4d6ea376194b961dba63169c0"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "5efcc5f575ffbce09de8492f8fe09935"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a38df6c1708ae9eb49d11df4e7b0ccf3"
  },
  {
    "url": "timeline/index.html",
    "revision": "282210376cc61665737c8f70baba13e1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "d307c32154ee252cd613d37ce83e5987"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "42903346bfad9711fd8ff318683e9008"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "b2ba226383bf7b21eb0eb13f01314375"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "886fe5dc0cfc82bc813c81f05693ed0e"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "5f60b75e3e83a7ec7598206b858ebab4"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "be0694c2bdedf74e6e15cdf5912623d0"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "8033e0370b19df24991b6ce27ba5d271"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e948c79f4f5a6a262beda94c26b1eb4c"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "034a1e71964f09123f629e52ba2b8c44"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "358c9066c2788cf641af0e74b1891e4a"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "38f740c5fabf89ad3f485b84541a0d88"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "56841b9b38f70bf996dbe063d641aa39"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "054466d84b89a43fe62214e1d8447021"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "50cec906466870f345ac5c2d0f5ceebd"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "de6f0ccb6a09ba1ab5b5979c76f24fa9"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "116beabd7eecc89d17e9cf2d66144a51"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "0876fa2aeb38d3aeb3a99b1b08db07b3"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "8e861cef8497b4603ec58d38767f6706"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a137cb4572b395f9faf6ec78928d70d2"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "457e68161f6babf43125704aea9a236a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2bac8e6b4e13c7ad249cf897e6446607"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "e80e99b581cd7b9094be7230a12b33ad"
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
