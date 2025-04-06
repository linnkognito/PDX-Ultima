import Button from './Button';

function Nav() {
  return (
    <nav className='flex gap-10'>
      <ul className='flex gap-10'>
        <li className='group'>
          <Button theme='nav'>Explore</Button>
        </li>
        <li className='group'>
          <Button theme='nav'>Create</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
