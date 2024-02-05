import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format, parseISO } from 'date-fns';
import { DailyForecastProps } from './types';
import { Bar, BarContainer, DailyInfo, StyledCard } from './style';

const DailyForecast: React.FC<DailyForecastProps> = ({ daily }) => {
  return (
    <StyledCard>
        <CardContent>
        <Typography variant="h6" gutterBottom>
          Dayily Forecast
        </Typography>
        {daily && daily.time.length > 0 && (
          <>
            {daily.time.map((day, index) => (
              <BarContainer key={index}>
                  <Typography variant="body1">
                    {index === 0 ? 'Today' : format(parseISO(day), 'EEEE')}
                  </Typography>
                  <DailyInfo>
                    <Typography variant="body1">
                      Min: {daily.temperature_2m_min[index]} °C
                    </Typography>
                    <Bar />
                    <Typography variant="body1">
                      Max: {daily.temperature_2m_max[index]} °C
                    </Typography>
                  </DailyInfo>
              </BarContainer>
            ))}
          </>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default DailyForecast;
