import Image from 'next/image';
import ImageFrame from '../ui/ImageFrame';
import SectionHeading from '../ui/SectionHeading';
import Link from 'next/link';

function AreaCard({ area }) {
  return (
    <ImageFrame
      borderColor={area.borderColor}
      className='group shadow-standard-sm'
    >
      <Image
        src={area.src}
        fill
        sizes='25vw'
        alt={area.alt}
        className='object-cover rounded-xl'
      />

      <SectionHeading
        tag='h4'
        color={area.color}
        className='absolute text-8xl inset-0 z-10 flex-center font-semibold text-shadow'
      >
        {area.area.toUpperCase()}
      </SectionHeading>
    </ImageFrame>
  );
}

export default AreaCard;
