import Link from 'next/link';

function GuideCard({ children, title, href, label = '', className = '' }) {
  return (
    <div className={`${className}`}>
      <h2>{title}</h2>
      {children}
      <Link href={href}>{label}</Link>
    </div>
  );
}

export default GuideCard;
