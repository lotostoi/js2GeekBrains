import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import products from '@/js/prodacts'
import myform from '@/js/form'
import aboutShop from '@/js/aboutShop'
import cart from '@/js/cart'
import cartBody from '@/js/components/cartBody'
import cartStatistics from '@/js/components/cartStatistics'


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
        path: "/cart",
        component: cart,
        children: [
            {
                name: 'cartBody',
                path: "",
                component: cartBody
            },
            {
                name: 'cartStatistics',
                path: "/cart/cartStatistics",
                component: cartStatistics
            },

        ]

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
