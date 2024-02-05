import { action, makeObservable, observable, runInAction, toJS } from "mobx";
import { WeatherData3 } from '../services/WeatherService';

class WeatherStore {
  forecasts: WeatherData3[] = [];
  forecast: WeatherData3 | null = null;

  constructor() {
    makeObservable(this, {
      forecasts: observable,
      forecast: observable,
      addForecast: action,
      setForecast: action,
      getForecastsAsJS: action,
      getForecasts: action
    });

    // Tenta obter os dados do localStorage
    const storedForecasts = localStorage.getItem('forecasts');
    if (storedForecasts) {
      this.forecasts = JSON.parse(storedForecasts);
    }
  }

  addForecast(forecast: any) {
    this.forecasts.push(forecast);
  }

  getForecastsAsJS() {
    return toJS(this.forecast);
  }

  getForecasts() {
    return toJS(this.forecasts);
  }

  setForecast(weather: any) {
    console.log(weather);
  //  runInAction(() => {
      this.forecast = weather;
      localStorage.setItem('forecasts', JSON.stringify(toJS(this.forecasts)));
 //   });
  }
}

const weatherStore = new WeatherStore();

export default weatherStore;
