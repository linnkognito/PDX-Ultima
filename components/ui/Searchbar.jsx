import Input from './Input';
import Label from './Label';

function Searchbar() {
  return (
    <div role='search' aria-label='Site search' className=''>
      <Label htmlFor='search' show={false} ariaLabel='Search the site' />

      <Input
        id='search'
        type='search'
        name='q'
        placeholder='Search for anything'
      />
    </div>
  );
}

export default Searchbar;
