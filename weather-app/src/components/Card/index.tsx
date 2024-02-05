import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ForecastIsSunUtils } from '../../utils/ForecastIsSunUtils';
import { ContainerImg, StyledCard } from './style';
import { WeatherCardProps } from './types';

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, onClick }) => {
  const forecastsImage = ForecastIsSunUtils(weatherData);

  return (
    <StyledCard onClick={onClick}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Latitude: {weatherData?.latitude}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Longitude: {weatherData?.longitude}
        </Typography>
        {weatherData?.current && (
          <>
            <Typography variant="body1">
              Temperature: {weatherData.current.temperature_2m} °C
            </Typography>
            
          </>
        )}
      </CardContent>
        {weatherData.current.rain !== undefined && (
          <ContainerImg>
            <img src={forecastsImage} alt="Weather" style={{ width: '80px', height: '80px' }} />
          </ContainerImg>
        )}
    </StyledCard>
  );
};

export default WeatherCard;

