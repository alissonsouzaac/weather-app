import { ForecastService } from "./WeatherService";

export async function updateForecastsInLocalStorage() {
  const forecastsString = localStorage.getItem('forecasts');
  if (!forecastsString) {
    return;
  }

  const forecasts = JSON.parse(forecastsString) as { latitude: number; longitude: number }[];

  for (let i = 0; i < forecasts.length; i++) {
    const { latitude, longitude } = forecasts[i];
    if (latitude !== undefined && longitude !== undefined) {
        const updatedForecast = await ForecastService(latitude.toString(), longitude.toString());

        if (updatedForecast && Object.keys(updatedForecast).length > 0) {
          forecasts[i] = updatedForecast;

          localStorage.setItem('forecasts', JSON.stringify(forecasts));
        }
    }
  }
}
