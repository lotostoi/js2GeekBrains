import Vue from 'vue'

import { mapGetters, mapActions } from "vuex"


export default Vue.component('good', {
    template: `
            <div class="card col-3 m-2">
                    <img class="card-img-top mt-2" :src="prod.link" :key="prod._id" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{prod.title}}</h5>
                        <h5 class="card-title">{{prod.price}}\u20bd </h5>
                        <button v-if = "!inCart(prod._id)"  href="#" class="btn btn-primary" @click="addToCart(prod._id)" :disabled="cartLoading" >Add to cart</button>
                        <button v-else  href="#" class="btn btn-danger" @click="delFromCart(prod._id)" :disabled="cartLoading" >Remove </button>
                    </div>
            </div>      
    `,
    props: {
        prod: {
            type: Object,
            required: true
        }
    },

    methods: {
        ...mapActions({
            addToCart: 'cart/incCart',
            delFromCart: 'cart/decCart',
        }),
        test() {
            console.log(this.addToCart);
        }
    },
    computed: {
        ...mapGetters({
            inCart: ['catalog/inCart'],
            cartLoading:['cart/loading'],
        })
    },

})
