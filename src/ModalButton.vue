<template>
    <button type="button"
            class="vmc-modal__btn"
            :class="{
                'vmc-modal__btn--validate': validate,
                'vmc-modal__btn--destructive': destructive
            }"
            :autofocus="autofocus"
            @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            autofocus: {
                type: Boolean,
                default: false
            },

            destructive: {
                type: Boolean,
                default: false
            },

            validate: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
