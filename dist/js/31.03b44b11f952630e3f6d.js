webpackJsonp([31],{120:function(e,t,o){o(128);var a=o(1)(o(122),o(136),"data-v-c5ac4128",null);e.exports=a.exports},122:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{togglePopup:Function,callback:Function,show:{type:Boolean,default:!1}},methods:{close:function(){this.callback?this.callback():this.togglePopup()}}}},126:function(e,t,o){t=e.exports=o(0)(),t.push([e.i,".v-popup .v-popup-content[data-v-c5ac4128]{position:fixed;bottom:0;left:0;right:0;border-top:1px solid #f2f3f4;z-index:2}.v-popup .close-popup[data-v-c5ac4128]{position:absolute;right:0;top:0;padding-right:.2rem;padding-top:.2rem;color:#ff5000}.v-popup .bg-cover[data-v-c5ac4128]{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1}.v-popup .iconfont[data-v-c5ac4128]{font-size:.4rem}.popup-enter-active[data-v-c5ac4128],.popup-leave-active[data-v-c5ac4128]{transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.popup-enter[data-v-c5ac4128],.popup-leave-active[data-v-c5ac4128]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}",""])},128:function(e,t,o){var a=o(126);"string"==typeof a&&(a=[[e.i,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},136:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"v-popup"},[o("transition",{attrs:{name:"popup"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"v-popup-content"},[o("i",{staticClass:"close-popup iconfont icon-close-circle",on:{click:e.close}}),e._v(" "),e._t("default")],2)]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"bg-cover"})],1)},staticRenderFns:[]}},226:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=o(120),n=o.n(a);t.default={name:"recharge",components:{vPopup:n.a},props:{productDetail:{type:Object,default:{}}},data:function(){return{flow_list:["30M","70M","150M","500M","1024M","2048M"],phone:"",state:"ready",flow_infor:"",in_exchange:!1,popup_show:!1}},computed:{company:function(){return this.flow_infor?this.flow_infor.company:""}},watch:{phone:function(e){this.state=/^1[34578]\d{9}$/.test(e)?"active":"ready"},state:function(e,t){"active"===e&&"ready"===t?this.getFlows():"ready"===e&&(this.flow_infor="")}},methods:{exchange:function(){var t=this;this.in_exchange||(this.in_exchange=!0,this.$store.dispatch("toggleLoading"),this.$http.post(e.HOST+"/exchange_flows_recharge/"+this.phone,{token:e.TOKEN,userid:e.USER_ID,media_id:e.MEDIA_ID,user_id:e.USER_ID,product_id:this.productDetail.id,companytype:this.flow_infor.companytype,flows:this.flow_infor.flows}).then(function(o){t.$store.dispatch("toggleLoading");var a=o.data,n="";n=a.status===e.SUCCESS?a.data.message:a.info,t.$store.dispatch("toggleAlert",{msg:n,callback:function(){t.in_exchange=!1}})},function(){t.$store.dispatch("toggleLoading")}))},getFlows:function(){var t=this;this.$http.post(e.HOST+"/check_flows_phone/"+this.phone,{token:e.TOKEN,userid:e.USER_ID,media_id:e.MEDIA_ID}).then(function(o){var a=o.data;a.status===e.SUCCESS&&(t.flow_infor=a.data)})},togglePopup:function(){"active"===this.state&&(this.popup_show=!this.popup_show)}}}}).call(t,o(5))},270:function(e,t,o){"use strict";e.exports=o(587)},296:function(e,t,o){t=e.exports=o(0)(),t.push([e.i,".banner[data-v-3aecc88e]{width:7.5rem;height:4.2rem}main[data-v-3aecc88e]{background-color:#fff;border-bottom:1px solid #d3d4d6}.form-control[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:.92rem;margin:0 .24rem;padding:0 .16rem;border-bottom:1px solid #f2f3f4;font-size:.34rem}.form-control input[data-v-3aecc88e]{-webkit-flex:1;-ms-flex:1;flex:1;border:none}.form-control span[data-v-3aecc88e]{color:#a9aaae}.flow-box[data-v-3aecc88e]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:2.84rem;padding:.3rem .4rem 0}.flow-box[data-v-3aecc88e],.flow-box li[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none}.flow-box li[data-v-3aecc88e]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:2.11rem;height:1.16rem;border:1px solid #a9aaae;border-radius:.1rem;font-size:.36rem}.flow-box li.ready[data-v-3aecc88e]{color:#ff5000;border-color:#ff5000}.flow-box li.active[data-v-3aecc88e]{color:#fff;background-color:#ff5000;border-color:#ff5000}.flow-box li[data-v-3aecc88e]:nth-child(3),.flow-box li[data-v-3aecc88e]:nth-child(6){margin-right:0}.notice[data-v-3aecc88e]{line-height:1rem;text-align:center}.exchange[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1.12rem;margin:.55rem .35rem;border-radius:.1rem;font-size:.36rem}.exchange span[data-v-3aecc88e]{padding:0 .15rem}.exchange s[data-v-3aecc88e]{color:#c5c5c5;font-size:.24rem;-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}.popup-content[data-v-3aecc88e]{padding-bottom:.35rem;background-color:#f2f3f4}.popup-content h1[data-v-3aecc88e]{text-align:center;line-height:1.14rem;color:#3d4244;background-color:#fff}.popup-content ul[data-v-3aecc88e]{background-color:#fff;list-style:none;margin-bottom:.35rem}.popup-content li[data-v-3aecc88e]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:.96rem;margin:0 .25rem;list-style:none;border-top:1px solid #f2f3f4;color:#646565}.popup-content strong[data-v-3aecc88e]{padding:0 .45rem 0 .08rem;color:#646565;font-weight:400}.popup-content .integral[data-v-3aecc88e]{color:#ff5000}.popup-content .exchange[data-v-3aecc88e]{margin:0 .35rem}",""])},361:function(e,t,o){var a=o(296);"string"==typeof a&&(a=[[e.i,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},525:function(e,t,o){e.exports=o.p+"images/rechargeBanner.1729f836452668ef8b6ed6e4fbaf1002.png"},587:function(e,t,o){o(361);var a=o(1)(o(226),o(617),"data-v-3aecc88e",null);e.exports=a.exports},617:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recharge "},[a("img",{staticClass:"banner",attrs:{src:o(525)}}),e._v(" "),a("main",[a("div",{staticClass:"form-control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",autofocus:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),a("span",[e._v(e._s(e.company))])]),e._v(" "),e.flow_infor?a("ul",{staticClass:"flow-box"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.flow_infor.flows,expression:"flow_infor.flows"}],staticClass:"active"},[e._v(e._s(e.flow_infor.flows))])]):a("ul",{staticClass:"flow-box"},e._l(e.flow_list,function(t,o){return a("li",{staticClass:"ready"},[e._v(e._s(t))])})),e._v(" "),a("h4",{staticClass:"notice"},[e._v("即时生效,当月有效,(充值高峰可能出现延迟)。")])]),e._v(" "),a("footer",[a("div",{staticClass:"exchange btn-orange",on:{click:e.togglePopup}},[e._v("\n            立即兑换\n            ")])]),e._v(" "),a("v-popup",{attrs:{show:e.popup_show,"toggle-popup":e.togglePopup}},[a("div",{staticClass:"popup-content"},[a("h1",[e._v("确认支付")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("手机号码")]),e._v(" "+e._s(e.phone)+"\n                ")]),e._v(" "),a("li",[a("strong",[e._v("重制流量")]),e._v(" "+e._s(e.flow_infor.flows)+"\n                ")]),e._v(" "),a("li",[a("strong",[e._v("消耗积分")]),e._v(" "),a("span",{staticClass:"integral"},[e._v(e._s(e.productDetail.integral>>0)+"积分")])])]),e._v(" "),a("footer",{staticClass:"footer"},[a("div",{staticClass:"exchange btn-orange",on:{click:e.exchange}},[e._v("确认兑换")])])])])],1)},staticRenderFns:[]}}});