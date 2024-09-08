// Duplicate Integer
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3];

// Output: true;
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

// SOLUTIONS:
// USING NESTED LOOPS WITH ARRAY (TIME COMPLEXITY: O(n^2), SPACE COMPLEXITY: O(n))
// function hasDuplicate(nums) {
//   let temp = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < temp.length; j++) {
//       if (nums[i] == temp[j]) {
//         console.log("true");
//         return;
//       }
//     }
//     temp.push(nums[i]);
//   }
//   console.log("false");
//   return;
// }

// USING BUILT-IN ARRAY .INCLUDES() METHOD:
// function hasDuplicate(nums) {
//   let temp = [];

//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];

//     if (temp.includes(nums[i])) {
//       console.log("true");
//       return;
//     } else {
//       temp.push(nums[i]);
//     }
//   }
//   console.log("false");
//   return;
// }
// USING HASHSET

// function hasDuplicate(arr) {
//   let hashSet = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (hashSet.has(element)) return "true";
//     else hashSet.add(arr[i]);
//   }
//   return false;
// }

// USING SORTING & CHECK CONSECUTIVE ELEMENTS
function hasDuplicate(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
}

// USING BRUTE-FORCE
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

hasDuplicate([1, 2, 3, 4]);
// hasDuplicate([1, 2, 2, 4]);

// DISCUSSION:

// --> break is best when you want to exit a loop but still perform other logic.
// return is best when you want to exit the entire function early, preventing further execution of code.

// ### Comparison Table:

// | Solution                                       | Time Complexity  | Space Complexity |
// |------------------------------------------------|------------------|------------------|
// | **Nested Loops (Brute Force)**                 | O(n²)            | O(1)             |
// | **Using `.includes()` with Arrays**            | O(n²)            | O(n)             |
// | **Using Hash Set (`Set`)**                     | O(n)             | O(n)             |
// | **Sorting and Comparing Consecutive Elements** | O(n log n)       | O(1) or O(n)     |

// ### **Which Solution is Best?**

// - **Time Complexity Winner**: The **hash set** solution (`O(n)`).
//   - It provides the best performance in terms of time complexity, making it suitable for large datasets.

// - **Space Complexity Winner**: The **nested loops** and **sorting** solutions, if sorted in-place (`O(1)`).
//   - These solutions use less additional memory, but they are slower in terms of time complexity.

// ### Conclusion:

// - **Best Overall (Time + Space Trade-off)**: The **hash set** solution is the most balanced in practice for both large and small datasets because it offers linear time complexity (`O(n)`) and reasonable space complexity (`O(n)`).
// - If memory usage is a significant concern and you can afford slightly slower performance, the **sorting** approach with in-place sorting is a good choice, offering **O(n log n)** time complexity with **O(1)** space complexity.
