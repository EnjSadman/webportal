"use client"

export default function factorial(n : number) : number {
  const number = Math.round(n)
  if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return 1;
  }
}