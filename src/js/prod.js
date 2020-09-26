import Vue from 'vue'
export default Vue.component('good', {
    template: `
            <div class="card col-3 m-2">
                    <img class="card-img-top mt-2" :src="prod.link" :key="prod.id" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{prod.title}}</h5>
                        <h5 class="card-title">{{prod.price}}\u20bd </h5>
                        <a v-if = "!prod.inCart"  href="#" class="btn btn-primary" @click="$emit('addtocart', prod.id)" >Add to cart</a>
                        <a v-else  href="#" class="btn btn-danger" @click="$emit('removefromcart', prod.id)" >Remove </a>
                    </div>
            </div>      
    `,
    props: {
        prod: {
            type: Object,
            required: true
        }
    }

})
