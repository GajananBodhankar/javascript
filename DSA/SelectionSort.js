function SelectionSort(arr) {
  let i,
    j,
    n = arr.length;
  for (i = 0; i < n - 1; i++) {
    let small = i;
    for (j = i + 1; j < n; j++) {
      if (arr[small] > arr[j]) {
        small = j;
      }
    }
    if (small != i) {
      let temp = arr[small];
      arr[small] = arr[i];
      arr[i] = temp;
    }
  }
  console.log(arr);
}

SelectionSort([24, 9, 14, 29, 19, 27]);
