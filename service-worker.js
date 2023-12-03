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
    "revision": "e3e7aa07f52addbf08e43f95e734e23e"
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
    "url": "assets/js/11.e58503a7.js",
    "revision": "c112dac0ef2ce83731aebc186a15f46f"
  },
  {
    "url": "assets/js/12.f7937bbf.js",
    "revision": "faedfd6d8a8d0961be5025874f0f328b"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.fe7c245b.js",
    "revision": "5e174ccd958e84cc3b2242c0a4eca998"
  },
  {
    "url": "assets/js/17.c4c27d8f.js",
    "revision": "fff9f926a57cacf229a4bdc7f74fd473"
  },
  {
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.bd296078.js",
    "revision": "24f20be2746d9c72e48d0caa600b7de6"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
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
    "url": "assets/js/23.f1fe21ca.js",
    "revision": "e96b6364291a0a751b42f0965e98b49e"
  },
  {
    "url": "assets/js/24.e20a9e31.js",
    "revision": "83c31587b22bdcf25108b06b102f394d"
  },
  {
    "url": "assets/js/25.75e5dfe8.js",
    "revision": "d8055665b641badc3b32bd7bbf696eec"
  },
  {
    "url": "assets/js/26.9a51cbf0.js",
    "revision": "19347a5f7dcf2e06caf1945ea7d1c89c"
  },
  {
    "url": "assets/js/27.6bc86cdd.js",
    "revision": "8c07de868da623ef419430ca9aa807d0"
  },
  {
    "url": "assets/js/28.1701a94b.js",
    "revision": "8a760d0ca99fa9499f62290beec6c96b"
  },
  {
    "url": "assets/js/29.ce66b90d.js",
    "revision": "08edd5cb5200c13cf383b586fa719e9f"
  },
  {
    "url": "assets/js/30.2d4e74bc.js",
    "revision": "c2b452c7591629438b05cac30c1f33cb"
  },
  {
    "url": "assets/js/31.62f87b94.js",
    "revision": "dffe45b42c62728d37230756c98c130b"
  },
  {
    "url": "assets/js/32.546f4caf.js",
    "revision": "2e78df31f9eaca5028b7a9e8799b828c"
  },
  {
    "url": "assets/js/33.4d8de15a.js",
    "revision": "4a2fe841e318c01ce219a5d73575d36d"
  },
  {
    "url": "assets/js/34.7821464a.js",
    "revision": "09576675e6ba2bdcc71f76249e6fb27c"
  },
  {
    "url": "assets/js/35.ab445037.js",
    "revision": "4445c303a5f3cc8912b6feb33257acd9"
  },
  {
    "url": "assets/js/36.9c3ff2b6.js",
    "revision": "86d4b48d8a31ed6f0731ce96a3296301"
  },
  {
    "url": "assets/js/37.4e4705ab.js",
    "revision": "cc14cfa49b71f31bed775a27a8fac8e2"
  },
  {
    "url": "assets/js/38.f4b90619.js",
    "revision": "a59b37ee6338b593bc537a3674a480ea"
  },
  {
    "url": "assets/js/39.99be6463.js",
    "revision": "79a07f17faf605135b7c1b33abea67c0"
  },
  {
    "url": "assets/js/4.08080986.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.34bfce16.js",
    "revision": "433e31851b7b267b84988dce1b4f3531"
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
    "url": "assets/js/app.161f9960.js",
    "revision": "ae94665e070d5dbdd6ae2fe87b054174"
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
    "revision": "3d2ea45c5586a7e9884ee2e4b68c242a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d074722a485800ea338cc50fd59e351a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0842aed1bc9c86a6bfa4b0680b627dab"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "a7a20c35e872ef7b7744241110732870"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "f53f89f46479a00694c2f67e3b0fc17a"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "9de9f50412c469db12f882007b5107dc"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "9ede2ed5add636620fc72bb1fd4a3601"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "5139b4775b37740a0df7e30a761b21cb"
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
    "revision": "d39229a6ab9becdd3316f18b43ed5e20"
  },
  {
    "url": "js/custom.js",
    "revision": "408efc54fe4615d9a2ea0f89e4f180c8"
  },
  {
    "url": "tag/index.html",
    "revision": "7222093e45364bbe15122f48ff2d64fb"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e79f6a76b708f755c37b46cdbcaedff7"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "362fa53c80350b793b8a91d09c176d9a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a3746b13c4bf8093534c5f2de1051f33"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "14c8679a1357619f5d6cf9ff21fa11dd"
  },
  {
    "url": "tags/http/index.html",
    "revision": "1f2b4f39d3a9653fbc09699433157b4d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "0b77dacc1d63aff1c8521b9a4c6d12da"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cc7db578b6e3e340f2751361b19b3aee"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "1953c8737676ba3b26c523a97eb727c8"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0ae18a026bce34aba352fabd3091e44f"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "f29e51b2f194bee2a27ce30ac9c0b6aa"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "338450859d16b856a44e3853ccb0f110"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "6edcd0d45198079f393436c2010f7404"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "96829edda1f18ee12f428606b2061064"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "54cef951601d290e57f3a0b1e0c682ee"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "99ef14f5d97b03913dede44cdce6fdf6"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb845cd111b4cb2622633d8d69646f73"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "618b84082b2d1be8f983be83d4e707b4"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "5298f051f70ce3a3a787cb19d3498f71"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "8050e880f3979980d4156d9ca72d3367"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "fab2eee93c2b628dd20a1409e31abcff"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "ce6e10cfd22d0b31ee064d536521c9f7"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "2edeae8ed5266c1bced10792551813e2"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "75282543c4fe9bff3307a5604a5f3758"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "ee533ceb0a4b6d8aef938b6e8337f46a"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "4a73b9bd60095ee8150a68ed38ade96c"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "08e8027f84a933b9dddb36597437d899"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "69f63b5d16afd3c741fba32e535c83e3"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "cfdca6f6eb8f9ea5a016de07565e66cd"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "934d5917e263885837069f00b9f4e14a"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "51f506febd79a0226888ed09c3d8f188"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "615b0a4b9e87366b1a9a8fdbf29b744f"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "0c94bab1da33b8210e5c6f7922e935fc"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "b942bfc392ff80f17d881035762ca83c"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "9c727b820f8011548511650e9cd7ae61"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "3e03f83b512d18f1db22d428ffb4f5c8"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "20d72b66520253c93d093dfc8fbe56d4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "be25c2ab80ac8a63fa4cf3d9342765c3"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "879bd75869c4a4f58008ca5be5d8a43f"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "e5d879e203cef57625abfe49e404c56e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a68bfbdd4650600aab731f5a9aa2f9d1"
  },
  {
    "url": "算法/Algorithm.html",
    "revision": "9dd10f13676c66f05941fed97f805eaf"
  },
  {
    "url": "项目搭建/vue从0到1项目搭建.html",
    "revision": "a0a2cff44ca59e17474e8ba81e56c855"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "0d75b79ff1b2244e570f961f212d8b3d"
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
