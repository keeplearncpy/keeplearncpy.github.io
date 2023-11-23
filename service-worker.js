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
    "revision": "400f492e2fdaf5ccbe421822fb60288c"
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
    "url": "assets/js/14.bbd394d6.js",
    "revision": "32fb09558027a2ae62e2d640694a532a"
  },
  {
    "url": "assets/js/15.21d54934.js",
    "revision": "439d2a40f37af6ee95d59453f8e9067a"
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
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
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
    "url": "assets/js/25.2f8e38da.js",
    "revision": "0ef766d8e8be6e43a0c051e0f41afacd"
  },
  {
    "url": "assets/js/26.65609bb7.js",
    "revision": "b8476102e59fe77bc239664b18fb437b"
  },
  {
    "url": "assets/js/27.1b1d5d26.js",
    "revision": "b699d8d9572299f6164fe3a4edf34089"
  },
  {
    "url": "assets/js/28.7ddf2184.js",
    "revision": "6ec9d882cc7151504ec925020b62ab43"
  },
  {
    "url": "assets/js/29.82b4bcb9.js",
    "revision": "4086473b677cd61042b93aa739a57d37"
  },
  {
    "url": "assets/js/30.d2722f63.js",
    "revision": "184d7b9ce57b1c8a3ed0bf7948ad0a8d"
  },
  {
    "url": "assets/js/31.1220323a.js",
    "revision": "1156f9897a534ef8422096b076c8606d"
  },
  {
    "url": "assets/js/32.7b538f48.js",
    "revision": "2a8732cd69e379fb45ba4a6bee577679"
  },
  {
    "url": "assets/js/33.d2f7981d.js",
    "revision": "8f5acc49dbeacf86c4c467a8b9998645"
  },
  {
    "url": "assets/js/34.ae2aec56.js",
    "revision": "a32ec3f280b91be39e636bcc0618ffcf"
  },
  {
    "url": "assets/js/35.90b1feef.js",
    "revision": "dbddc8293b9f4a00c36eb29288656625"
  },
  {
    "url": "assets/js/36.71ecd6b9.js",
    "revision": "9bdd41dff1ebafe1f0575b53c7de729b"
  },
  {
    "url": "assets/js/37.7515be35.js",
    "revision": "aa4d97b84d6ef6cf9b3ea954587fe15a"
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
    "url": "assets/js/app.9e4ad019.js",
    "revision": "3acee7058369c45b2c26310a0d719752"
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
    "revision": "1e33c0bfcc1bb5fb11247e1bdf8ef809"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1c4a912275a1a5e666467ce165f599a0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fc3d67329462db6d059cc65ca81eac67"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d3d9e32c2506420ca2f05f2e4a6a3f1e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "181bf536d12767f989ad0a22a731e910"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d739870b78c6b3f14fafafa52c0c224a"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "c338f8636188d939d9741e98139f16de"
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
    "revision": "2d85fd28ff1de2ac949e5d09acf1cbe1"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "541fcd5cd266631a7304588b40b7f318"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "1804af819d520d70d127100332bf79b5"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "827795ac312d98d4dd6c7306534c53da"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2bf3db3562d2f574e683e348698ba770"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "fcba5974640dffdff64e4290cae6cd18"
  },
  {
    "url": "tags/http/index.html",
    "revision": "eb4550bdf1bacfd98d575976514f3d7d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "900666c224bab46500c910707f47f513"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7d5f7a1e4e43de1f3ffd7cd7286f61d5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "616ffe974b151a72e89763c8f229437c"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "302e44854395d80bdde0fd1c2fc68e59"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0dbfb15b7afdf731906262a96555c9c6"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "5dbce04a48d3ec0f879b22d2dec64edf"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "08567181fb94c5b2a5c12afe4e3b54ca"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d176858b1ab5753a5a68f75fc69a0e60"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "2528dca1fe6696ffc5aa0ff10cd14046"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "5a51673bedd237c53e99ec4be77be871"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "8d48ccc2d7149a25113f49e8b52aad2f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "409ba95fcbeff321955ec48e72543adc"
  },
  {
    "url": "timeline/index.html",
    "revision": "0482829a1efed59d0d3171bf73d7ea9e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "155f81c90eed1b9ddaa140da2157aaf4"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "f47263b5d640c9cfbf60d6af4ff4975b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "054f8d3925110b744f4a919386e805d4"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "2a0aa44023088c23b00ef1cd252d186a"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "67b7949ae94f4010a7416b64e9977dad"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "a9a862aefdd9830e185c8f5989b0df4e"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "2136de7ebac37370a188ef5a519380cd"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "288c2934d6cf580e37ec7afecbe28ce3"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "1de92d5bdb2ccd2aaf6875f04c4f224b"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "19548caa1853fbd7e6a543c055479846"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "b9969b5b8fd4d30d7958abaa0fd98f0f"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "ee5f1db1ba305e29adce90c0b69fec77"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "516ed7de64bd80dcee88f2ec06058629"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "304d0f142b5f85c75df67a22986fd4c7"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "db0f3c782c3a93a54b33a85df12977b0"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "37b0c7f0bb749375e2b85a00b66c298c"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "49f7cea49e2f6cafa4613c1bb9e8eb97"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "8b072f2db849a289ec04f91c929e532f"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "c2c25fdd5e00026c824a5ae3b6214748"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "69d3077b45ffa60ac25e33d40dd33461"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b53dc81a8fdf022bffda93dc1e82ecb9"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "8244c3d3ed59c48bb5f6ccb9a08d40aa"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "c70a09bcf375bff5329ccc55cb75246e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "76680bd9ce728766a088bcd7b222c302"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "aca4eeb8929a8098ce14a4911df91958"
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
