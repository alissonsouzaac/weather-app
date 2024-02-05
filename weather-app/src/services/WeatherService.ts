import axios from 'axios';
import { ForecastsData } from '../types/ForecastsData';
import forecastStore from '../store/ForecastsStore';

export async function ForecastService(latitude: string, longitude: string): Promise<ForecastsData | null> {
  const apiKey = 'd4ffe50329f84ecaad2c5756c1ef7511' //process.env.REACT_APP_API_KEY;

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

    const apiURL = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=d4ffe50329f84ecaad2c5756c1ef7511`)

    const cityName = apiURL.data.results[0].components._normalized_city;
     const forecastData: ForecastsData = {
      ...apiResponse.data,
      cityName: cityName,
    };
     forecastStore.addForecast(forecastData);
     forecastStore.setForecast(forecastData);

    return forecastData;
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error);
    return null;
  }
}
