import Vue from 'vue'
import Modal from '@/Modal'
import ModalButton from '@/ModalButton'

describe('Modal.vue', () => {
    const closeButtonText = 'Dismiss'
    const titleText = 'Hello, World!'
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur doloribus, id voluptatum alias dignissimos, dolore rem cum autem velit mollitia consectetur quas fugit ad, error facilis ratione veritatis. Voluptate, laborum!'

    const vm = new Vue({
        components: {
            Modal,
            ModalButton
        },

        template: `<modal close-button-text="${closeButtonText}" ref="modal">
                       <h1 slot="title">${titleText}</h1>

                       <p>${content}</p>

                       <modal-button slot="buttons"></modal-button>
                       <modal-button :autofocus="true" :validate="true" slot="buttons"></modal-button>
                       <modal-button :destructive="true" slot="buttons"></modal-button>
                   </modal>`
    }).$mount()

    vm.$refs.modal.open()

    it('should render custom close button text', done => {
        vm.$nextTick(() => {
            expect(vm.$el.querySelector('.vmc-modal__header .vmc-modal__close-btn').textContent.trim())
                .to.equal(closeButtonText)

            done()
        })
    })

    it('should render the title', done => {
        vm.$nextTick(() => {
            expect(vm.$el.querySelector('.vmc-modal__header h1').textContent.trim())
                .to.equal(titleText)

            done()
        })
    })

    it('should render the content', done => {
        vm.$nextTick(() => {
            expect(vm.$el.querySelector('.vmc-modal__content').textContent.trim())
                .to.equal(content)

            done()
        })
    })

    it('should render three buttons', done => {
        vm.$nextTick(() => {
            expect(vm.$el.querySelectorAll('.vmc-modal__footer .vmc-modal__btn').length)
                .to.equal(3)

            done()
        })
    })
})
