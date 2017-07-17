<template>
    <modal ref="modal">
        <slot></slot>

        <modal-button :autofocus="true"
                      @click="close"
                      slot="buttons"
        >
            {{ okButtonText }}
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
            okButtonText: {
                type: String,
                default: 'OK'
            }
        }
    }
</script>
