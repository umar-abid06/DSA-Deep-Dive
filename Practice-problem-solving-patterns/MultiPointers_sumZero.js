// Write a function called sumZero which
// accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined
// if a pair does not exist

// 1- Function which finds first pair of integers whose sum is zero.
// Input is an array of integers.
// Output is the pair of integers.

// 2-
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// 3- Break it Down:
// a) Fistly i need a function which takes an array of integers as paramter.
// b) How to add two elements of an array or (the consecutive elements)?
//     i=0; j= i+1;
//     arr[i] + arr[j];
// c) Make a loop and check for the sum = 0, if yes then return the pair of elements.

// 4- Solve\Simplify:

// Wrong solution bcoz it is valid for the values which are consecutive to each other
// Also it doesnt need sorted array.

// function sumZero(arr) {
//     if(arr.length <= 1) return "No pairs possible";

//     for (let i = 0; i < arr.length; i++) {
//         let j = i+1;
//         if((arr[i] + arr[j]) === 0) return console.log(arr[i] ,arr[j]);

//     }
//            return "No pairs' sum is zero"
// }

// sumZero([1,2,5,7,9,-9,0,6,45])

// Solving again: This time using multiple pointers approach Time Complexity - O(N)
// Space Complexity - O(1), another method
// is to use nested loops but it will increase the complexity quadratic times
// Time Complexity - O(N^2)
// Space Complexity - O(1).

//3- Break it Down
// a) Create two pointers or variables one is at the start while the other is at the end.
// b) Check for the sum === 0, if found return the array pair
//

function sumZero(arr) {
  if (arr.length <= 1) return "No pair possible!";

  let left = 0;
  let right = arr.length - 1;

  for (let i = left; i < right; i++) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
sumZero([-3, -2, 0, 1, 7, 8]);
