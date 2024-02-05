// WeatherCard.tsx

import React, { useEffect, useState } from 'react';
import { WeatherData3 } from '../../services/WeatherService';
import weatherStore from '../../store/WeatherStore';

 interface WeatherCardProps {
   weatherData?: WeatherData3;
 }

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
    //const forecast = weatherStore.getForecastsAsJS();
    //const [weatherData, setWeatherData] = useState<any>()
    const [showData, setShowData] = useState<boolean>(false);
  //  var weatherData = weatherStore.getForecastsAsJS()
    useEffect(() => {
        const forecast = weatherStore.getForecastsAsJS()
        const forecasts = weatherStore.getForecasts()
        console.log(forecast);
        console.log(forecasts)
        console.log('Oiii');
        console.log(localStorage.getItem('forecasts'));
      //  setWeatherData(forecast);
      console.log(weatherData)
      if (forecast != null && forecast) {
        console.log('existe weatherData');
        setShowData(true);
      }
    }, [weatherData])

  return (
    <div className="weather-card">
      <h2>Weather Information</h2>
      {showData && weatherData && (
        <>
        <p>Latitude: {weatherData.latitude}</p> 
        <p>Longitude: {weatherData.longitude}</p>
        <p>Temperature: {weatherData.current.temperature_2m} °C</p>
        <p>Relative Humidity: {weatherData.current.relative_humidity_2m}%</p>
        <p>Is Day: {weatherData.current.is_day ? 'Yes' : 'No'}</p>
        <p>Rain: {weatherData.current.rain} mm</p>
        <p>Wind Speed: {weatherData.current.wind_speed_10m} km/h</p>
       </>
      )}
       You can add more information as needed
    </div>
  );
};

export default WeatherCard;
