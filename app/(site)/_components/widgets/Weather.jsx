import { getCurrentWeather } from '../../_services/weather';
import { weatherIcons as icons } from '../../_lib/weatherIcons';

async function Weather({ color = 'bg-secondary' }) {
  const weather = await getCurrentWeather();
  if (!weather) return null;

  const {
    is_day: isDay,
    temperature_2m: temp,
    weathercode: code,
  } = weather.current;

  const iconData = isDay ? icons[code] : icons['night'];
  const icon = iconData?.emoji || '❔';
  const title = iconData?.title || 'Unknown weather';

  return (
    <section
      aria-labelledby='weather-heading'
      aria-live='polite'
      className={`relative z-10 flex-center flex-col px-4 pt-2 pb-5 rounded-xl w-fit shadow-standard ${color}`}
    >
      <h2
        id='weather-heading'
        className='text-2xl font-semibold tracking-wide text-heading'
      >
        Right now:
      </h2>

      <span role='img' aria-label={title} className='text-8xl text-shadow'>
        {icon}
      </span>
      <p className='bg-background px-4 py-2 rounded-xl shadow-standard text-4xl font-semibold tracking-wide text-heading'>
        {temp}&deg;F
      </p>
    </section>
  );
}

export default Weather;
