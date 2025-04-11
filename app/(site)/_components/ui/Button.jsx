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
    nav: 'text-shadow text-3xl font-semibold uppercase  tracking-widest',
    cta: 'bg-glow border-2 border-background rounded-full px-2 py-4 text-4xl font-semibold tracking-widest text-heading',
    guideCard:
      'w-full px-2 py-1 bg-primary border-2 border-background/50 rounded-full font-medium tracking-widest text-heading shadow-standard',
    theme:
      'w-1/2 px-2 py-1 bg-primary border-2 border-background/50 rounded-full font-medium tracking-widest text-heading shadow-standard',
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
