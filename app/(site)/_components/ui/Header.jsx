import Logo from './Logo';
import Nav from './Nav';
import Searchbar from './Searchbar';

function Header() {
  return (
    <header className='flex items-center gap-10 max-w-site mx-auto p-header'>
      <Logo size='sm' background={true} className='-rotate-12' />

      <div className='flex justify-between bg-background rounded-full shadow-standard p-nav w-full mr-6'>
        <Nav />
        <Searchbar />
      </div>
    </header>
  );
}

export default Header;
