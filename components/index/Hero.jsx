function Hero() {
  return (
    <article
      aria-labelledby='home-heading'
      className='min-h-[calc(100vh-200px)]'
    >
      <h1 id='home-heading'>
        Explore Portland Like a Local – City Guides & Hidden Gems
      </h1>
      <h2>You didn’t come all this way for Olive Garden.</h2>
      <p>
        In town for a minute or making it your home? Either way, PDX Ultima has
        the goods. Local picks, no fluff, and guides that don’t play tourist.
      </p>
    </article>
  );
}

export default Hero;
