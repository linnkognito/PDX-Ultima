import Link from 'next/link';
import Card from '../containers/Card';
import Logo from './Logo';

function Footer() {
  return (
    <footer
      aria-label='Site footer'
      className='flex gap-1 w-full p-div bg-primary'
    >
      <Card width='min-w-fit' className='flex-center flex-col bg-white'>
        <Logo size='sm' />
        <p>Made with rip from the city</p>
        <p className='text-xs'>&copy; Linn Johansen</p>
      </Card>

      <Card width='flex-center flex-col w-full' className='bg-white'>
        <nav
          aria-label='Footer navigation'
          className='flex gap-40 w-full p-div'
        >
          <div>
            <h3 className='uppercase'>Sitemap</h3>
            <ul>
              <li>
                <Link href='/guides' className='hover:underline'>
                  Guides
                </Link>
              </li>
              <li>
                <Link href='/places' className='hover:underline'>
                  Places
                </Link>
              </li>

              <li>
                <Link href='/auth/login' className='hover:underline'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='uppercase'>About</h3>
            <ul>
              <li>
                <Link href='/about' className='hover:underline'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/privacy' className='hover:underline'>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='uppercase'>Contact</h3>
            <ul>
              <li>
                <Link
                  href='mainto:linnesjohansen@gmail.com'
                  className='hover:underline'
                >
                  Email
                </Link>
              </li>
              <li>
                <Link href='/contact/constribute' className='hover:underline'>
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Card>
    </footer>
  );
}

export default Footer;
