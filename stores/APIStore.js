import { API } from '../api';
import { makeObservable, observable, action, computed } from 'mobx';

class APIStore {
  daily = []
  weekly = []

  constructor(rootStore) {
    makeObservable(this, {
      daily: observable,
      weekly: observable,
      setDaily: action,
      setWeekly: action,
      getDaily: computed,
      getWeekly: computed,
    })
    this.rootStore = rootStore;
  }
  
  setDaily(data) {
    this.dailyTrending = data;
  }

  async fetchDaily() {
    try {
      const response = await API.get(`/trending/movie/day`)
      this.setDaily(response.results);
    } catch(err) {
      console.log(err);
    }
  }

  get getDaily() {
    return this.dailyTrending
  }

  setWeekly(data) {
    this.weeklyTrending = data;
  }

  async fetchWeekly() {
    try {
      const response = await API.get(`/trending/movie/week`);
      this.setWeekly(response.results);
    } catch (err) {
      console.log(err);
    }
  }

  get getWeekly() {
    return this.weeklyTrending
  }
}

export default APIStore;