import Link from 'next/link';
import Card from '../containers/Card';
import Image from 'next/image';
import Button from '../ui/Button';

function GuideCard({
  title,
  button = {},
  label = '',
  description = '',
  image = {},
  color = 'bg-primary',
}) {
  return (
    <Card className={`${color} min-h-fit`}>
      <h2 className='text-4xl font-semibold tracking-widest text-background text-outline'>
        {title}
      </h2>

      <div className='flex-center flex-col gap-1'>
        <div className='relative max-w-full aspect-square mx-auto w-full'>
          <Image
            src={image.src}
            fill
            priority
            alt={image.alt}
            className='object-cover rounded-xl'
          />
        </div>

        <p className='w-9/10 mx-auto pt-4 font-medium text-justify'>
          {description}
        </p>

        <Link href={button.href} className='py-1'>
          <Button theme='guideCard' size='md'>
            {button.label}
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default GuideCard;
