function Form({ children, ...props }) {
  return (
    <form className='flex flex-col gap-4' {...props}>
      {children}
    </form>
  );
}

export default Form;
