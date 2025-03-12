import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { createGuide } from '../../services/apiGuides';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import FormActionButtons from '../../ui/FormActionButtons';

function CreateGuideForm({ setShowForm }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createGuide, // no need to pass args
    onSuccess: () => {
      toast.success('New guide created, pow pow!');
      queryClient.invalidateQueries({ queryKey: ['guides'] });
      reset();
    },
    onError: (err) => {
      toast.error(`Creating new guide failed (${err.message})`);
    },
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
    setShowForm(false);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow htmlFor='name' label='Guide name' error={errors?.name?.message}>
        <Input
          id='name'
          disabled={isCreating}
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
          disabled={isCreating}
          {...register('description', {
            required: `Enter a description`,
          })}
          placeholder='Short description of guide'
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

      <FormRow htmlFor='neighborhood' label='Neighborhood'>
        <Input
          id='neighborhood'
          disabled={isCreating}
          {...register('neighborhood')}
          placeholder='Woodstock'
        />
      </FormRow>

      <FormRow htmlFor='theme' label='Theme'>
        <Input
          id='theme'
          disabled={isCreating}
          {...register('theme')}
          placeholder='Brunch, Fine Dining, Taproom'
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

      <FormActionButtons
        cancel={{ onClick: () => setShowForm(false) }}
        submit={{ disabled: isCreating }}
      />
    </Form>
  );
}

export default CreateGuideForm;
