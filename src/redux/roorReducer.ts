import {combineReducers} from 'redux';
import {reducerHome} from '../Screens/ScreenHome/redux/sliceHome';

export const rootReducer = combineReducers({
  reducerHome,
});

export type RootState = ReturnType<typeof rootReducer>;
