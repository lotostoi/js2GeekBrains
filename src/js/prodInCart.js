import Vue from 'vue'
export default Vue.component('prod', {
    template: `
            <tr class="row ml-auto mr-auto mt-2" style="border-bottom:1px solid lightgray; ">
                <td class="col-2 ml-auto mr-auto cent">
                       <img class="card-img-top mt-2" :src="prod.link" :key="prod.id" style="width:100px; height:100px">
                </td>
                <td class="col-2 ml-auto mr-auto cent">{{prod.title}}</td>
                <td class="col-2 ml-auto mr-auto cent">{{prod.price}} \u20bd</td>
                <td class="col-2 ml-auto mr-auto cent">{{prod.price * prod.quantity}} \u20bd</td>
                <td class="col-2 ml-auto mr-auto cent">  
                    <button class="btn btn-warning" type="submit" @click="$emit('removefromcart', prod.id)">-</button>      
                    <div class="ml-1 mr-1 cent"> <span>{{prod.quantity}}</span> </div>
                    <button class="btn btn-warning" type="submit" @click="$emit('addtocart', prod.id)">+</button>
                </td>
            </tr>   
    `,
    props: {
        prod: {
            type: Object,
            required: true
        }
    }

})