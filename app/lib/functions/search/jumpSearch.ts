"use client"

import { SEARCH_FUNCTION_PROPS } from "@/app/utils/types";

export function jumpSearch({arr, searchedElement} : SEARCH_FUNCTION_PROPS) {
  const jumpSize = Math.floor(Math.sqrt(arr.length));
  let count = 0;
  
  for (let i = 0; i < arr.length; i += jumpSize) {
    count++;
    if (i === searchedElement) {
      return count;
    }
    if (i > searchedElement) {
      for (let j = i - jumpSize; j <= i; j++) {
        count++;
        if (j === searchedElement) {
          return count;
        }
      }
      break;
    }
  }
  return -1;
}