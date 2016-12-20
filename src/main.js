var token = utils.getParameterByName('token');
var activity_id = utils.getParameterByName('activity_id');
if (token) {
    var media_id = utils.getParameterByName('mediaid');
    var cache = {
        TOKEN: token,
        USER_ID: utils.getParameterByName('userid'),
        MEDIA_ID: media_id,
        OPEN_ID: utils.getParameterByName('open_id'),
        DATE: new Date(),
        TITLE:utils.getParameterByName('imall_title')
    };
    utils.setLocalStorage(media_id, cache);
    startApp(cache);
} else {
    var media_id = utils.getParameterByName('id');
    var cache = utils.getLocalStorage(media_id);
    console.log(cache);
    //无缓存
    if (!cache) {
        wxLogin(activity_id);
        console.log('no cache');
    //缓存过期
    } else if (cacheExpire(cache)) {
        wxLogin(activity_id);
        console.log('out of date');
    } else {
      startApp(cache);
    }
}
//判断是否过期
//localstorage保存时间30天
function cacheExpire(cache) {
    var current_time = new Date();
    var save_time = cache.Date;
    var interval = utils.getTimeInterval(current_time, save_time, 'day');
    return interval > 30;
}
//微信登陆
function wxLogin(activity_id) {
    var redirect = encodeURIComponent(APP.MALL_HOST);
    var link = `${APP.HOST}/weixin/${APP.MEDIA_ID}?callback=${redirect}`;
    if (activity_id) {
        link = link + '&activity_id=' + activity_id;
    }
    location.href = link;
}
function startApp(cache){
  var Vue = require('vue');
  var VueResource = require('vue-resource');
  var store = require('./vuex/store.js');
  var FastClick = require('fastclick');
  var wxConfig = require('./wx_config');
  console.log('login success');
  APP.TOKEN = cache.TOKEN;
  APP.USER_ID = cache.USER_ID;
  APP.MEDIA_ID = cache.MEDIA_ID;
  APP.OPEN_ID = cache.OPEN_ID;
  APP.TITLE=cache.TITLE;
  utils.setTitle(APP.TITLE);
  FastClick.attach(document.body);
  Vue.use(VueResource);
  Vue.http.options.emulateJSON = true; //设置vue-resource post请求参数类型为formdata
  wxConfig(Vue);
  new Vue({
      el: '#app',
      render: h => h(require('./APP.vue')),
      router: require('./router.js'),
      store
  });

}
