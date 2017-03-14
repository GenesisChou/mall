webpackJsonp([9],{169:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"productDetail",data:function(){return{product_id:"",product_detail:"",order_detail_id:"",content_show:!1}},computed:{user:function(){return this.$store.state.user},integral_enough:function(){return this.user.integral>>0>=this.integral},integral:function(){return this.$route.query.integral||this.product_detail.integral>>0||0},product_name:function(){return this.$route.query.name||this.product_detail.name}},watch:{product_id:function(){var t=this;this.content_show=!1,this.getProductDetail().then(function(){t.content_show=!0})},order_detail_id:function(){this.$store.dispatch("getUserInfor"),this.$store.dispatch("toggleAlert",{close_btn:!0,msg:"获得"+this.product_name,type:"img",img:this.product_detail.pic_thumb,btn_text:"查看",callback:this.toOrderDetail})}},activated:function(){this.product_id=this.$route.query.product_id},methods:{getProductDetail:function(){var e=this;return new Promise(function(i,o){e.$store.dispatch("toggleLoading"),e.$http.post(t.HOST+"/product_detail_l/"+e.product_id,{token:t.TOKEN,media_id:t.MEDIA_ID,user_id:t.USER_ID,open_id:t.OPEN_ID}).then(function(t){e.$store.dispatch("toggleLoading");var o=t.data;e.product_detail=o.data,i&&i()},function(t){e.$store.dispatch("toggleLoading")})})},exchange:function(){var t=this;this.$store.dispatch("toggleConfirm",{msg:"确认兑换该商品吗?",callback:function(){t.order().then(function(e){t.order_detail_id=e.data.id}).catch(function(e){t.$store.dispatch("toggleAlert",{msg:e.info})})}})},order:function(){var e=this;return new Promise(function(i,o){e.$store.dispatch("toggleLoading"),e.$http.post(t.HOST+"/product_order/"+e.product_id,{token:t.TOKEN,user_id:t.USER_ID}).then(function(n){e.$store.dispatch("toggleLoading");var r=n.data;r.status==t.SUCCESS?i(r):o(r)},function(t){e.$store.dispatch("toggleLoading"),o(t.data)})})},toOrderDetail:function(){this.$router.push({name:"order_detail",query:{order_id:this.order_detail_id}})}}}}).call(e,i(3))},219:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".banner[data-v-f2cf4366]{width:10rem;height:5.33333rem}.title[data-v-f2cf4366]{display:flex;display:-webkit-flex;justify-content:center;-webkit-justify-content:center;flex-direction:column;height:1.86667rem;padding-left:.4rem;background-color:#fff;border-bottom:1px solid #d3d4d6}.title h1[data-v-f2cf4366]{font-size:.45333rem}.title h3[data-v-f2cf4366]{display:inline-block;color:#ff5000}.title .number[data-v-f2cf4366]{font-size:.48rem}.title s[data-v-f2cf4366]{padding-left:.4rem;color:#6e6f6f;transform:scale(.6) translateY(10%);-webkit-transform:scale(.6) translateY(10%);display:inline-block;transform-origin:left;-webkit-transform-origin:left}.main[data-v-f2cf4366]{padding-bottom:1.33333rem}.sticky[data-v-f2cf4366]{position:fixed;bottom:0;left:0;right:0;z-index:1;padding:0 .4rem .4rem;text-align:center;background-color:#fff;border-bottom:1px solid #f2f3f4;box-shadow:0 0 0 #000,0 0 .2rem #ddd}.sticky>div[data-v-f2cf4366]{display:block;width:100%;height:1.33333rem;line-height:1.33333rem;font-size:.53333rem;color:#fff;border-radius:.13333rem}.sticky h6[data-v-f2cf4366]{display:flex;display:-webkit-flex;-webkit-align-items:center;justify-content:center;-webkit-justify-content:center;height:.88rem;color:#646565}.sticky h6 .iconfont[data-v-f2cf4366]{color:#ff9817;margin-right:.06667rem}.sticky .exchange[data-v-f2cf4366]{margin-top:.4rem;background-color:#ff5000}.sticky .exchange[data-v-f2cf4366]:active{background-color:#e64800}.sticky .lack[data-v-f2cf4366]{background-color:#ff9817}.sticky .lack[data-v-f2cf4366]:active{background-color:#fd8c00}",""])},252:function(t,e,i){var o=i(219);"string"==typeof o&&(o=[[t.i,o,""]]);i(1)(o,{});o.locals&&(t.exports=o.locals)},26:function(t,e,i){"use strict";t.exports=i(349)},349:function(t,e,i){i(252);var o=i(2)(i(169),i(384),"data-v-f2cf4366",null);t.exports=o.exports},384:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-detail"},[i("header",{directives:[{name:"show",rawName:"v-show",value:t.content_show,expression:"content_show"}],staticClass:"header "},[i("img",{staticClass:"banner",attrs:{src:t.product_detail.pic_banner}}),t._v(" "),i("div",{staticClass:"title"},[i("h1",{staticClass:"text-ellipsis"},[t._v(t._s(t.product_name))]),t._v(" "),i("h3",[i("span",{staticClass:"number"},[t._v(t._s(t.integral))]),t._v("积分\n                "),i("s",[t._v("¥"+t._s(t.product_detail.price))])])])]),t._v(" "),i("main",{directives:[{name:"show",rawName:"v-show",value:t.content_show,expression:"content_show"}],staticClass:"main"},[t.product_detail.content?i("v-introduction",{attrs:{title:"详细说明",content:t.product_detail.content}}):t._e(),t._v(" "),t.product_detail.content_use?i("v-introduction",{attrs:{title:"使用说明",content:t.product_detail.content_use}}):t._e()],1),t._v(" "),i("footer",{directives:[{name:"show",rawName:"v-show",value:t.content_show,expression:"content_show"}],staticClass:"sticky"},[t.integral_enough?i("div",{staticClass:"exchange",on:{click:t.exchange}},[t._v("立即兑换")]):[i("h6",[i("i",{staticClass:"iconfont icon-warn"}),t._v(" 您的积分不足\n            ")]),t._v(" "),i("router-link",{staticClass:"lack",attrs:{to:{name:"earn_integral"},tag:"div"}},[t._v("\n                去赚取更多的积分>>\n            ")])]],2)])},staticRenderFns:[]}}});