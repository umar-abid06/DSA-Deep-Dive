//Insertion sort complexity is O(N^2). But it can be helpful when the data is almost sorted and also works good when online data fetching as it gives the sorted data every time so it is good when realtime data (as it keeps one side of the array always sorted).
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}
InsertionSort([2, 1, 9, 76, 4]);
