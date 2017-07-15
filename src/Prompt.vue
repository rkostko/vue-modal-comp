<template>
    <modal ref="modal">
        <slot></slot>

        <input type="text"
               v-model="userInput"
               autofocus
               @keyup.enter="confirm"
        >

        <modal-button @click="cancel" slot="buttons">
            {{ cancelButtonText }}
        </modal-button>

        <modal-button :validate="true" @click="confirm" slot="buttons">
            {{ confirmButtonText }}
        </modal-button>
    </modal>
</template>

<script>
    import Modal from '@/Modal'
    import ModalButton from '@/ModalButton'
    import { modalSupport } from '@/mixins'

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
            confirm() {
                if (!this.$refs.modal) {
                    return
                }

                this.$refs.modal.visible = false

                this.$emit('confirm', this.userInput)
            }
        }
    }
</script>
