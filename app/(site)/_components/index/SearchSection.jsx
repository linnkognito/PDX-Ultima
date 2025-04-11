import Searchbar from '../ui/Searchbar';
import SectionHeading from '../ui/SectionHeading';

function SearchSection() {
  return (
    <section
      aria-labelledby='search-heading'
      className='w-full pt-16 pb-16 bg-secondary'
    >
      <SectionHeading
        id='search-heading'
        textShadow={false}
        className='w-fit mx-auto'
      >
        Can't find what you're looking for?
      </SectionHeading>
      <Searchbar
        iconSize='w-10'
        className='w-1/2 text-4xl text-center py-2 border-4 placeholder:font-medium'
      />
    </section>
  );
}

export default SearchSection;
