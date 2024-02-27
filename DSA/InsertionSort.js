function InsertionSort(arr) {
  let i,
    j,
    n = arr.length;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}

InsertionSort([24,9,14,29,19,27])