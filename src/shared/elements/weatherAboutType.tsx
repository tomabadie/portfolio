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

export interface WeatherIconsListProps {
  sun: WeatherIconProps;
  moon: WeatherIconProps;
  cloud: WeatherIconProps;
  smog: WeatherIconProps;
  icicles: WeatherIconProps;
  'cloud-sun-rain': WeatherIconProps;
  'cloud-moon-rain': WeatherIconProps;
  'cloud-sun': WeatherIconProps;
  'cloud-moon': WeatherIconProps;
  'cloud-showers-heavy': WeatherIconProps;
  'cloud-rain': WeatherIconProps;
  'cloud-meatball': WeatherIconProps;
  'cloud-bolt': WeatherIconProps;
}

export interface WeatherIconProps {
  id: string;
  iconSvg: React.ReactElement<SVGProps<SVGSVGElement>>;
  iconVariant?: VariantsProps;
}
