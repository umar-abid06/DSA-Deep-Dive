// Takes a number and sum of its previos numbers uptill 1

//Doing with Iterative Approach:

// function sumRange(num) {
//     let sum = 0;
//     for (let i = num; i >= 1; i--) {
//         sum = sum + i;
//     }
//     return sum;
// }

//Doing with Recusrive Approach:

//Best case?
//Different inputs

//  var sum = 0;
// function sumRange(num) {

//     if(num < 1){
//         return sum;
//     }
//     sum = sum + num;
//     console.log(sum)
//     num--;
//     sumRange(num)
// }

// This solution works fine but we have to use a global sum which is not preferable.

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
sumRange(4);
