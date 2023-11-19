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
    "revision": "2a4dd7646ab24087dbf5ba07d67fde21"
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
    "url": "assets/js/11.32be97b8.js",
    "revision": "190ae099f5702390770f4e9d6a82115e"
  },
  {
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.89138099.js",
    "revision": "d74bbf17d82ad81ad07234e56f56286a"
  },
  {
    "url": "assets/js/14.0429ba1f.js",
    "revision": "0bb071fba4d4c9d752aee2575dd03766"
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
    "url": "assets/js/17.9b03b971.js",
    "revision": "6edacdd8c9f3d3ee91d6e1388b570e9c"
  },
  {
    "url": "assets/js/18.d87939ae.js",
    "revision": "51772780b2e7ef7e113b50e00b063c01"
  },
  {
    "url": "assets/js/19.c968069c.js",
    "revision": "82b3327fd7f4889fa67b330521fc7415"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.910f6c99.js",
    "revision": "792b0ef427bd55cc1cad17863deec176"
  },
  {
    "url": "assets/js/22.7cbb79df.js",
    "revision": "bea80951de6f56dae27d7877cecd2420"
  },
  {
    "url": "assets/js/23.3db4918b.js",
    "revision": "4e6b10c840fc4518ab4259c56fffafab"
  },
  {
    "url": "assets/js/24.8403c412.js",
    "revision": "c85a5599d03f226988854f6ad4052d3e"
  },
  {
    "url": "assets/js/25.8000d31e.js",
    "revision": "48f9159fe7ff7aeb393ee1a5ed0e837d"
  },
  {
    "url": "assets/js/26.d4545e0d.js",
    "revision": "4de8728e2303afce749b782ab0aedc8b"
  },
  {
    "url": "assets/js/27.e21e5df8.js",
    "revision": "c1616b8271ac183f20ff084fbd6e76e1"
  },
  {
    "url": "assets/js/28.3dc4885a.js",
    "revision": "09f13b19a98291628742e873da0a2cdc"
  },
  {
    "url": "assets/js/29.1fb103e7.js",
    "revision": "56be73d205168f48799eea206e11f0c2"
  },
  {
    "url": "assets/js/30.a580f54f.js",
    "revision": "4a84325bfdb937821f21633aafcd02fd"
  },
  {
    "url": "assets/js/31.95f3dd9c.js",
    "revision": "2cf8deb26a73d19fbbd8d91fb78d2284"
  },
  {
    "url": "assets/js/32.2671b85b.js",
    "revision": "1d83d93fd64089e64ed56522d745d35b"
  },
  {
    "url": "assets/js/33.c6211a4c.js",
    "revision": "655ee61cc0bef874679193b2275805d3"
  },
  {
    "url": "assets/js/34.cc085347.js",
    "revision": "5736e5a1ee0835f5d581848e7d4111d6"
  },
  {
    "url": "assets/js/35.58e62b6a.js",
    "revision": "d74db1727b72aa6f971fa517f93487f9"
  },
  {
    "url": "assets/js/36.0992eec0.js",
    "revision": "786d049842e38e4ecef0595952416ac5"
  },
  {
    "url": "assets/js/37.8efa1a38.js",
    "revision": "cc14cfa49b71f31bed775a27a8fac8e2"
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
    "url": "assets/js/app.8a99e13e.js",
    "revision": "be0c0439913a7a27430148202c543697"
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
    "revision": "d190dd6736ae8d91f49525dc1d82ed72"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0eae21af2ee3e6943194f1503ef6374c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bd0bc5d3b76baa14ebfd5f4b699d45fb"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "2af6027715052336fab0bc1e2608ae30"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "ce2cee31975813cdb8757841d8094beb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "8a2ffb009ac2f256889f081d43834fba"
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
    "revision": "71ef7e850ee09a3cdd5c1b7c771a7f45"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e89e0ce8ff38ccfc2a929839a9ccf51f"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "886d139433a7dbf6498e8cd1670776b8"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "3085455272b1aaec7e5a0f0f403b67df"
  },
  {
    "url": "tags/git/index.html",
    "revision": "4d6864c435adb3e51893f08482aa99ff"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "a8f0b05d55ff074bc932fa16fc9c3bb1"
  },
  {
    "url": "tags/http/index.html",
    "revision": "2429a0124f957111b196e9e9e3dc70aa"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "42353f9454275ed648b81c0854d96516"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9c0a68ce707a4e2f8aa1c9269b5fc06f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "99c0727037d7914ff2f1b7942041de1a"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "015f55148f514149f802712d30ddf0ec"
  },
  {
    "url": "tags/react/index.html",
    "revision": "7b74375e5be0d2e1180c7d320e8a7c6c"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "ee71c0008015d7ec8e0f05d5432d4aca"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "8dff129e343085ae9cc75bd4ee444cd7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "62a9cde172a6807a9a0a23f74510d4b6"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "9fb2253c3fc6f92d53b7c288f88e49f4"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "cf8bf51575a8fdd396cc63a4eb80aa17"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "2cf0fa83d74a385eed8719ff7584c874"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8738d6a6d73f4e2cb1e8adf74f43a813"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9520ab7ee1718ac346e0919570f8537"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "cac469ff4df7ac4c0cb6b479c6f32e0a"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "7a3fd03eb15e9853788a2defc4181520"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e00da8e953dd5ad6e4b367bbb8a6bc38"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "0fa3abc0a40c792b16bb732fd39b7b21"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "097360e1b1caf9faa258963c3dc8a1d5"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "972cb47d430db5b420f4a5128c746ad1"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "188476bc1518f4c111317f9be576d34b"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "7362bb3ed462fb5f152b7d5c0cc0f634"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "85242207d65854aad1734bdb0bb02138"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "bfb5e473a690351d46a8906d681a080d"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "398ca4e9252826a1c27effebb27d5676"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "8ea6d24247deacbfae4d8f3c5c0c9e28"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "de44314ffcd6916b355fb49b96ef3f8f"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "d369e322156546c46303d03e383b0640"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "e6f14735b9d9f7dc418fd34e30dc92f5"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "a1e4b9f41d923693009198d62a56af57"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "0332fae0d2b886eec373ba4b29dacec3"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "a64bf6f3d873ba6416fe513a43e8f303"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "e30c679cb13d1e5005a0cbbce0a25a8c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "86e54f84da8c8adb1ebe132be657d92b"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "943833400da04a34a30a09781e5bcc05"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "8eb024e8d467b49bcd5667d435f9f832"
  },
  {
    "url": "生活分享/life.html",
    "revision": "97bbc3d54adc4fccb3e9645f01914737"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "b4487b449327fd923355ee705c3b47fe"
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
