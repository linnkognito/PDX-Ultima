import Icon from '../../common/Icon';
import ButtonIcon from '../../ui/ButtonIcon';
import CreateGuideForm from './CreateGuideForm';

function EditGuideForm({ guide, setShowEditForm }) {
  return (
    <div className='w-full mb-2 bg-violet-950/30 rounded-md px-4 my-5 border border-violet-500 shadow-md shadow-violet-500'>
      {/* Header */}
      <div className='relative flex items-center min-w-full divider-b'>
        {/* Title */}
        <h2 className='pt-3 mb-6 w-full'>
          <Icon name='edit' className='text-violet-400' />{' '}
          {`Editing: ${guide?.name}`}
        </h2>

        {/* Close button */}
        <ButtonIcon
          title='Close form'
          size='sm'
          bg='bg-violet-600 hover:bg-violet-400'
          className='absolute right-2 top-4'
          onClick={() => setShowEditForm(false)}
        >
          <Icon name='close' />
        </ButtonIcon>
      </div>

      {/* Form */}
      <CreateGuideForm guideToEdit={guide} setShowForm={setShowEditForm} />
    </div>
  );
}

export default EditGuideForm;
