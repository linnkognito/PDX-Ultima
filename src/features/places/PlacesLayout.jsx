import { useState } from 'react';

import ActionbarContainer from '../../ui/ActionbarContainer';
import Button from '../../ui/Button';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import PlacesList from '../places/PlacesList';
import SubContainer from '../../ui/SubContainer';
import CreatePlaceForm from './CreatePlaceForm';
import ExamplePlace from './ExamplePlace';

function Places() {
  const [showForm, setShowForm] = useState();

  return (
    <div>
      <div className='relative'>
        <h2>Places</h2>
        <Button
          className='absolute top-2 right-0'
          onClick={() => setShowForm((show) => !show)}
        >
          {showForm ? 'Hide form' : 'Add new place'}
        </Button>
      </div>

      {/* Filter & Sort */}
      <ActionbarContainer className='justify-between'>
        <Filter
          filter='favorite'
          options={[
            { value: 'all', label: 'Show all' },
            { value: 'true', label: 'Favorites' },
          ]}
        />

        <SortBy
          options={[
            { value: 'name-asc', label: 'Name of place (A-Z)' },
            { value: 'name-desc', label: 'Name of place (Z-A)' },
          ]}
        />
      </ActionbarContainer>

      {/* Form */}
      {showForm && (
        <SubContainer className='flex flex-col bg-violet-700/10'>
          <h2 className='divider-b pt-3 mb-6'>New Place</h2>
          <ExamplePlace />

          <div className='px-6'>
            <CreatePlaceForm setShowForm={setShowForm} />
          </div>
        </SubContainer>
      )}

      <div className='flex flex-col gap-4 pt-6'>
        <PlacesList />
      </div>
    </div>
  );
}

export default Places;
