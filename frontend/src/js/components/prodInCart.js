import Vue from 'vue'

import { mapGetters, mapActions } from "vuex"
export default Vue.component('prod', {
    template: `
            <tr class="row ml-auto mr-auto mt-2" style="border-bottom:1px solid lightgray; ">
                <td class="col-2 ml-auto mr-auto cent">
                       <img class="card-img-top mt-2" :src="prod.link" :key="prod._id" style="width:100px; height:100px">
                </td>
                <td class="col-2 ml-auto mr-auto cent">{{prod.title}}</td>
                <td class="col-2 ml-auto mr-auto cent">{{prod.price}} \u20bd</td>
                <td class="col-2 ml-auto mr-auto cent">{{prod.price * prod.quantity}} \u20bd</td>
                <td class="col-2 ml-auto mr-auto cent">  
                    <button class="btn btn-info cartBtn"
                        type="submit" 
                        @click="delFromCart(prod)" 
                        :class = "prod.inProcess? ' block': '' "
                        :disabled="prod.inProcess"
                     >
                        <span v-if="prod.inProcess" class="spinner-border spinner-border-sm"" role="status" aria-hidden="true"></span>
                        <span class = "operation" v-else>-</span>
                     </button>      
                    <div class="ml-1 mr-1 cent"> <span>{{prod.quantity}}</span> </div>
                    <button class="btn btn-info cartBtn"
                        type="submit" 
                        @click="addToCart(prod)"
                        :class = "prod.inProcess? 'block': '' "
                        :disabled="prod.inProcess"
                    >
                        <span v-if="prod.inProcess" class="spinner-border spinner-border-sm"" role="status" aria-hidden="true"></span>
                        <span class = "operation" v-else>+</span>
                    </button>
                </td>
            </tr>   
    `,
    props: {
        prod: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            catalog: ['catalog/catalog'],
            catalogLoading: ['catalog/loading'],
        })
    },
    methods: {
        ...mapActions({
            addToCart: 'cart/incCart',
            delFromCart: 'cart/decCart',
        })
    },

})