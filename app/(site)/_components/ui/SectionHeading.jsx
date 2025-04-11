function SectionHeading({
  children,
  tag: Tag = 'h3',
  color = 'text-glow',
  margin = 'mb-6',
  textShadow = false,
  visuallyHidden = false,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`${className} ${color} ${margin} ${
        visuallyHidden ? 'sr-only' : ''
      } ${textShadow ? 'text-shadow' : ''} text-5xl tracking-wide`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default SectionHeading;
