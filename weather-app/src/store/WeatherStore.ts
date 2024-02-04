import { makeAutoObservable, runInAction } from 'mobx';

interface Forecast {
  // Defina as propriedades necessárias para representar as informações meteorológicas
  temperature: number;
  windSpeed: number;
  humidity: number;
  // ... outras propriedades
}

class WeatherStore {
  forecasts: Forecast[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addForecast(forecast: Forecast) {
    runInAction(() => {
      this.forecasts.push(forecast);
    });
  }

  // Implemente métodos para buscar ou atualizar dados conforme necessário
}

export const weatherStore = new WeatherStore();
