# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @nkiruka_odu/lotide`

**Require it:**

`const _ = require('@nkiruka_odu/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => [1]`

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
- `head(...)`: description: to fetch the first element of an array
- `tail(...)`: description: the return the other elements after the first element of an array
- `assertArraysEqual(...)`: description: returns an assertion true if two arrays are equal or false if otherwise
- `assertEqual(...)`: description: returns an assertation if two items matches
- `assertObjectsEqual(...)`: description: returns pass if two objects matches or fail if otherwise
- `countLetters(...)`: description: counts the number of characters in an array and returns the letter with the number of times it appeared in the form of object
- `countOnly(...)`: description: counts the number of elements in an array
- `eqArrays(...)`: description: checks if two array length is equal, returns true if equal or false if otherwise
- `eqObjects(...)`: description: Checks if two objects has the same keys and values
- `findKey(...)`: description: takes in an object and a callback. scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
- `findKeyByValue(...)`: description: takes in an object and a value. scans the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- `letterPositions(...)`: description: returns all the indices (zero-based positions) in the string where each character is found.
- `takeUntil(...)`: description:  return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value. 
  - `without(...)`: description: returns a subset of a given array, removing unwanted elements
   - `map(...)`: description: return a new array based on the results of the callback function.