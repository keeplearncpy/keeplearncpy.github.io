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
    "revision": "0c47776c5c83ed10e2470e4fe666d1d3"
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
    "url": "assets/js/11.78830bcf.js",
    "revision": "9e9c8f4ec73f55ca16f4e66a228ad422"
  },
  {
    "url": "assets/js/12.1aa0685f.js",
    "revision": "6ef43d46641940ae62f1a09aacb6249b"
  },
  {
    "url": "assets/js/13.0f1752ee.js",
    "revision": "38623637900fbf6920a00ff5b26e664a"
  },
  {
    "url": "assets/js/14.201e3d3e.js",
    "revision": "7eecc0563e5fc75b0cb9905ae40fa5f2"
  },
  {
    "url": "assets/js/15.45f4af8a.js",
    "revision": "ec0d1a91696b0d3e55b7fc85bb24cca1"
  },
  {
    "url": "assets/js/16.a725ea70.js",
    "revision": "0b8886607aeede953b58a535dd4a229e"
  },
  {
    "url": "assets/js/17.b1b15f98.js",
    "revision": "2db18a63a2359d74f7481356bd83f6a1"
  },
  {
    "url": "assets/js/18.762dae19.js",
    "revision": "0ea818a7f13706fbe56aa33fca276a2f"
  },
  {
    "url": "assets/js/19.1aebc376.js",
    "revision": "c3fe973f55e75ea8ccd17b5398607cf0"
  },
  {
    "url": "assets/js/20.3c2b3ab2.js",
    "revision": "184f0e40303d3a8764a018cd02b58a08"
  },
  {
    "url": "assets/js/21.8df940f6.js",
    "revision": "e46ae6771c4f6fc50a5d2d4b637ae5a5"
  },
  {
    "url": "assets/js/22.093a33e7.js",
    "revision": "c7a92723c741559f5499eed85de9cbe2"
  },
  {
    "url": "assets/js/23.c8a44e3a.js",
    "revision": "9b1d11e2abd4a64e82f0ab6c2b2bbc86"
  },
  {
    "url": "assets/js/24.4f7a4681.js",
    "revision": "dd11212dd033f6df884ade7e9d9613bb"
  },
  {
    "url": "assets/js/25.9ff23f71.js",
    "revision": "6c6d2a910b0344cc0290064ea803528b"
  },
  {
    "url": "assets/js/26.3fcf745f.js",
    "revision": "0edee4f3cfcb592eaa0b6101bcaee559"
  },
  {
    "url": "assets/js/27.7bb1760e.js",
    "revision": "c61c9b88376174e2c630d1686636547e"
  },
  {
    "url": "assets/js/28.7443a2fa.js",
    "revision": "0891bd39dedca6f4259fd5cf2a02b3aa"
  },
  {
    "url": "assets/js/29.5f815f9e.js",
    "revision": "2eb16e7d149f7613bca07553846eefc1"
  },
  {
    "url": "assets/js/30.130bf0cb.js",
    "revision": "4f20e70ab86ae8150eb4e865e212a665"
  },
  {
    "url": "assets/js/31.43271ff6.js",
    "revision": "7d522fd701c60b84938dbd6605719804"
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
    "url": "assets/js/app.6cfbd539.js",
    "revision": "8d78cfb0abe3aaddfde6847b3cc8a17a"
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
    "revision": "9afc95ec911f964e6f70c030fe8cce6b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6d3288eb8ee58c35ee27b458c1226561"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "baef290721686f9c321a3028a8c299bd"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b2485f81b8ad60e0a31c956693d2d7dd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ed0b0169ac42991f56a1c66505332766"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "32837629ad6f948f2385f413ad56961d"
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
    "revision": "faabe6c44f75f1cfdaa3e85d10ac7dc6"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "eb10101d28565040987eff0b986b30bb"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "5c98c92441fcce761b66157dba40c637"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "30e663f8e2bf949098d97c2a9a5f4562"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c3a14827209392d72158bbbacc5fbfc3"
  },
  {
    "url": "tags/http/index.html",
    "revision": "084aaaeae0559f21ecc185f865314f11"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "2995a62e0439ec3c1d9ed5c513292b0a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "48e0f127e20b2eb5b9b56290190465e3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5fd8b6a7547a6b6ef8b26643e3d8b039"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "ac4501553e3c13708fd15dd484df1e1d"
  },
  {
    "url": "tags/react/index.html",
    "revision": "14ab02d0e1edfa32933ea940e370670a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "dcb9e19f23eb50af93550786c5ae9eb4"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "b4c3dc62bfa440f0b5ebfbadb8f62a2e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9d535e10b673d14192782a2d353610b9"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "765dd71f181e2f1d2eab32f51eda82c4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9fed6b0c0befca87b7018c63c2b346af"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "d2e03ab641ce301d1f0036044c05819a"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "49b4062a59c6257521346ecae7ac7573"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ffbd1c7db75d1cb812423c2201b6cec7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f344573e0b0f322ff01064cb718efdd3"
  },
  {
    "url": "timeline/index.html",
    "revision": "e71698e247ca34f2eac4558b6aed21a5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "55e714c019fc826fa6b871da569aa0b9"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "0e8f03a4396bd369885feedd6538528e"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "e641d785dd1cf29a185f94e3c163b658"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "590108e8925bcee6d17782a551b33ff2"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "97cc301719bf72a744b58bdbf67b71ca"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "9d81532765c839e8623d94d670e46fe8"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "f7cd148c9822d6cd36aa3049733928b4"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "ad56e7dc105d501348da9a580323e46e"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "571db8e942e91f3d1f8f164b826d97d8"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "ad9157b985879402373703230afa8cb0"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "8f87b8c8724ad71d98e18584addd4920"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "57a5d1dafaff7995151f428a2ac7e331"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "10b195ecc87489459a9bb0d2ba4ffcdb"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "e1d7cb4b5bc4b5cc3e76b6b0de3b0dbb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e17c038a612df44dfe7f4c24515602a7"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "490b3757784fcd80260691a12c36f29d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "96239e428d5219af855f0fb660e33e0d"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "6820f08588b68684612093c53df4349a"
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
