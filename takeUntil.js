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

const takeUntil = function(array, callback) {
  // ...
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // Make sure the expected array matches what should be returned by takeUntil

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]); 
