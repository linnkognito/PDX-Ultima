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
    about: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  return (
    <nav aria-label='main navigation'>
      <ul className='flex gap-15'>
        <DropdownProvider>
          <li className='group'>
            <NavButton
              id='explore'
              label='Explore'
              options={options.explore}
              className='text-glow'
            />
          </li>

          <li className='group'>
            <NavButton
              id='create'
              label='Create'
              options={options.create}
              className='text-primary'
            />
          </li>

          <li className='group'>
            <NavButton
              id='about'
              label='About'
              options={options.about}
              className='text-secondary'
            />
          </li>
        </DropdownProvider>
      </ul>
    </nav>
  );
}

export default Nav;
