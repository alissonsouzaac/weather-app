import React, { useEffect, useState } from 'react';
import WeatherCard from '../components/Card';
import weatherStore from '../store/WeatherStore';
import { getFromLocalStorage } from '../utils/LocalStorageUtils';

const Forecasts = () => {
  const [forecasts, setForecasts] = useState<any[]>([]);
  // Implementar lógica para obter dados do localStorage
  useEffect(() => {
    const forecastsFromLocalStorage = getFromLocalStorage('forecasts');

   // const forecasts = weatherStore.getForecastsAsJS()
    console.log(forecastsFromLocalStorage );
    if (forecastsFromLocalStorage) {
      setForecasts(forecastsFromLocalStorage);
    }
  }, []);

  return (
    <div>
        <h1>Tela add</h1>
           {forecasts.map((forecast, index) => (
        // Mapeie os dados e renderize os componentes ForecastCard
        <WeatherCard key={index} weatherData={forecast} />
      ))}
      {/* Mapear os dados do localStorage e renderizar ForecastCard */}
    </div>
  );
}

export default Forecasts;
