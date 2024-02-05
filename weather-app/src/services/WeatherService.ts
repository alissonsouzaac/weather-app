import axios from 'axios';
import weatherStore from '../store/WeatherStore';

export interface WeatherData3 {
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

export async function ForecastService(latitude: string, longitude: string): Promise<WeatherData3 | null> {
  try {
    const BASE_URL = process.env.REACT_APP_BASE_URL_WEATHER
    const weatherApi = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL_WEATHER,
    });
    const apiResponse = await weatherApi.get('', {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m',
        hourly: 'temperature_2m,rain,wind_speed_10m,soil_temperature_0cm',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max',
        timezone: 'America/Sao_Paulo',
      },
    });
   // const apiResponse2 = await axios.get(`${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m&hourly=temperature_2m,rain,wind_speed_10m,soil_temperature_0cm&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FSao_Paulo`)
   //  const apiResponse = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-7.4103&longitude=-35.1128&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m&hourly=temperature_2m,rain,wind_speed_10m,soil_temperature_0cm&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FSao_Paulo');
    //  console.log(apiResponse);
    //  console.log(apiResponse2);
     console.log(apiResponse);
  //   console.log(apiResponse.data)
     const weatherData: WeatherData3 = apiResponse.data;
     weatherStore.addForecast(apiResponse.data);
     weatherStore.setForecast(apiResponse.data);
    //  const currentWeather = {
     //  time: apiResponse.current.time,
    //   temperature: apiResponse.current.temperature_2m,
    //   humidity: apiResponse.current.relative_humidity_2m,
    //   isDay: apiResponse.current.is_day,
    //   rain: apiResponse.current.rain,
    //   windSpeed: apiResponse.current.wind_speed_10m,
   //  };
     
   // console.log(currentWeather)
    //console.log(weatherData)
    return weatherData;
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error);
    return null;
  }
}
