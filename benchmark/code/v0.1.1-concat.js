'use strict';

var braces = require('braces');
var uniq = require('array-unique');

module.exports = function expand(val, fn) {
  val = Array.isArray(val) ? val : [val];
  var len = val.length;
  var arr = [];
  var i = 0;

  while (i < len) {
    arr = arr.concat(braces(val[i++], fn));
  }
  return uniq(arr);
};
