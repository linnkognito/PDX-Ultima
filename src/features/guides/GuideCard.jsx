import { useState } from 'react';

import { createAndCleanUpArray } from '../../utils/helpers';

import ButtonTag from '../../ui/ButtonTag';
import TagsContainer from '../../ui/TagsContainer';
import EditGuideForm from './EditGuideForm';
import GuideCardButtons from './GuideCardButtons';

function GuideCard({ guide }) {
  const { id, name, neighborhood, area, theme, description, image, tags } =
    guide;

  const [showEditForm, setShowEditForm] = useState(false);
  const tagsArray = tags && createAndCleanUpArray(tags);
  const areaArray = area && createAndCleanUpArray(area);

  return (
    <>
      <div className='shadow-md shadow-violet-400 rounded-md'>
        {/* Header */}
        <div className='flex items-center justify-between bg-violet-500 rounded-t-md pr-4'>
          <div className='px-4 pb-2 pt-1'>
            <h3>{name || `Guide #${id}`}</h3>

            <div className='flex gap-1'>
              <h4 className='text-sm font-bold text-violet-950'>Area:</h4>
              <p className='text-sm text-violet-300'>
                {neighborhood ? `${neighborhood} (${area})` : 'Not specified'}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <GuideCardButtons guide={guide} setShowEditForm={setShowEditForm} />
        </div>

        <div className='h-fit flex gap-4 pr-6 text-sm'>
          {/* Image */}
          {image && (
            <img
              className='w-1/6 min-h-full max-h-full aspect-square object-cover rounded-bl-md'
              src={image}
              alt={`Picture of ${name}`}
              loading='lazy'
            />
          )}

          <div className='flex flex-col gap-4 pt-4 pl-4 pb-3 place-content-between'>
            {/* Guide theme */}
            {theme && (
              <div className='flex gap-2'>
                <h4 className='font-bold text-violet-400'>Theme:</h4>

                <ButtonTag className='pt-[2px] px-[3px] text-sm' size='sm'>
                  {theme}
                </ButtonTag>
              </div>
            )}

            {/* Description */}
            <p className='text-sm'>
              {description || 'This guide has no description yet.'}
            </p>

            {/* Tags */}
            {areaArray?.length || neighborhood || tagsArray?.length ? (
              <TagsContainer>
                {areaArray?.length > 0 &&
                  areaArray.map((a) => <ButtonTag key={a}>{a}</ButtonTag>)}

                {neighborhood && <ButtonTag>{neighborhood.trim()}</ButtonTag>}

                {tagsArray?.length > 0 &&
                  tagsArray.map((tag) => (
                    <ButtonTag key={tag}>{tag}</ButtonTag>
                  ))}
              </TagsContainer>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      {showEditForm && (
        <EditGuideForm guide={guide} setShowEditForm={setShowEditForm} />
      )}
    </>
  );
}

export default GuideCard;
