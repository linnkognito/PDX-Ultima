import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon';
import ButtonIcon from './ButtonIcon';
import { useState } from 'react';

const menuItems = [
  { text: 'Dashboard', path: 'dashboard', icon: 'dashboard' },
  { text: 'Guides', path: '/guides', icon: 'map' },
  { text: 'Places', path: '/places', icon: 'location_on' },
  { text: 'Settings', path: '/settings', icon: 'settings' },
  { text: 'Login', path: '/login', icon: 'login' },
];

function Sidebar() {
  const [minimized, setMinimized] = useState(false);

  return (
    <aside
      className={`relative h-screen shadow-lg shadow-violet-300/50 ${
        minimized ? 'w-fit' : 'w-fit sm:w-2/6 sm:min-w-fit max-w-[310px] '
      }`}
    >
      <ButtonIcon
        title={minimized ? 'Expand menu' : 'Minimize menu'}
        size='sm'
        bg='bg-transparent hover:bg-violet-600'
        className='opacity-0 sm:opacity-100 absolute top-2 left-4'
        onClick={() => setMinimized((min) => !min)}
      >
        <Icon name={minimized ? 'arrow_menu_open' : 'arrow_menu_close'} />
      </ButtonIcon>
      <nav>
        <ul className='flex gap-3 flex-col px-4 pt-24'>
          {menuItems.map((link) => (
            <NavLink to={link.path} key={link.text}>
              <li
                className={`flex items-center gap-4 cursor-pointer py-3 px-4 hover:bg-violet-400 active:bg-violet-400 shadow-sm shadow-violet-400 animation-prep-300 font-sans tracking-wider rounded-md ${
                  minimized ? 'w-fit' : 'w-fit sm:w-full sm:hover:ml-2'
                }`}
              >
                <Icon name={link.icon} />
                <span className={`${minimized ? 'hidden' : 'hidden sm:block'}`}>
                  {link.text}
                </span>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
