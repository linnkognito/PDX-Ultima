import LocalGuideCard from '../locals/LocalGuideCard';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

function LocalsSection() {
  const locals = [
    {
      id: 'cowboy',
      name: 'Malachi',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: '/malachi.png',
      borderColor: 'bg-secondary border-secondary',
      cardColor: 'bg-glow-light',
      emoji: '🤠',
    },
    {
      id: 'catlady',
      name: 'Katie',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: '/katie.png',
      borderColor: 'bg-primary border-primary',
      cardColor: 'bg-background',
      emoji: '😺',
    },
    {
      id: 'bfam',
      name: 'Toru',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: '/toru.png',
      borderColor: 'bg-glow-light border-glow-light',
      cardColor: 'bg-secondary',
      emoji: '🌹',
    },
  ];

  return (
    <section
      aria-labelledby='locals-heading'
      className='realtive w-full bg-background pt-15 pb-20'
    >
      <div className='w-full max-w-site mx-auto px-10 bg-semi-primary pt-4 pb-10 shadow-around'>
        <SectionHeading id='locals-heading' className='w-fit ml-4 px-4 py-3'>
          👋Meet your locals
        </SectionHeading>

        <div className='grid grid-cols-3 gap-4'>
          {locals.map((local) => (
            <LocalGuideCard
              key={local.id}
              name={local.name}
              emoji={local.emoji}
              bio={local.bio}
              image={{
                src: local.avatar,
                alt: `Avatar of ${local.name}`,
                borderColor: local.borderColor,
              }}
              cardColor={local.cardColor}
              favGuide='/guide'
            />
          ))}
        </div>

        <div className='flex-center w-full pt-8 pb-0'>
          <Button theme='cardCta' size='lg' className='max-w-1/3'>
            More guides
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LocalsSection;
