import Vue from 'vue'

import {mapGetters, mapActions} from 'vuex'

export default Vue.component('search', {
    template: ` 
        <form class="form-inline my-2 my-lg-0" id = "filter"  v-on:submit.prevent="filter(searchValue)">
            <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" v-model = "searchValue">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> 
    `,
    data:()=> ({
        searchValue:''
    }),
    methods:{
        ...mapActions({
            filter:'catalog/filter'
        })
    }
})