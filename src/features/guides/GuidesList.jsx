import { useSearchParams } from 'react-router-dom';
import { useGuides } from './useGuides';

import Spinner from '../../ui/Spinner';
import GuideCard from './GuideCard';

function GuideTable() {
  const { isLoading, guides } = useGuides();
  const [searchParams] = useSearchParams();

  if (isLoading) <Spinner />;

  const filterValue = searchParams.get('area') || 'all';

  let filteredGuides;
  if (filterValue === 'all') {
    filteredGuides = guides;
  } else {
    filteredGuides = guides?.filter((guide) =>
      guide.guideArea.toLowerCase().includes(filterValue)
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      {filteredGuides?.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}

export default GuideTable;
