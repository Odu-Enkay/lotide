const assertArraysEqual = require("../assertArraysEqual.js");
//Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Assertion Passed
assertArraysEqual([5, 4, 6], ["5", "4", "6"]); // Assertion Failed