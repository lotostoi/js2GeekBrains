import Vue from 'vue'

import good from './components/prod'

import {mapGetters, mapActions} from 'vuex'

export default Vue.component('products', {
    template: `
    <div class="conteiner mt-1 mb-1 border border border-light rounded body">
       <div class="row center ">
            <good v-for="prod in catalog" :prod='prod' :key="prod.name" />      
        </div>  
        <div class="ml-auto  mr-auto mt-5 col-4">
             <h4 v-if = "catalog.length === 0">Not found for "{{bodyRequest}} ..." </h4>
        </div>
    </div> 
    `,
  
    componets: {
       good
    },
    computed: {
        ...mapGetters({
            catalog:['catalog/catalog'],
            bodyRequest:['catalog/value']
        })
    },
 
    mounted() { 
       
    }


})