(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_pay_status-index"],{"037d":function(t,e,a){var o=a("43de");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("967d").default;r("c8a9f85e",o,!0,{sourceMap:!1,shadowMode:!1})},"43de":function(t,e,a){var o=a("c86c");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*引入主题变色的scss文件*/\n/* 颜色变量 */\n/*\n@mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。\n*/\n/*定义全局颜色变量*/\n/*主色*/\n/* 辅色*/\n/* 价格色*/\n/*左侧按钮*/\n/*主渐变色*/\n/*辅色渐变*/\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/*字体颜色(少部分其他,不限于字体)*/\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.icon-iconfontguanbi[data-v-0c8cd55e]{background-color:#999!important;text-shadow:none!important}.bg_color[data-v-0c8cd55e]{background-color:theme}[data-theme="theme1"] .bg_color[data-v-0c8cd55e]{background-color:#e93323!important}[data-theme="theme2"] .bg_color[data-v-0c8cd55e]{background-color:#fe5c2d!important}[data-theme="theme3"] .bg_color[data-v-0c8cd55e]{background-color:#42ca4d!important}[data-theme="theme4"] .bg_color[data-v-0c8cd55e]{background-color:#1db0fc!important}[data-theme="theme5"] .bg_color[data-v-0c8cd55e]{background-color:#ff448f!important}.cart_color[data-v-0c8cd55e]{color:theme;border:theme}[data-theme="theme1"] .cart_color[data-v-0c8cd55e]{color:#e93323!important}[data-theme="theme2"] .cart_color[data-v-0c8cd55e]{color:#fe5c2d!important}[data-theme="theme3"] .cart_color[data-v-0c8cd55e]{color:#42ca4d!important}[data-theme="theme4"] .cart_color[data-v-0c8cd55e]{color:#1db0fc!important}[data-theme="theme5"] .cart_color[data-v-0c8cd55e]{color:#ff448f!important}[data-theme="theme1"] .cart_color[data-v-0c8cd55e]{border:1px solid #e93323}[data-theme="theme2"] .cart_color[data-v-0c8cd55e]{border:1px solid #fe5c2d}[data-theme="theme3"] .cart_color[data-v-0c8cd55e]{border:1px solid #42ca4d}[data-theme="theme4"] .cart_color[data-v-0c8cd55e]{border:1px solid #1db0fc}[data-theme="theme5"] .cart_color[data-v-0c8cd55e]{border:1px solid #ff448f}.payment-status[data-v-0c8cd55e]{background-color:#fff;margin:%?195?% %?30?% 0 %?30?%;border-radius:%?10?%;padding:%?1?% 0 %?28?% 0}.payment-status .icons[data-v-0c8cd55e]{font-size:%?70?%;width:%?140?%;height:%?140?%;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;text-shadow:0 4px 0 rgba(0,0,0,.1);border:%?6?% solid #f5f5f5;margin:%?-76?% auto 0 auto;background-color:#999}.payment-status .iconfont[data-v-0c8cd55e]{font-size:%?70?%;width:%?140?%;height:%?140?%;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;text-shadow:0 4px 0 rgba(0,0,0,.1);border:%?6?% solid #f5f5f5;margin:%?-76?% auto 0 auto;background-color:#999}.payment-status .iconfont.fail[data-v-0c8cd55e]{text-shadow:0 4px 0 #7a7a7a}.payment-status .status[data-v-0c8cd55e]{font-size:%?32?%;font-weight:700;text-align:center;margin:%?25?% 0 %?37?% 0}.payment-status .wrapper[data-v-0c8cd55e]{border:%?1?% solid #eee;margin:0 %?30?% %?47?% %?30?%;padding:%?35?% 0;border-left:0;border-right:0}.payment-status .wrapper .item[data-v-0c8cd55e]{font-size:%?28?%;color:#282828}.payment-status .wrapper .item ~ .item[data-v-0c8cd55e]{margin-top:%?20?%}.payment-status .wrapper .item .itemCom[data-v-0c8cd55e]{color:#666}.payment-status .returnBnt[data-v-0c8cd55e]{width:%?630?%;height:%?86?%;border-radius:%?50?%;color:#fff;font-size:%?30?%;text-align:center;line-height:%?86?%;margin:0 auto %?20?% auto}.cart-color[data-v-0c8cd55e]{color:theme;border:theme}[data-theme="theme1"] .cart-color[data-v-0c8cd55e]{color:#e93323!important}[data-theme="theme2"] .cart-color[data-v-0c8cd55e]{color:#fe5c2d!important}[data-theme="theme3"] .cart-color[data-v-0c8cd55e]{color:#42ca4d!important}[data-theme="theme4"] .cart-color[data-v-0c8cd55e]{color:#1db0fc!important}[data-theme="theme5"] .cart-color[data-v-0c8cd55e]{color:#ff448f!important}[data-theme="theme1"] .cart-color[data-v-0c8cd55e]{border:1px solid #e93323}[data-theme="theme2"] .cart-color[data-v-0c8cd55e]{border:1px solid #fe5c2d}[data-theme="theme3"] .cart-color[data-v-0c8cd55e]{border:1px solid #42ca4d}[data-theme="theme4"] .cart-color[data-v-0c8cd55e]{border:1px solid #1db0fc}[data-theme="theme5"] .cart-color[data-v-0c8cd55e]{border:1px solid #ff448f}',""]),t.exports=e},"460a":function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.openBargainSubscribe=function(){var t=uni.getStorageSync("tempID"+o[2]);return r(t)},e.openOrderSubscribe=function(){var t=uni.getStorageSync("tempID"+o[1]);return r(t)},e.openPaySubscribe=function(){var t=uni.getStorageSync("tempID"+o[0]);return r(t)},e.openPinkSubscribe=function(){var t=uni.getStorageSync("tempID"+o[3]);return r(t)},e.subscribe=r,a("bf0f");var o=["beforePay","afterPay","createBargain","pink"];function r(t){var e=wx;return new Promise((function(a,o){e.requestSubscribeMessage({tmplIds:t,success:function(t){return a(t)},fail:function(t){return a(t)}})}))}},9714:function(t,e,a){"use strict";var o=a("037d"),r=a.n(o);r.a},b327:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{attrs:{"data-theme":t.theme}},[a("v-uni-view",{staticClass:"payment-status"},[1===t.order_pay_info.paid?a("v-uni-view",{staticClass:"iconfont icons icon-duihao2 bg_color"}):t._e(),2===t.order_pay_info.paid?a("v-uni-view",{staticClass:"iconfont icons icon-iconfontguanbi"}):t._e(),"offline"!=t.order_pay_info.payType?a("v-uni-view",{staticClass:"status"},[t._v(t._s(2==t.status?"订单取消支付":t.errMsg?"订单支付异常":t.payResult))]):a("v-uni-view",{staticClass:"status"},[t._v("订单创建成功")]),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",[t._v("订单编号")]),a("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.orderId))])],1),a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",[t._v("下单时间")]),a("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.createTime?t.order_pay_info.createTime:"-"))])],1),a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",[t._v("支付方式")]),"weixin"==t.order_pay_info.payType?a("v-uni-view",{staticClass:"itemCom"},[t._v("微信支付")]):"yue"==t.order_pay_info.payType?a("v-uni-view",{staticClass:"itemCom"},[t._v("余额支付")]):"offline"==t.order_pay_info.payType?a("v-uni-view",{staticClass:"itemCom"},[t._v("线下支付")]):"alipay"==t.order_pay_info.payType?a("v-uni-view",{staticClass:"itemCom"},[t._v("支付宝支付")]):t._e()],1),a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",[t._v("支付金额")]),a("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.payPrice))])],1),t.order_pay_info.paid||"offline"==t.order_pay_info.payType?t._e():a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",[t._v("失败原因")]),a("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(2==t.status?"取消支付":t.msg))])],1)],1),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[a("v-uni-button",{staticClass:"returnBnt bg_color",attrs:{formType:"submit","hover-class":"none"}},[t._v("查看订单")])],1),t.order_pay_info.pinkId&&0!=t.order_pay_info.paid&&2!=t.status&&1!=t.status?a("v-uni-button",{staticClass:"returnBnt cart_color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPink(t.order_pay_info.pinkId)}}},[t._v("邀请好友参团")]):a("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[t._v("返回首页")])],1)],1)},r=[]},baf9:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("a0ac"),r=(a("460a"),a("dd2a")),i=a("8f59"),n=getApp(),c={components:{},data:function(){return{orderId:"",order_pay_info:{paid:0,_status:{}},isAuto:!1,isShowAuth:!1,status:0,msg:"",errMsg:!1,payResult:"订单查询中...",theme:n.globalData.theme}},computed:(0,i.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getOrderPayInfo()},deep:!0}},onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单支付状态"},{tab:3,url:1});this.orderId=t.order_id,this.status=t.status||0,this.isLogin?this.getOrderPayInfo():(0,r.toLogin)()},methods:{wechatQueryPay:function(){var t=this;(0,o.wechatQueryPayResult)(this.orderId).then((function(e){t.payResult="支付成功",uni.setNavigationBarTitle({title:"支付成功"}),t.order_pay_info.paid=1,uni.hideLoading()})).catch((function(e){t.order_pay_info.paid=2,t.errMsg=!0,t.msg=e,uni.hideLoading(),t.$util.Tips({title:e})}))},onLoadFun:function(){this.getOrderPayInfo()},getOrderPayInfo:function(){var t=this,e=this;uni.showLoading({title:"正在加载中"}),(0,o.getOrderDetail)(e.orderId).then((function(a){e.$set(e,"order_pay_info",a.data),"weixin"===a.data.payType&&!1===a.data.paid&&2!=t.status?setTimeout((function(){e.wechatQueryPay()}),2e3):(uni.setNavigationBarTitle({title:a.data.paid?"支付成功":"未支付"}),a.data.paid?(t.payResult="支付成功",t.order_pay_info.paid=1):(t.payResult="支付失败",t.order_pay_info.paid=2),uni.hideLoading())})).catch((function(t){uni.hideLoading()}))},goIndex:function(t){uni.switchTab({url:"/pages/index/index"})},goPink:function(t){uni.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+t})},goOrderDetails:function(t){uni.navigateTo({url:"/pages/order_details/index?order_id="+this.orderId})}}};e.default=c},c2ab:function(t,e,a){"use strict";a.r(e);var o=a("b327"),r=a("f953");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("9714");var n=a("828b"),c=Object(n["a"])(r["default"],o["b"],o["c"],!1,null,"0c8cd55e",null,!1,o["a"],void 0);e["default"]=c.exports},f953:function(t,e,a){"use strict";a.r(e);var o=a("baf9"),r=a.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a}}]);