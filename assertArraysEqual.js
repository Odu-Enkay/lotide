const eqArrays = function (array1, array2) {
  //check equality in length
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]){
      return false;
    }
  } 
  return true;
  
};
//function to assert is two items are equal
const assertArraysEqual = function (actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


