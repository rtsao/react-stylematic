'use strict';

var React = require('react');
var stylematic = require('stylematic');
var assign = require('object-assign');

module.exports = function createElementStylematic(element, props) {
  // if no style prop, do nothing
  if (!props || !props.style) {
    return React.createElement.apply(null, arguments);
  }

  var result = stylematic(props.style);
  var args = Array(arguments.length);
  var className = props.className ?
    props.className + ' ' + result.className : result.className;
  args[0] = element;
  args[1] = className ? assign({}, props, {className: className}) : props;

  var childrenArgs = arguments.length - 3;
  for (var i = 0; i < childrenArgs; i++) {
    args[i + 2] = arguments[i + 2];
  }
  return React.createElement.apply(null, args);
}
