// Implement letterPositions function
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    let char = sentence[i];
    if(char !== " "){
      if (results[char]){
        results[char].push(i);
      } 
      else {
        results[char] = [i]; 
    }   
    }  
  }
  return results;
};

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

//Test cases
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello World Me").e, [1, 2]);


