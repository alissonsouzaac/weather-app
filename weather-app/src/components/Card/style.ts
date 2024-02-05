import styled from "@emotion/styled";
import { Card } from "@mui/material";
import forecastStore from "../../store/ForecastsStore";

const isSunny = forecastStore.itsSun;

const StyledCard = styled(Card)`
  width: 370px;
  margin: 16px;
  margin: 8px;
  cursor: pointer;
  background-color: ${isSunny ? 'skyblue' : '#445f6bb8'};
  display: flex;
`;

const ContainerImg = styled.div`
  position: sticky;
  left: 300px;
`;

export {StyledCard, ContainerImg}