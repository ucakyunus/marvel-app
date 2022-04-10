import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { marvelApi } from './marvelApi';
// import { charactersReducer } from '../features/characters';
// import { apiSlice } from '../features/characters/apiSlice';

export const makeStore = () => configureStore({
  reducer: {
    [marvelApi.reducerPath]: marvelApi.reducer,
  },
  middleware: (gDM) => gDM().concat(marvelApi.middleware),
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
