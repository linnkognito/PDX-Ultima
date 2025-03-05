import Filter from '../ui/Filter';
import GuidesList from '../features/guides/GuidesList';

function Guides() {
  return (
    <div>
      <h2>Guides</h2>
      <div className='flex flex-col gap-2'>
        <Filter />
        <GuidesList />
      </div>
    </div>
  );
}

export default Guides;
