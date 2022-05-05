// countUniqueValues
// Implement a function called countUniqueValues,
// which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// 1- Restate the problem:
//     We have to make a function which takes a sorted array of integers,
//     and counts the no of elements which are distinctive than other elements.

// 2-
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// 3- Break it down:
// a) Take two pointers for the first two elements and check if they are equal
// if yes then move the second pointer up and check again,
// if they are not equal then set the value of pointer 1
// to the value of pointer 2 and move pointer 2 one up.

// 4- Solve:

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 2, 2, 2, 3, 4, 8]);

//  i
// [1,2,2,3,4,4]
//     j

//      i
// [1,2,3,3,4,4]
//        j
