import { DropdownProvider } from '../contexts/DropdownContext';
import NavButton from './NavButton';

function Nav() {
  const options = {
    explore: [
      { label: 'Featured', href: '/guides' },
      { label: 'Areas', href: '/guides/areas' },
      { label: 'Themes', href: '/guides/themes' },
      { label: 'All Guides', href: '/guides' },
      { label: 'All Places', href: '/places' },
    ],
    create: [
      { label: 'New Guide', href: '/guides/create' },
      { label: 'New Place', href: '/places/create' },
    ],
  };

  return (
    <nav aria-label='main navigation' className='flex gap-10'>
      <ul className='flex gap-10'>
        <DropdownProvider>
          <li className='group'>
            <NavButton id='explore' label='Explore' options={options.explore} />
          </li>

          <li className='group'>
            <NavButton id='create' label='Create' options={options.create} />
          </li>
        </DropdownProvider>
      </ul>
    </nav>
  );
}

export default Nav;
