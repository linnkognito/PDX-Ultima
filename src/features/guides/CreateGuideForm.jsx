import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import Button from '../../ui/Button';

function CreateGuideForm() {
  return (
    <Form>
      <FormRow label='Guide name' id='name'>
        <Input placeholder='Best foodcarts in Portland' />
      </FormRow>

      <FormRow label='Description' id='name'>
        <TextArea placeholder='Short description of guide' />
      </FormRow>

      <FormRow label='Area' id='name'>
        <Input placeholder='SE/NE/SW/NW' />
      </FormRow>

      <FormRow label='Neighborhood' id='name'>
        <Input placeholder='Woodstock' />
      </FormRow>

      <FormRow label='Theme' id='name'>
        <Input placeholder='Brunch, Fine Dining, Taproom' />
      </FormRow>

      <FormRow label='Google Maps URL' id='name'>
        <Input placeholder='http://' />
      </FormRow>

      <FormRow label='Image' id='name'>
        <Input type='file' accept='image/*' />
      </FormRow>

      <FormRow label='Tags' id='name'>
        <Input placeholder='Separate with comma' />
      </FormRow>

      <div className='flex gap-4 pt-2 pb-4 pr-8 justify-end'>
        <Button type='button' theme='cancel'>
          Cancel
        </Button>
        <Button type='submit'>Submit</Button>
      </div>
    </Form>
  );
}

export default CreateGuideForm;
