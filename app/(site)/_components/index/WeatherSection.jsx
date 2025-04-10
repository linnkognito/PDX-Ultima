import Weather from '../services/Weather';

function WeatherSection() {
  return (
    <section aria-labelledby='weather-heading'>
      <h2 id='weather-heading'>Today in Portland</h2>
      <Weather />
    </section>
  );
}

export default WeatherSection;
