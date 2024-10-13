"use client"

interface Props {
  name: string,
  complexity: string,
  arr: number[],
  func: (arg : number[]) => number
}

export function SortBlock({name, complexity, arr, func} : Props) {
  return (
    <div>
      it takes {func(arr)} iterations to sort this array. {name} time complexity is {complexity}
    </div>
  )
}