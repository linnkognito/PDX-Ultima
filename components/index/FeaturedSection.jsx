import GuideCard from '../guides/GuideCard';

function FeaturedSection() {
  return (
    <section aria-labelledby='featured-heading'>
      <h2 id='featured-heading'>Featured guides</h2>
      <div>
        <GuideCard title='Featured' href='/guides/featured' />
        <GuideCard title='Featured' href='/guides/featured' />
        <GuideCard title='Featured' href='/guides/featured' />
      </div>
    </section>
  );
}

export default FeaturedSection;
