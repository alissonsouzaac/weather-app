import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddForecast from './pages/AddForecasts/AddForecasts';
import ForecastsList from './pages/ListForecasts/ForecastsList';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/forecasts" element={<ForecastsList />} />
        <Route path="/add-forecast" element={<AddForecast />} />
        <Route path="/" element={<Navigate to="/forecasts" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
