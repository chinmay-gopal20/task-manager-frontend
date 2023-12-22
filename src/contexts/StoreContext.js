import { createContext, useContext } from 'react';
import { RootStore } from '../stores';

const StoreContext = createContext();

export const useStoreContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {

  const rootStore = new RootStore();

  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  )
}