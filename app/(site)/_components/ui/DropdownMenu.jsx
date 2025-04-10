import Link from 'next/link';

function DropdownMenu({ id, options }) {
  if (!options) return null;

  return (
    <div className='absolute border border-secondary-dark bg-primary/70 rounded-xl top-13 w-40 p-div backdrop-blur-sm z-100 shadow-standard'>
      <ul
        id={`${id}-dropdown`}
        role='menu'
        aria-labelledby={`${id}-button`}
        className='flex flex-col gap-4 '
      >
        {options?.map((option) => (
          <li key={option.label} role='none'>
            <Link
              href={option.href}
              role='menuitem'
              className='text-lg font-medium tracking-wide'
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
