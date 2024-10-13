export function bubbleSort(arr : number[]) {
  let count = 0;
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    count++;
    swapped = false;
    for (let j = 0; j < arr.length; j++) {
      count++;
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      if (swapped) {
        break;
      }
    }
  }

  return count;
}