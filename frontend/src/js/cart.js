import Vue from 'vue'


export default Vue.component('cart', {
    template: `
    <div class="conteiner mt-1 mb-1 border border border-light rounded body">
            
            <ul class="nav-cart">
                <router-link :to="{name: 'cartBody'}" class ="link "  exact active-class="link-active">Cart</router-link> 
                <router-link :to="{name: 'cartStatistics'}" class ="link "  exact active-class="link-active">Statistics</router-link>              
            </ul>

            <router-view></router-view>

    </div> 
    `,

})