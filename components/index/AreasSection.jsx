import GuideCard from '../guides/GuideCard';

function AreasSection() {
  return (
    <section aria-labelledby='areas-heading'>
      <h2 id='areas-heading'>Explore by area</h2>
      <GuideCard title='Areas' href='/guides/areas' />
      <GuideCard title='Areas' href='/guides/areas' />
      <GuideCard title='Areas' href='/guides/areas' />
      <GuideCard title='Areas' href='/guides/areas' />
    </section>
  );
}

export default AreasSection;
