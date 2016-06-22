'use strict';

var test = require('tape');
var styletron = require('styletron');
var React = require('react');

var createElement = React.createElement;
var createElementStylematic = require('../');

var Component = React.createClass({
  render: function() {
    return createElement('div');
  }
});

test('no props', function(t) {
  t.deepEqual(createElementStylematic('div'), createElement('div'));
  t.end();
});

test('style prop with passthrough', function(t) {
  t.deepEqual(
    createElementStylematic('div', {style: {color: 'red'}}),
    createElement('div', {style: {color: 'red'}})
  );
  t.end();
});

test('style prop with passthrough and children', function(t) {
  t.deepEqual(
    createElementStylematic('div', {style: {color: 'red'}}, createElement('div')),
    createElement('div', {style: {color: 'red'}}, createElement('div'))
  );
  t.end();
});

test('style prop with passthrough and children', function(t) {
  styletron.startBuffering();
  t.deepEqual(
    createElementStylematic('div', {style: {color: ['rgba(0,0,255,0.5)', 'blue']}}, createElement('div')),
    createElement('div', {className: '_style_3Bl7iO'}, createElement('div'))
  );
  var css = styletron.flushBuffer();
  t.equal(css, '._style_3Bl7iO {\n  color: blue !important;\n  color: rgba(0,0,255,0.5) !important\n}');
  t.end();
});

test('Component passthrough', function(t) {
  t.deepEqual(
    createElementStylematic(Component, {style: {color: ['red', 'blue']}}),
    createElement(Component, {style: {color: ['red', 'blue']}})
  );
  t.end();
});
