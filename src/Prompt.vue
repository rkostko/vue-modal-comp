<template>
    <modal :title-text="titleText" ref="modal">
        <slot></slot>

        <input type="email"
               :placeholder="inputPlaceholder"
               autofocus
               v-model="userInput"
               @keyup.enter="confirm"
               v-if="inputType === 'email'"
        >

        <input type="text"
               :placeholder="inputPlaceholder"
               autofocus
               v-model="userInput"
               @keyup.enter="confirm"
               v-else
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
    import Modal from './Modal'
    import ModalButton from './ModalButton'

    export default {
        components: {
            Modal,
            ModalButton
        },

        props: {
            cancelButtonText: {
                type: String,
                default: 'Cancel'
            },

            confirmButtonText: {
                type: String,
                default: 'Confirm'
            },

            inputPlaceholder: {
                type: String,
                default: 'Please type something…'
            },

            inputType: {
                type: String,
                default: null
            },

            titleText: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                userInput: ''
            }
        },

        methods: {
            cancel() {
                this.$refs.modal.visible = false

                this.$emit('cancel')
            },

            confirm() {
                this.$refs.modal.visible = false

                this.$emit('confirm', this.userInput)
            },

            setVisible(visible) {
                this.$refs.modal.visible = visible
            }
        },

        mounted() {
            this.$refs.modal.$on('cancel', _ => {
                this.$emit('cancel')
            })
        }
    }
</script>
