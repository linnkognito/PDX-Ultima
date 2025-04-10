import Link from 'next/link';
import Card from '../containers/Card';
import Image from 'next/image';
import Button from '../ui/Button';
import ImageFrame from '../ui/ImageFrame';

function GuideCard({
  title,
  button = {},
  description = '',
  image = {},
  color = 'bg-primary',
}) {
  return (
    <Card className={`${color} flex flex-col gap-2 shadow-standard-sm`}>
      <h3 className='text-3xl font-semibold tracking-widest text-background text-shadow'>
        {title}
      </h3>

      <div className='flex-center flex-col grow'>
        <ImageFrame borderColor={image.borderColor} className='shadow-standard'>
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
            <Button theme='guideCard' size='sm' className='mt-auto uppercase'>
              {button.label}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default GuideCard;
