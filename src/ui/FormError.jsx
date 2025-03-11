function FormError({ children }) {
  return (
    <span className='text-red-500 shadow-sm shadow-red-500 bg-red-600/20 rounded-md py-1 pl-1 pr-[10px] h-fit'>
      ❗{children}
    </span>
  );
}

export default FormError;
