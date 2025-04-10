import Card from '../containers/Card';
import Logo from './Logo';
import FooterSection from './FooterSection';
import BackgroundImage from './BackgroundImage';

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
      className='relative flex gap-4 w-full h-[254px] p-div bg-primary'
    >
      <BackgroundImage position='object-center' />

      {/* Logo */}
      <Card
        width='min-w-fit'
        className='flex-center flex-col bg-background/55 backdrop-blur-xs shadow-standard z-10'
      >
        <Logo size='sm' />
        <p>Made with rip from the city</p>
        <p className='text-xs'>&copy; Linn Johansen</p>
      </Card>

      {/* Footer links */}
      <div className='flex-center w-full max-w-1/2 h-full p-div rounded-xl bg-semi-primary shadow-standard backdrop-blur-xs z-10'>
        <nav
          aria-label='Footer navigation'
          className='flex justify-around w-full h-full gap-30 p-div'
        >
          <FooterSection title='Sitemap' links={footerLinks.sitemap} />
          <FooterSection title='About' links={footerLinks.about} />
          <FooterSection title='Contact' links={footerLinks.contact} />
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
