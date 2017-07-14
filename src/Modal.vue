<template>
    <div class="vmc-container">
        <transition name="vmc-transition">
            <aside class="vmc" v-if="visible">
                <header class="vmc__header">
                    <h1 class="vmc__title">{{ titleText }}</h1>

                    <button type="button"
                            class="vmc__close-btn"
                            @click="cancel"
                    >
                        {{ closeButtonText }}
                    </button>
                </header>

                <div class="vmc__content">
                    <slot></slot>
                </div>

                <footer class="vmc__footer" v-if="$slots.buttons">
                    <slot name="buttons"></slot>
                </footer>
            </aside>
        </transition>

        <transition name="vmc-overlay-transition">
            <div class="vmc-overlay" @click="cancel" v-if="visible"></div>
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

            titleText: {
                type: String,
                default: null,
                required: true
            }
        },

        data() {
            return {
                visible: false
            }
        },

        methods: {
            cancel() {
                this.visible = false

                this.$emit('cancel')
            },

            setVisible(visible) {
                this.visible = visible
            }
        }
    }
</script>
