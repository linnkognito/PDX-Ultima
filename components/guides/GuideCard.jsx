import Link from 'next/link';
import Card from '../containers/Card';
import Image from 'next/image';
import Button from '../ui/Button';
import ImageFrame from '../ui/ImageFrame';

function GuideCard({
  title,
  button = {},
  label = '',
  description = '',
  image = {},
  color = 'bg-primary',
}) {
  return (
    <Card
      className={`${color} flex flex-col h-[560px] max-h-[560px] shadow-standard-sm`}
    >
      <h3 className='text-3xl font-semibold tracking-widest text-background text-outline'>
        {title}
      </h3>

      <div className='flex-center flex-col grow'>
        <ImageFrame borderColor={image.borderColor}>
          <Image
            src={image.src}
            fill
            priority
            alt={image.alt}
            className='object-cover rounded-xl'
          />
        </ImageFrame>

        <div className='flex flex-col justify-between grow pt-4 pb-2 gap-2'>
          <p className='w-9/10 mx-auto font-medium text-justify'>
            {description}
          </p>

          <Link href={button.href} className='w-full py-1'>
            <Button theme='guideCard' size='sm' className='uppercase'>
              {button.label}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default GuideCard;
