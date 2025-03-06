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
            { value: 'guideName-asc', label: 'Guide name (A-Z)' },
            { value: 'guideName-desc', label: 'Guide name (Z-A)' },
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
