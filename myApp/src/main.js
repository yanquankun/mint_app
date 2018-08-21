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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})