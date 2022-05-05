// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// 1- Restate the problem:
//  Make a function which takes an array of integers and a number, doing the sum of n consecutive
// elements and return the maximum among them.

// 2- Explore concrete examples:
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

// 3- Break it down:
// a) Loop from the beginning of the array and sum n numbers.
// b) Leave the first number among the n numbers of elements and
// sum the set of next consecutive n numbers.
// c) Check the largest and return it.

// 4- Solve

// function maxSubarraySum(arr, n) {
//     if(arr.length < n) return "How can we find the sum when number of elements are smaller than the input number?";

//     let max = -Infinity;
//     for (let i = 0; i < arr.length - n + 1 ; i++) {
//         let tempSum = 0;
//         for (let j = 0; j < n; j++) {
//             tempSum = tempSum + arr[i + j];
//         }
//             if(tempSum > max){
//                 max = tempSum;
//             }
//          console.log(tempSum, max)
//     }

//     return max;
//         }

// 5- Look back and Refactor:
// In this prevsolution what we are doinf is firstly,
// we are using nested loops which causes our complexity quadratic times.
// Secondly, we are re calculating or re adding the n numbers
// when we can just subtract the first number and add the last (new) number

//  Solving again Using Sliding Window:

function maxSubarraySum(arr, num) {
  if (num > arr.length) return "Impossible, invalid input";

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// O(n)
