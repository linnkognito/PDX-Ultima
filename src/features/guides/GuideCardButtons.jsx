import { useDeleteGuide } from './useDeleteGuide';
import { calcDistance, homeLocation } from '../../utils/calcDistance';

import Icon from '../../common/Icon';
import ButtonIcon from '../../ui/ButtonIcon';

function GuideCardButtons({ guide, setShowEditForm }) {
  const { id, location } = guide;
  const { isDeleting, deleteGuide } = useDeleteGuide();

  const position = guide?.location?.match(/@([-.\d]+),([-.\d]+)/);
  const distance = position
    ? calcDistance(homeLocation, {
        lat: position?.[1],
        lng: position?.[2],
      }) + ' miles'
    : 'N/A';

  return (
    <div className='flex gap-1'>
      {/* Distance */}
      <ButtonIcon className='w-fit px-2'>
        <h4>{distance && distance}</h4>
      </ButtonIcon>

      {/* Location */}
      <ButtonIcon
        title='View on Google Maps'
        onClick={() => window.open(location, '_blank', 'noopener,noreferrer')}
        disabled={!location}
      >
        <Icon name='location_on' />
      </ButtonIcon>

      {/* Edit */}
      <ButtonIcon title='Edit' onClick={() => setShowEditForm((show) => !show)}>
        <Icon name='edit' />
      </ButtonIcon>

      {/* Delete */}
      <ButtonIcon
        title='Delete'
        onClick={() => deleteGuide(id)}
        disable={isDeleting}
      >
        <Icon name='delete' />
      </ButtonIcon>
    </div>
  );
}

export default GuideCardButtons;
