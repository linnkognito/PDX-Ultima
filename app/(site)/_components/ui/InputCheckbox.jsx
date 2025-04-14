import Label from './Label';

function InputCheckbox({ id, label, ...props }) {
  return (
    <div className='flex items-center gap-1'>
      <input
        id={id}
        name={id}
        type='checkbox'
        aria-labelledby={`${id}-label`}
        className='flex-center appearance-none w-5 h-5 text-background border-2 border-primary rounded-md checked:bg-primary checked:border-primary transition-all duration-200 focus:outline-none focus:shadow-regular focus:ring-2 focus:ring-primary/60 cursor-pointer
        relative checked:before:content-["✔️"] checked:before:absolute checked:before:text-background checked:before:text-xs '
        {...props}
      />

      <Label htmlFor={id} className='font-medium text-heading'>
        {label}
      </Label>
    </div>
  );
}

export default InputCheckbox;
