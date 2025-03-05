function ButtonIcon({
  children,
  size = 'md',
  bg = 'bg-violet-700 hover:bg-violet-600',
  className = '',
  title = '',
  disabled = false,
  onClick = () => {},
}) {
  const sizes = {
    sm: 'w-fit h-fit p-[1px]',
    md: 'w-8 h-8',
  };
  return (
    <button
      title={title}
      className={`${className} ${bg} ${
        sizes[size]
      } flex items-center justify-center  shadow-sm shadow-violet-400 will-change duration-300 ease-out transition-all font-sans tracking-wider rounded-md
      ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer active:bg-violet-400'
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
