// Write a function called productOfArray
// which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3])
// 6
// productOfArray([1,2,3,10])
// 60

// Doing Iteratively:

// function productOfArray(arr) {
//     if(arr.length === 0) return 0;

//     let result = 1;
//     for (let i = 0; i < arr.length; i++) {
//         result = result * arr[i]
//     }
//     return result;
// }

// Doing Recursively

function productOfArray(arr) {
  let result = 0;

  function helper(helperInput) {
    if (helperInput.length === 0) return 1;

    return (result = helperInput[0] * helper(helperInput.slice(1)));
  }

  helper(arr);

  return result;
}

productOfArray([1, 2, 3, 10]);
