import styled from "@emotion/styled";
import { Button, Container, TextField } from "@mui/material";

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const StyledTextField = styled(TextField)`
  margin: 10px 0;
`;

const StyledButton = styled(Button)`
  margin: 10px;
`;

const ButtonsGroup = styled.div`
  display:flex;
  justify-content: space-around;
`;

export { StyledContainer, StyledTextField, StyledButton, ButtonsGroup}