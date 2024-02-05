import React from 'react';
import Typography from '@mui/material/Typography';
import DailyForecast from '../DailyDatails';
import HourlyForecast from '../HourlyDetails';
import { ForecastIsSunUtils } from '../../utils/ForecastIsSunUtils';
import { CardContentWrapper, StyledCard, TemperatureText, TemperatureWrapper } from './style';
import { ForeCastsDetailsProps } from './type';

const ForecastsDetails: React.FC<ForeCastsDetailsProps> = ({ forecastsData }) => {
  const forecastsImage = ForecastIsSunUtils(forecastsData);

  return (
    <StyledCard className='Cabeca'>
      <CardContentWrapper className='Corpo'>
      <Typography variant="h6" gutterBottom>
          Current forecasts Details
        </Typography>
        <Typography variant="body1">
          Latitude: {forecastsData.latitude}
        </Typography>
        <Typography variant="body1">
          Longitude: {forecastsData.longitude}
        </Typography>
        <Typography variant="body1">
          Humidity: {forecastsData.current.relative_humidity_2m}
        </Typography>
        {forecastsData.current && (
          <>
            <TemperatureWrapper>         
              <TemperatureText variant="body1">
                {forecastsData.current.temperature_2m} °C
              </TemperatureText>
              {forecastsData.current.rain !== undefined && (
                <img src={forecastsImage} alt="forecasts" style={{ width: '60px', height: '60px' }} />
              )}
            </TemperatureWrapper>
          </>
        )}
        <HourlyForecast hourly={forecastsData.hourly}/>
      </CardContentWrapper>
      <DailyForecast daily={forecastsData.daily} />
    </StyledCard>
  );
};

export default ForecastsDetails;
