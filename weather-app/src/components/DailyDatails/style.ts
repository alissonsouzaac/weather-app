import styled from "@emotion/styled";
import { Card } from "@mui/material";

const StyledCard = styled(Card)`
  margin-top: 8px;
  width: 100%;
  background-color: #87ceeb6b;
`;

const Bar = styled.div`
    height: 10px;
    border: 8px;
    border-radius: 5px;
    width: 25%;
    background: linear-gradient(to right, hsl(58.37deg 100% 50% / 54%) 0%, hsl(69.23deg 100% 50%) 100%);
    margin: 6px;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const DailyInfo = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: flex-start;
`;

export { StyledCard, Bar, BarContainer, DailyInfo };