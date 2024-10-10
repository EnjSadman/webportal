"use client"

import { SearchBlock } from "@/app/components/Blocks/SearchBlock";
import { randomizeArrayPositions } from "@/app/lib/functions/math/randomizeArrayPositions";
import { binarySearch } from "@/app/lib/functions/search/BinarySearch";
import { jumpSearch } from "@/app/lib/functions/search/jumpSearch";
import { linearSearch } from "@/app/lib/functions/search/linearSearch";
import { useState } from "react";

const BASE_ARRAY_SIZE = 10;
const BASE_ARRAY = Array.from({ length: BASE_ARRAY_SIZE }, (_, i) => i);

export default function SearchMethods() {
  const [exampleArray, setExampleArray] = useState(BASE_ARRAY);
  const [shuffledArray, setShuffledArray] = useState(false)
  const [selectedElement, setSelectedElement] = useState(0);


  return (
    <div>

      <div className="flex">
        {exampleArray.map((el, index) => (
          <div
            className={`${(index === selectedElement) ? "bg-red-400": ""} w-10 p-3 border-2 border-black cursor-pointer`}
            key={index}
            onClick={() => {
              setSelectedElement(index);
            }}
          >
            {el}
          </div>
        ))}
        <button
          onClick={() => {
            setShuffledArray(!shuffledArray);
            if (shuffledArray) {
              setExampleArray(BASE_ARRAY);
            } else {
              setExampleArray(randomizeArrayPositions(exampleArray));
            }
          }}
        >
            {
              (shuffledArray)
              ? "Sorted array"
              : "Shuffled array"
            }
        </button>
      </div>
      <div>
        <SearchBlock 
          name={"Linear search"}
          arr={exampleArray}
          arrayIsShuffled={shuffledArray}
          worksWithShuffled={true}
          searchedElement={selectedElement}
          func={linearSearch} />
        <SearchBlock 
          name={"Binary search"}
          arr={exampleArray}
          arrayIsShuffled={shuffledArray}
          worksWithShuffled={false}
          searchedElement={selectedElement}
          func={binarySearch} />
        <SearchBlock 
          name={"Jump search"}
          arr={exampleArray}
          arrayIsShuffled={shuffledArray}
          worksWithShuffled={false}
          searchedElement={selectedElement}
          func={jumpSearch} />
      </div>
    </div>
  )
}