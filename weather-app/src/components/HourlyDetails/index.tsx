// HourlyForecast.tsx
import React, { useEffect, useRef } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format, isToday, parseISO } from 'date-fns';
import { HourlyContainer, HourlyInfo, HourlyTemperature, StyledCard } from './style';
import { HourlyForecastProps } from './type';

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourly }) => {
    const hourlyContainerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        // Definir o scroll para mostrar a partir do horário atual
        if (hourlyContainerRef.current) {
          hourlyContainerRef.current.scrollLeft = 0; // Iniciar do início
        }
    }, [hourly]);

    return (
        <StyledCard>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Hourly Forecast
        </Typography>
        {hourly && hourly.time.length > 0 && (
          <HourlyContainer ref={hourlyContainerRef}>
            {hourly.time.map((hour: string, index: number) =>
              isToday(parseISO(hour)) ? (
                <HourlyInfo key={index}>
                  <Typography variant="body1">
                    {format(parseISO(hour), 'H:mm')}
                  </Typography>
                  {hourly.rain[index] !== undefined && (
                    <img
                      src={
                        hourly.rain[index] === 0
                          ? '/static/images/sun.svg'
                          : '/static/images/rain.svg'
                      }
                      alt="Weather"
                      style={{ width: '24px', height: '24px', marginTop: '4px' }}
                    />
                  )}
                  <HourlyTemperature variant="body1">
                    {hourly.temperature_2m[index]} °C
                  </HourlyTemperature>
                </HourlyInfo>
              ) : null
            )}
          </HourlyContainer>
        )}
      </CardContent>
    </StyledCard>
    );
};

export default HourlyForecast;
