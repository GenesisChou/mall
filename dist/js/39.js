webpackJsonp([39],{182:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"eliminate",props:{dialog:Object,close:Function,func:Function,show:{type:Boolean,default:!1}},data:function(){return{content_show:!1,decoration_show:!1}},mounted:function(){var t=this;this.show&&setTimeout(function(){t.content_show=!0},50)}}},245:function(t,e,a){"use strict";t.exports=a(523)},261:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".eliminate[data-v-090420aa]{position:fixed;top:50%;left:50%;margin-left:-2.28rem;margin-top:-3.46rem;z-index:6}.eliminate .content[data-v-090420aa]{position:relative;width:4.56rem;height:6.92rem;overflow:hidden;background:url("+a(465)+") no-repeat;background-size:100% 100%}.eliminate .product[data-v-090420aa]{top:47.2%;width:1.62rem;height:1.62rem}.eliminate .message[data-v-090420aa],.eliminate .product[data-v-090420aa]{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.eliminate .message[data-v-090420aa]{bottom:20%;width:3.8rem;height:.38rem;line-height:.38rem;overflow:hidden;text-align:center;color:#904c2e}.eliminate .score[data-v-090420aa]{position:absolute;left:50%;top:37.4%;color:#fff;font-size:.3rem;font-weight:500;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.eliminate .operation[data-v-090420aa]{position:absolute;left:5%;bottom:4%;width:1.9rem;height:.7rem}.eliminate .operation[data-v-090420aa]:last-child{left:auto;right:5%}",""])},324:function(t,e,a){var i=a(261);"string"==typeof i&&(i=[[t.i,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},465:function(t,e,a){t.exports=a.p+"images/eliminateBackground.2e14061b91747c7608aa648928a231b3.png"},523:function(t,e,a){a(324);var i=a(1)(a(182),a(564),"data-v-090420aa",null);t.exports=i.exports},564:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"enlarge"}},[t.show?a("div",{staticClass:"eliminate"},[a("div",{staticClass:"content"},[a("span",{staticClass:"score"},[t._v(t._s(t.dialog.score))]),t._v(" "),a("h5",{staticClass:"message"},[t._v(t._s(t.dialog.msg))]),t._v(" "),a("img",{staticClass:"product",attrs:{src:t.dialog.img}}),t._v(" "),a("div",{staticClass:"operation ",on:{click:t.close}}),t._v(" "),a("div",{staticClass:"operation",on:{click:t.func}})])]):t._e()])},staticRenderFns:[]}}});