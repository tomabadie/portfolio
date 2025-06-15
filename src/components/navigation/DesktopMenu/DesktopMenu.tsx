import { NavLink } from 'react-router';
import type { DesktopMenuProps } from './desktopMenuType';

const DesktopMenu = ({ navList }: DesktopMenuProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-4 p-0">
        {navList.map((item) => (
          <li key={item.id} className="uppercase">
            <NavLink
              to={item.path}
              data-cursor="hover"
              className={({ isActive }) =>
                `transition-theme text-primary px-2.5 py-1.5 text-lg font-semibold motion-reduce:transition-none ${isActive && 'bg-global-secondary border-primary rounded-lg border'} ${!isActive && "after:bg-text-primary-light dark:after:bg-text-primary-dark relative block w-fit after:absolute after:left-1/2 after:block after:h-[1px] after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:transition after:duration-300 after:content-[''] hover:after:scale-x-100 motion-reduce:after:transition-none motion-reduce:after:duration-0"}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
