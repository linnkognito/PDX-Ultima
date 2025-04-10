import GuideCard from '../guides/GuideCard';

function FeaturedSection() {
  return (
    <section aria-labelledby='featured-heading' className='p-section'>
      {/* <h2 id='featured-heading'>Featured guides</h2> */}
      <div className='grid grid-cols-3 gap-4'>
        <GuideCard
          title='🍹Cocktails'
          color='bg-gradient-to-t from-primary/30 to-glow'
          button={{ href: '/guides/featured', label: 'View guide' }}
          image={{
            src: '/cocktail.png',
            alt: 'Cute illustration of a burrito with a skyblue background with some clouds.',
          }}
          description='Feeling froggy? Wanna find out where you can find the sweetest tiki
            drink & the dirtiest martini? Look no further.'
        />

        <GuideCard
          title='🌯Best Burritos'
          color='bg-gradient-to-t from-glow/30 to-primary'
          button={{ href: '/guides/featured', label: 'View guide' }}
          image={{
            src: '/burrito.png',
            alt: 'Cute illustration of a burrito with a skyblue background with some clouds.',
          }}
        ></GuideCard>

        <GuideCard
          title='🦇Fine dining'
          color='bg-gradient-to-t from-secondary/30 to-hover'
          button={{ href: '/guides/featured', label: 'View guide' }}
          image={{
            src: '/cocktail.png',
            alt: 'Cute illustration of a burrito with a skyblue background with some clouds.',
          }}
        />
      </div>
    </section>
  );
}

export default FeaturedSection;
