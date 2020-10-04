import Vue from 'vue'

import { mapGetters, mapActions } from "vuex"


export default Vue.component('good', {
    template: `
            <div class="card col-3 m-2">
                    <img class="card-img-top mt-2" :src="prod.link" :key="prod._id" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{prod.title}}</h5>
                        <h5 class="card-title">{{prod.price}}\u20bd </h5>
                        <transition enter-active-class="btn-enter" leave-active-class="btn-leave" mode="out-in">
                            <button v-if = "!inCart(prod._id)"  
                                class="btn btn-primary"
                                :class = "prod.inProcess? 'btn-secondary block': '' "
                                @click="addToCart(prod)" 
                                :disabled="prod.inProcess" 
                                key="add"
                            >   
                                <span v-if="prod.inProcess" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Add to cart
                            </button>
                            <button v-else  
                                class="btn btn-danger" 
                                :class = "prod.inProcess? 'btn-secondary block': '' "
                                @click="delFromCart(prod)" 
                                :disabled="prod.inProcess"
                                key="remove"
                            >   
                                <span v-if="prod.inProcess" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Remove 
                            </button>
                     </transition>        
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
            cartLoading: ['cart/loading'],
        })
    },

})
