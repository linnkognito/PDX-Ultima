import LocalGuideCard from '../locals/LocalGuideCard';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

function LocalsSection() {
  const locals = [
    {
      id: 'cowboy',
      name: 'Malachi',
      bio: 'City cowboy with a beer in hand and three ideas for where to go next. Loyal to the crew and always in the know.',
      avatar: '/malachi.png',
      borderColor: 'bg-secondary border-secondary',
      cardColor: 'bg-glow-light',
      emoji: '🤠',
    },
    {
      id: 'catlady',
      name: 'Katie',
      bio: 'Fantasy nerd with a brunch radar. Equal parts scientist and cat whisperer, always chasing good coffee and better stories.',
      avatar: '/katie.png',
      borderColor: 'bg-hover border-hover',
      cardColor: 'bg-background',
      emoji: '😺',
    },
    {
      id: 'bfam',
      name: 'Toru',
      bio: 'From mural-making to sushi rolls, Toru’s a graphic designer with dive bar charm and way too many hidden talents.',
      avatar: '/toru.png',
      borderColor: 'bg-glow-light border-glow-light',
      cardColor: 'bg-secondary',
      emoji: '🌹',
    },
  ];

  return (
    <section aria-labelledby='locals-heading' className='bg-background py-20'>
      <div className='px-10 bg-lime-50 pt-4 pb-10 shadow-around rounded-xl'>
        <div className='max-w-site mx-auto '>
          <SectionHeading id='locals-heading' className='w-fit ml-4 px-4 py-3'>
            <span className='text-shadow'>👋</span>Meet your locals
          </SectionHeading>

          <div className='grid grid-cols-3 gap-4'>
            {locals.map((local) => (
              <LocalGuideCard
                key={local.id}
                id={local.id}
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
            <Button
              theme='card'
              color='bg-glow-light'
              size='lg'
              className='max-w-1/3'
            >
              More locals please
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalsSection;
