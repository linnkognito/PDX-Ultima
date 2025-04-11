import Image from 'next/image';
import Card from '../containers/Card';
import ImageFrame from '../ui/ImageFrame';
import IconSocial from '../ui/IconSocial';
import Button from '../ui/Button';

function LocalGuideCard({ name, bio, emoji, favGuide, image, color }) {
  const socials = [
    { href: 'https//www.instagram.com', network: 'instagram' },
    { href: 'https//www.reddit.com', network: 'reddit' },
    { href: 'https//www.facebook.com', network: 'facebook' },
  ];

  return (
    <Card
      className={`${
        color || 'bg-hover'
      } flex flex-col gap-2 shadow-standard-sm`}
    >
      <h3 className='text-3xl font-semibold tracking-widest text-heading'>
        {emoji || '🍒'}
        {name}
      </h3>

      <div className='flex-col flex-center grow'>
        <div className='flex w-full bg-glow rounded-xl shadow-standard'>
          <ImageFrame
            borderWidth='border-y-10 border-l-10 border-r-none'
            borderColor={image.borderColor || 'bg-glow border-glow'}
            className='grow'
          >
            <Image
              src={image.src}
              fill
              priority
              sizes='33vw'
              alt={image.alt}
              className='object-cover rounded-xl shadow-standard-sm'
            />
          </ImageFrame>

          {/* Socials */}
          <div className='flex flex-col justify-center w-fit mx-auto gap-4 pt-6 px-3 h-fit'>
            {socials.map((social) => (
              <IconSocial
                key={social.network}
                href={social.href}
                network={social.network}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-between grow pt-4 pb-2 gap-2'>
          <p className='w-9/10 mx-auto font-medium text-justify'>{bio}</p>

          <Button theme='card' size='sm'>
            {name?.split(' ')[0] || 'Local'}'s favorites
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default LocalGuideCard;
