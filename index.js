'use strict';

var React = require('react');
var stylematic = require('stylematic');

module.exports = function createElementStylematic(element, props) {
  // if not an element or no style prop, do nothing
  if (!props || !props.style || typeof element !== 'string') {
    return React.createElement.apply(null, arguments);
  }

  var result = stylematic(props.style);
  var args = Array(arguments.length);

  args[0] = element;
  args[1] = newProps(props, result.passthrough, result.className) 
  var numChildrenArgs = arguments.length - 2;
  for (var i = 0; i < numChildrenArgs; i++) {
    args[i + 2] = arguments[i + 2];
  }

  return React.createElement.apply(null, args);
}

function newProps(original, styles, className) {
  var props = Object.keys(original).reduce(function(acc, key) {
    if (key === 'style') {
      if (Object.keys(styles).length) {
        acc.style = styles;
      }
    } else {
      acc[key] = original[key];
    }
    return acc;
  }, {});

  if (className) {
    props.className = props.className ?
      props.className + ' ' + className : className;
  }
  return props;
}
