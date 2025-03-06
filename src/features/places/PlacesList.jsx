import Spinner from '../../ui/Spinner';
import PlaceCard from './PlaceCard';
import { usePlaces } from './usePlaces';

function PlacesList() {
  const { isLoading, places } = usePlaces();
  console.log(places);

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
