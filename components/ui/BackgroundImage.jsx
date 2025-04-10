import Image from 'next/image';

function BackgroundImage({ position = 'object-top' }) {
  return (
    <Image
      src='/bg.png'
      fill
      priority
      alt='Stylized version of the Portland, Oregon skyline'
      className={`${position} object-cover z-0`}
    />
  );
}

export default BackgroundImage;
