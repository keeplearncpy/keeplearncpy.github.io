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
    "revision": "eaa22f516142eaaa82a9a9c6a0f62b44"
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
    "url": "assets/js/11.e9449ba3.js",
    "revision": "f525f15dbec21dcd796b4f8c5a920dbd"
  },
  {
    "url": "assets/js/12.9c2b83bc.js",
    "revision": "cdbf35f69d75f5215cd8baf5b5e52875"
  },
  {
    "url": "assets/js/13.83cdd98d.js",
    "revision": "3b26a91e9dc9010e51bcd23ab48b084d"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.d748c023.js",
    "revision": "446f00f9245fc0600563c47ef50ab885"
  },
  {
    "url": "assets/js/16.9137fc8b.js",
    "revision": "2b18c9e0f07c609da06c5447cdf5d0aa"
  },
  {
    "url": "assets/js/17.da6fedcc.js",
    "revision": "2e1aa78444e38b32230fad52c2fae1aa"
  },
  {
    "url": "assets/js/18.b59bb29c.js",
    "revision": "f8da95f5977206bcd59f1feb0b1c8b27"
  },
  {
    "url": "assets/js/19.c6f7730d.js",
    "revision": "092bf7411c8a507c9446489fd5e4228e"
  },
  {
    "url": "assets/js/20.3363afee.js",
    "revision": "6493c721db3a51bef279f1b02f660d80"
  },
  {
    "url": "assets/js/21.9fbce1a3.js",
    "revision": "3946a1e8800ee8c062e17de6b3d7e77a"
  },
  {
    "url": "assets/js/22.2b92ddab.js",
    "revision": "45ea0a57616c505444c7cb6cf07619db"
  },
  {
    "url": "assets/js/23.d9b4d602.js",
    "revision": "313c42e6052dc6f9676b670b01f43386"
  },
  {
    "url": "assets/js/24.120e942d.js",
    "revision": "c884870e413dd0f37269791d9f4cbd52"
  },
  {
    "url": "assets/js/25.dfcf283c.js",
    "revision": "64bdf7a2fcc97080fd17ccc166565c82"
  },
  {
    "url": "assets/js/26.18779c67.js",
    "revision": "8fdbb9e3f47767190a80299b13726fdb"
  },
  {
    "url": "assets/js/27.30e58f66.js",
    "revision": "455a121ff7eb61ee046aa0dfe2057158"
  },
  {
    "url": "assets/js/28.496d85e5.js",
    "revision": "a07e68578c81cfb66a7cabfc5348c3b8"
  },
  {
    "url": "assets/js/29.cc2c83d0.js",
    "revision": "ccad4e8043184b7b48464f5d6abfd90b"
  },
  {
    "url": "assets/js/30.bacda765.js",
    "revision": "7b1da5da8c0fc7c8b88766bb5c31f926"
  },
  {
    "url": "assets/js/31.ee59ba67.js",
    "revision": "4574f04cdd4d9d2101c06a0024baa13c"
  },
  {
    "url": "assets/js/32.cb4e4279.js",
    "revision": "c0eb1ceac7b3d0d387a426f401273a5f"
  },
  {
    "url": "assets/js/33.d1e771fe.js",
    "revision": "8636311a4364c064d9c4e29d3836b287"
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
    "url": "assets/js/app.655581b4.js",
    "revision": "7e071f2233f7d5bacf3edc83af52a52b"
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
    "revision": "9cff1597615567243042a23f8d7fc112"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f9e26cf4ebcf52514bf83f4f3394e93a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6d632ea93b3fc3a5394f916dc36f90ed"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "ab1f23f4ca3120d4b1bbebdbd66918a3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "33a58fcfe8d8c260afc96f98ef33b7ff"
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
    "revision": "e9c20eadda2b01c2677f0abf8074a54d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5327423b9f54b23a56f63b20a61352ad"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "cfca77dfed60fd9e33ad461596eabfc0"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "18863fb94770201401684cddbac22882"
  },
  {
    "url": "tags/git/index.html",
    "revision": "6c05f58eef2a3835d0a7e9ae65bfde4f"
  },
  {
    "url": "tags/http/index.html",
    "revision": "cb4e4d6779ff996dec591b9a5a9de2d1"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "f7c188dfd968a095324043c0d5822eef"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3ddd7fae3848a612998457d589b53354"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d402dc95f6e45a18210a466e77969e3e"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "76e76df61b98c3b02d67638b61a478d8"
  },
  {
    "url": "tags/react/index.html",
    "revision": "ec1d11ea824d94d7b264a07fb22b9662"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "1fd90714cb6ba2350318bf53356bc8bc"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "314783d6e083b3ac660fc73291fca413"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "28fc9b72e5eeceb60ab1bb7e55a1ed9d"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "449725ea011e6277bfb80aaaf3da434d"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "9c035b97c6c561832e870dd6f4eeba51"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "eaa1a9079a6f83099f0ec571997a4f0c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "9dcbf1b513e38e328f31f91061627258"
  },
  {
    "url": "timeline/index.html",
    "revision": "af98808328ef2d5b48ca33b419fa1505"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "7b474cb77041f54dbfcd576d0a6c61c6"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "9c26ba65dce9d0178b78043e1550b191"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "81945eb42258f76d4573aa975972de4b"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "d28ab71722d287f30efeca37f0de5e79"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "524005cdc5dc9062ce10e4d5579602f3"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "2ac1e7800511efdb15d1229111f3322e"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "d789bcbdc24e9e9307463c747df24c70"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "d5c2b479d62072bf30138448883db080"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "c9e6aa5d7923ebde841d9be8eda77b7d"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "88b0dffdd80d768e9980247be046b765"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ed3060cce80230ab3ede59b02eb3e04d"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "d19f4c09986aa7390860cea1782bd9f4"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "382b97c371777efa466f63022f1ffcd8"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "26e7b620cc616866e8fdb630bc6cece2"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "c9ba64137e9c416c19e38ad69dc9470d"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "2c262aad420174b143855020f0bfce32"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f8f61f2085a9a98091338b73a1fc702f"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "762ecc65ccaf86894649dcdaa7c4cc1c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "13fa6fca36a14889e232f0f0d682419e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "eff32be169c327585938d2c388ed6b32"
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
