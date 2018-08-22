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

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios

// 路由守卫
const nextRoute = ['index'];
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
    components: { App },
    template: '<App/>'
})