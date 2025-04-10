import Image from 'next/image';
import ImageFrame from '../ui/ImageFrame';

function AreasSection() {
  const areas = [
    {
      area: 'se',
      src: '/se.png',
      alt: 'Illustrated map of SE Portland',
      borderColor: 'bg-secondary border-secondary',
    },
    {
      area: 'ne',
      src: '/ne.png',
      alt: 'Illustrated map of NE Portland',
      borderColor: 'bg-primary border-primary',
    },
    {
      area: 'sw',
      src: '/sw.png',
      alt: 'Illustrated map of SW Portland',
      borderColor: 'bg-background border-background',
    },
    {
      area: 'nw',
      src: '/nw.png',
      alt: 'Illustrated map of NW Portland',
      borderColor: 'bg-glow border-glow',
    },
  ];

  return (
    <section aria-labelledby='areas-heading' className='p-section bg-hover'>
      <h2 id='areas-heading'>Explore by area</h2>

      <div className='grid grid-cols-4 gap-2'>
        {areas.map((area) => (
          <ImageFrame key={area.area} borderColor={area.borderColor}>
            <Image
              src={area.src}
              fill
              alt={area.alt}
              className='object-cover rounded-xl'
            />
          </ImageFrame>
        ))}
      </div>
    </section>
  );
}

export default AreasSection;
