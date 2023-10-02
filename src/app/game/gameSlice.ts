import { createSlice } from '@reduxjs/toolkit';

// interface InitialStateInterfase {}

const initialState = {};

const gameSlice: any = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export const { setMode } = gameSlice.actions;
export default gameSlice.reducer;
