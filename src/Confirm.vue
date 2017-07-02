<template>
    <modal :buttons="[
               {
                    text: cancelButtonText,
                    callback: _ => $refs.modal.cancel()
               },
               {
                    text: confirmButtonText,
                    callback: confirm,
                    destructive,
                    autofocus: true
               }
           ]"
           :close-button-text="closeButtonText"
           :title-text="titleText"
           ref="modal"
    >
        <slot></slot>
    </modal>
</template>

<script>
    import Modal from './Modal'

    export default {
        extends: Modal,

        components: {
            Modal
        },

        props: {
            cancelButtonText: {
                type: String,
                default: 'Cancel'
            },

            confirmButtonText: {
                type: String,
                default: 'OK'
            },

            destructive: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            confirm() {
                this.$refs.modal.visible = false

                this.$emit('confirm')
            },

            setVisible(visible) {
                this.$refs.modal.visible = visible
            }
        }
    }
</script>
