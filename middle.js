
const middle = function(array) {
  let n = array.length;
  if (n <= 2) {
    return [];
  }
  
  let mid = Math.floor(n / 2);
  if (n % 2 !== 0) {
    return [array[mid]];  // Always return an array
  } else {
    return [array[mid - 1], array[mid]];
  }
};

module.exports = middle;