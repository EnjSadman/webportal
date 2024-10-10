"use client"

import { SEARCH_FUNCTION_PROPS } from "@/app/utils/types";

export function linearSearch({arr, searchedElement} : SEARCH_FUNCTION_PROPS) {
  for (let i = 0; i < arr.length; i++) {
    if (i === searchedElement) {
      return i + 1
    }
  }

  return 0;
}