<template>
    <div class="bc-m-container">
        <aside class="bc-m">
            <header class="bc-m__header">
                <h1 class="bc-m__title">{{ titleText }}</h1>

                <button type="button"
                        class="bc-m__close-btn"
                        @click="$emit('cancel')"
                >
                    {{ closeButtonText }}
                </button>
            </header>

            <div class="bc-m__content">
                <slot></slot>
            </div>

            <footer class="bc-m__footer">
                <div class="bc-m__cancel-btn-cont">
                    <button type="button" class="bc-m__cancel-btn" @click="$emit('cancel')">
                        {{ cancelButtonText }}
                    </button>
                </div>

                <div class="bc-m__confirm-btn-cont">
                    <button type="button" class="bc-m__confirm-btn" @click="$emit('confirm')">
                        {{ confirmButtonText }}
                    </button>
                </div>
            </footer>
        </aside>

        <div class="bc-m-overlay" @click="$emit('cancel')"></div>
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
                default: 'Confirm'
            },

            titleText: {
                type: String,
                default: null,
                required: true
            }
        }
    }
</script>
