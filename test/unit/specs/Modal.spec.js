import Vue from 'vue'
import Modal from '@/Modal'

describe('Modal.vue', () => {
    it('should render custom close button text', done => {
        const Constructor = Vue.extend(Modal)

        const vm = new Constructor({
            propsData: {
                closeButtonText: 'Fermer'
            }
        }).$mount()

        vm.visible = true

        vm.$nextTick(() => {
            expect(vm.$el.querySelector('.vmc__close-btn').textContent.trim())
                .to
                .equal('Fermer')

            done()
        })
    })
})
