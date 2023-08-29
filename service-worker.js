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
    "revision": "9eec3b9a9140e41c8f497bdf9746a378"
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
    "url": "assets/js/11.d3c2368d.js",
    "revision": "0e6aea5c1f18d920def44f4551681a78"
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
    "url": "assets/js/14.de7cbc49.js",
    "revision": "bf78fd8bd2b9d0788f15eeb5eb2af14c"
  },
  {
    "url": "assets/js/15.a503f6da.js",
    "revision": "3e779dcf7f2c08bd709538714cba433f"
  },
  {
    "url": "assets/js/16.1e98de37.js",
    "revision": "af642f86fe359dd804484a7361061cf6"
  },
  {
    "url": "assets/js/17.7cb527ae.js",
    "revision": "bc8456eeb08d551499f5949b901e4a5b"
  },
  {
    "url": "assets/js/18.f745f921.js",
    "revision": "9e7f69a56c2429ed7ab51effa387adcf"
  },
  {
    "url": "assets/js/19.b4d6d08c.js",
    "revision": "119e999a4655d206f35d41742b61c496"
  },
  {
    "url": "assets/js/20.870cd892.js",
    "revision": "b045522d9f6f235c895afd1ea3231bde"
  },
  {
    "url": "assets/js/21.c655bf59.js",
    "revision": "8b1a43c201008eec3ea589ff5449c139"
  },
  {
    "url": "assets/js/22.d80f7c17.js",
    "revision": "99ec1fe729b10bad5c9c2354c07b91c6"
  },
  {
    "url": "assets/js/23.b76f8598.js",
    "revision": "b84cf02752708e5f16d8d9dd92154cb1"
  },
  {
    "url": "assets/js/24.2f1431e8.js",
    "revision": "d3e3cf88bc882b1f6f719a5e0f789cf0"
  },
  {
    "url": "assets/js/25.aaddfe94.js",
    "revision": "00d1ba9a2c0c5f78a812ed29c6a0a61f"
  },
  {
    "url": "assets/js/26.b257bfdd.js",
    "revision": "89c3575469e1f13b408892ec7f4cc89e"
  },
  {
    "url": "assets/js/27.a9a07960.js",
    "revision": "4a2660ba332fb8370d44bb12eaada134"
  },
  {
    "url": "assets/js/28.a935858b.js",
    "revision": "92ce97ce34db231f021130076ca84294"
  },
  {
    "url": "assets/js/29.05b1cad7.js",
    "revision": "c9f4e7743a8b0ebfe3bd0b9047adaa5b"
  },
  {
    "url": "assets/js/30.32766be4.js",
    "revision": "dfab5d3978cc35afa72a29bfd45ef7e3"
  },
  {
    "url": "assets/js/31.dea03980.js",
    "revision": "237b521d7abd751044db7fb7f6752f7b"
  },
  {
    "url": "assets/js/32.f0bf83f5.js",
    "revision": "6f9aeb634cb3ab4be6ba37f6e5acb4c9"
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
    "url": "assets/js/app.9c0e6313.js",
    "revision": "4c77477f80835834fbad1823af0e1faf"
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
    "revision": "ef840578930de867d760f6e305824bbb"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b0caa648f8b4e2235609d1ed5e07dee1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "96512684488f0676501a0168e29894c3"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "dfc8e3c08338bf2dd7fbe1284552c417"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9ff5ef03c0c2c824a723385bb97f6942"
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
    "revision": "6b9f9b4ee02d37c945d14574221e13bf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8634871d01d62ed2554d72bb49519c4e"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "e701bbb36fa023ca66cabbb2e0b21667"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "93af4c3ee54825608d38067637a55380"
  },
  {
    "url": "tags/git/index.html",
    "revision": "17911a1342da0ea402c40d278a173ba0"
  },
  {
    "url": "tags/http/index.html",
    "revision": "228a32340f0dfa767d09251b07ec11ad"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "00396f6484b6ffdc5d91bce5d77c5d4b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c10ed32a0c1dd94c26bfe8bd34b3feaf"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1d6ae7b06883f1cbf2bc26f426b54241"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "40580f03030e6ecdbd06b53e5db9a712"
  },
  {
    "url": "tags/react/index.html",
    "revision": "d68366c779164ea4feab727580aaa7b5"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "5690aff103c4381ea11afd4dad0ee708"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "64889407f95e42578d9c49d05d9aecbe"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "040d5bcf2f60545d04b6db4441014a9f"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "b335f752097244ef60e82436def104c3"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "b2d73bae6817b5935ba201f40b386b50"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "7e350ebcaf511a0fbb9344e2ac7ea66f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f2a4a15d556e308e3e294bfbdfc76a83"
  },
  {
    "url": "timeline/index.html",
    "revision": "7bef4cb599a49813d0472843077ce6c2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "8600d99ffdfb6d8d58b8e1963fe83a10"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "2a86f2607b499ec2f1e98a491a88673a"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "32c75a056d99223eaa079e2e42a8434a"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "829181f05dd210bcf5439db617a7cf69"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "89df04cf0a4da9341300e182ccfda9e4"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "f51ea6b14e14edfb29e77789c1368ed2"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "746f8a98ebedf8ae460fd5d40688c068"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "a0042914052b3d6f2f803a1d38ca570e"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "818b4c6dfe9afc9ab2ff8a97d87c75a2"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "d087d9d5622031fee2ed98c7d5f71fed"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "8169c0f07019008a2e3319b8b0634403"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "290df53678766f542ba1304dd2dcc244"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "4abd1b46b47c78654c98e4a36c824644"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "948af6a6d4fc7d880f0148e34a7b0ad3"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "c84b8aa40d41c55bdd72b05729702e34"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e75dc2276dffdc96d1ba218fd6ad8f2b"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "b73f2d1d988cc83fab849440ced502a4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "269d03000b7e0de02d2c364c879ca07f"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "f81bb0548feddad9030e6f4d4ba20cab"
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
