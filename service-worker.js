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
    "revision": "8215b3c506520b7a9aa7a9027340202e"
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
    "url": "assets/js/14.8fa5e0ff.js",
    "revision": "1962297767003bfc75dc825d4456f659"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.60b30d7e.js",
    "revision": "447eee176bce023aa0b93ed99bd86338"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
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
    "url": "assets/js/20.88de5543.js",
    "revision": "81af3ee16b849a0a9cafb209ae651db4"
  },
  {
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.6c5e9651.js",
    "revision": "92feb882819c70eeebf5287cfec61e43"
  },
  {
    "url": "assets/js/23.ac6a31c3.js",
    "revision": "0c5d5ecbd9ff59981f1738ab5dc0be71"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.9ffd4f62.js",
    "revision": "af7aaa83fed15d706492603e541155e7"
  },
  {
    "url": "assets/js/26.65e45483.js",
    "revision": "3b866836800e193caacc4c8b481eb9c0"
  },
  {
    "url": "assets/js/27.82dacda8.js",
    "revision": "57a9a5e48eaa46ebda384c1193a1d1d6"
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
    "url": "assets/js/30.0a91973d.js",
    "revision": "1547470e3f267a5d4dbea69df68016bf"
  },
  {
    "url": "assets/js/31.8980757d.js",
    "revision": "c5ec21e85bfa81a8a26dc1e8dba7e7fd"
  },
  {
    "url": "assets/js/32.cc39ff9a.js",
    "revision": "3ee6f57fa193217598703b9688c470b2"
  },
  {
    "url": "assets/js/33.72b14e06.js",
    "revision": "ad44385992ef4fdbb94e37182859cd66"
  },
  {
    "url": "assets/js/34.127d937a.js",
    "revision": "fc0457094caca51d3848b3db3456baa4"
  },
  {
    "url": "assets/js/35.edad2fd0.js",
    "revision": "cf4fd0cf752d1a5509a052fbfab41d58"
  },
  {
    "url": "assets/js/36.cc4952f4.js",
    "revision": "a4f7a4aa181526cc09f076675a9fc355"
  },
  {
    "url": "assets/js/37.4b4d2288.js",
    "revision": "b56164849fe36fc56f0fae6092fe15cc"
  },
  {
    "url": "assets/js/38.6f870891.js",
    "revision": "6bcaad1739885780b1343adbd8d4fc1d"
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
    "url": "assets/js/app.ad02b396.js",
    "revision": "e0cbfce9963c359189484a51b6a44289"
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
    "revision": "d561fc12efc831a271a88f76f814991f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8fc840f403a540faa43d287b701b75f0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "469b4ec7c2fe3aca25560f253b1838c2"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9546de11deb41eb394c5b3852755e50d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "85f2c44011c755c4098a74aff3a32a94"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d40db968c6ea91c66213e3c25d47ad87"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "7f7ac8b7e1688957d309f4c5b983f51d"
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
    "revision": "ff6dc732a48b7ba5f74565d849ea0f63"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "d875c2c0cc3a842403cf02249c776fbe"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "c4332d5d881167a03eb6f280cbc57530"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "86f62ec03ffdfaa79ffa8eaae0597f4a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "0b0329ba82d815a8a5f8cd0a0c68c6d9"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "00c696c46b691327e79a889541b785f8"
  },
  {
    "url": "tags/http/index.html",
    "revision": "9f1fc9d9cd7c5f64204004d4a4164ebd"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b093849a04cc7a6760e4a87818ae31ae"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "34b2c14cf31dcc841e3e9b980e904a92"
  },
  {
    "url": "tags/js/index.html",
    "revision": "96a53a25834cca6b49939b3e8db8d347"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "71fce3ac6d4cc777da6f488112a1ab5b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5dbcfca4b5d8e5b67e2be65694c08e00"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "a38ea43076da7210af06e07583419649"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "ac15d1c937fe24e8f5e47e4e32f2e439"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5cc86764b6276fa7f4b6a6b308473c3d"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "ce23a9fb80c7e49bb66c3ecf891196b9"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "5d50e9136e3e02a8c73df4312b6d48ac"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "512641df5f72e9af58ed286317327444"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b810d0c12d436cb6a90f591adac88371"
  },
  {
    "url": "timeline/index.html",
    "revision": "5080535ba0fdedce0439520bbfc74b11"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "07b8d57282c9801d58f52494120bb948"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "d80141052231752c4b0b57c840a4abc6"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "d76dff99bdf1daee4e3e32d67a00e717"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "7d07bfe88a640a986c7e31b2e5cdba9e"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "7c1a8c0c95b5f4e95bbdd9136fa40548"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "a8a02fff437e199cabb2178dad0103f8"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "c73b194af93671709116dfb71c9f6a6f"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "18418e30d54e7769dc1282e694d5573c"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "6b53c00647078a45f78b7c54f3ce5c46"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "cf55541b3f1da5c0745f0e6f96f80d40"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "b0687a1a3b802b0c00090cc4ecdd82fa"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "2b567287c5ddaf6a93438969cb2b3143"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "409d38c80b8e97871fc882b4024ed29d"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "9d77c9eac5a5b2820c7ecf6b1ba4775f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "55516a3fa956db9397e6272d85825380"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "3107b8d1233077d899af229e20a3f34f"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "ffc25f1b345c0f6c5a07440d20fdda72"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "6990039ed76c20b330c414d7d67edbbd"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "6e78a5f3b9e60f6472ff511bcec8b7fc"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "4244043925ab2b3eaadd9cac16a9f01f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7dc02c6495712e383293550953c248bc"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "55c9c0e8feb8388675759b261693e59d"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "006ab58d5d2985617d3fa48ef4372b04"
  },
  {
    "url": "生活分享/life.html",
    "revision": "df3cc1f9a9d0619f3813a2c4a56888e9"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "c658f7238ef303fd7d2647e73b57ee0f"
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
