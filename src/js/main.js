
import Vue from 'vue'
import store from "@/js/store/index"
import router from "@/js/router/index"

import "../css/style.scss"


import top from '@/js/components/header.js'
import bot from '@/js/components/bot.js'



(async () => {
    store.dispatch('cart/getCart')
    await store.dispatch('catalog/getCatalog')

    new Vue({
        el: '#el',
        store,
        router,

        components: { top,  bot, },
        async created() {
          
        }
    })

})()


