import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './roorReducer';

export const store = configureStore({
  reducer: rootReducer,
});
