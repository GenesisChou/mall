webpackJsonp([4],{101:function(t,e,r){"use strict";e.default={data:function(){return{}},computed:{},ready:function(){},attached:function(){},methods:{},components:{}}},111:function(t,e,r){"use strict";var o=r(7),i=r(88),s=r.n(i),a=r(65),n=r.n(a),c=r(63),d=r.n(c),l=r(169),u=r.n(l);e.default={name:"product_list",components:{vListItem:n.a,vSearch:s.a,vBackTop:d.a,vSpinner:u.a},data:function(){return{product_list:"",params:{sword:"",p:1,r:APP.PERPAGE,total:0,count:0,token:APP.TOKEN,userid:APP.USER_ID,_order:""},sort_type:""}},mounted:function(){this.getProductList(),o.a.getScrollData(this.product_list,this.params,this.getProductList)},methods:{getProductList:function(t){var e=this;this.searchProduct(this.params,function(r){t&&t();var o=e.product_list;e.params.p<=1&&(e.params.total=r.data.total,e.params.count=r.data.count),e.product_list=r.data.list.concat(o)})},searchProduct:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params,r=arguments[1];this.$http.post(APP.HOST+"/all_product",e).then(function(e){var o=e.data;r?r(o):t.product_list=o.data.list},function(t){})},initParams:function(){var t=this.params.sword;this.params={sword:t,p:1,r:APP.PERPAGE,total:0,count:0,token:APP.TOKEN,userid:APP.USER_ID,_order:""}},sortByIntegral:function(){var t=this;this.initParams(),"integral-up"==this.sort_type?(this.sort_type="integral-down",this.params._order="integral:DESC"):(this.sort_type="integral-up",this.params._order="integral:ASC"),this.getProductList(function(){t.product_list=[]})},sortByCount:function(){var t=this;this.initParams(),this.params._order="used_count:DESC",this.sort_type="count",this.getProductList(function(){t.product_list=[]})}}}},135:function(t,e,r){e=t.exports=r(2)(),e.push([t.i,".load-more[data-v-99421902]{height:1.2rem}.search-box[data-v-99421902]{padding:.22667rem .4rem;position:fixed}.fill[data-v-99421902]{height:1.33333rem}.sort[data-v-99421902]{border-top:1px solid #c8c8c8;border-bottom:1px solid #c8c8c8;height:1.4rem}.arrows[data-v-99421902]{line-height:.24rem;font-size:.24rem;margin-left:.13333rem}",""])},137:function(t,e,r){e=t.exports=r(2)(),e.push([t.i,".spinner[data-v-cc2011a6]{border:.10667rem solid #c8c8c8;border-top:.10667rem solid #de443b;border-radius:50%;width:.8rem;height:.8rem;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},154:function(t,e,r){var o=r(135);"string"==typeof o&&(o=[[t.i,o,""]]);r(6)(o,{});o.locals&&(t.exports=o.locals)},156:function(t,e,r){var o=r(137);"string"==typeof o&&(o=[[t.i,o,""]]);r(6)(o,{});o.locals&&(t.exports=o.locals)},169:function(t,e,r){var o,i;r(156),o=r(101);var s=r(190);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-cc2011a6",t.exports=o},188:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"product-list"},[_h("div",{staticClass:"search-box bg-base"},[_h("v-search",{attrs:{search:searchProduct,params:params}})])," ",_m(0)," ",_h("div",{staticClass:"sort flex"},[_h("div",{staticClass:"flex-item text-huge flex flex-center-h flex-center-v",on:{click:sortByIntegral}},[_h("span",{class:["count"!=sort_type&&sort_type?"text-red":""]},["消耗积分排序"])," ",_h("div",{staticClass:"arrows flex flex-column "},[_h("i",{class:["icon-arrows-up","iconfont","text-bold","integral-up"==sort_type?"text-red":""]})," ",_h("i",{class:["icon-arrows-down","iconfont","text-bold","integral-down"==sort_type?"text-red":""]})])])," ",_h("div",{class:["flex-item","text-huge","flex","flex-center-h","flex-center-v","count"==sort_type?"text-red":""],on:{click:sortByCount}},["\n            兑换量优先\n        "])])," ",_l(product_list,function(t){return _h("router-link",{attrs:{to:{name:"product_detail",query:{product_id:t.id}}}},[_h("v-list-item",{attrs:{title:t.name,"title-dupty":parseInt(t.integral)+"积分",img:t.pic_thumb,color:"text-red"}})])})," ",_h("v-back-top")])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"fill"})}]}},190:function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"spinner"})}]}},45:function(t,e,r){var o,i;r(154),o=r(111);var s=r(188);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-99421902",t.exports=o},47:function(t,e,r){"use strict";var o=r(7);e.default={name:"back_top",data:function(){return{show:!1}},methods:{backTop:function(){var t=o.a.getScrollTop(),e=window.setInterval(function(){t>=0?(t-=150,window.scrollTo(0,t)):window.clearInterval(e)},10)}},created:function(){var t=this;window.addEventListener("scroll",function(){t.show=o.a.getScrollTop()>1e3})}}},49:function(t,e,r){"use strict";e.default={name:"v-list-item",props:{title:{type:String,default:""},titleDupty:{type:String,default:""},color:{type:String,default:"text-gray"},img:{type:String,default:""}}}},52:function(t,e,r){e=t.exports=r(2)(),e.push([t.i,".v-back-top[data-v-19f5a2ce]{position:fixed;right:.66667rem;bottom:.66667rem;width:.93333rem;height:.93333rem;border-radius:50%;border:2px solid #f06870;-webkit-transition:opacity .3s linear;transition:opacity .3s linear;box-shadow:.06667rem .06667rem .13333rem #666}",""])},54:function(t,e,r){e=t.exports=r(2)(),e.push([t.i,".v-list-item[data-v-639036a8]{height:2.93333rem;border-bottom:1px solid #c8c8c8}.v-list-item .img[data-v-639036a8]{width:2.4rem;height:1.86667rem;margin:0 .66667rem 0 .74667rem}.v-list-item .describe .text-huge[data-v-639036a8]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-bottom:.13333rem}",""])},58:function(t,e,r){var o=r(52);"string"==typeof o&&(o=[[t.i,o,""]]);r(6)(o,{});o.locals&&(t.exports=o.locals)},60:function(t,e,r){var o=r(54);"string"==typeof o&&(o=[[t.i,o,""]]);r(6)(o,{});o.locals&&(t.exports=o.locals)},63:function(t,e,r){var o,i;r(58),o=r(47);var s=r(68);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-19f5a2ce",t.exports=o},65:function(t,e,r){var o,i;r(60),o=r(49);var s=r(70);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-639036a8",t.exports=o},68:function(module,exports){module.exports={render:function(){with(this)return _h("transition",{attrs:{name:"fade"}},[_h("div",{directives:[{name:"show",rawName:"v-show",value:show,expression:"show"}],staticClass:"flex flex-center-h flex-center-v v-back-top bg-white text-huge bg-red text-white",on:{click:backTop}},[_m(0)])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:" icon-arrows-up iconfont text-small"})}]}},70:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"v-list-item flex flex-center-v  bg-white"},[_h("img",{staticClass:"img",attrs:{src:img}})," ",_h("div",{staticClass:"describe flex-item"},[_h("div",{staticClass:"text-huge "},[_s(title)])," ",_h("p",{class:color},[_s(titleDupty)])])])},staticRenderFns:[]}},77:function(t,e,r){"use strict";e.default={name:"search",props:{placeholder:{type:String,default:"请输入关键字进行过滤"},search:Function,params:Object}}},81:function(t,e,r){e=t.exports=r(2)(),e.push([t.i,".v-search[data-v-d9902478]{width:9.2rem;height:.88rem;border-radius:.06667rem}.v-search input[data-v-d9902478]{flex:1;border:0;padding:0 .36rem}.v-search input[type=search][data-v-d9902478]::-webkit-search-cancel-button{display:none}.v-search .iconfont[data-v-d9902478]{font-size:130%;padding-right:.58667rem}",""])},85:function(t,e,r){var o=r(81);"string"==typeof o&&(o=[[t.i,o,""]]);r(6)(o,{});o.locals&&(t.exports=o.locals)},88:function(t,e,r){var o,i;r(85),o=r(77);var s=r(92);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-d9902478",t.exports=o},92:function(module,exports){module.exports={render:function(){with(this)return _h("form",{staticClass:"v-search flex flex-center-v bg-white",on:{submit:function(t){t.preventDefault()}}},[_h("input",{directives:[{name:"model",rawName:"v-model",value:params.sword,expression:"params.sword"}],staticClass:"text-sliver text-large",attrs:{type:"search",placeholder:placeholder},domProps:{value:_s(params.sword)},on:{keyup:function(t){13===t.keyCode&&search()},input:function(t){t.target.composing||(params.sword=t.target.value)}}})," ",_h("i",{staticClass:"iconfont icon-search text-sliver text-large",on:{click:function(t){search()}}})])},staticRenderFns:[]}}});