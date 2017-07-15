[![Latest Version on NPM](https://img.shields.io/npm/v/vue-modal-component.svg?style=flat-square)](https://npmjs.com/package/vue-modal-component)
[![Software License](https://img.shields.io/badge/license-WTFPL-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/benjamincrozat/vue-modal-component/master.svg?style=flat-square)](https://travis-ci.org/benjamincrozat/vue-modal-component)
[![npm](https://img.shields.io/npm/dt/vue-modal-component.svg?style=flat-square)](https://www.npmjs.com/package/vue-modal-component)

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

**Please note that the CSS is not included. It's totally up to you to make it looks however you want.** You can take inspiration from [the demo's code](index.html), though.

### Modal.vue

The basic one. Just a modal with a close button. You can put any content in it.

```html
```

### Alert.vue

It imitates a JavaScript `alert()` dialog. This component just adds a "OK" button..

```html
```

### Confirm.vue

It imitates a JavaScript `confirm()` dialog. This component adds "Cancel" and "Confirm" buttons.

```html
```

### Prompt.vue

It imitates a JavaScript `prompt()` dialog. It's just like `Confirm.vue`, but with an input.

```html
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)
