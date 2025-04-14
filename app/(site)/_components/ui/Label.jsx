/* 
htmlFor - label–input association ✔️
aria-label - when show is false ✔️
sr-only - keeps invisible labels accessible to screen readers ✔️
required is visually indicated and hidden from screen readers ✔️
*/

function Label({
  children,
  htmlFor,
  ariaLabel,
  required = false,
  show = true,
  className = '',
  ...props
}) {
  return show ? (
    <label
      id={`${htmlFor}-label`}
      htmlFor={htmlFor}
      className={`font-medium tracking-wider uppercase ${className}`}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden='true' className='text-red-600'>
          {' '}
          *
        </span>
      )}
    </label>
  ) : (
    <label
      id={`${htmlFor}-label`}
      htmlFor={htmlFor}
      className={`${className} sr-only`}
      aria-label={ariaLabel}
      {...props}
    />
  );
}

export default Label;
