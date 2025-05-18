import { useEffect, useState } from 'react';
import type { WeatherResponse } from './weatherAboutType';

const getWeatherIcon = (code: number, isDay: number) => {
  return 'cloud';
};

const WeatherAbout = () => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=44.2&longitude=-1.3&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m'
    )
      .then((res) => res.json())
      .then((data: WeatherResponse) => setWeather(data));
  }, []);

  return (
    <>
      {weather ? (
        <>
          <p>Weather code : {weather?.current?.weather_code}</p>
          <p> Temperature : {weather?.current?.temperature_2m}°C</p>
          {weather?.current?.is_day === 1 ? <p>Jour</p> : <p>Nuit</p>}
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default WeatherAbout;
