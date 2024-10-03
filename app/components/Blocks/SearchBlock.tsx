"use client"

interface Props {
  array: number[],
  searchedElement: number,
  func: (arg : number[], element: number) => number
}

export function SearchBlock({array,searchedElement, func} : Props) {
  return(
    <div>
      <button
        onClick={() => {
          func(array, searchedElement)
        }}
      >

      </button>
    </div>
  )
}