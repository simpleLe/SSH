(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-web_page-index"],{"0f8c":function(t,e,n){"use strict";n.r(e);var i=n("ef86"),r=n("fb83");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);var u=n("828b"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},"96b8":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("8f59");var i={data:function(){return{windowH:0,windowW:0,webviewStyles:{progress:{color:"transparent"}},url:""}},onLoad:function(t){t.webUel&&(this.url=t.webUel),t.scene&&(this.url+="&scene=".concat(t.scene)),uni.setNavigationBarTitle({title:t.title});try{var e=uni.getSystemInfoSync();this.windowW=e.windowWidth,this.windowH=e.windowHeight}catch(n){}}};e.default=i},ef86:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-web-view",{staticClass:"web-view",style:{width:this.windowW+"px",height:this.windowH+"px"},attrs:{"webview-styles":this.webviewStyles,src:this.url}})},r=[]},fb83:function(t,e,n){"use strict";n.r(e);var i=n("96b8"),r=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a}}]);