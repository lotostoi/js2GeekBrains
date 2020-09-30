import Vue from 'vue'
import {
    mapGetters,
    mapActions
} from "vuex";

export default Vue.component('alert', {
    template: `
    <transition-group class="cont-arlet" tag="div" leave-active-class="leave" enter-active-class="enter" mode="out-in">
        <div class="message" v-for="(alert) in alerts" :key="alert.id">
                <p>{{alert.text}}</p>
        </div>
    </transition-group>
    `,
    computed: {
        ...mapGetters({
            alerts: "alerts/all",
        }),
    },
})
