function ImageFrame({ children, borderColor }) {
  return (
    <div
      className={`relative max-w-full aspect-square mx-auto w-full border-4 ${borderColor} rounded-xl `}
    >
      {children}
    </div>
  );
}

export default ImageFrame;
