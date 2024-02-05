import { action, makeObservable, observable, runInAction, toJS } from "mobx";
import { ForecastsData } from "../types/ForecastsData";

class ForecastStore {
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

  addForecast(forecast: ForecastsData) {
    this.forecasts.push(forecast);
  }

  setForecast(forecast: ForecastsData) {
      this.forecast = forecast;
      localStorage.setItem('forecasts', JSON.stringify(toJS(this.forecasts)));
  }

  setForecastsItsSun(itsSun: boolean) {
    this.itsSun = itsSun;
  }
}

const forecastStore = new ForecastStore();

export default forecastStore;
