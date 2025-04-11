import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';
import ThemeCards from '../guides/ThemeCards';

function ThemeSection() {
  return (
    <section
      aria-labelledby='theme-heading'
      className='h-fit pt-16 pb-20 bg-background z-10'
    >
      <div className='grid grid-cols-2 min-h-fit'>
        {/* Left column */}
        <div className='pt-25 pb-20'>
          <SectionHeading
            id='theme-heading'
            margin='mb-0'
            color='text-heading'
            className='bg-glow-light rounded-t-xl ml-10 w-fit px-10 pt-3 pb-2'
          >
            Pick your poison
          </SectionHeading>

          {/* Theme cards */}
          <ThemeCards />
        </div>

        {/* Right column */}
        <div className='h-full relative bg-glow shadow-around rounded-xl'>
          <Image
            src='/weird.png'
            fill
            sizes='50vw'
            alt='Illustration of the Portland skyline during sunset'
            className='object-cover object-center contrast-125 rounded-xl'
          />
        </div>
      </div>
    </section>
  );
}

export default ThemeSection;
