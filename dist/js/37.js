webpackJsonp([37],{185:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"mario",props:{dialog:Object,close:Function,func:Function,show:{type:Boolean,default:!1}},data:function(){return{content_show:!1,decoration_show:!1}},mounted:function(){var t=this;this.show&&setTimeout(function(){t.content_show=!0},50)}}},248:function(t,o,e){"use strict";t.exports=e(526)},299:function(t,o,e){o=t.exports=e(0)(),o.push([t.i,".mario[data-v-697dbd6f]{position:fixed;top:50%;left:50%;margin-left:-2.815rem;margin-top:-3.52rem;z-index:6}.mario .content[data-v-697dbd6f]{position:relative;width:5.63rem;height:7.04rem;overflow:hidden;background:url("+e(469)+") no-repeat;background-size:100% 100%;border-radius:.1rem}.mario .product[data-v-697dbd6f]{top:36%;width:2.06rem;height:2.06rem}.mario .message[data-v-697dbd6f],.mario .product[data-v-697dbd6f]{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.mario .message[data-v-697dbd6f]{bottom:24%;width:4.8rem;height:.34rem;line-height:.34rem;overflow:hidden;text-align:center;color:#904c2e}.mario .score[data-v-697dbd6f]{position:absolute;left:58%;top:24.6%;color:#1fb9db;font-size:.4rem;font-weight:500}.mario .operation[data-v-697dbd6f]{position:absolute;left:11%;bottom:11%;width:2rem;height:.64rem}.mario .operation[data-v-697dbd6f]:last-child{left:auto;right:10%}",""])},362:function(t,o,e){var a=e(299);"string"==typeof a&&(a=[[t.i,a,""]]);e(2)(a,{});a.locals&&(t.exports=a.locals)},469:function(t,o,e){t.exports=e.p+"images/marioBackground.15e190ebfab6d732ac53082bf96434ff.png"},526:function(t,o,e){e(362);var a=e(1)(e(185),e(604),"data-v-697dbd6f",null);t.exports=a.exports},604:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"enlarge"}},[t.show?e("div",{staticClass:"mario"},[e("div",{staticClass:"content"},[e("span",{staticClass:"score"},[t._v(t._s(t.dialog.score))]),t._v(" "),e("h4",{staticClass:"message"},[t._v(t._s(t.dialog.msg))]),t._v(" "),e("img",{staticClass:"product",attrs:{src:t.dialog.img}}),t._v(" "),e("div",{staticClass:"operation",on:{click:t.close}}),t._v(" "),e("div",{staticClass:"operation",on:{click:t.func}})])]):t._e()])},staticRenderFns:[]}}});