import Link from 'next/link';
import Button from '../ui/Button';

function Hero() {
  return (
    <article
      aria-labelledby='home-heading'
      className='flex flex-col gap-4 w-fit max-w-[1500px] min-h-[calc(100vh-283px)] max-h-[calc(100vh-242px)] ml-30 mt-20'
    >
      <div className='p-div'>
        <h1 id='home-heading' className='w-fit text-outline-xl'>
          <span className='text-secondary tracking-wider'>Explore</span>{' '}
          <span className='tracking-wide'>Portland</span> <br />
          <span className='text-background/80'>like a</span>{' '}
          <span className='text-glow uppercase tracking-wider'>Local</span>
        </h1>

        <h2 className='w-full pl-3 text-[40px] text-outline-lg text-shadow tracking-widest text-background/90'>
          You didn’t come all this way for Olive Garden.
        </h2>
      </div>

      <Link href='/guides' className='block mx-auto w-1/2 mt-10'>
        <Button theme='cta' className='w-full'>
          Start Exploring
        </Button>
      </Link>
    </article>
  );
}

export default Hero;
