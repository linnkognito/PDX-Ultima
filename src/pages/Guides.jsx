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
              { value: 'name-asc', label: 'Guide name (A-Z)' },
              { value: 'name-desc', label: 'Guide name (Z-A)' },
              {
                value: 'disctance-asc',
                label: 'Distance ↗️',
              },
              {
                value: 'disctance-desc',
                label: 'Distance ↘️',
              },
            ]}
          />
        </ActionbarContainer>

        <GuidesList />
      </div>
    </div>
  );
}

export default Guides;
