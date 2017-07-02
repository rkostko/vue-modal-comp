import Vue from 'vue'
import Modal from './Modal'
import Alert from './Alert'
import Confirm from './Confirm'
import Prompt from './Prompt'

Vue.config.productionTip = false

new Vue({
    el: '#app',

    components: {
        Modal,
        Alert,
        Confirm,
        Prompt
    }
})
