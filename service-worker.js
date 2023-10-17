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
    "revision": "c667d57ac2de3e6cbf68cceaef7326e7"
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
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.c4c27d8f.js",
    "revision": "fff9f926a57cacf229a4bdc7f74fd473"
  },
  {
    "url": "assets/js/18.d326de16.js",
    "revision": "615f4cda63b69cb766004f2cd3bfc2c2"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
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
    "url": "assets/js/22.2d841d0a.js",
    "revision": "2838de53c5847f6b41124c53e79bc9d6"
  },
  {
    "url": "assets/js/23.8922be48.js",
    "revision": "de343a661447e5ca481139a5924121fc"
  },
  {
    "url": "assets/js/24.5fcf9427.js",
    "revision": "24547fda200b87285d874e787fd7ea8f"
  },
  {
    "url": "assets/js/25.8a5b4a5d.js",
    "revision": "b5e4f407fe52a56d26cc8dca464d46f1"
  },
  {
    "url": "assets/js/26.cbb0d633.js",
    "revision": "4a7cee979f7a03527de2f0bd78d3d352"
  },
  {
    "url": "assets/js/27.4564a8ec.js",
    "revision": "f42310a7248adf1f1f9edd9c2ca031ce"
  },
  {
    "url": "assets/js/28.15accfad.js",
    "revision": "e157fcd3a111d9670f2b4877eb4f8c78"
  },
  {
    "url": "assets/js/29.a8105037.js",
    "revision": "02e87bd225f678621df6e5cba77675bb"
  },
  {
    "url": "assets/js/30.fa11222f.js",
    "revision": "bbcea54461d6d90476acbc5c04a24d4f"
  },
  {
    "url": "assets/js/31.d3ed53f5.js",
    "revision": "0ccc9e6f8ad511e8f471da46be23db99"
  },
  {
    "url": "assets/js/32.c0366b52.js",
    "revision": "4283ea873f831306c35307c2a44ca8e7"
  },
  {
    "url": "assets/js/33.ecf5c9f0.js",
    "revision": "445c7dd731cb8fd984f3039f364afa0c"
  },
  {
    "url": "assets/js/34.f69679ae.js",
    "revision": "b1a305e5923ac52c474045f813b323b2"
  },
  {
    "url": "assets/js/35.ccc5a261.js",
    "revision": "b382167d1b41cd92f00edaa18f935d0e"
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
    "url": "assets/js/app.c247a62a.js",
    "revision": "2131ba1eb71a8884bbe413fd0a76d6b6"
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
    "revision": "b23aeb35b79dd9d38fc4ae2e5b3248d3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0b386150cef9cdd48ef3c3abfcb74923"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "66068e3da50841932ed7c5c0cce10337"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e68bb83d740057e9772c8e224bbca03c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "2e3b8aef814075487debca116494b1fb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "25f0e49378690ea786c0210716e0682f"
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
    "revision": "efcc94ebdcb4d69606fc19a7c2973a06"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "edb8584019e77bd3054aa9182b7ac8a0"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "7c97d37bb54ccd9b2274e5c2825ca3f9"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d5a8aa9185edc0ef49925c320fba2d28"
  },
  {
    "url": "tags/git/index.html",
    "revision": "6248c7e66247e9231fcd385d9594b531"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "2b0a006e96c897bd5c69c1691743abcb"
  },
  {
    "url": "tags/http/index.html",
    "revision": "d4e3b0793c50ec9aef74e8fa013f5a5a"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "9a6745381aa4d8c7214a81f0130255dd"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1f503f28ee01c24a246db48d9b7f39bc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d2afe3a6f2b3554931599ca4ab04d7f1"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "cfe137418646cf85645eaf5df53d467b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5f98eb6b1bb57482caa660e3e11ac5cf"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "244c3b9b21ebe715379c6d467a7cfbc4"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "65ec942190d30eb243486a0608c75a43"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "48dc440b6d0f763095b22055920c84c0"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "ecf1cc0fd2dd52d788b2749b103564b3"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "6e0145d4e6713c0f071790892f21f5a1"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "eb6c8db4512aab9077f72bd3473013f2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "adb09327cfd56cb198db5e3fc020b045"
  },
  {
    "url": "timeline/index.html",
    "revision": "e6694a9eaef4d909ca04bb40d743e48a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "455196ed738e672afa997a3ccf45ac01"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "8619fb662083a945fd506cbd6cfffc1b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "2980d2c3eff4b372cc384fae04bc6181"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c3152194e4372a1a009642e1283c4ad8"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "f8045b60e2a0dfa40013f76278896b04"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "be018bda9a123f466f2cf5b47fc714d2"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "e6cc858c0d381601a08c3ed9600d3852"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "dc965388edcc940998ab417513253d14"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "245d4ccf0bb22215cc499f9025b77e59"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "cd2d92f58962e631f5caef9d6187f0bb"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "424748a0b85e11acdf59bdbc46172524"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "caba370358900be7b1db81e8d451c280"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "3b84280145afb277cfbe8a4ad8bebd96"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "57bcd807fd08a73082433cdc77a788f5"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "845044a448182e04a7383fd95e0b13a7"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "b64915e80bbdbe1ac53f0f0f68cdedcb"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "2059dd100f3fbf5a07ce618112e5345c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "8d47fe2ecc49bcdb1a372c1fc8a1ffee"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "98c407e7db6f07218e00630478ff33c4"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "39c840358095f3d0184d6a253246d1a6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "740aface7951bc90a77a3e261e98dcea"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "9e603dd06549273ca13b078e3737a495"
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
