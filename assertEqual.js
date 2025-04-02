const assertEqual = function (actual, expected) {
  if (actual === expected){
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
  }
  else{
    console.log("🛑🛑🛑 Assertion Failed:", actual, "!==", expected);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("nkiru", "nkiru");
assertEqual("Nkiru", "nkiru");
assertEqual(23, 23);
assertEqual(23, "23");