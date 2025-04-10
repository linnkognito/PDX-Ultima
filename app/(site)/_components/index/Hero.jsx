import BackgroundImage from '../ui/BackgroundImage';
import Header from '../ui/Header';
import Link from 'next/link';
import Button from '../ui/Button';

function Hero() {
  return (
    <section className='relative w-screen h-screen min-h-fit overflow-hidden bg-par shadow-around'>
      <BackgroundImage opacity='opacity-80' />

      <div className='relative max-w-site mx-auto z-10'>
        <Header />

        <article
          aria-labelledby='home-heading'
          className='flex flex-col items-center gap-4 w-fit h-full pl-30 pt-20'
        >
          <div className='w-full p-div space-y-4'>
            <h1 id='home-heading' className='w-fit text-shadow-small'>
              <span className='text-secondary tracking-wider'>Explore</span>{' '}
              <span className='tracking-wide'>Portland</span> <br />
              <span className='text-background'>like a</span>{' '}
              <span className='text-glow uppercase tracking-wider'>Local</span>
            </h1>

            <h2 className='w-full pl-3 text-[40px] text-outline-lg text-shadow-small tracking-widest text-background'>
              You didn’t come all this way for Olive Garden.
            </h2>
          </div>

          <Link href='/guides' className='block mx-auto w-1/2 mt-10'>
            <Button theme='cta' className='w-full mb-10 shadow-standard'>
              Start Exploring
            </Button>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Hero;
