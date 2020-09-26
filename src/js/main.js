import "../css/style.scss"

import Vue from 'vue'
import top from './header.js'
import bot from './bot.js'
import products from './prodacts'
import myform from './form'
import aboutShop from './aboutShop'
import cart from './cart'
import pathes from "./pathes"

(async () => {
    let cartFromServer = fetch(pathes.cart)
    let res = await fetch(pathes.catalog)
    let goods = (await res.json()).map(prod => ({ ...prod, link: 'http://placehold.it/150x100/', inCart: false }))


    new Vue({
        el: '#el',

        components: { top, products, bot, myform, aboutShop, cart },

        data: {
            fromServerProducts: goods,
            catalog: [],
            cart: [],
            messagAboutSearch: '',
            pages: [
                { name: 'Main', active: true },
                { name: 'Products', active: false },
                { name: 'Contacts us', active: false },
                { name: 'Cart', active: false },
            ]
        },
        methods: {
            toPage(e) {
                this.pages.forEach(p => {
                    p.name === e ? (p.active = true) : (p.active = false)
                })
            },
            search(e) {
                this.toPage('Products')
                if (e !== '') {
                    let newCatalog = this.fromServerProducts.filter(p => p && p.title.toLowerCase().includes(e.toLowerCase()))
                    if (newCatalog.length > 0) {
                        this.catalog = newCatalog
                    } else {
                        this.catalog = newCatalog
                        this.messagAboutSearch = `Nothing found for "${e} ..." `
                    }
                }
                else {
                    this.catalog = this.fromServerProducts
                }
            },
            // По хорошему тут нужен склад  
            async addToCart(id) {

                let res = await fetch(pathes.addCart)
                res = await res.json()

                if ( res.result === 1) {

                    let index = this.cart.findIndex(prod => prod.id == id)
                    let prod = this.catalog.find(prod => prod.id == id)

                    if (index !== -1) {
                        Vue.set(this.cart[index], 'quantity', ++this.cart[index].quantity)
                    } else {
                        this.cart.push({ ...prod, quantity: 1 })
                        Vue.set(this.catalog[this.catalog.findIndex(prod => prod.id == id)], 'inCart', true)

                    }
                }

            },

            async removeFromCart(id) {

                let res = await fetch(pathes.delCart)
                res = await res.json()

                if ( res.result === 1) {

                    let index = this.cart.findIndex(prod => prod.id == id)
                    let prod = this.cart.find(prod => prod.id == id)
                    if (+prod.quantity === +1) {
                        this.cart.splice(index, 1)
                        Vue.set(this.catalog[this.catalog.findIndex(prod => prod.id == id)], 'inCart', false)
                    } else {
                        Vue.set(this.cart[index], 'quantity', --this.cart[index].quantity)
                    }
                }
            },


        },
        computed: {

            countCart() {
                return {
                    quantity: this.cart.reduce((start, prod) => start + prod.quantity, 0),
                    sum: this.cart.reduce((start, prod) => start + prod.quantity * prod.price, 0)
                }
            },

        },



        async created() {
            this.catalog = this.fromServerProducts
            let cart = await cartFromServer
            let { contents } = await cart.json()
            this.cart = contents.map(prod => ({ ...prod, link: 'http://placehold.it/100x100/' }))

            this.cart.forEach(p => {
                this.catalog.forEach((pr, i) => {
                    if (pr.id == p.id) {

                        Vue.set(this.catalog[i], 'inCart', true)
                    }

                })

            })
        }
    })

})()


