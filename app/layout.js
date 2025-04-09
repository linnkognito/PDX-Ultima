import '@/app/_styles/globals.css';
import { Fredoka } from 'next/font/google';
const fredoka = Fredoka({ subsets: ['latin'], display: 'swap' });

import Header from '@/components/ui/Header';
import Button from '@/components/ui/Button';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';

export const metadata = {
  title: {
    template: 'PDX Ultima | %s',
    default: 'PDX Ultima | Explore like a local',
  },
  description:
    'Step into Portland, Oregon with PDX Ultima — your neon-lit guide to the Rose City. From hidden gems to iconic haunts, explore curated city guides and places locals actually love. Save spots, follow guides, and vibe your way through the best of PDX. Loved by locals. Made for explorers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${fredoka.className} flex flex-col bg-background text-text min-w-screen max-w-screen min-h-screen`}
      >
        <Image
          src='/bg.png'
          fill
          priority
          alt='Stylized version of the Portland, Oregon skyline'
          className='object-top object-cover z-0'
        />

        <Header />

        <main>
          {children}
          <Button size='xs'>X-Small</Button>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
          <Button size='xl'>X-Large</Button>
        </main>

        <Footer />
      </body>
    </html>
  );
}
