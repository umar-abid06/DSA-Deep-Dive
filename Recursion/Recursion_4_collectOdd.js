// Function which takes an array of integers and return the array with odd numbers

// Doing Iteratively:

// function collectOddValues(arr) {
//     let final = [];
//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i] % 2 !== 0){
//           final.push(arr[i]);
//         }

//     }
//      console.log(final)

// }

// Doing Recursively: (Helper-method recursion)

function collectOddValues(arr) {
  var result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
