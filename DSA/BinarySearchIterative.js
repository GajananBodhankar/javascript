function BinarySearchIterative(arr, target) {
  let start = 0,
    end = arr.length;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(BinarySearchIterative([10, 20, 30, 40, 50], 520));
