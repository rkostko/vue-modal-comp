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

        forwardClosedEvent() {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.$on('closed', _ => this.$emit('closed'))
        },

        open() {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.visible = true

            this.$emit('opened')
        },

        close() {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.visible = false

            this.$emit('closed')
        },

        confirm(...args) {
            if (!this.$refs.modal) {
                return
            }

            this.$refs.modal.close()

            this.$emit('confirm', args)
        },

        toggle() {
            if (this.visible) {
                this.close()
            } else {
                this.open()
            }
        }
    },

    mounted() {
        this.forwardTitleSlot()
        this.forwardClosedEvent()
    }
}
