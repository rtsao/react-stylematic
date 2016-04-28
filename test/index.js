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
