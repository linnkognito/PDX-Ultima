import { useMutation, useQueryClient } from '@tanstack/react-query';
import { calcDistance, homeLocation } from '../../utils/calcDistance';
import { deleteGuide } from '../../services/apiGuides';

import Icon from '../../common/Icon';
import ButtonIcon from '../../ui/ButtonIcon';
import ButtonTag from '../../ui/ButtonTag';
import toast from 'react-hot-toast';
import { createAndCleanUpArray } from '../../utils/helpers';
import TagsContainer from '../../ui/TagsContainer';

function GuideCard({ guide }) {
  const {
    id,
    name,
    neighborhood,
    area,
    location,
    theme,
    description,
    image,
    tags,
  } = guide;

  console.log(name, image ?? 'nope');

  const queryClient = useQueryClient();
  const tagsArray = tags && createAndCleanUpArray(tags);
  const areaArray = area && createAndCleanUpArray(area);

  // Mutate: Delete guide
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteGuide(id),
    onSuccess: () => {
      toast.success('Guide successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['guides'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const position = guide?.location?.match(/@([-.\d]+),([-.\d]+)/);
  const distance = position
    ? calcDistance(homeLocation, {
        lat: position?.[1],
        lng: position?.[2],
      }) + ' miles'
    : 'N/A';

  return (
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
        <div className='flex gap-1'>
          {/* Distance button */}
          <ButtonIcon className='w-fit px-2'>
            <h4>{distance && distance}</h4>
          </ButtonIcon>

          {/* Google maps link button */}
          <ButtonIcon
            title='View on Google Maps'
            onClick={() =>
              window.open(location, '_blank', 'noopener,noreferrer')
            }
            disabled={!location}
          >
            <Icon name='location_on' />
          </ButtonIcon>

          {/* Delete button */}
          <ButtonIcon
            title='Delete'
            onClick={() => mutate(id)}
            disable={isDeleting}
          >
            <Icon name='delete' />
          </ButtonIcon>
        </div>
      </div>

      <div className='h-fit flex gap-4 pr-6 text-justify text-sm'>
        {/* Image (optional) */}
        <div>
          {image && (
            <img
              className='w-1/5 aspect-square object-cover rounded-bl-md'
              src={image}
              alt={`Picture of ${name}`}
              loading='lazy'
            />
          )}
        </div>

        <div className='flex flex-col gap-4 pt-4 pb-3 place-content-between'>
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
                tagsArray.map((tag) => <ButtonTag key={tag}>{tag}</ButtonTag>)}
            </TagsContainer>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
