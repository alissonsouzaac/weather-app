import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import forecastStore from "../../store/ForecastsStore";

const isSunny = forecastStore.itsSun;

export const StyledCard = styled(Card)`
  margin-top: 8px;
  width: 100%;
  background-color: ${isSunny ? '#87ceeb6b': '#445f6bb8'};
  height: 195px;
`;

export const HourlyContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-top: 8px;
`;

export const HourlyInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
`;

export const HourlyTemperature = styled(Typography)`
    margin-top: 4px;
    margin-right: 8px;
    margin-bottom: 15px;
    font-size: 10px;
    width: 35px;
`;