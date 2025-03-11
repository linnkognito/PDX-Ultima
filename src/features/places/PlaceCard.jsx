import Icon from '../../common/Icon';
import ButtonIcon from '../../ui/ButtonIcon';
import ButtonTag from '../../ui/ButtonTag';
import TagsContainer from '../../ui/TagsContainer';
import { capitalizeFirstLetter } from '../../utils/helpers';

function PlaceCard({ place }) {
  const {
    name,
    description,
    image,
    area,
    location,
    category,
    reason,
    tags,
    favorite,
  } = place;

  const categories = category.split(',');
  const tagsArray = tags.split(',');

  return (
    <div className='shadow-md shadow-violet-400 rounded-md'>
      {/* Header */}
      <div className='flex items-center justify-between bg-violet-500 rounded-t-md pr-4'>
        <div className='px-4 pb-2 pt-1'>
          <h3>{name}</h3>

          <div className='flex gap-1'>
            <h4 className='text-sm font-bold text-violet-950'>Area:</h4>
            <p className='text-sm text-violet-300'>{area}</p>
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
          <ButtonIcon
            title={`${favorite ? 'We love this place!' : ''}`}
            bg={`${
              favorite ? 'bg-yellow-700' : 'bg-violet-700 hover:bg-violet-600'
            }`}
          >
            <Icon
              name='star'
              className={`${favorite ? 'text-yellow-300' : ''}`}
            />
          </ButtonIcon>
        </div>
      </div>

      <div className='h-fit flex gap-4 pr-6 text-justify text-sm'>
        <img
          className='w-1/5 aspect-square object-cover rounded-bl-md'
          src={image}
          alt={`Picture of ${name}`}
          loading='lazy'
        />

        <div className='flex flex-col gap-4 pt-4 pb-3 place-content-between'>
          <div className='flex gap-2'>
            {categories.length > 0 &&
              categories.map((category) => (
                <ButtonTag
                  key={category}
                  className='pt-[2px] px-[3px] text-sm'
                  size='sm'
                >
                  {category}
                </ButtonTag>
              ))}
          </div>

          {/* Description */}
          <div className='flex flex-col gap-4'>
            <p className='text-sm'>{description}</p>
            {reason && (
              <div className='flex gap-2'>
                <h4 className='font-bold text-violet-400'>➡️ Go here for:</h4>
                <p>{reason}</p>
              </div>
            )}
          </div>

          {/* Tags */}
          <TagsContainer>
            <ButtonTag>{area}</ButtonTag>
            {tagsArray?.length > 0 &&
              tagsArray.map((tag) => (
                <ButtonTag key={tag}>{capitalizeFirstLetter(tag)}</ButtonTag>
              ))}
          </TagsContainer>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
