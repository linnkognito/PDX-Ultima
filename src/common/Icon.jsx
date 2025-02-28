export default function Icon({
  name = '',
  al = '',
  onClick = () => {},
  className = '',
  ...props
}) {
  return (
    <span
      className={`${className} material-symbols-outlined text-2xl transition-transform duration-200 ease-in group-hover:scale-110`}
      aria-label={al || `${name} icon`}
      onClick={onClick}
      {...props}
    >
      {name}
    </span>
  );
}
