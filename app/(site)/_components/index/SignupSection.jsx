import SectionHeading from '../ui/SectionHeading';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';

function SignupSection() {
  return (
    <section
      aria-labelledby='signup-heading'
      className='bg-background px-25 pb-10 h-fit'
    >
      <div className='w-full max-w-[1140px] h-full mx-auto px-10 bg-primary/30 pt-4 pb-10 shadow-around rounded-xl'>
        <div className='flex gap-4 w-full min-h-fit h-full'>
          {/* Image */}
          <div
            aria-label='llustration of an open envelope with a letter sticking out and a rose next to it.'
            className='relative w-1/3 aspect-[19/20]'
          >
            <Image
              src='/signup.png'
              fill
              alt=''
              className='object-contain -rotate-35'
            />
          </div>

          {/* Text content + CTA */}
          <div className='flex flex-col gap-10 w-2/3 pt-15 px-10'>
            <SectionHeading id='signup-heading' margin='m-0 ' className='w-fit'>
              {/* Build your bucket list */}
              Create an account to start saving your favorite spots!
            </SectionHeading>

            <div className='pl-6'>
              <Link href='/auth/signup'>
                <Button theme='card' size='lg' className='px-20 max-w-fit'>
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSection;
