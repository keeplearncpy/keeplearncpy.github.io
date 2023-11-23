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
    "revision": "04857fba9dab2bc285b8f1955d457e5b"
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
    "url": "assets/js/15.0389f4ad.js",
    "revision": "7deefef1483822ce7d568d229df1f65d"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.7f0d5ef5.js",
    "revision": "6d9791789995922d3eabada6944de9e8"
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
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.7a9f5d7a.js",
    "revision": "e4383e4ab0af7e57b4a5bb59c95d4d21"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.baa51eb7.js",
    "revision": "89832e5398f4cfa1fbcfeba6f0e98453"
  },
  {
    "url": "assets/js/26.795d70c3.js",
    "revision": "71b752476a494c96d70a2e8a1ca0c3d7"
  },
  {
    "url": "assets/js/27.740a98e1.js",
    "revision": "76625dbc4d38098f5faa0baba7362be5"
  },
  {
    "url": "assets/js/28.1701a94b.js",
    "revision": "8a760d0ca99fa9499f62290beec6c96b"
  },
  {
    "url": "assets/js/29.82b4bcb9.js",
    "revision": "4086473b677cd61042b93aa739a57d37"
  },
  {
    "url": "assets/js/30.a163f1a7.js",
    "revision": "6f9fe923a37074dbbcba5f94c52280e6"
  },
  {
    "url": "assets/js/31.329712e7.js",
    "revision": "75b9624525676eb66cbd0d26d4b2177e"
  },
  {
    "url": "assets/js/32.fd417cc5.js",
    "revision": "0f858a9f628a8c5684185989ef67426e"
  },
  {
    "url": "assets/js/33.999e72c6.js",
    "revision": "8946cb8a6a81b91c88d06157dd535c5f"
  },
  {
    "url": "assets/js/34.127d937a.js",
    "revision": "fc0457094caca51d3848b3db3456baa4"
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
    "url": "assets/js/app.c93778f3.js",
    "revision": "3c41676e1e98d38d160574cd5e14690b"
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
    "revision": "65704f6f395c55f06e44618b24e05895"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bc7684c22bb9cea7886e7f50b760fad3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e157d0eeca0cdea19fab574db65344ce"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e8688c0253ee355000cccc11744ec98f"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "c68c94e0803e35a68ae59986e60d7210"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "61e71750a50b92001e9a3278d47eb05d"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "7ca7e2ef00b737c442593152a36e18c0"
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
    "revision": "96693cfbc5e11f0187fa8ff41c29ff71"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2404b507be2269f5f9f1e41a2462a041"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "190795553d17237bfd65a6eefc6912ef"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d5b553cc4eebcd54aa5a3e7dc576ab8a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "29e0223ab34b61830a240cc6fbb6ed7c"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "3c658f544feb21734ad536aad467968a"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5381e13ebc9c6162a8679899416a418e"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8a9b8309f26efb6ef0690ca2f959fbbe"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8bd0f092880e509801f6063c802f9af9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4ee1e4e5b1ba7318f05a55667c69f493"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "2fba62955723c0477c102f68729ee9e4"
  },
  {
    "url": "tags/react/index.html",
    "revision": "e0caafa872c285ebd5f15d87bd39a006"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "04c5d4e7f834ad21fdfab2d0c47e5418"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "bd3722918b20bea03f4e14f81fc6e529"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ac2ee2c17c44ced1d46604fb837767d9"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "8a0645053a1409f6c8f86395cf9633fd"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "af16b18105f85346a388fb13413a5ebb"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "f3db1af0803ba4674982075157123844"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bf24fa346058da4477677b47f77fc57c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b60a7a9785192773c33596449887b130"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "206fe95d05c9af61e409cf324d2c7321"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "fedbac79d249e80112ae3ed479247321"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "201c4c5d7b30687a847e9b4a58b48c22"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "6e9e2274b8be878d244e399b3cfb7a00"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "345252b617fe07a223be9bc5c4d999e2"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "9ba4ceb684d1ea7302b262b47abe99e9"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "eb922a1d1006f92d93ac67d867aa474e"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "c8f2f24287c49ce76eb3c7dd6bd21c60"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "edad00fd1171ddf53cda9f476a63f2e6"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "da14c9ac863c5566e12e78551fa6a777"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "41d88aa1e72474f9a6bf90f047d6f683"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "1f6aec57105e3bdb151d897c26ea4994"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "a487f18a137f6a9ad2d952428d731d2c"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "0ca6ad89c19498f99d025c98e1d741ba"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "cd1ffe0e46a6d1b88084d118149aff84"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "df8902953251ba43207fc934b155c4ac"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "43dffeaa943a5c9606be85068a99b575"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "57039d4449c1eaf78754410ba97dd38e"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "33a748c3a60c6d289d563df2f4759a17"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "79cd02ce4c730792b3839088336c5e47"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a619a9ae4d86460dd3d0d7c58d2f9466"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "c54c55b8d8187db58a8cb09b60571ed9"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "9fa022bfbcbb3640be14980b8ae74260"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2eef50776a50dc0704dc5c79a1ff47a9"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "0232735862d430b64c34ae10a0304def"
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
