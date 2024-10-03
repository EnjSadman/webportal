import { CalculateBlock } from "@/app/components/CalculateBlock";
import { factorial } from "@/app/lib/functions/math/factorial";
import { fibonacci } from "@/app/lib/functions/math/fibonacci";
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