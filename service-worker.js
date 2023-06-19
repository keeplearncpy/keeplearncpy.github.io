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
    "revision": "a2d326c42b09b143c6d3a9c4a8e67c87"
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
    "url": "assets/js/13.03a61dd9.js",
    "revision": "bbb9b7136d3c7088343a4b055e4a807e"
  },
  {
    "url": "assets/js/14.f10d8d5d.js",
    "revision": "643ced8c6c048fe5204a95b4798b86c5"
  },
  {
    "url": "assets/js/15.00d6efbe.js",
    "revision": "5a6182c70cf0f38dd4bb252fd2cd1bb1"
  },
  {
    "url": "assets/js/16.8abd223d.js",
    "revision": "f5917343b4df40df2436baea4134add2"
  },
  {
    "url": "assets/js/17.1968e30c.js",
    "revision": "bcfc0a35aaec4b2d18610f101a0f3b77"
  },
  {
    "url": "assets/js/18.50199ae4.js",
    "revision": "7c3487e41f7e4130f3801eb0578fb856"
  },
  {
    "url": "assets/js/19.6a739c70.js",
    "revision": "bf8f8d8c12ff62be4bf92386f8b197c6"
  },
  {
    "url": "assets/js/20.14afb908.js",
    "revision": "57d2fa6dd4cc89c39ba07e1514174007"
  },
  {
    "url": "assets/js/21.5dc7cfd1.js",
    "revision": "3cff0dd581b98bf898f63af84381df98"
  },
  {
    "url": "assets/js/22.793ca3ff.js",
    "revision": "88bbbaac928e3955f31f48ad8384e275"
  },
  {
    "url": "assets/js/23.2be4608e.js",
    "revision": "87bd320ef76179bf2754dea9f27b4376"
  },
  {
    "url": "assets/js/24.cbce24e3.js",
    "revision": "835bbca48123e3afc40eb381b8b3a0b7"
  },
  {
    "url": "assets/js/25.cae02cc2.js",
    "revision": "04f57813cbde387fd34995b5845b19eb"
  },
  {
    "url": "assets/js/26.6a694cfe.js",
    "revision": "e9ad8f9db287b7615ab4722b63ae5787"
  },
  {
    "url": "assets/js/27.26092a32.js",
    "revision": "fa9194e8c51925ffa835c0762b58b01f"
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
    "url": "assets/js/app.370b108b.js",
    "revision": "03b89e6c048d3e519662d0f496ecf331"
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
    "revision": "f9a3f94b5e1d06453032044f04e99c09"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4f9ea3b27abaa7e0b94f33dcdc361890"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6a55306082a794c17ac3f903f4eed2cc"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "3e67454448afe46841d200acfb6a4c01"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b789196bc7e868b668e03a76e8cb9bd1"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "651f8129766f3b1dffde60b746ea27cc"
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
    "revision": "486c3df12f9e03e532ddeebec4db00ec"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f10da4147b7bf25c45e31ef603d465b8"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "2a135edb3e88f54bbac537bd535bf998"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "d4128834ac8c3e146410f43e19429e08"
  },
  {
    "url": "tags/git/index.html",
    "revision": "f833d70b58681087988e675b21adf9ec"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5e51660632327d8b3bf4e2412e5fc297"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "eae8bb7ff286266dada106e1b2e65b9f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a7c846bcc1fe637965f10f331977b8f3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "44cc072a7c2f578f6c95c24cb4efd1c6"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "a2808edd43457997af583abcf4941737"
  },
  {
    "url": "tags/react/index.html",
    "revision": "28af750409ef8574c1f7e06423f6f8d2"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "905a3e1616506f0508ebfe587dd4424b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "51db2ff7c0c9d60feec6b429bad503a2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4cd619452b43510a9e139a5e7bd7f9bd"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "b66bb7103883d2b1f73ce37ca0ebcebd"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "680275ce75a44d544234b4b99f5cdaef"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c3a0749852f99d90f6aaa3ce89912618"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e777f02ff0d404483e3d06af5d4d1ecc"
  },
  {
    "url": "timeline/index.html",
    "revision": "709489c08f18549f5a6729f9900f6779"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "cf24119c33ab904a8f5934cc4d6f7582"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "bce3c6cba5d3db2e688439726e93ea1b"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e24fddee7e2fd05aae966890bc9a6bd6"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "7b8204c268e88f79c44f099dc63df34c"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "314c6d511d8cfa8240069fe3465a4478"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "d7ff26760028f0e5c47d6e4b66fd2a88"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "e9a880b0f04ade38f46ad49b5fae9218"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "8df80d7e7298d71f550c40b351ba0132"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "9c362d572863987f94ac434f65e728f2"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "a01f31067dddb2895c0035a3e9f14ea4"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "fbae7ff8cc5ac9fafc31fadb55227d1a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7bf3d21f8a10b19d113e6c2b8dab5511"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3624ec3c817727c1c56f090aa2d7e201"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "bdbfce673e2467d7ec8a9207a692e87b"
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
