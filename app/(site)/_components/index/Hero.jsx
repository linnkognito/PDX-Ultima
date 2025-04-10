import BackgroundImage from '../ui/BackgroundImage';
import Header from '../ui/Header';
import Link from 'next/link';
import Button from '../ui/Button';

function Hero() {
  return (
    <section className='relative w-screen h-screen overflow-hidden'>
      <BackgroundImage opacity='opacity-50' />

      <div className='relative z-10'>
        <Header />

        <article
          aria-labelledby='home-heading'
          className='flex flex-col items-center gap-4 w-fit h-full pl-30 pt-20'
        >
          <div className='w-full p-div'>
            <h1 id='home-heading' className='w-fit text-shadow'>
              <span className='text-secondary tracking-wider'>Explore</span>{' '}
              <span className='tracking-wide'>Portland</span> <br />
              <span className='text-background'>like a</span>{' '}
              <span className='text-glow uppercase tracking-wider'>Local</span>
            </h1>

            <h2 className='w-full pl-3 text-[40px] text-outline-lg text-shadow tracking-widest text-background'>
              You didn’t come all this way for Olive Garden.
            </h2>
          </div>

          <Link href='/guides' className='block mx-auto w-1/2 mt-10'>
            <Button theme='cta' className='w-full text-shadow'>
              Start Exploring
            </Button>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Hero;
