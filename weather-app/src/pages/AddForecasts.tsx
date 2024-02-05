import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForecastService } from './../services/WeatherService';
import weatherStore from '../store/WeatherStore';
import WeatherCard from '../components/Card';

function AddForecast() {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [forecast, setForecast] = useState<any>();
  //const { forecast } =  weatherStore;
  const forecasts = weatherStore.getForecastsAsJS();

  useEffect(() => {
    console.log(forecast);
    console.log(forecasts);
  }, [forecast, forecasts])

  const handleAddForecast = async () => {
    console.log('handle')
    try {
     const data = await ForecastService(latitude, longitude );
     const forecast = weatherStore.getForecastsAsJS();
     setForecast(forecast)
     console.log(data)
    
    //  navigate('/forecasts');
    } catch (error) {
      console.error('Erro ao adicionar previsão:', error);
    }
  };

  return (
    <div>
        <h1>ADD Fore</h1>
      <label>
        Latitude:
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
      <label>
        Longitude:
        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <button onClick={handleAddForecast}>Adicionar Previsão</button>
      <button onClick={() => navigate('/forecasts')}>Ver Previsões</button>
      <WeatherCard />
    </div>
  );
}

export default AddForecast;
