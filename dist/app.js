webpackJsonp([7],[,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={clientWidth:document.documentElement.clientWidth,pxTorem:function(t){return t*this.clientWidth/750},getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),o=n.exec(e);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null},setTitle:function(t){document.title=t},getScrollTop:function(){return document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body?document.body.scrollTop:0},getClientHeight:function(){var t=0;return t=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight)},getScrollHeight:function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},getScrollData:function(t,e,n){var o=this;"function"==typeof n&&window.addEventListener("scroll",function(){e.p<e.total&&t.length<e.count&&o.getScrollTop()+o.getClientHeight()>=o.getScrollHeight()&&(e.p++,n())})},debounce:function(t,e,n){var o=this,i=arguments,a=void 0;return function(){var r=o,c=i,s=function(){a=null,n||t.apply(r,c)},l=n&&!a;clearTimeout(a),a=setTimeout(s,e),l&&t.apply(r,c)}}}},,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(0),a=o(i),r=n(2),c=o(r);a.default.use(c.default);var s={user:"",address_list:"",v_alert:{type:"suprise",show:!1,event:"close",msg:"",btn_text:"",cover_close:!0,callback:function(){}},v_confirm:{show:!1,msg:"",callback:function(){}},v_loading:{show:!1},order_list:[],order_list_params:{p:1,r:20,total:0,count:0}},l={toggleAlert:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.v_alert.show=!t.v_alert.show,t.v_alert.msg=e.msg,t.v_alert.callback=e.callback,t.v_alert.cover_close=e.cover_close,t.v_alert.btn_text=e.btn_text,t.v_alert.type=e.type},toggleConfirm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.v_confirm.show=e.show,t.v_confirm.msg=e.msg,t.v_confirm.callback=e.callback},toggleLoading:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.v_loading.show=e.show},getUserInfor:function(t,e){a.default.http.post(APP.HOST+"/get_user/"+APP.USER_ID,{token:APP.TOKEN,userid:APP.USER_ID}).then(function(n){t.user=n.data.data,e&&e()},function(t){})},getAddressList:function(t,e){a.default.http.post(APP.HOST+"/address_list/"+APP.USER_ID,{token:APP.TOKEN,userid:APP.USER_ID}).then(function(n){t.address_list=n.data.data,e&&e(n.data.data)},function(t){})},getOrderList:function(t){var e=t.order_list_params;e.token=window.APP.TOKEN,e.userid=window.APP.USER_ID,d.dispatch("toggleLoading",{show:!0}),a.default.http.post(APP.HOST+"/order_list/"+APP.USER_ID,e,{token:APP.TOKEN,userid:APP.USER_ID}).then(function(n){d.dispatch("toggleLoading");var o=n.data;e.p<=1&&(e.total=o.data.total,e.count=o.data.count),t.order_list=t.order_list.concat(o.data.list)},function(t){d.dispatch("toggleLoading")})},pageView:function(t,e){a.default.http.post(APP.HOST+"/page_view",{token:APP.TOKEN,user_id:APP.USER_ID,page_id:e,media_id:APP.MEDIA_ID,open_id:APP.OPEN_ID})},bannerView:function(t,e){a.default.http.post(APP.HOST+"/banner_view",{token:APP.TOKEN,userid:APP.USER_ID,user_id:APP.USER_ID,banner_id:e,media_id:APP.MEDIA_ID})},commendView:function(t,e){a.default.http.post(APP.HOST+"/commend_view",{token:APP.TOKEN,userid:APP.USER_ID,user_id:APP.USER_ID,commend_id:e,media_id:APP.MEDIA_ID})}},u={toggleAlert:function(t,e){var n=t.commit;n("toggleAlert",e)},toggleConfirm:function(t,e){var n=t.commit;n("toggleConfirm",e)},toggleLoading:function(t,e){var n=t.commit;n("toggleLoading",e)},getUserInfor:function(t,e){var n=t.commit;n("getUserInfor",e)},getAddressList:function(t,e){var n=t.commit;n("getAddressList",e)},pageView:function(t,e){var n=t.commit;n("pageView",e)},bannerView:function(t,e){var n=t.commit;n("bannerView",e)},commendView:function(t,e){var n=t.commit;n("commendView",e)},getOrderList:function(t){var e=t.commit;e("getOrderList")}},d=new c.default.Store({state:s,mutations:l,actions:u});t.exports=d},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(0),a=o(i),r=n(6),c=o(r),s=n(7),l=o(s);a.default.use(c.default);var u=new c.default({routes:[{path:"/",name:"index",component:function(t){n.e(0).then(function(){var e=[n(13)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/index",name:"index",component:function(t){n.e(0).then(function(){var e=[n(13)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/product_list",name:"product_list",component:function(t){n.e(5).then(function(){var e=[n(41)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/product_detail",name:"product_detail",component:function(t){n.e(3).then(function(){var e=[n(40)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/activity_detail",name:"activity_detail",component:function(t){n.e(2).then(function(){var e=[n(36)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/my_integral",name:"my_integral",component:function(t){n.e(6).then(function(){var e=[n(37)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order_list",name:"order_list",component:function(t){n.e(4).then(function(){var e=[n(39)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order_detail",name:"order_detail",component:function(t){n.e(1).then(function(){var e=[n(38)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"*",redirect:"/"}],mode:"history",scrollBehavior:function(t,e,n){return!1}});u.beforeEach(function(t,e,n){l.default.dispatch("pageView",t.name),l.default.state.v_alert.show&&l.default.dispatch("toggleAlert"),l.default.state.v_confirm.show&&l.default.dispatch("toggleConfirm"),n()}),t.exports=u},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){function n(){l.default.http.post(APP.HOST+"/share/"+APP.USER_ID,{token:APP.TOKEN,userid:APP.USER_ID}).then(function(t){e.dispatch("getUserInfor")},function(t){})}function o(t){l.default.http.post(APP.HOST+"/get_weixin_ticket/"+APP.MEDIA_ID,{token:APP.TOKEN,userid:APP.USER_ID}).then(function(e){e.data.status==APP.SUCCESS&&t(e.data.data.ticket)},function(t){})}function i(){var t=APP.MALL_HOST+"?id="+APP.MEDIA_ID,e=a.default.getParameterByName("activity_id"),n=a.default.getParameterByName("product_id");return e&&(t=t+"&activity_id="+e),n&&(t=t+"$product_id="+n),t}o(function(e){var n={appId:"wx871e120dd0a24149",ticket:e,noncestr:"helloworld",timestamp:(new Date).getTime(),signature:""},o="jsapi_ticket="+n.ticket+"&noncestr="+n.noncestr+"&timestamp="+n.timestamp+"&url="+location.href;n.signature=(0,c.default)(o),t.config({appId:n.appId,timestamp:n.timestamp,nonceStr:n.noncestr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]})}),t.ready(function(){t.onMenuShareTimeline({link:i(),imgUrl:"http://static.justtong.com/uploads/images/goods/20161025/142505580efac1ad494.jpg",success:function(){n()},cancel:function(){}}),t.onMenuShareAppMessage({link:i(),imgUrl:"http://static.justtong.com/uploads/images/goods/20161025/142505580efac1ad494.jpg",success:function(){n()},cancel:function(){}}),t.onMenuShareQQ({link:i(),imgUrl:"http://static.justtong.com/uploads/images/goods/20161025/142505580efac1ad494.jpg",success:function(){n()},cancel:function(){}}),t.onMenuShareWeibo({link:i(),imgUrl:"http://static.justtong.com/uploads/images/goods/20161025/142505580efac1ad494.jpg",success:function(){n()},cancel:function(){}}),t.onMenuShareQZone({link:i(),imgUrl:"http://static.justtong.com/uploads/images/goods/20161025/142505580efac1ad494.jpg",success:function(){n()},cancel:function(){}})}),t.error(function(t){console.log(t)})};var i=n(5),a=o(i),r=n(23),c=o(r),s=n(0),l=o(s),u=n(1),d=o(u);l.default.use(d.default),l.default.http.options.emulateJSON=!0},function(t,e,n){var o,i;n(14),o=n(19);var a=n(27);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},,function(t,e,n){var o,i;n(15);var a=n(28);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-3be137e7",t.exports=o},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";var o=n(24),i=n.n(o),a=n(25),r=n.n(a),c=n(26),s=n.n(c),l=n(2);n.n(l);e.default={name:"app",components:{vAlert:i.a,vConfirm:r.a,vLoading:s.a},mounted:function(){this.$store.dispatch("getUserInfor");1/devicePixelRatio;document.documentElement.style.fontSize=document.documentElement.clientWidth/10+"px"},computed:{v_alert:function(){return this.$store.state.v_alert},v_confirm:function(){return this.$store.state.v_confirm},v_loading:function(){return this.$store.state.v_loading}}}},function(t,e,n){"use strict";e.default={props:{show:{type:Boolean,default:!1},type:{type:String,default:"suprise"},msg:String,coverClose:{type:Boolean,default:!0},btnText:{type:String,default:"关闭"},callback:Function},computed:{icon_class:function(){return"suprise"==this.type?"icon-warn":"correct"==this.type?"icon-correct-circle-hollow":"error"==this.type?"icon-error-circle":void 0}},methods:{func:function(){this.$store.dispatch("toggleAlert",{msg:this.msg,btn_text:this.btnText,type:this.type,cover_close:this.coverClose}),this.callback&&this.callback()}}}},function(t,e,n){"use strict";e.default={name:"v-confirm",props:{show:!1,toggleConfirm:Function,msg:{type:String,default:"你确定要操作吗?"},callback:Function},methods:{func:function(){this.callback?this.callback():this.close()},close:function(){this.$store.dispatch("toggleConfirm",{msg:this.msg,show:!1})}}}},function(t,e,n){"use strict";var o=n(12),i=n.n(o);e.default={components:{vSpinner:i.a},props:{show:{type:Boolean,default:!1}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){function e(t){return s(n(c(t)))}function n(t){for(var e=t,n=Array(80),c=1732584193,s=-271733879,l=-1732584194,u=271733878,d=-1009589776,f=0;f<e.length;f+=16){for(var p=c,m=s,h=l,v=u,g=d,_=0;_<80;_++){_<16?n[_]=e[f+_]:n[_]=r(n[_-3]^n[_-8]^n[_-14]^n[_-16],1);var P=a(a(r(c,5),o(_,s,l,u)),a(a(d,n[_]),i(_)));d=u,u=l,l=r(s,30),s=c,c=P}c=a(c,p),s=a(s,m),l=a(l,h),u=a(u,v),d=a(d,g)}return new Array(c,s,l,u,d)}function o(t,e,n,o){return t<20?e&n|~e&o:t<40?e^n^o:t<60?e&n|e&o|n&o:e^n^o}function i(t){return t<20?1518500249:t<40?1859775393:t<60?-1894007588:-899497514}function a(t,e){var n=(65535&t)+(65535&e),o=(t>>16)+(e>>16)+(n>>16);return o<<16|65535&n}function r(t,e){return t<<e|t>>>32-e}function c(t){for(var e=(t.length+8>>6)+1,n=new Array(16*e),o=0;o<16*e;o++)n[o]=0;for(o=0;o<t.length;o++)n[o>>2]|=t.charCodeAt(o)<<24-8*(3&o);return n[o>>2]|=128<<24-8*(3&o),n[16*e-1]=8*t.length,n}function s(t){for(var e=l?"0123456789ABCDEF":"0123456789abcdef",n="",o=0;o<4*t.length;o++)n+=e.charAt(t[o>>2]>>8*(3-o%4)+4&15)+e.charAt(t[o>>2]>>8*(3-o%4)&15);return n}var l=0;return e(t)}},function(t,e,n){var o,i;n(16),o=n(20);var a=n(29);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-7b1b2b2a",t.exports=o},function(t,e,n){var o,i;n(17),o=n(21);var a=n(30);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-a5fa7de4",t.exports=o},function(t,e,n){var o,i;n(18),o=n(22);var a=n(31);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-eaadc4ec",t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("router-view")," ",e("v-alert",{attrs:{show:t.v_alert.show,msg:t.v_alert.msg,callback:t.v_alert.callback,type:t.v_alert.type,"cover-close":t.v_alert.cover_close,"btn-text":t.v_alert.btn_text}})," ",e("v-confirm",{attrs:{show:t.v_confirm.show,msg:t.v_confirm.msg,callback:t.v_confirm.callback}})," ",e("v-loading",{attrs:{show:t.v_loading.show}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"sk-fading-circle"},[e("div",{staticClass:"sk-circle1 sk-circle"})," ",e("div",{staticClass:"sk-circle2 sk-circle"})," ",e("div",{staticClass:"sk-circle3 sk-circle"})," ",e("div",{staticClass:"sk-circle4 sk-circle"})," ",e("div",{staticClass:"sk-circle5 sk-circle"})," ",e("div",{staticClass:"sk-circle6 sk-circle"})," ",e("div",{staticClass:"sk-circle7 sk-circle"})," ",e("div",{staticClass:"sk-circle8 sk-circle"})," ",e("div",{staticClass:"sk-circle9 sk-circle"})," ",e("div",{staticClass:"sk-circle10 sk-circle"})," ",e("div",{staticClass:"sk-circle11 sk-circle"})," ",e("div",{staticClass:"sk-circle12 sk-circle"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("section",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"v-alert"},[e("div",{staticClass:"bg-cover"},[e("div",{staticClass:"modal bg-white"},[e("div",{staticClass:"modal-content text-center text-large"},[e("i",{class:["icon","text-red","iconfont","text-bold",t.icon_class]})," ",e("p",{staticClass:"msg"},[t._s(t.msg)])," ",e("button",{staticClass:"btn btn-red btn-large",on:{click:function(e){t.func()}}},[t._s(t.btnText)])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("section",{staticClass:"v-confirm"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"bg-cover"})," ",e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"v-confirm-content"},[e("div",{staticClass:" msg"},[t._s(t.msg)])," ",e("div",{staticClass:"btns"},[e("div",{staticClass:"pull-left bg-white",on:{click:t.close}},["取消"])," ",e("div",{staticClass:"pull-right text-white",on:{click:function(e){t.func()}}},["确定"])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"v-loading"},[e("v-spinner")])},staticRenderFns:[]}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t?(window.APP.TOKEN=localStorage[t+"-token"],window.APP.USER_ID=localStorage[t+"-user_id"],window.APP.MEDIA_ID=localStorage[t+"-media_id"],window.APP.IMALL_TITLE=localStorage[t+"-imall-title"],window.APP.OPEN_ID=localStorage[t+"-open_id"]):(window.APP.TOKEN=m.default.getParameterByName("token"),window.APP.USER_ID=m.default.getParameterByName("userid"),window.APP.MEDIA_ID=m.default.getParameterByName("mediaid"),window.APP.IMALL_TITLE=m.default.getParameterByName("imall_title"),window.APP.OPEN_ID=m.default.getParameterByName("open_id")),console.log("login success"),m.default.setTitle(window.APP.IMALL_TITLE),_.default.attach(document.body),(0,b.default)(w.default,v.default),r.default.use(u.default),r.default.http.options.emulateJSON=!0,r.default.http.options.headers={"Token-Key":window.APP.TOKEN,"Media-Id":window.APP.MEDIA_ID},new r.default({el:"#app",render:function(t){return t(s.default)},router:f.default,store:v.default})}var a=n(0),r=o(a),c=n(10),s=o(c),l=n(1),u=o(l),d=n(8),f=o(d),p=n(5),m=o(p),h=n(7),v=o(h),g=n(3),_=o(g),P=n(4),w=o(P),y=n(9),b=o(y);if(window.APP={APP_NAME:"积分兑换",HOST:"http://test.integral.api.justtong.com/imall",MALL_HOST:"http://test.imall.justtong.com",SUCCESS:1e4,PERPAGE:20,TOKEN:"",MEDIA_ID:""},m.default.getParameterByName("token"))i();else{var A=encodeURIComponent(APP.MALL_HOST),E=m.default.getParameterByName("id"),S=m.default.getParameterByName("activity_id");S?(console.log(APP.HOST+"/weixin/"+E+"?callback="+A+"&activity_id="+S),location.href=APP.HOST+"/weixin/"+E+"?callback="+A+"&activity_id="+S):location.href=APP.HOST+"/weixin/"+E+"?callback="+A}},,function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=f[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(s(o.parts[a],e))}else{for(var r=[],a=0;a<o.parts.length;a++)r.push(s(o.parts[a],e));f[o.id]={id:o.id,refs:1,parts:r}}}}function o(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],r=i[1],c=i[2],s=i[3],l={css:r,media:c,sourceMap:s};n[a]?n[a].parts.push(l):e.push(n[a]={id:a,parts:[l]})}return e}function i(t,e){var n=h(),o=_[_.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),_.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=_.indexOf(t);e>=0&&_.splice(e,1)}function r(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function s(t,e){var n,o,i;if(e.singleton){var s=g++;n=v||(v=r(e)),o=l.bind(null,n,s,!1),i=l.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=d.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=r(e),o=u.bind(null,n),i=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function l(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=P(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function u(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var f={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,_=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=o(t);return n(i,e),function(t){for(var a=[],r=0;r<i.length;r++){var c=i[r],s=f[c.id];s.refs--,a.push(s)}if(t){var l=o(t);n(l,e)}for(var r=0;r<a.length;r++){var s=a[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var P=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}],[32]);