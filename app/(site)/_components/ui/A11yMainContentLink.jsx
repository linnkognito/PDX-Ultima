import Link from 'next/link';

function A11yMainContentLink() {
  return (
    <>
      <Link
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md focus:text-sm focus:font-medium motion-safe:focus:transition-all motion-safe:focus:duration-300'
      >
        Skip to main content
      </Link>
      <Link
        href='#locals-heading'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md focus:text-sm focus:font-medium motion-safe:focus:transition-all motion-safe:focus:duration-300'
      >
        Skip to local guides
      </Link>
    </>
  );
}

export default A11yMainContentLink;
