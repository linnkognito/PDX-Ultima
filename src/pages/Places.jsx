import ActionbarContainer from '../ui/ActionbarContainer';
import Filter from '../ui/Filter';
import SortBy from '../ui/SortBy';
import PlacesList from '../features/places/PlacesList';

function Places() {
  return (
    <div>
      <h2>Places</h2>
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

      <div className='flex flex-col gap-4 pt-6'>
        <PlacesList />
      </div>
    </div>
  );
}

export default Places;
