"use client"

export function selectSort(arr : number[]) {
  let count = 0;
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength - 1; i++) {
    count++;
    let minIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      count++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return count
}