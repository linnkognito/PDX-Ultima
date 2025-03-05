function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className='max-w-[317px] bg-violet-400 rounded-md py-1 px-1 font-semibold'
    >
      {options.map((op) => (
        <option
          key={op.value}
          value={op.value}
          className='bg-violet-300 text-violet-950'
        >
          {op.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
