[![Latest Version on NPM](https://img.shields.io/npm/v/vue-modal-component.svg?style=flat-square)](https://npmjs.com/package/vue-modal-component)
[![Software License](https://img.shields.io/badge/license-WTFPL-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/benjamincrozat/vue-modal-component/master.svg?style=flat-square)](https://travis-ci.org/benjamincrozat/vue-modal-component)
[![npm](https://img.shields.io/npm/dt/vue-modal-component.svg?style=flat-square)](https://www.npmjs.com/package/vue-modal-component)

# vue-modal-component

A simple modal component for Vue.js. [Live demo here](https://vue-modal-component.benjamincrozat.com/).

## Installation

```bash
npm install vue-modal-comp --save
```

## Usage

**This package is not finalized yet. Don't use it in production until it reaches 1.0.0.**

This package has two main components:
- [Modal.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#modalvue)
- [ModalButton.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#modalvue)

And additional ones for common use cases:
- [Alert.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#alertvue)
- [Confirm.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#confirmvue)
- [Prompt.vue](https://github.com/benjamincrozat/vue-modal-component/tree/develop#promptvue)

**Please note that the CSS is not included. It's totally up to you to make it looks however you want.** You can take inspiration from [the demo's code](static/css/style.css), though.

### Modal.vue

```javascript
import { Modal, ModalButton } from 'vue-modal-comp'

export default {
    components: {
        Modal,
        ModalButton
    }
}
```

```html
<button type="button" @click="$refs.modal.toggle()">
    Toggle
</button>

<modal ref="modal">
    <h1 slot="title">Hello, World!</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illo corrupti totam necessitatibus iste, accusantium ex, molestias magnam nisi quod!</p>

    <modal-button @click="$refs.modal.close()">OK</modal-button>
</modal>
```

### ModalButton.vue

Coming soon…

### Alert.vue

Coming soon…

### Confirm.vue

Coming soon…

### Prompt.vue

Coming soon…

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)
