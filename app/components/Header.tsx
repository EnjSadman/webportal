import Link from 'next/link';
import { NavLink } from './NavLink';
import { NAV_LINK_TYPE } from '../utils/enums';

export function Header() {
  return (
    <header className="sticky top-0 left-0">
      <div className="shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="uppercase text-4xl" href={'/'}>
            Enj
          </Link>
          <nav>
            <NavLink
              text={'Space'}
              path={'/space'}
              type={NAV_LINK_TYPE.header}
            />
            <NavLink
              text={'News'}
              path={'/news'}
              type={NAV_LINK_TYPE.header}
            />
            <NavLink
              text={'Calcs'}
              path={'/calcs'}
              type={NAV_LINK_TYPE.header}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
