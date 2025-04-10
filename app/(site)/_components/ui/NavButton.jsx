'use client';

import { useDropdownContext } from '../contexts/DropdownContext';
import Button from './Button';
import DropdownMenu from './DropdownMenu';

function NavButton({ id, label = '', className = '', options }) {
  const { openId, setOpenId } = useDropdownContext();
  const isOpen = openId === id;

  const handleClick = () => setOpenId(isOpen ? null : id);

  return (
    <div className='relative group'>
      <Button
        theme='nav'
        id={`${id}-button`}
        aria-haspopup='true'
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        className={className}
        onClick={handleClick}
      >
        {label}
      </Button>

      {isOpen && <DropdownMenu id={id} options={options} />}
    </div>
  );
}

export default NavButton;
