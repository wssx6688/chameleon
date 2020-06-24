(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{503:function(t,v,_){"use strict";_.r(v);var e=_(17),n=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"目录结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),_("h2",{attrs:{id:"项目结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),_("p",[t._v("使用"),_("code",[t._v("cml init project")]),t._v(" 生成的项目结构如下：")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("├── chameleon.config.js                 // 项目的配置文件\n├── dist                                // 打包产出目录\n├── mock                                // 模拟数据目录\n├── node_modules                        // npm包依赖\n├── package.json\n└── src                                 // 项目源代码\n    ├── app                             // app启动入口\n    ├── components                      // 组件文件夹\n    ├── pages                           // 页面文件夹\n    ├── router.config.json              // 路由配置文件\n    └── store                           // 全局状态管理\n")])])]),_("h2",{attrs:{id:"文件夹和文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件夹和文件"}},[t._v("#")]),t._v(" 文件夹和文件")]),t._v(" "),_("table",[_("tr",[_("th",[t._v("文件")]),t._v(" "),_("th",[t._v("必须")]),t._v(" "),_("th",[t._v("作用")])]),t._v(" "),_("tr",[_("td",[t._v("chameleon.config.js")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("项目配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("dist")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("自动生成，用户无需关注。项目编译目标目录")])]),t._v(" "),_("tr",[_("td",[t._v("mock")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("数据mock编写文件夹")])]),t._v(" "),_("tr",[_("td",[t._v("node_modules")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("自动生成，用户无需关注。npm包安装文件夹")])]),t._v(" "),_("tr",[_("td",[t._v("package.json")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("npm包配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("app")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("应用启动入口根文件夹")])]),t._v(" "),_("tr",[_("td",[t._v("components ")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("用户组件根文件夹")])]),t._v(" "),_("tr",[_("td",[t._v("pages")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("页面根文件夹")])]),t._v(" "),_("tr",[_("td",[t._v("router.config.json")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("路由配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("store")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("数据管理文件夹")])])]),t._v(" "),_("h2",{attrs:{id:"cml-文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cml-文件"}},[t._v("#")]),t._v(" .cml 文件")]),t._v(" "),_("p",[t._v("一个 "),_("code",[t._v(".cml")]),t._v(" 文件开发的组件由四块内容组成，分别是：")]),t._v(" "),_("table",[_("tr",[_("th",[t._v("标签")]),t._v(" "),_("th",[t._v("必须")]),t._v(" "),_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("作用")])]),t._v(" "),_("tr",[_("td",[t._v("template")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("lang:vue")]),t._v(" "),_("td",[t._v("提供组件结构、事件绑定、数据绑定、样式绑定")])]),t._v(" "),_("tr",[_("td",[t._v("template(标签设置cml-type属性时)")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("cml-type:json")]),t._v(" "),_("td",[t._v("组件配置")])]),t._v(" "),_("tr",[_("td",[t._v("script")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("暂无")]),t._v(" "),_("td",[t._v("组件逻辑")])]),t._v(" "),_("tr",[_("td",[t._v("style")]),t._v(" "),_("td",[t._v("必须")]),t._v(" "),_("td",[t._v("lang:less|stylus")]),t._v(" "),_("td",[t._v("组件样式表")])])]),t._v(" "),_("h2",{attrs:{id:"interface-文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#interface-文件"}},[t._v("#")]),t._v(" .interface 文件")]),t._v(" "),_("p",[_("code",[t._v(".cml")]),t._v(" 文件的特殊形式，用于实现"),_("RouterLink",{attrs:{to:"/docs/poly.html"}},[t._v("多态协议规范")]),t._v("，多端差异化的入口")],1),t._v(" "),_("table",[_("tr",[_("th",[t._v("标签")]),t._v(" "),_("th",[t._v("必须")]),t._v(" "),_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("作用")]),t._v(" "),_("th",[t._v("备注")])]),t._v(" "),_("tr",[_("td",[t._v("\n           script (interface 定义)\n        ")]),t._v(" "),_("td",[t._v('\n            cml-type="interface" 情况下必须和 include 标签二选一\n        ')]),t._v(" "),_("td",[t._v("\n            cml-type:interface\n        ")]),t._v(" "),_("td",[t._v(" \n            定义多态协议\n        ")]),t._v(" "),_("td",[t._v(" \n            规定组件或者 API 的输入输出结构和类型\n        ")])]),t._v(" "),_("tr",[_("td",[t._v("\n            script（实现）\n        ")]),t._v(" "),_("td",[t._v("\n            多态组件：当无标签时按规定的优先级查找\n            "),_("br"),t._v("\n            多态 API：必须有，或来自 include 继承\n        ")]),t._v(" "),_("td",[t._v("\n            cml-type:wx|alipay|weex|web|tt|qq|其他\n            "),_("br"),t._v("\n            src:API 方法实现文件引用地址|组件实现文件引用地址\n        ")]),t._v(" "),_("td",[t._v(" \n            实现多态协议\n        ")]),t._v(" "),_("td",[t._v(' \n            1. 按<script cml-type="interface" >规定的输入输出结构和类型，实现组件或者 API接口的实现。'),_("br"),t._v("\n            2. 有 src 属性时，外链其他文件，且仅多态组件必须通过外链实现。\n        ")])]),t._v(" "),_("tr",[_("td",[t._v("include")]),t._v(" "),_("td",[t._v('必须和 <script cml-type="interface" > 的标签二选一')]),t._v(" "),_("td",[t._v(" src:引用 interface 文件路径")]),t._v(" "),_("td",[t._v(" 继承多态协议 ")]),t._v(" "),_("td",[t._v(" \n            1. 可用于重载既有组件或 API 的实现，定制化某些端个性化能力。"),_("br"),t._v("\n            2. 用于扩展新端。 \n        ")])])])])}),[],!1,null,null,null);v.default=n.exports}}]);