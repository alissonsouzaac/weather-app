export interface ForecastsData {
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
      relative_humidity_2m: string;
      is_day: string;
      rain: string;
      wind_speed_10m: string;
    };
    current: {
      time: string;
      interval: number;
      temperature_2m: number;
      relative_humidity_2m: number;
      is_day: number;
      rain: number;
      snowfall: number;
      showers: number;
      wind_speed_10m: number;
    };
    hourly_units: {
      time: string;
      temperature_2m: string;
      rain: string;
      wind_speed_10m: string;
      soil_temperature_0cm: string;
    };
    hourly: {
      time: string[];
      temperature_2m: number[];
      rain: number[];
      wind_speed_10m: number[];
    };
    daily_units: {
      time: string;
      temperature_2m_max: string;
      temperature_2m_min: string;
      wind_speed_10m_max: string;
      wind_gusts_10m_max: string;
    };
    daily: {
      time: string[];
      temperature_2m_max: number[];
      temperature_2m_min: number[];
      wind_speed_10m_max: number[];
      wind_gusts_10m_max: number[];
    };
  }