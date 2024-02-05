import { ForecastsData } from "../../types/ForecastsData";

export interface WeatherCardProps {
    weatherData: ForecastsData;
    onClick: () => void;
  }