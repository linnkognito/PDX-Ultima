import '@/app/_styles/globals.css';
import { Fredoka } from 'next/font/google';
const fredoka = Fredoka({ subsets: ['latin'], display: 'swap' });

import A11yMainContentLink from './_components/ui/A11yMainContentLink';
import Header from '@/app/(site)/_components/ui/Header';
import Footer from '@/app/(site)/_components/ui/Footer';
import BackgroundImage from './_components/ui/BackgroundImage';

export const metadata = {
  title: {
    template: 'PDX Ultima | %s',
    default: 'PDX Ultima | Explore like a local',
  },
  description:
    'Step into Portland, Oregon with PDX Ultima — your neon-lit guide to the Rose City. From hidden gems to iconic haunts, explore curated city guides and places locals actually love. Save spots, follow guides, and vibe your way through the best of PDX. Loved by locals. Made for explorers.',
  lang: 'en',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr'>
      <body
        className={`${fredoka.className} flex flex-col bg-background text-text min-w-screen max-w-screen min-h-screen`}
      >
        <A11yMainContentLink />
        <Header className='shadow-around' />
        <main role='main' id='main-content'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
