<template>
    <modal :title-text="titleText" ref="modal">
        <slot></slot>

        <modal-button @click="cancel" slot="buttons">
            {{ cancelButtonText }}
        </modal-button>

        <modal-button :autofocus="true" :validate="destructive == false" :destructive="destructive" @click="confirm" slot="buttons">
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

            destructive: {
                type: Boolean,
                default: false
            },

            titleText: {
                type: String,
                required: true
            }
        },

        methods: {
            cancel() {
                this.$refs.modal.visible = false

                this.$emit('cancel')
            },

            confirm() {
                this.$refs.modal.visible = false

                this.$emit('confirm')
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
