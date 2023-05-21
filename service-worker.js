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
    "revision": "c65e9bf39a2d35b23f69c2eb1d55e2fb"
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
    "url": "assets/js/1.bd5fcdc6.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.6b566cf9.js",
    "revision": "f4e17f2c4e1cdd000a9917ef855b62a7"
  },
  {
    "url": "assets/js/11.0156ed38.js",
    "revision": "8b1f255053c639dc1f66b950bd004e3e"
  },
  {
    "url": "assets/js/12.e8d347d7.js",
    "revision": "4677c372b05e570589dd0ff49a4f9013"
  },
  {
    "url": "assets/js/13.f198523d.js",
    "revision": "871593a6b8a44f756b6530eb3779457e"
  },
  {
    "url": "assets/js/14.3979f437.js",
    "revision": "2077d34be9872719512b8f33ff6e5559"
  },
  {
    "url": "assets/js/15.7a778e33.js",
    "revision": "8f35592fadefb2567afca3d3b4555178"
  },
  {
    "url": "assets/js/16.90ddd2f9.js",
    "revision": "be88a2121357c321b820ef1e41b50702"
  },
  {
    "url": "assets/js/17.5034ba16.js",
    "revision": "e8c2fcbe527e578f1840712c3c431f18"
  },
  {
    "url": "assets/js/18.05e2d4e9.js",
    "revision": "cc9202825b4832cee39533ddd42949e9"
  },
  {
    "url": "assets/js/19.d7c9de53.js",
    "revision": "180d5b233584766d66c025015cc272ba"
  },
  {
    "url": "assets/js/20.cdafc2c1.js",
    "revision": "fdc1d645f801ff3590f4a9e0a6bfb74e"
  },
  {
    "url": "assets/js/21.b19d781b.js",
    "revision": "036bb3eeb10d8476ce5ec1b72b45b6fd"
  },
  {
    "url": "assets/js/22.fe6dc9fe.js",
    "revision": "73185e2f47202b24009db9b0119b30a5"
  },
  {
    "url": "assets/js/4.6123ed03.js",
    "revision": "0cd782a39c2cc04b114883182718ae95"
  },
  {
    "url": "assets/js/5.eaa9e91a.js",
    "revision": "258c45f563c75a070464fc4de3d84c04"
  },
  {
    "url": "assets/js/6.0c9b39ae.js",
    "revision": "8873a48f1cde6e64b974552614de3380"
  },
  {
    "url": "assets/js/7.c59d9949.js",
    "revision": "df552cd6564b0f9a5969529f6d5fe445"
  },
  {
    "url": "assets/js/8.d8b87a3c.js",
    "revision": "4bd6723c068a61f753459deb3c2c39ed"
  },
  {
    "url": "assets/js/9.4baef992.js",
    "revision": "4f1788b56f47c6b80450b59d1aaf74d3"
  },
  {
    "url": "assets/js/app.02435c12.js",
    "revision": "4e55db01c3dd38630ba2d44e6aa607f9"
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
    "revision": "6b53f1abfbd0532fcd43321a156f03b5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "cf8f3a399868172525755a4cacdde36c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c896040a5a8d89c7793f38ff723c9c21"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4dfd3e63bad7e117f60b5245125b744f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6a087e87fa5ba2296c415a8beaba6689"
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
    "revision": "2e6402546d2f760a7a43c6d507e5adc1"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e78a367498bca081af48b52e8e0363d8"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "2d98b303a8fc0b3cbc881b65ae9f4c35"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "30afd9521df7c5dcd1f45ceeeb9f75d9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "bf492cf87b7b6c644b5a0c81ca5758ae"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2449fdd0a257745b65008ebd1c293a92"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e50ebb9f43824ea7375914789c0aebc7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "25ad355f453381def6ebf72c078d3233"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f968601f7c000936165737cfef1f48a4"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ba5ae55f5de8c13c3513a7df4a191157"
  },
  {
    "url": "timeline/index.html",
    "revision": "4150f954430763ab0db589dfc180f66b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "aac3b4a80517bbda277a5e0ab5172dd8"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "62b2161e4a782016630a21bc89b98c2f"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "07a48249f98e13be9bfe795feb4ff185"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "c6613154643b1b8ccc31e76f377dc791"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c729635879c4c780de809f3580d847e1"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "e5fc84fc10e464e96ab37b52dd0b5b46"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d57dab02e7840f8b11b4eb108260e46b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8416b5399d523d9771378e8dbc1a0dcd"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "a2b132076281258b651816b9bd4eb344"
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
