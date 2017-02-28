webpackJsonp([3],{125:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=i(273),n=i.n(o);e.default={name:"vAddress",components:{vListChoose:n.a},props:{address:Object,id:Object,changeName:Function,changeId:Function},data:function(){return{show_province:!1,show_city:!1,show_country:!1,province_list:[],city_list:[],country_list:[]}},computed:{province:function(){return this.address.province},city:function(){return this.address.city},country:function(){return this.address.country},province_id:function(){return this.id.province_id},city_id:function(){return this.id.city_id},country_id:function(){return this.id.country_id}},watch:{province_id:function(t){var e="";t&&this.province_list.length&&(this.getCityList(t),this.changeId("city"),this.changeId("country"),e=this.getAddressName("province",t,this.province_list)),this.changeName("province",e)},city_id:function(t){var e="";t?(this.getCountryList(t),this.changeId("country"),e=this.getAddressName("city",t,this.city_list)):this.country_list=[],this.changeName("city",e)},country_id:function(t){var e="";t&&(e=this.getAddressName("country",t,this.country_list)),this.changeName("country",e)}},created:function(){this.getProvinceList(),this.province_id&&this.getCityList(this.province_id),this.city_id&&this.getCountryList(this.city_id)},methods:{listEvent:function(t){var e=Object.keys(t)[1];this.changeId(e,t[e+"id"])},isActive:function(t){var e=Object.keys(t)[1];return this[e+"_id"]==t[e+"id"]},getProvinceList:function(){var e=this;return new Promise(function(i){e.$http.post(t.HOST+"/province_list",{token:t.TOKEN,userid:t.USER_ID}).then(function(t){var o=t.data;e.province_list=o.data||[],i&&i()})})},getCityList:function(e){var i=this;return new Promise(function(o){i.$http.post(t.HOST+"/city_list/"+e,{token:t.TOKEN,userid:t.USER_ID}).then(function(t){var e=t.data;i.city_list=e.data||[],o&&o()},function(t){})})},getCountryList:function(e){var i=this;return new Promise(function(o){i.$http.post(t.HOST+"/country_list/"+e,{token:t.TOKEN,userid:t.USER_ID}).then(function(t){var e=t.data;i.country_list=e.data||[],o&&o()})})},getAddressName:function(t,e,i){var o=t+"id",n="";return i.forEach(function(i){if(i[o]==e)return void(n=i[t])}),n},toggleProvince:function(){this.show_province=!this.show_province},toggleCity:function(){this.show_city=!this.show_city},toggleCountry:function(){this.city_id&&(this.show_country=!this.show_country)}}}}).call(e,i(3))},126:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(9),n=i.n(o);e.default={name:"vListChoose",components:{vModal:n.a},props:{show:{type:Boolean,default:!1},toggleModal:Function,list:{type:Array,default:function(){return[]}},attribute:String,callback:Function,isActive:Function,value:Boolean},data:function(){return{}},watch:{},methods:{event:function(t){this.callback(t),this.toggleModal()}}}},127:function(t,e,i){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0});var n=i(272),r=i.n(n);e.default={name:"editUser",components:{vAddress:r.a},data:function(){return{show_birth:!1,birth:{year:"",month:"",day:""},province:"",city:"",country:"",address:"",phone:"",contact:"",birthday:"",province_id:"",city_id:"",country_id:"",verification_code:""}},computed:{user:function(){return this.$store.state.user},content_show:function(){return!t.isEmptyObject(this.user)},is_submit:function(){return 1==this.$store.state.user.is_submit},default_address:function(){return this.user.default_address||{}},birth_format:function(){return this.birth.year&&this.birth.month&&this.birth.day?this.birth.year+"-"+this.birth.month+"-"+this.birth.day:""}},watch:{default_address:function(t){this.init(t)}},created:function(){this.init(this.default_address),this.birth={year:this.user.year||"",month:this.user.month||"",day:this.user.day||""}},methods:{init:function(e){var i=this;if(!t.isEmptyObject(e)){var o=["province","city","country","address","phone","contact","province_id","city_id","country_id"];o.forEach(function(t){i[t]=e[t]}),this.birthday=this.user.birthday}},reset:function(){event.preventDefault(),this.$refs.form.reset()},submit:function(){var t=this;event.preventDefault(),this.$store.dispatch("toggleLoading"),this.$http.post(o.HOST+"/user_submit/"+o.USER_ID,{token:o.TOKEN,userid:o.USER_ID,province:this.province,city:this.city,country:this.country,address:this.address,phone:this.phone,contact:this.contact,birthday:this.birthday,province_id:this.province_id,city_id:this.city_id,country_id:this.country_id,verification_code:this.verification_code}).then(function(e){t.$store.dispatch("toggleLoading");var i=e.data;t.$store.dispatch("toggleAlert",{msg:i.info})},function(e){t.$store.dispatch("toggleLoading")})},getVerificationCode:function(){var t=this;event.preventDefault(),this.$http.post(o.HOST+"/verification_sm/"+o.USER_ID,{token:o.TOKEN,userid:o.USER_ID,phone:this.phone}).then(function(e){var i=e.data;i.status!=o.SUCCESS&&t.$store.dispatch("toggleAlert",{msg:i.info})})},changeName:function(t,e){var i=this,o=["province","city","country"];o.forEach(function(o){if(o==t)return void(i[o]=e)})},changeId:function(t,e){var i=this,o=["province","city","country"];o.forEach(function(o){if(o==t)return void(i[o+"_id"]=e)})}}}}).call(e,i(5),i(3))},164:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".main[data-v-34f6b8ab]{min-height:16.2rem;background-color:#fff;padding:0 .70667rem;padding-top:1.06667rem;list-style:none}.main>li[data-v-34f6b8ab]{overflow:hidden}.main .code input[data-v-34f6b8ab]{width:4rem}.main .code button[data-v-34f6b8ab]{width:1.33333rem;height:.66667rem;line-height:.66667rem;transform:translate(.4rem,.13333rem);-webkit-transform:translate(.4rem,.13333rem)}.main .select-address input[data-v-34f6b8ab]{float:left;width:2rem;margin-right:.13333rem}.main .select-address input[data-v-34f6b8ab]:nth-child(4){margin-right:0}.main label[data-v-34f6b8ab]{float:left;width:2rem;height:.93333rem;line-height:.93333rem;font-size:.4rem;text-align:left}.main input[data-v-34f6b8ab]{width:6.26667rem;height:.93333rem;line-height:.93333rem;box-sizing:border-box;color:#666;border:0;font-size:.34667rem;border-bottom:1px solid #f2f3f4;transition-duration:.5s}.main input[data-v-34f6b8ab]:focus{border-bottom:1px solid #de443b}.main .address input[data-v-34f6b8ab]{width:100%}.main textarea[data-v-34f6b8ab]{width:6.26667rem;height:1.46667rem;margin-top:.10667rem;line-height:.66667rem;font-size:.34667rem;border:0;border-bottom:1px solid #f2f3f4;color:#666;transition-duration:.5s}.main textarea[data-v-34f6b8ab]:focus{border-bottom:1px solid #de443b}.operation[data-v-34f6b8ab]{padding:1.33333rem .33333rem 0 2rem}.operation button[data-v-34f6b8ab]{width:1.33333rem}",""])},174:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".v-address[data-v-c4584b9e]{float:left}.v-address input[data-v-c4584b9e]{float:left;width:2rem;height:.93333rem;line-height:.93333rem;margin-right:.13333rem;box-sizing:border-box;color:#666;border:0;font-size:.34667rem;border-bottom:1px solid #f2f3f4;transition-duration:.5s}.v-address input[data-v-c4584b9e]:focus{border-bottom:1px solid #de443b}.v-address input[data-v-c4584b9e]:nth-child(4){margin-right:0}",""])},179:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".v-list-choose[data-v-fa273eb0]{background-color:#fff;max-height:8rem;overflow:scroll;-webkit-overflow-scrolling:touch;border-radius:.13333rem}.v-list-choose[data-v-fa273eb0]::-webkit-scrollbar{display:none}.v-list-choose li[data-v-fa273eb0]{display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center;width:5.33333rem;height:.93333rem;list-style:none;overflow:hidden;border-bottom:1px solid #f2f3f4}.v-list-choose li[data-v-fa273eb0]:last-child{border-bottom:1px solid #f2f3f4}.v-list-choose li[data-v-fa273eb0]:active{background-color:#e6e6e6}.v-list-choose li .radio[data-v-fa273eb0]{width:.4rem;height:.4rem;margin:0 .26667rem;border-radius:50%;box-shadow:inset 0 0 .13333rem #f2f3f4}.v-list-choose li .radio.active[data-v-fa273eb0]{box-shadow:none;-webkit-box-shadow:none;border:.13333rem solid #de443b}",""])},193:function(t,e,i){var o=i(164);"string"==typeof o&&(o=[[t.i,o,""]]);i(1)(o,{});o.locals&&(t.exports=o.locals)},203:function(t,e,i){var o=i(174);"string"==typeof o&&(o=[[t.i,o,""]]);i(1)(o,{});o.locals&&(t.exports=o.locals)},208:function(t,e,i){var o=i(179);"string"==typeof o&&(o=[[t.i,o,""]]);i(1)(o,{});o.locals&&(t.exports=o.locals)},21:function(t,e,i){"use strict";t.exports=i(274)},272:function(t,e,i){i(203);var o=i(2)(i(125),i(309),"data-v-c4584b9e",null);t.exports=o.exports},273:function(t,e,i){i(208);var o=i(2)(i(126),i(314),"data-v-fa273eb0",null);t.exports=o.exports},274:function(t,e,i){i(193);var o=i(2)(i(127),i(299),"data-v-34f6b8ab",null);t.exports=o.exports},299:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.content_show?i("div",{staticClass:"edit-user"},[i("form",{ref:"form"},[i("ul",{staticClass:"main"},[i("li",[i("label",{attrs:{for:"contact"}},[t._v("姓名")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"}],attrs:{id:"contact",placeholder:"姓名"},domProps:{value:t.contact},on:{input:function(e){e.target.composing||(t.contact=e.target.value)}}})]),t._v(" "),i("li",[i("label",{attrs:{for:"birth"}},[t._v("出生年月")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.birthday,expression:"birthday"}],attrs:{type:"date",format:"yyyy-MM-dd"},domProps:{value:t.birthday},on:{input:function(e){e.target.composing||(t.birthday=e.target.value)}}})]),t._v(" "),i("li",[i("label",{attrs:{for:"phone"}},[t._v("手机号")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{id:"phone",type:"tel",placeholder:"手机或固定电话"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),i("li",{staticClass:"code"},[i("label",{attrs:{for:"code"}},[t._v("验证码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.verification_code,expression:"verification_code"}],attrs:{id:"code"},domProps:{value:t.verification_code},on:{input:function(e){e.target.composing||(t.verification_code=e.target.value)}}}),t._v(" "),i("button",{staticClass:"btn btn-red",on:{click:t.getVerificationCode}},[t._v("验证")])]),t._v(" "),i("li",{staticClass:"select-address"},[i("label",{attrs:{for:"province"}},[t._v("收货地址")]),t._v(" "),i("v-address",{attrs:{address:{province:t.province,city:t.city,country:t.country},id:{province_id:t.province_id,city_id:t.city_id,country_id:t.country_id},"change-id":t.changeId,"change-name":t.changeName}})],1),t._v(" "),i("li",[i("label",{attrs:{for:"address"}}),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{id:"address",placeholder:"请输入详细地址"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),i("li",{staticClass:"operation"},[i("button",{staticClass:"btn pull-left",on:{click:t.reset}},[t._v("重置")]),t._v(" "),i("button",{staticClass:"btn btn-red pull-right",on:{click:t.submit}},[t._v("确认")])])])])]):t._e()},staticRenderFns:[]}},309:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-address"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.province,expression:"province"}],attrs:{id:"province",placeholder:"请选择省",readonly:""},domProps:{value:t.province},on:{click:t.toggleProvince,input:function(e){e.target.composing||(t.province=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{id:"city",placeholder:"请选择市",readonly:""},domProps:{value:t.city},on:{click:t.toggleCity,input:function(e){e.target.composing||(t.city=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{id:"country",placeholder:"请选择区县",readonly:""},domProps:{value:t.country},on:{click:t.toggleCountry,input:function(e){e.target.composing||(t.country=e.target.value)}}}),t._v(" "),i("v-list-choose",{attrs:{show:t.show_province,"toggle-modal":t.toggleProvince,list:t.province_list,attribute:"province",callback:t.listEvent,"is-active":t.isActive}}),t._v(" "),i("v-list-choose",{attrs:{show:t.show_city,"toggle-modal":t.toggleCity,list:t.city_list,attribute:"city",callback:t.listEvent,"is-active":t.isActive}}),t._v(" "),i("v-list-choose",{attrs:{show:t.show_country,"toggle-modal":t.toggleCountry,list:t.country_list,attribute:"country",callback:t.listEvent,"is-active":t.isActive}})],1)},staticRenderFns:[]}},314:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-modal",{attrs:{"toggle-modal":t.toggleModal},model:{value:t.show,callback:function(e){t.show=e}}},[i("ul",{ref:"list",staticClass:"v-list-choose"},t._l(t.list,function(e){return i("li",{on:{click:function(i){t.event(e)}}},[i("i",{class:["radio",{active:t.isActive(e)}]}),t._v(" "),i("span",[t._v(t._s(e[t.attribute]))])])}))])},staticRenderFns:[]}}});