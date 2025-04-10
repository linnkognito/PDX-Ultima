function ImageFrame({ children, borderColor, className = '' }) {
  return (
    <div
      className={`relative max-w-full aspect-square mx-auto w-full border-4 rounded-xl ${borderColor} ${className}`}
    >
      {children}
    </div>
  );
}

export default ImageFrame;
