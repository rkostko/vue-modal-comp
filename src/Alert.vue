<template>
    <modal :title-text="titleText" ref="modal">
        <slot></slot>

        <modal-button :autofocus="true" @click="cancel" slot="buttons">
            {{ okButtonText }}
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
            okButtonText: {
                type: String,
                default: 'OK'
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
