import Image from 'next/image';
import ImageFrame from '../ui/ImageFrame';
import SectionHeading from '../ui/SectionHeading';

function AreasSection() {
  const areas = [
    {
      area: 'se',
      src: '/se.png',
      alt: 'Illustrated map of SE Portland',
      // color: 'text-secondary',
      color: 'text-background',
      borderColor: 'bg-secondary border-secondary',
    },
    {
      area: 'ne',
      src: '/ne.png',
      alt: 'Illustrated map of NE Portland',
      // color: 'text-primary',
      color: 'text-glow',

      borderColor: 'bg-primary border-primary',
    },
    {
      area: 'sw',
      src: '/sw.png',
      alt: 'Illustrated map of SW Portland',
      color: 'text-secondary',
      // color: 'text-background',
      borderColor: 'bg-background border-background',
    },
    {
      area: 'nw',
      src: '/nw.png',
      alt: 'Illustrated map of NW Portland',
      // color: 'text-glow',
      color: 'text-primary',
      borderColor: 'bg-glow border-glow',
    },
  ];

  return (
    <section
      aria-labelledby='areas-heading'
      className='w-full p-section bg-hover'
    >
      <SectionHeading
        id='areas-heading'
        color='text-lavender'
        className='w-fit mx-auto px-3'
      >
        🗺️ Explore by area
      </SectionHeading>

      <div className='grid grid-cols-4 gap-2 cursor-pointer'>
        {areas.map((area) => (
          <ImageFrame
            key={area.area}
            borderColor={area.borderColor}
            className='group'
          >
            <Image
              src={area.src}
              fill
              alt={area.alt}
              className='object-cover rounded-xl'
            />

            <SectionHeading
              tag='h4'
              color={area.color}
              className='absolute text-8xl inset-0 z-10 flex-center font-semibold'
            >
              {area.area.toUpperCase()}
            </SectionHeading>
          </ImageFrame>
        ))}
      </div>
    </section>
  );
}

export default AreasSection;
