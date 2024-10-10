"use client"

import { SEARCH_FUNCTION_PROPS } from "@/app/utils/types";
import { useState } from "react";

interface Props {
  name: string,
  arr: number[],
  searchedElement: number,
  arrayIsShuffled: boolean,
  worksWithShuffled: boolean,
  func: ({arr, searchedElement} : SEARCH_FUNCTION_PROPS) => number
}

export function SearchBlock({name, arr, arrayIsShuffled, worksWithShuffled, searchedElement, func} : Props) {
  return(
    <div>
      {
      (arrayIsShuffled)
        ? (worksWithShuffled) && `${name} number of iterations ${func({arr, searchedElement})}`
        : `${name} number of iterations ${func({arr, searchedElement})}`
      }
      
    </div>
  )
}