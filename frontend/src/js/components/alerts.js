import Vue from 'vue'
import {
    mapGetters,
    mapActions
} from "vuex";

export default Vue.component('alert', {
    template: `
    <transition-group :class="place ==='corner'? 'cont-alert': 'cont-alert-center'" tag="div" leave-active-class="leave" enter-active-class="enter" mode="out-in">
        <div :class="place ==='corner'? 'message': 'message-center'" v-for="(alert) in alerts" :key="alert.id">
                <p>{{alert.text}}</p> 
                <button v-if="place ==='center'" class = "btn btn-secondary" @click="reload"> Reload page</button>
        </div>
    </transition-group>
    `,
    methods: {
        reload() {
            window.location.reload()
        }
    },
    computed: {
        ...mapGetters({
            alerts: "alerts/all",
            place: "alerts/place",
        }),
    },
})
