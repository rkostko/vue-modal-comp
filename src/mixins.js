export const modalSupport = {
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
        this.$refs.modal.$slots.title = this.$slots.title

        this.$refs.modal.$on('cancel', _ => {
            this.$emit('cancel')
        })
    }
}
