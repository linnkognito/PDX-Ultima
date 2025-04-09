import Link from 'next/link';

function DropdownMenu({ id, options }) {
  if (!options) return null;

  return (
    <div className='absolute border border-primary backdrop-blur-sm rounded-xl w-40'>
      <ul id={`${id}-dropdown`} role='menu' aria-labelledby={`${id}-button`}>
        {options?.map((option) => (
          <li key={option.href} role='none'>
            <Link href={option.href} role='menuitem' className=''>
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
