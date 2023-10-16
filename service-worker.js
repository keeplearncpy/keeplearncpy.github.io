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
    "revision": "af0eee1f99e9da38deeb1984b6def8fd"
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
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.dde545aa.js",
    "revision": "d513e08316a2b122a1d38b8729afe7dd"
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
    "url": "assets/js/18.8e3e293e.js",
    "revision": "1ac7b2c2bb472eb9d0dff11cccc76ad7"
  },
  {
    "url": "assets/js/19.bb277f05.js",
    "revision": "c8d46af1d5379e51658f4b25fc11f64e"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.42019346.js",
    "revision": "6c9b06b2523788f2f10d9dba502cb85d"
  },
  {
    "url": "assets/js/22.cf787f4f.js",
    "revision": "bc66af160e9127323617e3a8f3dbb9ed"
  },
  {
    "url": "assets/js/23.6e0b9d13.js",
    "revision": "dd5a53e072fdeb5d98491e87d0ab9f0f"
  },
  {
    "url": "assets/js/24.5fcf9427.js",
    "revision": "24547fda200b87285d874e787fd7ea8f"
  },
  {
    "url": "assets/js/25.55135233.js",
    "revision": "80bd7cacd90cb935f0c43b598ad16019"
  },
  {
    "url": "assets/js/26.6bb4434a.js",
    "revision": "77feaacdf8c390e3c131e2aa0c24f2f5"
  },
  {
    "url": "assets/js/27.28aa0527.js",
    "revision": "dca780ac05bc304f4cd0287f49dcd209"
  },
  {
    "url": "assets/js/28.506687d3.js",
    "revision": "51651f8173c3a2941301ecce0627843d"
  },
  {
    "url": "assets/js/29.1673af62.js",
    "revision": "106ba37228cbfd6cece74ac697fafcca"
  },
  {
    "url": "assets/js/30.5977bb60.js",
    "revision": "d65c137eabba29344c8918a5bfb0b00e"
  },
  {
    "url": "assets/js/31.60be2054.js",
    "revision": "7f780ffc66a355ff38cc5f2e5c73cdb0"
  },
  {
    "url": "assets/js/32.fd8f6a62.js",
    "revision": "e03e29ff4b9f0021a8778eddb84dd8b8"
  },
  {
    "url": "assets/js/33.2ab4d850.js",
    "revision": "1458b7223acfaa6e063d8f63a52a2176"
  },
  {
    "url": "assets/js/34.b78645aa.js",
    "revision": "5de816174f9fc8730cd8a33e7b74d11e"
  },
  {
    "url": "assets/js/35.3d8e7c5b.js",
    "revision": "10cb1aadea15672b9317d6279e183fed"
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
    "url": "assets/js/app.6e46217a.js",
    "revision": "5785ac3aab2fdea323fcfe1bfe332b47"
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
    "revision": "e8e7f6532f5c6d16cd571efa6f1ba26b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e25e63e13e66d93b56512dce39d734a5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ef9c6adfb08cdd8c095b420304eb721c"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "7c016704bd10c9575a9e9ca68b4d3873"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "a3a5bdd5783d1918d7fde76e2112147b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "81af7a66f183a85ff1f7e5a8115f3af8"
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
    "revision": "3cb30989a44180884c75c22c214e1027"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b0fe6c2c3949d9a389ec530837212c14"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "698fe8cb81f473f21c915d32ba015bb9"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "01dc0789abb4bbd70fb3afa1a73a86ae"
  },
  {
    "url": "tags/git/index.html",
    "revision": "68e11b12007f770d8209b984dc4bbcd2"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "9007e7faf31d56037cb308e92f9843e5"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b1e7649718c579a659a4982ba0c4807e"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "dab9ee53d650ff68699b60df47fb1c9f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c81725dd4c0ad4216d464381111142cb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "17829624516cf350e5e41fccb4975a18"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "6565cd905809f1dcfc72ffdb9f95a41b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "a0daf2c3979f8dd6069060ea36ec7b47"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "eb43e69d6804d2729557ea59227eab1e"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "8f536e69603b6a52585637d1c9f0c1a8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "581585563fbfa7cd1b1ce4ab13a697dd"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "db2091ddc84941a07685c0c4ab0abafe"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "a9831d1e1b6644e1c110f4a94e1c6f51"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "c12d7f3509aff90e894ab2505798bec7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7d5d687f3ef319be9844b2b8ddce3a23"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd5a38ec723dd9969130ce3ed376cba4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "08732701c4ad4693fe9c947d0ec84c6d"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "dbb7243fdea2e80d4c8616d182d53806"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "04101d728a929bcda73109212909653c"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "cd054af7ea8d51f87006a4955c9f4d0c"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "9d27f4ebb99592523d641c6f3ed427ca"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "4559ec50d689809c71e03f450c3af1fe"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "9bedf4cb75612e29f9d4741a55f45635"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "e7bf15c14024598a9ea05e7caae0417a"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "335add8cb464b201d18f1f7903e1f7f7"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "30ee867fd74c5ea271652e29e6bbafd7"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "a54f0a14a74074129fda4c3ee6ac075b"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "582e63a2a249daa0a7016daaad32a0a0"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "bedaeedb5e641777538893c852101a08"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "c8bd16b923262e61d98245ac08ec0538"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "c51905756a75ef4c724b308f3d0c4b52"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "969f4f2fa00a56380de955b9b39a0baf"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "9f5e770d93cbd5173eadbeddafd7ab42"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "4a09dc35e73e67422d901bfba6ae0433"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5726fb4f831fd13e6669fd08181356da"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "45210ad00e3b922f7cd113f0bc0b1a74"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b92898559b9ae3442627af518b7f2564"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "35bf2ffb056fee354adea771c56c5de2"
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
