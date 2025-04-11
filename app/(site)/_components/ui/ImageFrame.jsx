function ImageFrame({
  children,
  width = 'max-w-full',
  borderWidth = 'border-4 ',
  borderColor,
  className = '',
}) {
  return (
    <div
      className={`relative aspect-square mx-auto w-full rounded-xl ${width} ${borderWidth} ${borderColor} ${className}`}
    >
      {children}
    </div>
  );
}

export default ImageFrame;
