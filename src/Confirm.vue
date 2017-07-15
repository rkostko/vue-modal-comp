<template>
    <modal ref="modal">
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
            },

            destructive: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
