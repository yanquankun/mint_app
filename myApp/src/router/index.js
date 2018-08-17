import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import selfimages from '@/components/views/selfimages'
import regis from '@/components/views/regis'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/mint',
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/Login',
        name: 'Login',
        component: Login
    }, {
        path: '/images',
        name: 'selfimages',
        component: selfimages
    }, {
        path: '/regis',
        name: 'regis',
        component: regis
    }, {
        path: '**',
        component: Login
    }]
})