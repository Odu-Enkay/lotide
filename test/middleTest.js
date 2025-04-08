const middle = require('../middle');
const assert = require('chai').assert;

//TEST CODE
describe("#middle", () => {
  it("returns [] for  [1]), []", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});