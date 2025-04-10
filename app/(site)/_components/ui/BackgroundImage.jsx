import Image from 'next/image';

function BackgroundImage({ position = 'object-top', opacity = 'opacity-100' }) {
  return (
    <Image
      src='/bg.png'
      fill
      priority
      sizes='100vw'
      alt='Stylized version of the Portland, Oregon skyline'
      className={`${position} ${opacity} object-cover absolute z-0`}
    />
  );
}

export default BackgroundImage;
