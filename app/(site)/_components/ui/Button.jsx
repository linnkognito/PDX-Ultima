function Button({
  children,
  type = 'button',
  theme = 'primary',
  size,
  color,
  disabled = false,
  textColor = '',
  className = '',
  ...props
}) {
  const styles = {
    primary: 'border-2 border-primary rounded-full px-2',
    nav: 'text-shadow text-3xl font-semibold uppercase  tracking-widest',
    cta: 'bg-glow border-2 border-background rounded-full px-2 py-4 text-4xl font-semibold tracking-widest text-heading',
    card: 'w-full px-2 py-1 border-2 border-background/50 rounded-full font-medium tracking-widest text-heading shadow-standard mt-auto uppercase',
    form: 'px-3 bg-primary border-2 border-background rounded-full font-medium tracking-wider text-heading shadow-standard-sm hover:bg-secondary anim-color',
    theme:
      'w-1/2 px-2 py-1 border-2 border-background/50 rounded-full font-medium tracking-widest text-heading shadow-standard',
  };

  const sizes = {
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const colors = {
    primary: 'bg-primary',
    card: 'bg-primary',
    glowLight: 'bg-glow-light',
    cta: 'bg-primary',
    form: 'bg-primary',
  };

  return (
    <button
      type={type}
      className={`${styles[theme]} ${color || colors[theme]} ${className} ${
        sizes[size]
      } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} min-w-fit`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
