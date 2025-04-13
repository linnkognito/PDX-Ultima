import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

function DropdownMenu({ id, options }) {
  if (!options) return null;

  return (
    <div className='absolute backdrop-blur-sm rounded-t-none rounded-xl top-[51px] w-60 border-[1.5px] border-t-0 border-background/60 z-100'>
      <ul
        id={`${id}-dropdown`}
        role='menu'
        aria-labelledby={`${id}-button`}
        className='flex flex-col'
      >
        {options?.map((option) => (
          <li
            key={option.label}
            role='none'
            className='w-full py-2 last:pb-[5px] pl-3 pr-2 pb-1 hover:bg-primary/60 last:rounded-b-xl border-b border-secondary last:border-none cursor-pointer'
          >
            <Link
              href={option.href}
              role='menuitem'
              className='flex items-center gap-2 text-lg tracking-widest text-background text-shadow uppercase hover:translate-x-2 anim-transform'
            >
              <span className='text-xs'>&#8250;</span> {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
