import Link from 'next/link';

function GuideCard({ children, title, href, link }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      <Link href={href}>{link}</Link>
    </div>
  );
}

export default GuideCard;
