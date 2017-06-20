import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('views/index')
        }, {
            path: '/product_list',
            name: 'product_list',
            component: require('views/productList')
        }, {
            path: '/product_detail',
            name: 'product_detail',
            component: require('views/productDetail')
        },
        {
            path: '/activity_detail',
            name: 'activity_detail',
            component: require('views/activityDetail')
        }, {
            path: '/my_account',
            name: 'my_account',
            component: require('views/myAccount')

        }, {
            path: '/order_list',
            name: 'order_list',
            component: require('views/orderList')
        }, {
            path: '/order_detail',
            name: 'order_detail',
            component: require('views/orderDetail')
        }, {
            path: '/subject_detail',
            name: 'subject_detail',
            component: require('views/subjectDetail')
        },
        {
            path: '/earn_integral',
            name: 'earn_integral',
            component: require('views/earnIntegral')
        },
        {
            path: '/edit_user',
            name: 'edit_user',
            component: require('views/editUser')
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
});
router.beforeEach((to, from, next) => {
    if (store.state.v_alert.show === true) {
        store.dispatch('toggleAlert');
    }
    if (store.state.v_confirm.show === true) {
        store.dispatch('toggleConfirm');
    }
    if (store.state.v_loading.show === true) {
        store.dispatch('toggleLoading');
    }

    store.dispatch('pageView', to.name);
    next();
});
router.afterEach(route => {});
module.exports = router;