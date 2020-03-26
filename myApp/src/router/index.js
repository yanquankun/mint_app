import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import index from '@/components/index'
import selfimages from '@/components/views/selfimages'
import regis from '@/components/views/regis'
import map from '@/components/views/map'
import product from '@/components/views/product'
import shop_car from '@/components/views/shopCar'
import product_view from '@/components/common/product_view'
import error from '@/components/views/error'

Vue.use(Router)

export default new Router({
    // 使用h5路由模式，避免路由出现#
    mode: 'hash',
    base: '/',
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
        path: '/map',
        name: 'map',
        meta: {
            requireAuth: true
        },
        component: map
    }, {
        path: '/index',
        meta: {
            requireAuth: true
        },
        name: 'index',
        component: index
    }, {
        path: '/product',
        name: 'product',
        meta: {
            requireAuth: true
        },
        component: product
    }, {
        path: '/shop_car',
        name: 'shop_car',
        meta: {
            requireAuth: true
        },
        component: shop_car
    }, {
        path: '/product_view',
        name: 'product_view',
        meta: {
            requireAuth: true
        },
        component: product_view
    }, {
        path: '**',
        component: error
    }]
})