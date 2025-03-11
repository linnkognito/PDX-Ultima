import Button from './Button';

function FormActionButtons({ cancel, submit }) {
  return (
    <div className='flex gap-4 pt-2 pb-4 pr-8 justify-end'>
      <Button theme='cancel' type='button' onClick={cancel?.onClick}>
        Cancel
      </Button>
      <Button type='submit' disabled={submit?.disabled}>
        Submit
      </Button>
    </div>
  );
}

export default FormActionButtons;
