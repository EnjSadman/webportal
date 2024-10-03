"use client"

import { randomizeArrayPositions } from "@/app/lib/functions/math/randomizeArrayPositions";
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
          
      </div>
    </div>
  )
}