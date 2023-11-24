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
    "revision": "56cc864f2a7125a503cf380c3b63a281"
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
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
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
    "url": "assets/js/19.4cce212b.js",
    "revision": "9b8a5f1b3bc2da34b43921fb9d15642b"
  },
  {
    "url": "assets/js/20.4a8d0c1b.js",
    "revision": "c9d963387f9a2ad590b8eff298c6d43b"
  },
  {
    "url": "assets/js/21.9b89f6ec.js",
    "revision": "7c960636f6b97461d55969581a4e2d81"
  },
  {
    "url": "assets/js/22.7cbb79df.js",
    "revision": "bea80951de6f56dae27d7877cecd2420"
  },
  {
    "url": "assets/js/23.9bc26e60.js",
    "revision": "9e760e8636c9456eeeacb88fdb207292"
  },
  {
    "url": "assets/js/24.523ea93e.js",
    "revision": "dd7072ddb6c67fb38a4d49fa77a693cf"
  },
  {
    "url": "assets/js/25.75e5dfe8.js",
    "revision": "d8055665b641badc3b32bd7bbf696eec"
  },
  {
    "url": "assets/js/26.a23d62c9.js",
    "revision": "e2ab97c22cf74e01ea4a4d998493f545"
  },
  {
    "url": "assets/js/27.740a98e1.js",
    "revision": "76625dbc4d38098f5faa0baba7362be5"
  },
  {
    "url": "assets/js/28.a122c810.js",
    "revision": "3029228f81c175d1c80bf453652e6a25"
  },
  {
    "url": "assets/js/29.39cf4dd9.js",
    "revision": "8e5c392b98f7b3ea043fa4a38a024d38"
  },
  {
    "url": "assets/js/30.0d2829ab.js",
    "revision": "d245ede5cf64a6a0ec334097fb410b47"
  },
  {
    "url": "assets/js/31.4d5fed91.js",
    "revision": "58b29fcd632bec2f62d207335d13703f"
  },
  {
    "url": "assets/js/32.14986b20.js",
    "revision": "20ea45ebaea91a12e44196962c5927f1"
  },
  {
    "url": "assets/js/33.8fe4a3ae.js",
    "revision": "e08ecea4c3dfad275485c69eb3c11d9f"
  },
  {
    "url": "assets/js/34.146675c6.js",
    "revision": "f8c96b5432b7118ac4d3e8723cd6c211"
  },
  {
    "url": "assets/js/35.eb3e68e0.js",
    "revision": "e84ad727af2b3207906d1c31633dd83e"
  },
  {
    "url": "assets/js/36.4b764035.js",
    "revision": "6a2462ef4c234a66eadffdc48e51e041"
  },
  {
    "url": "assets/js/37.156fe2cc.js",
    "revision": "a277294d9adff460c8f7ab60cb7287a6"
  },
  {
    "url": "assets/js/38.4854a0ec.js",
    "revision": "220cd243e5681403b4ab2e9147d58269"
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
    "url": "assets/js/app.be2bc941.js",
    "revision": "d89d5aa6d72ea0df73e0ce6e7ad078a7"
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
    "revision": "f7fd7209d935f4e29214c67ca4b3d0ce"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c5930035c1fab310f58d7b43530e87ad"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6a6be976213fd936a8add0cd19fe4643"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "83e69088ec6475effc7e09635a3f4f31"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d49ad9c5df322c2a645bcf80387b5ffc"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "68334a530abda8d32010e15673eaaaff"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "49f173ef60eefb67cf9220f7d798fdb5"
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
    "revision": "46eb86d374dae8f84a3d4072efd68e2d"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "f4a9ce723547fb3230b045eb317391e3"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "7c0815993eb524684ec755c4fc0871d0"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "3a452d78a2a434e01061fbe98599dc0b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "815a5d8b895a80e6c0efe9d18eb4b50c"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "c8ba235c0da907711fe9567492399967"
  },
  {
    "url": "tags/http/index.html",
    "revision": "44b8524fe870069df5cc4cc840055653"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "7d5639060e6ee5d730e8c51a7fd4901c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "559d19425ef0c937350956e47aaedf4a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c9a92479d3b1c3073ea8f663d1a33320"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "eb1d947e61afcd4daaa88c4c74d5389f"
  },
  {
    "url": "tags/react/index.html",
    "revision": "1bbbe4a4f832b9de7a6374084edb0adb"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "cab9f94b58ba49335693f539f4b3c2ef"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "77fbb9296c6e92c2c1cde04de10a9286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d9d51bdcebb2cbf9107b87bc4a1bb1e4"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "558b7aa626804be5b63413d5e24ecd72"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "49956e2dd9b34897152da2d124a1ff30"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e1ea4f78a39139f4c1c69fb2d7a0a01b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5299bdbd5c27011b8753c8f0603415a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "354777274e7bbc4cefda259ed2e418c1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "942ab646ee45415acef11920fbc1ef80"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "401f02a09be967ecf550049fa8eb6130"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "ae25bd85d99c3a9fefdc181fb5c96fba"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "426a68d36e56eab3c31aaf82374d973c"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "4d839f10fcc8450dd0bf958298e4c823"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "f1662c25de82137e0f050340bc758a73"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "e392cf9d7db873e38574b25d1c8c3f54"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "8d2030030e73eeb8a88c701d5c0940f9"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "fbe9a747715b198003fd08d8dd4f6a88"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "3f3140807bababa082931ac728e7d021"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "88c54eab09c7c90a040c29bed948e2a5"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "5abad923107227220b6a680fd27f0c13"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "5f719b5c0105f583ddae65aca72c9e91"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "874f769a141167859de4d0e59c5261d6"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "de2a22a9bbaec9e3efe5ab6fdf40d483"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "cef21c4ccdc5b0589ff081653a6ebfec"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "1fa2c8b14895edf22c167f5a625ce837"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "3faf0a5807c932414ef3c0d4002b4cc8"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "6a01cbba5deb22b76ce7b9424a4fb4f8"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "c8b6ebbe016614883a8b7cb8aeeba41d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "04992b574ea644835c58eb24480f2b3b"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "2b12a9da47d3fc260d54d05c4411203c"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "c9a407968ccf4687039118af98dd0e3e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3be42dfa0802922366542778eb4c6f2a"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "527d64b8baa1c923d0655fe7ca38f50d"
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
