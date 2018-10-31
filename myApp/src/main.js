// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//　引入公用样式
import './common.less'
// 引入axios
import axios from 'axios'
// 引入vuex
import store from './vuex/store'
// 引入表单验证
import Vuelidate from 'vuelidate'
// 引入vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

Vue.use(Vant);
Vue.use(Vuelidate)
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
    // 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 申请的高德key
    key: '92553b50fcc62662134997ee4ccc7bfd',
    // 插件集合
    plugin: ['Autocomplete', 'Geolocation', 'OverView', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
    // 版本号必须引入，否则无法实例化
    uiVersion: '1.0.11'
});

// 路由守卫
const nextRoute = ['index', 'map'];
router.beforeEach((to, from, next) => {
    let isLogin = sessionStorage.getItem("getLogin"); // 是否登录
    // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
        if (isLogin) {
            next();
        } else {
            next({
                path: '/login',
                // query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})