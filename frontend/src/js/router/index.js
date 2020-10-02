import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import products from '@/js/prodacts'
import myform from '@/js/form'
import aboutShop from '@/js/aboutShop'
import cart from '@/js/cart'


const routes = [

    {
        name: 'main',
        path: "/",
        component: aboutShop
    },
    {
        name: 'catalog',
        path: "/catalog",
        component: products
    },
    {
        name: 'cart',
        path: "/cart",
        component: cart
    },
    {
        name: 'form',
        path: "/form",
        component: myform
    },
]

let router = new VueRouter({

    mode: 'history',
    routes,

})

export default router
