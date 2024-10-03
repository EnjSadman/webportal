"use client"

import { useState } from "react";

interface Props {
  name: string;
  func: (arg: number) => number;
  replaceZero?: boolean;
}

const integer = /^\d+$/; 

export function CalculateBlock({ name, func, replaceZero = false }: Props) {
  const [realValue, setRealValue] = useState(0);
  const [displayedValue, setDisplayedValue] = useState("0"); 
  const [lastValidValue, setLastValidValue] = useState(0);  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    if (replaceZero && realValue === 0 && integer.test(inputValue)) {
      inputValue = inputValue.slice(-1);
    }

    const numericalValue = Number(inputValue);

    setDisplayedValue(inputValue);

    const result = func(numericalValue);

    if (!isNaN(result)) {
      setRealValue(numericalValue);
      setLastValidValue(result);
    } else {
      setDisplayedValue(lastValidValue.toString());
    }
  };

  return (
    <div className="container flex">
      <label>
        {name}
        <input
          type="text"
          value={displayedValue}
          onChange={handleChange}
        />
      </label>
      <div>{lastValidValue}</div>
    </div>
  );
}
