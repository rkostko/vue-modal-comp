<template>
    <button type="button"
            class="vmc__btn"
            :class="{
                'vmc__btn--validate': validate,
                'vmc__btn--destructive': destructive
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
