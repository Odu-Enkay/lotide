//function to assert is two items are equal
const assertEqual = function (actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const counter = {};
  for (let char of str ){
    if (char !== " "){
      if (counter[char]){
        counter[char] = (counter[char] + 1);
      }
      else{
        counter[char] = 1;
      }      
    }
  }
  return counter;
}

//Test Case
countLetters("lighthouse in the house");
countLetters("I believe it worked out!");
