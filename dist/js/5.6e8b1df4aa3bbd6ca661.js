webpackJsonp([5],{118:function(e,t,n){"use strict";(function(t){function i(e){return e&&e.__esModule?e:{default:e}}var o=n(3),r=i(o),a=n(119),c=i(a),s=n(6),u=i(s);e.exports=function(){function e(e){var r=i.title||t.TITLE,a=i.desc||"",s=o,u=i.img||t.LOGO,d=t.APPID,l=e.timestamp,f=e.noncestr,p=e.signature;c.default.config({appId:d,timestamp:l,nonceStr:f,signature:p,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),c.default.error(function(e){}),c.default.checkJsApi({jsApiList:["onMenuShareTimeline"],success:function(e){}}),c.default.ready(function(){c.default.onMenuShareTimeline({title:r,desc:a,link:s,imgUrl:u,success:function(){n()}}),c.default.onMenuShareAppMessage({title:r,desc:a,link:s,imgUrl:u,success:function(){n()}}),c.default.onMenuShareQQ({title:r,desc:a,link:s,imgUrl:u,success:function(){n()}}),c.default.onMenuShareWeibo({title:r,desc:a,link:s,imgUrl:u,success:function(){n()}}),c.default.onMenuShareQZone({title:r,desc:a,link:s,imgUrl:u,success:function(){n()}})})}function n(){r.default.http.post(t.HOST+"/share/"+t.USER_ID,{token:t.TOKEN,userid:t.USER_ID,media_id:t.MEDIA_ID}).then(function(e){u.default.dispatch("getUserInfor")})}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=location.href.split("#")[0];i.router&&"index"!==i.router.name&&(o+="#"+i.router.fullPath),u.default.dispatch("changeCurrentSignature",i.router.name),function(e){return new Promise(function(n,i){r.default.http.post(t.HOST+"/get_signature",{token:t.TOKEN,userid:t.USER_ID,media_id:t.MEDIA_ID,url:e}).then(function(e){var i=e.data;i.status===t.SUCCESS&&n&&n(i)},function(e){i&&i(e.data)})})}(o).then(function(t){e(t.data)})}}).call(t,n(5))},119:function(e,t){!function(t,n){e.exports=function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(n),function(e){c(t,e,i)}):d(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),c(t,e,n)}):i?d(t,i):d(t,n)}function o(e){return e=e||{},e.appId=b.appId,e.verifyAppId=b.appId,e.verifySignType="sha1",e.verifyTimestamp=b.timestamp+"",e.verifyNonceStr=b.nonceStr,e.verifySignature=b.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=s(e,i),t.errMsg=i),n=n||{},n._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",b.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function s(e,t){var n=e,i=h[n];i&&(n=i);var o="ok";if(t){var r=t.indexOf(":");o=t.substring(r+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t=n+":"+o}function u(e){if(e){for(var t=0,n=e.length;n>t;++t){var i=e[t],o=g[i];o&&(e[t]=o)}return e}}function d(e,t){if(!(!b.debug||t&&t.isInnerInvoke)){var n=h[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(e){if(!(k||I||b.debug||"6.0.2">L||P.systemType<0)){var t=new Image;P.appId=b.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,_.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;t.src=n}})}}function f(){return(new Date).getTime()}function p(t){x&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){_.invoke||(_.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(n),i)},_.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}if(!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in g)e[g[t]]=t;return e}(),v=e.document,S=v.title,y=navigator.userAgent.toLowerCase(),T=navigator.platform.toLowerCase(),k=!(!T.match("mac")&&!T.match("win")),I=-1!=y.indexOf("wxdebugger"),x=-1!=y.indexOf("micromessenger"),w=-1!=y.indexOf("android"),A=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),L=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:A?1:w?2:-1,clientVersion:L,url:encodeURIComponent(location.href)},b={},O={_completes:[]},E={state:0,data:{}};p(function(){M.initEndTime=f()});var V=!1,C=[],_={config:function(e){b=e,d("config",e);var t=!1!==b.check;p(function(){if(t)n(g.config,{verifyJsApiList:u(b.jsApiList)},function(){O._complete=function(e){M.preVerifyEndTime=f(),E.state=1,E.data=e},O.success=function(e){P.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):E.state=-1};var e=O._completes;return e.push(function(){l()}),O.complete=function(t){for(var n=0,i=e.length;i>n;++n)e[n]();O._completes=[]},O}()),M.preVerifyStartTime=f();else{E.state=1;for(var e=O._completes,i=0,o=e.length;o>i;++i)e[i]();O._completes=[]}}),b.beta&&m()},ready:function(e){0!=E.state?e():(O._completes.push(e),!x&&b.debug&&e())},error:function(e){"6.0.2">L||(-1==E.state?e(E.data):O._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=h[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:u(e.jsApiList)},function(){return e._complete=function(e){if(w){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){i(g.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||S,desc:e.title||S,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(g.onMenuShareAppMessage,{complete:function(){n("sendAppMessage",{title:e.title||S,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(g.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||S,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(g.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||S,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(g.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||S,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(w){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){n(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,n("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(V=!1,C.length>0){var t=C.shift();wx.getLocalImgData(t)}},e}())):C.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(g.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},n("closeWindow",{},e)},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},n("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(A){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e}())},openAddress:function(e){n(g.openAddress,{},function(){return e._complete=function(e){e=a(e)},e}())},openProductSpecificView:function(e){n(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],o=0,r=t.length;r>o;++o){var a=t[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}n(g.addCard,{card_list:i},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var n=0,i=t.length;i>n;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){n("chooseCard",{app_id:b.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,i=[],o=0,r=t.length;r>o;++o){var a=t[o],c={card_id:a.cardId,code:a.code};i.push(c)}n(g.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(g.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){n(g.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){n(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(g.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},J=1,j={};return v.addEventListener("error",function(e){if(!w){var t=e.target,n=t.tagName,i=t.src;if("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){if(-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=J++,t["wx-id"]=o),j[o])return;j[o]=!0,wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!w){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(j[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=_),_}}(t)}(window)},121:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"backTop",data:function(){return{show:!1,scrollEvent:""}},created:function(){this.scrollEvent=this.getScrollEvent(),window.addEventListener("scroll",this.scrollEvent)},computed:{router_state:function(){return this.$parent.router_state||{}}},watch:{router_state:function(e){"leave"===e?window.removeEventListener("scroll",this.scrollEvent):"enter"===e&&window.addEventListener("scroll",this.scrollEvent)}},methods:{backTop:function(){var t=e.getScrollTop(),n=0,i=e.getClientHeight(),o=window.setInterval(function(){t>=0?(n=t/i*50,t-=n>2?n:2,window.scrollTo(0,t)):window.clearInterval(o)},10)},getScrollEvent:function(){var t=this,n=e.getClientHeight();return e.debounce(function(){t.show=e.getScrollTop()>1.5*n},500,500)}}}}).call(t,n(4))},123:function(e,t,n){"use strict";e.exports=n(134)},125:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".v-back-top[data-v-adc712ee]{position:fixed;right:.5rem;bottom:.5rem;width:.94rem;height:.94rem}.fade-enter-active[data-v-adc712ee],.fade-leave-active[data-v-adc712ee]{transition:opacity .3s ease}.fade-enter[data-v-adc712ee],.fade-leave-active[data-v-adc712ee]{opacity:0}",""])},127:function(e,t,n){var i=n(125);"string"==typeof i&&(i=[[e.i,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},129:function(e,t){e.exports="data:image/png;base64,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"},134:function(e,t,n){n(127);var i=n(1)(n(121),n(135),"data-v-adc712ee",null);e.exports=i.exports},135:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:" v-back-top ",attrs:{src:n(129)},on:{click:e.backTop}})])},staticRenderFns:[]}},17:function(e,t,n){"use strict";e.exports=n(578)},217:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0});var o=n(123),r=n.n(o),a=n(118),c=n.n(a);t.default={components:{vBackTop:r.a,vItemSmall:function(e){n.e(32).then(function(){var t=[n(573)];e.apply(null,t)}.bind(this)).catch(n.oe)},vItemList:function(e){n.e(33).then(function(){var t=[n(572)];e.apply(null,t)}.bind(this)).catch(n.oe)},vItemLarge:function(e){n.e(34).then(function(){var t=[n(571)];e.apply(null,t)}.bind(this)).catch(n.oe)},vSubjectOne:function(e){n.e(56).then(function(){var t=[n(575)];e.apply(null,t)}.bind(this)).catch(n.oe)},vSubjectTwo:function(e){n.e(55).then(function(){var t=[n(576)];e.apply(null,t)}.bind(this)).catch(n.oe)},vAdvList:function(e){n.e(58).then(function(){var t=[n(568)];e.apply(null,t)}.bind(this)).catch(n.oe)},vAdvSlide:function(e){n.e(30).then(function(){var t=[n(569)];e.apply(null,t)}.bind(this)).catch(n.oe)},vTitle:function(e){n.e(54).then(function(){var t=[n(577)];e.apply(null,t)}.bind(this)).catch(n.oe)},vIcon:function(e){n.e(42).then(function(){var t=[n(570)];e.apply(null,t)}.bind(this)).catch(n.oe)},vSpace:function(e){n.e(57).then(function(){var t=[n(574)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{framework:[],router_state:""}},computed:{guide_state:function(){return this.$store.state.index.guide_state}},created:function(){this.getLayOut()},activated:function(){"index"!==this.$store.state.current_signature_page&&c()({router:this.$route}),this.router_state="enter";var e=this.$store.state.position[this.$route.name];e&&window.scrollTo(0,e)},beforeRouteLeave:function(t,n,i){this.router_state="leave",this.$store.dispatch("savePosition",function(t){t[n.name]=e.getScrollTop()}),i()},methods:{getLayOut:function(){var t=this;this.$store.dispatch("toggleLoading"),this.$http.post(i.HOST+"/index",{token:i.TOKEN,user_id:i.USER_ID,media_id:i.MEDIA_ID}).then(function(n){t.$store.dispatch("toggleLoading");var o=n.data;o.status===i.SUCCESS&&"Array"===e.getTypeOf(o.data)&&o.data.length&&e.syncLoadArray(t.framework,o.data)},function(){t.$store.dispatch("toggleLoading")})},getComponent:function(e,t){var n=[["vItemLarge","vItemSmall","vItemList"],["vSubjectOne","vSubjectTwo"],["vAdvSlide","vAdvList"]];return 4===e?"vTitle":5===e?"vSpace":6===e?"vIcon":n[e-1][t-1]},routerLink:function(e,t){if(!e)return void console.log("缺少item");if(!t)return void console.log("缺少layout");var n="";if(this.index_view(e,t),6===t.component_type)return void(1===e.is_inner_url?this.$router.push({name:e.url}):2===e.is_inner_url&&(location.href=e.url));1===e.item_type?n={name:"product_detail",query:{product_id:e.item_id,integral:e.integral>>0}}:2===e.item_type?n={name:"activity_detail",query:{activity_id:e.item_id}}:3===e.item_type?n={name:"subject_detail",query:{subject_id:e.item_id}}:4===e.item_type&&(location.href=e.url),this.$router.push(n)},index_view:function(e,t){this.$http.post(i.HOST+"/index_view",{token:i.TOKEN,user_id:i.USER_ID,media_id:i.MEDIA_ID,open_id:i.OPEN_ID,item_id:e.item_id,item_type:e.item_type,item_title:e.title,component_id:e.component_id,component_type:t.component_type})}}}}).call(t,n(4),n(5))},279:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".index[data-v-16a9f531]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100%;background-color:#f2f3f4}.index-content[data-v-16a9f531]{-webkit-flex:1;-ms-flex:1;flex:1}.cover[data-v-16a9f531]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.76)}",""])},344:function(e,t,n){var i=n(279);"string"==typeof i&&(i=[[e.i,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},578:function(e,t,n){n(344);var i=n(1)(n(217),n(600),"data-v-16a9f531",null);e.exports=i.exports},600:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index"},[n("transition-group",{staticClass:"index-content",attrs:{tag:"div",name:"slide-fade"}},e._l(e.framework,function(t){return n(e.getComponent(t.component_type,t.layout_type),{key:"layout.id",tag:"component",attrs:{layout:t,"router-link":e.routerLink}})})),e._v(" "),n("v-support"),e._v(" "),e.guide_state?n("div",{staticClass:"cover"}):e._e(),e._v(" "),n("v-back-top")],1)},staticRenderFns:[]}}});