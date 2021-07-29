import APIStore from "./APIStore";
import { createContext } from 'react';
class RootStore {
  constructor(){
    this.apiStore = new APIStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore());

export default RootStore;