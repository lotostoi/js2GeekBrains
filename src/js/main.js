
//import Vue from 'vue'
import store from "@/js/store/index"
import router from "@/js/router/index"

import "../css/style.scss"
import { mapGetters, mapActions } from 'vuex'

import top from '@/js/components/header.js'
import bot from '@/js/components/bot.js'
import alerts from '@/js/components/alerts.js'



new Vue({
    el: '#el',
    store,
    router,

    components: { top, bot, alerts },
    async created() {
        store.dispatch('cart/getCart')
        store.dispatch('catalog/getCatalog')
    },
     computed: {
        ...mapGetters({
            cartLoading: ['cart/loading'],
            catalogLoading: ['catalog/loading'],
        })
    }
})




