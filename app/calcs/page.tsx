import { NavLink } from "../components/NavLink";
import { NAV_LINK_TYPE } from "../utils/enums";

export default function CalcMain() {
  return (
    <main>
      <div className="container mx-auto">
        <h1>What calculating today, chief?</h1>
      </div>
      <div>
      <NavLink
              text={'Ariphmetic'}
              path={'/calcs/ar'}
              type={NAV_LINK_TYPE.regular}
      />
      <NavLink
              text={'Misc'}
              path={'/calcs/misc'}
              type={NAV_LINK_TYPE.regular}
      />
      </div>
    </main>
  )
}