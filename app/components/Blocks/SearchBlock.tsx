"use client"

interface Props {
  name: string,
  array: number[],
  searchedElement: number,
  func: (arg : number[], element: number) => number
}

export function SearchBlock({name, array,searchedElement, func} : Props) {
  return(
    <div>
      {`${name}`}
      <button
        onClick={() => {
          func(array, searchedElement)
        }}
      >
        Check how much iteration it takes
      </button>
    </div>
  )
}