webpackJsonp([8],{141:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"subjectDetail",data:function(){return{subject_id:"",subject_detail:{class_items:[]},current_tab:"全部",content_show:!1}},computed:{tabs:function(){return this.subject_detail.class_items},tabs_show:function(){return this.subject_detail.class_items.length>1}},watch:{subject_id:function(t){var e=this;this.content_show=!1,this.getSubjectDetail().then(function(){e.content_show=!0})}},activated:function(){this.subject_id=this.$route.query.subject_id,this.$store.dispatch("subjectView",this.subject_id);var e=t.getSessionStorage("position:"+this.$route.name);e&&window.scrollTo(0,e)},beforeRouteLeave:function(t,e,i){"index"==t.name&&(this.current_tab="全部"),i()},methods:{getSubjectDetail:function(){var t=this;return new Promise(function(e,n){t.$store.dispatch("toggleLoading"),t.$http.post(i.HOST+"/subject_detail/"+t.subject_id,{token:i.TOKEN,userid:i.USER_ID,media_id:i.MEDIA_ID}).then(function(i){t.$store.dispatch("toggleLoading");var n=i.data;t.subject_detail=n.data,e&&e()},function(e){t.$store.dispatch("toggleLoading")})})},switchTab:function(t){this.current_tab=t},getRouter:function(t){return 1==t.type?{name:"product_detail",query:{product_id:t.item_id,integral:t.integral>>0,product_name:t.name}}:2==t.type?{name:"activity_detail",query:{activity_id:t.item_id}}:void 0}}}}).call(e,i(5),i(3))},161:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"header[data-v-27b05f87]{width:100%;height:4.66667rem;background-color:#f2f3f4}.tabs[data-v-27b05f87]{display:flex;display:-webkit-flex;border-bottom:1px solid #f2f3f4}.tabs li[data-v-27b05f87]{flex:1;-webkit-flex:1;text-align:center;height:1.06667rem;padding:0 .2rem;line-height:1.06667rem;list-style:none}.tabs li.active[data-v-27b05f87]{color:#de443b}",""])},191:function(t,e,i){var n=i(161);"string"==typeof n&&(n=[[t.i,n,""]]);i(1)(n,{});n.locals&&(t.exports=n.locals)},28:function(t,e,i){"use strict";t.exports=i(290)},290:function(t,e,i){i(191);var n=i(2)(i(141),i(298),"data-v-27b05f87",null);t.exports=n.exports},298:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.content_show,expression:"content_show"}],staticClass:"subject-detail"},[i("header",[i("img",{staticClass:"img-responsive",attrs:{src:t.subject_detail.pic}})]),t._v(" "),i("main",[t.tabs_show?i("ul",{staticClass:"tabs"},[i("li",{class:{active:"全部"==t.current_tab},on:{click:function(e){t.switchTab("全部")}}},[t._v("全部")]),t._v(" "),t._l(t.tabs,function(e){return i("li",{class:{active:t.current_tab==e.name},on:{click:function(i){t.switchTab(e.name)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])})],2):t._e(),t._v(" "),t._l(t.tabs,function(e){return t._l(e.items,function(n){return i("router-link",{attrs:{to:t.getRouter(n),tag:"div"}},[i("v-list-item",{directives:[{name:"show",rawName:"v-show",value:"全部"==t.current_tab||t.current_tab==e.name,expression:'current_tab=="全部"||current_tab==tab.name'}],attrs:{title:n.name,"title-dupty":~~n.integral+"积分",img:n.pic,color:"red"}})],1)})})],2),t._v(" "),i("v-back-top")],1)},staticRenderFns:[]}}});