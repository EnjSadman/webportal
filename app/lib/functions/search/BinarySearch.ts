"use client"

import { SEARCH_FUNCTION_PROPS } from "@/app/utils/types";

export function binarySearch({arr, searchedElement} : SEARCH_FUNCTION_PROPS) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    let i = 0;
    while (high >= low) {
        i++;
        mid = low + Math.floor((high - low) / 2);

        if (mid == searchedElement)
            return i;

        if (mid > searchedElement)
            high = mid - 1;

        else
            low = mid + 1;
    }

    return -1;
}