// function BubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr, "Comparing:",arr[j], "and", arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 //Swap
//               console.log("Swapping: ", arr[j], "and", arr[j+1])
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//         console.log(i,"th pass")
//     }
//     return arr;
// }
//Too many extra passes

//Refactored Solution
// function BubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j <  i -1; j++) {
//             console.log(arr, "Comparing:",arr[j], "and", arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 //Swap
//               console.log("Swapping: ", arr[j], "and", arr[j+1])
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//         console.log( "One pass Completed")
//     }
//     return arr;
// }
//Using ES2015
// function BubbleSort(arr) {

//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j <  i -1; j++) {
//             console.log(arr, "Comparing:",arr[j], "and", arr[j+1])
//             if(arr[j] > arr[j+1]){
//              swap(arr, j, j+1)
//             }
//         }
//         console.log( "One pass Completed")
//     }
//     return arr;
// }

//Still one extra PAss therefore Refactoring Again for the Optimized solution using noSwaps:
function BubbleSort(arr) {
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, "Comparing:", arr[j], "and", arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        console.log("Swapping: ", arr[j], "and", arr[j + 1]);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log("One pass Completed");
    if (noSwaps) break;
  }
  return arr;
}

BubbleSort([2, 1, 8, 4]);
