(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_search-index","pages-index-components-promotion"],{"066c":function(t,e,a){var i=a("7d97");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("4258724c",i,!0,{sourceMap:!1,shadowMode:!1})},2624:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{"data-theme":t.theme}},[i("v-uni-view",{staticClass:"searchGood"},[i("v-uni-view",{staticClass:"search acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"input acea-row row-between-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-sousuo2"}),i("v-uni-input",{attrs:{type:"text",value:t.searchValue,focus:t.focus,placeholder:"点击搜索商品","placeholder-class":"placeholder",maxlength:"20"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.setValue.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"bnt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchBut.apply(void 0,arguments)}}},[t._v("搜索")])],1),i("v-uni-view",{staticClass:"title"},[t._v("热门搜索")]),i("v-uni-view",{staticClass:"list acea-row"},[t._l(t.hotSearchList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setHotSearchValue(e.title)}}},[t._v(t._s(e.title))])]}))],2),i("v-uni-view",{staticClass:"line"}),t.bastList.length>0?i("goodList",{attrs:{bastList:t.bastList}}):t._e(),t.bastList.length>0?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e()],1),i("v-uni-view",{staticClass:"noCommodity"},[0==t.bastList.length&&t.isbastList?i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:a("b67c")}})],1):t._e(),0==t.bastList.length?i("recommend",{attrs:{hostProduct:t.hostProduct}}):t._e()],1)],1)},n=[]},"2c03":function(t,e,a){"use strict";a.r(e);var i=a("7ca9"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"2c56":function(t,e){t.exports={type:"zoom-fade-out",duration:200}},"32db":function(t,e,a){"use strict";a.r(e);var i=a("3ff8"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"3ff8":function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa");var n=a("8f59"),o=a("de60"),s=(i(a("2c56")),{computed:(0,n.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(t){(0,o.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({animationType:"zoom-fade-out",animationDuration:200,url:"/pages/goods_details/index?id=".concat(t.id)})}))}}});e.default=s},"495c":function(t,e,a){"use strict";a.r(e);var i=a("a522"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"4bea":function(t,e,a){var i=a("9b58");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("415bbf2e",i,!0,{sourceMap:!1,shadowMode:!1})},"573e":function(t,e,a){"use strict";var i=a("4bea"),n=a.n(i);n.a},5973:function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*引入主题变色的scss文件*/\n/* 颜色变量 */\n/*\n@mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。\n*/\n/*定义全局颜色变量*/\n/*主色*/\n/* 辅色*/\n/* 价格色*/\n/*左侧按钮*/\n/*主渐变色*/\n/*辅色渐变*/\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/*字体颜色(少部分其他,不限于字体)*/\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-8986f3b0]{background-color:#fff!important}body.?%PAGE?%[data-v-8986f3b0]{background-color:#fff!important}.searchGood .search[data-v-8986f3b0]{padding-left:%?30?%;background-color:#fff!important}.searchGood .search[data-v-8986f3b0]{padding-top:%?20?%}.searchGood .search .input[data-v-8986f3b0]{width:%?598?%;background-color:#f7f7f7;border-radius:%?33?%;padding:0 %?35?%;box-sizing:border-box;height:%?66?%}.searchGood .search .input uni-input[data-v-8986f3b0]{width:%?472?%;font-size:%?26?%}.searchGood .search .input .placeholder[data-v-8986f3b0]{color:#bbb}.searchGood .search .input .iconfont[data-v-8986f3b0]{color:#000;font-size:%?35?%}.searchGood .search .bnt[data-v-8986f3b0]{width:%?120?%;text-align:center;height:%?66?%;line-height:%?66?%;font-size:%?30?%;color:#282828}.searchGood .title[data-v-8986f3b0]{font-size:%?28?%;color:#999;margin:%?50?% %?30?% %?25?% %?30?%}.searchGood .list[data-v-8986f3b0]{padding-left:%?10?%}.searchGood .list .item[data-v-8986f3b0]{font-size:%?26?%;color:#454545;padding:0 %?21?%;height:%?60?%;border-radius:%?30?%;line-height:%?60?%;border:%?1?% solid #aaa;margin:0 0 %?20?% %?20?%}.searchGood .line[data-v-8986f3b0]{border-bottom:%?1?% solid #eee;margin:%?20?% %?30?% 0 %?30?%}',""]),t.exports=e},"60dc":function(t,e,a){"use strict";var i=a("066c"),n=a.n(i);n.a},"6a46":function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.collectAdd=function(t,e){return n.default.post("collect/add",{id:t,category:void 0===e?"product":e})},e.collectAll=function(t,e){return n.default.post("collect/all",{id:t,category:void 0===e?"product":e})},e.collectDel=function(t){return n.default.post("collect/cancel/".concat(t))},e.collectDelete=function(t){return n.default.post("collect/delete",t)},e.getAttr=function(t){return n.default.get("product/sku/detail/"+t)},e.getCategoryList=function(){return n.default.get("category",{},{noAuth:!0})},e.getCollectUserList=function(t){return n.default.get("collect/user",t)},e.getGroomList=function(t,e){return n.default.get("index/product/"+t,e,{noAuth:!0})},e.getProductCode=function(t){return n.default.get("product/code/"+t,{})},e.getProductDetail=function(t,e){return n.default.get("product/detail/"+t+"?type="+e,{},{noAuth:!0})},e.getProductGood=function(){return n.default.get("product/good",{},{noAuth:!0})},e.getProductHot=function(t,e){return n.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})},e.getProductslist=function(t){return n.default.get("products",t,{noAuth:!0})},e.getReplyConfig=function(t){return n.default.get("reply/config/"+t,{},{noAuth:!0})},e.getReplyList=function(t,e){return n.default.get("reply/list/"+t,e,{noAuth:!0})},e.getReplyProduct=function(t){return n.default.get("reply/product/"+t,{},{noAuth:!0})},e.getSearchKeyword=function(){return n.default.get("search/keyword",{},{noAuth:!0})},e.postCartAdd=function(t){return n.default.post("cart/save",t,{})},e.productList=function(t){return n.default.get("product/list",t,{noAuth:!0})},e.storeListApi=function(t){return n.default.post("store/list",t,{},1)};var n=i(a("b55c"))},"71b1":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"recommend"},[a("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[a("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),a("v-uni-text",{staticClass:"name"},[t._v("热门推荐")]),a("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),a("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetail(e)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.image}}),e.activityH5&&"1"===e.activityH5.type?a("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒杀")]):t._e(),e.activityH5&&"2"===e.activityH5.type?a("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍价")]):t._e(),e.activityH5&&"3"===e.activityH5.type?a("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼团")]):t._e()],1),a("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.storeName))]),a("v-uni-view",{staticClass:"money"},[t._v("￥"),a("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},n=[]},"7ca9":function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("8f59"),o=a("de60"),s=i(a("2c56")),c={computed:(0,n.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(t){(0,o.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({animationType:s.default.type,animationDuration:s.default.duration,url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=c},"7d22":function(t,e,a){var i=a("5973");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("0134fa63",i,!0,{sourceMap:!1,shadowMode:!1})},"7d97":function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*引入主题变色的scss文件*/\n/* 颜色变量 */\n/*\n@mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。\n*/\n/*定义全局颜色变量*/\n/*主色*/\n/* 辅色*/\n/* 价格色*/\n/*左侧按钮*/\n/*主渐变色*/\n/*辅色渐变*/\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/*字体颜色(少部分其他,不限于字体)*/\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-163c1dac]{background-color:#fff}.recommend .title[data-v-163c1dac]{height:%?135?%;line-height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-163c1dac]{margin:0 %?28?%}.recommend .title .iconfont[data-v-163c1dac]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-163c1dac]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-163c1dac]{padding:0 %?30?%;padding-bottom:%?50?%}.recommend .recommendList .item[data-v-163c1dac]{width:%?335?%;margin-bottom:%?30?%}.recommend .recommendList .item .pictrue[data-v-163c1dac]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue uni-image[data-v-163c1dac]{width:100%;height:100%;border-radius:%?14?%}.recommend .recommendList .item .name[data-v-163c1dac]{font-size:%?28?%;color:#282828;margin-top:%?20?%}.money[data-v-163c1dac]{font-size:%?20?%;margin-top:%?8?%;font-weight:600;color:theme}[data-theme="theme1"] .money[data-v-163c1dac]{color:#f93323!important}[data-theme="theme2"] .money[data-v-163c1dac]{color:#fe5c2d!important}[data-theme="theme3"] .money[data-v-163c1dac]{color:#ff7600!important}[data-theme="theme4"] .money[data-v-163c1dac]{color:#fd502f!important}[data-theme="theme5"] .money[data-v-163c1dac]{color:#ff448f!important}.recommend .recommendList .item .money .num[data-v-163c1dac]{font-size:%?28?%}',""]),t.exports=e},"7e3f":function(t,e,a){"use strict";a.r(e);var i=a("71b1"),n=a("2c03");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("60dc");var s=a("828b"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"163c1dac",null,!1,i["a"],void 0);e["default"]=c.exports},"9b58":function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*引入主题变色的scss文件*/\n/* 颜色变量 */\n/*\n@mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。\n*/\n/*定义全局颜色变量*/\n/*主色*/\n/* 辅色*/\n/* 价格色*/\n/*左侧按钮*/\n/*主渐变色*/\n/*辅色渐变*/\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/*字体颜色(少部分其他,不限于字体)*/\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goodList .item[data-v-1aa8f454]{position:relative;padding-left:%?30?%}.money[data-v-1aa8f454]{font-size:%?26?%;font-weight:700;margin-top:%?50?%;color:theme}[data-theme="theme1"] .money[data-v-1aa8f454]{color:#f93323!important}[data-theme="theme2"] .money[data-v-1aa8f454]{color:#fe5c2d!important}[data-theme="theme3"] .money[data-v-1aa8f454]{color:#ff7600!important}[data-theme="theme4"] .money[data-v-1aa8f454]{color:#fd502f!important}[data-theme="theme5"] .money[data-v-1aa8f454]{color:#ff448f!important}.goodList .item .pictrue[data-v-1aa8f454]{width:%?180?%;height:%?180?%;position:relative}.goodList .item .pictrue uni-image[data-v-1aa8f454]{width:100%;height:100%;border-radius:%?6?%}.goodList .item .pictrue .numPic[data-v-1aa8f454]{position:absolute;left:%?7?%;top:%?7?%;width:%?50?%;height:%?50?%;border-radius:50%}.goodList .item .underline[data-v-1aa8f454]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #f5f5f5}.goodList .item:nth-last-child(1) .underline[data-v-1aa8f454]{border-bottom:0}.goodList .item .text[data-v-1aa8f454]{font-size:%?30?%;color:#222;width:%?489?%}.goodList .item .text .money .num[data-v-1aa8f454]{font-size:%?34?%}.goodList .item .text .vip-money[data-v-1aa8f454]{font-size:%?24?%;color:#282828;font-weight:700;margin-top:%?15?%}.goodList .item .text .vip-money uni-image[data-v-1aa8f454]{width:%?46?%;height:%?21?%;margin:0 %?22?% 0 %?5?%}.goodList .item .text .vip-money .num[data-v-1aa8f454]{font-size:%?22?%;color:#aaa;font-weight:400;margin:%?-2?% 0 0 0}.goodList .item .iconfont[data-v-1aa8f454]{position:absolute;right:%?30?%;width:%?50?%;height:%?50?%;border-radius:50%;font-size:%?30?%;bottom:%?38?%}.line_thr[data-v-1aa8f454]{text-decoration:line-through}',""]),t.exports=e},a522:function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c223");var n=a("6a46"),o=i(a("c801")),s=i(a("7e3f")),c=getApp(),r={components:{goodList:o.default,recommend:s.default},data:function(){return{hostProduct:[],searchValue:"",focus:!0,bastList:[],hotSearchList:[],first:0,limit:8,page:1,loading:!1,loadend:!1,loadTitle:"加载更多",hotPage:1,isScroll:!0,isbastList:!1,theme:c.globalData.theme}},onShow:function(){this.getRoutineHotSearch(),this.getHostProduct()},onReachBottom:function(){this.bastList.length>0?this.getProductList():this.getHostProduct()},methods:{getRoutineHotSearch:function(){var t=this;(0,n.getSearchKeyword)().then((function(e){t.$set(t,"hotSearchList",e.data)}))},getProductList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,n.getProductslist)({keyword:t.searchValue,page:t.page,limit:t.limit}).then((function(e){var a=e.data.list,i=a.length<t.limit;t.bastList=t.$util.SplitArray(a,t.bastList),t.$set(t,"bastList",t.bastList),t.loading=!1,t.loadend=i,t.loadTitle=i?"😕人家是有底线的~~":"加载更多",t.page=t.page+1,t.isbastList=!0})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},getHostProduct:function(){var t=this;this.isScroll&&(0,n.getProductHot)(t.hotPage,t.limit).then((function(e){t.isScroll=e.data.list.length>=t.limit,t.hostProduct=t.hostProduct.concat(e.data.list),t.hotPage+=1}))},setHotSearchValue:function(t){this.$set(this,"searchValue",t),this.page=1,this.loadend=!1,this.$set(this,"bastList",[]),this.getProductList()},setValue:function(t){this.$set(this,"searchValue",t.detail.value)},searchBut:function(){if(this.focus=!1,!(this.searchValue.length>0))return this.$util.Tips({title:"请输入要搜索的商品",icon:"none",duration:1e3,mask:!0});this.page=1,this.loadend=!1,this.$set(this,"bastList",[]),uni.showLoading({title:"正在搜索中"}),this.getProductList(),uni.hideLoading()}}};e.default=r},a7c27:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAAC6ElEQVRIS82WbSyVYRjHf4rQaKvYbDRWG01kc6ySlqSx0sb40Epj1E4rm3lZTRmVmpUNIXnpQzmrWLHSZotNG1JeOplsaNFo1RhSo+atl90PR952nIMT15dnu5/7+t+/5/rf13PfeozHYSAecASMJsb+x2MAqAPCgeapC+oB3sCz/0GhZo1eQAZ8VM0RYErAeZnBxPIZE5WTUATYKKC/AsBqANepFfuzAqAEQhOwfUnBTE2MGR4ZZWRkbDHfqB5Mf/UqPtVl09jSgffxxDkXKsqJQua4BZvdYRgbrWGgJY+k7KdcuJ4vzXffZU95fty03MEfQ9Q0vCc2qQBl04e5dOevWM41OcEBe7HccZq+ftHR/8JkrSFdb3LJvV9O1BWFWrCkrGJKK99iabEBGytzwkMOYmRogJ1HBN0932fCzQ/m6eZA6b1YgiIzefDkxTSBY357UKSG4eYfR21Dm1qw0LNZKAorJ/O93Z0ouRtD+MU73FKUaQ+msrP6dSsBp1KmCQgbt9luYqtHpDSuzsqZYKJyna8ySbhRSEJakfZgIkPYGejnhoWznMGfw5KIysaU2yXEJz/UGszaypz2qvTFgc1lp6+XC0U50ch8Ymhs7tQa7EyQF+mXQ/A9kUTJ84aFVUzY2VaVgbKpfdLOvNQwZI6bcTgQPSmqzsrisnrpAzauN5U2v4+nM9X17/A8msDYr98LAxNZKXFByAM9MXM6KYl0KXOl30LizccagbW2f6G755s0t7d/gNKKRqmZhobFYTMr5u9KVYqbix0Vjy7hL09GTw/JRrt9EbR3dmsENnPzz0UzZUxzMJHU8TKTitrxG4mDrRUyn/PT9LXpyiUFE3aGHvGQNBPSChEdOTWWDUxlp4Cxdg3jc9fXlQE2T/ml1+smDvFhXR7imoDoaM6szT8CGOhoMW1kZ4GJm+NObRR0NLcPMFNpi6v1fqB0hVyvgwGFgBNgIg4BVwF7wFBHFdFEdgg4BxT8BbkDeD1tInkgAAAAAElFTkSuQmCC"},b67c:function(t,e,a){t.exports=a.p+"static/images/noSearch.png"},bcfa:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goodList"},[t._l(t.bastList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"item acea-row row-between-wrapper",attrs:{"hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}}),e.activityH5&&"1"===e.activityH5.type?i("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("秒杀")]):t._e(),e.activityH5&&"2"===e.activityH5.type?i("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("砍价")]):t._e(),e.activityH5&&"3"===e.activityH5.type?i("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("拼团")]):t._e()],1),i("v-uni-view",{staticClass:"underline"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"line1"},[t._v(t._s(e.storeName))]),i("v-uni-view",{staticClass:"money"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1),e.vip_price&&e.vip_price>0?i("v-uni-view",{staticClass:"vip-money acea-row row-middle"},[t._v("￥"+t._s(e.vip_price||0)),i("v-uni-image",{attrs:{src:a("a7c27")}}),0==t.status?i("v-uni-text",{staticClass:"num"},[t._v("已售"+t._s(Number(e.sales)+Number(e.ficti)||0)+t._s(e.unitName))]):t._e(),1==t.status?i("v-uni-text",{staticClass:"num line_thr"},[t._v(t._s(e.otPrice))]):t._e()],1):i("v-uni-view",{staticClass:"vip-money acea-row row-middle"},[0==t.status?i("v-uni-text",{staticClass:"num"},[t._v("已售"+t._s(Number(e.sales)+Number(e.ficti)||0)+t._s(e.unitName))]):t._e(),1==t.status?i("v-uni-text",{staticClass:"num line_thr"},[t._v("￥"+t._s(e.otPrice))]):t._e()],1)],1)],1),i("v-uni-view",{staticClass:"iconfont icon-gengduo3"})],1)]}))],2)},n=[]},c801:function(t,e,a){"use strict";a.r(e);var i=a("bcfa"),n=a("32db");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("573e");var s=a("828b"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1aa8f454",null,!1,i["a"],void 0);e["default"]=c.exports},e6a3:function(t,e,a){"use strict";var i=a("7d22"),n=a.n(i);n.a},fc36:function(t,e,a){"use strict";a.r(e);var i=a("2624"),n=a("495c");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e6a3");var s=a("828b"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"8986f3b0",null,!1,i["a"],void 0);e["default"]=c.exports}}]);