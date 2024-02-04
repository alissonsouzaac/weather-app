import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForecastService } from './../services/WeatherService';

function AddForecast() {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleAddForecast = async () => {
    console.log('handle')
    try {
     const data = await ForecastService(latitude, longitude );
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
    </div>
  );
}

export default AddForecast;
