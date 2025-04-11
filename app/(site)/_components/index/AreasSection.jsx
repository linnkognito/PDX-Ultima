import SectionHeading from '../ui/SectionHeading';
import AreaCard from '../guides/AreaCard';

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
      className='w-full pt-15 pb-25 px-20 bg-hover shadow-around z-10'
    >
      <SectionHeading
        id='areas-heading'
        color='text-lavender'
        className='w-fit mx-auto pb-6'
      >
        🗺️ Explore by area
      </SectionHeading>

      <div className='grid grid-cols-4 gap-4 cursor-pointer'>
        {areas.map((area) => (
          <AreaCard key={area.area} area={area} />
        ))}
      </div>
    </section>
  );
}

export default AreasSection;
