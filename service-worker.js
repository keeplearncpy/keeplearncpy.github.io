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
    "revision": "f240b07de6b87fef9f8571218cd50fa2"
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
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.b95123ab.js",
    "revision": "7e50d3ea70e33dbdef30449496c17bbc"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
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
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
  },
  {
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
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
    "url": "assets/js/21.45cda0b8.js",
    "revision": "48356f44be54d76a730b9520b879045a"
  },
  {
    "url": "assets/js/22.993f21c3.js",
    "revision": "615d401a4a10bad8e79fef93f29853a2"
  },
  {
    "url": "assets/js/23.e1cc729b.js",
    "revision": "b6f605a12845bad677f02e73e2df2401"
  },
  {
    "url": "assets/js/24.aacd0093.js",
    "revision": "4b39146d9da2305388094bd62ab5ac22"
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
    "url": "assets/js/30.6b663685.js",
    "revision": "f0d5bac3a566501740522f0c973f81f2"
  },
  {
    "url": "assets/js/31.b5956f68.js",
    "revision": "53baa52e4095f098b6648e613f4e1961"
  },
  {
    "url": "assets/js/32.693e9156.js",
    "revision": "5c19e31e42692d9c4462497d3031a41a"
  },
  {
    "url": "assets/js/33.5da44e04.js",
    "revision": "23842788594f722392f82e7199356c0d"
  },
  {
    "url": "assets/js/34.4599eada.js",
    "revision": "e2a6f51392ca4aceb7f092969ce57b96"
  },
  {
    "url": "assets/js/35.ecb41842.js",
    "revision": "faeeb11582e85ab1ae3675ea28a3ca41"
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
    "url": "assets/js/app.4273a2fd.js",
    "revision": "451cfa93d8090e528c0da78d3d0fa46b"
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
    "revision": "f04684643a9586bb650103c75cd321f4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "90898d5a6d0432d103717f687d8d933e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "733fce51bd50daa766af8407c487665f"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "de4ee50de421c34edb9e3eb93461c965"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "06c53074fdfd6bba86bf4c6de004a7c6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "59f252c1dd4e72c24097acbf55744419"
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
    "revision": "aa50954e21c03ac8ef5bd7c303449132"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4c67193bf76dd5a648284b462d30c2f5"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "d5b827222f5b071b64b57a755284d388"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "8ce62a81612d3bc678be6a0bd75fa7a2"
  },
  {
    "url": "tags/git/index.html",
    "revision": "e0cd722a9f9ad714870c430f915ae303"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "2bb0c5766620a7985c891fde1ac60d63"
  },
  {
    "url": "tags/http/index.html",
    "revision": "849e0bdb95ab407e4e328579c8f7f73a"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "24cef6004aab7dfb21168ded407e3d28"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8ddc24db1b24d2acce2d8b5e484bec15"
  },
  {
    "url": "tags/js/index.html",
    "revision": "32ad2066a220e63426f68d3f809ee207"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "85a92cea9f3c64f3570537eb0d9c7860"
  },
  {
    "url": "tags/react/index.html",
    "revision": "08077ef0b36a14ff0dc71568e7f8eef6"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "0c9e4728cd16e18df9bb163f733f9151"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "54633809cbf030c239eeb3ead75702a2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "552cec067f14edb49e56902e87cc9374"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "c109d01363dd6550fd5127a2f8e1413b"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "8564d90c4dbf06fa409bad4dcb966dd5"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "9fde49b01520a98f9f67b1648db510b5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fe307ac64e449f3f7ba6774abbc4973a"
  },
  {
    "url": "timeline/index.html",
    "revision": "2e5a031203b0a9a0b7360fe81143e46e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "f1e1ac40cb4656ee25b83f99f849c0d7"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "2900c9682321d5098d77b14998e08b3d"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "2c050918db266c6423ee8a649ba9301e"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "8fe046e13d75ec25241a650b961df536"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "c1814af54b1cd8a681598fb64ee4c345"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "226c75c95339e3aaaecd470f2e151f34"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "e14f04b1d9ade6ef0e0ccb04aee81d43"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "f33e55236feee9fef06c418f32f56e5b"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "488196366ee115b7c19088aac7629747"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "30eb2a53091198f169b9243e888375c1"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "138d4f6970b8481096fc733346cd5506"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "72b0f32e4866fc3e6ecd231c71a61916"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "479959c7e7d91f6d968b7735b65f5503"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "366f618212a1ecf4e65b703d3cc15c44"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "382632dc36609a870f800b8056ea9df7"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "6df9cbac2da2d316afab0e420e253c7c"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "dda6072a167359941793f5d642672a6f"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "fa6f7c77a00f932ff6b6ddf05af0849f"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "a1f90b6336dc339548681696b6e1598b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "93f2268a859eb3ccf26cb91b93066268"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "05806e65d51cfc467e5c17d26df37b23"
  },
  {
    "url": "生活分享/life.html",
    "revision": "acd24419f1cf298ba8845279c5645096"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "0086bd04e7e98d7aff70804548ab95c0"
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
