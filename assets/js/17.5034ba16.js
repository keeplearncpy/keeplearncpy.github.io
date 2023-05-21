(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{737:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("本节内容包括flutter 项目目录结构和如何运行项目，如何运行一个Flutter 项目，Flutter相关语法等")])]),t._v(" "),a("h2",{attrs:{id:"_1-flutter-项目目录结构和如何运行项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-flutter-项目目录结构和如何运行项目"}},[t._v("#")]),t._v(" 1. flutter 项目目录结构和如何运行项目")]),t._v(" "),a("ul",[a("li",[t._v(".dart_tool\t存放用于记录dart工具库所在位置及其信息的json文件和一些dary编译文件。")]),t._v(" "),a("li",[t._v(".idea            存放IDE生成的一些临时配置文件。")]),t._v(" "),a("li",[t._v("android      存放Flutter与Android原生交互的一些代码。\n"),a("ul",[a("li",[t._v("如果需要更改 Android 应用包名、版本号、签名文件，修改方式和修改 Android 项目一样的，都是在 app 目录下的 build.gradle 里进行修改："),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("android "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        compileSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v("\n        defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//应用包名")]),t._v("\n            applicationId "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.flutter_samples"')])]),t._v("\n            minSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n            targetSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//版本号")]),t._v("\n            versionCode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//版本名称")]),t._v("\n            versionName "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')])]),t._v("\n            testInstrumentationRunner "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.support.test.runner.AndroidJUnitRunner"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])])])]),t._v(" "),a("li",[t._v("build           存放运行项目时生成的编译文件。")]),t._v(" "),a("li",[t._v("ios               存放Flutter与IOS原生交互的一些代码。")]),t._v(" "),a("li",[t._v("lib                存放的Dart语言编写的代码，也是Flutter项目的核心代码。lib 下的源码最终会编译到 Android 和 iOS 平台进行渲染。")]),t._v(" "),a("li",[t._v("test             存放项目的测试代码文件。")]),t._v(" "),a("li",[t._v("pubspec.yaml       用于管理第三方依赖库及其资源的配置文件，比如配置远程pub仓库的依赖库，或者指定本地资源(图片、字体、音频等)。")])]),t._v(" "),a("h2",{attrs:{id:"_2-如何运行一个flutter-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何运行一个flutter-项目"}},[t._v("#")]),t._v(" 2. 如何运行一个Flutter 项目")]),t._v(" "),a("h3",{attrs:{id:"_1-命令行运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行运行"}},[t._v("#")]),t._v(" 1. 命令行运行")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("flutter run\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-在android-studio中运行-热重启与热重载的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在android-studio中运行-热重启与热重载的区别"}},[t._v("#")]),t._v(" 2. 在Android Studio中运行（热重启与热重载的区别）")]),t._v(" "),a("ul",[a("li",[t._v("冷启动（从0开始运行一个项目）")]),t._v(" "),a("li",[t._v("热重载（最主要是执行lib文件夹下面的build方法，Android Studio 里面的⚡标志按钮）")]),t._v(" "),a("li",[t._v("热重启（重新运行这个APP）")])]),t._v(" "),a("h2",{attrs:{id:"_3-flutter相关语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-flutter相关语法"}},[t._v("#")]),t._v(" 3. Flutter相关语法")]),t._v(" "),a("h3",{attrs:{id:"_3-1-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-widget"}},[t._v("#")]),t._v(" 3.1.Widget")]),t._v(" "),a("ul",[a("li",[t._v("在flutter中，万物皆可Widget。\n"),a("ul",[a("li",[t._v("有状态的Widget：StatefulWidget 在运行过程中有一些状态(data)需要改变")]),t._v(" "),a("li",[t._v("无状态的Widget：StatelessWidget 内容使确定没有状态(data)的")])])]),t._v(" "),a("li",[t._v("Widget一定不可变，如果需要改变属性需要用可变的State")]),t._v(" "),a("li",[t._v("State更新方式：\n"),a("ul",[a("li",[t._v("通过state.setState()方法触发重布局")]),t._v(" "),a("li",[t._v("遍历需要更新的Element，依次调用rebuild")]),t._v(" "),a("li",[t._v("结论：StatelessWidget和Statefulwidget的区别就是是否能自重建 (statelessWidget的build方法只会调用一次，而Statefulwidget的build方法会调用多次)。")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);