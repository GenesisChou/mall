webpackJsonp([34],{120:function(e,t,i){i(128);var o=i(1)(i(122),i(136),"data-v-c5ac4128",null);e.exports=o.exports},122:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{togglePopup:Function,callback:Function,show:{type:Boolean,default:!1}},methods:{close:function(){this.callback?this.callback():this.togglePopup()}}}},126:function(e,t,i){t=e.exports=i(0)(),t.push([e.i,".v-popup .v-popup-content[data-v-c5ac4128]{position:fixed;bottom:0;left:0;right:0;border-top:1px solid #f2f3f4;z-index:2}.v-popup .close-popup[data-v-c5ac4128]{position:absolute;right:0;top:0;padding-right:.2rem;padding-top:.2rem;color:#ff5000}.v-popup .bg-cover[data-v-c5ac4128]{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1}.v-popup .iconfont[data-v-c5ac4128]{font-size:.4rem}.popup-enter-active[data-v-c5ac4128],.popup-leave-active[data-v-c5ac4128]{transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.popup-enter[data-v-c5ac4128],.popup-leave-active[data-v-c5ac4128]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}",""])},128:function(e,t,i){var o=i(126);"string"==typeof o&&(o=[[e.i,o,""]]);i(2)(o,{});o.locals&&(e.exports=o.locals)},136:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-popup"},[i("transition",{attrs:{name:"popup"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"v-popup-content"},[i("i",{staticClass:"close-popup iconfont icon-close-circle",on:{click:e.close}}),e._v(" "),e._t("default")],2)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"bg-cover"})],1)},staticRenderFns:[]}},139:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=i(19),r=i.n(o),n=i(120),s=i.n(n);t.default={name:"vAddressEdit",components:{vPopup:s.a,vModal:r.a},props:{togglePopup:Function,show:{type:Boolean,default:!1},title:{type:String,default:"新建收货地址"},id:Number},data:function(){return{modal:!1,current_type:"province",province_list:"",city_list:"",country_list:"",receive_infor:{province:"",city:"",country:"",address:"",phone:"",contact:""},address_id:{province:"",city:"",country:""}}},computed:{save:function(){return this.id?this.updateAddress:this.insertAddress},address_list:function(){return this.$store.state.address_list},is_empty:function(){var e=this.receive_infor;return!(e.province||e.address||e.phone||e.contact)},is_defaults:function(){var e=this;if(0===this.address_list.length)return 1;var t=0;return this.address_list.forEach(function(i){i.id===e.id&&(t=i.is_defaults)}),t}},watch:{show:function(e){var t=this;e&&(this.getProvinceList(),this.id>0&&this.address_list.forEach(function(e){if(e.id===t.id)return t.address_id.province=e.province_id,t.address_id.city=e.city_id,t.address_id.country=e.country_id,t.getCityList(e.province_id),t.getCountryList(e.city_id),t.receive_infor.province=e.province,t.receive_infor.city=e.city,t.receive_infor.country=e.country,t.receive_infor.address=e.address,t.receive_infor.phone=e.phone,void(t.receive_infor.contact=e.contact)}))}},methods:{insertAddress:function(){var t=this;this.$store.dispatch("toggleLoading"),this.$http.post(e.HOST+"/address_insert/"+e.USER_ID,{token:e.TOKEN,userid:e.USER_ID,province:this.receive_infor.province,city:this.receive_infor.city,country:this.receive_infor.country,address:this.receive_infor.address,phone:this.receive_infor.phone,contact:this.receive_infor.contact,is_defaults:this.is_defaults,province_id:this.address_id.province,city_id:this.address_id.city,country_id:this.address_id.country}).then(function(i){t.$store.dispatch("toggleLoading");var o=i.data;o.status===e.SUCCESS?(t.$store.dispatch("getAddressList"),setTimeout(function(){t.togglePopup(),t.clearInput()},500)):t.$store.dispatch("toggleAlert",{msg:o.info})},function(e){t.$store.dispatch("toggleLoading")})},updateAddress:function(){var t=this;this.$store.dispatch("toggleLoading"),this.$http.post(e.HOST+"/address_update/"+this.id,{token:e.TOKEN,userid:e.USER_ID,province:this.receive_infor.province,city:this.receive_infor.city,country:this.receive_infor.country,address:this.receive_infor.address,phone:this.receive_infor.phone,contact:this.receive_infor.contact,is_defaults:this.is_defaults,province_id:this.address_id.province,city_id:this.address_id.city,country_id:this.address_id.country}).then(function(i){t.$store.dispatch("toggleLoading");var o=i.data;o.status===e.SUCCESS?(t.$store.dispatch("getAddressList"),setTimeout(function(){t.togglePopup(),t.clearInput()},500)):t.$store.dispatch("toggleAlert",{msg:o.info})},function(e){t.$store.dispatch("toggleLoading")})},cancelEdit:function(){this.toggleConfirm()},clearInput:function(e){this.receive_infor.country="",this.address_id.country="","city"!==e&&(this.receive_infor.city="",this.address_id.city="","province"!==e&&(this.address_id.province="",this.receive_infor.province="",this.receive_infor.contact="",this.receive_infor.address="",this.receive_infor.phone=""))},showAreaList:function(e){("city"!==e||this.receive_infor.province)&&("country"!==e||this.receive_infor.city)&&(this.current_type=e,this.toggleModal())},selectAddress:function(e,t,i){"province"===e?this.address_id.province&&this.address_id.province===i||(this.receive_infor.province=t,this.address_id.province=i,this.getCityList(i),this.clearInput("province")):"city"===e?this.address_id.city&&this.address_id.city===i||(this.receive_infor.city=t,this.address_id.city=i,this.getCountryList(i),this.clearInput("city")):"country"===e&&(this.receive_infor.country=t,this.address_id.country=i),this.toggleModal()},getProvinceList:function(){var t=this;this.$http.post(e.HOST+"/province_list",{token:e.TOKEN,userid:e.USER_ID}).then(function(e){t.province_list=e.data.data},function(e){})},getCityList:function(t){var i=this;this.$http.post(e.HOST+"/city_list/"+t,{token:e.TOKEN,userid:e.USER_ID}).then(function(e){i.city_list=e.data.data},function(e){})},getCountryList:function(t){var i=this;this.$http.post(e.HOST+"/country_list/"+t,{token:e.TOKEN,userid:e.USER_ID}).then(function(e){i.country_list=e.data.data},function(e){})},toggleConfirm:function(){var e=this;this.is_empty?this.togglePopup():this.$store.dispatch("toggleConfirm",{msg:"确认放弃编辑?",callback:function(){e.togglePopup(),e.clearInput()}})},toggleModal:function(){this.modal=!this.modal}}}}).call(t,i(4))},143:function(e,t,i){t=e.exports=i(0)(),t.push([e.i,".edit-address[data-v-3a35892d]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:6.4rem;background:#f2f3f4}.edit-address .header[data-v-3a35892d]{text-align:center;line-height:1.14rem;border-bottom:1px solid #f2f3f4;color:#3d4244;background-color:#fff}.edit-address .main[data-v-3a35892d]{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 .53rem;margin-bottom:.3rem;list-style:none;background-color:#fff}.edit-address .main li[data-v-3a35892d]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:.95rem;overflow:hidden;border-bottom:1px solid #f2f3f4}.edit-address .main li[data-v-3a35892d]:last-child{border-bottom:none}.edit-address .main li.address .form-control[data-v-3a35892d]{-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.edit-address .main li.address .iconfont[data-v-3a35892d]{position:absolute;right:.13rem;top:50%;font-size:.24rem;font-weight:700;color:#a3a3a3;-webkit-transform:scale(.7) translateY(-50%);-ms-transform:scale(.7) translateY(-50%);transform:scale(.7) translateY(-50%)}.edit-address .main li.address .iconfont.third[data-v-3a35892d]{right:0}.edit-address .main li.address input[data-v-3a35892d]{width:1.5rem}.edit-address .main label[data-v-3a35892d]{width:1.5rem;font-size:.32rem;color:#646565}.edit-address .main input[data-v-3a35892d]{-webkit-flex:1;-ms-flex:1;flex:1;color:#646565;background:none;border:0;font-size:.28rem}.edit-address .footer[data-v-3a35892d]{padding:.2rem 0;text-align:center;background-color:#fff}.edit-address .footer .btn[data-v-3a35892d]{width:6.9rem;height:.72rem;text-indent:.12rem;letter-spacing:.12rem}.modal-content[data-v-3a35892d]{background-color:#fff;max-height:6rem;overflow:scroll;border-radius:.1rem;-webkit-overflow-scrolling:touch}.modal-content[data-v-3a35892d]::-webkit-scrollbar{display:none}.modal-content li[data-v-3a35892d]{width:4rem;height:.7rem;line-height:.7rem;padding:0 .2rem;list-style:none;overflow:hidden;border-bottom:1px solid #f2f3f4}.modal-content li[data-v-3a35892d]:active{background-color:#f2f2f2}.modal-content li[data-v-3a35892d]:last-child{border-bottom:none}.modal-content li .radio[data-v-3a35892d]{display:inline-block;width:.3rem;height:.3rem;line-height:.7rem;margin-right:.2rem;border-radius:50%;box-shadow:inset 0 0 .1rem #f2f3f4}.modal-content li .radio.active[data-v-3a35892d]{box-shadow:none;border:.1rem solid #ff5000}",""])},146:function(e,t,i){var o=i(143);"string"==typeof o&&(o=[[e.i,o,""]]);i(2)(o,{});o.locals&&(e.exports=o.locals)},151:function(e,t,i){i(146);var o=i(1)(i(139),i(152),"data-v-3a35892d",null);e.exports=o.exports},152:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"v-address-edit"},[i("v-popup",{attrs:{callback:e.cancelEdit,show:e.show,"toggle-popup":e.togglePopup}},[i("form",{staticClass:"edit-address "},[i("header",{staticClass:"header"},[i("h1",[e._v(e._s(e.title))])]),e._v(" "),i("ul",{staticClass:"main"},[i("li",[i("label",{attrs:{for:"contact"}},[e._v("收货人")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.receive_infor.contact,expression:"receive_infor.contact"}],attrs:{id:"contact",placeholder:"收货人姓名"},domProps:{value:e.receive_infor.contact},on:{input:function(t){t.target.composing||(e.receive_infor.contact=t.target.value)}}})]),e._v(" "),i("li",[i("label",{attrs:{for:"phone"}},[e._v("联系电话")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.receive_infor.phone,expression:"receive_infor.phone"}],attrs:{id:"phone",type:"tel",placeholder:"手机或固定电话"},domProps:{value:e.receive_infor.phone},on:{input:function(t){t.target.composing||(e.receive_infor.phone=t.target.value)}}})]),e._v(" "),i("li",{staticClass:"address"},[i("label",{attrs:{for:"province"}},[e._v("选择地址")]),e._v(" "),i("div",{staticClass:"form-control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.receive_infor.province,expression:"receive_infor.province"}],attrs:{id:"province",placeholder:"请选择省",readonly:""},domProps:{value:e.receive_infor.province},on:{click:function(t){e.showAreaList("province")},input:function(t){t.target.composing||(e.receive_infor.province=t.target.value)}}}),e._v(" "),e.receive_infor.province?e._e():i("i",{staticClass:" iconfont icon-arrows-down"})]),e._v(" "),i("div",{staticClass:"form-control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.receive_infor.city,expression:"receive_infor.city"}],attrs:{id:"city",placeholder:"请选择市",readonly:""},domProps:{value:e.receive_infor.city},on:{click:function(t){e.showAreaList("city")},input:function(t){t.target.composing||(e.receive_infor.city=t.target.value)}}}),e._v(" "),e.receive_infor.city?e._e():i("i",{staticClass:" iconfont icon-arrows-down"})]),e._v(" "),i("div",{staticClass:"form-control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.receive_infor.country,expression:"receive_infor.country"}],attrs:{id:"country",placeholder:"请选择县",readonly:""},domProps:{value:e.receive_infor.country},on:{click:function(t){e.showAreaList("country")},input:function(t){t.target.composing||(e.receive_infor.country=t.target.value)}}}),e._v(" "),e.receive_infor.country?e._e():i("i",{staticClass:" iconfont icon-arrows-down third"})])]),e._v(" "),i("li",[i("label",{attrs:{for:"address"}},[e._v("详细地址")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.receive_infor.address,expression:"receive_infor.address"}],attrs:{id:"address",placeholder:"请输入详细地址"},domProps:{value:e.receive_infor.address},on:{input:function(t){t.target.composing||(e.receive_infor.address=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"space"}),e._v(" "),i("footer",{staticClass:"footer"},[i("button",{staticClass:"btn btn-orange",on:{click:function(t){t.preventDefault(),e.save(t)}}},[e._v("保存")])])])]),e._v(" "),i("v-modal",{model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[i("div",{staticClass:"modal-content"},["province"==e.current_type?i("ul",e._l(e.province_list,function(t){return i("li",{on:{click:function(i){e.selectAddress("province",t.province,t.provinceid)}}},[i("i",{class:["radio",e.address_id.province==t.provinceid?"active":""]}),e._v(" "),i("span",[e._v(e._s(t.province))])])})):e._e(),e._v(" "),"city"==e.current_type?i("ul",e._l(e.city_list,function(t){return i("li",{on:{click:function(i){e.selectAddress("city",t.city,t.cityid)}}},[i("i",{class:["radio",e.address_id.city==t.cityid?"active":""]}),e._v(" "),i("span",[e._v(e._s(t.city))])])})):e._e(),e._v(" "),"country"==e.current_type?i("ul",e._l(e.country_list,function(t){return i("li",{on:{click:function(i){e.selectAddress("country",t.country,t.countryid)}}},[i("i",{class:["radio",e.address_id.country==t.countryid?"active":""]}),e._v(" "),i("span",[e._v(e._s(t.country))])])})):e._e()])])],1)},staticRenderFns:[]}}});