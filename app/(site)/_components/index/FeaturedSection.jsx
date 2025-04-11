import SectionHeading from '../ui/SectionHeading';
import GuideCard from '../guides/GuideCard';

function FeaturedSection() {
  return (
    <section
      aria-labelledby='featured-heading'
      className='w-full p-section bg-background'
    >
      <div className='max-w-site mx-auto pt-10 pb-15 '>
        <SectionHeading
          id='featured-heading'
          color='text-heading'
          className='w-fit mx-auto bg-glow px-4 py-3 rounded-xl shadow-standard-sm'
        >
          Featured guides
        </SectionHeading>

        <div className='grid grid-cols-3 gap-10 pt-3 w-fit mx-auto'>
          <GuideCard
            title='🍹Cocktails'
            width='max-w-[400px]'
            color='bg-gradient-to-t from-primary/30 to-glow'
            button={{ href: '/guides/featured', label: 'Cocktail guide' }}
            image={{
              src: '/cocktail.png',
              alt: 'Illustration of a cocktail class with pink liquid in it and a cherry in it. In the background is the stylized skyline of Portland, Oregon.',
              borderColor: 'border-secondary bg-secondary',
            }}
            description='Feeling froggy? Wanna find out where you can find the sweetest tiki
            drink & the dirtiest martini? Look no further.'
          />

          <GuideCard
            title='🌯Best Burritos'
            width='max-w-[400px]'
            color='bg-gradient-to-t from-glow/30 to-primary'
            button={{ href: '/guides/featured', label: 'Burrito guide' }}
            image={{
              src: '/burrito.png',
              alt: 'Cute illustration of a burrito with a skyblue background with some clouds.',
              borderColor: 'border-glow bg-glow',
            }}
            description='Yeah, everyone loves burritos. We do too. And we ate a lot of them. We think you should probbaly go & eat one too.'
          />

          <GuideCard
            title='🍊Fine dining'
            width='max-w-[400px]'
            color='bg-gradient-to-t from-secondary/30 to-hover'
            button={{ href: '/guides/featured', label: 'View guide' }}
            image={{
              src: '/fine-dining.png',
              alt: 'Cute illustration of a plate with typical Haitian food next to a orange bevarage and greenery in the background.',
              borderColor: 'border-primary bg-primary',
            }}
            description='From blood sausage at Ox to food coma at Le Pigeon to realizing that the Kann-hype is real.'
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
