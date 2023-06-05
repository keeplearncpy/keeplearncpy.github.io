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
    "revision": "ccd39c79e917fd0fc9156689a9c88b5d"
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
    "url": "assets/js/1.1287bda7.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.c2260bd4.js",
    "revision": "8c86f36c445e37d4ae1611f0471fa81b"
  },
  {
    "url": "assets/js/11.d500658b.js",
    "revision": "5bf925f7280523db7cefb5484ea66841"
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
    "url": "assets/js/14.11686aa7.js",
    "revision": "5746ced4bf6a080e2aaeeb4098b30a9f"
  },
  {
    "url": "assets/js/15.f299a2ab.js",
    "revision": "454d8ab7df405a6277541f08710b2068"
  },
  {
    "url": "assets/js/16.a65a1c49.js",
    "revision": "acfd97de0465b35755b97f1ddcce3553"
  },
  {
    "url": "assets/js/17.d320311a.js",
    "revision": "d3a557b3b52815f5bfff05a33f058e2a"
  },
  {
    "url": "assets/js/18.360926ae.js",
    "revision": "58dac5926efd9073af1cef4e293ef3e2"
  },
  {
    "url": "assets/js/19.549b710a.js",
    "revision": "e430664bcbd96d72a33a91703dfab49c"
  },
  {
    "url": "assets/js/20.8d6abd2a.js",
    "revision": "7c6af0eedc3c473ea8dc02ca1f67330a"
  },
  {
    "url": "assets/js/21.a6ee4493.js",
    "revision": "be9b40fa87ae630c9df5dc6966b0c603"
  },
  {
    "url": "assets/js/22.18d23986.js",
    "revision": "4605cebc4acbf44c359771151a4c8d3c"
  },
  {
    "url": "assets/js/23.282902a0.js",
    "revision": "75caabb1a6906d89922c502fad10fcd2"
  },
  {
    "url": "assets/js/24.ab2f8f46.js",
    "revision": "c36aa84302fe8533eb3d4a195d918aa2"
  },
  {
    "url": "assets/js/25.d735b86a.js",
    "revision": "8e305fd11bb9797a30aa1f64b2d83c94"
  },
  {
    "url": "assets/js/26.3097a3ea.js",
    "revision": "e504fd1d3189dbff2a63e6b12aa2f113"
  },
  {
    "url": "assets/js/27.bb7ca1c6.js",
    "revision": "cdc1a98a098e6b21ba6e18635a9b4fa6"
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
    "url": "assets/js/app.510acf3a.js",
    "revision": "d514e17a72c6c0c1700e482abf10df2d"
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
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "93ef00b69edb3357d9128ebebcdb6f00"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d78cd3a75eb813a16630a66ec37cd4d8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e94523fc6bd11449fecbce04987fdc24"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "0b2b03e42e36ff8381a41667e4dff012"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6ba00e4764ec47ed54383eefef2cc247"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "8111e673d26e21221e5250ad3127425f"
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
    "revision": "054a90b5143495862debdab0d467d83d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "08537b027b0302c85ce187477bfb9b4b"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "b46aca4d03495c3af8d87403fc4a1c84"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "29c8fa0578098b4129616e464e3107e9"
  },
  {
    "url": "tags/git/index.html",
    "revision": "e6c3b02884772fa9edb15571671045b2"
  },
  {
    "url": "tags/http/index.html",
    "revision": "ab0e5891249be62d783ec1265390acbd"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "736a29dacd065029260df6bcba82d490"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d8ba04293b4ae280de0594e51f923545"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4b79852d4383adcc9954148d8547ec7e"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "aa2006dffd3f51d8d4ce66af1110424b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5e5d898cf9168545ed24a7c80d30aba6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "1f81ea88ed261058ba0769fee2636a8b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f404e64220e5c725a772a2fcd0643a4f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6c3a1e4a341d1ea2c7e6d43993e4d6c4"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "ffd773ccfc11aa5c1dfe264c478d499f"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "0084591c05e9d129e7268404f1d718f2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8aabfe16aa3aeeef25c91f9af8ba0c1f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "624d370154c274d598fcd5be240a252d"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b9a19b102ab2fb35c541924d61c9cd2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "05632ca1a0915874eff8e454ccfd3a59"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "0a4112fa3f6624f77d8236a4736b3083"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "9a7ef3b7a3ed0cf44da6194a123e3a31"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "afab9fe2cdb51b97963fbfaadd35fdda"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "3ceb01594316c75d5226ee4d86cbaf77"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "235b17c0c7c24803985a2a5da13d2497"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "12bc4741d3252cd64e46529c80589deb"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "af7c47ccda55a91e6dbc6cd969d0efc5"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "28658b52cb493d653bbc0326db99cdd2"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "e2e9693c2b676f36be3ed992c7af7a75"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "f263f7f705b9950a2a698809ae76dc22"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ee21fd68bb350ff50237880e861f2099"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0b062f9492ba6e121060443582e90b75"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "b6ca64216360cd526a56ac3b531a197c"
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
