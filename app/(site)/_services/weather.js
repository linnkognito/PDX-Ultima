export async function getCurrentWeather() {
  const res = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=45.5152&longitude=-122.6784&current=temperature_2m,is_day,weathercode&timezone=auto&temperature_unit=fahrenheit'
  );

  const data = await res.json();

  if (!data) return console.error(`Could not fetch error data`);

  return data;
}
