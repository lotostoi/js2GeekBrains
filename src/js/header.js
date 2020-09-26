import Vue from 'vue'
export default Vue.component('top', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-light border rounded bg-light" >
        <a class="navbar-brand" href="#">E-Shop</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto border rounded">

                <li v-for="field,i in fields" :key="i"  class="nav-item" :class= "field.active ? 'active-link' :''">
                    <a v-if="field.name !=='Cart'" class="nav-link" @click="active(field.name)" href="#">{{field.name}}</a>
                </li>
            
            </ul>
            <form class="form-inline my-2 my-lg-0" id = "filter"  v-on:submit.prevent="search">
                <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" v-model = "searchValue">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> 
            <button type="button" class="btn btn-secondary ml-3" :class ="fields[3].active ? 'but-active' :''"  @click="active('Cart')">
               Cart<span class="badge badge-light ml-3">{{count}}</span>
            </button>   
        </div>
    </nav> 
    `,
    props: {
        count: {
            type: Number,
        }
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
            this.$emit('search',  this.searchValue )
        }


    },



})

