import ThemeCard from './ThemeCard';

function ThemeCards({ children }) {
  const themes = [
    {
      emoji: '🍸',
      color: 'bg-orange-200',
      label: 'Cocktails',
      labelColor: 'bg-glow-light',
      image: {
        src: '/cocktail-sky.png',
        alt: 'Illustration of a pink cocktail against a sky background',
      },
    },
    {
      emoji: '🌸',
      color: 'bg-amber-200',
      label: 'Outside',
      labelColor: 'bg-glow-light',
      image: {
        src: '/cherry-blossom.png',
        alt: 'Illustration of a cherry blossom tree',
      },
    },
    {
      emoji: '🧷',
      color: 'bg-lime-200',
      label: 'Dive Bars',
      labelColor: 'bg-glow-light',
      image: {
        src: '/dive.png',
        alt: 'Illustration of a typical old-school American dive bar',
      },
    },
    {
      emoji: '🍸',
      color: 'bg-fuchsia-300',
      label: 'Vegan',
      labelColor: 'bg-glow-light',
      image: {
        src: '/vegan.png',
        alt: 'Illustration of the Portland skyline during sunset',
      },
    },
    {
      emoji: '🍸',
      color: 'bg-cyan-300',
      label: 'Ciders',
      labelColor: 'bg-glow-light',
      image: {
        src: '/cocktail.png',
        alt: 'Illustration of the Portland skyline during sunset',
      },
    },

    {
      emoji: '🍸',
      color: 'bg-pink-300',
      label: 'Foodcarts',
      labelColor: 'bg-glow-light',
      image: {
        src: '/cocktail.png',
        alt: 'Illustration of the Portland skyline during sunset',
      },
    },
    {
      emoji: '🍸',
      color: 'bg-blue-400',
      label: 'Speedy',
      labelColor: 'bg-glow-light',
      image: {
        src: '/cocktail.png',
        alt: 'Illustration of the Portland skyline during sunset',
      },
    },
    {
      emoji: '🥞',
      color: 'bg-emerald-200',
      label: 'Brunch',
      labelColor: 'bg-glow-light',
      image: {
        src: '/waffles.png',
        alt: 'Illustration of the Portland skyline during sunset',
      },
    },
    {
      emoji: '🍸',
      color: 'bg-heading',
      label: 'Thrifting',
      labelColor: 'bg-glow-light',
      image: {
        src: '/cocktail.png',
        alt: 'Illustration of the Portland skyline during sunset',
      },
    },
  ];

  return (
    <div className='grid grid-cols-3 grid-rows-3 w-full h-[700px] py-6 px-6 bg-glow-light'>
      {themes?.map((theme) => (
        <ThemeCard
          image={theme.image}
          color={theme.color}
          label={theme.label}
          labelColor={theme.labelColor}
          className='bg-pink-400'
        />
      ))}

      <div className='w-full col-span-3'>
        {/* <Button theme='guideCard' className='pt-1 my-2'>
          More themes
        </Button> */}
      </div>
    </div>
  );
}

export default ThemeCards;
