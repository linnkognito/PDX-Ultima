import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    id,
    type = 'text',
    name = '',
    placeholder = '',
    autoComplete = 'off',
    required = false,
    className = '',
    ...props
  },
  ref
) {
  return (
    <input
      ref={ref}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      aria-labelledby={`${id}-label`}
      required={required}
      autoComplete={autoComplete}
      className={`${className} appearance-none border-2 border-primary rounded-full text-heading placeholder:text-par/50 focus:outline-none focus:ring-2 focus:ring-glow px-4 py-1 bg-background/90`}
      {...props}
    />
  );
});

export default Input;

/*
autoComplete="name"       // Full name
autoComplete="email"      // Email
autoComplete="tel"        // Phone
autoComplete="new-password" // Password setup (not auto-filled with existing one)
autoComplete="off"        // For non-personal fields like search bars
*/
