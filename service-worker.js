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
    "revision": "3727dfd6be1db81dc560aae60f8930ed"
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
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.bd48ab19.js",
    "revision": "cb6df97cd5b40ba3a85e3aab8e7ef44d"
  },
  {
    "url": "assets/js/14.a99effd4.js",
    "revision": "d182765bab4f5924c9c0455095ab029d"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.0de29e40.js",
    "revision": "2c531d724bf4da91d2db572ffc9ce09b"
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
    "url": "assets/js/19.4cce212b.js",
    "revision": "9b8a5f1b3bc2da34b43921fb9d15642b"
  },
  {
    "url": "assets/js/20.f4f8821b.js",
    "revision": "059afa1c94981fa7d6f18b3d21220bad"
  },
  {
    "url": "assets/js/21.14dcf480.js",
    "revision": "db50a1ca700d1e8530fa3593ef6b4209"
  },
  {
    "url": "assets/js/22.7cbb79df.js",
    "revision": "bea80951de6f56dae27d7877cecd2420"
  },
  {
    "url": "assets/js/23.6bcea399.js",
    "revision": "ce120a5212655c148e3de62849b02cd4"
  },
  {
    "url": "assets/js/24.f854576c.js",
    "revision": "c8e49e0ec82b01db1533993808fb9073"
  },
  {
    "url": "assets/js/25.8ac9264c.js",
    "revision": "43cdb994c05f18dd8060eddbc823a198"
  },
  {
    "url": "assets/js/26.521754e2.js",
    "revision": "703534d76d5daa2dc6617ffa437b3230"
  },
  {
    "url": "assets/js/27.3d29b550.js",
    "revision": "98481cce17ce692d96d2f2218cd8166f"
  },
  {
    "url": "assets/js/28.736c6e4e.js",
    "revision": "adf3e7d48800a852122a148c4227bb7e"
  },
  {
    "url": "assets/js/29.7c3c1a0b.js",
    "revision": "3e8a35def0c75b9c4e09075e7841a696"
  },
  {
    "url": "assets/js/30.884a8ecc.js",
    "revision": "e1d7ed6098288651ad43def3a80d0730"
  },
  {
    "url": "assets/js/31.062ae097.js",
    "revision": "5361137a232bf7dff0a5a4082f5bb5d7"
  },
  {
    "url": "assets/js/32.72dacabb.js",
    "revision": "2726ca548eb926cff5be55b524e2e478"
  },
  {
    "url": "assets/js/33.07519cdc.js",
    "revision": "6c488bf49d2ce82067866008af576846"
  },
  {
    "url": "assets/js/34.23430798.js",
    "revision": "1b5969da272ef9fb9e259d6cb6e3d45d"
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
    "url": "assets/js/app.87661ae9.js",
    "revision": "5d3782a30887d9cc2907322d4c3a122b"
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
    "revision": "7b6444244edd44ecef9b1b79da9c8e4c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "efc74ffe0d35bb9e8838ea8c28e1e03e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4017143910b0caa3cb6b885a2f9af5fd"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "5984e580c0e1b618d5f9ea5ed396429e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7f3f3f247f9fa946c06f301f7bf24596"
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
    "revision": "33b02a2c9b1e274b2d750a4fd107e1c9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "19245b712343d7218c80486c51d72978"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "44e573c4657b052766c59bc61650d55c"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "eebf54797578ea5e7aa644333230f8a1"
  },
  {
    "url": "tags/git/index.html",
    "revision": "309973d888c178050c1e9242d0ad7001"
  },
  {
    "url": "tags/http/index.html",
    "revision": "dac9c2b92be79287088c7eed6f7cf7e4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "c8a42ea15b905016e11cd82c2e75fde8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c92777154cb94f06dde03975c451ee75"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4d676573fa137dae267fc1f21050a9d0"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "23d6541815aa13f2da37512a6b263256"
  },
  {
    "url": "tags/react/index.html",
    "revision": "7ae5cf58cb84f89e4fc8e0bdae506f44"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "099012f0cc67660dfd1225e61b0ef5a6"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "1ebb1bd734310d73a45ad91ce30dbbaa"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d182aa5f5fb0f1400983d22a284546ba"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "d0fa6bdf2960b1ed8462a7a1ff5a2a1b"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "137a1d595bed6d525dce9ad6721b6be2"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "c652619704b0b0ea607b0e5c0c184e45"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ef82eb146a40bcc25653a8f6fb562eb1"
  },
  {
    "url": "timeline/index.html",
    "revision": "7206492d95ca0ccb028044a1065db557"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "e4de0c615cffa0c6e3c8d2322b148851"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "e3682ed5a0342e7b7705abe60fae9e54"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "9d5c77bd777cb6b7cdecca9e19880ed3"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "7b637f855e2685225277c9108b3293cb"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "497a62e7917e1a5fde3aa4037931b1bb"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "fb6f53b709003922df556a1a1f6137a7"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "7848dcf2578874646827e65fc55b013f"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "5a7358ebfe98e9209aac14e05f514f86"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "1ba257f5cc0f7f626dd75fa24b4a8d0e"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "7ba66994c20f1a5305399a0ad20f57a3"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "af7c9baa99ebd2ac40184bf4f66b03f2"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "5ab811148f33f01b3a4dd27b4af0aea6"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "75d230a6a16750740526c263ab580d5b"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "8472de74c54709fa6b38c45b08bd91b1"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "2ebc1f09f5fb16111ff77cf71334d54f"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "1c561eed01045771183dc32ae992f38c"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "894d1e4b5811880884e522e800a07a7e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e5e5af14a5af0cd782018954fb803ef9"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "2da6378538ca67db8456afed690a7a69"
  },
  {
    "url": "生活分享/life.html",
    "revision": "85803b6095bb3d1111f27a56afdbc24c"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "d822bf540d216cf8dd8fc8f81a1b2577"
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
