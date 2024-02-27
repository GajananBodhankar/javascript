function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[end];
  arr[end] = arr[i + 1];
  arr[i + 1] = temp;
  return i + 1;
}
function quickSort(arr, start, end) {
  if (start < end) {
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }
  console.log(arr);
}

quickSort([24, 9, 14, 29, 19, 27], 0, 5);
