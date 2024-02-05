import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";

const StyledCard = styled(Card)`
  margin-top: 8px;
  width: 820px;
  height: 74vh;
  margin-right: 6px;
  background-color: #87ceeb6b;
`;

const CardContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #87ceeb;
`;

const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  bottom: 75px;
`;

const TemperatureText = styled(Typography)`
  font-size: 24px;
  margin-right: 8px;
`;

export {StyledCard, CardContentWrapper, TemperatureWrapper, TemperatureText}