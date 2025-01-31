import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateHome, User } from '../Utils/typesHome';
import { Student } from '../../../Utils/databaseTypes';

const initialState: InitialStateHome = {
    isLoading: false,
    studetns: [] as User[],
};

const sliceHome = createSlice({
  name: 'sliceHome',
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<User[]>) => {
        return {
            ...state,
            studetns: action.payload,
            isLoading: false,
        };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        return {
            ...state,
            isLoading: action.payload,
        };
    },
  },
});

export const { setStudents, setLoading } = sliceHome.actions;
export const reducerHome = sliceHome.reducer;

