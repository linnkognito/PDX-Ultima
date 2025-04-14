'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Form from '../ui/Form';
import FormRow from '../ui/FormRow';
import TextArea from '../ui/TextArea';
import InputImage from '../ui/InputImage';
import InputChecklist from '../ui/InputChecklist';

function CreateGuideForm({ bgColor = 'bg-rose-50' }) {
  const [tags, setTags] = useState(['some', 'examle', 'tags']);
  const [inputValue, setInputValue] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function addTag(inputValue) {
    const tag = inputValue.toLowerCase().trim();

    if (!tag) return;
    if (tags.includes(tag)) return;

    setTags((prev) => [...prev, tag]);
    setInputValue('');
  }

  function handleKeyDown(e) {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      addTag(inputValue);
    }
  }

  return (
    <Form
      className={`p-div border-2 border-primary shadow-standard rounded-2xl ${bgColor}`}
    >
      <h2 id='form-heading' className='sr-only'>
        Create New Guide
      </h2>

      <FormRow>
        <Label htmlFor='title'>Title</Label>
        <Input
          id='title'
          placeholder='Guide title'
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? 'title-error' : undefined}
          {...register('title', {
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters',
            },
            maxLength: {
              value: 25,
              message: `Title can't be longer than 25 characters`,
            },
            required: 'Title is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor='description'>Description</Label>
        <TextArea
          placeholder='Enter a description'
          aria-invalid={!!errors.description}
          aria-describedby={
            errors.description ? 'description-error' : undefined
          }
          {...register('description', {
            minLength: {
              value: 150,
              message: 'Description must be at least 150 characters',
            },
            maxLength: {
              value: 500,
              message: `Description can't be longer than 500 characters`,
            },
            required: 'Description is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor='tags'>Tags</Label>
        <Input
          id='tags'
          placeholder='Separate tags with comma'
          aria-invalid={!!errors.tags}
          aria-describedby={errors.tags ? 'tags-error' : undefined}
          {...register('tags')}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className='flex gap-2 px-2 pt-1'>
          {tags?.map((tag) => (
            <div
              key={tag}
              className='group flex-center gap-1 w-fit border border-primary px-2 leading-5 rounded-full cursor-pointer bg-semi-primary hover:border-red-500 hover:bg-red-700/10 anim-color'
            >
              <span className='group-hover:line-through group-hover:opacity-50'>
                {tag}
              </span>
              <span
                aria-hidden='true'
                className='font-medium group-hover:text-red-500'
              >
                &times;
              </span>
            </div>
          ))}
        </div>
      </FormRow>

      <FormRow>
        <Label htmlFor='image' className='cursor-pointer'>
          Upload image
        </Label>
        <InputImage errors={errors} />
      </FormRow>

      <FormRow>
        <Label htmlFor='area'>Areas</Label>
        <InputChecklist
          id='area'
          checkboxes={[
            { id: 'area-se', label: 'SE' },
            { id: 'area-ne', label: 'NE' },
            { id: 'area-sw', label: 'SW' },
            { id: 'area-nw', label: 'NW' },
          ]}
          className='flex gap-4'
        />
      </FormRow>

      <FormRow>
        <Label htmlFor='theme'>Theme</Label>
        <Input
          id='theme'
          placeholder='e.g. Brunch, Vegetarian, Tap rooms'
          aria-invalid={!!errors.theme}
          aria-describedby={errors.theme ? 'theme-error' : undefined}
          {...register('theme', {
            minLength: {
              value: 3,
              message: 'Theme must be at least 3 characters',
            },
            maxLength: {
              value: 15,
              message: `Theme can't be longer than 15 characters`,
            },
            required: 'Theme is required',
          })}
        />
      </FormRow>
    </Form>
  );
}

export default CreateGuideForm;
