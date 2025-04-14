'use client';

import { useRef, useState } from 'react';
import Button from './Button';
import PreviewImage from './PreviewImage';

function InputImage({ id = 'image', errors, ...props }) {
  const ref = useRef(null);
  const [preview, setPreview] = useState(null);

  function handleImageChange(e) {
    const image = e.target.files?.[0];
    console.log(image);

    if (image) {
      setPreview(image);
      image?.onChange?.(e); // notify react-hook-form
    }
  }

  return (
    <div>
      <input
        id={id}
        ref={ref}
        type='file'
        name={ref.name}
        accept='image/*'
        aria-invalid={!!errors.id}
        aria-describedby={`${id}-error`}
        className='sr-only'
        onBlur={ref.onBlur}
        onChange={handleImageChange}
        {...props}
      />

      <div className='flex items-center justify-between bg-background border-2 border-primary rounded-xl px-3 py-1'>
        {preview ? (
          <PreviewImage image={preview} onClick={() => setPreview(null)} />
        ) : (
          'No file selected'
        )}

        <Button
          theme='form'
          size='xs'
          className='max-w-fit'
          onClick={() => ref.current?.click()}
          aria-label={`Select file for ${id}`}
        >
          Choose File
        </Button>
      </div>
    </div>
  );
}

export default InputImage;
