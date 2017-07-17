<template>
    <div class="vmc">
        <transition name="vmc-modal-transition">
            <aside class="vmc-modal"
                   :class="{ 'vmc-modal--overlay-hidden': overlayHidden }"
                   v-if="visible"
            >
                <header class="vmc-modal__header">
                    <slot name="title"></slot>

                    <button type="button"
                            class="vmc-modal__close-btn"
                            @click="close"
                    >
                        {{ closeButtonText }}
                    </button>
                </header>

                <div class="vmc-modal__content">
                    <slot></slot>
                </div>

                <footer class="vmc-modal__footer" v-if="$slots.buttons">
                    <slot name="buttons"></slot>
                </footer>
            </aside>
        </transition>

        <transition name="vmc-overlay-transition" v-if="!overlayHidden">
            <div class="vmc-overlay" @click="close" v-if="visible"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            closeButtonText: {
                type: String,
                default: 'Close'
            },

            overlayHidden: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                visible: false
            }
        },

        methods: {
            open() {
                this.visible = true

                this.$emit('opened')
            },

            close() {
                this.visible = false

                this.$emit('closed')
            },

            toggle() {
                if (this.visible) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    }
</script>
