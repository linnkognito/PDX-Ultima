import { usePlaces } from './usePlaces';

import Spinner from '../../ui/Spinner';
import PlaceCard from './PlaceCard';

function PlacesList() {
  const { isLoading, places } = usePlaces();

  if (isLoading) <Spinner />;

  return (
    <div className='flex flex-col gap-4'>
      {places?.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default PlacesList;
