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
      className={`${className} appearance-none border-2 border-primary rounded-full text-heading placeholder:text-par/60 focus:outline-none focus:ring-2 focus:ring-background px-3 py-1 bg-background`}
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
