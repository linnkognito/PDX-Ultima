import Image from 'next/image';
import Link from 'next/link';

function Logo({ size, background = false, className = '' }) {
  const dimensions = {
    xs: { h: '100', w: '100' },
    sm: { h: '150', w: '150' },
    md: { h: '200', w: '200' },
    lg: { h: '250', w: '250' },
    xl: { h: '300', w: '300' },
  };

  const { h, w } = dimensions[size] || dimensions['md'];

  return (
    <Link
      href='/'
      aria-label='Go to PDX Ultima homepage'
      title='PDX Ultima'
      className={background ? 'bg-semi rounded-full p-4 shadow-standard' : ''}
    >
      <Image
        src='/logo.png'
        height={h}
        width={w}
        alt='PDX Ultima logo'
        priority
        className={className}
      />
    </Link>
  );
}

export default Logo;
