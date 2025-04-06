function Button({
  children,
  theme = 'primary',
  size,
  disabled = false,
  ...props
}) {
  const styles = {
    primary: 'border-2 border-primary rounded-full px-2',
    nav: 'border-2 border-primary backdrop-blur-xs rounded-full px-4 py-1',
  };

  const sizes = {
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <button
      className={`${styles[theme]} ${sizes[size]} ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } min-w-fit`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
