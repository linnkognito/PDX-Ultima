import { useForm } from 'react-hook-form';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import Button from '../../ui/Button';

function CreateGuideForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log('form submitted:', data);
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
        <Button type='submit'>Submit</Button>
      </div>
    </Form>
  );
}

export default CreateGuideForm;
