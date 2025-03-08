import { useState } from 'react';

import ActionbarContainer from '../ui/ActionbarContainer';
import Filter from '../ui/Filter';
import SortBy from '../ui/SortBy';
import CreateGuideForm from '../features/guides/CreateGuideForm';
import GuidesList from '../features/guides/GuidesList';
import Button from '../ui/Button';
import SubContainer from '../ui/SubContainer';
import ExampleGuide from '../features/guides/ExampleGuide';

function Guides() {
  const [showForm, setShowForm] = useState();

  return (
    <div>
      <div className='relative'>
        <h2>Guides</h2>
        <Button
          className='absolute top-2 right-0'
          onClick={() => setShowForm((show) => !show)}
        >
          {showForm ? 'Hide form' : 'Add new guide'}
        </Button>
      </div>

      {/* Filter & Sort */}
      <div className='flex flex-col gap-2'>
        <ActionbarContainer className='justify-between'>
          <Filter
            filter='area'
            options={[
              { value: 'all', label: 'Show all' },
              { value: 'se', label: 'SE' },
              { value: 'ne', label: 'NE' },
              { value: 'sw', label: 'SW' },
              { value: 'nw', label: 'NW' },
            ]}
          />
          <SortBy
            options={[
              { value: 'created_at-desc', label: 'Newest' },
              { value: 'created_at-asc', label: 'Oldest' },
              { value: 'guideName-asc', label: 'Guide name (A-Z)' },
              { value: 'guideName-desc', label: 'Guide name (Z-A)' },
            ]}
          />
        </ActionbarContainer>

        {/* Form */}
        {showForm && (
          <SubContainer className='flex flex-col bg-violet-700/10'>
            <h2 className='divider-b pt-3 mb-6'>New Guide</h2>
            <ExampleGuide />

            <div className='px-6'>
              <CreateGuideForm />
            </div>
          </SubContainer>
        )}

        {/* Guides */}
        <GuidesList />
      </div>
    </div>
  );
}

export default Guides;
