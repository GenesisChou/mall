webpackJsonp([8],{161:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"subjectDetail",data:function(){return{subject_id:"",subject_detail:{class_items:[]},current_tab:"全部",content_show:!1}},computed:{tabs:function(){return this.subject_detail.class_items},tabs_show:function(){return this.subject_detail.class_items.length>1}},watch:{subject_id:function(t){var e=this;this.content_show=!1,this.getSubjectDetail().then(function(){e.content_show=!0})}},activated:function(){this.subject_id=this.$route.query.subject_id,this.$store.dispatch("subjectView",this.subject_id);var e=t.getSessionStorage("position:"+this.$route.name);e&&window.scrollTo(0,e)},beforeRouteLeave:function(t,e,i){"index"==t.name&&(this.current_tab="全部"),i()},methods:{getSubjectDetail:function(){var t=this;return new Promise(function(e,a){t.$store.dispatch("toggleLoading"),t.$http.post(i.HOST+"/subject_detail/"+t.subject_id,{token:i.TOKEN,userid:i.USER_ID,media_id:i.MEDIA_ID}).then(function(i){t.$store.dispatch("toggleLoading");var a=i.data;t.subject_detail=a.data,e&&e()},function(e){t.$store.dispatch("toggleLoading")})})},switchTab:function(t){this.current_tab=t},getRouter:function(t){return 1==t.type?{name:"product_detail",query:{product_id:t.item_id,integral:t.integral>>0,product_name:t.name}}:2==t.type?{name:"activity_detail",query:{activity_id:t.item_id}}:void 0}}}}).call(e,i(5),i(3))},182:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"header[data-v-27b05f87]{width:100%;height:4.66667rem;background-color:#f2f3f4}.tabs[data-v-27b05f87]{border-bottom:1px solid #f2f3f4}.tabs[data-v-27b05f87],.tabs li[data-v-27b05f87]{display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center}.tabs li[data-v-27b05f87]{flex:1;-webkit-flex:1;justify-content:center;-webkit-justify-content:center;height:1.06667rem;list-style:none;background-color:#fff}.tabs li.active[data-v-27b05f87]{color:#de443b}.v-list-item[data-v-27b05f87]{display:table;width:100%;height:2.93333rem;border-bottom:1px solid #f2f3f4;background-color:#fff}.v-list-item .img[data-v-27b05f87]{display:table-cell;width:3.73333rem;vertical-align:middle;text-align:center}.v-list-item .img img[data-v-27b05f87]{width:2.4rem;height:1.86667rem}.v-list-item .describe[data-v-27b05f87]{display:table-cell;padding-right:.4rem;vertical-align:middle;text-align:justify}.v-list-item .describe h6[data-v-27b05f87]{height:.46667rem;line-height:.46667rem;color:#a9aaae}.v-list-item .describe .integral[data-v-27b05f87]{padding-top:.06667rem;color:#ff5000}.v-list-item[data-v-27b05f87]:active{background-color:#f2f2f2}",""])},212:function(t,e,i){var a=i(182);"string"==typeof a&&(a=[[t.i,a,""]]);i(1)(a,{});a.locals&&(t.exports=a.locals)},28:function(t,e,i){"use strict";t.exports=i(307)},307:function(t,e,i){i(212);var a=i(2)(i(161),i(316),"data-v-27b05f87",null);t.exports=a.exports},316:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.content_show,expression:"content_show"}],staticClass:"subject-detail"},[i("header",[i("img",{staticClass:"img-responsive",attrs:{src:t.subject_detail.pic}})]),t._v(" "),i("main",[t.tabs_show?i("ul",{staticClass:"tabs"},[i("li",{class:{active:"全部"==t.current_tab},on:{click:function(e){t.switchTab("全部")}}},[t._v("全部")]),t._v(" "),t._l(t.tabs,function(e){return i("li",{class:{active:t.current_tab==e.name},on:{click:function(i){t.switchTab(e.name)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])})],2):t._e(),t._v(" "),t._l(t.tabs,function(e){return t._l(e.items,function(a){return i("router-link",{attrs:{to:t.getRouter(a),tag:"div"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"全部"==t.current_tab||t.current_tab==e.name,expression:'current_tab=="全部"||current_tab==tab.name'}],staticClass:"v-list-item"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:a.pic}})]),t._v(" "),i("div",{staticClass:"describe"},[i("h3",{staticClass:"text-ellipsis"},[t._v(t._s(a.name))]),t._v(" "),i("h6",{staticClass:"text-ellipsis"},[t._v(t._s(a.sub_name))]),t._v(" "),i("p",{staticClass:"integral"},[t._v(t._s(a.integral>>0)+"积分 ")])])])])})})],2),t._v(" "),i("v-back-top")],1)},staticRenderFns:[]}}});