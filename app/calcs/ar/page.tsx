"use client"

import { calculate } from "@/app/lib/CalcFromString";
import { useEffect, useState } from "react"

export default function AriphmeticCalculator(){
  const arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrayOfOperators = ["+", "-", "/", "*"];

  const [calcValue, setCalcValue] = useState("");

  const detectKeyDown = (e : KeyboardEvent) => {
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
  });

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
          <div className="grid grid-cols-3">
            <div className="grid grid-cols-1">
              {
                arrayOfOperators.map((el, index) => {
                  return(
                    <button
                      key={index}
                      onClick={() => {
                        console.log(calcValue[calcValue.length - 1] !== " ", (calcValue.length > 0))
                        if ((calcValue.length > 0) && (calcValue[calcValue.length - 1] !== " ")) {
                          console.log(calcValue.length, calcValue[calcValue.length - 1] !== " ")
                          setCalcValue((prev) => `${prev} ${el} `);
                        } else {
                          setCalcValue((prev) => `${prev.slice(0, prev.length - 4)} ${el} `)
                        }
                      }}
                    >
                      {el}
                    </button>
                  )
                })
              }
            </div>
            <div className="grid grid-cols-4">
              {
                arrayOfNums.map((el, index) => {
                  return(
                    <button key={index}
                      onClick={() => {
                        setCalcValue((prev) => prev + el)
                      }}
                    >
                      {el}
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}