function BinarySearchRecursive(arr, start, end, target) {
  let mid = Math.floor((start + end) / 2);
  if (start < end) {
    console.log(arr, start, mid);
    if (arr[mid] == target) {
      return mid;
    } else if (target > arr[mid]) {
      return BinarySearchRecursive(arr, mid + 1, end, target);
    } else if (target < arr[mid]) {
      return BinarySearchRecursive(arr, start, mid - 1, target);
    }
  }
  return -1;
}
console.log(BinarySearchRecursive([10, 20, 30, 40, 50], 0, 5, 520));
