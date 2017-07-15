import Vue from 'vue'
import ModalButton from '@/ModalButton'

describe('ModalButton.vue', () => {
    it('should render as validation button', done => {
        const Constructor = Vue.extend(ModalButton)

        const vm = new Constructor({
            propsData: {
                validate: true
            }
        }).$mount()

        vm.$nextTick(() => {
            expect(vm.$el.classList.contains('vmc__btn--validate'))
                .to.be.true

            done()
        })
    })

    it('should render autofocused', done => {
        const Constructor = Vue.extend(ModalButton)

        const vm = new Constructor({
            propsData: {
                autofocus: true
            }
        }).$mount()

        vm.$nextTick(() => {
            expect(vm.$el.getAttribute('autofocus'))
                .to.not.be.null

            done()
        })
    })

    it('should render as a delete button', done => {
        const Constructor = Vue.extend(ModalButton)

        const vm = new Constructor({
            propsData: {
                destructive: true
            }
        }).$mount()

        vm.$nextTick(() => {
            expect(vm.$el.classList.contains('vmc__btn--destructive'))
                .to.be.true

            done()
        })
    })
})
