function merge(arr, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    merge(arr, start, mid);
    merge(arr, mid + 1, end);
    mergeSort(arr, start, mid, end);
  }
  console.log(arr);
}

function mergeSort(arr, start, mid, end) {
  let low = start,
    i = start,
    high = mid + 1,
    temp = [];
  while (low <= mid && high <= end) {
    if (arr[low] < arr[high]) {
      // temp[i] = arr[low];
      temp.push(arr[low]);
      low++;
    } else {
      // temp[i] = arr[high];
      temp.push(arr[high]);
      high++;
    }
    // i++;
  }
  if (low > mid) {
    for (let j = high; j <= end; j++) {
      // temp[i] = arr[j];
      // i++;
      temp.push(arr[j]);
    }
  } else {
    for (let j = low; j <= mid; j++) {
      // temp[i] = arr[j];
      // i++;
      temp.push(arr[j]);
    }
  }
  for (let j = start; j <= end; j++) {
    // arr[j] = temp[j];
    // if not using 'i' as count and just pushing elements to temp array
    // then here, use arr[j]=temp[j-start]
    arr[j] = temp[j - start];
  }
}

merge([24, 9, 14, 29, 19, 27], 0, 5);
