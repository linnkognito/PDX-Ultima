import Image from 'next/image';

function ThemeCard({
  image = {},
  color = 'bg-glow',
  label = '',
  labelColor = 'bg-background',
}) {
  return (
    <div className='flex-center flex-col gap-2 max-w-[180px] aspect-square bg-background/90 rounded-xl m-1 shadow-standard-sm'>
      <button
        className={`relative flex-center w-30 h-30 rounded-full p-4 text-4xl text-shadow shadow-around-sm cursor-pointer border-2 border-background ${color}`}
      >
        <Image
          src={image.src}
          fill
          sizes='50vw'
          alt={image.alt}
          className='object-cover object-center rounded-full contrast-125'
        />
      </button>
      <p
        className={`font-medium px-2 rounded-xl shadow-standard-sm ${labelColor}`}
      >
        {label}
      </p>
    </div>
  );
}

export default ThemeCard;
