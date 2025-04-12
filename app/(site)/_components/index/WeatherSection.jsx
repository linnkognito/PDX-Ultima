import SectionHeading from '../ui/SectionHeading';
import Weather from '../widgets/Weather';

function WeatherSection() {
  return (
    <section
      aria-labelledby='weather-heading'
      className='w-full bg-background pb-15'
    >
      <div className='w-fit max-w-site mx-auto'>
        <SectionHeading id='weather-heading'>Today in Portland</SectionHeading>

        <Weather />
      </div>
    </section>
  );
}

export default WeatherSection;
