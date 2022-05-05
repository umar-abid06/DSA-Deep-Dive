// LeetCode Question 1
// function findPair(arr, target) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target){
//                  return [i, j]
//             }
//         }
//     }
// }

// We are building the object in which keys are the difference (numToFind)
// and the coresponding value is the index of the number in the array.
function findPairSum(nums, target) {
  const numsMap = {};

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numToFind = target - nums[p];
      numsMap[numToFind] = p;
    }
  }
  return null;
}

findPairSum([3, 1, 7, 2], 10);
