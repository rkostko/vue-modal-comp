<template>
    <modal :buttons="[
               {
                    text: okButtonText,
                    callback: _ => $refs.modal.cancel(),
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
            okButtonText: {
                type: String,
                default: 'OK'
            }
        },

        methods: {
            setVisible(visible) {
                this.$refs.modal.visible = visible
            }
        }
    }
</script>
