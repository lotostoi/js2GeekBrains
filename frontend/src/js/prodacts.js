import Vue from 'vue'

import good from './components/prod'

import {mapGetters} from 'vuex'

export default Vue.component('products', {
    template: `
    <div class="conteiner mt-1 mb-1 border border border-light rounded body">
        <div class="row center ">
            <good v-for="prod in catalog" :prod='prod' :key="prod.name" />      
        </div>  
        <div class="ml-auto  mr-auto mt-5 col-4">
             <h4 v-if = "catalog.length === 0 && !loading">Not found for "{{bodyRequest}} ..." </h4>
        </div>

        <div v-if = "loading" class="m-auto   col-1">
            <div class="spinner-grow" style="width: 7rem; height: 7rem;" role="status">
                 <span class="sr-only">Loading...</span>
            </div>    
        </div>

    </div> 
    `,
  
    components: {
       good
    },
    computed: {
        ...mapGetters({
            catalog:['catalog/catalog'],
            bodyRequest:['catalog/value'],
            loading:['catalog/loading'],
           

        })
    },
 
    mounted() {

    }
})