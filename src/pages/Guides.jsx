import Filter from '../ui/Filter';
import GuidesList from '../features/guides/GuidesList';

function Guides() {
  return (
    <div>
      <h2>Guides</h2>
      <div className='flex flex-col gap-2'>
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
        <GuidesList />
      </div>
    </div>
  );
}

export default Guides;
