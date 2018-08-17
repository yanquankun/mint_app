import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import selfimages from '@/components/views/selfimages'
Vue.use(Router)

export default new Router({
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
        path: '**',
        component: Login
    }]
})