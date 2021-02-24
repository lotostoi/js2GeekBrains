import Vue from 'vue'

import prod from '@/js/components/prodInCart'

import { mapGetters, mapActions } from "vuex"

export default Vue.component('cart', {
    template: `
 
         <div class = "container-fluid"> 
            <table v-if = "!loading" class="table ">

                <tbody>
                    <tr class="row ml-auto mr-auto mt-2 statistics-header" style="border-bottom:1px solid lightgray; ">
                        <td class="col-2 ml-auto mr-auto cent"><strong>Image</strong></td>
                        <td class="col-2 ml-auto mr-auto cent"><strong>Title</strong></td>
                        <td class="col-2 ml-auto mr-auto cent"><strong>Price</strong></td>
                        <td class="col-2 ml-auto mr-auto cent"><strong>All price</strong></td>
                        <td class="col-2 ml-auto mr-auto cent"><strong>Quantity</strong></td>     
                    </tr>
                    <prod v-for="prod in  goodsInCart" :prod='prod' :key="prod.name" @addtocart="$emit('addtocart', $event)" @removefromcart="$emit('removefromcart', $event)"/>
                    <tr class="row ml-auto mr-auto mt-2" style="border-bottom:1px solid lightgray; ">
                        <td class="col-2 ml-auto mr-auto cent"></td>
                        <td class="col-2 ml-auto mr-auto cent"></td>
                        <td class="col-2 ml-auto mr-auto cent"><strong>Result:</strong></td>
                        <td class="col-2 ml-auto mr-auto cent"><strong>{{sum}} \u20bd</strong></td>
                        <td class="col-2 ml-auto mr-auto cent"><strong>{{quantity}}</strong></td>     
                    </tr>
            
                    </tbody>
                    <div class = "col-2 mt-3 mb-3 mr-1 ml-auto">
                        <button class = "btn btn-info" @click = "clearCart" :disabled="goodsInCart.length === 0"> Clear Cart </button>
                    </div>
            </table>
        
            <div v-else class="m-auto   col-1">
                <div class="spinner-grow mt-5" style="width: 7rem; height: 7rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>    
            </div>

         </div>
  
    `,

    components: {
        prod
    },
    computed: {
        ...mapGetters({
            goodsInCart: ['cart/cart'],
            sum: ['cart/sum'],
            quantity: ['cart/quantity'],
            loading: ['cart/loading'],
        })
    },
    methods: {
        ...mapActions({
            clearCart: 'cart/clearCart'
        })
    },

})