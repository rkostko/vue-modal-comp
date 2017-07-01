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

                <footer class="vmc__footer">
                    <div class="vmc__btn-cont">
                        <button type="button" class="vmc__cancel-btn" @click="cancel">
                            {{ cancelButtonText }}
                        </button>
                    </div>

                    <div class="vmc__btn-cont">
                        <button type="button"
                                class="vmc__confirm-btn"
                                :class="{ 'vmc__confirm-btn--destructive': destructive }"
                                @click="confirm"
                                autofocus
                        >
                            {{ confirmButtonText }}
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
            cancelButtonText: {
                type: String,
                default: 'Cancel'
            },

            closeButtonText: {
                type: String,
                default: 'Close'
            },

            confirmButtonText: {
                type: String,
                default: 'OK'
            },

            destructive: {
                type: Boolean,
                default: false
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

            confirm() {
                this.visible = false

                this.$emit('confirm')
            }
        },

        mounted() {
            window.onkeyup = e => {
                if (!this.visible || e.keyCode !== 27) {
                    return
                }

                this.cancel()
            }
        }
    }
</script>
