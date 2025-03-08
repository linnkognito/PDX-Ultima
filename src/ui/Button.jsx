function Button({
  children,
  theme = 'primary',
  className = '',
  title = '',
  disabled = false,
  onClick = () => {},
  ...props
}) {
  const colorTheme = {
    primary: 'bg-violet-700 hover:bg-violet-400',
    cancel: 'bg-violet-300/50 hover:bg-violet-300',
    warning: '',
  };

  return (
    <button
      title={title}
      className={`${className}  ${
        colorTheme[theme]
      } flex items-center justify-center w-fit px-2 py-[2.5px] shadow-sm shadow-violet-400 will-change duration-300 ease-out transition-all font-sans tracking-wider rounded-md
      ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer active:bg-violet-400'
      }
      `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
