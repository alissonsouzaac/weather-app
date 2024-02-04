import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forecasts from './pages/Forecasts';
import AddForecast from './pages/AddForecasts';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/forecasts" element={<Forecasts />} />
        <Route path="/add-forecast" element={<AddForecast />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
