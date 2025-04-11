'use client';

import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Input from './Input';
import Label from './Label';

function Searchbar({ iconSize = 'w-6', className = '' }) {
  const inputRef = useRef();

  return (
    <div role='search' aria-label='Site search' className='flex-center gap-2'>
      <MagnifyingGlassIcon
        className={`${iconSize} text-par cursor-pointer`}
        onClick={() => inputRef.current?.focus()}
      />

      <Label htmlFor='search' show={false} ariaLabel='Search the site' />

      <Input
        ref={inputRef}
        id='search'
        type='search'
        name='q'
        placeholder='Search for anything'
        className={className}
      />
    </div>
  );
}

export default Searchbar;
