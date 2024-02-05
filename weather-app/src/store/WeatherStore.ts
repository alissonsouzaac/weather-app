import { action, makeObservable, observable, runInAction, toJS } from "mobx";
import { ForecastsData } from "../types/ForecastsData";

class WeatherStore {
  forecasts: ForecastsData[] = [];
  forecast: ForecastsData | null = null;
  itsSun = true;

  constructor() {
    makeObservable(this, {
      forecasts: observable,
      forecast: observable,
      itsSun: observable,
      setForecastsItsSun: action,
      addForecast: action,
      setForecast: action,
    });
  }

  addForecast(forecast: any) {
    this.forecasts.push(forecast);
  }

  setForecast(weather: any) {
      this.forecast = weather;
      localStorage.setItem('forecasts', JSON.stringify(toJS(this.forecasts)));
  }

  setForecastsItsSun(itsSun: boolean) {
    this.itsSun = itsSun;
  }
}

const weatherStore = new WeatherStore();

export default weatherStore;
