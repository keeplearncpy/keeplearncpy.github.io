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
    "revision": "eabf491cb1e975e0d0b7ecd1833d59e0"
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
    "url": "assets/js/10.d19aa05a.js",
    "revision": "c8106fe705c1c2cba39308a38051e302"
  },
  {
    "url": "assets/js/11.475c96ec.js",
    "revision": "ac695fff3c0b007e74932f04f75873dc"
  },
  {
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.48564eeb.js",
    "revision": "f34038c99b3dfa8e6a3464dd4579ee69"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.bbc5f2f7.js",
    "revision": "c1e17252708b7f08c33f7c5de57a3f8f"
  },
  {
    "url": "assets/js/17.a8985cd7.js",
    "revision": "02ecb456eb2ad3d6c227433bf45e6187"
  },
  {
    "url": "assets/js/18.02b4b513.js",
    "revision": "62a124da7e15423a7fe6754fb0484bc9"
  },
  {
    "url": "assets/js/19.6cab5b8b.js",
    "revision": "39962eaa16c849982eea1becf068766f"
  },
  {
    "url": "assets/js/20.3d27528a.js",
    "revision": "ab4d82ef2e8cfe6dc61a4095454f6605"
  },
  {
    "url": "assets/js/21.14dcf480.js",
    "revision": "db50a1ca700d1e8530fa3593ef6b4209"
  },
  {
    "url": "assets/js/22.2dbac243.js",
    "revision": "c2560f9a619e5a7444d2d3c8da8725c0"
  },
  {
    "url": "assets/js/23.02284fae.js",
    "revision": "b1b2da9a675bfd94d094ba37df357cd1"
  },
  {
    "url": "assets/js/24.4768d621.js",
    "revision": "9a4e298b0140a657db1d25cede7efa37"
  },
  {
    "url": "assets/js/25.8ac9264c.js",
    "revision": "43cdb994c05f18dd8060eddbc823a198"
  },
  {
    "url": "assets/js/26.4ee70b0a.js",
    "revision": "03447b05cc85cd0e442bb003af896d69"
  },
  {
    "url": "assets/js/27.3855b59a.js",
    "revision": "44d5b2a0d55cf4a676e24c45252eaf5d"
  },
  {
    "url": "assets/js/28.836b80b4.js",
    "revision": "00f54779af7a5b6da80e99c5860a163a"
  },
  {
    "url": "assets/js/29.86ee7efb.js",
    "revision": "71c837e2b982d2dea1becb3df3a415ad"
  },
  {
    "url": "assets/js/30.eea3fb18.js",
    "revision": "fee0a9781133e08ffe0ac2198b3eef38"
  },
  {
    "url": "assets/js/31.74b88104.js",
    "revision": "0e9f6efc9231dcee2bc4ec31f58cbf28"
  },
  {
    "url": "assets/js/32.de65ae80.js",
    "revision": "07c4fc21c7ab39ae67daae67e108d9f0"
  },
  {
    "url": "assets/js/33.d19c3665.js",
    "revision": "e3dd4e321911d6f218873acc42f86968"
  },
  {
    "url": "assets/js/34.81260dff.js",
    "revision": "043c894ae4a5b64a43712325ff570971"
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
    "url": "assets/js/app.4e7bf94d.js",
    "revision": "8073e71bc6bc77678bf5f0ce11272ce2"
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
    "revision": "9662348e8b7f62b5c4f4cbcded6642c5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9ad86897012dcd8b61884af3d2a7e939"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "948f801d1d6d3653d294b757b61ebbaa"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "cad3363e5f98b56a0fdfed790655f36f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a5fe59ca318a66752c32d7baa5a4035f"
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
    "revision": "03db971cb0f7e9dacc84d317260b2324"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f2e5ae717e2e29fed349c4ddccf7312a"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e3122eac22f72ba5e7ba1b107bde7d07"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "267a69905ff37a7d87f89cc888f3f00e"
  },
  {
    "url": "tags/git/index.html",
    "revision": "144c7cfd969b2a4dcd65003687c16dc8"
  },
  {
    "url": "tags/http/index.html",
    "revision": "c48671bd0987ac516b566695f6f38cca"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "71287109e5cdff3307b8e94fec034610"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6bbb313e6dcb4e0b2f225ddb534d1cbb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4e2d79b8fd28b770a6ed8a04d4ac8276"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "6af02a66a5b6b29d0fb5208f99bbc965"
  },
  {
    "url": "tags/react/index.html",
    "revision": "6cbfddc3eedd22bac85c26f754bb26ea"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "8376de36d315c3da2fada251206deb26"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "3574376f6f980bae9aee9678f6211e47"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "646a97a67405678e44775ce2c63dc4f6"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "6fdce69946ec33bc4aa04d2eaa267984"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "495ac4a9e9624a2209b8792572adc5ba"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "4bd91b106843000d20a49f7f84ee1ffc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "84ae3734f25fc5c097e083ad393c70b3"
  },
  {
    "url": "timeline/index.html",
    "revision": "0a66e26cf15a8bfcf1c786b29400eeab"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "6b843c8d4142d8820fbb71f0a6e132f4"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "327dde8f76a64a5dc1bdacbcf04a2f83"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "73923acfb105f0bf3b43af52b730e484"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "b2f625d65b6f7d63a19b2bbd7baab6b2"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "9450bb53495770d7d45f75b6461da419"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "18b8b331aa49290c6fa216d6c7a0f1f6"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "de8b45f7e6898b5a99f6f193178c5434"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "b293846c8e0e12a0f3f6c1d083e80271"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "edfba8785eda270066bf664fa4f5d9d8"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "16a4fa36c8d33bb2c0d6d57823e3f6bb"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "49e03234dd7b7728cea5dd85a8ac654a"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ab40a210ac083904a7d02e5f411fb4e3"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "b6c596e25d3980afa7a884a4cb819216"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "ba7855d0d5faf33c029c7b053e2c5d0b"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "0e77f310d63a6e5918e65ed49e843771"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "608d0795ee2cde8a3e322054d36294c2"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "d2fd200e0592972104677980ed9b381f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "76ac737ce8b935143290369c4ed899b2"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "28baabd8a08ea54ebf19b63e5c119215"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6c3f3c28ff776bc1eed694d95cf458d2"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "10d46b595a33b68f9625e3c351363e48"
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
