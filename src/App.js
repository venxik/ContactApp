import React from 'react'
import Route from './pages/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import RootReducers from './redux/reducers';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk" 
import {SafeAreaProvider} from 'react-native-safe-area-context';
// console.ignoredYellowBox = ['Setting a timer']
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist:["set_create_contact_reducers"]
}
const persistReducers = persistReducer(persistConfig, RootReducers)
const store = createStore(persistReducers, applyMiddleware(thunk))
const persist = persistStore(store)

const App = () => {
  return(
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <Route/>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}
export default App
