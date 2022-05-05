// LeetCode Question 11
// You are given an array of
// positive integers where each integer represents the height of a vertical line
// on a chart. FInd two lines which together with the x-axis forms a container that
// would hold the greatest amount of water. Return the area of waterit would hold.

// time : O(n^2)
// function waterFill(arr) {
//    let maxArea = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let length = Math.min(arr[i], arr[j]);
//             let width = j - i;
//             let area = length * width;

//             if(maxArea < area) {
//                 maxArea = area;
//             }
//         }
//     }
//     return maxArea;
// }

// Now we will use multiple pointers technique to optimize our code:

function waterFill(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    let length = Math.min(heights[left], heights[right]);
    let width = right - left;
    let area = length * width;
    maxArea = Math.max(area, maxArea);

    if (heights[left] <= heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
// time : O(n)
waterFill([4, 8, 1, 2, 3, 9]);
