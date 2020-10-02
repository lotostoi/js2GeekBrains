import Vue from 'vue'

import { mapGetters } from 'vuex'

import filt from '@/js/components/search'

export default Vue.component('top', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-light border rounded bg-light" >
        <a class="navbar-brand" href="#">E-Shop</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto border rounded">

                <router-link :to="{name: 'main'}" class ="link"  exact active-class="link-active">Main</router-link> 
                <router-link :to="{name: 'catalog'}" class ="link"  exact active-class="link-active">Products</router-link> 
                <router-link :to="{name: 'form'}" class ="link"  exact active-class="link-active">Contacts us</router-link> 
                 
            </ul>
            <filt></filt>
            
            <router-link :to="{name: 'cart'}" type="button" class="btn btn-secondary ml-3" exact active-class="but-active">
                   Cart<span class="badge badge-light ml-3">{{quantity}}</span>
               
            </router-link> 
       
        </div>
    </nav> 
    `,
    components: {
        filt
    },

    data: () => ({
        searchValue: '',
        fields: [
            { name: 'Main', active: true },
            { name: 'Products', active: false },
            { name: 'Contacts us', active: false },
            { name: 'Cart', active: false },
        ]
    }),
    methods: {
        active(e) {

            this.fields.forEach((f, i) => {
                (e === f.name) ?
                    (Vue.set(this.fields[i], 'active', true) && this.$emit('showpage', f.name)) :
                    Vue.set(this.fields[i], 'active', false)
            })
        },
        search() {
            this.active("Products")
            this.$emit('search', this.searchValue)
        },


    },
    computed: {
        ...mapGetters({
            quantity: ['cart/quantity'],
        })
    }



})

