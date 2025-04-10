import GuideCard from '../guides/GuideCard';

function ThemeSection() {
  return (
    <section aria-labelledby='theme-heading'>
      <h2 id='theme-heading'>Explore by theme</h2>
      <GuideCard title='Themes' href='/guides/themes' />
      <GuideCard title='Themes' href='/guides/themes' />
      <GuideCard title='Themes' href='/guides/themes' />
      <GuideCard title='Themes' href='/guides/themes' />
    </section>
  );
}

export default ThemeSection;
