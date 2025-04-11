import Hero from '@/app/(site)/_components/index/Hero';
import FeaturedSection from '@/app/(site)/_components/index/FeaturedSection';
import AreasSection from '@/app/(site)/_components/index/AreasSection';
import ThemeSection from '@/app/(site)/_components/index/ThemeSection';
import SearchSection from '@/app/(site)/_components/index/SearchSection';
import LocalsSection from '@/app/(site)/_components/index/LocalsSection';
import WeatherSection from '@/app/(site)/_components/index/WeatherSection';
import SignupSection from '@/app/(site)/_components/index/SignupSection';
import ContributeSection from '@/app/(site)/_components/index/ContributeSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <AreasSection />
      <ThemeSection />
      <SearchSection />
      {/* <LocalsSection /> */}
      {/* <WeatherSection /> */}
      {/* <SignupSection /> */}
      {/* <ContributeSection /> */}
    </>
  );
}
