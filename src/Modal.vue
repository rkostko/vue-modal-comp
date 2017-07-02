<template>
    <div class="vmc-container">
        <transition name="vmc-modal-trans">
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

                <footer class="vmc__footer" v-if="buttons">
                    <div class="vmc__btn-cont" v-for="button in buttons">
                        <button type="button"
                                class="vmc__btn"
                                :class="{ 'vmc__btn--destructive': button.destructive }"
                                :autofocus="button.autofocus"
                                @click="button.callback"
                        >
                            {{ button.text }}
                        </button>
                    </div>
                </footer>
            </aside>
        </transition>

        <transition name="vmc-overlay-trans">
            <div class="vmc-overlay" @click="cancel" v-if="visible"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            buttons: {
                type: Array,
                default: null
            },

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
            }
        },

        mounted() {
            window.onkeyup = e => {
                if (e.keyCode !== 27) {
                    return
                }

                this.cancel()
            }
        }
    }
</script>
