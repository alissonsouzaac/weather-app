import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_WEATHER;

export const ForecastService = async (latitude: string, longitude: string) => {
    
  try {
    console.log('chamou service')
    console.log(`${BASE_URL}/${latitude}/${longitude}2`)
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=-7.4103&longitude=-35.1128&hourly=temperature_2m&timezone=America%2FSao_Paulo`);
    console.log(response)
    return response.data; 
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error);
    throw error;
  }
};
