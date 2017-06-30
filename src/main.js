import Vue from 'vue'
import Modal from './Modal'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<modal></modal>',
    components: { Modal }
})
