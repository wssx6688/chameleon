(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{175:function(t,a,s){t.exports=s.p+"assets/img/architecture_hierarchy.35f5f61d.png"},453:function(t,a,s){"use strict";s.r(a);var e=s(17),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("h2",{attrs:{id:"怎么理解框架的实现原理？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么理解框架的实现原理？"}},[t._v("#")]),t._v(" 怎么理解框架的实现原理？")]),t._v(" "),e("p",[t._v("实现原理图\n"),e("img",{attrs:{src:s(175),alt:"原理图"}})]),t._v(" "),e("h2",{attrs:{id:"我想使用-cml，是否需要大刀阔斧的重构项目？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我想使用-cml，是否需要大刀阔斧的重构项目？"}},[t._v("#")]),t._v(" 我想使用 CML，是否需要大刀阔斧的重构项目？")]),t._v(" "),e("p",[t._v("不需要，可以使用 CML 开发公用组件，"),e("RouterLink",{attrs:{to:"/docs/io.html"}},[t._v("导出")]),t._v("到各端原有项目中使用。")],1),t._v(" "),e("h2",{attrs:{id:"用-cml-标准编写代码，是否增加调试成本？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-cml-标准编写代码，是否增加调试成本？"}},[t._v("#")]),t._v(" 用 CML 标准编写代码，是否增加调试成本？")]),t._v(" "),e("p",[t._v("我们实现了全面的语法检查功能，且在持续加强。理论上框架是降低调试成本，就像从原生 js 开发到 vuejs、reactjs 是否认为也增加了调试成本，见仁见智。")]),t._v(" "),e("h2",{attrs:{id:"各端包括小程序的接口更新频繁，如何保证框架编译的抽象度和稳定性？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各端包括小程序的接口更新频繁，如何保证框架编译的抽象度和稳定性？"}},[t._v("#")]),t._v(" 各端包括小程序的接口更新频繁，如何保证框架编译的抽象度和稳定性？")]),t._v(" "),e("p",[t._v("1、自建输入语法标准 cml，编译输出结果自定的格式语法。\n2、框架的 runtime 层实现匹配接收的编译输出代码，runtime 跟随小程序更新。\n3、框架整体方向一致：mvvm 底层设计模式为标准设计接口。\n基于以上三条，你可以理解为：我们设计了一个框架统一标准协议，再在各个端 runtime 分别实现这个框架，宏观的角度就像 nodejs 同时运行在 window 和 macOS 系统，就像 flutter 运行在 Android 和 iOS 一个道理。各端小程序接口更新除非遇到不向下兼容情况，否则不影响框架，如果真遇到不向下兼容更新，这种情况下是否用框架都需要改。")]),t._v(" "),e("h2",{attrs:{id:"框架有多大，性能是否有影响？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架有多大，性能是否有影响？"}},[t._v("#")]),t._v(" 框架有多大，性能是否有影响？")]),t._v(" "),e("p",[t._v("1、小程序的主要运行性能瓶颈是 webview 和 js 虚拟机的传输性能，我们在这里会做优化，尽可能 diff 出修改的部分进行传输，性能会更好。\n2、包大小，小程序有包大小限制，Web 端包大小也是工程师关心的点。首先基于多态协议，产出包纯净保留单端代码；其次框架的 api 和组件会按需打包。包大小是我们重点发力点，会持续优化到极致。目前 build 模式包大小测试结果如下:\n"),e("span",{staticStyle:{color:"#ff534d"}},[t._v("minimize")]),e("span",{staticStyle:{color:"#edd0be"}},[t._v(" | ")]),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("minimize + gzip")])]),t._v(" "),e("table",{staticStyle:{color:"#edd0be"}},[e("tr",[e("th",[t._v("平台")]),e("th",[t._v("js总体积")]),e("th",[t._v("外部框架")]),e("th",[t._v("chameleon运行时代码")]),e("th",[t._v("其他代码")])]),t._v(" "),e("tr",[e("td",[t._v("web")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("141.87kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("43.72kb")])]),t._v(" "),e("td",[t._v("\n    vue+vuex+vue-router"),e("br"),t._v(" "),e("span",{staticStyle:{color:"#ff534d"}},[t._v("99.26kb")]),t._v("  \n    | \n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("33.89kb")])]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("35.96kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v(" 8.85kb")])]),t._v(" "),e("td",[t._v("\n    业务代码\n  ")])]),t._v(" "),e("tr",[e("td",[t._v("weex")]),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("135kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("32.43kb")])]),t._v(" "),e("td",[t._v("\n    vuex+vue-router"),e("br"),t._v(" "),e("span",{staticStyle:{color:"#ff534d"}},[t._v("33.49kb")]),t._v("  \n    | \n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("17.96kb")])]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("25.23kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("5.94kb")])]),t._v(" "),e("td",[t._v("\n    业务代码\n  ")])]),t._v(" "),e("tr",[e("td",[t._v("wx")]),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("101.66kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("28.12kb")])]),t._v(" "),e("td",[t._v("\n    mobx算在chameleon运行时中  \n  ")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("98.75kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("26.53kb")])]),t._v(" "),e("td",[t._v("\n    业务代码\n  ")])]),t._v(" "),e("tr",[e("td",[t._v("baidu")]),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("101.72kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v(" 28.13kb")])]),t._v(" "),e("td",[t._v("\n    mobx算在chameleon运行时中  \n  ")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("98.78kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("26.61kb")])]),t._v(" "),e("td",[t._v("\n    业务代码\n  ")])]),t._v(" "),e("tr",[e("td",[t._v("alipay")]),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("102kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("28.12kb")])]),t._v(" "),e("td",[t._v("\n    mobx算在chameleon运行时中  \n  ")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#ff534d"}},[t._v("99.15kb")]),t._v("  \n    |\n    "),e("span",{staticStyle:{color:"#25c6fc"}},[t._v("26.34kb")])]),t._v(" "),e("td",[t._v("\n    业务代码\n  ")])])]),t._v(" "),e("h2",{attrs:{id:"我只想跨-web-和各类小程序，是否可以不使用-flexbox-布局模型？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我只想跨-web-和各类小程序，是否可以不使用-flexbox-布局模型？"}},[t._v("#")]),t._v(" 我只想跨 web 和各类小程序，是否可以不使用 Flexbox 布局模型？")]),t._v(" "),e("p",[t._v("可以，如果你的项目不在快应用、React Native、Weex 等平台运行，可以更便捷开发项目，特别是 CSS 的限制更少："),e("RouterLink",{attrs:{to:"/tutorial/web-wx-only-app.html"}},[t._v("只跨 Web 和小程序的应用")])],1),t._v(" "),e("h2",{attrs:{id:"一套代码运行多端，如何保证各个端充分的定制化空间？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一套代码运行多端，如何保证各个端充分的定制化空间？"}},[t._v("#")]),t._v(" 一套代码运行多端，如何保证各个端充分的定制化空间？")]),t._v(" "),e("p",[t._v("基于多态协议，充分保证各端发挥，且保证最终一致性。")]),t._v(" "),e("h2",{attrs:{id:"各端包括小程序的接口更新后，是否一定依赖框架更新？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各端包括小程序的接口更新后，是否一定依赖框架更新？"}},[t._v("#")]),t._v(" 各端包括小程序的接口更新后，是否一定依赖框架更新？")]),t._v(" "),e("p",[t._v("同上一个问题，基于多态协议，可自己直接调用新的底层接口。")]),t._v(" "),e("h2",{attrs:{id:"怎么使用微信小程序的原生-button？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么使用微信小程序的原生-button？"}},[t._v("#")]),t._v(" 怎么使用微信小程序的原生 button？")]),t._v(" "),e("p",[t._v("同类问题：")]),t._v(" "),e("p",[t._v("1、怎么使用微信授权登录？")]),t._v(" "),e("p",[t._v("2、怎么使用小程序登录？")]),t._v(" "),e("p",[t._v("这个功能是微信小程序等特有的功能，所以不建议写在公用跨端部分，用"),e("RouterLink",{attrs:{to:"/docs/poly.html#多态组件"}},[t._v("多态组件")]),t._v("封装适合自己业务的 "),e("code",[t._v("<passport>")]),t._v("组件，在 "),e("code",[t._v("passport.wx.cml")]),t._v(" 里面使用 "),e("code",[t._v("<origin-button>")]),t._v("来调用微信小程序原生组件。")],1),t._v(" "),e("p",[t._v("CML 框架方为什么不直接提供组件？")]),t._v(" "),e("p",[t._v("目前提供的封装的组件都是可跨所有端。而微信小程序的免密授权登录功能时小程序所特有的功能，在 Web 端时用户可能需要用账号密码登录，各个公司业务的登录功能设计不一致，平台无法提供统一的 passport 组件；所以在你第一次使用 CML 时需要自己用多态组件封装一次"),e("code",[t._v("<passport>")]),t._v("登录组件，后续所有项目都可以使用这个"),e("code",[t._v("<passport>")]),t._v("登录组件.")]),t._v(" "),e("h2",{attrs:{id:"现在提供的组件是针对三端通用，很多小程序特有功能不能使用，后续有什么改进规划吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现在提供的组件是针对三端通用，很多小程序特有功能不能使用，后续有什么改进规划吗？"}},[t._v("#")]),t._v(" 现在提供的组件是针对三端通用，很多小程序特有功能不能使用，后续有什么改进规划吗？")]),t._v(" "),e("p",[t._v("目前我们正在开发只针对小程序的组件库，用户可以直接使用各类小程序统一版本的登录组件库。\n同时基于"),e("RouterLink",{attrs:{to:"/docs/mvvm.html#多态组件扩展"}},[t._v("多态组件的重载能力")]),t._v("可以重载登录组件的 Web 端实现，这样既能在各类小程序使用统一登录，又能定制化 Web 端等登录能力。")],1),t._v(" "),e("h2",{attrs:{id:"我的项目只运行微信小程序端，官方提供的某个组件灵活性不够？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我的项目只运行微信小程序端，官方提供的某个组件灵活性不够？"}},[t._v("#")]),t._v(" 我的项目只运行微信小程序端，官方提供的某个组件灵活性不够？")]),t._v(" "),e("p",[t._v("不仅仅是微信小程序端，任意端想实现自己想要的功能时皆可适用。\n找到改组件原来的代码，使用"),e("RouterLink",{attrs:{to:"/docs/mvvm.html#多态组件扩展"}},[t._v("多态组件的重载能力")]),t._v(" 或者"),e("RouterLink",{attrs:{to:"/docs/mvvm.html#多态接口扩展"}},[t._v("多态接口的重载能力")]),t._v("重新实现微信小程序端的实现，实现自己定制化能力。")],1),t._v(" "),e("h2",{attrs:{id:"是否支持类似-vue-的-ref？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#是否支持类似-vue-的-ref？"}},[t._v("#")]),t._v(" 是否支持类似 vue 的 ref？")]),t._v(" "),e("p",[t._v("目前暂不支持；")]),t._v(" "),e("h2",{attrs:{id:"小程序端分包大小超过-2m-的限制改如何优化？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小程序端分包大小超过-2m-的限制改如何优化？"}},[t._v("#")]),t._v(" 小程序端分包大小超过 2M 的限制改如何优化？")]),t._v(" "),e("p",[t._v("具体优化步骤参考："),e("RouterLink",{attrs:{to:"/tutorial/bundle-splitting.html"}},[t._v("使用分包")]),t._v("、"),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/332",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue332"),e("OutboundLink")],1)],1),t._v(" "),e("h2",{attrs:{id:"模板中支持函数吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板中支持函数吗？"}},[t._v("#")]),t._v(" 模板中支持函数吗？")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("getText()"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("由于小程序端语法限制，不支持函数自执行，参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/100",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue100"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"如何引用字体图标-inonfont？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何引用字体图标-inonfont？"}},[t._v("#")]),t._v(" 如何引用字体图标 inonfont？")]),t._v(" "),e("p",[t._v("具体参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/77",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue77"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"使用-c-tabbar-后，发现其他-cml-组建中的-created-方法不执行，只执行-c-tabbar-页面中的-created，请问该怎么解决这个问题？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-c-tabbar-后，发现其他-cml-组建中的-created-方法不执行，只执行-c-tabbar-页面中的-created，请问该怎么解决这个问题？"}},[t._v("#")]),t._v(" 使用 c-tabbar 后，发现其他 cml 组建中的 created 方法不执行，只执行 c-tabbar 页面中的 created，请问该怎么解决这个问题？")]),t._v(" "),e("p",[t._v("具体参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/301",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue301"),e("OutboundLink")],1),t._v("\n开发者需要注意一点，c-tabbar 仅仅是一个组件，和微信原生的配置的 tabbar 并不一样；")]),t._v(" "),e("h2",{attrs:{id:"支持第三方-ui-库吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持第三方-ui-库吗？"}},[t._v("#")]),t._v(" 支持第三方 ui 库吗？")]),t._v(" "),e("p",[t._v("支持，具体参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/119",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue119"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"怎么在多态接口中定义一个含可选属性的对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么在多态接口中定义一个含可选属性的对象"}},[t._v("#")]),t._v(" 怎么在多态接口中定义一个含可选属性的对象")]),t._v(" "),e("p",[t._v("具体参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/327",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue327"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"image-组件如何调用-error-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-组件如何调用-error-方法"}},[t._v("#")]),t._v(" image 组件如何调用 error 方法")]),t._v(" "),e("p",[t._v("具体参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/348",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue348"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"build-模式下图片静态资源地址找不到？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-模式下图片静态资源地址找不到？"}},[t._v("#")]),t._v(" build 模式下图片静态资源地址找不到？")]),t._v(" "),e("p",[t._v("具体参考 "),e("RouterLink",{attrs:{to:"/tutorial/deploy-guide.html#apiprefix、publicpath、router-config-json、cmlurl-的关系"}},[t._v("publicPath")])],1),t._v(" "),e("h2",{attrs:{id:"process-env-获取不到值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-env-获取不到值"}},[t._v("#")]),t._v(" process.env 获取不到值")]),t._v(" "),e("p",[t._v("首先要了解 webpack 中 DefinePlugin 的作用，可以参考"),e("a",{attrs:{href:"https://webpack.docschina.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("所以当我们取值的时候，只能取到该插件已经声明的值；")]),t._v(" "),e("h2",{attrs:{id:"数据存储有同步方法吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据存储有同步方法吗？"}},[t._v("#")]),t._v(" 数据存储有同步方法吗？")]),t._v(" "),e("p",[t._v("store 部分请参考："),e("RouterLink",{attrs:{to:"/docs/store.html#mutation"}},[t._v("Mutation")]),t._v("、"),e("RouterLink",{attrs:{to:"/docs/store.html#action"}},[t._v("Action")])],1),t._v(" "),e("p",[t._v("备注：mutation 是数据的同步操作，action 是数据的异步操作。")]),t._v(" "),e("h2",{attrs:{id:"为什么图片切换有延迟？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么图片切换有延迟？"}},[t._v("#")]),t._v(" 为什么图片切换有延迟？")]),t._v(" "),e("p",[t._v("可以参考："),e("RouterLink",{attrs:{to:"/docs/build.html#图片-base64"}},[t._v("图片 base64\b")]),t._v("，将图片改为 base64 的形式。")],1),t._v(" "),e("h2",{attrs:{id:"build-模式不支持传参，导致无法灵活区分环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-模式不支持传参，导致无法灵活区分环境"}},[t._v("#")]),t._v(" build 模式不支持传参，导致无法灵活区分环境")]),t._v(" "),e("p",[t._v("如果我们需要多套构建配置，可以自定义一个构建类型，具体参考"),e("RouterLink",{attrs:{to:"/docs/config.html#自定义构建配置"}},[t._v("项目配置-自定义配置")])],1),t._v(" "),e("p",[t._v("假如你在构建微信小程序端，一个构建模式下要求不压缩代码，一个构建模式下要求显示模块名字，那么可以如下配置")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("cml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  wx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    build"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      minimize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对打包结果进行压缩")]),t._v("\n      moduleIdType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译的模块结果以模块名字显示")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    custom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      minimize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对打包结果进行压缩")]),t._v("\n      moduleIdType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译的模块结果以模块名字显示")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("执行 cml wx build 则打包的代码会进行压缩以及模块名以 id 取名；")]),t._v(" "),e("p",[t._v("执行 cml wx custom 则打包的代码不会压缩抑菌剂模块名以该模块对应的 name 取名")]),t._v(" "),e("h2",{attrs:{id:"v-model-不支持对象的属性吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-model-不支持对象的属性吗？"}},[t._v("#")]),t._v(" v-model 不支持对象的属性吗？")]),t._v(" "),e("p",[t._v("目前不支持对象的属性；参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/340",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue340"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"web-端页面切换动画怎么加？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-端页面切换动画怎么加？"}},[t._v("#")]),t._v(" Web 端页面切换动画怎么加？")]),t._v(" "),e("p",[t._v("参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/234",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue234"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"我想通过别名引用项目中的资源，该如何配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我想通过别名引用项目中的资源，该如何配置"}},[t._v("#")]),t._v(" 我想通过别名引用项目中的资源，该如何配置?")]),t._v(" "),e("p",[t._v("可以通过"),e("RouterLink",{attrs:{to:"/docs/config.html#修改-webpack-配置"}},[t._v("CML 提供的回调函数")]),t._v("，对 webpack 进行配置；利用 resolve.alias 选项；具体参考 "),e("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-resolvealias"),e("OutboundLink")],1)],1),t._v(" "),e("p",[t._v("比如想提供一个对于 "),e("code",[t._v("src")]),t._v(" 目录的访问别名\n修改 "),e("code",[t._v("chameleon.config.js")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpackConfig'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" media"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webpackConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里新增 SRC 别名；")]),t._v("\n  webpackConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpackConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SRC")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" media"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webpackConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("假如项目目录中有"),e("code",[t._v("src/utils/utils.js")]),t._v("这个模块，那么在项目中可以直接")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" utils "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SRC/utils/utils.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("注意：CML 内置了一些别名")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$CMLPROJECT'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/components'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$PROJECT'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$ROUTER_CONFIG'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"如何支持-sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何支持-sass"}},[t._v("#")]),t._v(" 如何支持 sass?")]),t._v(" "),e("p",[t._v("可以自定义扩展 webpack 配置，具体配置可以参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/128",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue128"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"如何给-cml-项目增加-eslint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何给-cml-项目增加-eslint"}},[t._v("#")]),t._v(" 如何给 CML 项目增加 eslint?")]),t._v(" "),e("p",[t._v("如果是新初始化的项目，可以根据 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/358",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue358"),e("OutboundLink")],1),t._v("中《如何使用 eslint 规范 CML 项目》部分进行配置；")]),t._v(" "),e("p",[t._v("如果是已开发一段时间的 CML 项目，想渐进式的对项目进行 eslint 规范，那么可以参考 "),e("a",{attrs:{href:"https://github.com/didi/chameleon/issues/358",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue358"),e("OutboundLink")],1),t._v("中《如何使用 eslint 校验本次提交》部分进行配置；")]),t._v(" "),e("h2",{attrs:{id:"微信预览为什么显示不了图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信预览为什么显示不了图片"}},[t._v("#")]),t._v(" 微信预览为什么显示不了图片")]),t._v(" "),e("p",[t._v("首先参考："),e("RouterLink",{attrs:{to:"/docs/build.html#静态资源引用"}},[t._v("资源定位")]),t._v("、"),e("RouterLink",{attrs:{to:"/tutorial/deploy-guide.html"}},[t._v("上线指南")])],1),t._v(" "),e("p",[t._v("在 build 模式下会定位到配置的 publicPath 路径下，所以如果要预览的话，务必配置正确的 publicPath")]),t._v(" "),e("h2",{attrs:{id:"web-端开发模式下，如何修改资源协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-端开发模式下，如何修改资源协议"}},[t._v("#")]),t._v(" Web 端开发模式下，如何修改资源协议?")]),t._v(" "),e("p",[t._v("cml web dev 之后，我们可以在 "),e("code",[t._v("node_modules/.chameleon")]),t._v(" 文件夹中看到资源的具体内容")]),t._v(" "),e("p",[t._v("可以通过以下配置修改协议")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("cml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpackConfig'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" media"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webpackConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" media "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里修改 publicPath 即可，dev模式下默认是 http://本机ip:port/")]),t._v("\n    webpackConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicPath "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webpackConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicPath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/http:/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" media"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webpackConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"如何将-weex-端输出的文件打包成-apk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何将-weex-端输出的文件打包成-apk"}},[t._v("#")]),t._v(" 如何将 Weex 端输出的文件打包成 apk")]),t._v(" "),e("p",[t._v("测试的话可以把 jsbundle 放到 Android 工程 App 模块的 assets 目录下，clone 并参考："),e("a",{attrs:{href:"https://github.com/chameleon-team/chameleon-sdk-android",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/chameleon-team/chameleon-sdk-android"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("这里有 Demo 工程示例的 jsbundle，直接读取 assets 目录下并渲染："),e("a",{attrs:{href:"https://github.com/chameleon-team/chameleon-sdk-android/tree/master/app/src/main/assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/chameleon-team/chameleon-sdk-android/tree/master/app/src/main/assets"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("另，这里的 "),e("RouterLink",{attrs:{to:"/docs/sdk.html#android-sdk"}},[t._v("Android 相关文章")]),t._v("建议先读一遍。")],1),t._v(" "),e("h2",{attrs:{id:"如何调试-cml-的工程化配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何调试-cml-的工程化配置"}},[t._v("#")]),t._v(" 如何调试 CML 的工程化配置")]),t._v(" "),e("p",[t._v("第一步：")]),t._v(" "),e("p",[e("code",[t._v("cml -v")]),t._v(" 找到当前使用 "),e("code",[t._v("chameleon-tool")]),t._v(" 的路径")]),t._v(" "),e("p",[t._v("第二步：")]),t._v(" "),e("p",[t._v("用编辑器打开该路径下源码，找到"),e("code",[t._v("chameleon.js")]),t._v(" 文件,修改成如下")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("\n#"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("env node "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("inspect"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brk\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lib/index.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("可以在源码目录中任何想调试的地方打上断点"),e("code",[t._v("debugger")])]),t._v(" "),e("p",[t._v("第三步：")]),t._v(" "),e("p",[t._v("修改"),e("code",[t._v("chameleon.config.js")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("cml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpackConfig'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" media"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webpackConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*最终断点会进到这里，在这里可以看.\n  type:编译端，web,wx,weex等\n  media:编译类型 dev build\n  webpackConfig:chameleon内置工程化配置\n  */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("debugger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" media"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webpackConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("第四步：")]),t._v(" "),e("p",[t._v("执行相关的运行命令之后，比如 "),e("code",[t._v("cml web dev")]),t._v("\n打开"),e("code",[t._v("chrome://inspect")])]),t._v(" "),e("p",[t._v("进入调试终端即可")])])}),[],!1,null,null,null);a.default=n.exports}}]);