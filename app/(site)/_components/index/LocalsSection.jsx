import LocalGuideCard from '../locals/LocalGuideCard';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

function LocalsSection() {
  const name = 'Jane Doe';
  const bio =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  const locals = Array.from({ length: 3 }, () => ({
    name,
    bio,
    value: 'someValue',
  }));

  return (
    <section
      aria-labelledby='locals-heading'
      className='realtive w-full bg-background pt-15 pb-20'
    >
      <div className='max-w-site mx-auto px-10 bg-semi-primary pt-4 pb-10 shadow-around'>
        <SectionHeading id='locals-heading' className='w-fit ml-4 px-4 py-3'>
          👋Meet your locals
        </SectionHeading>

        <div className='grid grid-cols-3 gap-4'>
          {locals.map((local) => (
            <LocalGuideCard
              key={local.name}
              name={local.name}
              bio={local.bio}
              image={{ src: '/cocktail.png', alt: `Avatar of ${local.name}` }}
              favGuide='/guide'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocalsSection;
