import { useState } from 'react';
import Button from '../../ui/Button';
import GuideCard from './GuideCard';

function ExampleGuide() {
  const [showExample, setShowExample] = useState(false);

  return (
    <div className={`px-6 w-9/10 ${showExample ? 'mb-10' : 'mb-4'}`}>
      <Button className='mb-4' onClick={() => setShowExample((show) => !show)}>
        {showExample ? 'Hide example' : 'Show example'}
      </Button>

      {showExample && (
        <GuideCard
          guide={{
            id: 'example',
            name: 'Guide name',
            neighborhood: 'Neighborhood input',
            area: 'Area input',
            theme: 'Theme input',
            description: 'Description goes here',
            tags: 'Tags, Go, Here',
          }}
        />
      )}
    </div>
  );
}

export default ExampleGuide;
