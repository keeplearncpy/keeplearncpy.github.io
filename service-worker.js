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
    "revision": "0ae90eb2548a6c3620496b61fddb67fd"
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
    "url": "assets/js/11.68ec98b5.js",
    "revision": "6a2625a16070503310aaff1ce22c5b42"
  },
  {
    "url": "assets/js/12.0ad11bfc.js",
    "revision": "d18c9a4044de62bf8b7054ceed21c14c"
  },
  {
    "url": "assets/js/13.a8edecef.js",
    "revision": "539abd78b1e688f27e07e2865ea0c328"
  },
  {
    "url": "assets/js/14.5738353c.js",
    "revision": "adc80139c6095a5d1e0894b88becc794"
  },
  {
    "url": "assets/js/15.fd186037.js",
    "revision": "54e26ff31b48fabc2897683b5c4217dd"
  },
  {
    "url": "assets/js/16.fe7c245b.js",
    "revision": "5e174ccd958e84cc3b2242c0a4eca998"
  },
  {
    "url": "assets/js/17.aac880a1.js",
    "revision": "cfbe8dee09c9287245f34f9d03df539c"
  },
  {
    "url": "assets/js/18.2a79b208.js",
    "revision": "ca053ce7d6775707247a7a67d446cf15"
  },
  {
    "url": "assets/js/19.bb277f05.js",
    "revision": "c8d46af1d5379e51658f4b25fc11f64e"
  },
  {
    "url": "assets/js/20.f14e8a28.js",
    "revision": "895a95a6c2de511d7c1b8f447b527425"
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
    "url": "assets/js/23.dd7298a3.js",
    "revision": "860f8f0908f1608730424049c2b09293"
  },
  {
    "url": "assets/js/24.eadfd447.js",
    "revision": "069e1ac9de5d92ca27413181217d90a5"
  },
  {
    "url": "assets/js/25.90409691.js",
    "revision": "03b93fe46354cf6dc854beeecffbc38b"
  },
  {
    "url": "assets/js/26.ee6477d8.js",
    "revision": "9a743badd8b0ce2bb42f33885a6304de"
  },
  {
    "url": "assets/js/27.070cbaaa.js",
    "revision": "a105a4c3286ad47e5e1d686f2213fa67"
  },
  {
    "url": "assets/js/28.dd32e1ad.js",
    "revision": "7176fa5fbeb63366a0047de7d8868242"
  },
  {
    "url": "assets/js/29.7b0c725a.js",
    "revision": "92be0400ff2aed2139b008b69185777d"
  },
  {
    "url": "assets/js/30.366e1ee2.js",
    "revision": "7345827febcf4b7e6ddc0bd763f54b31"
  },
  {
    "url": "assets/js/31.8eb82e93.js",
    "revision": "ba2dc35b8eb52ffa716456dfc78d950c"
  },
  {
    "url": "assets/js/32.2671b85b.js",
    "revision": "1d83d93fd64089e64ed56522d745d35b"
  },
  {
    "url": "assets/js/33.b6e3c087.js",
    "revision": "9350d9ad6d8a5ac5e541fa8a0098476c"
  },
  {
    "url": "assets/js/34.4599eada.js",
    "revision": "e2a6f51392ca4aceb7f092969ce57b96"
  },
  {
    "url": "assets/js/35.e9fde896.js",
    "revision": "5d75dc792052af21621c3c396d66e6fc"
  },
  {
    "url": "assets/js/36.757d10f8.js",
    "revision": "2b4653cc675fdad4d22c920285696877"
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
    "url": "assets/js/app.2aec3001.js",
    "revision": "ff0f71e5df46957d97fb806d534723fc"
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
    "revision": "77f18166a3e6d8e2c913b220bfe0b676"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9359cd733dfaeb46a71e6b908a89d2f9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8372b715624acb230667cb04ce63a671"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c6cb143fef110304aa37aaebf02e2b35"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "03bba190eca0b316b46c00c53283e790"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "1a3b67832dfc0c42e800d92cda0e118b"
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
    "revision": "e40a08c09f038d98af7c45464301ba12"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e36977ed1a36bdb2669784036595b99f"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "648856c2132fc71b9ff8d94f543ef0a8"
  },
  {
    "url": "tags/flutter/index.html",
    "revision": "342f448c1fb313a102b3e554c59d3ae4"
  },
  {
    "url": "tags/git/index.html",
    "revision": "102157e07bd271cdaf815704707951b7"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "1695c71a6a1be7d60bd330a636039635"
  },
  {
    "url": "tags/http/index.html",
    "revision": "fd7a9dd468ae4011936385e99d7b318b"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "6b0804e2d8313b62cb140d8f838ffb8d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "258228cf4c3ae35fbb53f2884817bbc0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "311b6a26cf963968d3b6d716d01d1766"
  },
  {
    "url": "tags/jsx/index.html",
    "revision": "f321cd0ece00b8fe351f0166557c3b98"
  },
  {
    "url": "tags/react/index.html",
    "revision": "4db29238e473b094794b5fa313cbcdbb"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "f2a2e89dfa6beb8c1bcc7605a16cb6bd"
  },
  {
    "url": "tags/vite/index.html",
    "revision": "227ed0bc90ab9c5845621fc745126b13"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "56cdbcb4ad3443b7ca375b17001220d8"
  },
  {
    "url": "tags/wx/index.html",
    "revision": "9f69a6f7adbd0ba1b7772f718ffe8b63"
  },
  {
    "url": "tags/前端打包工具/index.html",
    "revision": "7fa49eaf51f6a3c9acd3b2be37e49485"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b996c2d751a9801ab96bf72856bf01e0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fb3c69ece844096d3dce07e39780db88"
  },
  {
    "url": "timeline/index.html",
    "revision": "14dc3c6bdc6290e8841d0b7408640546"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/dart/dart01.html",
    "revision": "92932d624fd46c6517f97f3fbe47da2c"
  },
  {
    "url": "技术文章/flutter/flutter01.html",
    "revision": "e81eadc6eff1b164fe5a5f0e0604587d"
  },
  {
    "url": "技术文章/flutter/flutter02.html",
    "revision": "9ceefec0e6ded356275d021af9694566"
  },
  {
    "url": "技术文章/git/git01.html",
    "revision": "de5943690319b5c8dd4e9a9bf5ee4820"
  },
  {
    "url": "技术文章/go/go01.html",
    "revision": "aba97cf7ba7da3fa3270edbf559bb828"
  },
  {
    "url": "技术文章/go/go02.html",
    "revision": "f1ec98166e43c7c31f16a601796e63ee"
  },
  {
    "url": "技术文章/go/go03.html",
    "revision": "610d60ece46b43c97ad938e6c34d942b"
  },
  {
    "url": "技术文章/http/http01.html",
    "revision": "0247e81990ea0e7dd304d3ba01888324"
  },
  {
    "url": "技术文章/java/java01.html",
    "revision": "cb98d05f43bc3d89a050d935f07d1748"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "75ad5f6add56edf4a21d4e5d42d2d6c0"
  },
  {
    "url": "技术文章/MongDB/mongDb01.html",
    "revision": "1d43e095256c473de000276c739e9b40"
  },
  {
    "url": "技术文章/react/react01.html",
    "revision": "4f5f63be2547ceec39edad737c189c23"
  },
  {
    "url": "技术文章/react/react02.html",
    "revision": "e658284aa77026715d40ea81f2f200e5"
  },
  {
    "url": "技术文章/react/react03.html",
    "revision": "ddeb9a1781bca9a018526a0c62d15ee0"
  },
  {
    "url": "技术文章/TS/TypeScript01.html",
    "revision": "a1a84064cce6034e353fb67183e75e93"
  },
  {
    "url": "技术文章/TS/TypeScript02.html",
    "revision": "8e5370f5626bb5b8e24e8458c85de7f2"
  },
  {
    "url": "技术文章/TS/TypeScript03.html",
    "revision": "d7193b694cc863f0380af653ce512b2b"
  },
  {
    "url": "技术文章/TS/TypeScript04.html",
    "revision": "1e70bdb0adf377e75781df25ec67729b"
  },
  {
    "url": "技术文章/vite/vite01.html",
    "revision": "50af6311365552068d6d7008d8e9942e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5dd255e960b2a7ac633080d1a370b4d0"
  },
  {
    "url": "技术文章/wx-app/wx01.html",
    "revision": "bdca9ad2011591ccb5b022a7952b3912"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d505f56bef6bbdf725b2e8e97422bf58"
  },
  {
    "url": "项目难点/vue篇/vue01.html",
    "revision": "c19b7a3a6b754cd668c493303d2b077e"
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
