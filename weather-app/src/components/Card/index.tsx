import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ForecastIsSunUtils } from '../../utils/ForecastIsSunUtils';
import { ContainerImg, StyledCard } from './style';
import { ForecastCardProps } from './types';

const ForecastCard: React.FC<ForecastCardProps> = ({ ForecastData, onClick }) => {
  const forecastsImage = ForecastIsSunUtils(ForecastData);

  return (
    <StyledCard onClick={onClick}>
      <CardContent>
      <Typography variant="h4">
          {ForecastData?.cityName}
      </Typography>
      <Typography variant="h6" gutterBottom>
          Latitude: {ForecastData?.latitude}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Latitude: {ForecastData?.latitude}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Longitude: {ForecastData?.longitude}
        </Typography>
        {ForecastData?.current && (
          <>
            <Typography variant="body1">
              Temperature: {ForecastData.current.temperature_2m} °C
            </Typography>
            
          </>
        )}
      </CardContent>
        {ForecastData.current.rain !== undefined && (
          <ContainerImg>
            <img src={forecastsImage} alt="ForecastData" style={{ width: '80px', height: '80px' }} />
          </ContainerImg>
        )}
    </StyledCard>
  );
};

export default ForecastCard;

