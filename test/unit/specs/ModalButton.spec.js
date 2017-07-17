import Vue from 'vue'
import ModalButton from '@/ModalButton'

describe('ModalButton.vue', () => {
    it('should render as validation button', () => {
        const Constructor = Vue.extend(ModalButton)

        const vm = new Constructor({
            propsData: {
                validate: true
            }
        }).$mount()

        expect(vm.$el.classList.contains('vmc-modal__btn--validate'))
            .to.be.true
    })

    it('should render autofocused', () => {
        const Constructor = Vue.extend(ModalButton)

        const vm = new Constructor({
            propsData: {
                autofocus: true
            }
        }).$mount()

        expect(vm.$el.getAttribute('autofocus'))
            .to.not.be.null
    })

    it('should render as a delete button', () => {
        const Constructor = Vue.extend(ModalButton)

        const vm = new Constructor({
            propsData: {
                destructive: true
            }
        }).$mount()

        expect(vm.$el.classList.contains('vmc-modal__btn--destructive'))
            .to.be.true
    })
})
