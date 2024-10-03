"use client"

export function fibonacci(n : number) {
  const number = Math.round(n);
  const squareOfFive = Math.sqrt(5);
  return ( Math.floor((Math.pow(((1 + squareOfFive) / 2), number) - Math.pow(((1 - squareOfFive) / 2), number)) / squareOfFive)

  )
}