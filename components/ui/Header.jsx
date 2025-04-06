import Logo from './Logo';
import Nav from './Nav';
import Searchbar from './Searchbar';

function Header() {
  return (
    <header className='flex items-center gap-20'>
      <Logo size='sm' />
      <Nav />
      <Searchbar />
    </header>
  );
}

export default Header;
