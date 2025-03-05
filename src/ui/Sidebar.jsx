import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon';

const menuItems = [
  { text: 'Dashboard', path: 'dashboard', icon: 'dashboard' },
  { text: 'Guides', path: '/guides', icon: 'map' },
  { text: 'Places', path: '/places', icon: 'location_on' },
  { text: 'Settings', path: '/settings', icon: 'settings' },
  { text: 'Login', path: '/login', icon: 'login' },
];

function Sidebar() {
  return (
    <aside className='w-fit sm:w-2/6 h-full shadow-lg shadow-violet-300/50'>
      <nav>
        <ul className='flex gap-3 flex-col px-4 pt-24'>
          {menuItems.map((link) => (
            <NavLink to={link.path} key={link.text}>
              <li className='w-fit sm:w-full flex items-center gap-4 cursor-pointer py-3 px-4 hover:bg-violet-400 active:bg-violet-400 shadow-sm shadow-violet-400 will-change duration-300 ease-out transition-all font-sans tracking-wider rounded-md sm:hover:ml-2'>
                <Icon name={link.icon} />
                <span className='hidden sm:block'>{link.text}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
