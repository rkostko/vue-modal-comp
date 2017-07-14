import Vue from 'vue'
import Modal from './Modal'
import ModalButton from './ModalButton'
import Alert from './Alert'
import Confirm from './Confirm'
import Prompt from './Prompt'

Vue.config.productionTip = false

new Vue({
    el: '#app',

    components: {
        Modal,
        ModalButton,
        Alert,
        Confirm,
        Prompt
    },

    methods: {
        alert(text) {
            alert(text)
        },

        showPromptInput(input) {
            alert(input)
        }
    }
})
