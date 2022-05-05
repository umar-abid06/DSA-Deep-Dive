// some notes! (RECAP)
// Searching is a very common task that we often take for granted
// When searching through an unsorted collection, linear search is the best we can do
// When searching through a sorted collection, we can find things very quickly with binary search
// KMP provides a linear time algorithm for searches in strings

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
