function Button({
  children,
  theme = 'primary',
  size,
  disabled = false,
  textColor = '',
  className = '',
  ...props
}) {
  const styles = {
    primary: 'border-2 border-primary rounded-full px-2',
    nav: 'text-shadow text-2xl font-semibold uppercase italic tracking-widest',
    cta: 'bg-glow backdrop-blur-xs border-2 border-primary rounded-full px-2 py-4 text-4xl font-semibold tracking-widest text-background text-outline shadow-standard',
    guideCard:
      'w-full px-2 py-[1px] bg-primary/50 border-2 border-background/50 rounded-full font-medium tracking-widest text-background shadow-standard text-shadow',
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
      className={`${styles[theme]} ${className} ${sizes[size]} ${
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
