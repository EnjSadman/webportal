"use client"

import { SortBlock } from "@/app/components/Blocks/SortBlock";
import { randomizeArrayPositions } from "@/app/lib/functions/math/randomizeArrayPositions";
import { bubbleSort } from "@/app/lib/functions/sort/BubbleSort";
import { selectSort } from "@/app/lib/functions/sort/SelectionSort";
import { useEffect, useState } from "react";

const BASE_ARRAY_SIZE = 10;
const BASE_ARRAY = randomizeArrayPositions(Array.from({ length: BASE_ARRAY_SIZE }, (_, i) => i));

export default function sortMethods() {
  const [exampleArray, setExampleArray] = useState<number []>([]);

  useEffect(()=>{
    setExampleArray(BASE_ARRAY)
  }, [])

  return (
    <div>
      {exampleArray.map((el, index) => (
        <div key={index}>
          {el}
        </div>
      )
      )}
      <SortBlock
        name={"Selection sort"}
        complexity={"n^2"}
        arr={exampleArray}
        func={selectSort} />
      <SortBlock
        name={"Bubble sort"}
        complexity={"n^2"}
        arr={exampleArray}
        func={bubbleSort} />
    </div>
  )
}