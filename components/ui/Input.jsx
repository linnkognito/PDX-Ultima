function Input({
  id,
  type = 'text',
  name = '',
  autoComplete = 'off',
  required = false,
  className = '',
}) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      aria-labelledby={`${id}-label`}
      required={required}
      autoComplete={autoComplete}
      className={`${className} appearance-none border-2 border-primary rounded-full text-heading placeholder:text-par/50 focus:outline-none focus:ring-2 focus:ring-glow px-4 py-1`}
    />
  );
}

export default Input;

/*
autoComplete="name"       // Full name
autoComplete="email"      // Email
autoComplete="tel"        // Phone
autoComplete="new-password" // Password setup (not auto-filled with existing one)
autoComplete="off"        // For non-personal fields like search bars
*/
