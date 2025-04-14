import Nav from './Nav';
import Searchbar from './Searchbar';

function Header() {
  return (
    <header className={`flex items-center gap-10 max-w-site mx-auto p-header`}>
      <div className='flex justify-between w-full mr-6 border-b-2 border-background/50'>
        <Nav />
        <Searchbar showIcon={false} className='h-[35px]' />
      </div>
    </header>
  );
}

export default Header;
