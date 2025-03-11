function Checkbox({ id, boxLabel }) {
  return (
    <div className='flex items-center gap-2 pt-1 pl-1'>
      <input
        id={id}
        type='checkbox'
        className='w-5 h-5 accent-violet-600 rounded-md border-gray-300 focus:ring focus:ring-violet-300'
      />
      <span className='text-sm font-medium text-gray-300'>{boxLabel}</span>
    </div>
  );
}

export default Checkbox;
