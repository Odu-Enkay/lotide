const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require('chai').assert;

//TEST CODE
describe("#tail", () => {
  it("returns 3 for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),2);
  });

});