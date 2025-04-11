import LocalGuideCard from '../locals/LocalGuideCard';

function LocalsSection() {
  const name = 'Local Guide';
  const bio = 'Lorem ipsum';

  return (
    <section aria-labelledby='locals-heading' className='bg-background'>
      <h2 id='locals-heading'>Meet your locals</h2>

      <div className='grid grid-cols-3'>
        <LocalGuideCard
          name={name}
          bio={bio}
          image={{ src: '/cocktail.png', alt: `Avatar of ${name}` }}
          favGuide='/guide'
        />
      </div>
    </section>
  );
}

export default LocalsSection;
