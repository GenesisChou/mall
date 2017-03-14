webpackJsonp([5],{170:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search",props:{search:Function,value:String},methods:{updateValue:function(t){this.$emit("input",event.target.value)},clear:function(){this.$emit("input","")}}}},171:function(t,e,a){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0});var o=a(350),s=a.n(o);e.default={name:"productList",components:{vSearch:s.a},data:function(){return{product_list:[],params:{sword:"",p:1,r:t.PERPAGE,total:0,token:t.TOKEN,userid:t.USER_ID,media_id:t.MEDIA_ID,_order:""},sort_type:"",scroll_event:""}},computed:{busy:function(){return this.params.total>this.params.p}},watch:{busy:function(t){this.$store.dispatch("toggleBusy",t)}},activated:function(){var t=r.getSessionStorage("position:"+this.$route.name);t&&window.scrollTo(0,t),window.addEventListener("scroll",this.scroll_event)},created:function(){var t=this;this.$store.dispatch("toggleLoading"),this.getProductList().then(function(){t.$store.dispatch("toggleLoading")}).catch(function(){t.$store.dispatch("toggleLoading")}),this.scroll_event=this.getScrollEvent()},beforeRouteLeave:function(t,e,a){window.removeEventListener("scroll",this.scroll_event),a()},methods:{getProductList:function(){var e=this;return new Promise(function(a,r){e.$http.post(t.HOST+"/all_product",e.params).then(function(t){var r=t.data;a&&a(r),e.params.total=r.data.total,e.product_list=e.product_list.concat(r.data.list)},function(t){r&&r()})})},searchProduct:function(){var t=this;this.$store.dispatch("toggleLoading"),this.sort_type="",this.initParams(),this.getProductList().then(function(e){t.$store.dispatch("toggleLoading"),t.loading=!0,t.params.total=e.data.total,t.product_list=e.data.list}).catch(function(){t.$store.dispatch("toggleLoading")})},initParams:function(){this.params.p=1,this.params.r=t.PERPAGE,this.params.token=t.TOKEN,this.params.userid=t.USER_ID,this.params.media_id=t.MEDIA_ID,this.params._order=""},sortByIntegral:function(){var t=this;this.initParams(),"integral-up"==this.sort_type?(this.sort_type="integral-down",this.params._order="integral:DESC"):(this.sort_type="integral-up",this.params._order="integral:ASC"),this.$store.dispatch("toggleLoading"),this.getProductList().then(function(e){t.product_list=[],t.product_list=t.product_list.concat(e.data.list),t.$store.dispatch("toggleLoading")}).catch(function(){t.$store.dispatch("toggleLoading")})},sortByCount:function(){var t=this;this.initParams(),this.params._order="used_count:DESC",this.$store.dispatch("toggleLoading"),"count"!=this.sort_type?(this.sort_type="count",this.getProductList().then(function(e){t.product_list=[],t.product_list=t.product_list.concat(e.data.list),t.$store.dispatch("toggleLoading")}).catch(function(){t.$store.dispatch("toggleLoading")})):this.$store.dispatch("toggleLoading")},getScrollEvent:function(){var t=this,e=!0;return r.debounce(function(){e&&t.busy&&r.touchBottom()&&(e=!1,t.params.p++,t.getProductList().then(function(){e=!0}))},500,500)}}}}).call(e,a(3),a(5))},193:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".space[data-v-1e8dcfb2]{height:1.49333rem}li[data-v-1e8dcfb2],ul[data-v-1e8dcfb2]{list-style:none}.sort[data-v-1e8dcfb2]{display:flex;align-items:center;display:-webkit-flex;-webkit-align-items:center;height:1.09333rem;margin-bottom:.26667rem;border-bottom:1px solid #d3d4d6;background-color:#fff;color:#babbbe}.sort>div[data-v-1e8dcfb2]{flex:1;-webkit-flex:1;text-align:center;font-size:.4rem}.sort>div[data-v-1e8dcfb2]:first-child{position:relative}.sort .active[data-v-1e8dcfb2]{color:#ff5000}.sort .iconfont[data-v-1e8dcfb2]{font-weight:700}.arrows[data-v-1e8dcfb2]{position:absolute;right:0;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);line-height:.24rem;right:.93333rem}.arrows .down[data-v-1e8dcfb2],.arrows .up[data-v-1e8dcfb2]{width:0;height:0;border:.12rem solid #a9aaae}.arrows .up[data-v-1e8dcfb2]{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;margin-bottom:.08rem}.arrows .up.active[data-v-1e8dcfb2]{border-bottom-color:#ff5000}.arrows .down[data-v-1e8dcfb2]{border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.arrows .down.active[data-v-1e8dcfb2]{border-top-color:#ff5000}.list li[data-v-1e8dcfb2]:last-child{margin-bottom:.26667rem}",""])},207:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".v-search[data-v-4faf4fbb]{position:fixed;justify-content:space-between;-webkit-justify-content:space-between;width:10rem;padding:.26667rem .4rem .26667rem .53333rem;background-color:#f2f3f4;z-index:1}.v-search .search-box[data-v-4faf4fbb],.v-search[data-v-4faf4fbb]{display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center}.v-search .search-box[data-v-4faf4fbb]{width:7.90667rem;height:.96rem;border-radius:.26667rem;background-color:#fff}.v-search .iconfont[data-v-4faf4fbb]{text-align:center;width:.8rem;font-size:.48rem;color:#bababa}.v-search input[data-v-4faf4fbb]{flex:1;width:8.13333rem;border:0;font-size:.37333rem;color:#ff5000;text-shadow:0 0 0 #bababa;-webkit-text-fill-color:transparent}.v-search [data-v-4faf4fbb]::-webkit-input-placeholder{color:#bababa}.v-search input[type=search][data-v-4faf4fbb]::-webkit-search-cancel-button{display:none}.v-search span[data-v-4faf4fbb]{font-size:.42667rem}",""])},226:function(t,e,a){var r=a(193);"string"==typeof r&&(r=[[t.i,r,""]]);a(1)(r,{});r.locals&&(t.exports=r.locals)},240:function(t,e,a){var r=a(207);"string"==typeof r&&(r=[[t.i,r,""]]);a(1)(r,{});r.locals&&(t.exports=r.locals)},27:function(t,e,a){"use strict";t.exports=a(351)},350:function(t,e,a){a(240);var r=a(2)(a(170),a(371),"data-v-4faf4fbb",null);t.exports=r.exports},351:function(t,e,a){a(226);var r=a(2)(a(171),a(357),"data-v-1e8dcfb2",null);t.exports=r.exports},357:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-list"},[a("v-search",{attrs:{search:t.searchProduct},model:{value:t.params.sword,callback:function(e){t.params.sword=e}}}),t._v(" "),a("div",{staticClass:"space"}),t._v(" "),a("section",{staticClass:"sort"},[a("div",{on:{click:t.sortByIntegral}},[a("span",{class:["count"!=t.sort_type&&t.sort_type?"active":""]},[t._v("消耗积分排序")]),t._v(" "),a("div",{staticClass:"arrows"},[a("div",{class:["up",{active:"integral-up"==t.sort_type}]}),t._v(" "),a("div",{class:["down",{active:"integral-down"==t.sort_type}]})])]),t._v(" "),a("div",{class:["count"==t.sort_type?"active":""],on:{click:t.sortByCount}},[t._v("\n            兑换量优先\n        ")])]),t._v(" "),a("ul",{staticClass:"list"},t._l(t.product_list,function(t){return a("router-link",{attrs:{to:{name:"product_detail",query:{product_id:t.id,integral:t.integral>>0}},tag:"li"}},[a("v-list-item",{attrs:{title:t.name,"title-dupty":t.name,integral:t.integral>>0,img:t.pic_thumb}})],1)})),t._v(" "),t.busy?a("v-load-more"):t._e(),t._v(" "),a("v-back-top")],1)},staticRenderFns:[]}},371:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-search"},[a("div",{staticClass:"search-box"},[a("i",{staticClass:"iconfont icon-search ",on:{click:t.search}}),t._v(" "),a("input",{attrs:{type:"search",placeholder:"请输入关键字进行过滤"},domProps:{value:t.value},on:{input:t.updateValue,keyup:function(e){return t._k(e.keyCode,"enter",13)?null:void t.search(e)}}})]),t._v(" "),a("span",{on:{click:t.clear}},[t._v("取消")])])},staticRenderFns:[]}}});