function FormError({ children, id }) {
  return (
    <span id={id} className='text-red-500 shadow-error py-1 pl-1 pr-2 h-fit'>
      ❗{children}
    </span>
  );
}

export default FormError;
