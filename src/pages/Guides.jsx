import Filter from '../ui/Filter';
import GuidesList from '../features/guides/GuidesList';
import SortBy from '../ui/SortBy';
import ActionbarContainer from '../ui/ActionbarContainer';

function Guides() {
  return (
    <div>
      <h2>Guides</h2>
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

        <GuidesList />
      </div>
    </div>
  );
}

export default Guides;
