import { calcDistance, homeLocation } from '../../utils/calcDistance';

import Icon from '../../common/Icon';
import ButtonIcon from '../../ui/ButtonIcon';
import ButtonTag from '../../ui/ButtonTag';

function GuideCard({ guide }) {
  const {
    guideName: title,
    guideNeighborhood: neighborhood,
    guideArea: area,
    guideLocation: location,
    guideTheme: theme,
    guideDescription: description,
    guideImage: image,
    guideTags: tags,
  } = guide;
  const tagsArray = tags.split(',');

  const position = guide?.guideLocation?.match(/@([-.\d]+),([-.\d]+)/);
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
          <h3>{title}</h3>

          <div className='flex gap-1'>
            <h4 className='text-sm font-bold text-violet-950'>Area:</h4>
            <p className='text-sm text-violet-300'>
              {neighborhood} ({area})
            </p>
          </div>
        </div>

        <div className='flex gap-1'>
          <ButtonIcon
            title='View on Google Maps'
            onClick={() =>
              window.open(location, '_blank', 'noopener,noreferrer')
            }
            disabled={!location}
          >
            <Icon name='location_on' />
          </ButtonIcon>
          <ButtonIcon className='w-fit px-2' title='View on Google Maps'>
            <h4>{distance && distance}</h4>
          </ButtonIcon>
        </div>
      </div>

      <div className='h-fit flex gap-4 pr-6 text-justify text-sm'>
        {/* Image (optional) */}
        <div>
          {image && (
            <img
              className='w-1/5 aspect-square object-cover rounded-bl-md'
              src={`url(${image})`}
              alt='Beer and handbag on a table with a dog in the background.'
              loading='lazy'
            />
          )}
        </div>

        <div className='flex flex-col gap-4 pt-4 pb-3 place-content-between'>
          <div className='flex gap-2'>
            <h4 className='font-bold text-violet-400'>Theme:</h4>
            <ButtonTag className='pt-[2px] px-[3px] text-sm' size='sm'>
              {theme}
            </ButtonTag>
          </div>

          {/* Description */}
          <p className='text-sm'>
            {description || 'This guide has no description yet.'}
          </p>

          {/* Tags */}
          <div className='flex py-1 px-2 gap-2 bg-violet-800/30 items-center text-sm rounded-md'>
            <h4 className='font-bold text-violet-400'>Tags:</h4>

            <ButtonTag>{area}</ButtonTag>
            <ButtonTag>{neighborhood}</ButtonTag>
            {tagsArray?.length > 0 &&
              tagsArray.map((tag) => (
                <ButtonTag key={tag}>{tag.trim()}</ButtonTag>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
