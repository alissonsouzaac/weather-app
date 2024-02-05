import React, { useEffect, useState } from 'react';
import WeatherCard from '../../components/Card';
import { getFromLocalStorage } from '../../utils/LocalStorageUtils';
import { updateForecastsInLocalStorage } from '../../services/UpdateWeatherStorage';
import { ButtonGroup, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { NoCitiesMessage, SpanNotice, StyledPageContainer, StyledWeatherList } from './style';
import { ForecastsData } from '../../types/ForecastsData';
import { StyledButton } from '../AddForecasts/style';
import forecastStore from '../../store/ForecastsStore';
import ForecastsDetails from '../../components/CurrentForecastDetails';

const ForecastsList: React.FC = () => {
  const [selectedForecast, setSelectedForecast] = useState<ForecastsData | null>(null);
  const [forecastDataList, setForecastDataList] = useState<ForecastsData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const forecastsFromLocalStorage = getFromLocalStorage('forecasts');

    if (forecastsFromLocalStorage) {
      setForecastDataList(forecastsFromLocalStorage);

      if (forecastsFromLocalStorage.length > 0) {
        setSelectedForecast(forecastsFromLocalStorage[0]);

        const firstForecastData = forecastsFromLocalStorage[0];
        if (firstForecastData.current && firstForecastData.current.rain > 0 && firstForecastData.current.snowfall > 0 && firstForecastData.current.showers > 0 ) {
          forecastStore.setForecastsItsSun(false);
        } else {
          forecastStore.setForecastsItsSun(true);
        }
      }
    }
  }, []);

  const handleCardClick = (weatherData: ForecastsData) => {
    setSelectedForecast(weatherData);
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
      {forecastDataList.length === 0 ? (
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
            {forecastDataList.map((forecastData, index) => (
              <WeatherCard
                key={`${forecastData.latitude}_${forecastData.longitude}_${index}`}
                ForecastData={forecastData}
                onClick={() => handleCardClick(forecastData)}
              />
            ))}
          </div>
          {selectedForecast && <ForecastsDetails forecastsData={selectedForecast} />}
        </StyledWeatherList>
      )}
    </StyledPageContainer>
  );
};

export default ForecastsList;
