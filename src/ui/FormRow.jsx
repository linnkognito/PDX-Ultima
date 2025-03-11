import Label from './Label';

function FormRow({ children, label = '', htmlFor = '' }) {
  return (
    <div className='w-full border border-violet-500 rounded-md bg-violet-800/20 relative'>
      <div className='flex flex-col gap-2 px-4 pb-3'>
        {label && <Label htmlFor={htmlFor}>{label}</Label>}

        <span className='-mt-1 w-full flex gap-3 justify-between'>
          {children}
        </span>
      </div>
    </div>
  );
}

export default FormRow;
