const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE FOR ASSERT EQL
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("nkiru", "nkiru");
assertEqual("Nkiru", "nkiru");
assertEqual(23, 23);
assertEqual(23, "23");


//TEST CODE for head
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
