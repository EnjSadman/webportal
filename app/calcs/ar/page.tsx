"use client"

import { calculate } from "@/app/lib/CalcFromString";
import { useEffect, useState } from "react"

export default function AriphmeticCalculator(){
  const arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrayOfOperators = ["+", "-", "/", "*"];

  const [calcValue, setCalcValue] = useState("");

  const detectKeyDown = (e : any) => {
    if (arrayOfNums.includes(Number(e.key))) {
      setCalcValue((prev) => prev + e.key)
    } else if (arrayOfOperators.includes(e.key)) {
      setCalcValue((prev) => `${prev} ${e.key} `)
    } else if (e.key === "Enter") {
      setCalcValue((prev) => {
        calculate(prev); 
        return prev;
      });
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);

    return () => {document.removeEventListener("keydown", detectKeyDown, true)}
  }, []);

  return (
    <main>
      <div className="continer mx-auto">
        <div className="flex flex-col">
          <div>
            <input type="text"
              value={calcValue}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4">
            {
              arrayOfNums.map((el, index) => {
                return(
                  <button key={index}
                  
                  >
                    {el}
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}