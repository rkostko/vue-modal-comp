export const modalSupport = {
    methods: {
        forwardTitleSlot() {
            if (!this.$refs.modal) {
                return
            }

            if (this.$slots.title) {
                this.$refs.modal.$slots.title = this.$slots.title
            }
        },

        forwardCancelEvent() {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.$on('cancel', _ => {
                this.$emit('cancel')
            })
        },

        cancel() {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.visible = false

            this.$emit('cancel')
        },

        confirm() {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.visible = false

            this.$emit('confirm')
        },

        setVisible(visible) {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.visible = visible
        }
    },

    mounted() {
        this.forwardTitleSlot()
        this.forwardCancelEvent()
    }
}
