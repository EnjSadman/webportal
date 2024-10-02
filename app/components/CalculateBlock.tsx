"use client"

import { useState } from "react";


export function CalculateBlock ({name, func} : {name: string, func : (arg : number) => number}) {
  const [calculateValue, setCalculateValue] = useState(0);
  return (
    <div>
      <label>
        {name}
        <input type="text" 
          value={calculateValue}
          onChange={(event) => {
            setCalculateValue(Number(event.target.value))
          }}
        />
      </label>
      {
        func(calculateValue)
      }
    </div>
  )
}