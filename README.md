# react-stylematic

[![build status][build-badge]][build-href]
[![dependencies status][deps-badge]][deps-href]
[![npm version][npm-badge]][npm-href]

A [stylematic](https://github.com/rtsao/stylematic) wrapper for React

## Quick example

```jsx

/** @jsx createElement */

const createElement = require('react-stylematic'); 

const App = () => (
  <div style={{
    color: 'red',
    background: 'linear-gradient(#fff, #eee)',
    ':hover': {
      color: ['rgba(0,75,255,0.8)', 'blue']
    }
  }>
    Hello World!
  </div>
);

```
**Rendered HTML**
```html
<div class="_style_4e1hWd" style="color: red">Hello World!</div>
```

**Automatically injected CSS into document `<head>`**
```html
<style data-styletron>
._style_4e1hWd {
  background: -webkit-linear-gradient(#fff, #eee) !important;
  background: -moz-linear-gradient(#fff, #eee) !important;
  background: linear-gradient(#fff, #eee) !important
}
._style_4e1hWd:hover {
  color: blue !important;
  color: rgba(0,75,255,0.8) !important
}
</style>
```

### Extraction of CSS on server

```jsx
const React = require('react');
const ReactDOM = require('react-dom/server');
const {renderStatic} = require('styletron-server');

const App = require('./app');

const {html, css, hydrationSrc} = renderStatic(() => {
  return ReactDOM.renderToString(<App/>);
});
```


[build-badge]: https://travis-ci.org/rtsao/react-stylematic.svg?branch=master
[build-href]: https://travis-ci.org/rtsao/react-stylematic
[deps-badge]: https://david-dm.org/rtsao/react-stylematic.svg
[deps-href]: https://david-dm.org/rtsao/react-stylematic
[npm-badge]: https://badge.fury.io/js/react-stylematic.svg
[npm-href]: https://www.npmjs.com/package/react-stylematic
