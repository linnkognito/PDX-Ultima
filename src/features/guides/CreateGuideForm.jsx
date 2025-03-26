import { useForm } from 'react-hook-form';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import FormActionButtons from '../../ui/FormActionButtons';
import { useEditGuide } from './useEditGuide';
import { useCreateGuide } from './useCreateGuide';
// import Icon from '../../common/Icon';
// import SimplePlaceList from '../../common/SimpleList';
// import Searchbar from '../../ui/Searchbar';

function CreateGuideForm({ guideToEdit = {}, setShowForm }) {
  const { id, ...editValues } = guideToEdit;
  const { isEditingGuide, editGuide } = useEditGuide();
  const { isCreating, createGuide } = useCreateGuide();

  const isEditing = Boolean(id);
  const isEditingOrCreating = isCreating || isEditingGuide;

  // const testPlaces = [
  //   { id: 1, name: 'Test place 1' },
  //   { id: 2, name: 'Test place 2' },
  //   { id: 3, name: 'Test place 3' },
  //   { id: 4, name: 'Test place 4' },
  //   { id: 5, name: 'Test place 5' },
  //   { id: 6, name: 'Test place 6' },
  // ];

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditing ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    isEditing
      ? editGuide(
          { newGuide: { ...data, image }, id },
          { onSuccess: () => reset() }
        )
      : createGuide({ ...data, image }, { onSuccess: () => reset() });

    setShowForm(false);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow htmlFor='name' label='Guide name' error={errors?.name?.message}>
        <Input
          id='name'
          disabled={isEditingOrCreating}
          {...register('name', {
            required: `Enter a Guide name`,
          })}
          placeholder='Best foodcarts in Portland'
        />
      </FormRow>

      <FormRow
        htmlFor='description'
        label='Description'
        error={errors?.description?.message}
      >
        <TextArea
          id='description'
          disabled={isEditingOrCreating}
          {...register('description', {
            required: `Enter a description`,
          })}
          placeholder='Short description of guide'
        />
      </FormRow>

      <FormRow htmlFor='area' label='Area' error={errors?.area?.message}>
        <Input
          id='area'
          disabled={isEditingOrCreating}
          {...register('area', {
            required: `Enter one or multiple areas (separated by comma)`,
          })}
          placeholder='SE, NE, SW, NW'
        />
      </FormRow>

      <FormRow htmlFor='neighborhood' label='Neighborhood'>
        <Input
          id='neighborhood'
          disabled={isEditingOrCreating}
          {...register('neighborhood')}
          placeholder='Woodstock'
        />
      </FormRow>

      <FormRow htmlFor='theme' label='Theme'>
        <Input
          id='theme'
          disabled={isEditingOrCreating}
          {...register('theme')}
          placeholder='Brunch, Fine Dining, Taproom'
        />
      </FormRow>

      <FormRow htmlFor='location' label='Google Maps URL'>
        <Input
          id='location'
          disabled={isEditingOrCreating}
          {...register('location')}
          placeholder='http://'
        />
      </FormRow>

      <FormRow htmlFor='image' label='Image'>
        <Input
          type='file'
          accept='image/*'
          disabled={isEditingOrCreating}
          {...register('image', {
            required: !isEditing ? `Please upload a guide image` : false,
          })}
        />
      </FormRow>

      <FormRow htmlFor='tags' label='Tags'>
        <Input
          id='tags'
          disabled={isEditingOrCreating}
          {...register('tags')}
          placeholder='Separate with comma'
        />
      </FormRow>

      {/* Add place //TEST - MAKE INTO MODAL LATER*/}
      {/* <div className='divider-t pt-4 mt-4'>
        <h3 className='pb-6 flex items-center gap-1'>
          <Icon name='add' className='text-violet-400' />
          Add place to guide
        </h3>

        <Searchbar searchFor={testPlaces} disabled={isEditingOrCreating} />*/}

      {/* List of places */}
      {/* <SimplePlaceList list={testPlaces} />
      </div>  */}

      <FormActionButtons
        cancel={{ onClick: () => setShowForm(false) }}
        submit={{ disabled: isEditingOrCreating }}
      />
    </Form>
  );
}

export default CreateGuideForm;
