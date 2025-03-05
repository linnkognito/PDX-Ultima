function ButtonIcon({
  children,
  size = 'md',
  className = '',
  title = '',
  onClick = () => {},
}) {
  const sizes = {
    sm: 'w-fit h-fit p-[1px]',
    md: 'w-8 h-8',
  };
  return (
    <button
      title={title}
      className={`${className} ${sizes[size]} flex items-center justify-center cursor-pointer bg-violet-700 hover:bg-violet-600 active:bg-violet-400 shadow-sm shadow-violet-400 will-change duration-300 ease-out transition-all font-sans tracking-wider rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
