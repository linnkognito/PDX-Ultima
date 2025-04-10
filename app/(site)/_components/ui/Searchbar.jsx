'use client';

import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Input from './Input';
import Label from './Label';

function Searchbar() {
  const inputRef = useRef();

  return (
    <div role='search' aria-label='Site search' className='flex-center gap-2'>
      <MagnifyingGlassIcon
        className='h-6 w-6 text-par cursor-pointer'
        onClick={() => inputRef.current?.focus()}
      />

      <Label htmlFor='search' show={false} ariaLabel='Search the site' />

      <Input
        ref={inputRef}
        id='search'
        type='search'
        name='q'
        placeholder='Search for anything'
      />
    </div>
  );
}

export default Searchbar;
