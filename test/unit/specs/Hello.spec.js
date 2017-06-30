import Vue from 'vue'
import Modal from '@/components/Modal'

describe('Modal.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Modal)

        const vm = new Constructor().$mount()

        expect(vm.$el).to.not.be.null
    })
})
