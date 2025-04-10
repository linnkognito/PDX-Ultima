function SectionHeading({
  children,
  tag: Tag = 'h3',
  color = 'text-glow',
  textShadow = false,
  visuallyHidden = false,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`${className} ${color} ${visuallyHidden ? 'sr-only' : ''} ${
        textShadow ? 'text-shadow' : ''
      } mb-6 text-5xl tracking-wide`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default SectionHeading;
