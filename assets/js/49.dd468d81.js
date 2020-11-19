(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{147:function(t,s,a){t.exports=a.p+"assets/img/mvvm.d3d8fa2d.png"},401:function(t,s,a){t.exports=a.p+"assets/img/init-cloud-demo.d7a83fce.png"},402:function(t,s,a){t.exports=a.p+"assets/img/result.05d21ebb.png"},456:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cml-云开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cml-云开发"}},[t._v("#")]),t._v(" CML+云开发")]),t._v(" "),e("h2",{attrs:{id:"_0-准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-准备工作"}},[t._v("#")]),t._v(" 0.准备工作")]),t._v(" "),e("h3",{attrs:{id:"熟悉chameleon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#熟悉chameleon"}},[t._v("#")]),t._v(" 熟悉Chameleon")]),t._v(" "),e("p",[t._v('Chameleon致力于达到"一套代码运行多端，一端所见即多端所见"的终极目标。\n目前支持平台包括：web、微信小程序、支付宝小程序、百度小程序、android(weex)、ios(weex)、qq 小程序、字节跳动小程序、快应用等')]),t._v(" "),e("p",[e("img",{attrs:{src:a(147),alt:""}})]),t._v(" "),e("p",[t._v("在使用Chameleon进行云开发之前，需要对其有一些基本的了解，以下是一些学习地址")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/didi/chameleon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chameleon-github"),e("OutboundLink")],1),t._v(" 欢迎star")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cmljs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chameleon官网"),e("OutboundLink")],1),t._v(" 欢迎体验")])]),t._v(" "),e("h3",{attrs:{id:"熟悉云开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#熟悉云开发"}},[t._v("#")]),t._v(" 熟悉云开发")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发qucik-start"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("根据小程序云开发官方文档，首先要")]),t._v(" "),e("ul",[e("li",[t._v("熟悉云开发基本模板")]),t._v(" "),e("li",[t._v("开通云开发、创建环境")])]),t._v(" "),e("p",[t._v("创建初始化模板如下\n"),e("img",{attrs:{src:a(401),alt:""}})]),t._v(" "),e("p",[t._v("在开发者工具中预览效果大致如下")]),t._v(" "),e("p",[e("img",{attrs:{src:a(402),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_1-进入开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-进入开发"}},[t._v("#")]),t._v(" 1.进入开发")]),t._v(" "),e("blockquote",[e("p",[t._v("以下案例demo"),e("a",{attrs:{href:"https://github.com/chameleon-team/miniapp-enhance-demo/tree/master/miniapp-config-demo/%E5%B7%A5%E7%A8%8B%E9%85%8D%E7%BD%AEdemo-%E4%BA%91%E5%BC%80%E5%8F%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_1-1-全局安装最新的chameleon-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-全局安装最新的chameleon-tool"}},[t._v("#")]),t._v(" 1.1.全局安装最新的chameleon-tool")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm i chameleon-tool@1.0.5 -g\n")])])]),e("h3",{attrs:{id:"_1-2-初始化一个项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-初始化一个项目"}},[t._v("#")]),t._v(" 1.2.初始化一个项目")]),t._v(" "),e("p",[t._v("比如我们初始化一个项目名为 "),e("code",[t._v("cloud-demo-step")]),t._v(" 的CML项目")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cml init project\n? please input the name of project: cloud-demo-step\n✔ install success\nTo get started:\n\ncd cloud-demo-step\n\ncml wx dev -n\n\n")])])]),e("h3",{attrs:{id:"_1-3-修改chameleon-config-js中的配置，增加projectconfig配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-修改chameleon-config-js中的配置，增加projectconfig配置"}},[t._v("#")]),t._v(" 1.3.修改chameleon.config.js中的配置，增加"),e("code",[t._v("projectConfig")]),t._v("配置")]),t._v(" "),e("p",[t._v("该配置项的内容最终会生成微信小程序所需要的 "),e("code",[t._v("project.config.json")])]),t._v(" "),e("ul",[e("li",[t._v("注意需要填写正确的appid")]),t._v(" "),e("li",[t._v("cloudfunctionRoot提供存放云函数的目录")])]),t._v(" "),e("p",[t._v("为了方便大家快速学习，可以在项目中在 "),e("code",[t._v("chameleon.config.js")]),t._v("中配置 "),e("code",[t._v("enableLinter: false")]),t._v(",去掉语法检查")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云函数开发"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序 project.config.json文件"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_1-4-云函数迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-云函数迁移"}},[t._v("#")]),t._v(" 1.4.云函数迁移")]),t._v(" "),e("p",[t._v("将通过微信开发者工具初始化的小程序项目《云开发 QuickStart 项目》中的"),e("code",[t._v("cloudfunctions/")]),t._v(" 目录复制到 CML 初始化项目的 "),e("code",[t._v("src")]),t._v(" 文件夹下")]),t._v(" "),e("p",[t._v("以下步骤可以详细参考，"),e("RouterLink",{attrs:{to:"/tutorial/[https://cmljs.org/docs/migrate-wx-to-cml.html#迁移微信小程序项目到-cml](https://cmljs.org/docs/migrate-wx-to-cml.html#迁移微信小程序项目到-cml)"}},[t._v("微信小程序项目迁移到CML教程")])],1),t._v(" "),e("h3",{attrs:{id:"_1-5-app配置迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-app配置迁移"}},[t._v("#")]),t._v(" 1.5.App配置迁移")]),t._v(" "),e("h4",{attrs:{id:"_1-5-1-app-js-内容迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-app-js-内容迁移"}},[t._v("#")]),t._v(" 1.5.1.App.js 内容迁移")]),t._v(" "),e("p",[t._v("根据官方demo,我们只需要进行云函数的初始化即可")]),t._v(" "),e("ul",[e("li",[t._v("定义多态接口")])]),t._v(" "),e("p",[t._v("在"),e("a",{attrs:{href:"https://cmljs.org/docs/poly.html#%E5%A4%9A%E6%80%81%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"}},[t._v("多态接口"),e("OutboundLink")],1),t._v("中，参考"),e("code",[t._v("component/common/cloud.interface")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cml-type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UtilsInterface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCloud")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ul",[e("li",[t._v("App.cml 中进行云函数的初始化")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloud "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" common"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCloud")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// env: 'your-env-id',")]),t._v("\n  traceUser"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"_1-5-2-app-json-内容迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-app-json-内容迁移"}},[t._v("#")]),t._v(" 1.5.2.App.json 内容迁移")]),t._v(" "),e("p",[t._v("主要是路由的配置项的迁移，"),e("a",{attrs:{href:"https://cmljs.org/docs/config.html#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("路由配置"),e("OutboundLink")],1),t._v("，app.json 中的 pages 字段对应CML项目中 router.config.json 中配置")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"history"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.chameleon.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"routes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/cml/h5/index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/pages/index/index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"首页"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mock"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.php"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/cml/h5/user-console"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/pages/user-console/user-console"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mock"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.php"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//.....")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_1-6-页面、组件迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-页面、组件迁移"}},[t._v("#")]),t._v(" 1.6. 页面、组件迁移")]),t._v(" "),e("p",[t._v("以 "),e("code",[t._v("pages/index/index")]),t._v(" 为例，文件对应关系")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("原生小程序")]),t._v(" "),e("th",[t._v("CML")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v(".wxml 文件")]),t._v(" "),e("td",[t._v("template")])]),t._v(" "),e("tr",[e("td",[t._v(".js 文件")]),t._v(" "),e("td",[t._v("script")])]),t._v(" "),e("tr",[e("td",[t._v("style 文件")]),t._v(" "),e("td",[t._v("style")])]),t._v(" "),e("tr",[e("td",[t._v("json文件")]),t._v(" "),e("td",[t._v('cml-type="json"')])])])]),t._v(" "),e("p",[t._v("某些基本的语法对应关系")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("原生小程序")]),t._v(" "),e("th",[t._v("CML")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("wx:if")]),t._v(" "),e("td",[t._v("c-if")])]),t._v(" "),e("tr",[e("td",[t._v("wx:else")]),t._v(" "),e("td",[t._v("c-else")])]),t._v(" "),e("tr",[e("td",[t._v("wx:elif")]),t._v(" "),e("td",[t._v("c-else-if")])]),t._v(" "),e("tr",[e("td",[t._v("wx:for")]),t._v(" "),e("td",[t._v("c-for")])]),t._v(" "),e("tr",[e("td",[t._v("bindtap")]),t._v(" "),e("td",[t._v("c-bind:tap")])])])]),t._v(" "),e("p",[t._v("具体CML的语法"),e("a",{attrs:{href:"https://cmljs.org/docs/cml.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("usingComponents 中对应的路径以相对路径为主。")]),t._v(" "),e("p",[t._v("样式文件可以直接按照 "),e("code",[t._v("@import 'xxxx'")]),t._v("进行导入；对应的样式文件直接复制到CML的项目中即可。")]),t._v(" "),e("p",[t._v("JS部分对应细则：")]),t._v(" "),e("ul",[e("li",[t._v("生命周期")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("wx")]),t._v(" "),e("th",[t._v("页面生命周期/CML")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("onLoad")]),t._v(" "),e("td",[t._v("'beforeCreate',")])]),t._v(" "),e("tr",[e("td",[t._v("onLoad")]),t._v(" "),e("td",[t._v("'created',")])]),t._v(" "),e("tr",[e("td",[t._v("onLoad")]),t._v(" "),e("td",[t._v("'beforeMount',")])]),t._v(" "),e("tr",[e("td",[t._v("onReady")]),t._v(" "),e("td",[t._v("'mounted',")])]),t._v(" "),e("tr",[e("td",[t._v("onUnload")]),t._v(" "),e("td",[t._v("'beforeDestroy',")])]),t._v(" "),e("tr",[e("td",[t._v("onUnload")]),t._v(" "),e("td",[t._v("'destroyed'")])])])]),t._v(" "),e("ul",[e("li",[t._v("data、props、methods")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("wx")]),t._v(" "),e("th",[t._v("CML")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("data")]),t._v(" "),e("td",[t._v("ata")])]),t._v(" "),e("tr",[e("td",[t._v("props")]),t._v(" "),e("td",[t._v("props")])]),t._v(" "),e("tr",[e("td",[t._v("方法")]),t._v(" "),e("td",[t._v("methods")])])])]),t._v(" "),e("ul",[e("li",[t._v("API的使用")])]),t._v(" "),e("p",[t._v("一般情况下，如果大家入门学习的话，可以直接使用"),e("code",[t._v("wx.xxx")]),t._v(" 的情况，也可以尝试使用"),e("code",[t._v("chameleon-api")])]),t._v(" "),e("p",[t._v("可以在项目中在 "),e("code",[t._v("chameleon.config.js")]),t._v("中配置 "),e("code",[t._v("enableLinter: false")]),t._v(",去掉语法检查")]),t._v(" "),e("h3",{attrs:{id:"_1-7-全局数据的处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-全局数据的处理"}},[t._v("#")]),t._v(" 1.7.全局数据的处理")]),t._v(" "),e("p",[t._v("对于 globalData 的处理，CML提供了store , 我们可以将这些数据放到store中")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cmljs.org/docs/store.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("store的使用参考"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("比如首页中")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("app.globalData.openid = res.result.openid\n")])])]),e("p",[t._v("迁移到CML之后")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("store.commit('getOpenId',res.result)\n")])])]),e("p",[t._v("Store具体逻辑参考提供的demo代码")]),t._v(" "),e("h2",{attrs:{id:"_2-本地启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-本地启动"}},[t._v("#")]),t._v(" 2.本地启动")]),t._v(" "),e("p",[t._v("在修改完的项目中")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cml wx dev -n \n\n")])])]),e("p",[t._v("启动之后用微信开发者工具打开 dist/wx 目录即可")])])}),[],!1,null,null,null);s.default=n.exports}}]);