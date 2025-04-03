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
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove){
  // Make sure the original array was not altered by the without function
  return source.filter(item => !itemsToRemove.includes(item));
}

//Test cases
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);