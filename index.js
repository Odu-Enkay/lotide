// export some of the functions as part of an object
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');
const map = require('./map');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual, 
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey, 
  findKeyByValue,
  letterPositions,
  takeUntil,
  without,
  map
};