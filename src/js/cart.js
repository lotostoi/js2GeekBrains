import Vue from 'vue'

import prod from './components/prodInCart'

import {mapGetters, mapActions} from "vuex"

export default Vue.component('cart', {
    template: `
    <div class="conteiner mt-1 mb-1 border border border-light rounded body">
        <table class="table ">
            <tbody>
                <tr class="row ml-auto mr-auto mt-2" style="border-bottom:1px solid lightgray; ">
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
        </table>
    </div> 
    `,
    props: {
/*         products: {
            type: Array,
            required: true
        },
        message: {
            type: String
        },
        count: {
            type: Object,
            required:true
        } */
    },
    componets: {
        prod
    },
    computed: {
        ...mapGetters({
            goodsInCart:['cart/cart'],
            sum:['cart/sum'],
            quantity:['cart/quantity'],
        })
    },
    mounted() {

    }

})