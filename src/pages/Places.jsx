// import { useEffect } from 'react';
// import { getPlaces } from '../services/apiPlaces';

import PlaceCard from '../features/places/placeCard';

function Places() {
  // useEffect(() => {
  //   getPlaces().then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <h2>Places</h2>

      <div className='flex flex-col gap-4 pt-6'>
        <PlaceCard />
      </div>
    </div>
  );
}

export default Places;
