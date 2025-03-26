import { useSearchParams } from 'react-router-dom';
import { useGuides } from './useGuides';

import Spinner from '../../ui/Spinner';
import GuideCard from './GuideCard';

function GuidesList() {
  const { isLoading, guides } = useGuides();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // Filter
  const filterValue = searchParams.get('area') || 'all';

  let filteredGuides;
  if (filterValue === 'all') {
    filteredGuides = guides;
  } else {
    filteredGuides = guides?.filter((guide) =>
      guide.area.toLowerCase().includes(filterValue)
    );
  }

  // Sort
  const sortBy = searchParams.get('sortBy') || 'created-new';
  const [field, direction] = sortBy.split('-');

  const sortedGuides = filteredGuides?.sort((a, b) => {
    if (field === 'created_at') {
      return direction === 'asc'
        ? new Date(a.created_at) - new Date(b.created_at)
        : new Date(b.created_at) - new Date(a.created_at);
    }

    if (field === 'name') {
      return direction === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }

    return direction === 'asc' ? a[field] - b[field] : b[field] - a[field];
  });

  return (
    <div className='flex flex-col gap-4'>
      {sortedGuides?.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}

export default GuidesList;
