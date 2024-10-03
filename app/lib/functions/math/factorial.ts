"use client"

export function factorial(n : number) : number {
  const number = Math.round(n)
  if (number === 0) {
    return 1;
  }
  if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return 1;
  }
}