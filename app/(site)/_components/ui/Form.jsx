function Form({ children, className = '', ...props }) {
  return (
    <form
      noValidate
      area-lebelledby='form-heading'
      className={`space-y-4 w-full max-w-1/2 ${className}`}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
