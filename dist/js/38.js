webpackJsonp([38],{184:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"gold",props:{dialog:Object,close:Function,func:Function,show:{type:Boolean,default:!1}},data:function(){return{content_show:!1,decoration_show:!1}},mounted:function(){var t=this;this.show&&setTimeout(function(){t.content_show=!0},50)}}},247:function(t,o,e){"use strict";t.exports=e(525)},269:function(t,o,e){o=t.exports=e(0)(),o.push([t.i,".gold[data-v-1a3b3665]{position:fixed;top:50%;left:50%;margin-left:-2.105rem;margin-top:-2.41rem;z-index:6}.gold .content[data-v-1a3b3665]{position:relative;width:4.21rem;height:4.82rem;overflow:hidden;background:url("+e(468)+") no-repeat;background-size:100% 100%}.gold .product[data-v-1a3b3665]{bottom:26%;width:1.86rem;height:1.86rem}.gold .message[data-v-1a3b3665],.gold .product[data-v-1a3b3665]{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.gold .message[data-v-1a3b3665]{top:21%;width:90%;height:.44rem;line-height:.44rem;overflow:hidden;text-align:center;color:#fff}.gold .score[data-v-1a3b3665]{position:absolute;left:50%;top:8.5%;color:#ffe035;font-size:.36rem;font-weight:500}.gold .operation[data-v-1a3b3665]{position:absolute;left:11%;bottom:7%;width:1.55rem;height:.64rem}.gold .operation[data-v-1a3b3665]:last-child{left:auto;right:9%}",""])},332:function(t,o,e){var a=e(269);"string"==typeof a&&(a=[[t.i,a,""]]);e(2)(a,{});a.locals&&(t.exports=a.locals)},468:function(t,o,e){t.exports=e.p+"images/goldBackground.8d4269d129d390ccf3aac5a39ab6c47c.png"},525:function(t,o,e){e(332);var a=e(1)(e(184),e(573),"data-v-1a3b3665",null);t.exports=a.exports},573:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"enlarge"}},[t.show?e("div",{staticClass:"gold"},[e("div",{staticClass:"content"},[e("span",{staticClass:"score"},[t._v(t._s(t.dialog.score))]),t._v(" "),e("h3",{staticClass:"message"},[t._v(t._s(t.dialog.msg))]),t._v(" "),e("img",{staticClass:"product",attrs:{src:t.dialog.img}}),t._v(" "),e("div",{staticClass:"operation",on:{click:t.close}}),t._v(" "),e("div",{staticClass:"operation",on:{click:t.func}})])]):t._e()])},staticRenderFns:[]}}});