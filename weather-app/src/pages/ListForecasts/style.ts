import styled from "@emotion/styled";

const StyledWeatherList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const NoCitiesMessage = styled.div`
  margin-top: 20px;
`;

const SpanNotice = styled.span`
  color: blue;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
    display: flex;
`;

export { StyledWeatherList, StyledPageContainer, NoCitiesMessage, SpanNotice, ButtonGroup }