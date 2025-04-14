import InputCheckbox from './InputCheckbox';

function InputChecklist({ id, checkboxes, className = '' }) {
  return (
    <div
      id={id}
      className={`px-3 py-1 bg-background border-2 border-primary rounded-xl ${className}`}
    >
      {checkboxes.map((cb) => (
        <InputCheckbox id={cb.id} label={cb.label} />
      ))}
    </div>
  );
}

export default InputChecklist;
