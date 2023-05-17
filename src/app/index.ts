import { PERSIST_STORE_NAME } from '../constants/app.constant';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const middlewares: any = [];

const persistConfig = {
  key: PERSIST_STORE_NAME,
  keyPrefix: '',
  storage,
  whitelist: ['auth', 'theme'],
};

const store: any = configureStore({
  reducer: persistReducer(persistConfig, rootReducer()),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

store.asyncReducers = {};
export const persistor = persistStore(store);

export const injectReducer = (key: string, reducer: any) => {
  if (store.asyncReducers[key]) {
    return false;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(
    persistReducer(persistConfig, rootReducer(store.asyncReducers))
  );
  persistor.persist();
  return store;
};

export default store;
