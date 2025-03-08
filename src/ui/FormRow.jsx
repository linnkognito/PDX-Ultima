function FormRow({ children, label = '', htmlFor = '' }) {
  return (
    <div className='w-full border border-violet-500 rounded-md bg-violet-800/20 relative'>
      <div className='flex flex-col gap-2 px-4 pb-3'>
        <label
          htmlFor={htmlFor}
          className='bg-transparent backdrop-blur-xs tracking-wide rounded-md w-fit -mt-3 ml-2 px-2'
        >
          {label}
        </label>
        <span className='-mt-1 w-full'>{children}</span>
      </div>
    </div>
  );
}

export default FormRow;
