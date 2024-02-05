import React, { useEffect, useState } from 'react';
import WeatherCard from '../../components/Card';
import { getFromLocalStorage } from '../../utils/LocalStorageUtils';
import { updateForecastsInLocalStorage } from '../../services/UpdateWeatherStorage';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import weatherStore from '../../store/WeatherStore';
import { NoCitiesMessage, SpanNotice, StyledPageContainer, StyledWeatherList } from './style';
import { ForecastsData } from '../../types/ForecastsData';
import ForecastsDetails from '../../components/ForecastDetails';
import { StyledButton } from '../AddForecasts/style';

const ForecastsList: React.FC = () => {
  const [selectedWeather, setSelectedWeather] = useState<ForecastsData | null>(null);
  const [weatherDataList, setWeatherDataList] = useState<ForecastsData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const forecastsFromLocalStorage = getFromLocalStorage('forecasts');

    if (forecastsFromLocalStorage) {
      console.log(forecastsFromLocalStorage)
      setWeatherDataList(forecastsFromLocalStorage);

      if (forecastsFromLocalStorage.length > 0) {
        setSelectedWeather(forecastsFromLocalStorage[0]);

        const firstWeatherData = forecastsFromLocalStorage[0];
        if (firstWeatherData.current && firstWeatherData.current.rain > 0 && firstWeatherData.current.snowfall > 0 && firstWeatherData.current.showers > 0 ) {
          weatherStore.setForecastsItsSun(false);
        } else {
          weatherStore.setForecastsItsSun(true);
        }
      }
    }
  }, []);

  const handleCardClick = (weatherData: ForecastsData) => {
    setSelectedWeather(weatherData);
  };

  const handleUpdate = async () => {
    await updateForecastsInLocalStorage();
    window.location.reload()
  };
    
  const handleClear = async () => {
    localStorage.removeItem('forecasts');
    window.location.reload()
  };


  return (
    <StyledPageContainer>
      <Typography variant="h4" gutterBottom>
       Forecasts List
      </Typography>
      <ButtonGroup>
        <StyledButton variant="contained" color="primary" onClick={handleUpdate}>
          Atualizar dados da previsão
        </StyledButton>
        <StyledButton variant="contained" onClick={() => navigate('/add-forecast')}>
          Adicionar novas cidades
        </StyledButton>
        <StyledButton variant="contained" color="warning" onClick={handleClear}>
          Limpar todas as cidades
        </StyledButton>
      </ButtonGroup>
      {weatherDataList.length === 0 ? (
        <NoCitiesMessage>
          <Typography variant="body1">
            Nenhuma cidade cadastrada.{' '}
            <SpanNotice onClick={() => navigate('/add-forecast')}>
              Clique aqui
            </SpanNotice>{' '}
            para adicionar uma cidade.
          </Typography>
        </NoCitiesMessage>
      ) : (
        <StyledWeatherList>
          <div>
            {weatherDataList.map((weatherData, index) => (
              <WeatherCard
                key={`${weatherData.latitude}_${weatherData.longitude}_${index}`}
                weatherData={weatherData}
                onClick={() => handleCardClick(weatherData)}
              />
            ))}
          </div>
          {selectedWeather && <ForecastsDetails forecastsData={selectedWeather} />}
        </StyledWeatherList>
      )}
    </StyledPageContainer>
  );
};

export default ForecastsList;
