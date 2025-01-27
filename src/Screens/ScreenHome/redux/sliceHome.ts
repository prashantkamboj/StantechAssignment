import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateHome } from '../Utils/typesHome';
import { Student } from '../../../Utils/databaseTypes';

const initialState: InitialStateHome = {
    isLoading: false,
    studetns: [] as Student[],
};

const sliceHome = createSlice({
  name: 'sliceHome',
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<Student[]>) => {
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

