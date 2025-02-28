import { useEffect } from 'react';
import { getPlaces } from '../services/apiPlaces';

function Places() {
  useEffect(() => {
    getPlaces().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Places</h2>
      <img
        src='https://wiutvoyxphqqwolipruf.supabase.co/storage/v1/object/public/places-images//proper-pint.jpg'
        alt='Picture of a beer and handbag sitting on a table with a dog in the background'
      />
    </div>
  );
}

export default Places;
