//function to assert is two items are equal
const assertEqual = function (actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement findKeyByValue function
const findKeyByValue = function(obj, value){
  const someKeys = Object.keys(obj);
  for(let key of someKeys){
    if (obj[key] === value){
      return key
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const toyota = {
  color: "silver",
  model: "XL 2025",
  price: "50,000"
};

assertEqual(findKeyByValue(toyota, "silver"), "color");
