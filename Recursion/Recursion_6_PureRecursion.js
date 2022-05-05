// This is a pattern for writing Pure recursion functions

function collectOddValues(arr) {
  let newArr = [];

  //The base case
  if (arr.length === 0) return newArr;

  //Logic here
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  //different input and concatenation
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
