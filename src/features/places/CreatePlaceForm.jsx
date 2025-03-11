import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { createPlace } from '../../services/apiPlaces';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import FormActionButtons from '../../ui/FormActionButtons';
import Checkbox from '../../ui/Checkbox';

function CreatePlaceForm({ setShowForm }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createPlace, // no need to pass args
    onSuccess: () => {
      toast.success('New place created, just like that');
      queryClient.invalidateQueries({ queryKey: ['places'] });
      reset();
    },
    onError: (err) => {
      toast.error(`Creating new place failed (${err.message})`);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        htmlFor='name'
        label='Name of place'
        error={errors?.name?.message}
      >
        <Input
          id='name'
          disabled={isCreating}
          {...register('name', {
            required: `Enter a Place name`,
          })}
          placeholder='Proper Pint'
        />
      </FormRow>

      <FormRow
        htmlFor='description'
        label='Description'
        error={errors?.description?.message}
      >
        <TextArea
          id='description'
          disabled={isCreating}
          {...register('description', {
            required: `Enter a description`,
          })}
          placeholder='Dog friendly taproom'
        />
      </FormRow>

      <FormRow htmlFor='area' label='Area' error={errors?.area?.message}>
        <Input
          id='area'
          disabled={isCreating}
          {...register('area', {
            required: `Enter one or multiple areas (separated by comma)`,
          })}
          placeholder='SE, NE, SW, NW'
        />
      </FormRow>

      <FormRow htmlFor='category' label='Category'>
        <Input
          id='category'
          disabled={isCreating}
          {...register('category')}
          placeholder='Beer, Winery, Restaurant'
        />
      </FormRow>

      <FormRow htmlFor='reason' label='Go here for...'>
        <Input
          id='neighborhood'
          disabled={isCreating}
          {...register('neighborhood')}
          placeholder='The cider, Fine dining, Atmosphere'
        />
      </FormRow>

      <FormRow htmlFor='location' label='Google Maps URL'>
        <Input
          id='location'
          disabled={isCreating}
          {...register('location')}
          placeholder='http://'
        />
      </FormRow>

      <FormRow htmlFor='image' label='Image'>
        <Input
          type='file'
          accept='image/*'
          id='image'
          disabled={isCreating}
          {...register('image')}
        />
      </FormRow>

      <FormRow htmlFor='tags' label='Tags'>
        <Input
          id='tags'
          disabled={isCreating}
          {...register('tags')}
          placeholder='Separate with comma'
        />
      </FormRow>

      <FormRow htmlFor='favorite' label='Is this a favorite place?'>
        <Checkbox
          id='favorite'
          disabled={isCreating}
          boxLabel='Yes'
          {...register('favorite')}
        />
      </FormRow>

      <FormActionButtons
        cancel={{ onClick: () => setShowForm(false) }}
        submit={{ disabled: isCreating }}
      />
    </Form>
  );
}

export default CreatePlaceForm;
