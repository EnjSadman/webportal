import Link from 'next/link';
import { NAV_LINK_TYPE } from '../utils/enums';

interface Props {
  text: string;
  path: string;
  type: NAV_LINK_TYPE;
}

export function NavLink({ text, path, type }: Props) {
  let theme;
  switch (type) {
    case NAV_LINK_TYPE.header: {
      theme = 'text-md text-zinc-950 hover:underline';
      break;
    }

    case NAV_LINK_TYPE.footer: {
      theme = 'text-md text-slate-600 hover:underline';
      break;
    }

    default: {
      theme = 'text-md text-black hover:underline';
      break;
    }
  }
  return (
    <Link href={path} className={`${theme}`}>
      {text}
    </Link>
  );
}
