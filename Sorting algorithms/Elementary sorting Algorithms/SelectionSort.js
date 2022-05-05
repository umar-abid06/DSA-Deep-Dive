//Selection Sort (O(N^2)) is better than the bubble sort in a case when for some reason we want less number of swaps(or if there any memory issue) bcoz it iterates and check more and swap less.

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[lowest], arr[j]);
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
SelectionSort([0, 3, 2, 4, 1]);
