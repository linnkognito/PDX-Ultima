function Label({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className='bg-transparent backdrop-blur-xs tracking-wide rounded-md w-fit -mt-3 ml-2 px-2'
    >
      {children}
    </label>
  );
}

export default Label;
