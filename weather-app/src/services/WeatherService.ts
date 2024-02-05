import axios from 'axios';
import weatherStore from '../store/WeatherStore';
import { ForecastsData } from '../types/ForecastsData';

export async function ForecastService(latitude: string, longitude: string): Promise<ForecastsData | null> {
  try {
    const weatherApi = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL_WEATHER,
    });
    const apiResponse = await weatherApi.get('', {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,relative_humidity_2m,is_day,rain,showers,snowfall,wind_speed_10m',
        hourly: 'temperature_2m,rain,wind_speed_10m,soil_temperature_0cm',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max',
        timezone: 'America/Sao_Paulo',
      },
    });
     const forecastData: ForecastsData = apiResponse.data;
     weatherStore.addForecast(apiResponse.data);
     weatherStore.setForecast(apiResponse.data);

    return forecastData;
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error);
    return null;
  }
}
