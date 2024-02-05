import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForecastService } from '../../services/WeatherService';

import {Typography } from '@mui/material';
import { ButtonsGroup, StyledButton, StyledContainer, StyledTextField } from './style';
import AlertComponent from '../../components/AlertComponent';

const AddForecast: React.FC = () => {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (latitude && longitude) {
      setShowAlert(false);
    }
  }, [latitude, longitude]);

  const handleAddForecast = async () => {
    if (!latitude || !longitude) {
      setShowAlert(true);
      return;
    }

    try {
      await ForecastService(latitude, longitude);
      navigate('/forecasts');
    } catch (error) {
      console.error('Erro ao adicionar previsão:', error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Adicionar Previsão
      </Typography>
      <StyledTextField
        label="Latitude"
        variant="outlined"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <StyledTextField
        label="Longitude"
        variant="outlined"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <ButtonsGroup>
        <StyledButton variant="contained" color="primary" onClick={handleAddForecast}>
          Adicionar Previsão
        </StyledButton>
        <StyledButton variant="contained" onClick={() => navigate('/forecasts')}>
          Ver Previsões
        </StyledButton>
      </ButtonsGroup>
      {showAlert && (
        <AlertComponent
          text="Por favor, preencha os campos de latitude e longitude."
          onClose={handleCloseAlert}
        />
      )}
    </StyledContainer>
  );
};

export default AddForecast;

