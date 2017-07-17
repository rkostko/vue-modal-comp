import Vue from 'vue'

export const Modal = require('./Modal')
export const ModalButton = require('./ModalButton')
export const Alert = require('./Alert')
export const Confirm = require('./Confirm')
export const Prompt = require('./Prompt')

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
        showPromptInput(args) {
            alert(args[0])
        }
    }
})
