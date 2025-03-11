import { useState } from 'react';
import Button from '../../ui/Button';
import PlaceCard from './PlaceCard';

function ExampleGuide() {
  const [showExample, setShowExample] = useState(false);

  return (
    <div className={`px-6 w-9/10 ${showExample ? 'mb-10' : 'mb-4'}`}>
      <Button className='mb-4' onClick={() => setShowExample((show) => !show)}>
        {showExample ? 'Hide example' : 'Show example'}
      </Button>

      {showExample && (
        <PlaceCard
          place={{
            name: 'Place name',
            description: 'Description goes here',
            area: 'Area input',
            location: '',
            category: 'Category input',
            reason: 'Reason input',
            tags: 'Tags, Go, Here',
            favorite: true,
          }}
        />
      )}
    </div>
  );
}

export default ExampleGuide;
