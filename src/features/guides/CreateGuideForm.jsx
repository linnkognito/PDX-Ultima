import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import Button from '../../ui/Button';
import { createGuide } from '../../services/apiGuides';
import toast from 'react-hot-toast';

function CreateGuideForm() {
  const { register, handleSubmit, reset } = useForm();

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
    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow htmlFor='name' label='Guide name'>
        <Input
          id='name'
          {...register('name')}
          placeholder='Best foodcarts in Portland'
        />
      </FormRow>

      <FormRow htmlFor='description' label='Description'>
        <TextArea
          id='description'
          {...register('description')}
          placeholder='Short description of guide'
        />
      </FormRow>

      <FormRow htmlFor='area' label='Area'>
        <Input id='area' {...register('area')} placeholder='SE/NE/SW/NW' />
      </FormRow>

      <FormRow htmlFor='neighborhood' label='Neighborhood'>
        <Input
          id='neighborhood'
          {...register('neighborhood')}
          placeholder='Woodstock'
        />
      </FormRow>

      <FormRow htmlFor='theme' label='Theme'>
        <Input
          id='theme'
          {...register('theme')}
          placeholder='Brunch, Fine Dining, Taproom'
        />
      </FormRow>

      <FormRow htmlFor='location' label='Google Maps URL'>
        <Input id='location' {...register('location')} placeholder='http://' />
      </FormRow>

      <FormRow htmlFor='image' label='Image'>
        <Input type='file' accept='image/*' id='image' {...register('image')} />
      </FormRow>

      <FormRow htmlFor='tags' label='Tags'>
        <Input
          id='tags'
          {...register('tags')}
          placeholder='Separate with comma'
        />
      </FormRow>

      <div className='flex gap-4 pt-2 pb-4 pr-8 justify-end'>
        <Button theme='cancel'>Cancel</Button>
        <Button type='submit' disabled={isCreating}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default CreateGuideForm;
