webpackJsonp([4],{112:function(t,e,o){o(124);var a=o(2)(o(116),o(131),"data-v-c5ac4128",null);t.exports=a.exports},113:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vIntroduction",props:{title:String,content:String}}},116:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{togglePopup:Function,callback:Function,show:{type:Boolean,default:!1}},methods:{close:function(){this.callback?this.callback():this.togglePopup()}}}},118:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".v-introduction[data-v-a2f982ec]{padding:0 .4rem;margin-top:.26667rem;background-color:#fff;border-bottom:1px solid #d3d4d6;text-align:justify}.v-introduction h3[data-v-a2f982ec]{line-height:1.01333rem;color:#646565;border-bottom:1px solid #f2f3f4}.v-introduction .content[data-v-a2f982ec]{padding:.26667rem 0}",""])},120:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".v-popup .v-popup-content[data-v-c5ac4128]{position:fixed;bottom:0;left:0;right:0;border-top:1px solid #f2f3f4;z-index:2}.v-popup .close-popup[data-v-c5ac4128]{position:absolute;right:0;top:0;padding-right:.26667rem;padding-top:.26667rem;color:#ff5000}.v-popup .bg-cover[data-v-c5ac4128]{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1}.v-popup .iconfont[data-v-c5ac4128]{font-size:.53333rem}.popup-enter-active[data-v-c5ac4128],.popup-leave-active[data-v-c5ac4128]{transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.popup-enter[data-v-c5ac4128],.popup-leave-active[data-v-c5ac4128]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}",""])},122:function(t,e,o){var a=o(118);"string"==typeof a&&(a=[[t.i,a,""]]);o(1)(a,{});a.locals&&(t.exports=a.locals)},124:function(t,e,o){var a=o(120);"string"==typeof a&&(a=[[t.i,a,""]]);o(1)(a,{});a.locals&&(t.exports=a.locals)},125:function(t,e,o){o(122);var a=o(2)(o(113),o(129),"data-v-a2f982ec",null);t.exports=a.exports},129:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"v-introduction"},[o("h3",[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"content"},[o("v-simditor",[o("article",{domProps:{innerHTML:t._s(t.content)}})])],1)])},staticRenderFns:[]}},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"v-popup"},[o("transition",{attrs:{name:"popup"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"v-popup-content"},[o("i",{staticClass:"close-popup iconfont icon-close-circle",on:{click:t.close}}),t._v(" "),t._t("default")],2)]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"bg-cover"})],1)},staticRenderFns:[]}},165:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=o(112),i=o.n(a);e.default={name:"recharge",components:{vPopup:i.a},props:{productDetail:{type:Object,default:{}}},data:function(){return{flow_list:["30M","70M","150M","500M","1024M","2048M"],phone:"",state:"ready",flow_infor:"",in_exchange:!1,popup_show:!1}},computed:{company:function(){return this.flow_infor?this.flow_infor.company:""}},watch:{phone:function(t){this.state=/^1[34578]\d{9}$/.test(t)?"active":"ready"},state:function(t,e){"active"==t&&"ready"==e?this.getFlows():"ready"==t&&(this.flow_infor="")}},methods:{exchange:function(){var e=this;this.in_exchange||(this.in_exchange=!0,this.$store.dispatch("toggleLoading"),this.$http.post(t.HOST+"/exchange_flows_recharge/"+this.phone,{token:t.TOKEN,userid:t.USER_ID,media_id:t.MEDIA_ID,user_id:t.USER_ID,product_id:this.productDetail.id,companytype:this.flow_infor.companytype,flows:this.flow_infor.flows}).then(function(o){e.$store.dispatch("toggleLoading");var a=o.data,i="";i=a.status==t.SUCCESS?a.data.message:a.info,e.$store.dispatch("toggleAlert",{msg:i,callback:function(){e.in_exchange=!1}})},function(){e.$store.dispatch("toggleLoading")}))},getFlows:function(){var e=this;this.$http.post(t.HOST+"/check_flows_phone/"+this.phone,{token:t.TOKEN,userid:t.USER_ID,media_id:t.MEDIA_ID}).then(function(o){var a=o.data;a.status==t.SUCCESS&&(e.flow_infor=a.data)})},togglePopup:function(){"active"==this.state&&(this.popup_show=!this.popup_show)}}}}).call(e,o(3))},166:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=o(125),i=o.n(a),n=o(188),r=o.n(n);e.default={name:"productDetail",components:{vIntroduction:i.a,recharge:r.a},data:function(){return{product_id:"",product_detail:"",order_detail_id:"",content_show:!1,is_recharge:!1}},computed:{user:function(){return this.$store.state.user},integral_enough:function(){return this.user.integral>>0>=this.integral},integral:function(){return this.$route.query.integral||this.product_detail.integral>>0||0},product_name:function(){return this.$route.query.name||this.product_detail.name}},watch:{order_detail_id:function(){this.$store.dispatch("getUserInfor"),this.$store.dispatch("toggleAlert",{close_btn:!0,msg:"获得"+this.product_name,type:"img",img:this.product_detail.pic_thumb,btn_text:"查看",callback:this.toOrderDetail})}},created:function(){this.product_id=this.$route.query.product_id,this.getProductDetail()},methods:{getProductDetail:function(){var e=this;this.$store.dispatch("toggleLoading"),this.$http.post(t.HOST+"/product_detail_l/"+this.product_id,{token:t.TOKEN,media_id:t.MEDIA_ID,user_id:t.USER_ID,open_id:t.OPEN_ID}).then(function(t){e.$store.dispatch("toggleLoading");var o=t.data;e.product_detail=o.data,8===e.product_detail.type&&(e.is_recharge=!0)},function(t){e.$store.dispatch("toggleLoading")})},exchange:function(){var t=this;this.$store.dispatch("toggleConfirm",{msg:"确认兑换该商品吗?",callback:function(){t.order().then(function(e){t.order_detail_id=e.data.id}).catch(function(e){t.$store.dispatch("toggleAlert",{msg:e.info})})}})},order:function(){var e=this;return new Promise(function(o,a){e.$store.dispatch("toggleLoading"),e.$http.post(t.HOST+"/product_order/"+e.product_id,{token:t.TOKEN,user_id:t.USER_ID}).then(function(i){e.$store.dispatch("toggleLoading");var n=i.data;n.status==t.SUCCESS?o(n):a(n)},function(t){e.$store.dispatch("toggleLoading"),a(t.data)})})},toOrderDetail:function(){this.$router.push({name:"order_detail",query:{order_id:this.order_detail_id}})}}}}).call(e,o(3))},188:function(t,e,o){"use strict";t.exports=o(377)},207:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".banner[data-v-3aecc88e]{width:10rem;height:5.6rem}main[data-v-3aecc88e]{background-color:#fff;border-bottom:1px solid #d3d4d6}.form-control[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:1.22667rem;margin:0 .32rem;padding:0 .21333rem;border-bottom:1px solid #f2f3f4;font-size:.45333rem}.form-control input[data-v-3aecc88e]{-webkit-flex:1;-ms-flex:1;flex:1;border:none}.form-control span[data-v-3aecc88e]{color:#a9aaae}.flow-box[data-v-3aecc88e]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:3.78667rem;padding:.4rem .53333rem 0}.flow-box[data-v-3aecc88e],.flow-box li[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none}.flow-box li[data-v-3aecc88e]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:2.81333rem;height:1.54667rem;border:1px solid #a9aaae;border-radius:.13333rem;font-size:.48rem}.flow-box li.ready[data-v-3aecc88e]{color:#ff5000;border-color:#ff5000}.flow-box li.active[data-v-3aecc88e]{color:#fff;background-color:#ff5000;border-color:#ff5000}.flow-box li[data-v-3aecc88e]:nth-child(3),.flow-box li[data-v-3aecc88e]:nth-child(6){margin-right:0}.notice[data-v-3aecc88e]{line-height:1.33333rem;text-align:center}.exchange[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1.49333rem;margin:.73333rem .46667rem;border-radius:.13333rem;font-size:.48rem}.exchange span[data-v-3aecc88e]{padding:0 .2rem}.exchange s[data-v-3aecc88e]{color:#c5c5c5;font-size:.32rem;-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}.popup-content[data-v-3aecc88e]{padding-bottom:.46667rem;background-color:#f2f3f4}.popup-content h1[data-v-3aecc88e]{text-align:center;line-height:1.52rem;color:#3d4244;background-color:#fff}.popup-content ul[data-v-3aecc88e]{background-color:#fff;list-style:none;margin-bottom:.46667rem}.popup-content li[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1.28rem;margin:0 .33333rem;list-style:none;border-top:1px solid #f2f3f4;color:#646565}.popup-content strong[data-v-3aecc88e]{padding:0 .6rem 0 .10667rem;color:#646565;font-weight:400}.popup-content .integral[data-v-3aecc88e]{color:#ff5000}.popup-content .exchange[data-v-3aecc88e]{margin:0 .46667rem}",""])},224:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".product-detail[data-v-f2cf4366]{min-height:100%;padding-bottom:1.13333rem;background-color:#f2f3f4}.banner[data-v-f2cf4366]{width:10rem;height:5.33333rem}.title[data-v-f2cf4366]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:1.86667rem;padding-left:.4rem;background-color:#fff;border-bottom:1px solid #d3d4d6}.title h1[data-v-f2cf4366]{font-size:.45333rem}.title h3[data-v-f2cf4366]{display:inline-block;color:#ff5000}.title .number[data-v-f2cf4366]{font-size:.48rem}.title s[data-v-f2cf4366]{padding-left:.4rem;color:#6e6f6f;-webkit-transform:scale(.6) translateY(10%);-ms-transform:scale(.6) translateY(10%);transform:scale(.6) translateY(10%);display:inline-block;-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left}.main[data-v-f2cf4366]{padding-bottom:1.33333rem}.sticky[data-v-f2cf4366]{position:fixed;bottom:0;left:0;right:0;z-index:1;padding:0 .4rem .4rem;text-align:center;background-color:#fff;border-bottom:1px solid #f2f3f4;box-shadow:0 0 0 #000,0 0 .2rem #ddd}.sticky>div[data-v-f2cf4366]{display:block;width:100%;height:1.33333rem;line-height:1.33333rem;font-size:.53333rem;color:#fff;border-radius:.13333rem}.sticky h6[data-v-f2cf4366]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:.88rem;color:#646565}.sticky h6 .iconfont[data-v-f2cf4366]{color:#ff9817;margin-right:.06667rem}.sticky .exchange[data-v-f2cf4366]{margin-top:.4rem;background-color:#ff5000}.sticky .exchange[data-v-f2cf4366]:active{background-color:#e64800}.sticky .lack[data-v-f2cf4366]{background-color:#ff9817}.sticky .lack[data-v-f2cf4366]:active{background-color:#fd8c00}",""])},244:function(t,e,o){var a=o(207);"string"==typeof a&&(a=[[t.i,a,""]]);o(1)(a,{});a.locals&&(t.exports=a.locals)},26:function(t,e,o){"use strict";t.exports=o(378)},261:function(t,e,o){var a=o(224);"string"==typeof a&&(a=[[t.i,a,""]]);o(1)(a,{});a.locals&&(t.exports=a.locals)},346:function(t,e,o){t.exports=o.p+"images/rechargeBanner.1729f836452668ef8b6ed6e4fbaf1002.png"},377:function(t,e,o){o(244);var a=o(2)(o(165),o(399),"data-v-3aecc88e",null);t.exports=a.exports},378:function(t,e,o){o(261);var a=o(2)(o(166),o(416),"data-v-f2cf4366",null);t.exports=a.exports},399:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recharge "},[a("img",{staticClass:"banner",attrs:{src:o(346)}}),t._v(" "),a("main",[a("div",{staticClass:"form-control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"tel",autofocus:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),a("span",[t._v(t._s(t.company))])]),t._v(" "),t.flow_infor?a("ul",{staticClass:"flow-box"},[a("li",{directives:[{name:"show",rawName:"v-show",value:t.flow_infor.flows,expression:"flow_infor.flows"}],staticClass:"active"},[t._v(t._s(t.flow_infor.flows))])]):a("ul",{staticClass:"flow-box"},t._l(t.flow_list,function(e,o){return a("li",{staticClass:"ready"},[t._v(t._s(e))])})),t._v(" "),a("h4",{staticClass:"notice"},[t._v("即时生效,当月有效,(充值高峰可能出现延迟)。")])]),t._v(" "),a("footer",[a("div",{staticClass:"exchange btn-orange",on:{click:t.togglePopup}},[t._v("立即兑换\n            "),t.flow_infor?[t._v("\n                :"),a("span",[t._v(t._s(t.productDetail.integral>>0)+"积分")]),t._v(" "),a("s",[t._v("¥"+t._s(t.productDetail.price))])]:t._e()],2)]),t._v(" "),a("v-popup",{attrs:{show:t.popup_show,"toggle-popup":t.togglePopup}},[a("div",{staticClass:"popup-content"},[a("h1",[t._v("确认支付")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("手机号码")]),t._v(" "+t._s(t.phone)+"\n                ")]),t._v(" "),a("li",[a("strong",[t._v("重制流量")]),t._v(" "+t._s(t.flow_infor.flows)+"\n                ")]),t._v(" "),a("li",[a("strong",[t._v("消耗积分")]),t._v(" "),a("span",{staticClass:"integral"},[t._v(t._s(t.productDetail.integral>>0)+"积分")])])]),t._v(" "),a("footer",{staticClass:"footer"},[a("div",{staticClass:"exchange btn-orange",on:{click:t.exchange}},[t._v("确认兑换")])])])])],1)},staticRenderFns:[]}},416:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.product_detail?o("div",{staticClass:"product-detail"},[t.is_recharge?o("recharge",{attrs:{"product-detail":t.product_detail}}):[o("header",{staticClass:"header "},[o("img",{staticClass:"banner",attrs:{src:t.product_detail.pic_banner}}),t._v(" "),o("div",{staticClass:"title"},[o("h1",{staticClass:"text-ellipsis"},[t._v(t._s(t.product_name))]),t._v(" "),o("h3",[o("span",{staticClass:"number"},[t._v(t._s(t.integral))]),t._v("积分\n                    "),o("s",[t._v("¥"+t._s(t.product_detail.price))])])])]),t._v(" "),o("main",{staticClass:"main"},[t.product_detail.content?o("v-introduction",{attrs:{title:"详细说明",content:t.product_detail.content}}):t._e(),t._v(" "),t.product_detail.content_use?o("v-introduction",{attrs:{title:"使用说明",content:t.product_detail.content_use}}):t._e()],1),t._v(" "),o("footer",{staticClass:"sticky"},[t.integral_enough?o("div",{staticClass:"exchange",on:{click:t.exchange}},[t._v("立即兑换")]):[o("h6",[o("i",{staticClass:"iconfont icon-warn"}),t._v(" 您的积分不足\n                ")]),t._v(" "),o("router-link",{staticClass:"lack",attrs:{to:{name:"earn_integral",query:{back_show:!0}},tag:"div"}},[t._v("\n                    去赚取更多的积分>>\n                ")])]],2)]],2):t._e()},staticRenderFns:[]}}});