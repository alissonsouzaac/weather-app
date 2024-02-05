import { ForecastsData } from "../types/ForecastsData";

export const ForecastIsSunUtils = (forecastsData: ForecastsData) => {
    const sunImage = '/static/images/sun.svg';
    const rainImage = '/static/images/rain.svg';

    const shouldDisplaySun = forecastsData.current && forecastsData.current.rain === 0 && forecastsData.current.snowfall === 0 && forecastsData.current.showers ===0;
    const foreCastsImage = shouldDisplaySun ? sunImage : rainImage;

    return foreCastsImage;
}