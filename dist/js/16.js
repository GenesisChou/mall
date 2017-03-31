webpackJsonp([16],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  "data-v-2d71f2a1",
  /* cssModules */
  null
)
Component.options.__file = "/Users/genesischou/Documents/integral-mall/src/views/activityDetail/components/vDescribeTitle/vDescribeTitle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vDescribeTitle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d71f2a1", Component.options)
  } else {
    hotAPI.reload("data-v-2d71f2a1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ["v-describe-title", _vm.color]
  }, [_vm._v("\n    " + _vm._s(_vm.text) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d71f2a1", module.exports)
  }
}

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ["v-aword-box", _vm.color]
  }, [_c('div', {
    staticClass: "wrapper"
  }, [_c('ul', {
    ref: "scroller"
  }, _vm._l((_vm.awords), function(aword) {
    return _c('li', {
      class: ["aword", _vm.color]
    }, [_c('img', {
      attrs: {
        "src": aword.pic
      }
    }), _vm._v(" "), _c('h6', [_vm._v("\n                    " + _vm._s(_vm._f("filter")(aword.name)) + "\n                ")])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ac7f9a2", module.exports)
  }
}

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        integral: Number,
        color: String
    },
    computed: {
        one: function one() {
            return this.integral % 10;
        },
        ten: function ten() {
            return this.integral % 100 / 10 >> 0;
        },
        hundred: function hundred() {
            return this.integral % 1000 / 100 >> 0;
        },
        thousand: function thousand() {
            return this.integral % 10000 / 1000 >> 0;
        },
        million: function million() {
            return this.integral % 100000 / 10000 >> 0;
        }
    }
});

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".v-integral-box[data-v-516e5af2]{overflow:hidden;_zoom:1;list-style:none}.v-integral-box li[data-v-516e5af2]{list-style:none;float:left;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:.58667rem;height:.72rem;margin-left:.06667rem;color:#fff;font-size:.45333rem;border-radius:.13333rem;border:.02667rem solid #fed30b}.v-integral-box li.black[data-v-516e5af2]{background-color:#000}.v-integral-box li.red[data-v-516e5af2]{background-color:#860000}.v-integral-box li.white[data-v-516e5af2]{background-color:#fff9d5;border:.02667rem solid #6b3906;color:#e65413}.v-integral-box li.pink[data-v-516e5af2]{background-color:#f33748;border:none}.v-integral-box li.blue[data-v-516e5af2]{background-color:#89deee;border:none}.v-integral-box li.linen[data-v-516e5af2]{background-color:#ffe594;color:#e63805;border:none}.v-integral-box li.yellow[data-v-516e5af2]{background-color:#fecb35;border:1px solid #ffb119}", ""]);

// exports


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-516e5af2&scoped=true!../../../../node_modules/sass-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vIntegralBox.vue", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-516e5af2&scoped=true!../../../../node_modules/sass-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vIntegralBox.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  "data-v-516e5af2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/genesischou/Documents/integral-mall/src/views/activityDetail/components/vIntegralBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vIntegralBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-516e5af2", Component.options)
  } else {
    hotAPI.reload("data-v-516e5af2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "v-integral-box"
  }, [(_vm.million) ? _c('li', {
    class: _vm.color
  }, [_vm._v(_vm._s(_vm.million))]) : _vm._e(), _vm._v(" "), (_vm.thousand) ? _c('li', {
    class: _vm.color
  }, [_vm._v(_vm._s(_vm.thousand))]) : _vm._e(), _vm._v(" "), _c('li', {
    class: _vm.color
  }, [_vm._v(_vm._s(_vm.hundred))]), _vm._v(" "), _c('li', {
    class: _vm.color
  }, [_vm._v(_vm._s(_vm.ten))]), _vm._v(" "), _c('li', {
    class: _vm.color
  }, [_vm._v(_vm._s(_vm.one))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-516e5af2", module.exports)
  }
}

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(APP) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vDescribeTitle__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vDescribeTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vDescribeTitle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vIntegralBox_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vIntegralBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vIntegralBox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vAwordBox__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vAwordBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vAwordBox__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'tear',
    components: {
        vDescribeTitle: __WEBPACK_IMPORTED_MODULE_0__vDescribeTitle___default.a,
        vIntegralBox: __WEBPACK_IMPORTED_MODULE_1__vIntegralBox_vue___default.a,
        vAwordBox: __WEBPACK_IMPORTED_MODULE_2__vAwordBox___default.a
    },
    props: {
        freshFreeTimes: Function,
        activityDetail: Object,
        id: Number,
        notice: String,
        toOrderDetail: Function,
        freeTimes: Number,
        toggleDialog: Function
    },
    data: function data() {
        return {
            state: '', //游戏状态
            alert: {},
            activity_result: {},
            groups: '',
            select_num: ''
        };
    },

    computed: {
        user: function user() {
            return this.$store.state.user;
        },
        ticket_state: function ticket_state() {
            if (this.state === 'ready') {
                return 'moving';
            } else if (this.state === 'start') {
                return '';
            }
        }
    },
    watch: {
        state: function state(value) {
            var _this = this;

            if (value === 'start') {
                var result = this.activity_result,
                    is_win = result.is_win;
                this.freshFreeTimes();
                if (is_win) {
                    this.alert = {
                        type: 'success',
                        img: result.pic_thumb,
                        msg: '获得' + result.name,
                        btn_text: '查看',
                        callback: this.toOrderDetail(result.id),
                        callback_close: function callback_close() {
                            _this.init();
                        }
                    };
                } else {
                    this.alert = {
                        msg: '很遗憾,未抽中',
                        btn_text: '再来一次',
                        callback: function callback() {
                            _this.init();
                        }
                    };
                }
                setTimeout(function () {
                    _this.toggleDialog(_this.alert);
                }, 2000);
            }
        }
    },
    deactivated: function deactivated() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    created: function created() {
        this.init();
    },

    methods: {
        init: function init() {
            this.state = 'ready';
            this.alert = {};
            this.activity_result = {};
            this.select_num = '';
        },
        start: function start(num) {
            var _this2 = this;

            if (this.state !== 'ready') return;
            this.state = 'block';
            this.$http.post(APP.HOST + '/ticket_activity/' + this.id, {
                token: APP.TOKEN,
                user_id: APP.USER_ID
            }).then(function (response) {
                var data = response.data;
                if (data.status === APP.SUCCESS) {
                    _this2.activity_result = data.data;
                    _this2.is_win = _this2.activity_result.is_win;
                    _this2.state = 'start';
                    _this2.select_num = num;
                } else {
                    _this2.toggleDialog({
                        msg: data.info,
                        callback: function callback() {
                            _this2.init();
                        }
                    });
                }
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(368);

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".machine[data-v-5fca06fe]{position:relative;min-height:16.66667rem;padding-bottom:1.12rem;background:url(" + __webpack_require__(314) + ");background-size:10rem 5.33333rem}.machine li[data-v-5fca06fe],.machine ul[data-v-5fca06fe]{list-style:none}.header[data-v-5fca06fe]{position:relative;width:10rem;height:5.33333rem;margin-bottom:-2rem}.banner-decoration[data-v-5fca06fe]{position:absolute;left:0;top:0;width:10rem;height:.49333rem}.banner[data-v-5fca06fe]{width:10rem;height:5.78667rem}.background[data-v-5fca06fe]{position:absolute;width:10rem;height:13.68rem;left:0;top:1.2rem}.machine-panel[data-v-5fca06fe]{position:relative;width:10rem;height:12.10667rem;margin-bottom:.4rem;background-image:url(" + __webpack_require__(317) + ");background-size:100%;overflow:hidden}.machine-panel .integral-message[data-v-5fca06fe]{margin-top:1.2rem;font-size:.50667rem;color:#fff907}.machine-panel .integral-message[data-v-5fca06fe],.notice[data-v-5fca06fe]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1}.notice[data-v-5fca06fe]{position:absolute;bottom:4.56rem;left:50%;font-weight:500;color:#fff;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.notice .number[data-v-5fca06fe]{padding:0 .06667rem;font-size:.48rem;color:#5a1909}.container[data-v-5fca06fe]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;width:7.06667rem;height:1.97333rem;margin:1.02667rem auto 0;overflow:hidden}.group[data-v-5fca06fe]{position:absolute}.group[data-v-5fca06fe]:first-child{left:0}.group[data-v-5fca06fe]:nth-child(2){left:2.65333rem}.group:nth-child(2) .awards[data-v-5fca06fe]{-webkit-animation-delay:-3.33s;animation-delay:-3.33s}.group[data-v-5fca06fe]:nth-child(3){right:0}.group:nth-child(3) .awards[data-v-5fca06fe]{-webkit-animation-delay:-6.66s;animation-delay:-6.66s}.awards[data-v-5fca06fe]{-webkit-animation:rotate 10s linear infinite;animation:rotate 10s linear infinite}.awards li[data-v-5fca06fe]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;list-style:none;width:1.8rem;height:1.8rem}.awards img[data-v-5fca06fe]{width:1.73333rem;height:1.34667rem}@-webkit-keyframes rotate{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes rotate{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}.tickets[data-v-5fca06fe]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:4.66667rem;position:absolute;padding:0 1.16rem;top:7.8rem;overflow:hidden}.ticket[data-v-5fca06fe]{position:relative;list-style:none}.ticket.active[data-v-5fca06fe]{-webkit-animation:move-fast 2s;animation:move-fast 2s}.ticket.moving[data-v-5fca06fe]{-webkit-animation:move 1s infinite;animation:move 1s infinite}.ticket .top[data-v-5fca06fe]{width:2.21333rem;height:.8rem;background:url(" + __webpack_require__(135) + ") no-repeat;background-size:100%}.bottom[data-v-5fca06fe]{width:2.21333rem;height:2.93333rem;background:url(" + __webpack_require__(135) + ") no-repeat;background-position-y:-.8rem;background-size:100%}.bottom[data-v-5fca06fe]:after{content:\"\";display:none;position:absolute;right:-.64rem;bottom:.13333rem;width:1.24rem;height:1.30667rem;background:url(" + __webpack_require__(316) + ") no-repeat;background-size:100%}.bottom.select[data-v-5fca06fe]{-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;transition:.5s linear;transition-delay:1.2s;-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.bottom.select[data-v-5fca06fe]:after{display:block}@-webkit-keyframes move{0%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes move{0%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes move-fast{0%{-webkit-transform:translateY(0);transform:translateY(0)}10%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}20%{-webkit-transform:translateY(0);transform:translateY(0)}30%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}40%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}60%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes move-fast{0%{-webkit-transform:translateY(0);transform:translateY(0)}10%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}20%{-webkit-transform:translateY(0);transform:translateY(0)}30%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}40%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-10%);transform:translateY(-10%)}60%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.describe[data-v-5fca06fe]{position:relative;padding:0 .53333rem}.describe .editor-style[data-v-5fca06fe]{padding-top:.26667rem;padding-bottom:.53333rem;color:#fff}", ""]);

// exports


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5fca06fe&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tear.vue", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5fca06fe&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tear.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/tearBackground.60f210ddb6c12bfd0255e0af79396e53.png";

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/tearDefaultBanner.bec5ee0d6b881106c956c40fd86b75a5.png";

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/tearPanel.13ef44bb5cb0cc7c4dcb34254d894850.png";

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(256)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  "data-v-5fca06fe",
  /* cssModules */
  null
)
Component.options.__file = "/Users/genesischou/Documents/integral-mall/src/views/activityDetail/components/tear/tear.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tear.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fca06fe", Component.options)
  } else {
    hotAPI.reload("data-v-5fca06fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "machine"
  }, [_c('header', {
    staticClass: "header"
  }, [(!_vm.activityDetail.pic_icon) ? _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.activityDetail.pic_icon
    }
  }) : _c('img', {
    staticClass: "banner",
    attrs: {
      "src": __webpack_require__(315)
    }
  })]), _vm._v(" "), _c('main', [_c('div', {
    staticClass: "machine-panel"
  }, [_c('header', {
    staticClass: "integral-message"
  }, [_vm._v("\n                现有积分:\n                "), _c('v-integral-box', {
    attrs: {
      "integral": _vm.user.integral >> 0,
      "color": "yellow"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, _vm._l((3), function(i) {
    return _c('div', {
      staticClass: "group"
    }, _vm._l((2), function(j) {
      return _c('ul', {
        staticClass: "awards"
      }, _vm._l((_vm.activityDetail.items), function(aword) {
        return _c('li', [_c('img', {
          attrs: {
            "src": aword.pic
          }
        })])
      }))
    }))
  })), _vm._v(" "), _c('div', {
    staticClass: "notice"
  }, [(_vm.freeTimes > 0) ? [_vm._v("\n                    今天还有"), _c('span', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.freeTimes))]), _vm._v("次免费机会\n                ")] : [_vm._v("\n                    每次消耗"), _c('span', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.activityDetail.integral >> 0))]), _vm._v("积分\n                ")]], 2), _vm._v(" "), _c('ul', {
    staticClass: "tickets"
  }, _vm._l((3), function(i, $index) {
    return _c('li', {
      class: ["ticket", _vm.ticket_state, {
        active: $index === _vm.select_num
      }],
      on: {
        "click": function($event) {
          _vm.start($index)
        }
      }
    }, [_c('div', {
      staticClass: "top"
    }), _vm._v(" "), _c('div', {
      class: ["bottom", {
        select: $index === _vm.select_num
      }]
    })])
  }))])]), _vm._v(" "), _c('article', {
    staticClass: "describe"
  }, [_c('v-describe-title', {
    attrs: {
      "text": "详细说明",
      "color": "emerald"
    }
  }), _vm._v(" "), _c('v-simditor', [_c('section', {
    domProps: {
      "innerHTML": _vm._s(_vm.activityDetail.content)
    }
  })]), _vm._v(" "), _c('v-describe-title', {
    attrs: {
      "text": "概率说明",
      "color": "emerald"
    }
  }), _vm._v(" "), _c('v-simditor', [_c('section', {
    domProps: {
      "innerHTML": _vm._s(_vm.activityDetail.content_prob)
    }
  })]), _vm._v(" "), _c('v-describe-title', {
    attrs: {
      "text": "奖项列表",
      "color": "emerald"
    }
  })], 1), _vm._v(" "), _c('footer', [_c('v-aword-box', {
    attrs: {
      "awords": _vm.activityDetail.items,
      "color": "emerald"
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fca06fe", module.exports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

﻿/* AlloyTouch v0.2.3
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/AlloyTouch
 * MIT Licensed.
 */

;(function () {
    'use strict';

    if (!Date.now)
        Date.now = function () { return new Date().getTime(); };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
                                   || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

(function () {

    function bind(element, type, callback) {
        element.addEventListener(type, callback, false);
    }

    function ease(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    }

    function reverseEase(y) {
        return 1 - Math.sqrt(1 - y * y);
    }

    function preventDefaultTest(el, exceptions) {
        for (var i in exceptions) {
            if (exceptions[i].test(el[i])) {
                return true;
            }
        }
        return false;
    }

    var AlloyTouch = function (option) {
        
        this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
        this.target = this._getValue(option.target, this.element);
        this.vertical = this._getValue(option.vertical, true);
        this.property = option.property;
        this.tickID = 0;

        this.initialValue = this._getValue(option.initialValue, this.target[this.property]);
        this.target[this.property] = this.initialValue;
        this.fixed = this._getValue(option.fixed, false);
        this.sensitivity = this._getValue(option.sensitivity, 1);
        this.moveFactor = this._getValue(option.moveFactor, 1);
        this.factor = this._getValue(option.factor, 1);
        this.outFactor = this._getValue(option.outFactor, 0.3);
        this.min = option.min;
        this.max = option.max;
        this.deceleration = 0.0006;
        this.maxRegion = this._getValue(option.maxRegion, 600);
        this.springMaxRegion = this._getValue(option.springMaxRegion, 60);
        this.maxSpeed = option.maxSpeed;
        this.hasMaxSpeed = !(this.maxSpeed === undefined);
        this.lockDirection = this._getValue(option.lockDirection, true);

        var noop = function () { };
        this.change = option.change || noop;
        this.touchEnd = option.touchEnd || noop;
        this.touchStart = option.touchStart || noop;
        this.touchMove = option.touchMove || noop;
        this.touchCancel = option.touchCancel || noop;
        this.reboundEnd = option.reboundEnd || noop;
        this.animationEnd = option.animationEnd || noop;
        this.correctionEnd = option.correctionEnd || noop;
        this.tap = option.tap || noop;
        this.pressMove = option.pressMove || noop;

        this.preventDefault = this._getValue(option.preventDefault, true);
        this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };
        this.hasMin = !(this.min === undefined);
        this.hasMax = !(this.max === undefined);
        if (this.hasMin && this.hasMax && this.min > this.max) {
            throw "the min value can't be greater than the max value."
        }
        this.isTouchStart = false;
        this.step = option.step;
        this.inertia = this._getValue(option.inertia, true);

        this._calculateIndex();

        this.eventTarget = window;
        if(option.bindSelf){
            this.eventTarget = this.element;
        }

        this._moveHandler = this._move.bind(this);
        bind(this.element, "touchstart", this._start.bind(this));
        bind(this.eventTarget, "touchend", this._end.bind(this));
        bind(this.eventTarget, "touchcancel", this._cancel.bind(this));
        this.eventTarget.addEventListener("touchmove", this._moveHandler, { passive: false, capture: false });
        this.x1 = this.x2 = this.y1 = this.y2 = null;
    };

    AlloyTouch.prototype = {
        _getValue: function (obj, defaultValue) {
            return obj === undefined ? defaultValue : obj;
        },
        _start: function (evt) {
            this.isTouchStart = true;
            this.touchStart.call(this, evt, this.target[this.property]);
            cancelAnimationFrame(this.tickID);
            this._calculateIndex();
            this.startTime = new Date().getTime();
            this.x1 = this.preX = evt.touches[0].pageX;
            this.y1 = this.preY = evt.touches[0].pageY;
            this.start = this.vertical ? this.preY : this.preX;
            this._firstTouchMove = true;
            this._preventMove = false;
        },
        _move: function (evt) {
            if (this.isTouchStart) {
                var len = evt.touches.length,
                    currentX = evt.touches[0].pageX,
                    currentY = evt.touches[0].pageY;

                if (this._firstTouchMove && this.lockDirection) {
                    var dDis = Math.abs(currentX - this.x1) - Math.abs(currentY - this.y1);
                    if (dDis > 0 && this.vertical) {
                        this._preventMove = true;
                    } else if (dDis < 0 && !this.vertical) {
                        this._preventMove = true;
                    }
                    this._firstTouchMove = false;
                }
                if(!this._preventMove) {
                    var d = (this.vertical ? currentY - this.preY : currentX - this.preX) * this.sensitivity;
                    var f = this.moveFactor;
                    if (this.hasMax && this.target[this.property] > this.max && d > 0) {
                        f = this.outFactor;
                    } else if (this.hasMin && this.target[this.property] < this.min && d < 0) {
                        f = this.outFactor;
                    }
                    d *= f;
                    this.preX = currentX;
                    this.preY = currentY;
                    if (!this.fixed) {
                        this.target[this.property] += d;
                    }
                    this.change.call(this, this.target[this.property]);
                    var timestamp = new Date().getTime();
                    if (timestamp - this.startTime > 300) {
                        this.startTime = timestamp;
                        this.start = this.vertical ? this.preY : this.preX;
                    }
                    this.touchMove.call(this, evt, this.target[this.property]);
                }

                if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                    evt.preventDefault();
                }

                if (len === 1) {
                    if (this.x2 !== null) {
                        evt.deltaX = currentX - this.x2;
                        evt.deltaY = currentY - this.y2;

                    } else {
                        evt.deltaX = 0;
                        evt.deltaY = 0;
                    }
                    this.pressMove.call(this, evt, this.target[this.property]);
                }
                this.x2 = currentX;
                this.y2 = currentY;
            }
        },
        _cancel: function (evt) {
            var current = this.target[this.property];
            this.touchCancel.call(this, evt, current);
            this._end(evt);

        },
        to: function (v, time, user_ease) {
            this._to(v, this._getValue(time, 600), user_ease || ease, this.change, function (value) {
                this._calculateIndex();
                this.reboundEnd.call(this, value);
                this.animationEnd.call(this, value);
            }.bind(this));

        },
        _calculateIndex: function () {
            if (this.hasMax && this.hasMin) {
                this.currentPage = Math.round((this.max - this.target[this.property]) / this.step);
            }
        },
        _end: function (evt) {
            if (this.isTouchStart) {
                this.isTouchStart = false;
                var self = this,
                    current = this.target[this.property],
                    triggerTap = (Math.abs(evt.changedTouches[0].pageX - this.x1) < 30 && Math.abs(evt.changedTouches[0].pageY - this.y1) < 30);
                if (triggerTap) {
                    this.tap.call(this, evt, current);
                }
                if (this.touchEnd.call(this, evt, current, this.currentPage) === false) return;
                if (this.hasMax && current > this.max) {
                    this._to(this.max, 200, ease, this.change, function (value) {
                        this.reboundEnd.call(this, value);
                        this.animationEnd.call(this, value);
                    }.bind(this));
                } else if (this.hasMin && current < this.min) {
                    this._to(this.min, 200, ease, this.change, function (value) {
                        this.reboundEnd.call(this, value);
                        this.animationEnd.call(this, value);
                    }.bind(this));
                } else if (this.inertia && !triggerTap && !this._preventMove) {
                    var dt = new Date().getTime() - this.startTime;
                    if (dt < 300) {
                        var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
                            speed = Math.abs(distance) / dt,
                            speed2 = this.factor * speed;
                        if(this.hasMaxSpeed&&speed2>this.maxSpeed) {
                            speed2 = this.maxSpeed;
                        }
                        var destination = current + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

                        var tRatio = 1;
                        if (destination < this.min ) {
                            if (destination < this.min - this.maxRegion) {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
                            }
                        } else if (destination > this.max) {
                            if (destination > this.max + this.maxRegion) {
                                tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((this.max + this.springMaxRegion * ( destination-this.max) / this.maxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;
                                
                            }
                        }
                        var duration = Math.round(speed / self.deceleration) * tRatio;

                        self._to(Math.round(destination), duration, ease, self.change, function (value) {
                            if (self.hasMax && self.target[self.property] > self.max) {

                                cancelAnimationFrame(self.tickID);
                                self._to(self.max, 600, ease, self.change, self.animationEnd);

                            } else if (self.hasMin && self.target[self.property] < self.min) {

                                cancelAnimationFrame(self.tickID);
                                self._to(self.min, 600, ease, self.change, self.animationEnd);

                            } else {
                                if(self.step) {
                                    self._correction()
                                }else{
                                    self.animationEnd.call(self, value);
                                }
                            }

                            self.change.call(this, value);
                        });


                    } else {
                        self._correction();
                    }
                } else {
                    self._correction();
                }
                if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                    evt.preventDefault();
                }

            }
            this.x1 = this.x2 = this.y1 = this.y2 = null;

        },
        _to: function (value, time, ease, onChange, onEnd) {
            if (this.fixed) return;
            var el = this.target,
                property = this.property;
            var current = el[property];
            var dv = value - current;
            var beginTime = new Date();
            var self = this;
            var toTick = function () {

                var dt = new Date() - beginTime;
                if (dt >= time) {
                    el[property] = value;
                    onChange && onChange.call(self, value);
                    onEnd && onEnd.call(self, value);
                    return;
                }
                el[property] = dv * ease(dt / time) + current;
                self.tickID = requestAnimationFrame(toTick);
                //cancelAnimationFrame必须在 tickID = requestAnimationFrame(toTick);的后面
                onChange && onChange.call(self, el[property]);
            };
            toTick();
        },
        _correction: function () {
            if (this.step === undefined) return;
            var el = this.target,
                property = this.property;
            var value = el[property];
            var rpt = Math.floor(Math.abs(value / this.step));
            var dy = value % this.step;
            if (Math.abs(dy) > this.step / 2) {
                this._to((value < 0 ? -1 : 1) * (rpt + 1) * this.step, 400, ease, this.change, function (value) {
                    this._calculateIndex();
                    this.correctionEnd.call(this, value);
                    this.animationEnd.call(this, value);
                }.bind(this));
            } else {
                this._to((value < 0 ? -1 : 1) * rpt * this.step, 400, ease, this.change, function (value) {
                    this._calculateIndex();
                    this.correctionEnd.call(this, value);
                    this.animationEnd.call(this, value);
                }.bind(this));
            }
        }
    };

    if (true) {
        module.exports = AlloyTouch;
    } else {
        window.AlloyTouch = AlloyTouch;
    }

})();


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

﻿/* transformjs 1.1.4
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyTouch/tree/master/transformjs
 */
; (function () {

    var DEG_TO_RAD =  0.017453292519943295;

    var Matrix3D = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        this.elements = window.Float32Array ? new Float32Array(16) : [];
        var te = this.elements;
        te[0] = (n11 !== undefined) ? n11 : 1; te[4] = n12 || 0; te[8] = n13 || 0; te[12] = n14 || 0;
        te[1] = n21 || 0; te[5] = (n22 !== undefined) ? n22 : 1; te[9] = n23 || 0; te[13] = n24 || 0;
        te[2] = n31 || 0; te[6] = n32 || 0; te[10] = (n33 !== undefined) ? n33 : 1; te[14] = n34 || 0;
        te[3] = n41 || 0; te[7] = n42 || 0; te[11] = n43 || 0; te[15] = (n44 !== undefined) ? n44 : 1;
    };


    Matrix3D.prototype = {
        set: function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
            var te = this.elements;
            te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
            te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
            te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
            te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
            return this;
        },
        identity: function () {
            this.set(
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );
            return this;
        },
        multiplyMatrices: function (a, be) {

            var ae = a.elements;
            var te = this.elements;
            var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
            var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
            var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
            var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];

            var b11 = be[0], b12 = be[1], b13 = be[2], b14 = be[3];
            var b21 = be[4], b22 = be[5], b23 = be[6], b24 = be[7];
            var b31 = be[8], b32 = be[9], b33 = be[10], b34 = be[11];
            var b41 = be[12], b42 = be[13], b43 = be[14], b44 = be[15];

            te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

            te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

            te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

            te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

            return this;

        },
        // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
        _rounded: function (value, i) {
            i = Math.pow(10, i || 15);
            // default
            return Math.round(value * i) / i;
        },
        _arrayWrap: function (arr) {
            return window.Float32Array ? new Float32Array(arr) : arr;
        },
        appendTransform: function (x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

            var rx = rotateX * DEG_TO_RAD;
            var cosx = this._rounded(Math.cos(rx));
            var sinx = this._rounded(Math.sin(rx));
            var ry = rotateY * DEG_TO_RAD;
            var cosy = this._rounded(Math.cos(ry));
            var siny = this._rounded(Math.sin(ry));
            var rz = rotateZ * DEG_TO_RAD;
            var cosz = this._rounded(Math.cos(rz * -1));
            var sinz = this._rounded(Math.sin(rz * -1));

            this.multiplyMatrices(this, this._arrayWrap([
                1, 0, 0, x,
                0, cosx, sinx, y,
                0, -sinx, cosx, z,
                0, 0, 0, 1
            ]));

            this.multiplyMatrices(this, this._arrayWrap([
                cosy, 0, siny, 0,
                0, 1, 0, 0,
                -siny, 0, cosy, 0,
                0, 0, 0, 1
            ]));

            this.multiplyMatrices(this, this._arrayWrap([
                cosz * scaleX, sinz * scaleY, 0, 0,
                -sinz * scaleX, cosz * scaleY, 0, 0,
                0, 0, 1 * scaleZ, 0,
                0, 0, 0, 1
            ]));

            if (skewX || skewY) {
                this.multiplyMatrices(this, this._arrayWrap([
                    this._rounded(Math.cos(skewX * DEG_TO_RAD)), this._rounded(Math.sin(skewX * DEG_TO_RAD)), 0, 0,
                    -1 * this._rounded(Math.sin(skewY * DEG_TO_RAD)), this._rounded(Math.cos(skewY * DEG_TO_RAD)), 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1
                ]));
            }


            if (originX || originY || originZ) {
                this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
                this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
                this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
            }
            return this;
        }
    };

    var Matrix2D = function(a, b, c, d, tx, ty) {
        this.a = a == null ? 1 : a;
        this.b = b || 0;
        this.c = c || 0;
        this.d = d == null ? 1 : d;
        this.tx = tx || 0;
        this.ty = ty || 0;
        return this;
    };

    Matrix2D.prototype = {
        identity : function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this;
        },
        appendTransform : function(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
            if (rotation % 360) {
                var r = rotation * DEG_TO_RAD;
                var cos = Math.cos(r);
                var sin = Math.sin(r);
            } else {
                cos = 1;
                sin = 0;
            }
            if (skewX || skewY) {
                skewX *= DEG_TO_RAD;
                skewY *= DEG_TO_RAD;
                this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
            } else {
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
            }
            if (originX || originY) {
                this.tx -= originX * this.a + originY * this.c;
                this.ty -= originX * this.b + originY * this.d;
            }
            return this;
        },
        append : function(a, b, c, d, tx, ty) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + this.tx;
            this.ty = tx * b1 + ty * d1 + this.ty;
            return this;
        },
        initialize : function(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
        },
        setValues : function(a, b, c, d, tx, ty) {
            this.a = a == null ? 1 : a;
            this.b = b || 0;
            this.c = c || 0;
            this.d = d == null ? 1 : d;
            this.tx = tx || 0;
            this.ty = ty || 0;
            return this;
        },
        copy : function(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        }
    };

    function observe(target, props, callback) {
        for (var i = 0, len = props.length; i < len; i++) {
            var prop = props[i];
            watch(target, prop, callback);
        }
    }

    function watch(target, prop, callback) {
        Object.defineProperty(target, prop, {
            get: function () {
                return this["_" + prop];
            },
            set: function (value) {
                this["_" + prop] = value;
                callback();
            }
        });
    }

    function isElement(o) {
        return (
          typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
          o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
      );
    }

    function Transform(obj, notPerspective) {
        if(obj.hasOwnProperty("translateX")) return;
        var observeProps = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"],
            objIsElement = isElement(obj);
        if (!notPerspective) {
            observeProps.push("perspective");
        }
       
        observe(
            obj,
            observeProps,
            function () {
                var mtx = obj.matrix3d.identity().appendTransform(obj.translateX, obj.translateY, obj.translateZ, obj.scaleX, obj.scaleY, obj.scaleZ, obj.rotateX, obj.rotateY, obj.rotateZ, obj.skewX, obj.skewY, obj.originX, obj.originY, obj.originZ);
                var transform = (notPerspective ? "" : "perspective(" + obj.perspective + "px) ") + "matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
                if (objIsElement) {
                    obj.style.transform = obj.style.msTransform = obj.style.OTransform = obj.style.MozTransform = obj.style.webkitTransform = transform;
                } else {
                    obj.transform = transform;
                }
            });
       
        obj.matrix3d = new Matrix3D();
        if (!notPerspective) {
            obj.perspective = 500;
        }
        obj.scaleX = obj.scaleY = obj.scaleZ = 1;
        //由于image自带了x\y\z，所有加上translate前缀
        obj.translateX = obj.translateY = obj.translateZ = obj.rotateX = obj.rotateY = obj.rotateZ = obj.skewX = obj.skewY = obj.originX = obj.originY = obj.originZ = 0;
    }

    Transform.getMatrix3D = function (option) {
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            originZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix3D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.translateZ, defaultOption.scaleX, defaultOption.scaleY, defaultOption.scaleZ, defaultOption.rotateX, defaultOption.rotateY, defaultOption.rotateZ, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY, defaultOption.originZ).elements;

    }

    Transform.getMatrix2D = function(option){
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            rotation: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            scaleX: 1,
            scaleY: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix2D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.scaleX, defaultOption.scaleY, defaultOption.rotation, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY);
    }

    if (true) {
        module.exports = Transform;
    }else {
        window.Transform = Transform;
    }
})();

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_alloytouch_transformjs_transform_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_alloytouch_transformjs_transform_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_alloytouch_transformjs_transform_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_alloytouch_alloy_touch_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_alloytouch_alloy_touch_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_alloytouch_alloy_touch_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*global  utils:true*/


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        awords: {
            default: function _default() {
                return [];
            },
            type: Array
        },
        color: String
    },
    mounted: function mounted() {
        var scroller = this.$refs.scroller,
            length = this.awords.length;
        var min = 0;
        if (length > 3) {
            var width = scroller.firstElementChild.offsetWidth + this.getSize(35);
            min = -(width * length - utils.getClientWidth() + 50);
        }
        __WEBPACK_IMPORTED_MODULE_0_alloytouch_transformjs_transform_js___default()(scroller);
        new __WEBPACK_IMPORTED_MODULE_1_alloytouch_alloy_touch_js___default.a({
            touch: '.wrapper',
            vertical: false,
            target: scroller,
            property: 'translateX',
            min: min,
            max: 0
        });
    },

    methods: {
        getSize: function getSize(value) {
            return value * utils.getClientWidth() / 750;
        }
    },
    filters: {
        filter: function filter(str) {
            return str.length < 5 ? str : str.substr(0, 5) + '...';
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        text: String,
        color: String
    }
});

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(99);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(100);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".v-describe-title[data-v-2d71f2a1]{width:2.85333rem;height:.77333rem;background-size:100% 100%;background-repeat:no-repeat;color:#ffffd0;font-size:.42667rem;font-weight:500;padding-left:.24rem;padding-top:.06667rem}.v-describe-title.red[data-v-2d71f2a1]{background-image:url(" + __webpack_require__(98) + ")}.v-describe-title.green[data-v-2d71f2a1]{background-image:url(" + __webpack_require__(97) + ")}.v-describe-title.blue[data-v-2d71f2a1]{color:#fc4c60;background-image:url(" + __webpack_require__(76) + ")}.v-describe-title.navy[data-v-2d71f2a1]{color:#007f96;background-image:url(" + __webpack_require__(76) + ")}.v-describe-title.aquamarine[data-v-2d71f2a1]{background-image:url(" + __webpack_require__(94) + ")}.v-describe-title.brown[data-v-2d71f2a1]{background-image:url(" + __webpack_require__(95) + ")}.v-describe-title.emerald[data-v-2d71f2a1]{background-image:url(" + __webpack_require__(96) + ")}", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".v-aword-box[data-v-5ac7f9a2]{position:relative;width:9.70667rem;height:3.13333rem;padding:.6rem .26667rem 0 .2rem;margin:.64rem auto 0;background-size:100% 100%;background-repeat:no-repeat}.v-aword-box.red[data-v-5ac7f9a2]{background-image:url(" + __webpack_require__(93) + ")}.v-aword-box.green[data-v-5ac7f9a2]{background-image:url(" + __webpack_require__(91) + ")}.v-aword-box.aquamarine[data-v-5ac7f9a2]{background-image:url(" + __webpack_require__(87) + ")}.v-aword-box.blue[data-v-5ac7f9a2]{background-image:url(" + __webpack_require__(88) + ")}.v-aword-box.navy[data-v-5ac7f9a2]{background-image:url(" + __webpack_require__(92) + ")}.v-aword-box.brown[data-v-5ac7f9a2]{background-image:url(" + __webpack_require__(89) + ")}.v-aword-box.emerald[data-v-5ac7f9a2]{background-image:url(" + __webpack_require__(90) + ")}.v-aword-box .wrapper[data-v-5ac7f9a2]{width:100%;overflow-x:hidden}.v-aword-box ul[data-v-5ac7f9a2]{white-space:nowrap}.v-aword-box .aword[data-v-5ac7f9a2]{list-style:none;display:inline-block;height:2.13333rem;padding:.06667rem;margin:0 .23333rem}.v-aword-box .aword img[data-v-5ac7f9a2]{width:1.93333rem;height:1.50667rem}.v-aword-box .aword h6[data-v-5ac7f9a2]{color:#fff;width:1.93333rem;height:.56rem;line-height:.56rem;text-align:center;overflow:hidden}.v-aword-box .aword.red[data-v-5ac7f9a2]{background-color:#fe7a6f}.v-aword-box .aword.green[data-v-5ac7f9a2]{background-color:#78cc1e}.v-aword-box .aword.aquamarine[data-v-5ac7f9a2]{background-color:#2ba7a9}.v-aword-box .aword.blue[data-v-5ac7f9a2]{background-color:#29cfff}.v-aword-box .aword.navy[data-v-5ac7f9a2]{background-color:#399fae}.v-aword-box .aword.brown[data-v-5ac7f9a2]{background-color:#a26a01}.v-aword-box .aword.emerald[data-v-5ac7f9a2]{background-color:#019a88}", ""]);

// exports


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2d71f2a1&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vDescribeTitle.vue", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2d71f2a1&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vDescribeTitle.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ac7f9a2&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vAwordBox.vue", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?minimize&-autoprefixer!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ac7f9a2&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vAwordBox.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/aquamarineAwordBox.d9c1e87e3c8dc7683dd8e4cac40f9423.png";

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtgAAADoCAMAAADi6GOzAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAADAFBMVEUAAAD80nDTXB780nChbgmjbgn7+ualaQ+hawmjbQn7+uT85aijbwr7+uX89NH803SieQD88cj83Iz80nD82YT86K/899j8992mbg2haQGibQukbAinaRGhawD7+uT87Ln81Xj87b37+uX86bL87sD85KL81n381Xj80nD7+N/7+uX94Zn80nH82YTovVjvwV383Ir93pTZrEj7+uL7+uSiagKjbgmjbgmkawujbgqjbQr84qH84Jv80m/81nz80m/81HX79NT80nH83ZH88s3799n867f/zHf788/799z835b55q788MX7+uL7+uL8133803X70W+hbwykbgqibgmibgmjbAmibAejbQj80nD80W/89df90m/zxmX90m/7+ub79tfzzmfcr0zcsEyiaQHcsE390m/90m/80W/77b//0XD/0m/80W7csE3csEzcsEzcsEzcsEzcsEz80nCjawXcr02iawT80m+iawWibgqiawOibgmjbAnasEv/0G64iSTcr0zbsEz79dn82oX81n6iagHPlQD90nD8++aufQDcsE2iagHHx77QlwbRmQvcr0vHx73brkbOnBrarELXpS7PlgLQlgPSnBPbr0nZqTnQmAj80W/OmQ7OmhLVoiXUnxvVoSHHxrrY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"

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/greenAwordBox.0938ba52c6d136acf8a53e51f98b854b.png";

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/redAwordBox.68cf92a431c24adbdfc7bce6eda69781.png";

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABCCAYAAADXAQOxAAAI80lEQVR4Xu2dW28bxxXHz+zy4mvEqAUSGIar5iUpqCh6KAyjddB+gr4lRb+Anx0gyDNf2iS2Gtkw+lAjb0FrWIrrpC3aBigcxCR1sy6WZF1J2RRFUZZkkRLFXe7OzqUgXSuURHpX0ZXco0fO7sw5v5k/Zs6QOocA/iEBJHAoBMihjIqDIoEaIPDWrVtNINWflJuqKCIAkrRuNZ+A/PXWzyRAEwHSVPx87He/3aY1FF8NLAI00Z7AW3/t+NU2QSiilUgSKP+cSAgAkdvEA0C2icd+VGdPSCnDel/PbxKBQA5CIfHiLRSfM3741B4RqLSbFLtWyPadAyS0EiI3iUdKEiAEKohnjwzch264af0pPzH6Z/348dlMKJRD8e0D5HrrMviXjlZOoKHcLxVkkyRQOkpt2lEqHLtKxzMCm8RTb4yc+GMsLv6BLj27z438ePqzz+ZQfE6o1cgzTXfvBo4VrHecHLsAZBOBzeKpxd2kRqamZGZ+Yvwqs2gfM4zBxfb2xyi+Q5q9vQziD8kFHHYHBITFRvKxyXuCsajU9b709etJFJ8DgEc5iHdgPj5yBAiY2bWvzIX5cUmtiJ/TgZm2tqW6Et+ug/iyK+EjMF9oQh0R0GaTHWItN8AtFjYV/ujZlSvrhyY+p0F81SthDOLraGnWtytSylx+YvJvIKxuobPulJadhJs3LVvxVQviK14JYxBf36sIvftBBLhldenx+ACnVpgDf/D0k08Sm2+It3QbvHVb/qCR8CUkgAQ2ETDXVr8y59KPgPKwZawNPb1xY7mq+M5+8EFjw/kLK8gQCSCB3RPQE6mvhZYNM0qjJsBYebxX7H3jFy5Nly8HrBMnmgJvvzO0+2GxByTgbgJSwro2Pvkl50ZUEaInmc1Ol8d734svFFJeN4xzXkJaXmlp/drd2NB7JLB7Apya3+Zj8RHJrcjW7/c2X7iEQr6zhcKboPjPN7QEP9/90NgDEnA3AbqSuWMupMeAW2GqacNb472Nne/MpUsnPI2NPxMe38WGYPCau7Gh90hg9wRyj590gK71SktELGGOLba1aVt7LcV8r3344Umv3x8koFx8pbn5j7sfGntAAu4lIKScz49P/Ac4jxLgvcl4fAo6OzmKz71rAj0/IALFeK8Qiz/kVEQE0x+U/ydDuQm48x3QhOAw7iFgZjN3aHrhEVAW5qp8OP/xxxW/vkPxuWdNoKcHRGB95sk/eGH9nsJ5lGcyY+mbN/VKQ6P4DmhCcBh3EBCCT2sTU99JIbpUU+9JJJOxSvHexm0nXri4Y2Ggl/tPgBX0b/TE7CMwrbCken+qvX2+2qi48+3/fOAILiJgLC510qXlUQVYhBd8w6n2UAbF56IFgK4eHoFcPNYpTR5WWKGLZTIT1eI9PHYe3hzhyHVI4Hm8F/u2+P0eB6t33u+Pl6cKxO/56nDS0aWjQYDp2j09mRzklIVVTvvnrlxJv8wyjPmOxryhFXVAwFhc+jtdWXnAqHXfb2ojiWvXVlF8dTCx6MLRJ5CLzXRIsxBWOUTJMXUiEQoZKL6jP29oYY0TEIw91Kane4hgEZ2SvuWTnpmXxXt44VLjE47mHx0CVl77pz6XGJNCRBRKB+3iPRTf0Zk7tKTGCejz6Q6eWXnIuAz7TO2RXbyH4qvxCUfzjw6B9bGJLySwbmkY0dSpU5MQClE76/C2044QtiMBGwKC8SE9NtllmTLCab6vvB4DXrjg8kEC+0iA5vPfFBKJIWD8vkdYQ4mrV586GQ53PieU8Bkk8BICpZTwufVBJq2Ikc+PZm7c2KjBhzsfLh0ksE8ESinhx8fvAhfdwrC6Ug3Hp5zEe3jhsk8Tgt26hwCnVndhOjZgAYsIznu3poTHnc89awE9PWACpRJgqdQYAAv7KB0qLwFmZwrGfHaEsB0JvISAnpy7LXJr/cxk0a0lwOzAofjsCGE7EqhC4EUJMGHxqCJpd6WU8HjsxOWDBPaBgKBmnzbzuLdaCTC7IXHnsyOE7UigCgG6mv2XkVoYrFYCzA4cis+OELYjgSoEtJnHndLQeoslwJgQo5VSwuOxE5cPEthjAi9SwktOuxWA7uTKSmxrCTC7IXHnsyOE7UigAoFiSngtPjNcTJYkzPX+9PXryZ2CQvHtlBg+jwQAgGYzd0wHKeHx2InLBQnsMYHcTOK2KBR6FG5EKWPjO433iubgzrfHk4Ld1T+BYrynjU3+W0oetUsJjztf/a8H9PAACTDTDBvxeD9nEBY031+tBJidSbjz2RHCdiSwhUBhafFL9mx5lHAetksJjzsfLh8ksIcEnqeEp1GF0YhdSngU3x6Cx67cTUAKPp2fmPoOiIhwxnrsUsI7Ep9HUd72+I798lQw2OZuvOg9EqhOoFQCbDYxCoxFpA79qfbfVy0BZsexFPP9+KOPTvsBgh6v/+Kp5uardi9hOxJwK4FiCTC2sjJCJIswj2ckFapeAsyO0ffiE2qz6vW8e7ql+VO7l7AdCbiVQC4+0yEN5ynhbY+dpZ0PxefW9YR+OyQgOYvnp6b/W0wJzynpSzlICW8rvmJZ6FLMh8dOh9OAj7mRQLEEmDE7OyAFvy8dpoR3JD6v3x9UifouXri4cVmhz04I6AvpDpbNDDMqIk5KgNn1WYr5zly6dEJtbAxKj+8XRFXOK6C+AQANRCEeuw6wHQnUNQEppCQKE0JmiRRxCbxXMhb1+HzTdiXA7LiUxAehkO9sofAmKP7ziof8HBT1DQJqAxDwgBTPn8E/JOBGAkSRHIRJpFiWUkyDID2MGYM7SRFYDdsL8SmvG8Y5hZAWVfE0E9VzTgIEQBLv/3977Ubs6DMSAKJICSAKRJJlKWCKSzrs1bRJJ1WI7PBt7GpNly8HmMdzjqj+nxKP8hoh5LQUgMdOO4LYXt8EVCKFVAqqhAxldI5YhSfpCxfS8P77fLeObzpSFgWoe70/8nq9p4GxY1JV1d0OgO8jgVomQACEKiVVLKKBwlYTJ09mnKaDt/N7ezz33nvqmVdf9dNAAIVnRw/bXUHAt7rK0wDWTnO02MHByxQ7QtiOBPaJwP8Ar/Dmf/xk5WoAAAAASUVORK5CYII="

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAA/CAMAAACxSibYAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABTVBMVEUAAAChaQH/AAB/fwCjbgmhbgmjcAqlaQ6jbQmhawiqfACicwCudACiagGlbQOiagGiagGibQeXZwCjawihaQChagGiagGhagGhagGgbAujbAikbAqiawSlawakbQaqZg+iaQCiaQCiagGjbAegbAWjbQiibAWqcQCibAejbgqhagGkbAmlcQiiagGhagGqVQCjaQWiaQGibAaZZgCiagGibAShagGiagGjaweiawOiaQGiagKiaQCkawWhaQGhagGjbQiiawajbAWjawSfbwuibQegbQOhagKhawKiagKibAOhagKiagKiawOiagKhaQGhawKiawOiagGiagGiagKhagKiagGibQqjbgiiagGiagGkbguiagKibQiibQajbQejbQmhaQGiaQGiagKhagGhbwuiaQGjbQiiaQGiagShawmjbgmiaQKibgqiagGx1z75AAAAbnRSTlMA9gECi2gyEZw0BgsEuyKIqlIHLUTdVZruFRcSMxklD2Z3zDAgSz4JXAzxJxxr/gMe9UgK0Dvrwyl9xq9hNvvTOUJZeRBPI5GeonGkmHSO4ZVN18mEs/hFV/LkQL+DbolmgOio2iu1Ytm2aDXnmOdUkysAAAJzSURBVGje3dppU9oAGARgJC0pAUIgXCIKcglGOVRUoCCneCt4FCxXq9Yelv//sSZcMaUztpWM2f0HzzA7CftGpVJ+zHM0m7GYQp7FT0b7YdpwvmN1NHRKU7jnd13BNdv71UVjxc58aXq/XjsivQlJUcSrRehJ/53WUi14jpPGo33GkNqwbsZ7z06FpF6DIuykfQkL/1NcnNhvLg3e2qkj2/u/tGPr8iIIMsa58gGb56BoPNtjDFte68NybwrJmhamV7alCd2+6smV2/Lu0ksoStJu3/6h2/Ll8uO8/u8QFEk/drv8r92WLxeZOeJ53WZeptuy5Sp0F1Y/IqJCt6vT77Z8qQVooWoKZ0xKWqgaQQHSklq+ahTZgJPF69t81XR0HI62EfCb+RdOFo92E3TyTzVSMwNHK7qEpxogbbnOCU81QJp3LcZXDZG2368aIu1AQ6oxaZsmrv9fDY+WGlQNkGZPOKOYtMiqr6TGpD2YuMHiA0drflihQGlnudkoJi3SZd1qTNqpaWE4rqLRDKOqwdFOcrMEJi17P6oaGs0qWsTBaN/yK3pQWiczqhoYbbiIA9JqVXp8fMKipcXHJyxa64fo+ARFmylsj6uGRdvpL+KINCYovvNC0ZIu8Z0Xidaoi6sGRfM+qRoU7XCwiAPSjgeLOB7NYePCoLTz4SKOR9tLPKkaEq09XMThaJ+Hxyc82tZ4pkOjHeUGxyc4WuS7z63GpF2PF3E0WlNaNRxaZbyIj2jdzjvl52crxEqqpnKzhWLnjeLTagdo6TfiOn8+1H2r+NyXNU7q94/AWZdW8fFxznXpN+IEpXOTyk8pbI5KqvYLn0hzuLZHgNwAAAAASUVORK5CYII="

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAABBCAMAAACAYkppAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHsUExURQAAAAGZhgCEhAAAAAR6cAV6cQV6cAR6cgB4eAR6cAB+ewB2dgGaiAd4cAB9cQB/agGaiAGaiAB1dQZ7cgV7cgB3dQCbhwCZhwGZiACZhwCahwCciAGZiAB6bQBzcwGaiAR6cQR7cQV6cQN8cgR6cQR7cgBtbQB/Zgd+dAZ8dQV5cQR7cQV7cgV7cgGZiACWhwGaiAGaiACaiACbhwCZhwGZhwh8cwN6cAV6cQZ7cgGZhwGZhwV6cQh7cwV6cQV6bwZ6cAN5cgCdhgCZhwGZhwCahwCbhgGaiACZhwR6cQN7cgV6cgGaiAR7cgZ7cQCYhgR9cwV9cwGZiAGaiACbiACZhwGaiAGZhwCYiQCaiACZiQGaiACZiAGZiAGaiAGahwCZhgCaiAGZhwCaiQCXhQCahwCaiAGaiAGaiACciQGaiACbiACchwGaiACaiQGZiAGaiAGZhwCXiQGaiACcjACWhgGZhwKSgwKSggKLfAGXhQOIewKQgAGWhAODdwOAdQGWhgKMfgKThAOEdwN6cgKNfgKUhACZiAGOgAGaiAOFeQV6cQGaiAGZiAGahwGaiAGZiAGahwR8cwOJfQR7cgKRggKQgQKOfwKUhAOGegGZhwGYhwV6cQOBdwGOgAOJewV6cgGXhgGZhwGaiLsv4x8AAACjdFJOUwD2AgE0izKcEWgFA+8hFwyIqggnLQ5mRN1VdyLMFAu7OW1XSz1yBwoZJFubZYmZEfzxYTM8/hxFX1T1+CofYS9OQht/onoMwxdqSGSQNVBHezOymFtz1+A0QR/QaYyV5zdOnksqWHDrxie5UTGnLa7TyRKCDwjt086q8Z/F5omA7K/Xjz+23Gyz5JSE2rW9m7+Ed6VryMu64Zjz+ZCEv6OY0ZqealieAAACpklEQVRo3t3bB1dScRzGcQSj6wUUgsveAgLKcFAgynAb5mrb3ntameVAW6Zpe9HuvtFY94JU51gZx/s87+BzPF84/v4HHo/7u3ldd/mo6sIupbZT6u26Yrp2VX0r1cM1xY0+XXPLkKbpkVY68F22vKJ/8lgcoH+x3g2MIH1jJ/epjp1S7u6W7uySmc4eUJ9ppde88Y2h6OnTXWxRaZoOascPeS+NmvR79or99L9tiOSXF8H3dZxr3n9CozzdLT18XHa+V68+Iqb/w8JygixH2+k/RbZtcZgu177Z2uvWpe2OQttPZcvPftt2+bYQcxn/tG1dvu3Ov2m7fFuMubasoe3nA17Z6Mp6tF22he1xZ6Y1kW/sp7YbaU7vYcMOQ+YTUkzD7YG1jRJg0u7VSrKp4dEq7PedovS3KNkIR5tPVBLp1EgiBUdbsLbVpFMzSlrhaDO51CgFHO2OxZZJjUcIK9BoE5GRTGqItDmrPJMaIu3T9nYHD5KWtNiqRZi02xEhIcCkTYbkuf/V4GiB2XxqeLRkfz41PNrrYDSXGh7tS0iev/ig0fzD27aSmLTpfrNBhEmbCiooASbt7qCLOa6C0fwv2NTQaO+qzAY+Ju2zm00Njfa+6CKORftgj7OpgdGYizgg7W1RamC0xZik8PgERWMenwBp84mi1LBozOMTII15fMKjpSzZxydE2kQidxEHpM3lHp8QaTO1EgcPksY8PgHS2Is4Hm0yJK8BpbEXcTha8hVzEYejvWEv4nC0l8zjExwtULiIo9Gm+82rU8OhTQWjlACTVnQRZ2kNnvrNnF/9R3tpajA0T9FFHIv2dan4TJcbpXAPezZxfkuWVbeD7IySuLuK+4sMCqtLf49BEhLFSCXnF5U760p/RcMnjRQBMMohKkntB2jkT3nj6pCEAAAAAElFTkSuQmCC"

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  "data-v-5ac7f9a2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/genesischou/Documents/integral-mall/src/views/activityDetail/components/vAwordBox/vAwordBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vAwordBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ac7f9a2", Component.options)
  } else {
    hotAPI.reload("data-v-5ac7f9a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});