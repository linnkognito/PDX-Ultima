function FormRow({ children, error = null }) {
  return (
    <div className='flex flex-col gap-1 w-full'>
      {children}

      {/* Error message */}
      {error && <FormError id={`${htmlFor}-error`}>{error}</FormError>}
    </div>
  );
}

export default FormRow;
