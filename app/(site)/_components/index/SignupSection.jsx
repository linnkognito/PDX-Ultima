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
      <div className='w-full max-w-site h-full mx-auto px-10 bg-primary/30 pt-4 pb-10 shadow-around rounded-xl'>
        <SectionHeading id='signup-heading' className='w-fit ml-4 px-4 py-3'>
          Build your bucket list
        </SectionHeading>

        <div className='flex items-center gap-4 w-full h-full'>
          {/* Image */}
          <div className='relative aspect-square w-1/3 '>
            <Image
              src='/signup.png'
              fill
              className='object-fill object-center -rotate-35'
            />
          </div>

          {/* Text content + CTA */}
          <div className='w-2/3 min-h-full bg-background notepad-bg rounded-xl p-div shadow-standard'>
            <p className='text-2xl font-medium'>
              Create an account to start saving your favorite spots
            </p>
            <Link href='/auth/signup'>
              <Button theme='card' size='lg' className='max-w-1/2'>
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSection;
