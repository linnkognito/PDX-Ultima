import GuideCard from '../guides/GuideCard';

function FeaturedSection() {
  return (
    <section aria-labelledby='featured-heading'>
      <h2 id='featured-heading'>Featured guides</h2>
      <GuideCard title='Featured' href='/guides/featured' />
      <GuideCard title='Featured' href='/guides/featured' />
      <GuideCard title='Featured' href='/guides/featured' />
    </section>
  );
}

export default FeaturedSection;
