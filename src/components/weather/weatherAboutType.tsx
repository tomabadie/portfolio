import type { SVGProps } from 'react';
import type { VariantsProps } from './IconWrapper';

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    is_day: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    weather_code: string;
    cloud_cover: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    is_day: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    cloud_cover: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
  };
}

export type WeatherIconNames =
  | 'cloud-sun-rain'
  | 'cloud-moon-rain'
  | 'cloud-sun'
  | 'cloud-moon'
  | 'cloud-rain'
  | 'cloud-meatball'
  | 'cloud-bolt'
  | 'sun'
  | 'moon'
  | 'cloud'
  | 'smog'
  | 'icicles'
  | 'cloud-showers-heavy'
  | 'snowflake';

export interface WeatherIconProps {
  id: WeatherIconNames;
  iconSvg: React.ReactElement<SVGProps<SVGSVGElement>>;
  iconVariant?: VariantsProps;
}

export type WeatherIconFn = (code: number, isDay: number) => WeatherIconNames;

export type WeatherContentProps = {
  [language in 'en' | 'fr']: {
    title: string;
    dayTime: string;
    nightTime: string;
  };
};
