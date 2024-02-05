import { ForecastsData } from "../../types/ForecastsData";

export interface ForecastCardProps {
    ForecastData: ForecastsData;
    onClick: () => void;
  }