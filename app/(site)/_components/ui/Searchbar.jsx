'use client';

import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Input from './Input';
import Label from './Label';

function Searchbar({ showIcon = true, iconSize = 'w-6', className = '' }) {
  const inputRef = useRef();

  return (
    <div
      role='search'
      aria-label='Site search'
      className='flex-center gap-3 w-1/4 pr-4'
    >
      {showIcon && (
        <MagnifyingGlassIcon
          className={`${iconSize} text-heading rounded-full`}
          onClick={() => inputRef.current?.focus()}
        />
      )}

      <Label htmlFor='search' show={false} ariaLabel='Search the site' />

      <Input
        ref={inputRef}
        id='search'
        type='search'
        name='q'
        placeholder='Search for anything'
        className={`w-full shadow-standard ${className}`}
      />
    </div>
  );
}

export default Searchbar;
