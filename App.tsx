import 'react-native-gesture-handler';
import React from 'react';

import { DataProvider } from './src/hooks';
import AppNavigation from './src/navigation/App';
import { createStore, action, StoreProvider } from 'easy-peasy';

const store = createStore({
  userName: '',
  setUserName: action((state, payload) => {
    state.userName = payload;
  }),
});

export default function App() {
  return (
    <StoreProvider store={store}>
      <DataProvider>
        <AppNavigation />
      </DataProvider>
    </StoreProvider>
  );
}
