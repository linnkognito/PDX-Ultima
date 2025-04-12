import Card from '../containers/Card';
import Logo from './Logo';
import FooterSection from './FooterSection';
import BackgroundImage from './BackgroundImage';
import Weather from '../widgets/Weather';

function Footer() {
  const footerLinks = {
    sitemap: [
      { href: '/guides', label: 'Guides' },
      { href: '/places', label: 'Places' },
      { href: '/auth/login', label: 'Login' },
    ],
    about: [
      { href: '/about', label: 'About' },
      { href: '/privacy', label: 'Privacy' },
    ],
    contact: [
      { href: '/contact', label: 'Contact' },
      { href: 'mainto:linnesjohansen@gmail.com', label: 'Email' },
      { href: '/contact/constribute', label: 'Contribute' },
    ],
  };

  return (
    <footer
      aria-label='Site footer'
      className='relative flex gap-4 w-full h-[254px] p-div text-heading bg-background shadow-around z-[100]'
    >
      <BackgroundImage position='object-center' />

      {/* Logo */}
      <Card
        width='min-w-fit'
        className='flex-center flex-col bg-slight shadow-standard z-10'
      >
        <Logo size='sm' />
        <p>Made with rip from the city</p>
        <p className='text-xs'>&copy; Linn Johansen</p>
      </Card>

      {/* Footer links */}
      <div className='flex-center w-2/4 min-w-fit h-full p-div rounded-xl bg-slight shadow-standard z-10'>
        <nav
          aria-label='Footer navigation'
          className='flex justify-around w-full h-full gap-10 p-div'
        >
          <FooterSection
            title='Sitemap'
            links={footerLinks.sitemap}
            color='bg-glow'
          />
          <FooterSection
            title='About'
            links={footerLinks.about}
            color='bg-primary'
          />
          <FooterSection
            title='Contact'
            links={footerLinks.contact}
            color='bg-secondary'
          />
        </nav>
      </div>

      <Weather />
    </footer>
  );
}

export default Footer;
