# vue-modal-component

A simple modal component for Vue.js.

## Installation

```bash
npm install vue-modal-component --save
```

## Usage

This is package is made from 4 components:

- [Modal.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#modalvue)
- [Alert.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#alertvue)
- [Confirm.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#confirmvue)
- [Prompt.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#promptvue)

**Please note that the CSS is not included. It's totally up to you to make it looks however you want.** You can take inspiration from [the demo](index.html), though.

### Modal.vue

The basic one. Just a modal with a close button. You can put any content in it.

```html
<template>
    <!-- Just change the "visible" property of the Modal component. -->
    <button type="button"
            @click="$refs.modal.visible = !$refs.modal.visible"
    >
        Toggle Modal
    </button>

    <!-- The "modal" reference is needed to access its "visible" property. -->
    <modal title-text="Lorem ipsum dolor sit amet" ref="modal">
        <p>Consectetur adipisicing elit. Commodi ex a nam eum recusandae quod fugit velit doloribus fuga, porro consequuntur saepe aliquam nesciunt ipsa accusamus necessitatibus, adipisci suscipit debitis.</p>
    </modal>
</template>

<script>
    import Modal from 'vue-modal-component/src/Modal'

    export default {
        components: {
            Modal
        }
    }
</script>
```

### Alert.vue

It imitates a JavaScript `alert()` dialog. This component just adds a "OK" button. It extends `Modal.vue`.

```html
<template>
    ...

    <alert title-text="Lorem ipsum dolor sit amet" ref="alert">
        <p>Consectetur adipisicing elit. Commodi ex a nam eum recusandae quod fugit velit doloribus fuga, porro consequuntur saepe aliquam nesciunt ipsa accusamus necessitatibus, adipisci suscipit debitis.</p>
    </alert>
</template>

<script>
    import Alert from 'vue-modal-component/src/Alert'

    export default {
        components: {
            Alert
        }
    }
</script>
```

### Confirm.vue

It imitates a JavaScript `confirm()` dialog. This component adds "Cancel" and "OK" buttons. It extends `Modal.vue`.

```html
<template>
    ...

    <confirm @cancel="doSomethingIfTheUserCancels"
             @confirm="doSomethingIfTheUserConfirms"
             title-text="Lorem ipsum dolor sit amet" ref="confirm">
        <p>Consectetur adipisicing elit. Commodi ex a nam eum recusandae quod fugit velit doloribus fuga, porro consequuntur saepe aliquam nesciunt ipsa accusamus necessitatibus, adipisci suscipit debitis.</p>
    </confirm>
</template>

<script>
    import Confirm from 'vue-modal-component/src/Confirm'

    export default {
        components: {
            Confirm
        }
    }
</script>
```

### Prompt.vue

It imitates a JavaScript `prompt()` dialog. This component adds "Cancel" and "OK" buttons. It extends `Modal.vue`.

```html
<template>
    ...

    <prompt @confirm="doSomethingWithTheValue"
            title-text="Lorem ipsum dolor sit amet"
            ref="prompt"
    >
        <p>Consectetur adipisicing elit. Commodi ex a nam eum recusandae quod fugit velit doloribus fuga, porro consequuntur saepe aliquam nesciunt ipsa accusamus necessitatibus, adipisci suscipit debitis.</p>
    </prompt>
</template>

<script>
    import Confirm from 'vue-modal-component/src/Confirm'

    export default {
        components: {
            Confirm
        },

        methods: {
            doSomethingWithTheValue(value) {
                console.log(value)
            }
        }
    }
</script>
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)
