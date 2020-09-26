import Vue from 'vue'

import good from './prod'



export default Vue.component('products', {
    template: `
    <div class="conteiner mt-1 mb-1 border border border-light rounded body">
       <div class="row center ">
            <good v-for="prod in products" :prod='prod' :key="prod.name"  @addtocart="$emit('addtocart', $event)" @removefromcart="$emit('removefromcart', $event)" />
          
        </div>
       
        <div class="ml-auto  mr-auto mt-5 col-4">
             <h4 v-if = "products.length === 0"> {{message}} </h4>
        </div>
    </div> 
    `,
    props: {
        products: {
            type: Array,
            required:true
        },
        message: {
            type: String
        }
    },
    componets: {
       good
    },
    mounted() { 
        console.log(this.products);
    }


})