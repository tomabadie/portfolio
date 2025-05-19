import { useEffect, useState } from 'react';
import { useLanguage } from '../components/Language/LanguageContext';
import IconWrapper from './IconWrapper';
import { weatherContent, weatherIconsList } from './weatherAboutData';
import type { WeatherIconFn, WeatherIconProps, WeatherResponse } from './weatherAboutType';

const getWeatherIconName: WeatherIconFn = (code, isDay) => {
  if (code === 0) return isDay === 1 ? 'sun' : 'moon';
  if ([1, 2].includes(code)) return isDay === 1 ? 'cloud-sun' : 'cloud-moon';
  if (code === 3) return 'cloud';
  if ([45, 58].includes(code)) return 'smog';
  if ([51, 53, 55].includes(code)) return 'cloud-rain';
  if ([56, 57].includes(code)) return 'icicles';
  if ([61, 63, 65].includes(code)) return isDay === 1 ? 'cloud-sun-rain' : 'cloud-moon-rain';
  if ([65, 66, 67, 80, 81, 82].includes(code)) return 'cloud-showers-heavy';
  if ([71, 73, 75, 85, 86].includes(code)) return 'snowflake';
  if (code === 77) return 'cloud-meatball';
  if ([95, 96, 99].includes(code)) return 'cloud-bolt';
  return 'cloud';
};

const weatherIconSize = 'h-17 w-17';

const WeatherAbout = () => {
  const { language } = useLanguage();
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<WeatherIconProps | null>(null);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=44.2&longitude=-1.3&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m'
    )
      .then((res) => res.json())
      .then((data: WeatherResponse) => {
        setWeather(data);
        setWeatherIcon(
          weatherIconsList[getWeatherIconName(data.current.weather_code, data.current.is_day)]
        );
      });
  }, []);

  return (
    <>
      {weather ? (
        <>
          <p className="text-center font-semibold">
            {weatherContent[language].title} <br /> Mimizan (France)
          </p>
          <IconWrapper variant={weatherIcon?.iconVariant} wrapperClassName={weatherIconSize}>
            {weatherIcon?.iconSvg}
          </IconWrapper>
          {weather?.current?.is_day === 1 ? (
            <p>
              {weatherContent[language].dayTime} - {weather?.current?.temperature_2m}°C
            </p>
          ) : (
            <p>
              {weatherContent[language].nightTime} -{weather?.current?.temperature_2m}°C
            </p>
          )}
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default WeatherAbout;
