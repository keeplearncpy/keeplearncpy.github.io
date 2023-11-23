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
    "revision": "4c76b4f2ef9aceae4c3c8bb062b92d49"
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
    "url": "assets/js/11.d6fd15e8.js",
    "revision": "8ed198e4df1f96821999eaabde87bc3c"
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
    "url": "assets/js/14.de7cbc49.js",
    "revision": "bf78fd8bd2b9d0788f15eeb5eb2af14c"
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
    "url": "assets/js/19.2e8599bc.js",
    "revision": "9eb84b708727145d89f5fc1712e34b06"
  },
  {
    "url": "assets/js/20.0a4fe11a.js",
    "revision": "5005ce11a2f22231020d8ec814653299"
  },
  {
    "url": "assets/js/21.14dcf480.js",
    "revision": "db50a1ca700d1e8530fa3593ef6b4209"
  },
  {
    "url": "assets/js/22.60076cf2.js",
    "revision": "a28a66ac88d124bf9f14df8236385483"
  },
  {
    "url": "assets/js/23.9db70f02.js",
    "revision": "4f503faa00c2ac458dfb202de48787b9"
  },
  {
    "url": "assets/js/24.5d0e9556.js",
    "revision": "04fbfb0de81fb065aa06bfcac6a19279"
  },
  {
    "url": "assets/js/25.75e5dfe8.js",
    "revision": "d8055665b641badc3b32bd7bbf696eec"
  },
  {
    "url": "assets/js/26.ceef34a9.js",
    "revision": "aa88ab7b98b54e209a008d28182d4137"
  },
  {
    "url": "assets/js/27.1b5cc956.js",
    "revision": "a509d39442e763bb4c4a52e4086f4cc2"
  },
  {
    "url": "assets/js/28.f6879937.js",
    "revision": "77bc41dac6d237ef10fd7c300e162e31"
  },
  {
    "url": "assets/js/29.5de3ad66.js",
    "revision": "99b619eb66f8543264b4e618d793f57a"
  },
  {
    "url": "assets/js/30.004d8755.js",
    "revision": "023d56471cef0afdac6af2c2c27e13ec"
  },
  {
    "url": "assets/js/31.1220323a.js",
    "revision": "1156f9897a534ef8422096b076c8606d"
  },
  {
    "url": "assets/js/32.546f4caf.js",
    "revision": "2e78df31f9eaca5028b7a9e8799b828c"
  },
  {
    "url": "assets/js/33.72b14e06.js",
    "revision": "ad44385992ef4fdbb94e37182859cd66"
  },
  {
    "url": "assets/js/34.a01c8fe5.js",
    "revision": "86cc76920cea544136e515fec8d96388"
  },
  {
    "url": "assets/js/35.eb3e68e0.js",
    "revision": "e84ad727af2b3207906d1c31633dd83e"
  },
  {
    "url": "assets/js/36.0176a407.js",
    "revision": "7f34aab746180b38de39b3976eae253a"
  },
  {
    "url": "assets/js/37.7515be35.js",
    "revision": "aa4d97b84d6ef6cf9b3ea954587fe15a"
  },
  {
    "url": "assets/js/38.8b3cb783.js",
    "revision": "30ff85bcbd714ae4518bf882d03e4982"
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
    "url": "assets/js/app.63b2b3c4.js",
    "revision": "5cb25934903f572ef31c005351c2e925"
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
    "revision": "c18db6867268eb36e2c3ad5ee4b346d4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0c69d505e91f0d679dc7c42fe00cd4c6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "285056bd2d3a03a315d9d23862747032"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "3664ed14e12d71d520f47d6e0c8dd196"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "9867a00641469ada5efe0e2a8762631e"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "33d747b2b39f86a505fc9beaa24e0894"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "ba89012765c39daaaae73159ca8e3575"
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
    "revision": "c0f826ef3db3199cab7c5612d5dace12"
  },
  {
    "url": "js/custom.js",
    "revision": "fd7b6a0e5b184fefe1fcd561576d0bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "eeed54114816d698c942f699dc4ef553"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "d590f3bd2c217b920d178f815cfc25ae"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "e067cb95a8669c8e47a9df2e25579335"
  },
  {
    "url": "tags/git/index.html",
    "revision": "98ea7642fea7329b4a542b17051cf706"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "ba315df1132729b595b5e922920fcf21"
  },
  {
    "url": "tags/http/index.html",
    "revision": "6e85fb6a91a9154decdf8b47c03d660d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "a697397df446b053e406a1e9253161f1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7ad5aec6ecde140262b0d8a027bc50ce"
  },
  {
    "url": "tags/js/index.html",
    "revision": "82d41430e25c0fa34c0571023aed3a8d"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "ce0c07347f386d870739f0b336b10fd3"
  },
  {
    "url": "tags/react/index.html",
    "revision": "e847b47971766eab015696ec6cb0a052"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "32bbde671d35259ced91942c7c728d89"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "92f127da09d6a0f8e8f34553f0664fe4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bfdab6f69c66cded479f6a9c2a2f9a31"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "77b1d72f212e57e9e75ee16b5258ea10"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "50bc3286245b2bebfd0c74758c22fc1a"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "3e74ed76a40d751ab157d76e363e0f59"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "aad7d0246ae5f41b49b06b2d63f76317"
  },
  {
    "url": "timeline/index.html",
    "revision": "52019ed314b70e51632466a06f035bfb"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "5e549cff1cf96bb2f7b9d01aeeb0d945"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "d0274bffda7e7d2e129c324972529ade"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "2885d1215a47ac6e03752731a5f5fd24"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "256f28290d9a34b3ac2486016bde1828"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "fc07b49d450d0a8c79ac39057a39e92b"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "9747748e49ffda64e895d1efaafb5ea6"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "9bed9d495b46afc88260eac54cf4acb2"
  },
  {
    "url": "技术文章/go/go04.html",
    "revision": "45b4ade57c94d9e659abf3fe17c3ad50"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "e83a3827e2a656428eaaf8b0744c1d90"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "44752c8b0ac4344eeb89f2fc00d9dbfc"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "2dee03df6177b9da96f10885d4432c00"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "cd25f174ba794d94beb7dc4f8e05e67c"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "359ea8c7d5d79a9a7f870d61a4b64941"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "153821235ad433faa5b4401f511ef157"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "63f5502a566fc148c14bd97a4ba166ff"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "0d85ce44f1523293de132969e8624339"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "3d58fe6ee409251715aa17cc5f70c72c"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "8a88fb8d23e57d663fe94522d628bb76"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "9a67e2b36739ace6dc518e1eeb4911d7"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "024698de5febb90c63958e383012bb1b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "82d863533759e5f9e550049e1a6adbc3"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "44c75f511ec80bc7c232d051133246f8"
  },
  {
    "url": "数据库/MySQL/MySQL01.html",
    "revision": "e7b285395aeef42720ae13025d018639"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c003b8e45617252fcee67f7ee10a108e"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "e28e9943d7f6236f344dfbc608b1d552"
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
