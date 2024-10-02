import { CalculateBlock } from "@/app/components/CalculateBlock";
import LogFunc from "@/app/lib/LogFunc";

export default function MiscCalc() {

  return(
    <div>
      <CalculateBlock 
        name={"Log"}
        func={LogFunc}
      />
    </div>
  )
}