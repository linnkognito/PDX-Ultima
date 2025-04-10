import Link from 'next/link';

function FooterSection({ title, links }) {
  if (!links) return null;

  return (
    <div>
      <h3 className='uppercase'>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className='hover:underline'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;
