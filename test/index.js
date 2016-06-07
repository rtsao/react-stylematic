'use strict';

var test = require('tape');
var styletron = require('styletron');

var createElement = require('react').createElement;
var createElementStylematic = require('../');

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
    createElement('div', {className: '_style_4fAcOm'}, createElement('div'))
  );
  var css = styletron.flushBuffer();
  t.equal(css, '._style_4fAcOm {\n  color: rgba(0,0,255,0.5) !important;\n  color: blue !important\n}');
  t.end();
});
