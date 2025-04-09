import LocalGuideCard from '../locals/LocalGuideCard';

function LocalsSection() {
  const name = 'Local Guide';
  const bio = 'Lorem ipsum';

  return (
    <section aria-labelledby='locals-heading'>
      <h2 id='locals-heading'>Meet your locals</h2>
      <LocalGuideCard name={name} bio={bio} favGuide='/guide' />
      <LocalGuideCard name={name} bio={bio} favGuide='/guide' />
      <LocalGuideCard name={name} bio={bio} favGuide='/guide' />
    </section>
  );
}

export default LocalsSection;
