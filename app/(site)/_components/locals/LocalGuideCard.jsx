import Image from 'next/image';
import Card from '../containers/Card';
import Link from 'next/link';
import Button from '../ui/Button';
import ImageFrame from '../ui/ImageFrame';

function LocalGuideCard({ name, bio, favGuide, image, color }) {
  return (
    <Card className={`${color || ''} flex flex-col gap-2 shadow-standard-sm`}>
      <h3 className='text-3xl font-semibold tracking-widest'>{name}</h3>

      <div className='flex-center grow'>
        <div>
          <ImageFrame
            borderColor={image.borderColor || 'bg-glow border-glow'}
            className='shadow-standard w-1/3'
          >
            <Image
              src={image.src}
              fill
              priority
              sizes='33vw'
              alt={image.alt}
              className='object-cover rounded-xl'
            />
          </ImageFrame>
          {/* Socials */}
        </div>

        <div className='flex flex-col justify-between grow pt-4 pb-2 gap-2'>
          <p className='w-9/10 mx-auto font-medium text-justify'>{bio}</p>

          {/* <Link href={} className='w-full py-1'>
            <Button theme='guideCard' size='sm' className='mt-auto uppercase'>
              Label
            </Button>
          </Link> */}
        </div>
      </div>
    </Card>
  );
}

export default LocalGuideCard;
