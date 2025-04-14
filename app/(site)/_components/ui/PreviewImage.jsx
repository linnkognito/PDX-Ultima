import Image from 'next/image';

function PreviewImage({
  image,
  width = 84,
  height = 84,
  onClick = () => {},
  className = '-mx-2',
}) {
  return (
    <div className='group flex gap-6' onClick={onClick}>
      <Image
        src={URL.createObjectURL(image)}
        alt='Selected image preview'
        width={width}
        height={height}
        className={`object-cover rounded-xl border-2 border-primary group-hover:opacity-50 cursor-pointer ${className}`}
      />

      <div
        title='Remove image'
        className='flex gap-2 pt-4 font-medium cursor-pointer'
      >
        <p className='group-hover:opacity-40 group-hover:line-through'>
          {image.name}
        </p>
        <span aria-hidden='true' className='font-medium text-red-500'>
          &times;
        </span>
      </div>
    </div>
  );
}

export default PreviewImage;
