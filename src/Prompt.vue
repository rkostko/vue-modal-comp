<template>
    <modal ref="modal">
        <slot></slot>

        <input type="text"
               v-model="userInput"
               autofocus
               @keyup.enter="confirmAndPassUserInput"
        >

        <modal-button @click="close" slot="buttons">
            {{ cancelButtonText }}
        </modal-button>

        <modal-button :validate="true"
                      @click="confirmAndPassUserInput"
                      slot="buttons"
        >
            {{ confirmButtonText }}
        </modal-button>
    </modal>
</template>

<script>
    import Modal from './Modal'
    import ModalButton from './ModalButton'
    import { modalSupport } from './mixins'

    export default {
        components: {
            Modal,
            ModalButton
        },

        mixins: [
            modalSupport
        ],

        props: {
            cancelButtonText: {
                type: String,
                default: 'Cancel'
            },

            confirmButtonText: {
                type: String,
                default: 'Confirm'
            }
        },

        data() {
            return {
                userInput: null
            }
        },

        methods: {
            confirmAndPassUserInput() {
                this.confirm(this.userInput)
            }
        }
    }
</script>
