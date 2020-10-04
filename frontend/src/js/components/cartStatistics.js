import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default Vue.component('statistics', {
    template: `
         <div class = "container-fluid">   
            <div class = "statistics-body">
                <div class = "statistics-header"> 
                    <div class = "time">Time operation</div>
                    <div class = "event">Operation</div>
                    <div class = "obj">Product's name</div>
                </div>
                <div class = "statistics-list"  v-for="obj of statistics" :key = "obj._id"> 
                    <div class = "time">{{obj.data}}</div>
                    <div class = "event">{{obj.event}}</div>
                    <div class = "obj"> 
                         <router-link v-if="obj.product" :to="{ name: 'good', params: { id: obj.product._id }}"><a class="prod-link">{{obj.product.title}}</a></router-link>
                    </div>
                </div>           
            </div> 
        </div>
    `,
    computed: {
        ...mapGetters({
            statistics:['cart/statistics']
        })
    },
    methods: {
        ...mapActions({
            getStatistics:'cart/getStatistics'
        })
    }
})