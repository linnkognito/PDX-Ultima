'use client';

import { useDropdownContext } from '../contexts/DropdownContext';
import Button from './Button';
import DropdownMenu from './DropdownMenu';

function NavButton({ id, label = '', className = '', options }) {
  const { openId, setOpenId } = useDropdownContext();
  const isOpen = openId === id;

  const handleClick = () => setOpenId(isOpen ? null : id);

  return (
    <div className='relative group pl-8'>
      <Button
        theme='nav'
        id={`${id}-button`}
        aria-haspopup='true'
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        className={`pt-1 pb-2 px-3 rounded-t-xl hover:bg-background/60 border-x-[1.5px] border-t-[1.5px] border-b-0 border-transparent hover:border-background ${className}`}
        onClick={handleClick}
      >
        {label}
      </Button>

      {isOpen && <DropdownMenu id={id} options={options} />}
    </div>
  );
}

export default NavButton;
