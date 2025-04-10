import Link from 'next/link';

function FooterSection({ title, links, color = 'bg-glow' }) {
  if (!links) return null;

  return (
    <div className='flex flex-col gap-3'>
      <h3 className={`uppercase px-4 rounded-xl shadow-standard-sm ${color}`}>
        {title}
      </h3>
      <ul className='w-full space-y-1 pl-2 font-medium tracking-wide'>
        {links.map((link) => (
          <li
            key={link.label}
            className='w-full py-[2px] pl-2 pb-1 bg-background/90 border-b border-l border-header anim-transform hover:translate-x-2 hover:bg-glow-light'
          >
            <Link href={link.href} className='block'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;
