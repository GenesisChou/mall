webpackJsonp([5],{138:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search",props:{placeholder:{type:String,default:"请输入关键字进行过滤"},search:Function,value:String},methods:{updateValue:function(){this.$emit("input",event.target.value)}}}},139:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0});var i=a(284),s=a.n(i);e.default={name:"productList",components:{vSearch:s.a},data:function(){return{product_list:[],params:{sword:"",p:1,r:t.PERPAGE,total:0,token:t.TOKEN,userid:t.USER_ID,media_id:t.MEDIA_ID,_order:""},sort_type:"",scroll_event:""}},computed:{busy:function(){return this.params.total>this.params.p}},activated:function(){var t=o.getSessionStorage("position:"+this.$route.name);t&&window.scrollTo(0,t),window.addEventListener("scroll",this.scroll_event)},created:function(){var t=this;this.$store.dispatch("toggleLoading"),this.getProductList().then(function(){t.$store.dispatch("toggleLoading")}).catch(function(){t.$store.dispatch("toggleLoading")}),this.scroll_event=this.getScrollEvent()},beforeRouteLeave:function(t,e,a){window.removeEventListener("scroll",this.scroll_event),a()},methods:{getProductList:function(){var e=this;return new Promise(function(a,o){e.$http.post(t.HOST+"/all_product",e.params).then(function(t){var o=t.data;a&&a(o),e.params.total=o.data.total,e.product_list=e.product_list.concat(o.data.list)},function(t){o&&o()})})},searchProduct:function(){var t=this;this.$store.dispatch("toggleLoading"),this.sort_type="",this.initParams(),this.getProductList().then(function(e){t.$store.dispatch("toggleLoading"),t.loading=!0,t.params.total=e.data.total,t.product_list=e.data.list}).catch(function(){t.$store.dispatch("toggleLoading")})},initParams:function(){this.params.p=1,this.params.r=t.PERPAGE,this.params.token=t.TOKEN,this.params.userid=t.USER_ID,this.params.media_id=t.MEDIA_ID,this.params._order=""},sortByIntegral:function(){var t=this;this.initParams(),"integral-up"==this.sort_type?(this.sort_type="integral-down",this.params._order="integral:DESC"):(this.sort_type="integral-up",this.params._order="integral:ASC"),this.$store.dispatch("toggleLoading"),this.getProductList().then(function(e){t.product_list=[],t.product_list=t.product_list.concat(e.data.list),t.$store.dispatch("toggleLoading")}).catch(function(){t.$store.dispatch("toggleLoading")})},sortByCount:function(){var t=this;this.initParams(),this.params._order="used_count:DESC",this.$store.dispatch("toggleLoading"),"count"!=this.sort_type&&(this.sort_type="count",this.getProductList().then(function(e){t.product_list=[],t.product_list=t.product_list.concat(e.data.list),t.$store.dispatch("toggleLoading")}).catch(function(){t.$store.dispatch("toggleLoading")}))},getScrollEvent:function(){var t=this,e=!0;return o.debounce(function(){e&&t.busy&&o.touchBottom()&&(e=!1,t.params.p++,t.getProductList().then(function(){e=!0}))},500,500)}}}}).call(e,a(3),a(5))},156:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".search-box[data-v-1e8dcfb2]{padding:.22667rem .4rem;position:fixed;z-index:1;background-color:#f2f3f4}.space[data-v-1e8dcfb2]{height:1.33333rem}.sort[data-v-1e8dcfb2]{display:flex;align-items:center;display:-webkit-flex;-webkit-align-items:center;height:1.4rem;border-top:1px solid #f2f3f4;border-bottom:1px solid #f2f3f4;background-color:#fff}.sort>div[data-v-1e8dcfb2]{flex:1;-webkit-flex:1;text-align:center;font-size:.48rem}.sort>div[data-v-1e8dcfb2]:first-child{position:relative}.sort .active[data-v-1e8dcfb2]{color:#de443b}.sort .iconfont[data-v-1e8dcfb2]{font-weight:700}.arrows[data-v-1e8dcfb2]{position:absolute;right:0;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);line-height:.24rem;right:.26667rem}.arrows i[data-v-1e8dcfb2]{font-size:.24rem;display:block}",""])},166:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".v-search[data-v-4faf4fbb]{display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center;justify-content:space-around;-webkit-justify-content:space-around;width:9.2rem;height:.88rem;border-radius:.06667rem;background-color:#fff}.v-search input[data-v-4faf4fbb]{width:8.13333rem;border:0;text-indent:27px;color:#a3a3a3;font-size:.37333rem}.v-search input[type=search][data-v-4faf4fbb]::-webkit-search-cancel-button{display:none}.v-search .iconfont[data-v-4faf4fbb]{margin-right:.46667rem;color:#a3a3a3;font-size:.48rem}",""])},185:function(t,e,a){var o=a(156);"string"==typeof o&&(o=[[t.i,o,""]]);a(1)(o,{});o.locals&&(t.exports=o.locals)},195:function(t,e,a){var o=a(166);"string"==typeof o&&(o=[[t.i,o,""]]);a(1)(o,{});o.locals&&(t.exports=o.locals)},27:function(t,e,a){"use strict";t.exports=a(285)},284:function(t,e,a){a(195);var o=a(2)(a(138),a(301),"data-v-4faf4fbb",null);t.exports=o.exports},285:function(t,e,a){a(185);var o=a(2)(a(139),a(291),"data-v-1e8dcfb2",null);t.exports=o.exports},291:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-list"},[a("div",{staticClass:"search-box"},[a("v-search",{attrs:{search:t.searchProduct},model:{value:t.params.sword,callback:function(e){t.params.sword=e}}})],1),t._v(" "),a("div",{staticClass:"space"}),t._v(" "),a("section",{staticClass:"sort"},[a("div",{on:{click:t.sortByIntegral}},[a("span",{class:["count"!=t.sort_type&&t.sort_type?"active":""]},[t._v("消耗积分排序")]),t._v(" "),a("div",{staticClass:"arrows"},[a("i",{class:["icon-arrows-up","iconfont","integral-up"==t.sort_type?"active":""]}),t._v(" "),a("i",{class:["icon-arrows-down","iconfont","integral-down"==t.sort_type?"active":""]})])]),t._v(" "),a("div",{class:["count"==t.sort_type?"active":""],on:{click:t.sortByCount}},[t._v("\n            兑换量优先\n        ")])]),t._v(" "),t._l(t.product_list,function(t){return a("router-link",{attrs:{to:{name:"product_detail",query:{product_id:t.id,integral:t.integral>>0}},tag:"div"}},[a("v-list-item",{attrs:{title:t.name,"title-dupty":~~t.integral+"积分",img:t.pic_thumb,color:"red"}})],1)}),t._v(" "),t.busy?a("v-load-more"):t._e(),t._v(" "),a("v-back-top")],2)},staticRenderFns:[]}},301:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-search ",on:{submit:function(t){t.preventDefault()}}},[a("input",{attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.updateValue,keyup:function(e){return t._k(e.keyCode,"enter",13)?null:void t.search()}}}),t._v(" "),a("i",{staticClass:"iconfont icon-search ",on:{click:function(e){t.search()}}})])},staticRenderFns:[]}}});