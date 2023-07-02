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
    "revision": "071085d77c1fec1941ceee2b6e2b7b98"
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
    "url": "assets/js/14.559fca35.js",
    "revision": "f18f0bf21d2554ee9fd44500d8780c9c"
  },
  {
    "url": "assets/js/15.00d6efbe.js",
    "revision": "5a6182c70cf0f38dd4bb252fd2cd1bb1"
  },
  {
    "url": "assets/js/16.a65a1c49.js",
    "revision": "acfd97de0465b35755b97f1ddcce3553"
  },
  {
    "url": "assets/js/17.28c8383b.js",
    "revision": "987ee0377eaaa84930b5a94b9b2b748e"
  },
  {
    "url": "assets/js/18.e2156884.js",
    "revision": "c069ba8b622aa7684962f612bcf5d7be"
  },
  {
    "url": "assets/js/19.932cb601.js",
    "revision": "44e36e516ba466fac3f50631528071bd"
  },
  {
    "url": "assets/js/20.93e46149.js",
    "revision": "3d7ead8b3c38e25b26bf8b5fc792975a"
  },
  {
    "url": "assets/js/21.68e2c81f.js",
    "revision": "ceada0db078086c27c5f3f57dc32795d"
  },
  {
    "url": "assets/js/22.d800dc73.js",
    "revision": "aa4444fbb7b8231169f40f28236574cc"
  },
  {
    "url": "assets/js/23.8b2f85f8.js",
    "revision": "426f6f585f6de7439def904acf39ab65"
  },
  {
    "url": "assets/js/24.24ca119a.js",
    "revision": "9da967436c6f71c8d3519f8feff58ff4"
  },
  {
    "url": "assets/js/25.ea08e707.js",
    "revision": "98bdcf17811929734d318e20a9955373"
  },
  {
    "url": "assets/js/26.6a694cfe.js",
    "revision": "e9ad8f9db287b7615ab4722b63ae5787"
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
    "url": "assets/js/app.14b494b9.js",
    "revision": "35082ab076bbed5929fc4a989d1bffe3"
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
    "revision": "701c53bf4f3ecde5045f433c4c13ac64"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "43869cb8cfd1b5bfc9c9f26b6ec9d4ae"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "066f5cfa3a196b3f63ef2e7d2082c09a"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "0afef2b71be50630d6b3015156150566"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "66a810b2b99db5e77169d46f8cb019c3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9f1d0fe9f18a8fcd0a1efa4cb2ac9471"
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
    "revision": "1fdda1a24593a60667b56a7ff9f7966e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "412de888e3d031ed00f20926a589ffc0"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "a8add237dafecea27e17a1fbcea1aa04"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "7449159cb0c76349f1ce268b0d87ec2a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "ae9c8532d367a219f70df9ce3cc5cd3a"
  },
  {
    "url": "tags/http/index.html",
    "revision": "1d3f203ba96fbed02e068e37edb04023"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5f0ffc7b7569a3559f33756fa9f651de"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d147968db601ea5e9592dcd96768f7a3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3a410e31eb7ba5a9fecd71975001620f"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "720493e4fcd5509cbc806a6248fd2add"
  },
  {
    "url": "tags/react/index.html",
    "revision": "9c3c8c657c50fe11e6374822a20adbf0"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "e4236edf90ca4d72004e1e2ef89d7968"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "09b205c64af017e7cf2e67a36d5671e5"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "93e0c01896993f02bfee60288fe9e77b"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "f870d9390a0cd71ba399dda1d3b2d94b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "615589cf2ae7b22cdb8d474793622b4a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "22b26bf3bed7eb10f160d49dc0224642"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c405e6f30836f70a5eaca4d50ff0a9f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "02e26b5f530366f9f08c370549b45318"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "f716b059c3fb3ba1d8bb5d8a8530a5e6"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "4b8dc740f28950c0bdfa369e1c96a900"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "5afbc05af1a2728fc892960851366440"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "dd6058bc0aa42e2d9eea42412fb455c8"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "15a9bd11e45476bac98da479cbdf1389"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "43847e1e81752f48ff5008b8fcbab1ef"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "4818e9429e8d9fe41a4ae1609e3a9f7c"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "13204277304257d09833b17f32987e25"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "fa729a7e2e8170f64ec4f4f51f94aea8"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "1d0ad84b41d9d1fd1061f4b7644974c6"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "f24bd8fd8b7c04b0282d918dbea9bff3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d567096e93c5c16e4ccda579474b7eea"
  },
  {
    "url": "生活分享/life.html",
    "revision": "85e4ae4d02b0b15c6119bb36a4634264"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d63f15ee23b110eea94c7a4d4a773817"
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
