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
    "revision": "ab45751574cac6501c193f0d7bdfd31a"
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
    "url": "assets/js/11.32be97b8.js",
    "revision": "190ae099f5702390770f4e9d6a82115e"
  },
  {
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.8fa5e0ff.js",
    "revision": "1962297767003bfc75dc825d4456f659"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.f46437dd.js",
    "revision": "f92a627c5403b30792689da4772eeddd"
  },
  {
    "url": "assets/js/17.35a0267f.js",
    "revision": "9a7538eb68a9be64b473aefa1216b90d"
  },
  {
    "url": "assets/js/18.92bb4a36.js",
    "revision": "9afa43ad0475a5e5f1cd36fb208135d5"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.42019346.js",
    "revision": "6c9b06b2523788f2f10d9dba502cb85d"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.87734daf.js",
    "revision": "b036457850c0761b4c0a402ebd549683"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.995928d7.js",
    "revision": "9062a473f68e4064233b6851145308bb"
  },
  {
    "url": "assets/js/26.bad99e93.js",
    "revision": "3e3a2f113f55a4b33fef4594bf1efbee"
  },
  {
    "url": "assets/js/27.923ae5e7.js",
    "revision": "0e8f78edda0bed139aaf6e5b835f8676"
  },
  {
    "url": "assets/js/28.6d13557c.js",
    "revision": "3e8e8e3eb90fae52e0ee289aaba39eb1"
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
    "url": "assets/js/32.a8b21803.js",
    "revision": "4f1f82adb03b447f3d074d44aa4eaab3"
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
    "url": "assets/js/35.f26302fc.js",
    "revision": "798f811c1db9980a653ca310722d9c75"
  },
  {
    "url": "assets/js/36.7b487126.js",
    "revision": "c163b0882c3f7d1f98751c6b39be3cae"
  },
  {
    "url": "assets/js/37.696e1f40.js",
    "revision": "aa4d97b84d6ef6cf9b3ea954587fe15a"
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
    "url": "assets/js/app.a0272124.js",
    "revision": "a94b2c1433491381be5e94f07eebb3d3"
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
    "revision": "390f11e6237e78e2a08eff7b339851f8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b05a26d6ee2cbe6df18bcb9055326337"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a750a3195d1a08c439e2545bb89dc979"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c19d83d04d100af2839cfe8e35e2bac7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "ec7e47fa91797edf79e9a218fba352a8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b244d3c06b7ff2483b456af4681bac76"
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
    "revision": "d73731eaf3e892a0a74cc522be1ba3b1"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7533eefba73e49c45c1d135c46d6a0ff"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "13cb683017980c282f103ee5c975a1ce"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "2d24a5fa136e7a7b94269aaebd922c13"
  },
  {
    "url": "tags/git/index.html",
    "revision": "058d99a03aea510cea9d2731c7c65048"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "e2eaf98162f586bd5a200386887de794"
  },
  {
    "url": "tags/http/index.html",
    "revision": "639c767d7ca3e4cd456a29f8aea8adbc"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "fa5680f14015bfa0739dc134372021a8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b701c9880751610891bad1c19bc921f9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9944694e4b19e8f3413fa513e4ab77e3"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "3ab2756e31e47e519a7454859da5aa8f"
  },
  {
    "url": "tags/react/index.html",
    "revision": "c3704147169f8fc590a70cc5816cd9b8"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "13aef898a33f4411488c2e2846b3b526"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "5fd9819c85d8b1880b4db9fb6893e48a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0065cdee0dc0e87e7d49a70efa551449"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "676430f68491efb8b94cb1c0c7e06864"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "375996a84e698319d208c21466d2f7b6"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "7cfdb9deb775d2e0f65a173430f57b50"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "069343b86d87d5de6e915aa2af29f61e"
  },
  {
    "url": "timeline/index.html",
    "revision": "b25ae812c365916f4d48c562da793609"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "64f071696dc014a2e1b3536bea1318ba"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "f0bc075be0dbe58838ab15754cae0a1d"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ce38110981735e9de8a4483c8ed55373"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "cb667eca32582bb8aa6bfa43fbc57b21"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "ffefe1a615be7dbdfce4ce68584b3d0b"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "a2d959933430884a41f8ed0a1232d537"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "bd5b90a47e56dbe66ae7e2673ffb643e"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "7029711e51cc4e6b7f34fd607d812698"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "70c4ed4817c75b5bd6882218b8454423"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "4d2f3e5a39518bddfd3188467db091e0"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "d0fd7b61386a4189671d252567f9fc9f"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "5770e7cc4f5c333feb7476c1b0a16c01"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "9decc2ceb334fa249e83d4507017e90c"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ad4a4bb44f8542216026c6884d46596b"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "b01842cd653458f61080d4c7b5d88113"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "1b2ef4b6a75c50b13e0982a45997ef2d"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "e7186465ed7aefcb16876b36dc0f883f"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "94b433023f8d28311390f6754390c84d"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "9402bb9786ea2a9117993481f8d0f9bc"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e367821af2a1790e6f83ee1ae64ea7e5"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "6c242d49b95e872ad9262e2f5993bf6b"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "cd0ff55030e3f98cb6544ae0c8b6f674"
  },
  {
    "url": "生活分享/life.html",
    "revision": "380c3284279d6d1991fd65e340803ada"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "e34cd5ad900c4312ce3341f2abb599e7"
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
