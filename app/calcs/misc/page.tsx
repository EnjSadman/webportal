import { CalculateBlock } from "@/app/components/CalculateBlock";
import factorial from "@/app/components/functions/factorial";
import { fibonacci } from "@/app/components/functions/fibonacci";
import LogFunc from "@/app/lib/LogFunc";

export default function MiscCalc() {

  return(
    <div>
      <CalculateBlock 
        name={"Log"}
        func={LogFunc}
        replaceZero={true}
      />
      <CalculateBlock 
        name={"Factorial"}
        func={factorial}
        replaceZero={true}
      />
      <CalculateBlock 
        name={"Fibonacci"}
        func={fibonacci}
        replaceZero={true}
      />
    </div>
  )
}