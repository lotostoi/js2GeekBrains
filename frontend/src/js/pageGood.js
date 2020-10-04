import Vue from 'vue'

import good from './components/prod'

import { mapGetters, mapActions } from 'vuex'

export default Vue.component('products', {
    template: `
   <div class="conteiner mt-1 mb-1 border border border-light rounded body">
    <div v-if="id && prod" class="spa-cont-good">
      <img class="spa-img" :src="prod.img" alt />
      <div class="spa-cont-buttons">
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
                Remove ({{quant(prod._id)}})
            </button>
            </transition>     
        </div>
        <h3 class = "mt-3 ">{{prod.title}}</h3>
        <p class = "pageGood-price">Price: {{prod.price}} \u20bd</p>
        <router-link :to="{ name: 'catalog'}"> <a class="pageGood-link">Back to catalog</a></router-link>
        <p class="spa-description">{{prod.description}}</p>   
            </div>
            <div v-else class="spa-loading-cont ">
            <div class="spinner-border" style="width: 10rem; height: 10rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
     </div>
    `,

    components: {
        good
    },
    methods: {
        ...mapActions({
            addToCart: 'cart/incCart',
            delFromCart: 'cart/decCart',
        }),
    },
    computed: {
        ...mapGetters({
            inCart: ['catalog/inCart'],
            cartLoading: ['cart/loading'],
            quant: ['catalog/quant'],
            good: 'catalog/getGood'
        }),
        id() {
            return /[A-Z-z0-9]{23}\d$/.test(this.$route.params.id) ? false : this.$route.params.id;
        },
        prod() {
            return this.good(this.id)
        }
    },

    mounted() {

    }
})