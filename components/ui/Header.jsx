import Logo from './Logo';
import Nav from './Nav';
import Searchbar from './Searchbar';

function Header() {
  return (
    <header className='flex items-center gap-20 z-10 p-header'>
      <Logo size='sm' background={true} />
      <Nav />
      <Searchbar />
    </header>
  );
}

export default Header;
