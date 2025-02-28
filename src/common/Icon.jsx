export default function Icon({
  name = '',
  al = '',
  onClick = () => {},
  className = '',
  ...props
}) {
  return (
    <span
      className={`${className} text-2xl material-symbols-outlined transition-transform duration-200 ease-in group-hover:scale-110`}
      aria-label={al || `${name} icon`}
      onClick={onClick}
      {...props}
    >
      {name}
    </span>
  );
}
